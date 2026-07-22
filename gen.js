const { pbjs } = require("protobufjs-cli");
const path = require("path");
const fs = require("fs");
const protobuf = require("protobufjs");

const PROTO_DIR = path.resolve(__dirname, "proto");

/**
 * Mendapatkan daftar semua file .proto di direktori
 */
function getProtoFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  return files
    .flatMap((file) => {
      const filePath = path.join(dir, file.name);
      return file.isDirectory() ? getProtoFiles(filePath) : filePath;
    })
    .filter((file) => file.endsWith(".proto"));
}

/**
 * Melakukan patch pada file JS yang dihasilkan untuk kompatibilitas WhatsApp
 */
function fixWAProtoImports(content) {
  // Fix imports
  content = content.replace(/import \* as (\$protobuf) from/g, "import $1 from");
  content = content.replace(/(['"])protobufjs\/minimal(['"])/g, "$1protobufjs/minimal.js$2");

  const marker = 'const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});\n\n';
  
  // Helper functions untuk Long handling
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
    if (markerIndex !== -1) {
      content = content.replace(marker, `${marker}${longToStringHelper}${longToNumberHelper}`);
    }
  }

  // Patch Long pattern
  const longPattern = /([ \t]+d\.(\w+) = )o\.longs === \$?String \? \$util\.Long\.prototype\.toString\.call\(m\.\2\) : o\.longs === \$?Number \? new \$util\.LongBits\(m\.\2\.low >>> 0, m\.\2\.high >>> 0\)\.toNumber\((true)?\) : m\.\2;/g;
  return content.replace(longPattern, (_match, prefix, field, unsignedFlag) => {
    const unsignedArg = unsignedFlag ? ", true" : "";
    return `${prefix}o.longs === String ? longToString(m.${field}${unsignedArg}) : o.longs === Number ? longToNumber(m.${field}${unsignedArg}) : m.${field};`;
  });
}

async function main() {
  const protoFiles = getProtoFiles(PROTO_DIR);
  if (protoFiles.length === 0) {
    console.error("No .proto files found in the proto directory.");
    process.exit(1);
  }

  const start = Date.now();

  // Opsi standar untuk pbjs
  const baseOptions = {
    target: "static-module",
    beautify: false,
    wrap: "es6",
    bundle: false,
    delimited: false,
    verify: false,
    comments: false,
    root: "default",
    es6: true
  };

  const generatedModules = [];

  // Gunakan caching berbasis mtime untuk performa instan pada file yang tidak berubah
  await Promise.all(protoFiles.map(async (file) => {
    const fileName = path.basename(file, '.proto');
    const outputJS = file.replace(/\.proto$/, ".js");
    generatedModules.push(fileName);

    if (fs.existsSync(outputJS)) {
      const protoStat = fs.statSync(file);
      const jsStat = fs.statSync(outputJS);
      if (protoStat.mtime <= jsStat.mtime) return;
    }

    try {
      const baseName = path.basename(file);
      console.log(`Generating JS: ${baseName}`);
      const root = new protobuf.Root();
      root.loadSync(file).resolveAll();

      await new Promise((resolve, reject) => {
        pbjs.generate(root, baseOptions, (err, output) => {
          if (err) return reject(err);
          fs.writeFileSync(outputJS, fixWAProtoImports(output));
          resolve();
        });
      });
    } catch (err) {
      console.error(`Error generating JS for ${file}: ${err.message}`);
    }
  }));

  generatedModules.sort();

  const importLines = generatedModules
    .map((name) => `import { ${name} } from './${name}/${name}.js';`)
    .join("\n");

  const mergeLines = generatedModules.map((name) => `  ...${name},`).join("\n");

  const indexContent =
    `${importLines}\n\n` + `export const proto = {\n${mergeLines}\n};\n`;

  fs.writeFileSync(path.resolve(PROTO_DIR, "index.js"), indexContent, "utf8");

  const end = Date.now();
  console.log(`Protobuf generation complete in ${end - start}ms!`);
}

main();
