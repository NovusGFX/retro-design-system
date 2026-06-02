#!/usr/bin/env node
// Extracts the :root design tokens from each styles/*/index.html into
// tokens/<slug>.css so agents and projects can import the palette/typography
// without parsing the full demo. Run: node scripts/build-tokens.mjs
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const STYLES_DIR = join(ROOT, "styles");
const OUT_DIR = join(ROOT, "tokens");

mkdirSync(OUT_DIR, { recursive: true });

const slugs = readdirSync(STYLES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

let written = 0;
let empty = [];

for (const slug of slugs) {
  const html = readFileSync(join(STYLES_DIR, slug, "index.html"), "utf8");
  const m = html.match(/:root\s*{([\s\S]*?)}/);
  const body = m ? m[1].trim() : "";
  if (!body) { empty.push(slug); }
  const titleMatch = html.match(/<title>\s*\d*\s*(.*?)\s*<\/title>/i);
  const name = titleMatch ? titleMatch[1] : slug;
  const css =
    `/* ${name} — design tokens\n` +
    `   Extracted from styles/${slug}/index.html. Generated; do not edit by hand.\n` +
    `   Regenerate: node scripts/build-tokens.mjs */\n` +
    `:root {\n${body ? "  " + body.split("\n").map((l) => l.trim()).filter(Boolean).join("\n  ") + "\n" : ""}}\n`;
  writeFileSync(join(OUT_DIR, `${slug}.css`), css);
  written++;
}

console.log(`tokens/: ${written} files written`);
if (empty.length) console.log(`(no :root tokens, emitted empty: ${empty.join(", ")})`);
