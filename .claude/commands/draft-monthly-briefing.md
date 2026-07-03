---
description: Draft next month's "PBS Briefing" nurture email (the post-sequence Email 06) send-ready from the month's roundups, the shocking-fact bank, and the toolkit library. Runs automatically on the 25th via monthly-briefing-draft.yml; also invocable manually.
allowed-tools: Bash, Read, Write, Edit, Grep, Glob
---

You are drafting the monthly "PBS Briefing" email that goes to every captured toolkit lead (the post-Email-5 nurture). Spec and template: `email_gated_toolkit/emails/06_monthly_briefing_template.md`. Read that file first, plus `CLAUDE.md` (voice + brand rules).

## Step 0 — Determine the send date and check the skip rule

The send is the **first Tuesday of NEXT month** at 9:00 AM EST (this drafts on/around the 25th). Compute that date with Bash.

**Skip rule:** if a renewal-season reactivation send (`emails/07_renewal_season_reactivation.md`, currently Tue Sep 8, 2026) falls within 2 weeks of the briefing date, the briefing is SKIPPED that month (never two PBS emails in the same fortnight). In that case, write no briefing; instead output a short note file (step 3 path) saying the month is skipped and why, and remind that Email 07 is the month's send.

## Step 1 — Gather the three observation slots

1. **Observation 1 (contract/claims pattern):** pick the strongest genuinely-unknown structural pattern available: an unused or under-used entry from `shocking_fact_bank.md` (with its citation), or a pattern surfaced in the latest `research/` landscape file. Plan-sponsor-actionable, one short paragraph.
2. **Observation 2 (news + employer impact):** read the month's `newsletters/roundups/roundup_*.md` drafts and take the single story with the clearest employer cost impact. Restate it in two or three sentences with the "what this means for your plan" line.
3. **Observation 3 (one practical tool):** pick ONE toolkit from `email_gated_toolkit/toolkit_dataset.md` that matches the month's theme (seasonal fit matters: benchmarks mid-year, renewal/termination in fall, planning in Q1). Name the situation it fits and link `rxbs.org/toolkit/<slug>`. Rotate; check prior briefings in `email_gated_toolkit/briefings/` and do not repeat a toolkit featured in the last 3 issues.

## Step 2 — Draft

Fill the body template from `06_monthly_briefing_template.md` exactly (subject pattern, under ~250 words, sign-off, reply prompt). Apply every rule in its "Rules of production" section: value-first, no pitch, one unfakeable detail, spelled-out company name, no em-dash separators, ASCII-safe punctuation, no fabricated statistics, disclaimer only if dollar figures appear. Then run the `/humanize` pass logic (`.claude/commands/humanize.md`) over the draft.

## Step 3 — Save

Write to `email_gated_toolkit/briefings/briefing_YYYY_MM.md` (YYYY_MM = the SEND month). File header:

```
Status: DRAFT - review, then paste into Wix Email Marketing
Send: Tuesday {date}, 9:00 AM EST
Audience: all captured toolkit leads (sequence complete/expired), EXCLUDING active clients, open sales conversations, unsubscribes
Generated: {timestamp}
```

Below the header: the subject line, then the paste-ready body in a fenced code block, then a 3-line "sources used" note (fact citation, roundup story, toolkit chosen) so Ginny can verify in one glance.

Do not commit unless invoked manually outside the workflow (the workflow's commit step handles it).
