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

   // Pre-create all directories first (can be parallelized)
   await Promise.all(
      protoNames.map(async (protoName) => {
         const dirName = path.join(outputDir, protoName);
         if (!existsSync(dirName)) {
            await fs.mkdir(dirName, { recursive: true });
         }
      })
   );

   // Write all files in parallel for better performance
   await Promise.all(
      protoNames.map(async (protoName) => {
         try {
            const fileContent = buildProtoFile(protoName, decodedProtoMap);
            const destinationPath = path.join(outputDir, protoName, `${protoName}.proto`);
            const baseName = `${protoName}.proto`;
            console.log(`Generating ${baseName}`);
            await fs.writeFile(destinationPath, fileContent);
         } catch (err) {
            console.error(`Failed to write proto file for ${protoName}: ${err.message}`);
            throw err;
         }
      })
   );

   return protoNames.length;
}

module.exports = { writeProtoFiles };
