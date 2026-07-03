---
description: Log the month's revenue-side KPIs (leads, SQL/PARTNER alerts, qualified conversations held, broker relationships, engagements signed) into kpi_scoreboard.md, sync the broker tracker, and flag misses against the goal-weighted targets. The revenue counterpart to /log-metrics. Run monthly when the first-Monday reminder fires.
allowed-tools: Bash, Read, Edit, Grep, Glob
---

You are logging the month's revenue-side KPIs. Input = `$ARGUMENTS` plus whatever numbers the user pastes in conversation.

## Step 1 — Collect the six numbers

For the month being logged: (1) toolkit leads captured, (2) SQL alerts, (3) PARTNER alerts, (4) qualified conversations HELD (calls/meetings that actually happened with SQL/PARTNER-tier or equivalent inbound leads), (5) broker relationships at COLLABORATING or better, (6) engagements signed that trace to content/funnel. Plus any notes (names of brokers/clients, notable events).

If any number is missing from the input, ask for it once; if the user does not have it, record the cell as blank with a note. **Never estimate or reconstruct a number** (the Jun 2026 baseline row is the only approximate row allowed on the board).

## Step 2 — Write the row

Open `kpi_scoreboard.md`, fill the month's row (or append if past December 2026, extending the table). Keep notes terse and factual.

## Step 3 — Sync the broker tracker

If the input names broker developments, update the matching rows in `broker_partner_track.md` (status ladder, last touch, next step). If count (5) disagrees with what the tracker shows, reconcile: the tracker is the source of truth; ask which is right.

## Step 4 — Flag against targets

Compare to the Targets table and report plainly:
- On pace / ahead: say so in one line.
- Below target: name the gap and apply the board's escalation rule (two consecutive months below half of target on a primary KPI → the review question is follow-through capacity first: was the sales hour kept, were alerts answered inside 7 days, did P1 notes go out inside 1 business day?).
- If September's row is being logged, break out how many conversations trace to the renewal-reactivation send (Email 07); that number decides whether the reactivation becomes an annual fixture.

## Step 5 — Commit

Commit `kpi_scoreboard.md` (+ `broker_partner_track.md` if touched) with message `KPI log: {Month YYYY}`. Follow the standing branch workflow (merge to main with a review link) if running in an interactive session; in a workflow context, commit locally and let the workflow push.
