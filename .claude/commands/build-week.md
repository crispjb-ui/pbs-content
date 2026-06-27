---
description: Build a newsletter week file end-to-end through the rigorous, hardwired PBS process (look-back + look-ahead, seasonal flow, shocking-fact weaving, Run of Show, all build gates).
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, WebSearch
---

You are running the hardwired PBS week-build process for **week $ARGUMENTS** (e.g. `/build-week 38`). The point of this command is that the **same rigorous process happens every time**, automatically. Do not freelance the structure or skip steps. The gate checklist is `week_build_spec.md`; the skeleton is `newsletters/templates/week_build_template.md`; the rules rationale is `CLAUDE.md`. Build to all of them.

Work the steps in order. Do not draft any content until Steps 1–3 are done.

## Step 1 — Research the landscape, then look back and look ahead (do this first, do not skip)
0. **Landscape / what's in the works.** Before topics, scan what is actually happening: `WebSearch` recent PBM / pharmacy-benefit news in the build window (FTC actions, state PBM laws, lawsuits, payer/PBM earnings, manufacturer moves) and check the repo RSS (`newsletters/roundups/rss_weekly_feed.md`, `rss_news_alert_zap.md`, recent `newsletters/roundups/`) and amplifier activity (Cuban / Ciaccia / Fein / Drug Channels / 46brooklyn). For a tentpole week (Sep–Oct surge, Potter-paired, marquee topic), run the `deep-research` skill for a cited landscape read. Record the 3–5 most relevant developments in the build notes and flag any that warrant a same-week news-reaction post. This grounds topic timeliness, the X news slots, and confirms the shocking fact is still current.
0b. **Platform best practices.** Read `platform_playbooks.md` and draft each platform's content (LinkedIn, X, Substack, and any video / Shorts / TikTok clips) to the CURRENT best practices in it (hook, format, spec, cadence). Where the playbook conflicts with PBS's measured WORKING/WEAK data (`linkedin_performance_tracker.md`), the measured data wins. (The playbook is refreshed monthly by `/platform-research`.) **For the Wednesday video slot, pull the next concept from the Active shoot-list in `video_content_bank.md`** (maintained monthly by `/video-research`); use the top ready scripted concept unless a same-week topic fit is stronger.
1. **Topics, both directions.** `Glob newsletters/week_*.md`. Read the `## Weekly Run of Show` (or Publishing Timeline on un-migrated files) and the Mon/Tue/Thu titles of the **last ~6 weeks** and the **next several planned weeks** (also check `pbs_q3_2026_content_calendar.md` / `pbs_q2_*` / Q4 calendar). Write two lists into your working notes: *recent topics* and *coming topics*. The new week must not duplicate or sit near-adjacent to any topic in **either** direction within ~6 weeks. It must build on the prior week and hand off cleanly to the next.
2. **Performance.** Read `linkedin_performance_tracker.md` (All-Time rankings, Performance by Format, the "Recent breakouts" log). Note the **WORKING set** (decoder, named-actor dollar comparison, shocking-fact reveal, 5-questions carousel, Library NN save-asset, high-craft milestone) and the **KNOWN-WEAK set** (informational/no-villain explainer, musing text, price-list-without-actor, paused Whiteboard carousel, casual personal snapshot). Pick only working frameworks per slot. Run the decoder-fatigue check.
3. **Season + flow.** Place the week on the seasonal arc (CLAUDE.md Seasonal Patterns + `week_build_spec.md` §1.5): summer trough = lean into shocking-fact/named-adversary, lighter holiday weeks; Sep–Oct surge = load the strongest content and breakout attempts. Align to where plan sponsors are in their year (renewal/RFP/Q4 planning/Jan benchmarking).
4. Record the look-back/look-ahead findings, the season placement, and the framework choices (with why) into the week file's build notes so the reasoning is auditable.

## Step 2 — Lock the three distinct topics
Write the triple-distinct line: **Mon / Tue / Thu+Field Note**, three different subjects, each a working framework, fitting the seasonal arc and clear of the recent+coming topics. If any two collapse, redraft now.

## Step 3 — Pull the shocking fact
From `shocking_fact_bank.md`, take the fact mapped to this week (fact→week table) or the best unused fit. Confirm its citation; if a figure may be stale, `WebSearch` to re-verify (no fabricated stats). This fact gets woven into the Thursday breakout (first choice), else the Wednesday POV or X AM amplifier.

## Step 3.5 — Wendell Potter check (required)
Check `wendell_potter_cascade_alignment.md` + `wendell_potter_contributorship_strategy.md` + the Potter schedule against this week:
- **Potter-publish week:** build the same-day cross-promo to the WP article (LinkedIn + X tagging @wendellpotter); coordinate topic; do not scoop pre-publish.
- **Cascade week (week after a Potter piece):** align the Monday deep-dive topic to the prior piece per the alignment map (SWAP/REFRAME), and build the reference-back block (Mon newsletter opener + deep-dive callout + early-week Note/X back-link).
- **Series arc:** any Potter piece built/queued must advance the one continuous series story (`wendell_potter_piece_outlines.md` → Series Narrative Arc) — open with a callback + map anchor, close with a handoff to the next, carry the recurring black-box image and refrain, plant/pay off cross-piece seeds. A chapter, not a standalone essay.
- Confirm the every-other-week guest-article + video-podcast cadence is reflected and the next Potter piece's topic/copy is queued. If none apply, note "no Potter dependency this week."

## Step 4 — Generate from the template
Copy `newsletters/templates/week_build_template.md` to `newsletters/week_NN_<slug>.md` and fill every PART. Keep the section order. All paste-ready blocks in fenced code blocks. Hashtags 3/post per the pillar+anchor rule. No em-dashes as separators; PBS not RXBS; Ginny Crisp, PharmD.

## Step 5 — Build the Run of Show
Fill `## Weekly Run of Show` as a publish-order table with a **Where** column pointing to each item's section/Post number. Reconcile every row to the content you actually built (no drift). `⚠` any open item — never leave a silent gap (e.g., a slot with no live post).

## Step 6 — Visuals: no dead weight
Apply the deep-dive-visual rule: a Tuesday/Thursday visual repurposed into the Monday deep dive goes INTO PART 1 as `### In-Article Visual`, not the backlog, not a dead DO-NOT-SHIP block. Genuinely-parked drafts (paused format / displaced topic) go to `evergreen_visual_backlog.md` or `field_note_backlog.md` with full spec. Zero REPURPOSED/DO-NOT-SHIP carcasses remain.

## Step 7 — Toolkit (if one ships)
Build/confirm `templates/documents/week_NN_*.html`, re-render the PDF (WeasyPrint) and preview PNG (render_preview.py) in the same commit, keep it to 2 pages, add the "Terms used" glossary callout, and fill `PART 1C` (dataset row + Wix checklist + pairing rationale).

## Step 8 — Run the gates
Open `week_build_spec.md` and verify **every** gate ✓. Any gate you skip must be logged with a one-line reason. Do not call the week done with an open gate.

## Step 9 — Ship
Commit (HTML+PDF+PNG together if a toolkit changed), push `-u origin <branch>`, merge to main per the repo git practice. Report: the triple-distinct line, the season placement, the shocking fact used, the frameworks chosen, and any ⚠ open items left for Ginny.
