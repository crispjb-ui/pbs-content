---
description: The learning loop. Paste a week's performance numbers; this logs them to the tracker and recomputes what the build system treats as working vs. weak, so each week's results sharpen the next week's builds. Run weekly.
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
---

You are closing the PBS learning loop. `/build-week` reads `linkedin_performance_tracker.md` to choose working frameworks and avoid weak ones — but that only makes the system self-improving if the tracker stays current. This command ingests the week's results and updates the tracker + the learnings.

The user will paste this week's numbers (or point you to a screenshot/export). Expect, per post: title/shape, impressions, reactions, comments, saves, followers; plus newsletter (subs, open rate), Substack (per-post views, new subs, paid), and X (notable posts, reposts, any amplifier event). If anything is missing, ask once, then proceed with what you have.

## Step 1 — Log the raw data

**Active-experiment sub-step:** while any "Active Experiment" section exists at the top of `linkedin_performance_tracker.md` (currently: first-comment timing; CTE question endings W30-W33), log that experiment's per-post fields (arm, comments, impressions) into its section the same session, and when its decision date has passed, compute the verdict per its stated decision rule and surface it in Step 4.
Append to `linkedin_performance_tracker.md` in the existing format: a dated week block with the per-post table, and add any top-tier post (cleared the shape's floor, or a breakout) to the "Recent breakouts" table. Update the "Channel totals" line (followers / newsletter subs / Substack subs + paid) with the new numbers and the delta.

## Step 2 — Recompute the learnings (the self-improving part)
From the new data plus history:
- **Per-shape / per-format floors:** update the averages and floors (decoder, dollar-comparison, shocking-fact, 5-questions, Library NN, messy-infographic, personal milestone). Note if a floor moved (e.g., summer-slowdown floor).
- **WORKING vs WEAK sets:** confirm or revise. Promote a shape that's overperforming; flag a shape that underperformed. These are the exact sets `/build-week` and `week_build_spec.md` §0.5 read.
- **Fatigue / breakout flags:** decoder fatigue = two consecutive decoders <15K with low comments/saves → recommend a different shape next. Breakout = anything well above floor → log it and note whether it was amplified (Cuban comment/repost vs likes-only) and whether it's repeatable.
- **Audience-drift check:** if a post's audience skewed off the plan-sponsor segment (e.g., into Hospitals & Health Care entry-level or Pharma), note it as a content-shape signal.

## Step 3 — Write the takeaway
Add a short "Week takeaway" paragraph to the tracker (the existing convention) stating what changed and the **drafting implication for next week** in plain terms. If the WORKING/WEAK sets changed, say so explicitly so the next `/build-week` picks it up.

## Step 4 — Surface anything actionable
If results imply a change to a standing rule (a shape to retire, a posting-time finding, a fatigued format), flag it for CLAUDE.md and add it to `OPEN_ITEMS.md`.

**Breakout → repurpose auto-draft (added Jul 10, 2026, approved by Brett — don't just "note" breakouts, finish the job):** for every post this week that qualifies as a breakout (cleared ~2x its shape's floor organically, OR an amplifier repost event, OR 15+ saves), draft its redistribution INTO `repurpose_queue.md` the same session — the actual drafts, not a pointer:
1. **X variant** (fresh phrasing per the X dedup rule, pure ASCII, link in first reply) with a schedule note naming an open news-HOLD or Tier-A weekend slot in the next built week.
2. **Substack Note** (launch-teaser or origin register, whichever the post supports).
3. **Video-bank candidate** — one line into `video_content_bank.md`'s pipeline if the concept would carry a 9:16 talking-head or clip.
4. **Future-week echo note** — name which upcoming built week could carry a fresh-angle descendant (respecting the ~6-week no-repeat rule) and drop a one-line note in that week file's build notes.
Apply the provisional-read rule: save-driven posts younger than ~day 7 queue as PROVISIONAL and are confirmed (or pulled) at the next `/log-metrics` run before the X variant ships.

## Step 5 — Commit
Commit the tracker update (and any OPEN_ITEMS / repurpose_queue change) per the repo git practice. Report the 3 biggest learnings and what they change for the next build.
