# Clip Render Spec — canonical (read me before rendering)

This is the locked spec for the SHRM "Honest HR" clips. If a render drifts,
rebuild to THIS, don't patch piece by piece. clip1 is the worked reference;
other clips use the same template with their own hook/numbers/cutaway/toolkit
(see the per-clip copy + CTA in `../honest-hr-shrm_2026-06-09_clips.md`).

Render with the pre-installed headless shell when in a sandbox:
`--browser-executable=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell`
(locally, Remotion downloads its own Chromium; render-all-platforms.mjs auto-skips the flag).

## clip1 (and template) spec

PERSISTENT: white PBS logo top-left (small); "As seen on Honest HR (SHRM)"
TEXT badge top-right (text only, no SHRM logo) — hidden during the opening
hook, shown after it fades. Audio runs continuously under all cutaways.

1) OPENING HOOK (frame 0 → ~3.5s, then fade): text overlay OVER the footage,
   above her head (NOT a full-screen card), visible from frame 0. Brand-blue
   (#015880) rounded panel, big bold white Plex Sans SemiBold, dollar amounts
   in accent blue (#A7E0FA). clip1 lines: "They pay the pharmacy $100." /
   "They charge you $120." Real text, no placeholders.

2) NAME PLATE (fly in ~2s, hold ~3-4s, fly out): lower-left, spring fly-in
   from off the left edge. Brand-blue panel, white text "Ginny Crisp, PharmD"
   / "CEO · Prescription Benefit Solutions", LARGE white PBS logo. Captions
   must not collide while it's up.

3) CAPTIONS — clean style: Whisper WORD-SYNCED karaoke (word-by-word from
   word-level timestamps), NOT static sentence blocks. CENTERED horizontally
   within the side safe area (updated Jun 16, 2026 — previously left-aligned;
   centered reads cleaner and survives mobile-feed side-cropping, see lesson 8).
   NO background box: bold white Plex Sans SemiBold with a 2px dark outline +
   soft drop-shadow; the currently-spoken word sits in a SOLID accent-blue
   (#A7E0FA) rounded pill with dark navy (#015880) text. ~5-7 words, max 2
   lines, baseline ~70% down, safe bottom margin, never over her face. Apply
   the correction map ("GLP-1s one" -> "GLP-1s", + PBM-term mis-hears).

4) SPREAD/STAT CUTAWAY (animated, where the clip has a number moment): full-
   screen, audio continues, NOT a static card. Spring scale/slide IN (no hard
   cut). Frame-driven build (spring()/interpolate(), nothing fully drawn on
   frame 0): number counts up, bar grows 0->100%, bar splits, the takeaway
   figure SNAPS to accent blue (#A7E0FA) with a scale pop + glow. Hold ~1.5s,
   then spring scale-down + fade back to Ginny on a sentence boundary. Plex
   Mono numbers, "Illustrative example" label. clip1 = $120 charged -> $100
   pharmacy + $20 SPREAD.

5) TOOLKIT CUTAWAY: full-screen slow-zoom of the clip's toolkit page 1 WITH a
   text label (top = toolkit name, bottom = "Free -> link in comments").
   Remove any small corner toolkit image (no pop on her face).

6) END CARD (final ~2.5s): LARGE PBS logo, NO "Prescription Benefit Solutions"
   text under it. CTA: "We audit hundreds of PBM contracts a year." + "Free
   <clip's> worksheet -> link in comments". One CTA only.

GUARDRAILS: total cutaway time < ~40% of the clip; cut on sentence boundaries
(Whisper timestamps); each build < ~4-5s. Start each clip on its first full
sentence (clip1 starts on "PBMs are allowed to have...", NOT "medication").

