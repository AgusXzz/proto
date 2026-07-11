'use strict';

const fs = require('fs/promises');
const { existsSync } = require('fs');
const path = require('path');
const { buildProtoFile } = require('./protoImportResolver');
const config = require('./config');

async function writeProtoFiles(decodedProtoMap, outputDir = config.outputDir) {
   const protoNames = Object.keys(decodedProtoMap);

   if (!protoNames.length) {
      throw new Error('No proto definitions were extracted — nothing to write.');
   }

   for (const protoName of protoNames) {
      const dirName = path.join(outputDir, protoName);
      if (!existsSync(dirName)) {
         await fs.mkdir(dirName, { recursive: true });
      }

      const fileContent = buildProtoFile(protoName, decodedProtoMap);
      const destinationPath = path.join(dirName, `${protoName}.proto`);

      await fs.writeFile(destinationPath, fileContent);
      console.log(`Wrote ${destinationPath}`);
   }

   return protoNames.length;
}

module.exports = { writeProtoFiles };
