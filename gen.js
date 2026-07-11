const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const PROTO_DIR = path.resolve(__dirname, "proto");

function getProtoFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  return files
    .flatMap((file) => {
      const filePath = path.join(dir, file.name);
      return file.isDirectory() ? getProtoFiles(filePath) : filePath;
    })
    .filter((file) => file.endsWith(".proto"));
}

const protoFiles = getProtoFiles(PROTO_DIR);
if (protoFiles.length === 0) {
  console.error("No .proto files found in the proto directory.");
  process.exit(1);
}

const generatedModules = [];

protoFiles.forEach((file) => {
  const fileName = path.basename(file);

  try {
    const outputJS = file.replace(/\.proto$/, ".js");

    const pbjsCommand = [
      "pbjs",
      "-t static-module",
      "--no-beautify",
      "-w es6",
      "--no-bundle",
      "--no-delimited",
      "--no-verify",
      "--no-comments",
      "-r default",
      `-o ${outputJS}`,
      file,
    ].join(" ");

    console.log(`Generating JS for ${fileName}...`);
    execSync(pbjsCommand, { stdio: "inherit" });

    generatedModules.push(fileName.replace(/\.proto$/, ""));
  } catch (err) {
    console.error(`Error generating JS for ${fileName}: ${err.message}`);
  }
});

const importLines = generatedModules
  .map((name) => `import { ${name} } from './${name}/${name}.js';`)
  .join("\n");

const mergeLines = generatedModules.map((name) => `  ...${name},`).join("\n");

const indexContent =
  `${importLines}\n\n` + `export const proto = {\n${mergeLines}\n};\n`;

fs.writeFileSync(path.resolve(PROTO_DIR, "index.js"), indexContent, "utf8");

console.log("Protobuf generation complete!");
