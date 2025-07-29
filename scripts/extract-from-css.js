// extract-from-css.js

import fs from 'fs';
import path from 'path';

const globalCssPath = path.resolve('./src/devlink/components/global.css');
const outputJsonPath = path.resolve('./figma/tokens.json');

function titleCase(str) {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/\b(lg|sm|md|bg|xl|xxl|h[0-6]|ix)\b/gi, (m) => m.toUpperCase())
    .replace(/\b([a-z])/g, (_, c) => c.toUpperCase());
}

function normalizeAlias(value) {
  const alias = value.match(/var\(--([a-zA-Z0-9-_]+)\)/);
  if (!alias) return value;

  const parts = alias[1].split('---');
  if (parts.length >= 2) {
    const cat = titleCase(parts[0].replace(/^_/, ''));
    const rest = parts[1].split('--');
    const sub = titleCase(rest[0] || '');
    const variable = titleCase(rest[1] || parts[2] || '');
    return `${cat}/${sub}/${variable}`;
  }
  return value;
}

function extractTokens(cssContent) {
  const rootMatch = cssContent.match(/:root\s*{([\s\S]*?)}/);
  if (!rootMatch) throw new Error(':root block not found');

  const varLines = rootMatch[1].match(/--([a-zA-Z0-9-_]+):\s*([^;]+);/g) || [];
  const categories = {
    global: {},
    Colors: {},
    Buttons: {},
    Typography: {},
    Links: {},
    Sizing: {},
    Forms: {},
    Cards: {}
  };

  for (const line of varLines) {
    const [_, rawName, rawValue] = line.match(/--([a-zA-Z0-9-_]+):\s*([^;]+);/);

    let type = 'other';
    if (/^#|rgba?|hsla?|color-mix/.test(rawValue)) type = 'color';
    else if (/^[\d.]+(px|rem|em|%)$/.test(rawValue)) type = 'dimension';
    else if (/^var\(--/.test(rawValue)) type = 'alias';

    const segments = rawName.split('---');
    if (segments.length >= 2) {
      const categoryKey = titleCase(segments[0].replace(/^_/, ''));
      const subKey = titleCase(segments[1].split('--')[0].replace(/^_/, ''));
      const variableKey = titleCase(segments[1].split('--')[1] || segments[2] || '');
      const keyPath = `${subKey}/${variableKey}`;

      const entry = {
        value: type === 'alias' ? normalizeAlias(rawValue) : rawValue,
        type
      };

      if (!categories[categoryKey]) {
        categories[categoryKey] = {};
      }
      categories[categoryKey][keyPath] = entry;
    } else {
      categories.global[titleCase(rawName)] = { value: rawValue, type };
    }
  }

  return {
    ...categories,
    $themes: [],
    $metadata: {
      tokenSetOrder: [
        'global',
        'Colors',
        'Buttons',
        'Typography',
        'Links',
        'Sizing',
        'Forms',
        'Cards'
      ]
    }
  };
}

function run() {
  if (!fs.existsSync(globalCssPath)) {
    console.error('❌ global.css not found at', globalCssPath);
    process.exit(1);
  }

  const cssContent = fs.readFileSync(globalCssPath, 'utf-8');
  const tokens = extractTokens(cssContent);

  fs.writeFileSync(outputJsonPath, JSON.stringify(tokens, null, 2));
  console.log('✅ Tokens extracted and saved to', outputJsonPath);
}

run();
