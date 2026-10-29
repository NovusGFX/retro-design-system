---
name: retro-design
description: Pick and apply a retro UI style from the local catalog of 53 historical systems (Windows 95, CRT phosphor, DOS CGA, vaporwave, Bauhaus, IBM 3270, etc). Use when the user wants a vintage/retro aesthetic, names a specific era ("80s terminal", "Y2K", "90s web"), references a specific old OS/terminal, or asks to generate styled HTML from a retro style reference. Different from frontend-design (general aesthetic guidance) — this one is keyed to specific historical systems stored on disk.
when_to_use: retro UI, vintage interface, Windows 95, CRT terminal, vaporwave, pixel art, brutalist, Bauhaus, Swiss style, pick a retro style, apply retro aesthetic, filter style catalog, manifest, 80s 90s Y2K aesthetic, specific old OS look
argument-hint: [slug | vibe | "list"]
allowed-tools: Read Glob Grep Bash(jq:*) Bash(git rev-parse:*) Bash(node:*)
---

# retro-design

Pick a retro UI style from this repo's 53-system catalog and apply it to the user's target component or page.

## Catalog root

This skill ships inside the `retro-design-system` repo, so RDS_ROOT is the repo root itself. Resolve it on load:

!`git rev-parse --show-toplevel`

Use the returned absolute path as `RDS_ROOT` for every path in the workflow below.

## Workflow

### Step 1 — Load the compact catalog

Read `${CLAUDE_SKILL_DIR}/references/styles-index.md`. It is a 53-row table (slug, name, era, year, top 3 palette colors, tags). Do not read `manifest.json` or individual `styles/*/index.html` yet — that happens only after a slug is picked.

### Step 2 — Interpret `$ARGUMENTS`

- `list` or empty → render the full table to the user and stop.
- A slug like `09-crt-phosphor` → skip Step 3, go straight to Step 4 with that slug.
- A vibe (`80s green terminal`, `playful 90s web`, `pastel synthwave`, `minimal Swiss`) → continue to Step 3.
- A specific named system the user mentions (`Windows 95`, `Game Boy`, `C64`) → map to the closest slug via the catalog, confirm with the user, continue.

### Step 3 — Recommend 3 candidates

From the table, pick 3 slugs that best match the vibe (weight era, palette, and tags). For each, output:

```
- `NN-slug` — Name (Era, Year). One sentence why it fits. Palette: `#aaa` `#bbb` `#ccc`.
```

Ask the user to pick one (or accept the first). Do not read full HTML references for all 3 — only the chosen one.

### Step 4 — Load reference and generate

Once a slug is confirmed:

1. Read `${RDS_ROOT}/styles/<slug>/index.html` — full tokens, typography, component patterns.
2. Read `${RDS_ROOT}/tokens/<slug>.css` — bare `:root` variables (cheap; same content as the HTML's `:root`, useful as a quick reference).
3. Confirm the target: what component/page to build, and in what stack. Default to self-contained HTML + CSS. Only use React/Tailwind/etc if the user asks.
4. Generate output that reuses the reference's:
   - **Palette** (every color from `:root`, no modern defaults creeping in)
   - **Typography** (`--font` stack, sizing rhythm, casing)
   - **Surface treatment** (borders, bevels, shadows, scanlines, glows, textures)
   - **Component patterns** (buttons, inputs, windows, panels — copy markup structure where relevant)
5. Hard rule: avoid modern defaults that break the retro look (no rounded-2xl on a Win95 style, no Inter font on a CRT terminal, no smooth easing on a brutalist layout). If a modern framework is involved, scope the retro overrides tightly.

## Selection cheatsheet

When the user's vibe is ambiguous, start from these groupings:

- **Green/black terminal**: `09-crt-phosphor`, `27-ibm-3270`, `32-matrix-rain`
- **DOS / 4-color**: `10-dos-cga`, `22-gameboy-dmg`, `34-c64-basic`
- **Classic desktop OS**: `01-mac-system-7`, `02-windows-95`, `06-nextstep`, `20-macos9-platinum`
- **Glossy 2000s**: `03-windows-xp-luna`, `04-aqua-osx`, `21-web20-glossy`, `12-frutiger-aero`
- **Synth/vapor/Y2K**: `16-vaporwave`, `50-y2k-chrome`, `15-cassette-futurism`, `24-tron-vector`
- **Terminal TUI**: `28-nethack-ascii`, `30-bbs-ansi`, `31-midnight-commander`, `33-btop-meters`
- **Print / poster**: `26-risograph`, `43-pop-art-lichtenstein`, `44-op-art`, `51-duotone-poster`
- **Modernist / minimal**: `23-braun-rams`, `41-swiss-intl`, `42-bauhaus`, `46-monochrome-zen`
- **Raw / brutalist**: `40-brutalist-web`, `14-geocities-web10`, `53-maximalist-banners`
- **Glitch / corrupt**: `25-vhs-tracking`, `49-glitch-databend`, `45-hypnagogic`
- **Contemporary revivals**: `35-flat-2013`, `36-glassmorphism`, `37-neumorphism`, `39-claymorphism`

## Coexistence with other skills

- `frontend-design` = general aesthetic direction. Use retro-design when the user wants a **specific historical** look; use frontend-design for open-ended creative work.
- `make-interfaces-feel-better` = UI polish details. Safe to layer on top of a retro-design output.
- `web-design-guidelines` = accessibility/UX audit. Apply after generation, not before.

## Maintenance

- Catalog drift: after adding/removing styles, run `node scripts/build-manifest.mjs && node scripts/build-tokens.mjs` from the repo root (regenerates `manifest.json` and `tokens/`), then `node .claude/skills/retro-design/scripts/build-index.mjs` (regenerates this skill's index).
- If `references/styles-index.md` ever shows `<missing>` or stale rows, rerun the build script.
