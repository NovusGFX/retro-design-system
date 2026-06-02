#!/usr/bin/env node
// Generates manifest.json from styles/*/index.html.
// Palette is auto-extracted from each file's :root block; curated metadata
// (name, era, year, tags) is merged in by slug. Run: node scripts/build-manifest.mjs
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const STYLES_DIR = join(ROOT, "styles");
const MAX_PALETTE = 8;

// Curated metadata keyed by folder slug. Palette is NOT here (auto-extracted).
const META = {
  "01-mac-system-7":        { name: "Mac System 7",        era: "Desktop OS",   year: 1991, tags: ["mac", "monochrome", "bevel", "classic"] },
  "02-windows-95":          { name: "Windows 95",          era: "Desktop OS",   year: 1995, tags: ["windows", "bevel", "chrome", "classic"] },
  "03-windows-xp-luna":     { name: "Windows XP Luna",     era: "Desktop OS",   year: 2001, tags: ["windows", "glossy", "blue", "luna"] },
  "04-aqua-osx":            { name: "Mac OS X Aqua",       era: "Desktop OS",   year: 2001, tags: ["mac", "glossy", "gel", "aqua"] },
  "05-amiga-workbench":     { name: "Amiga Workbench",     era: "Desktop OS",   year: 1985, tags: ["amiga", "retro", "orange", "blue"] },
  "06-nextstep":            { name: "NeXTSTEP",            era: "Desktop OS",   year: 1989, tags: ["next", "greyscale", "unix", "chiseled"] },
  "07-beos":                { name: "BeOS",                era: "Desktop OS",   year: 1996, tags: ["beos", "yellow", "tab", "media"] },
  "08-teletext":            { name: "Teletext",            era: "Broadcast",    year: 1974, tags: ["teletext", "blocky", "primary", "tv"] },
  "09-crt-phosphor":        { name: "CRT Phosphor Terminal", era: "Terminal",   year: 1980, tags: ["terminal", "green", "scanline", "phosphor"] },
  "10-dos-cga":             { name: "DOS CGA",             era: "Terminal",     year: 1981, tags: ["dos", "cyan", "magenta", "4-color"] },
  "11-8bit-arcade":         { name: "8-Bit Arcade",        era: "Gaming",       year: 1983, tags: ["arcade", "pixel", "neon", "8-bit"] },
  "12-frutiger-aero":       { name: "Frutiger Aero",       era: "Web/UI",       year: 2007, tags: ["aero", "glossy", "nature", "glass"] },
  "13-winamp-skin":         { name: "Winamp Skin",         era: "App",          year: 1997, tags: ["winamp", "media", "skin", "lcd"] },
  "14-geocities-web10":     { name: "GeoCities Web 1.0",   era: "Web",          year: 1996, tags: ["web1.0", "kitsch", "gif", "tiled"] },
  "15-cassette-futurism":   { name: "Cassette Futurism",   era: "Sci-Fi",       year: 1979, tags: ["scifi", "control-panel", "amber", "analog"] },
  "16-vaporwave":           { name: "Vaporwave",           era: "Aesthetic",    year: 2011, tags: ["vaporwave", "pastel", "synth", "neon"] },
  "17-memphis":             { name: "Memphis",             era: "Design",       year: 1981, tags: ["memphis", "postmodern", "primary", "squiggle"] },
  "18-ps1-tech":            { name: "PS1 Tech",            era: "Gaming",       year: 1994, tags: ["playstation", "low-poly", "tech", "gradient"] },
  "19-os2-warp":            { name: "OS/2 Warp",           era: "Desktop OS",   year: 1994, tags: ["os2", "ibm", "bevel", "blue"] },
  "20-macos9-platinum":     { name: "Mac OS 9 Platinum",   era: "Desktop OS",   year: 1999, tags: ["mac", "platinum", "pinstripe", "grey"] },
  "21-web20-glossy":        { name: "Web 2.0 Glossy",      era: "Web/UI",       year: 2005, tags: ["web2.0", "glossy", "reflection", "rounded"] },
  "22-gameboy-dmg":         { name: "Game Boy DMG",        era: "Gaming",       year: 1989, tags: ["gameboy", "green", "lcd", "4-shade"] },
  "23-braun-rams":          { name: "Braun / Dieter Rams", era: "Design",       year: 1960, tags: ["braun", "functional", "minimal", "industrial"] },
  "24-tron-vector":         { name: "Tron Vector",         era: "Sci-Fi",       year: 1982, tags: ["tron", "vector", "cyan", "grid"] },
  "25-vhs-tracking":        { name: "VHS Tracking",        era: "Analog",       year: 1980, tags: ["vhs", "glitch", "scanline", "analog"] },
  "26-risograph":           { name: "Risograph",           era: "Print",        year: 1986, tags: ["riso", "print", "duotone", "grain"] },
  "27-ibm-3270":            { name: "IBM 3270 Mainframe",  era: "Terminal",     year: 1971, tags: ["ibm", "mainframe", "terminal", "cics"] },
  "28-nethack-ascii":       { name: "NetHack ASCII",       era: "Terminal",     year: 1987, tags: ["ascii", "roguelike", "terminal", "mono"] },
  "29-templeos":            { name: "TempleOS",            era: "Desktop OS",   year: 2013, tags: ["templeos", "16-color", "vga", "mono"] },
  "30-bbs-ansi":            { name: "BBS ANSI Art",        era: "Terminal",     year: 1989, tags: ["bbs", "ansi", "block", "16-color"] },
  "31-midnight-commander":  { name: "Midnight Commander",  era: "Terminal",     year: 1994, tags: ["tui", "blue", "filemanager", "ncurses"] },
  "32-matrix-rain":         { name: "Matrix Rain",         era: "Sci-Fi",       year: 1999, tags: ["matrix", "green", "code", "rain"] },
  "33-btop-meters":         { name: "btop Meters",         era: "Terminal",     year: 2021, tags: ["tui", "monitor", "gradient", "meters"] },
  "34-c64-basic":           { name: "Commodore 64 BASIC",  era: "Terminal",     year: 1982, tags: ["c64", "blue", "petscii", "basic"] },
  "35-flat-2013":           { name: "Flat Design 2013",    era: "Web/UI",       year: 2013, tags: ["flat", "ios7", "minimal", "bright"] },
  "36-glassmorphism":       { name: "Glassmorphism",       era: "Web/UI",       year: 2020, tags: ["glass", "blur", "frosted", "modern"] },
  "37-neumorphism":         { name: "Neumorphism",         era: "Web/UI",       year: 2020, tags: ["neumorph", "soft", "shadow", "mono"] },
  "38-blueprint-cad":       { name: "Blueprint / CAD",     era: "Technical",    year: 1980, tags: ["blueprint", "cad", "grid", "cyan"] },
  "39-claymorphism":        { name: "Claymorphism",        era: "Web/UI",       year: 2021, tags: ["clay", "3d", "soft", "playful"] },
  "40-brutalist-web":       { name: "Brutalist Web",       era: "Web/UI",       year: 2016, tags: ["brutalist", "raw", "mono", "highcontrast"] },
  "41-swiss-intl":          { name: "Swiss Style",         era: "Design",       year: 1950, tags: ["swiss", "grid", "helvetica", "minimal"] },
  "42-bauhaus":             { name: "Bauhaus",             era: "Design",       year: 1919, tags: ["bauhaus", "primary", "geometric", "modernist"] },
  "43-pop-art-lichtenstein":{ name: "Pop Art",             era: "Art",          year: 1960, tags: ["popart", "halftone", "primary", "comic"] },
  "44-op-art":              { name: "Op Art",              era: "Art",          year: 1964, tags: ["opart", "bw", "illusion", "pattern"] },
  "45-hypnagogic":          { name: "Hypnagogic",          era: "Aesthetic",    year: 2015, tags: ["dreamy", "gradient", "surreal", "soft"] },
  "46-monochrome-zen":      { name: "Monochrome Zen",      era: "Design",       year: 2010, tags: ["mono", "zen", "minimal", "calm"] },
  "47-default-browser":     { name: "Default Browser",     era: "Web",          year: 1994, tags: ["html", "unstyled", "timesnewroman", "default"] },
  "48-wireframe-sketch":    { name: "Wireframe Sketch",    era: "Technical",    year: 2010, tags: ["wireframe", "sketch", "lofi", "grey"] },
  "49-glitch-databend":     { name: "Glitch Databend",     era: "Aesthetic",    year: 2010, tags: ["glitch", "databend", "rgb", "corrupt"] },
  "50-y2k-chrome":          { name: "Y2K Chrome",          era: "Aesthetic",    year: 2000, tags: ["y2k", "chrome", "metallic", "bubble"] },
  "51-duotone-poster":      { name: "Duotone Poster",      era: "Print",        year: 2015, tags: ["duotone", "poster", "highcontrast", "bold"] },
  "52-grid-paper":          { name: "Grid Paper",          era: "Technical",    year: 1980, tags: ["grid", "paper", "graph", "engineering"] },
  "53-maximalist-banners":  { name: "Maximalist 90s Banner", era: "Web",        year: 1997, tags: ["maximalist", "banner", "loud", "90s"] },
};

