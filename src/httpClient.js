'use strict';

const config = require('./config');

class HttpError extends Error {
   constructor(message, { url, status, cause } = {}) {
      super(message);
      this.name = 'HttpError';
      this.url = url;
      this.status = status;
      this.cause = cause;
   }
}

function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch a URL as text, with timeout + retry with backoff.
 * Replaces request-promise-native (deprecated, unmaintained, has open CVEs)
 * with native fetch, which every supported Node runtime already ships.
 */
async function fetchText(url, { retries = config.maxRetries } = {}) {
   let lastError;

   for (let attempt = 1; attempt <= retries; attempt += 1) {
      const controller = new AbortController();
      const timeout = setTimeout(
         () => controller.abort(),
         config.requestTimeoutMs
      );

      try {
         const response = await fetch(url, {
            headers: config.headers,
            signal: controller.signal,
         });

         if (!response.ok) {
            throw new HttpError(
               `Request failed with status ${response.status}`,
               { url, status: response.status }
            );
         }

         return await response.text();
      } catch (err) {
         lastError = err;
         const isLastAttempt = attempt === retries;
         const reason = err.name === 'AbortError' ? 'timed out' : err.message;
         console.warn(
            `[httpClient] attempt ${attempt}/${retries} for ${url} failed: ${reason}`
         );

         if (!isLastAttempt) {
            await sleep(config.retryDelayMs * attempt);
         }
      } finally {
         clearTimeout(timeout);
      }
   }

   throw new HttpError(`Failed to fetch ${url} after ${retries} attempts`, {
      url,
      cause: lastError,
   });
}

module.exports = { fetchText, HttpError };
