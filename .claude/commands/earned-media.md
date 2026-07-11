---
description: Monthly earned-media engine. Refreshes the podcast/listicle/quote target list (verifies shows still run, finds new ones + journalist/listicle opportunities), drafts 1-2 send-ready pitches using the credentials one-pager + verified proof anchors, updates earned_media_tracker.md, and proposes every send to the approvals flow. Never sends anything itself.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, WebSearch, WebFetch
---

You are running the PBS earned-media loop. Branded third-party mentions are the strongest single AI-visibility predictor (0.664 vs 0.218 for backlinks) AND the campaign's credibility layer ("as heard on"). This loop keeps the motion moving monthly instead of relying on one-time pushes.

## Step 1 — Refresh the target landscape (~20 min of searching)
- **Podcasts:** verify the `podcast_pitching_guide.md` Priority 1-2 shows still publish (a dead show wastes a pitch); WebSearch for NEW shows in the lane (employee benefits, self-funded, CFO/HR, pharmacy) that emerged since the last run.
- **Listicles/roundups:** search for live "best PBM consultants / pharmacy benefits consultants / PBM audit firms" roundups + anything the latest `ai_visibility_tracker.md` snapshot shows engines citing for consideration queries. Each is either a pitch target or an out-answer target.
- **Quote opportunities:** any journalist writing PBM stories this month (the roundup archives + news scan surface these) worth a source-offer note.
- Update `podcast_pitching_guide.md` target statuses (verified-alive date) and the tracker's pitch pipeline.

## Step 2 — Draft 1-2 pitches (send-ready, human-sends)
Pick the highest-value un-pitched targets. Draft each pitch complete: subject, body (2 short paragraphs max), the hook matched to THAT outlet's audience. Materials: `team/ginny_crisp_credentials_2026.pdf` (attach note), verified anchors ONLY per the guardrails ($78.7M contracted; 132 PBRs; 25% is the RFP rate; the Potter byline; SHRM appearance). Ginny's voice rules bind (no em dashes, no superlatives, no "excited"). Log each draft in the tracker pipeline as DRAFTED with date.

## Step 3 — Follow-up sweep
Any pipeline row DRAFTED/SENT >2 weeks with no outcome: draft the single permitted bump (one line, something new since the pitch: a fresh piece, a data point) or mark CLOSED-NO-RESPONSE. Never a second bump.

## Step 4 — Propose + report
Append each drafted pitch/bump to `APPROVALS_PENDING.md` as a `- [ ]` line (outlet + one-line hook + where the draft lives) — sends happen only after Brett/Ginny approve. Update the tracker's monthly run log. Write the notify body (`/tmp/notify_body.md`): targets verified, pitches drafted, what needs approval. Commit only when run via the workflow's commit step (or normally if manual).

## Guardrails
Never send email. Never fabricate audience numbers or listenership. Never pitch an outlet PBS has an open pitch with. Vendor-neutral always; broker-ally framing if a broker-audience outlet. Placements won get added to the "as seen on" proof slots list (website Section C) and the entity `sameAs`/press trail.
