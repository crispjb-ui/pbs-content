# rxbs.org — Site Templates (LOCKED DIRECTION)

**Status: this is the chosen website direction (locked Jun 9, 2026).** Build the Wix site off these. Supersedes the `v2`–`v5` exploration variants and the standalone `toolkit-library*.html` mockups one level up (kept for reference only).

## The direction
A **merged** system, not any single variant:
- **v3 decoder** = the spine (dark `--ink` nav + hero, redline contract card motif).
- **v5 data** = the stats band (Plex Mono numbers on Primary Blue).
- **v2 editorial** = the proof / testimonial strip.
- **v4 conversion** = the role-segmented capture form.
- **Architecture:** persistent **nav toolbar / multi-page** (not single-scroll). Scroll-reveal motion is reserved for the homepage narrative; utility pages (Library, toolkit detail) stay fast and static.

## Files
| File | Page | Notes |
|---|---|---|
| `site.css` | shared design system | Single source of truth for tokens + components. Edit here, every page updates. |
| `index.html` | Home | hero → stats band → toolkit teaser → proof/testimonials → capture |
| `solutions.html` | Solutions | six service cards incl. "behind your broker" partner card |
| `library.html` | Toolkit Library | all 29, Start-Here + 5 pillar groups, real preview thumbnails. **Canonical library page** (supersedes `../toolkit-library-v2.html`). |
| `toolkit.html` | Toolkit detail / lead-magnet | preview shot + bullets + role form + "what's inside" + pairs-well-with |
| `about.html` | About | stats band + story + team + proof |
| `render_site.cjs` | renderer (PNG) | full-res desktop+mobile |
| `render_jpg.cjs` | renderer (JPEG) | compressed, for inline preview/sharing |
| `renders/` | screenshots | desktop + mobile; mobile library is split into 3 parts |

## Brand lock
PBS v2 system only: Primary `#015880`, Accent `#A7E0FA`, Gray `#4D4D4D`, paper `#FAFAF7`, ink `#0c1a22`. IBM Plex Sans (Plex Mono for all numerics). Triangle wordmark. Accent-blue buttons always take Primary-Blue text (never light-on-accent).

## Placeholders to fill before launch (flagged with dashed outline in renders)
- **Stats band:** `$XX M` saved in 2025 + `NNN` plans served (the other two stats are real). Use real, defensible figures only; label "results vary by plan."
- **Testimonials:** 3 quote cards on Home + About ("to collect").
- **About:** origin-story narrative + 2 team bios.

## Re-render
```
cd website_mockups/site
export NODE_PATH=/opt/node22/lib/node_modules PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers
node render_jpg.cjs      # compressed, for sharing
node render_site.cjs     # full-res PNG
```
Type renders in a system-sans fallback in this sandbox (no Plex installed / no network for Google Fonts); in Wix with Plex loaded it sharpens. Layout, spacing, and color are accurate.

## Build path
These are the **blueprint**. Wix assembly (sections, Repeater binding, publishing) stays manual. `../wix_toolkit_library_build_checklist.md` covers the Library page; a matching homepage checklist is the next artifact.
