# Retro Design System

> 53 standalone HTML/CSS UI themes spanning iconic computing and design eras. Built for AI-assisted frontend development, rapid prototyping, and nostalgic interface design.

53 retro UI design systems covering Windows 95, CRT terminals, DOS CGA, IBM mainframes, vaporwave, 8-bit arcade, Mac OS X Aqua, GeoCities, Commodore 64, Tron, VHS, Risograph, Bauhaus, and more. Each one drops into your own project or feeds directly to an AI coding agent.

![Retro Design Systems social poster](./assets/social-poster.png)

[![GitHub stars](https://img.shields.io/github/stars/NovusGFX/retro-design-system?style=for-the-badge)](https://github.com/NovusGFX/retro-design-system/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/NovusGFX/retro-design-system?style=for-the-badge)](https://github.com/NovusGFX/retro-design-system/network/members)
[![Last commit](https://img.shields.io/github/last-commit/NovusGFX/retro-design-system?style=for-the-badge)](https://github.com/NovusGFX/retro-design-system/commits/main)
[![AI Agent Ready](https://img.shields.io/badge/AI%20Agent-Ready-00a86b?style=for-the-badge)](https://github.com/NovusGFX/retro-design-system)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](./LICENSE)

## Live Showcase

- **Interactive explorer**: [https://novusgfx.github.io/retro-design-system/docs/](https://novusgfx.github.io/retro-design-system/docs/)
- Source: `docs/index.html`

---

## Quick Start

Open any folder's `index.html` directly in a browser, or run a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

---

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

---

## Use Cases

- **AI-generated frontend themes**: Use Claude, Codex, Gemini, or Cursor to generate pages and components that match a specific retro style.
- **Retro dashboard UI kits**: Build admin panels, launchers, and control rooms with vintage OS aesthetics.
- **Game website design**: Create game landing pages, overlays, and HUD-inspired interfaces using 8-bit and CRT motifs.
- **Prompt-to-UI workflows**: Feed a style reference to an AI agent and get reusable HTML/CSS output faster.
- **Creative coding and portfolios**: Give experimental web projects a nostalgic visual identity.
- **Design token extraction**: Lift palettes, borders, shadows, and typography rules into your own component systems.

---

## How To Use In Your Own Project

1. Pick the system you want from the list below.
2. Copy its token/style section into your project CSS.
3. Reuse component markup patterns from the showcase to get the full look quickly.

---

## Using With AI Coding Agents (Claude, Codex, Gemini, Cursor, etc.)

Point your agent at a style folder and ask it to generate UI in that visual language. Each system is one self-contained file: tokens, components, and patterns together. Agents can read and reproduce the style without extra context.

### Suggested workflow

1. Point the agent to a specific system folder (e.g. `styles/11-8bit-arcade/index.html`).
2. Ask it to extract tokens (colors, typography, spacing, shadows, borders) into reusable variables.
3. Ask it to build your target component or page in that same visual language.
4. Ask it to avoid modern defaults that break the retro look.

### Prompt template

```text
Use `<your-project-path>/styles/11-8bit-arcade/index.html` as the style reference.
Create [component/page] in this same visual language.

Requirements:
- Reuse the same color palette, type style, border treatment, and spacing rhythm
- Match button/input/window styling patterns from the reference
- Keep accessibility in mind (contrast, keyboard focus states, semantic HTML)
- Output clean, production-ready HTML/CSS (or React + CSS)
```

Swap the reference path for any style in this repo. Popular picks:

- `styles/09-crt-phosphor` (green phosphor terminal)
- `styles/10-dos-cga` (MS-DOS cyan/magenta palette)
- `styles/15-cassette-futurism` (80s sci-fi control panels)
- `styles/16-vaporwave` (pastel synthwave aesthetic)
- `styles/27-ibm-3270` (IBM mainframe CICS terminal)

---

## Included Systems

53 standalone systems in `styles/`. Browse them all in the [interactive explorer](https://novusgfx.github.io/retro-design-system/docs/) or jump to source:

1. [Mac System 7](https://github.com/NovusGFX/retro-design-system/blob/main/styles/01-mac-system-7/index.html)
2. [Windows 95](https://github.com/NovusGFX/retro-design-system/blob/main/styles/02-windows-95/index.html)
3. [Windows XP Luna](https://github.com/NovusGFX/retro-design-system/blob/main/styles/03-windows-xp-luna/index.html)
4. [Mac OS X Aqua](https://github.com/NovusGFX/retro-design-system/blob/main/styles/04-aqua-osx/index.html)
5. [Amiga Workbench](https://github.com/NovusGFX/retro-design-system/blob/main/styles/05-amiga-workbench/index.html)
6. [NeXTSTEP](https://github.com/NovusGFX/retro-design-system/blob/main/styles/06-nextstep/index.html)
7. [BeOS](https://github.com/NovusGFX/retro-design-system/blob/main/styles/07-beos/index.html)
8. [Teletext](https://github.com/NovusGFX/retro-design-system/blob/main/styles/08-teletext/index.html)
9. [CRT Phosphor](https://github.com/NovusGFX/retro-design-system/blob/main/styles/09-crt-phosphor/index.html)
10. [DOS CGA](https://github.com/NovusGFX/retro-design-system/blob/main/styles/10-dos-cga/index.html)
11. [8-Bit Arcade](https://github.com/NovusGFX/retro-design-system/blob/main/styles/11-8bit-arcade/index.html)
12. [Frutiger Aero](https://github.com/NovusGFX/retro-design-system/blob/main/styles/12-frutiger-aero/index.html)
13. [Winamp Skin](https://github.com/NovusGFX/retro-design-system/blob/main/styles/13-winamp-skin/index.html)
14. [GeoCities Web 1.0](https://github.com/NovusGFX/retro-design-system/blob/main/styles/14-geocities-web10/index.html)
15. [Cassette Futurism](https://github.com/NovusGFX/retro-design-system/blob/main/styles/15-cassette-futurism/index.html)
16. [Vaporwave](https://github.com/NovusGFX/retro-design-system/blob/main/styles/16-vaporwave/index.html)
17. [Memphis](https://github.com/NovusGFX/retro-design-system/blob/main/styles/17-memphis/index.html)
18. [PS1 Tech](https://github.com/NovusGFX/retro-design-system/blob/main/styles/18-ps1-tech/index.html)
19. [OS/2 Warp](https://github.com/NovusGFX/retro-design-system/blob/main/styles/19-os2-warp/index.html)
20. [Mac OS 9 Platinum](https://github.com/NovusGFX/retro-design-system/blob/main/styles/20-macos9-platinum/index.html)
21. [Web 2.0 Glossy](https://github.com/NovusGFX/retro-design-system/blob/main/styles/21-web20-glossy/index.html)
22. [Game Boy DMG](https://github.com/NovusGFX/retro-design-system/blob/main/styles/22-gameboy-dmg/index.html)
23. [Braun / Dieter Rams](https://github.com/NovusGFX/retro-design-system/blob/main/styles/23-braun-rams/index.html)
24. [Tron Vector](https://github.com/NovusGFX/retro-design-system/blob/main/styles/24-tron-vector/index.html)
25. [VHS Tracking](https://github.com/NovusGFX/retro-design-system/blob/main/styles/25-vhs-tracking/index.html)
26. [Risograph](https://github.com/NovusGFX/retro-design-system/blob/main/styles/26-risograph/index.html)
27. [IBM 3270](https://github.com/NovusGFX/retro-design-system/blob/main/styles/27-ibm-3270/index.html)
28. [NetHack ASCII](https://github.com/NovusGFX/retro-design-system/blob/main/styles/28-nethack-ascii/index.html)
29. [TempleOS](https://github.com/NovusGFX/retro-design-system/blob/main/styles/29-templeos/index.html)
30. [BBS ANSI Art](https://github.com/NovusGFX/retro-design-system/blob/main/styles/30-bbs-ansi/index.html)
31. [Midnight Commander](https://github.com/NovusGFX/retro-design-system/blob/main/styles/31-midnight-commander/index.html)
32. [Matrix Rain](https://github.com/NovusGFX/retro-design-system/blob/main/styles/32-matrix-rain/index.html)
33. [btop Meters](https://github.com/NovusGFX/retro-design-system/blob/main/styles/33-btop-meters/index.html)
34. [Commodore 64 BASIC](https://github.com/NovusGFX/retro-design-system/blob/main/styles/34-c64-basic/index.html)
35. [Flat Design 2013](https://github.com/NovusGFX/retro-design-system/blob/main/styles/35-flat-2013/index.html)
36. [Glassmorphism](https://github.com/NovusGFX/retro-design-system/blob/main/styles/36-glassmorphism/index.html)
37. [Neumorphism](https://github.com/NovusGFX/retro-design-system/blob/main/styles/37-neumorphism/index.html)
38. [Blueprint / CAD](https://github.com/NovusGFX/retro-design-system/blob/main/styles/38-blueprint-cad/index.html)
39. [Claymorphism](https://github.com/NovusGFX/retro-design-system/blob/main/styles/39-claymorphism/index.html)
40. [Brutalist Web](https://github.com/NovusGFX/retro-design-system/blob/main/styles/40-brutalist-web/index.html)
41. [Swiss Style](https://github.com/NovusGFX/retro-design-system/blob/main/styles/41-swiss-intl/index.html)
42. [Bauhaus](https://github.com/NovusGFX/retro-design-system/blob/main/styles/42-bauhaus/index.html)
43. [Pop Art](https://github.com/NovusGFX/retro-design-system/blob/main/styles/43-pop-art-lichtenstein/index.html)
44. [Op Art](https://github.com/NovusGFX/retro-design-system/blob/main/styles/44-op-art/index.html)
45. [Hypnagogic](https://github.com/NovusGFX/retro-design-system/blob/main/styles/45-hypnagogic/index.html)
46. [Monochrome Zen](https://github.com/NovusGFX/retro-design-system/blob/main/styles/46-monochrome-zen/index.html)
47. [Default Browser](https://github.com/NovusGFX/retro-design-system/blob/main/styles/47-default-browser/index.html)
48. [Wireframe Sketch](https://github.com/NovusGFX/retro-design-system/blob/main/styles/48-wireframe-sketch/index.html)
49. [Glitch Databend](https://github.com/NovusGFX/retro-design-system/blob/main/styles/49-glitch-databend/index.html)
50. [Y2K Chrome](https://github.com/NovusGFX/retro-design-system/blob/main/styles/50-y2k-chrome/index.html)
51. [Duotone Poster](https://github.com/NovusGFX/retro-design-system/blob/main/styles/51-duotone-poster/index.html)
52. [Grid Paper](https://github.com/NovusGFX/retro-design-system/blob/main/styles/52-grid-paper/index.html)
53. [Maximalist 90s Banner](https://github.com/NovusGFX/retro-design-system/blob/main/styles/53-maximalist-banners/index.html)
---

## Project Structure

```text
styles/
  01-mac-system-7/      index.html
  02-windows-95/        index.html
  03-windows-xp-luna/   index.html
  ...
  53-maximalist-banners/ index.html
```

Each numbered folder contains one `index.html` with embedded CSS tokens and component examples. No build step, no dependencies.

---

## FAQ

**Can I use this with Claude, Codex, Gemini, Cursor, or other coding assistants?**
Yes. Point your assistant to one of the style folders and ask it to generate a component or page in that visual language. The single-file format is agent-friendly by design.

**Does this work with Tailwind, React, Next.js, or other frameworks?**
The base assets are plain HTML and CSS. Port tokens and patterns into any stack (Tailwind, React, Next.js, Vue, Svelte, Astro) by copying the CSS variables and adapting the markup.

**Is this production-ready?**
These are expressive style references. Use them as a starting point and adapt for accessibility, responsiveness, and your brand.

**Can I add my own retro style?**
Yes. See Contributing below. A new system is one numbered folder with a single `index.html`. If it covers an era or aesthetic not already included, open a PR.

**What license is this under?**
MIT. Use it freely in personal and commercial projects.

---

## Contributing

New styles, bug fixes, and improvements are welcome.

1. Fork the repo and create a branch.
2. Add your system as `styles/NN-your-style-name/index.html` following the existing numbering and single-file format.
3. Include all tokens and at least one component example inline.
4. Open a PR with a screenshot and a one-line description of the era or aesthetic.

---

## Credits

Created by **NovusGFX**.

## License

MIT License. See `LICENSE`.
