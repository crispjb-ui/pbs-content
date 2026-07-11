---
description: Monthly funnel-intelligence read. Paste the Toolkit Leads sheet data (export/screenshot) and this analyzes which toolkits, topics, roles, and sources are actually pulling demand, writes the read to funnel_intelligence.md, and turns it into topic-weighting signals for /build-week and the next toolkit/guide/ad decisions.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

You are running the PBS funnel-intelligence read — the loop that feeds REVEALED demand (what leads actually download) back into topic selection, instead of planning content purely from performance data and editorial judgment. The Watsco lead (Jul 2026: a 7,000-employee VP pulling the compensation worksheet + all three Tier 1 frameworks in one evening) is the canonical proof that download patterns are a demand instrument.

The user pastes the PBS Toolkit Leads sheet (CSV export, copied rows, or screenshots). Expect per row: date, name/email/company/role, toolkit, status. Work with whatever subset arrives; ask once if the month's rows are missing.

## Step 1 — Compute the month's read
From the new rows (and cumulative totals where visible):
- **Toolkit leaderboard:** downloads per toolkit this month + cumulative; flag movers.
- **Topic clusters:** map toolkits to their topic families (compensation/revenue-streams, channel pricing, contract review, RFP, rebates, GER, clinical) and rank cluster demand.
- **Role + size mix:** CFO vs HR vs broker vs other; company-size bands. Note any drift (e.g., brokers rising = partner-track signal).
- **Source field distribution** ("How did you hear about us?") where present — the AI/search rows are the AEO ground truth.
- **Multi-download leads:** anyone at 3+ (Email 08 trigger) or bulk 10+ (broker-track signal) not already flagged.

## Step 2 — Write `funnel_intelligence.md`
Maintain the file as: a dated monthly block (leaderboard, clusters, roles, sources, notable leads anonymized to role+size), then a standing **"Demand signals for the build"** section at top — 3-5 bullets in plain drafting terms (e.g., "compensation/revenue-stream topics are the #1 pull 3 months running; weight Monday deep dives + the next guide accordingly"). That top section is what `/build-week` reads.

## Step 3 — Route the implications
- **Topic weighting** → the top section (Step 2) is the mechanism; also drop a one-line note into the next unbuilt week's build-notes if the signal is strong.
- **Next toolkit/guide decision** → if a demanded topic has NO matching toolkit or answer page, propose it in OPEN_ITEMS (respect the refer-back-first rule: propose only genuine gaps).
- **Ads** → note the top-pulling toolkit for `paid_ads_bank.md` targeting (the ad engine reads it at its monthly run).
- **Sales** → any unworked hot pattern (multi-downloads, SQL-band roles) → flag for the Friday sales-hour brief.

## Step 4 — Commit + report
Commit per repo git practice. Report the leaderboard, the one biggest demand signal, and what it changes for the next build. Never put lead names/companies in committed files (role + size band only); the sheet stays the PII system of record.
