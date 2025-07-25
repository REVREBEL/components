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

const files = project.addSourceFilesAtPaths(`${componentsDir}/**/*.tsx`);
const registryLines: string[] = [];
registryLines.push(`import { Builder } from "@builder.io/react";`);

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
