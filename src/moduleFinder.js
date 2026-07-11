'use strict';

const acorn = require('acorn');
const { fetchText } = require('./httpClient');
const { extractAllExpressions } = require('./astUtils');
const { fetchServiceWorkerInfo } = require('./serviceWorker');

/**
 * One known WhatsApp quirk: this specific enum's type list is split across
 * two JS declarations, which breaks the simple module-body walk below.
 * Kept as an explicit, documented patch (same fix as the original script)
 * rather than a magic string with no explanation.
 */
const KNOWN_SOURCE_PATCHES = [
   { from: 'LimitSharing$Trigger', to: 'LimitSharing$TriggerType' },
];

function applyKnownPatches(source) {
   return KNOWN_SOURCE_PATCHES.reduce(
      (acc, { from, to }) => acc.replaceAll(from, to),
      source
   );
}

/**
 * Downloads WhatsApp Web's bootstrap bundle, parses it, and returns only
 * the top-level module wrappers that define an `internalSpec` — i.e. the
 * protobuf message/enum definitions we actually want to decode.
 */
async function findAppModules() {
   const { bootstrapScriptURL } = await fetchServiceWorkerInfo();
   const bundleSource = await fetchText(bootstrapScriptURL);
   const patchedSource = applyKnownPatches(bundleSource);

   let parsedBody;
   try {
      parsedBody = acorn.parse(patchedSource, { ecmaVersion: 'latest' }).body;
   } catch (err) {
      throw new Error(
         `Failed to parse bootstrap bundle as JavaScript: ${err.message}. ` +
            'The bundle format may have changed upstream.'
      );
   }

   const modulesWithSpec = parsedBody.filter((node) => {
      const expressions = extractAllExpressions(node);
      return expressions.some((e) => e?.left?.property?.name === 'internalSpec');
   });

   if (!modulesWithSpec.length) {
      throw new Error(
         'No modules containing "internalSpec" were found in the bootstrap bundle. ' +
            'WhatsApp may have changed their module wrapper format.'
      );
   }

   console.log(`Found ${modulesWithSpec.length} protobuf-bearing modules.`);
   return modulesWithSpec;
}

module.exports = { findAppModules };