COVER (separate PNG, NOT a video frame): designed 1080x1350 — brand blue
(#015880), white PBS logo top-left, "As seen on Honest HR (SHRM)" top-right,
the big hook with accent-blue dollars, the spread bar visual ($20 highlighted,
"Illustrative example"), "Ginny Crisp, PharmD · CEO, Prescription Benefit
Solutions" at the bottom.

VERIFY before handoff: hook from frame 0 with real text / starts on first full
sentence / single "GLP-1s" / animated cutaway (not a word card) / karaoke
word-by-word with accent-blue pill (no box) / name-plate fly-in with large
logo / toolkit cutaway with text / bigger end-card logo / cover PNG. Then
commit + push to main.

## Clip7 lessons (Jun 12, 2026) — standard for every clip going forward

1) EVERY AUDIBLE WORD NEEDS AN ON-SCREEN TEXT HOME. Captions pause ONLY while
   an overlay mirrors the spoken words (stat rows popping in sync with her
   list). The moment the overlay holds static while she keeps talking, the
   karaoke pill resumes at the standard baseline, positioned clear of the
   overlay's content (check 9:16 for collisions).

2) NO ORPHANED AUDIO TAIL. If source audio runs past the final caption word,
   fade volume to 0 over ~0.5s right after the last word. Extend the clip
   instead ONLY if the next sentence lands clean and strong within ~4s
   (extract + Whisper the tail to check). Never let a cut-off fragment play
   under the end card.

3) HOOK PANEL NEVER RENDERS EMPTY. With staggered word reveals, the panel
   arrives WITH the first word at frame 0 (auto-width pill that grows per
   word, or full panel + first word together). Scrub frames 0-35 to verify
   no empty-box frame exists.

4) HOOK HIERARCHY + MOTION. Line 1 ~1.35x line 2; staggered beat reveal
   (~0.3s apart), accent word lands last with the bigger pop in accent blue.
   Static panels don't stop scroll; the reveal rhythm is the hook.

5) ONE CTA PER SHORT CLIP (<~20s). No mid-roll toolkit image cutaway; the end
   card + first comment carry the toolkit. Spend the reclaimed time on an
   emphasis animation instead (e.g., progressive accent-row grow 1.0 -> ~1.5
   ease-out from snap to cutaway exit; cap ~1.5 or it reads as a glitch).

6) ALWAYS UPLOAD THE DESIGNED COVER PNG as the custom thumbnail (LinkedIn:
   pencil icon on the attached video -> thumbnail -> upload). Cover hook text
   must match frame 0 so thumbnail -> first frame reads continuous. 9:16
   cross-posts set covers per platform: TikTok at post time, IG Reels from
   camera roll, Shorts in YouTube Studio.

7) LENGTH: 15-25s IS THE ZONE for these clips. Completion rate is the
   algorithmic lever, not duration. Extend only for strength, never for
   length.

