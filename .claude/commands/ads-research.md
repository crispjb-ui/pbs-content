---
description: Monthly paid-ads engine. Sweeps competitor + benefits-advisor ads from the LinkedIn Ad Library (what they run, what's working via ad longevity), develops/refreshes PBS ad concepts wired to the toolkit funnel, and once ads are live ingests performance to kill losers + scale winners. Auto-maintains the ad bank + competitor teardown; PROPOSES every spend/launch/budget decision to OPEN_ITEMS. Never auto-spends; never publishes.
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, WebSearch, WebFetch
---

You are running the PBS monthly **paid-ads** engine. Read `CLAUDE.md` first (brand rules, naming, no-fabrication, clinical-credibility register). **Status is PRE-LAUNCH** (no ads running yet), so this run is competitor research + ad development + keeping the bank launch-ready, with a data-ingestion path for when campaigns go live. LinkedIn-first.

**Two files this engine maintains:** `paid_ads_bank.md` (PBS ad concepts/copy/creative + performance log) and `competitor_ad_teardown.md` (what competitors + advisors run). Edit both in place. The ads feed the **existing, live toolkit lead-magnet funnel** (`rxbs.org/toolkit/<slug>` → 5-email sequence). This command **never auto-spends and never publishes.**

Read for context: `email_gated_toolkit/toolkit_dataset.md` (the toolkit offers + slugs the ads point to), `linkedin_performance_tracker.md` (what organic shapes convert + the funnel-outcome log), `platform_playbooks.md` (LinkedIn ad-format norms), `buyer_anxiety_map.md` (the pain-point lens — build the **"What keeps you up at night" ad series**: one ad per anxiety row, each offering the matching toolkit, targeted to that row's persona).

## Step 1 — Competitor / like-brand ad sweep (LinkedIn Ad Library)
Benchmark set (Ginny's pick): **independent PBM auditors / pharmacy-benefits consultants** + **benefits brokers / advisor thought leaders**. (Transparent-PBM and Potter-style advocates are de-scoped.)
- Identify specific brands in those two categories, then check the **LinkedIn Ad Library** (`linkedin.com/ad-library`) for each via WebSearch/WebFetch.
- For each ad observed, log to `competitor_ad_teardown.md`: brand, runs-ads Y/N, the ad's offer / hook / format (single image / document / video / lead-gen form) / CTA, and **start date or run length** (longevity = the best public proxy for a tested winner). Note brands running NO ads (white space = opportunity).
- **Only log ads actually observed**, with the date checked. No fabricated ads or metrics. Roll up a short "patterns observed" (what offer types / hook shapes / formats run longest across the set; what's absent).

## Step 2 — Develop / refresh PBS ad concepts (auto-apply to the bank)
Update `paid_ads_bank.md`:
- Refresh / add LinkedIn ad concepts that (a) mirror PBS's organically-proven shapes (shocking hidden-structure fact, decoder, named-adversary/dollar-comparison), (b) point at a specific live toolkit offer + `rxbs.org/toolkit/<slug>`, (c) target the right audience (plan-sponsor CFO/HR/Benefits, or broker), and (d) beat or differentiate from what the competitor sweep shows. Each concept: objective, audience, offer, two A/B hook/copy variants, creative direction, status.
- Keep brand rules (spell out Prescription Benefit Solutions; no em-dash separators; no fabricated stats).
- Add a dated changelog entry to both files.

## Step 3 — If ads ARE live: ingest performance + iterate
If the bank's performance log has data (a pasted LinkedIn Campaign Manager export):
- Compute per-ad CTR, CPL (cost per lead), and conversion; mark **kill** (high CPL / low conversion), **scale** (low CPL / converting), **iterate** (promising, refine hook/creative).
- Propose budget reallocation + the next A/B test in OPEN_ITEMS (spend decisions are Ginny's).
If pre-launch (no data), skip this step.

## Step 4 — Propose the spend / launch / judgment calls (do NOT auto-apply)
Append to `OPEN_ITEMS.md` any: proposal to launch a campaign, budget / target-CPL recommendation, audience to build, prerequisite to set up (LinkedIn Campaign Manager, Insight Tag for retargeting, conversion event), or budget reallocation. Each states the recommendation + the evidence + the expected cost. **Do NOT edit CLAUDE.md.** Nothing here spends money; it readies and recommends.

## Step 5 — Notify
Write `/tmp/notify_body.md`:
```
## ✅ Auto-applied (FYI)
- competitor_ad_teardown.md: <brands swept, patterns found>
- paid_ads_bank.md: <concepts added/refreshed>

## 🟧 Needs your one-time approval (in OPEN_ITEMS)
- <launch / budget / audience / prerequisite proposal>  (or: - none this month)
```
Lead with `**Monthly Ads Research** · <date>` and end with one-tap links to both files (`https://github.com/<owner>/<repo>/blob/main/paid_ads_bank.md` and `/competitor_ad_teardown.md`).

## Autonomy boundary
Competitor research + ad-concept/copy development = mechanical → **auto-apply to the two bank files**. **Every spend / launch / budget / go-live decision = judgment → propose to OPEN_ITEMS only.** Never auto-spends, never publishes. When Ginny approves a launch, the concepts are already built and ready to load into Campaign Manager.
