# PBS Remotion Caption Template — Spec

**Created June 2026.** One reusable, parameterized Remotion composition so every podcast/social clip is on-brand with **zero per-clip design work**. Build it once in the Remotion project; `/clip-podcast` plans feed it per clip. The content repo holds this spec; the Remotion project implements it.

## Why a single template
The weekly clip cadence (from `podcast_outreach_sprint.md`) only scales if branding is automatic. A parameterized composition (props in → finished clip out) means a clip is: drop in the source + caption track + a few fields → render. No designing each time. (Same scalability logic as the toolkit preview-PNG decision in CLAUDE.md.)

## Output sizes (two compositions, same system)
- **9:16 — 1080×1920** for Shorts / Reels / TikTok.
- **4:5 — 1080×1350** for the LinkedIn / X feed.

## Brand system (PBS v2 — must match CLAUDE.md)
- **Fonts:** IBM Plex Sans (captions, titles, lower-third); IBM Plex Mono for any number/stat/$ figure (tabular).
- **Colors:** Primary Blue `#015880`, Accent Blue `#A7E0FA`, Gray `#4D4D4D`, White `#FFFFFF`.
- **Wordmark:** PBS triangle wordmark as a small persistent watermark (low opacity, top corner away from platform UI).

## Elements (all parameterized as props)
1. **Source video** — the centered, reframed clip (prop: source file + crop focus on Ginny).
2. **Burned-in captions (mandatory)** — large (**2-4 words per line, roughly 2x a first-draft size**), high-contrast (white with a black stroke or a semi-opaque pill), **vertically CENTERED — NOT lower-third.** The bottom ~18% is covered by LinkedIn's name/caption chrome, so lower-third captions get hidden (this is exactly what happened on the first live 9:16). Phrase-by-phrase reveal with an **Accent Blue highlight on the key word**. Plex Sans SemiBold/Bold. Must read at ~400px thumbnail. (Most social video is watched muted; captions are non-negotiable.)
3. **On-screen hook/title** — the scroll-stopper from the clip plan, placed **below the top crop line (the 8-15% band, NOT flush to the top edge).** The top ~5-8% is cropped by the device notch/status bar; the live clip's top hook + time-lapse were lost there. Centered, on a solid background bar, Plex Sans Bold, two-tone Primary/Accent, first ~2s. Run **ONE text system** (hook banner up top OR center captions leading), never two competing zones at the same size.
4. **Lower-third name tag** — "Ginny Crisp, PharmD · Prescription Benefit Solutions," first ~3-5s then fade. **Not needed for the LinkedIn feed** (LinkedIn stamps the poster name/headline automatically); its job is off-platform travel (video tab / Shorts / TikTok / Reels / X). Position in the center band, not the covered bottom.
5. **"As seen on [Show]" badge** — small, top corner **below the top crop line** (prop: show name).
6. **Intro + outro cards** — **end card (last 2-3s, STANDARD on every clip)** = PBS triangle wordmark + **rxbs.org** + the clip's first-comment CTA (prop: CTA text + toolkit URL). This is the **primary home for the logo + destination**, because the LinkedIn feed chrome vanishes on the video tab and off-platform. Optional 1-2s intro card.
7. **Safe areas (canonical: `video_content_bank.md` → "9:16 in-feed render spec").** Four dead zones — keep ALL critical content out: **top ~5-8%** (device notch/status-bar crop; the live clip's top hook + time-lapse were lost here), **right ~12%** (LinkedIn's reaction rail; the live clip's captions clipped under it), **bottom ~18%** (LinkedIn stamps poster name + headline + post caption). Safe band = the **center 60-70% vertically, left of the right 12%**; captions centered there. **As-built in `Clip.tsx` after the first LIVE 9:16 review (Jul 1, 2026, gated on `const vertical = height / width > 1.5`, NOT the manifest aspect string — the render scripts assign one fixed aspect per clip and render both formats, so aspect-gating skipped the 9:16 output of 4:5-manifested clips):** logo + "As seen on" badge `top: height*0.085`, progress bar `bottom: 0` (bottom edge on all aspects), hook `top: height*0.12–0.135`, nameplate `bottom: height*0.22`, captions `fontSize: 60`. The prior lesson-8 / refinement-#1 `top: 26` was a 4:5 value that the 9:16 status bar ate; see `remotion_starter/CLIP_RENDER_SPEC.md` → "First live 9:16 in-feed review" for the full before/after table.

## Props (the composition's inputs)
`sourcePath` · `aspect` (9:16 | 4:5) · `captionTrack` (timed text) · `hookTitle` · `showName` · `ctaText` · `ctaUrl`.

## Mobile-feed legibility (mandatory, mirrors the CLAUDE.md decoder rule)
Type large enough to read at thumbnail; high contrast; cap on-screen text density; preview at small size before export.

## Pipeline fit
`/clip-podcast` (this repo) → clip plan with timestamps + hook + caption + CTA → Remotion render with this template (the video project) → export per platform → post with the planned copy + first-comment funnel CTA. Source = the public YouTube download (no raw file needed).
