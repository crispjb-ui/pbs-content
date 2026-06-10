# PBS Clip Renderer — Remotion Starter (drop into your video repo)

Turns a `/clip-podcast` **manifest** (`clips.json`) into rendered, on-brand social clips, no per-clip design. The PBS content repo produces the manifest; this code (in your Remotion/video repo) renders it.

## What it does
For each clip in the manifest: trims the source video to the clip's in/out, reframes to 9:16 or 4:5, overlays burned-in captions + the scroll-stopper hook + Ginny's lower-third + an "as seen on" badge in the PBS brand system (per `social_clips/remotion_pbs_caption_template_spec.md`), and renders an MP4.

## One-time setup (in your Remotion repo)
1. Copy this `remotion_starter/` content into the repo root (or merge `src/` + the scripts).
2. `npm install` (needs `remotion`, `@remotion/cli`, `@remotion/google-fonts`, `react`, `react-dom`).
3. Make a `public/` folder and an `out/` folder.

## Per-episode flow
1. **In the PBS content repo:** `/clip-podcast <youtube-url>` → it commits `clips.json` (+ a human-readable plan). Bring `clips.json` here.
2. **Download the source video** into `public/` with yt-dlp, e.g.
   `yt-dlp -f "bv*[height<=1080]+ba/b" -o public/source.mp4 "<youtube-url>"`
   and set `sourceVideo` in the manifest to `source.mp4` (path is relative to `public/`).
3. **Timed captions (the one input the plan can't fully supply):** generate a Whisper JSON for word/phrase timing, or use the `captions` array the manifest carries. The composition reads caption `startSec/endSec` in **absolute source seconds** and offsets by the clip's `inSec`.
4. **Render all clips:** `node render-from-manifest.mjs clips.json` → MP4s land in `out/`.
5. Post each with the copy from the `/clip-podcast` plan; first comment → the toolkit (funnel).

## Notes
- Source = the YouTube download (compressed is fine for social; no host raw file needed).
- This is a **starter** — render one clip first and tweak to your Remotion version (v4 API: if `OffthreadVideo` rejects `startFrom`, your version uses `trimBefore`/`trimAfter` instead).
- Brand spec is `social_clips/remotion_pbs_caption_template_spec.md` in the content repo — keep this composition matched to it.

## Stat callouts & transitions
- **Stat callouts (built in):** add an `overlays: [{ startSec, endSec, big, small?, position? }]` array to any clip in the manifest. `startSec/endSec` are ABSOLUTE source seconds (same clock as captions). `big` is the headline stat ("1 in 12", "62", "+60%", "30%"), `small` is the label under it. The composition springs it in (scale + fade), holds, fades out, rendered Plex Mono in Accent on a Primary card. Want a new callout? Just add a row to `overlays`, no code change.
- **Scene transitions (optional, more advanced):** `npm i @remotion/transitions`, then wrap an intro title card → the video → an outro CTA card in a `<TransitionSeries>` with `linearTiming` + a `fade()` or `slide()` presentation. Good for a branded 1s open/close; not required, the in-clip hook + CTA already cover it.

## Cover frames (feed thumbnails)
`node render-covers.mjs clips.json` → renders `out/cover_<slug>_<aspect>.png` for every clip: a still with the hook + a mid-clip frame of the speaker + brand bar (no captions/UI). The composition has a `coverMode` flag that produces this; `render-covers.mjs` renders it as a still ~40% into each clip.
- **TikTok / Shorts / X:** at upload, choose "upload cover" and use the matching `cover_*.png`.
- **LinkedIn:** its custom-thumbnail option is inconsistent (shows on desktop sometimes, rarely mobile). If it offers a thumbnail, use the cover PNG. If not, the clip's **first ~2s already show the hook on screen**, so LinkedIn's auto-picked early frame still looks on-brand. Optional extra: post the `cover_*.png` as the very first frame held ~0.4s (add a tiny still segment) so LinkedIn's auto-thumbnail grabs it, trade-off is a 0.4s delay before the spoken hook.