8) SAFE AREA — SIDES AND TOP (added Jun 16, 2026 after the clip7 LinkedIn-mobile
   render). Two separate clips of the frame on LinkedIn/X mobile:
   (a) SIDES: playback crops ~10-12% off each side, slicing leading words of any
       element anchored to the raw edge ("direct" -> "ct"; name plate "Ginny
       Crisp" -> "y Crisp"). Keep ALL text in the center ~78%.
   (b) TOP: the expanded (tapped) video view overlays LinkedIn's OWN post header
       (avatar + poster name + headline) over the top ~13%, colliding with the
       burned-in top corners; the right-anchored "As seen on" badge also clips
       on the right.
   Implementation in Clip.tsx: SAFE_X (~11% width) for the name-plate inset + the
   caption block (left/right + maxWidth = width - 2*SAFE_X, captions CENTERED per
   lesson 3); SAFE_CORNER (~6%) for the logo's side inset; SAFE_TOP (~13% height)
   drops the "As seen on" BADGE below the header band (the badge appears AFTER the
   hook fades, so lowering it causes no collision) and the badge is inset from the
   right by SAFE_X so it cannot clip. The LOGO stays near the top (top 26) so it
   sits ABOVE the opening hook panel — lowering it to SAFE_TOP overlapped the hook;
   in the expanded view LinkedIn's avatar occludes the small watermark, which is
   acceptable. VERIFY on a phone in the real feed AND the expanded view, not just
   the Remotion preview: nothing clips left/right, the badge + name plate are fully
   visible, and the badge sits clear of LinkedIn's name/headline. If anything still
   clips, bump SAFE_X / SAFE_TOP toward 0.12-0.14. The designed cover PNG is
   unaffected (in-feed the header sits ABOVE the thumbnail, not over it).
   9:16 (Reels/Shorts/TikTok): the SAFE_X / SAFE_TOP / centered-caption fixes apply
   automatically (the constants are width/height-based). Additionally the name plate
   is raised to ~16% from the bottom for 9:16 (vs the smaller 4:5 margin) to clear
   the Reels/TikTok caption + username band. The right ACTION RAIL (like/comment/
   share) and the bottom caption are 9:16-only platform UI — eyeball the right edge
   and bottom on the actual app. Both aspects verified here via still renders (hook /
   name-plate / badge / caption frames over a placeholder source). Re-render clip7
   to this before reusing it.

## Elevated clip treatments (added Jun 17, 2026 — the manifest is now the source of truth)

Every clip in `honest-hr-shrm_2026-06-09_clips.json` is now upgraded to the clip7
standard (not the old simple `overlays`/`images`): a staggered hook reveal, a
full-screen animated cutaway chosen to FIT the clip's content, an audio-tail fade,
and a single end-card CTA (no mid-roll toolkit image). Treatments are deliberately
varied — we don't yet know what converts, so creativity per clip is preferred.

| Clip | Treatment (cutaway type) | Visual |
|---|---|---|
| 1 spread | `equation` | $120 billed → $100 pharmacy + **$20 SPREAD** bar-split, count-up |
| 2 "1 in 12" | `dotgrid` | 12 dots, 11 dim, 1 pops accent + "1 in 12" |
| 3 clawback | `bigstat` (slam) | "CLAWED BACK" impact-stamp + label |
| 4 "1 in 3" | `bigstat` | "1 in 3" + "= 30% of your workforce" |
| 5 off-radar | `bigstat` (slam) | "OFF YOUR RADAR" + "no claims, no deductible, no data" |
| 6 "62" | `bigstat` (count-up) | 0→62 + "you already pay" + "+60% total cost per person" |
| 7 reporting | `stat` (3-row) | "Ask your PBM for" 1 COST / 2 REBATES / 3 NET COST |

New components in `Clip.tsx`: **BigStatCutaway** (count-up if `big.countTo` is set,
slam-in for a word/phrase otherwise) and **DotGridCutaway** (`grid.total`/`grid.highlight`
ratio). Non-beat hooks now also get a spring entrance. Add new treatments by adding a
`cutaways` entry with the matching `type` + payload (`equation` / `stat` / `bigstat` /
`dotgrid`) — no per-clip component needed for those four shapes.

**Timing convention (important — two clocks in the manifest):**
`captions`/`words` are RELATIVE to clip start (e.g. `2.88`); `overlays`/`cutaways`/
`audioFade` are ABSOLUTE source seconds (e.g. `750`). The render scripts apply the
right offset to each: `render-with-extract.mjs` (the canonical path — pre-extracts each
segment with ffmpeg, avoids compositor OOM) shifts captions/words by `+(inSec - ss)`
and absolute fields by `-ss`; `render-all-platforms.mjs` shifts captions/words by
`+inSec`. If you author a NEW cutaway, use ABSOLUTE source seconds (match the spoken
moment in the full episode). This convention bug previously left manifest-rendered
captions off-screen; fixed Jun 17, 2026.

**Render command (produces all clips, both formats, elevated, with the safe-area fix):**
`git pull` → `cd social_clips/remotion_starter` → ensure `public/source.mp4` (yt-dlp)
+ ffmpeg on PATH → `node render-with-extract.mjs`. Outputs `out/2026-06-09_<slug>_<aspect>.mp4`.

**Still open (next elevation step):** per-clip DESIGNED COVER PNGs. Only clip7 has a
bespoke designed cover (`DesignedCoverClip7`). The others fall back to the generic
`coverMode` still (`render-covers.mjs`) — fine because the in-clip hook shows in the
first ~2s, but a parameterized designed-cover component (one component, per-clip props)
would bring covers up to clip7's level without 6 bespoke files. Build when ready.
