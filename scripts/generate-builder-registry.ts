import { Project, SyntaxKind, ts } from "ts-morph";
import fs from "fs";
import path from "path";

const typeMap: { [key: string]: string } = {
  visible: "boolean",
  show: "boolean",
  label: "string",
  text: "string",
  headline: "string",
  subheadline: "string",
  heading: "string",
  subheading: "string",
  link: "string",
  url: "string",
  href: "string",
  id: "string",
  image: "file",
  icon: "file",
  color: "color",
  props: "object",
  runtime: "object",
};

function normalize(name: string) {
  return name.toLowerCase().replace(/[^a-z]/gi, "");
}

function guessType(name: string): string {
  const norm = normalize(name);
  for (const key in typeMap) {
    if (norm.includes(normalize(key))) return typeMap[key];
  }
  return "string";
}

function extractEnumValues(typeNode: ts.TypeNode): string[] | null {
  if (ts.isUnionTypeNode(typeNode)) {
    const literals = typeNode.types
      .filter(ts.isLiteralTypeNode)
      .map(t => (t.literal as ts.StringLiteral).text);
    return literals.length > 0 ? literals : null;
  }
  return null;
}


const project = new Project({ tsConfigFilePath: "tsconfig.json" });
const componentsDir = path.resolve("src/devlink/components");
const outputFile = path.resolve("src/builder/registry.ts");

const registryLines: string[] = [];
registryLines.push(`import { Builder } from "@builder.io/react";`);

// ⬅️ MATCH .ts AND .tsx

const files = project.addSourceFilesAtPaths([
  `${componentsDir}/**/*.ts`,
  `${componentsDir}/**/*.tsx`,
  `${componentsDir}/**/*.js`
]).filter(file => {
  const filePath = file.getFilePath();
  return (
    !filePath.endsWith(".d.ts") &&
    !filePath.includes("index.js") &&
    !filePath.includes("devlink.js") &&
    !filePath.includes("interactions.js")
  );
});

console.log(`📦 Matched ${files.length} component files`);

for (const file of files) {
  let componentSymbol = file.getDefaultExportSymbol();
  let componentName: string | undefined;

  if (!componentSymbol) {
    const exports = file.getExportSymbols();
    componentSymbol = exports.find(s => /^[A-Z]/.test(s.getName())); // find first PascalCase export
  }

  if (!componentSymbol) {
    console.log(`⚠️  Skipping ${file.getBaseName()} - no suitable export`);
    continue;
  }

  componentName = componentSymbol.getName();

  if (componentName === "default" || !/^[A-Z]/.test(componentName)) {
    console.log(`⚠️  Skipping ${file.getBaseName()} - invalid component name: ${componentName}`);
    continue;
  }

  const filePathRelativeToComponents = path.relative(componentsDir, file.getFilePath());
  const registryImportPath = filePathRelativeToComponents
    .replace(/\.[tj]sx?$/, "") // remove extension
    .split(path.sep)           // normalize path slashes
    .join("/");                // force POSIX for alias

  registryLines.push(`import { ${componentName} } from "@/devlink/${registryImportPath}";`);

  registryLines.push(`Builder.registerComponent(${componentName}, {`);
  registryLines.push(`  name: "${componentName}",`);
  registryLines.push(`});\n`);
}

console.log("🛠  Starting Builder.io registry generation...");
console.log(`📦 Scanning for components in: ${componentsDir}`);
files.forEach(file => console.log("•", file.getFilePath()));

const componentFiles = project.getSourceFiles();

console.log(`📦 Found ${componentFiles.length} source files`);
componentFiles.forEach((file) => console.log("•", file.getFilePath()));

for (const file of files) {
  const defaultExport = file.getDefaultExportSymbol();
  if (!defaultExport) continue;

  const componentName = defaultExport.getName() || path.basename(file.getFilePath(), ".tsx");
  const relativeImport = path
    .relative(path.dirname(outputFile), file.getFilePath())
    .replace(/\.tsx$/, "");
  registryLines.push(`import ${componentName} from "${relativeImport.startsWith(".") ? relativeImport : "./" + relativeImport}";`);

  const interfaces = file.getInterfaces();
  const props = [];

  for (const iface of interfaces) {
    if (!iface.getName().toLowerCase().includes("props")) continue;

    for (const prop of iface.getProperties()) {
      const name = prop.getName();
      const typeNode = prop.getTypeNode();

      let type = guessType(name);
      const config: any = { name };

      if (typeNode) {
        const enumValues = extractEnumValues(typeNode.compilerNode);
        if (enumValues) {
          config.type = "string";
          config.enum = enumValues;
        } else {
          const text = typeNode.getText();
          if (text.includes("[]") || text.startsWith("Array<")) {
            config.type = "list";
          } else if (text.includes("{") || text.includes("Record<") || text.includes("object")) {
            config.type = "object";
          } else {
            config.type = type;
          }
        }
      } else {
        config.type = type;
      }

      const jsDoc = prop.getJsDocs()?.[0];
      if (jsDoc) {
        const desc = jsDoc.getDescription().trim();
        if (desc) config.description = desc;
      }

      props.push(config);
    }
  }

  registryLines.push(`Builder.registerComponent(${componentName}, {`);
  registryLines.push(`  name: "${componentName}",`);
  if (props.length) {
    registryLines.push(`  inputs: [`);
    for (const p of props) {
      const parts = [`{ name: "${p.name}", type: "${p.type}"`];
      if (p.enum) parts.push(`enum: ${JSON.stringify(p.enum)}`);
      if (p.description) parts.push(`description: ${JSON.stringify(p.description)}`);
      parts.push(`}`);
      registryLines.push("    " + parts.join(", ") + ",");
    }
    registryLines.push(`  ],`);
  }
  registryLines.push(`});\n`);
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, registryLines.join("\n"), "utf8");

console.log(`✅ Builder.io registry generated at: ${outputFile}`);
