# SULS Publications Wireframe

A static HTML/CSS wireframe that exactly clones the styling, typography, and layout of the live [SULS Publications page](https://www.suls.org.au/publications). 

## Files

- `index.html` — full page markup (announcement bar, header/nav, hero, guide cards, footer)
- `styles.css` — all styling, including design tokens extracted from the live site
- `nav.js` — mobile/overlay nav toggle + announcement bar dismiss (no build step, no dependencies)

No subfolders — everything lives at the root.

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

