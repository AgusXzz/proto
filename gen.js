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

function fixWAProtoImports(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  content = content.replace(/import \* as (\$protobuf) from/g, "import $1 from");
  content = content.replace(/(['"])protobufjs\/minimal(['"])/g, "$1protobufjs/minimal.js$2");

  const marker = 'const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});\n\n';
  const longToStringHelper =
    "function longToString(value, unsigned) {\n" +
    '\tif (typeof value === "string") {\n' +
    "\t\treturn value;\n" +
    "\t}\n" +
    '\tif (typeof value === "number") {\n' +
    "\t\treturn String(value);\n" +
    "\t}\n" +
    "\tif (!$util.Long) {\n" +
    "\t\treturn String(value);\n" +
    "\t}\n" +
    "\tconst normalized = $util.Long.fromValue(value);\n" +
    '\tconst prepared = unsigned && normalized && typeof normalized.toUnsigned === "function"\n' +
    "\t\t? normalized.toUnsigned()\n" +
    "\t\t: normalized;\n" +
    "\treturn prepared.toString();\n" +
    "}\n\n";
  const longToNumberHelper =
    "function longToNumber(value, unsigned) {\n" +
    '\tif (typeof value === "number") {\n' +
    "\t\treturn value;\n" +
    "\t}\n" +
    '\tif (typeof value === "string") {\n' +
    "\t\tconst numeric = Number(value);\n" +
    "\t\treturn numeric;\n" +
    "\t}\n" +
    "\tif (!$util.Long) {\n" +
    "\t\treturn Number(value);\n" +
    "\t}\n" +
    "\tconst normalized = $util.Long.fromValue(value);\n" +
    '\tconst prepared = unsigned && normalized && typeof normalized.toUnsigned === "function"\n' +
    "\t\t? normalized.toUnsigned()\n" +
    '\t\t: typeof normalized.toSigned === "function"\n' +
    "\t\t\t? normalized.toSigned()\n" +
    "\t\t\t: normalized;\n" +
    "\treturn prepared.toNumber();\n" +
    "}\n\n";

  if (!content.includes("function longToString(")) {
    const markerIndex = content.indexOf(marker);
    if (markerIndex === -1) {
      throw new Error("Unable to inject Long helpers: marker not found in WAProto index output");
    }
    content = content.replace(marker, `${marker}${longToStringHelper}${longToNumberHelper}`);
  } else {
    const longToStringRegex = /function longToString\(value, unsigned\) {\n[\s\S]*?\n}\n\n/;
    const longToNumberRegex = /function longToNumber\(value, unsigned\) {\n[\s\S]*?\n}\n\n/;

    if (!longToStringRegex.test(content) || !longToNumberRegex.test(content)) {
      throw new Error("Unable to update Long helpers: existing definitions not found");
    }
    content = content.replace(longToStringRegex, longToStringHelper);
    content = content.replace(longToNumberRegex, longToNumberHelper);
  }

  const longPattern = /([ \t]+d\.(\w+) = )o\.longs === \$?String \? \$util\.Long\.prototype\.toString\.call\(m\.\2\) : o\.longs === \$?Number \? new \$util\.LongBits\(m\.\2\.low >>> 0, m\.\2\.high >>> 0\)\.toNumber\((true)?\) : m\.\2;/g;
  content = content.replace(longPattern, (_match, prefix, field, unsignedFlag) => {
    const unsignedArg = unsignedFlag ? ", true" : "";
    return `${prefix}o.longs === String ? longToString(m.${field}${unsignedArg}) : o.longs === Number ? longToNumber(m.${field}${unsignedArg}) : m.${field};`;
  });

  fs.writeFileSync(filePath, content, "utf8");
  return filePath;
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
    fixWAProtoImports(outputJS)

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
