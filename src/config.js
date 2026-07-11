'use strict';

module.exports = {
   baseURL: 'https://web.whatsapp.com',
   serviceWorkerPath: '/sw.js',
   outputDir: './proto',
   requestTimeoutMs: 15000,
   maxRetries: 3,
   retryDelayMs: 1000,
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
