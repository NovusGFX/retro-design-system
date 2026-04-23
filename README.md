# Retro Design System

[![GitHub stars](https://img.shields.io/github/stars/NovusGFX/retro-design-system?style=for-the-badge)](https://github.com/NovusGFX/retro-design-system/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/NovusGFX/retro-design-system?style=for-the-badge)](https://github.com/NovusGFX/retro-design-system/network/members)
[![Last commit](https://img.shields.io/github/last-commit/NovusGFX/retro-design-system?style=for-the-badge)](https://github.com/NovusGFX/retro-design-system/commits/main)
[![AI Agent Ready](https://img.shields.io/badge/AI%20Agent-Ready-00a86b?style=for-the-badge)](https://github.com/NovusGFX/retro-design-system)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](./LICENSE)

Retro Design System is an **AI-ready retro UI design system library** for developers, designers, prompt engineers, and creative coders who want nostalgic interfaces with modern implementation speed. It includes 18 standalone HTML/CSS design systems inspired by iconic eras like Windows 95, CRT terminals, DOS CGA, 8-bit arcade, Aqua, and cassette futurism.

Each style pack is built to be easy for humans and AI coding agents (Claude, Codex, Gemini, Cursor, and similar tools) to understand, remix, and ship. Point your agent to a style folder, generate components in that visual language, and keep consistent design tokens across prototypes and production-ready frontends.

## Live Showcase

- Interactive explorer: [https://novusgfx.github.io/retro-design-system/docs/](https://novusgfx.github.io/retro-design-system/docs/)
- Source page: `docs/index.html`

## About

### Description

An AI-agent-friendly collection of retro-inspired web UI systems with reusable tokens, component patterns, and visual references for rapid prototyping and production styling.

Retro Design System is a ready-to-use visual playground for building nostalgic interfaces fast. It distills iconic UI eras into practical, reusable design tokens and component patterns so you can prototype, ship, or theme products without rebuilding styles from scratch.

Built for modern workflows, this library is especially useful when paired with AI coding agents (Claude, Codex, Gemini, Cursor, and similar tools): point an agent at a system, ask it to generate new UI in that visual language, and iterate quickly while keeping stylistic consistency.

If you are building creative tools, game launchers, retro dashboards, experimental websites, synthwave projects, or throwback app skins, this repo gives you a strong design baseline plus copy-paste-ready references.

## Tags / SEO Keywords

`retro-ui`, `design-system`, `css`, `html`, `ui-kit`, `nostalgia`, `web-design`, `frontend`, `ai-agents`, `claude`, `codex`, `gemini`, `prompt-engineering`, `vibe-coding`, `windows-95`, `windows-xp`, `aqua`, `crt`, `8-bit`, `pixel-art`

## Use Cases

- **AI-generated frontend themes**: Use Claude/Codex/Gemini to generate pages and components that match a specific retro style.
- **Retro dashboard UI kits**: Build admin panels, launchers, and control rooms with vintage operating system aesthetics.
- **Game website design inspiration**: Create game landing pages, overlays, and HUD-inspired interfaces using 8-bit/CRT motifs.
- **Prompt-to-UI workflows**: Feed a style reference to an AI agent and get reusable HTML/CSS output faster.
- **Creative coding and portfolio projects**: Add nostalgia-forward visual identity to experimental web projects.
- **Design token extraction for theming**: Lift palettes, borders, shadows, and typography rules into your own component systems.

## Search-Friendly FAQ

### What is Retro Design System?
Retro Design System is a collection of 18 standalone retro web UI themes built with HTML and CSS. Each theme includes tokens, component styling, and a visual demo layout in a single `index.html` file.

### Can I use this with Claude, Codex, Gemini, Cursor, or other coding assistants?
Yes. Point your assistant to one of the style folders, then ask for a component or page that matches that visual language. This works well for quick prototyping and theme-consistent UI generation.

### Is this good for production projects?
Yes, if you adapt the styles to your product requirements. The examples are intentionally visual and expressive, and they can be refined for accessibility, responsiveness, and brand constraints.

### What tech stack does this support?
The base assets are plain HTML and CSS, so you can use them in static sites, React, Next.js, Vue, Svelte, Astro, and most frontend frameworks.

### Can I extract design tokens from each system?
Yes. Each system includes reusable color, typography, spacing, border, and shadow patterns that can be moved into CSS variables or a token pipeline.

### Which retro styles are included?
The collection includes themes inspired by Mac System 7, Windows 95, Windows XP, Aqua, CRT terminals, DOS CGA, 8-bit arcade visuals, cassette futurism, and more.

## Screenshot Preview

| Mac System 7 | Windows 95 |
|---|---|
| ![Mac System 7 UI](./assets/system-01-mac-system-7.png) | ![Windows 95 UI](./assets/system-02-windows-95.png) |

| Windows XP Luna | Mac OS X Aqua |
|---|---|
| ![Windows XP Luna UI](./assets/system-03-windows-xp-luna.png) | ![Mac OS X Aqua UI](./assets/system-04-aqua-osx.png) |

| Amiga Workbench |
|---|
| ![Amiga Workbench UI](./assets/system-05-amiga-workbench.png) |

| CRT Phosphor | DOS CGA |
|---|---|
| ![CRT Phosphor UI](./assets/system-09-crt-phosphor.png) | ![DOS CGA UI](./assets/system-10-dos-cga.png) |

| 8-Bit Arcade | Cassette Futurism |
|---|---|
| ![8-Bit Arcade UI](./assets/system-11-8bit-arcade.png) | ![Cassette Futurism UI](./assets/system-15-cassette-futurism.png) |

## Included Systems

1. Mac System 7
2. Windows 95
3. Windows XP Luna
4. Mac OS X Aqua
5. Amiga Workbench
6. NeXTSTEP
7. BeOS
8. Teletext
9. CRT Phosphor
10. DOS CGA
11. 8-Bit Arcade
12. Frutiger Aero
13. Winamp Skin
14. GeoCities Web 1.0
15. Cassette Futurism
16. Vaporwave
17. Memphis
18. PS1 Tech

## Quick Start

Open any folder's `index.html` directly in a browser, or run a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## How To Use In Your Own Project

- Pick the system you want.
- Copy its token/style section into your project CSS.
- Reuse component markup patterns from the showcase to get the full look quickly.

## Using With AI Coding Agents (Claude, Codex, Gemini, etc.)

Use any of the system folders as a visual/style reference and ask your agent to implement UI using that style's tokens and component patterns.

### Suggested workflow

1. Point the agent to a specific system folder (for example `11-8bit-arcade/index.html`).
2. Ask it to extract tokens (colors, typography, spacing, shadows, borders) into reusable variables.
3. Ask it to build your target component/page in that same visual language.
4. Ask it to avoid modern defaults that break the retro look.

### Prompt template

```text
Use `<your-project-path>/11-8bit-arcade/index.html` as the style reference.
Create [component/page] in this same visual language.

Requirements:
- Reuse the same color palette, type style, border treatment, and spacing rhythm
- Match button/input/window styling patterns from the reference
- Keep accessibility in mind (contrast, keyboard focus states, semantic HTML)
- Output clean, production-ready HTML/CSS (or React + CSS)
```

You can swap the reference path for any style in this repo:
- Use your own local project directory path, not a fixed drive letter.
- `09-crt-phosphor`
- `10-dos-cga`
- `11-8bit-arcade`
- `15-cassette-futurism`

## Project Structure

Each numbered folder contains one standalone system:

```text
01-mac-system-7/
02-windows-95/
...
18-ps1-tech/
```

## Credits

Created by **NovusGFX**.

## License

This project is licensed under the MIT License. See `LICENSE`.