function expandHex(h) {
  const m = h.toLowerCase().replace("#", "");
  if (m.length === 3) return "#" + m.split("").map((c) => c + c).join("");
  return "#" + m;
}

function extractPalette(html) {
  const rootMatch = html.match(/:root\s*{([^}]*)}/);
  const block = rootMatch ? rootMatch[1] : html.slice(0, 2000);
  const hexes = block.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
  const seen = new Set();
  const out = [];
  for (const h of hexes) {
    const e = expandHex(h);
    if (e.length !== 7) continue; // skip 4/8-digit alpha for the swatch list
    if (!seen.has(e)) { seen.add(e); out.push(e); }
    if (out.length >= MAX_PALETTE) break;
  }
  return out;
}

const slugs = readdirSync(STYLES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const systems = slugs.map((slug) => {
  const html = readFileSync(join(STYLES_DIR, slug, "index.html"), "utf8");
  const titleMatch = html.match(/<title>\s*\d*\s*(.*?)\s*<\/title>/i);
  const meta = META[slug] || {};
  const id = parseInt(slug, 10);
  return {
    id,
    slug,
    name: meta.name || (titleMatch ? titleMatch[1] : slug),
    era: meta.era || "",
    year: meta.year || null,
    tags: meta.tags || [],
    path: `styles/${slug}/index.html`,
    palette: extractPalette(html),
  };
});

const manifest = {
  $schema: "./manifest.schema.json",
  generated: new Date().toISOString().slice(0, 10),
  count: systems.length,
  systems,
};

writeFileSync(join(ROOT, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`manifest.json written: ${systems.length} systems`);
const missing = systems.filter((s) => !META[s.slug]);
if (missing.length) console.warn(`WARN: no curated meta for: ${missing.map((s) => s.slug).join(", ")}`);
