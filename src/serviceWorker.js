'use strict';

const { fetchText } = require('./httpClient');
const config = require('./config');

/**
 * Extracts the numeric client revision from the service worker source.
 * Throws a descriptive error instead of silently returning undefined
 * if WhatsApp changes the format upstream.
 */
function extractClientRevision(serviceWorkerSource) {
   const matches = [
      ...serviceWorkerSource.matchAll(/client_revision\\":([\d.]+),/g),
   ];

   if (!matches.length) {
      throw new Error(
         'Could not find client_revision in service worker source. ' +
            'WhatsApp may have changed the sw.js format — inspect it manually.'
      );
   }

   return matches[0][1];
}

/**
 * Extracts the bootstrap QR (WAWebCM / main bundle) script URL.
 * The original regex silently produced `undefined` on failure since
 * `URLScript[0]` would throw a TypeError deep inside `new URL(...)`
 * with a confusing message. This gives a clear, actionable error instead.
 */
function extractBootstrapScriptURL(serviceWorkerSource) {
   const cleaned = serviceWorkerSource.replaceAll('/*BTDS*/', '');
   const importScriptsMatch = cleaned.match(
      /(?<=importScripts\(["'])(.*?)(?=["']\);)/g
   );

   if (!importScriptsMatch || !importScriptsMatch.length) {
      throw new Error(
         'Could not find an importScripts(...) URL in service worker source. ' +
            'WhatsApp may have changed the sw.js format — inspect it manually.'
      );
   }

   const rawURL = importScriptsMatch[0].replaceAll('\\', '');

   try {
      return new URL(rawURL).href;
   } catch (err) {
      throw new Error(
         `Extracted bootstrap script path "${rawURL}" is not a valid URL: ${err.message}`
      );
   }
}

async function fetchServiceWorkerInfo() {
   const serviceWorkerSource = await fetchText(
      `${config.baseURL}${config.serviceWorkerPath}`
   );

   const revision = extractClientRevision(serviceWorkerSource);
   const bootstrapScriptURL = extractBootstrapScriptURL(serviceWorkerSource);

   console.log(`Current version: 2.3000.${revision}`);
   console.info('Found source JS URL:', bootstrapScriptURL);

   return { revision, bootstrapScriptURL };
}

module.exports = { fetchServiceWorkerInfo, extractClientRevision, extractBootstrapScriptURL };
