---
description: Pre-ship quality red-team. Scores a week file (or a single post/draft) against the winning-profile traits, the Excellence bars, the Humanize Check, the current working/weak learnings, and brand rules — and returns specific fixes, not a rubber stamp. Run before shipping.
allowed-tools: Bash, Read, Grep, Glob
---

You are red-teaming PBS content before it ships. Target = `$ARGUMENTS` (a week number, a file path, or a pasted draft). Be a tough editor: the job is to catch weak content before it goes out, with **specific fixes**, not to approve.

Read first: `CLAUDE.md` (voice + rules), `week_build_spec.md` (gates), and `linkedin_performance_tracker.md` (the live WORKING/WEAK sets + floors).

## Score each post against:
1. **Hook (confrontation test):** does it name an adversary, create a knowledge gap, or provoke discomfort? Informational/musing openers fail. Flag and rewrite the hook if weak.
2. **Working framework?** Is it in the WORKING set (decoder, named-actor dollar-comparison, shocking-fact reveal, 5-questions, Library NN, high-craft milestone)? If it's in the KNOWN-WEAK set (informational/no-villain, musing, price-list-without-actor, paused Whiteboard, casual snapshot) → flag for reshape.
3. **Proprietary anchor (Humanize Check):** one unfakeable detail (a figure PBS has seen, a clause §, a drug, a scene)? Naked claims fail.
4. **One formula, not stacked;** no AI-tell blacklist phrases ("Here's the thing," "The truth is," "It's not X it's Y," etc.); arrhythmic sentence length.
5. **Day-specific bars:** Thursday → the 5-trait Excellence checklist (messy-infographic/photoreal, named-actor hook, proprietary anchor, first-comment names the same-day Field Note, Field Note exclusively supports it). Tuesday → the Excellence bar (hook, anchor, cross-promo routing). Wednesday → confrontational hook required.
6. **Shocking fact (if present):** sourced + cited, re-verify-able, not fabricated.
7. **Brand rules:** no em-dash sentence separators; PBS not RXBS; Ginny Crisp, PharmD; no fabricated statistics; 3 hashtags PascalCase; paste-ready blocks fenced.
8. **Cross-week:** triple-distinct (Mon/Tue/Thu different subjects); not duplicating a recent or coming topic; for Potter weeks, the cascade/series-arc check.

## Output
Per post: **PASS** or **FLAG** with the specific issue and a concrete fix (rewrite the hook, add an anchor, reshape the framework, name the Field Note, etc.). End with: the single highest-risk post of the week and whether the week is ship-ready or needs another pass. Do not edit files; this is a review. (To apply fixes, the user can run `/humanize` or ask for the rewrite.)
