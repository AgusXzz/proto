'use strict';

/**
 * Configuration for WhatsApp proto extractor.
 * Tuned for reliability with exponential backoff retry strategy.
 */
module.exports = {
   baseURL: 'https://web.whatsapp.com',
   serviceWorkerPath: '/sw.js',
   outputDir: './proto',
   requestTimeoutMs: 15000,  // 15 seconds per request
   maxRetries: 3,             // Total attempts: 1 + 3 retries = 4
   retryDelayMs: 1000,        // Base delay for exponential backoff (1s, 2s, 4s)
   headers: {
      'User-Agent':
         'Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0',
      'Sec-Fetch-Dest': 'script',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': 'same-origin',
      Referer: 'https://web.whatsapp.com/',
      Accept: '*/*',
      'Accept-Language': 'en-US,en;q=0.5',
   },
};
