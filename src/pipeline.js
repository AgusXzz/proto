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
         const type = content.split(name)[0].trim();

         decodedProtoMap[protoName] = decodedProtoMap[protoName] || [];
         const alreadyPresent = decodedProtoMap[protoName].some(
            (entry) => entry.name === name
         );

         if (!alreadyPresent) {
            decodedProtoMap[protoName].push({
               protoName,
               name,
               type,
               content,
               has(path) {
                  const protobuf = require('protobufjs');
                  try {
                     return !!protobuf.parse(content).root.lookup(path);
                  } catch {
                     return false;
                  }
               },
            });
         }
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
