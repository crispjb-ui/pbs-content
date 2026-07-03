# KPI Scoreboard — the two primary goals, measured monthly

**Created:** July 3, 2026 (Tier 1 automation from the 6-month strategy audit). The audit's most damning finding was that the Q2 pipeline scorecard was never filled in: impressions got measured religiously, revenue never. This file is the fix. It tracks ONLY the goal-weighted KPIs (CLAUDE.md Critical Rules, Jul 3, 2026); channel metrics stay in `linkedin_performance_tracker.md`.

**How it gets filled:** the first Monday of each month, the `monthly-kpi-prompt` workflow posts a reminder with the six questions. Ginny (or Brett) replies with the numbers in a Claude session and runs `/log-kpis`, which appends the row, syncs the broker tracker, and flags misses. When the Google Sheet service key (`GSHEET_SA_KEY`) is set up, the lead counts auto-populate and only the calls/relationships questions stay manual.

## Targets

| KPI | Target | Deadline |
|---|---|---|
| **Qualified conversations held** (SQL/PARTNER leads → actual calls/meetings) | 4-6 per month | ramp by October 2026 |
| **Non-Hylant broker relationships active** (COLLABORATING or better in `broker_partner_track.md`) | 3-5 | December 31, 2026 |
| Toolkit leads captured (leading indicator) | 25-40 per month | by October 2026 |
| Content-sourced engagements signed (the outcome) | count them; no quota yet | — |

## Monthly log

| Month | Toolkit leads | SQL alerts | PARTNER alerts | Qualified conversations held | Broker relationships (COLLAB+) | Engagements signed | Notes |
|---|---|---|---|---|---|---|---|
| Jun 2026 (baseline, reconstructed) | ~5-15 (untallied; first funnel month) | — (scoring live Jun 8) | 2+ (GWCU, Custom Benefits) | 1+ (GWCU Jun 22) | 1 (GWCU forming) | 1 (Stand Together: Contract Review + PBR) | Funnel's first month; baseline is approximate by design, no reconstruction beyond this row. |
| Jul 2026 | | | | | | | _first tracked month; log in early Aug_ |
| Aug 2026 | | | | | | | |
| Sep 2026 | | | | | | | _renewal reactivation (Email 07, Sep 8) replies land here_ |
| Oct 2026 | | | | | | | _4-6 conversations/month target due_ |
| Nov 2026 | | | | | | | |
| Dec 2026 | | | | | | | _3-5 broker relationships target due_ |

## Reading the board

- **Qualified conversation** = a scheduled call or meeting actually held with an SQL or PARTNER lead (or an inbound reply that becomes one). Booked-but-not-held does not count.
- **Broker relationship** counts at COLLABORATING or REFERRING on the `broker_partner_track.md` ladder. CONTACTED/MET rows are pipeline, not the KPI.
- **Two consecutive months below half of target** on either primary KPI = escalate at the next monthly review: the fix is almost always follow-through capacity (sales hour kept? alerts answered inside 7 days?) before it is content.
- No fabricated or estimated numbers in this table; blank beats guessed.
