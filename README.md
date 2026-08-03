# SULS Publications Wireframe — Stage 1

A static HTML/CSS wireframe that exactly clones the styling, typography, and layout of the live [SULS Publications page](https://www.suls.org.au/publications) (Squarespace). Built as the reference shell for a future *The Brief* podcast page (Stage 2).

## Files

- `index.html` — full page markup (announcement bar, header/nav, hero, guide cards, footer)
- `styles.css` — all styling, including design tokens extracted from the live site
- `nav.js` — mobile/overlay nav toggle + announcement bar dismiss (no build step, no dependencies)

No subfolders — this is the only website in this workspace, so everything lives at the root.

## Running locally

Just open `index.html` directly in a browser, or serve the folder locally, e.g.:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Design tokens (matched to live site)

| Token | Value |
|---|---|
| Background | `rgb(251, 250, 248)` |
| Heading text | `rgb(0, 0, 0)` |
| Body text | `rgba(26, 26, 26, 0.87)` |
| Accent (links, announcement bar) | `rgb(29, 173, 195)` — teal |
| Dark accent (footer) | `rgb(61, 99, 149)` — navy |
| Heading font | Instrument Serif |
| Nav / UI font | Source Code Pro (uppercase) |
| Body font | Inconsolata |
| H1 size | 4.9rem desktop / 3rem mobile |
| Max content width | 1361px |
| Mobile breakpoint | 767px |

Fonts are loaded from Google Fonts (`Instrument Serif`, `Source Code Pro`, `Inconsolata`) rather than Squarespace's hosted woff2 files, since those are private CDN assets. Visually near-identical.

Guide cover images and the hero illustration are hotlinked from the Squarespace CDN for now — fine for a wireframe, but should be re-hosted before any production use.

## Known simplifications vs. the live site

- The live site's mobile nav does a "drill-down with Back button" animation between menu levels. This wireframe uses native `<details>/<summary>` accordions instead — visually similar (same fonts, chevrons, uppercase style) but simpler to build and maintain with plain HTML.
- No Squarespace scroll/fade animations on section entry.
- The "2026 Competitions Handbook" card has no link, matching the live site.

## Stage 2 (not built yet)

Once Stage 1 is confirmed to match the live Publications page, the plan is to:

- Swap the hero heading/copy for *The Brief* podcast branding
- Replace the guide cards with episode cards (Prof Doug Jones AO, Todd & Kezia, Zoe Lim)
- Add an audio player component using assets from the parent `The Brief/` folder
- Keep the same header/nav/footer shell for visual consistency with suls.org.au
