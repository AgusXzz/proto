'use strict';

const { makeRenameFunc } = require('./astUtils');
const { extractCrossRefs } = require('./crossRefExtractor');
const {
   buildIdentifierMap,
   findEnumAliases,
   attachAliasesAndEnumValues,
} = require('./identifierExtractor');
const { extractAllMessageSpecs } = require('./messageSpecExtractor');
const { stringifyEntity } = require('./protoStringifier');

/** Step 1: build cross-module reference tables for every module. */
function buildModulesInfo(modules) {
   const modulesInfo = {};

   for (const module of modules) {
      const moduleName = module.expression.arguments[0].value;
      modulesInfo[moduleName] = { crossRefs: extractCrossRefs(module) };
   }

   return modulesInfo;
}

/** Step 2: resolve every module's identifiers (message/enum names + enum values). */
function populateIdentifiers(modules, modulesInfo, moduleIndentationMap) {
   for (const module of modules) {
      const moduleName = module.expression.arguments[0].value;
      const modInfo = modulesInfo[moduleName];
      const rename = makeRenameFunc(moduleName);

      modInfo.identifiers = buildIdentifierMap(module, rename, moduleIndentationMap);
      const enumAliases = findEnumAliases(module);
      attachAliasesAndEnumValues(module, modInfo.identifiers, rename, enumAliases);
   }
}

/** Step 3: resolve full message specs (field lists) for every module. */
function populateMessageSpecs(modules, modulesInfo) {
   for (const module of modules) {
      const moduleName = module.expression.arguments[0].value;
      const modInfo = modulesInfo[moduleName];
      const rename = makeRenameFunc(moduleName);

      extractAllMessageSpecs(module, {
         identifiers: modInfo.identifiers,
         crossRefs: modInfo.crossRefs,
         modulesInfo,
         rename,
      });
   }
}

/** Step 4: group resolved identifiers by target .proto file name and stringify each. */
const { hasType } = require('./protoImportResolver');

function buildDecodedProtoMap(modules, modulesInfo, moduleIndentationMap) {
   const decodedProtoMap = {};

   for (const module of modules) {
      const moduleName = module.expression.arguments[0].value;
      const protoName = moduleName
         .replace(/^(WAWebProtobufs|WAWebProtobuf|WAProtobufs|WA)/g, '')
         .replace(/\.pb$/, '');
      const modInfo = modulesInfo[moduleName];
      const identifiers = Object.values(modInfo.identifiers);

      const context = { moduleIndentationMap, modInfo };

      for (const identifier of identifiers) {
         // Skip identifiers nested under another one; they get rendered
         // recursively from their parent instead of top-level.
         if (moduleIndentationMap[identifier.name]?.indentation?.length) continue;

         const { name, content } = stringifyEntity(identifier, context);
         const type = content.startsWith('message') ? 'message' : 'enum';

         decodedProtoMap[protoName] = decodedProtoMap[protoName] || [];
         const existingIndex = decodedProtoMap[protoName].findIndex(
            (entry) => entry.name === name
         );

         const entry = {
            protoName,
            name,
            type,
            content,
         };

         if (existingIndex === -1) {
            decodedProtoMap[protoName].push(entry);
         } else {
            // Optional: update if content is different or more complete
            decodedProtoMap[protoName][existingIndex] = entry;
         }

         // Attach hasType helper using the optimized cache from protoImportResolver
         entry.has = (path) => hasType(entry, path);
      }
   }

   return decodedProtoMap;
}

/**
 * Runs the full extraction pipeline over the parsed AST modules and
 * returns a map of `{ [protoFileName]: [{ name, type, content, has }] }`
 * ready to be written to disk.
 */
function runPipeline(modules) {
   const modulesInfo = buildModulesInfo(modules);
   const moduleIndentationMap = {};

   populateIdentifiers(modules, modulesInfo, moduleIndentationMap);
   populateMessageSpecs(modules, modulesInfo);

   return buildDecodedProtoMap(modules, modulesInfo, moduleIndentationMap);
}

module.exports = { runPipeline };
