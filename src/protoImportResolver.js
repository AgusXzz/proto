'use strict';

const protobuf = require('protobufjs');

const TYPE_REF_PATTERN =
   /(?<=optional|required|repeated|oneof|map|extensions|reserved<)\s*([\w.]+)(?=[\s>])/g;

// protobuf.parse() is the expensive part of import resolution. hasType()
// used to re-parse the same entry.content string from scratch on every
// call — and it gets called once per (node × typeName × otherProto ×
// entry), so large proto files with lots of cross-references could end up
// re-parsing identical text thousands of times. Cache the parsed root per
// entry so each one is only ever parsed once.
const parsedRootCache = new WeakMap();

function getParsedRoot(entry) {
   if (parsedRootCache.has(entry)) return parsedRootCache.get(entry);

   let root = null;
   try {
      root = protobuf.parse(entry.content).root;
   } catch {
      root = null;
   }

   parsedRootCache.set(entry, root);
   return root;
}

function hasType(entry, path) {
   const root = getParsedRoot(entry);
   if (!root) return false;

   try {
      return !!root.lookup(path);
   } catch {
      return false;
   }
}

// Computed once instead of on every match inside the hot loop.
const SCALAR_TYPES = new Set(Object.keys(protobuf.types.basic).filter(Boolean));

// Checks whether `typeName` (optionally qualified as `${node.name}.${typeName}`)
// resolves against any entry in a given proto file's entry list.
function existsInEntries(entries, node, typeName) {
   return entries.some(
      (entry) =>
         hasType(entry, `${node.name}.${typeName}`) || hasType(entry, typeName)
   );
}

/**
 * Scans one proto file's message nodes for type references that point at
 * another generated proto file, and returns which other files need to be
 * imported plus which specific type -> file mapping was found.
 */
function findRequiredImports(protoName, decodedProtoMap) {
   const importsNeeded = new Set();
   const externalTypeRefs = new Map();
   const unresolvedTypes = new Set();
   const ownEntries = decodedProtoMap[protoName];

   for (const node of ownEntries) {
      if (node.type !== 'message') continue;

      const matches = [...node.content.matchAll(TYPE_REF_PATTERN)];
      if (!matches.length) continue;

      for (const [rawMatch] of matches) {
         const typeName = rawMatch.trim();
         if (SCALAR_TYPES.has(typeName)) continue;

         // Most cross-references are actually to a *sibling* top-level
         // message/enum within the very same proto file (e.g. `Message`
         // referencing `ContextInfo`, both top-level in E2E.proto) — not
         // something nested inside the current node's own text. Checking
         // only `node`'s own content (as before) missed these entirely and
         // caused constant false "not found anywhere" warnings. Check every
         // entry in this proto file first.
         if (existsInEntries(ownEntries, node, typeName)) continue;

         let foundInProto = null;

         for (const otherProto in decodedProtoMap) {
            if (otherProto === protoName) continue;

            if (existsInEntries(decodedProtoMap[otherProto], node, typeName)) {
               foundInProto = otherProto;
               break;
            }
         }

         if (foundInProto) {
            importsNeeded.add(foundInProto);
            externalTypeRefs.set(typeName, foundInProto);
         } else {
            // Not resolvable in this file and not found in any other
            // extracted proto either — the module that defines this type
            // was never captured (commonly because it lives in a
            // lazy-loaded chunk the bootstrap bundle doesn't include).
            // pbjs/protoc will fail on this reference later, so flag it
            // now while it's still clear which field caused it.
            console.warn(
               `[protoImportResolver] "${typeName}" referenced in ${protoName}.${node.name} ` +
                  `was not found in any extracted proto — this field will be unresolved ` +
                  `when compiling ${protoName}.proto.`
            );

            // Only simple (undotted) names can safely get an auto-generated
            // empty stub — a dotted reference like "Foo.Bar" can't be
            // declared as a top-level message, so those are left as a
            // warning only and will still fail at pbjs/protoc time.
            if (!typeName.includes('.')) {
               unresolvedTypes.add(typeName);
            }
         }
      }
   }

   return { importsNeeded, externalTypeRefs, unresolvedTypes };
}

/**
 * Rewrites field declarations that reference an external type so they use
 * the fully-qualified `otherProto.TypeName` form expected once an import
 * statement is added.
 */
function qualifyExternalTypeRefs(content, externalTypeRefs) {
   let updated = content;
   externalTypeRefs.forEach((protoFile, typeName) => {
      const regex = new RegExp(
         `(optional|required|implicit|repeated|map<)\\s+(${typeName})(?=\\s|>)`,
         'g'
      );
      updated = updated.replace(regex, `$1 ${protoFile}.${typeName}`);
   });
   return updated;
}

function buildProtoFile(protoName, decodedProtoMap) {
   const { importsNeeded, externalTypeRefs, unresolvedTypes } = findRequiredImports(
      protoName,
      decodedProtoMap
   );

   const updatedContents = decodedProtoMap[protoName].map((entry) =>
      qualifyExternalTypeRefs(entry.content, externalTypeRefs)
   );

   const uniqueContents = Array.from(new Set(updatedContents));
   const importLines = Array.from(importsNeeded)
      .map((proto) => `import "../${proto}/${proto}.proto";`)
      .join('\n')
      .trim();

   // Placeholder messages for types that genuinely don't exist anywhere in
   // the extracted output (see the warning logged in findRequiredImports).
   // Without these, pbjs/protoc refuses to compile the *entire* file over
   // a single missing type, even when everything else in it is valid.
   // Fields using a stub will simply fail to encode/decode correctly —
   // that's expected, it's a placeholder, not real data.
   const stubBlock = unresolvedTypes.size
      ? '\n\n' +
        `// --- Auto-generated placeholders for unresolved types ---\n` +
        `// These types could not be found in any extracted proto (see\n` +
        `// the [protoImportResolver] warnings logged during generation).\n` +
        Array.from(unresolvedTypes)
           .map((typeName) => `message ${typeName} {}`)
           .join('\n')
      : '';

   return (
      `syntax = "proto2";\npackage ${protoName};\n\n` +
      `${importLines ? importLines + '\n\n' : ''}` +
      uniqueContents.join('\n\n') +
      stubBlock
   );
}

module.exports = { buildProtoFile };
