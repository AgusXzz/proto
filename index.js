#!/usr/bin/env node
"use strict";

const { findAppModules } = require("./src/moduleFinder");
const { runPipeline } = require("./src/pipeline");
const { writeProtoFiles } = require("./src/protoWriter");

async function main() {
  try {
    console.log("Fetching WhatsApp Web bootstrap bundle...");
    const modules = await findAppModules();

    console.log("Extracting protobuf definitions from modules...");
    const decodedProtoMap = runPipeline(modules);

    console.log("Writing .proto files...");
    const fileCount = await writeProtoFiles(decodedProtoMap);

    console.log(`\nSuccess! Generated ${fileCount} proto file(s) in ./proto`);
  } catch (err) {
    throw err; // Re-throw to be caught by outer catch
  }
}

main().catch((err) => {
  console.error("\nFatal error while generating proto files:");
  console.error(err.message);
  if (process.env.DEBUG) {
    console.error("\nFull stack trace:");
    console.error(err.stack);
  }
  process.exit(1);
});