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
   word-level timestamps), NOT static sentence blocks, never centered. NO
   background box: bold white Plex Sans SemiBold with a 2px dark outline +
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
