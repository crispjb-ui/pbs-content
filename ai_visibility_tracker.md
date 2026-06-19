# AI Visibility Tracker (AEO/GEO Scoreboard)

_Created Jun 19, 2026. The scoreboard for "are we the cited authority in our space." Companion to `website_mockups/site/geo_seo_plan.md` (the strategy) and `linkedin_performance_tracker.md` (the LinkedIn scoreboard). Run monthly._

## Why this exists
"Leader in our space" is a measurable claim. Classic analytics (Search Console, referral traffic) tell you about clicks; they do NOT tell you whether ChatGPT, Perplexity, Gemini, Google AI Overviews, and Claude **cite Prescription Benefit Solutions** when a buyer asks the question. This file is that measurement. The real GEO win is being the named/cited source; the real diagnostic is the **source URL the engine pulled** (that tells you which asset to build next).

## How to run (monthly, ~30-45 min)
1. Run each prompt in the bank below, fresh, in each engine (logged out / no personalization where possible): **ChatGPT (search mode), Perplexity, Google AI Overviews, Gemini, Claude.**
2. For each prompt × engine, log:
   - **Cited?** Y / N — is Prescription Benefit Solutions named or linked in the answer?
   - **Source URL** — which page got pulled (rxbs.org/<page>, the Substack URL, a third-party listicle, none).
   - **Competitors cited** — who else shows up (name them; this is the competitive map).
3. Update the monthly snapshot table. Note movement vs. last month.
4. **Act on the diagnostic:** if an answer pulls a Substack URL instead of the rxbs.org canonical, that is a signal to strengthen/internally-link the owned page. If a competitor owns a query, that is the next content target. If nothing is cited, the topic needs an owned answer page.

## Prompt bank (the buyer questions — keep ~20, stable for trendlines)

**Bottom-funnel / consideration (highest value):**
1. Best independent PBM audit firm for self-funded employers
2. Who can audit my PBM contract
3. Independent PBM contract review companies
4. How to choose a PBM consultant
5. PBM audit vs broker-led pharmacy review
6. Pharmacy benefits consultant for self-funded employers

**Definitional / answer-shaped (citation-magnet):**
7. What is spread pricing in a PBM contract
8. What is a rebate aggregator
9. What is a generic effective rate (GER)
10. What is the difference between a copay accumulator and a maximizer
11. What is a PBM contract audit
12. What does pass-through pricing mean in a PBM contract

**How-to / intent (toolkit-adjacent):**
13. How do I audit my PBM contract
14. How can a self-funded employer lower pharmacy spend
15. What contract language protects a plan sponsor from spread pricing
16. How to run a PBM RFP
17. What audit rights should be in a PBM contract
18. How to read a PBM rebate report

**Entity / authority:**
19. Who is Ginny Crisp PharmD
20. What is Prescription Benefit Solutions

## Monthly snapshot

### Baseline — _(to run)_
Run the bank once to set the baseline, then monthly. Cells: ✅ cited (rxbs.org) / 🟨 cited via Substack only / ⬜ not cited.

| # | Prompt | ChatGPT | Perplexity | Google AIO | Gemini | Claude | Top competitor cited |
|---|--------|:--:|:--:|:--:|:--:|:--:|---|
| 1 | Best independent PBM audit firm | | | | | | |
| 7 | What is spread pricing | | | | | | |
| 8 | What is a rebate aggregator | | | | | | |
| 11 | What is a PBM contract audit | | | | | | |
| 13 | How do I audit my PBM contract | | | | | | |
| 19 | Who is Ginny Crisp PharmD | | | | | | |
| 20 | What is Prescription Benefit Solutions | | | | | | |
_(expand to all 20 at baseline; the 7 above are the priority watch set.)_

### Trend log
- _(add a one-line monthly entry: how many of 20 cited rxbs.org, how many Substack-only, notable competitor movement, and the single asset built in response.)_

## Owned-asset map (what each query should resolve to)
| Query family | Canonical owned page (rxbs.org) | Status |
|---|---|---|
| Definitions (spread, GER, rebate aggregator, DIR, accumulator) | `/glossary` | built (blueprint) |
| Protective contract language | `/contract-language-library` | built (blueprint) |
| 2025 aggregate data / "what we find" | `/what-we-are-seeing` | built (blueprint) |
| What is a PBM contract audit / how to audit | `/guides/pbm-contract-audit` (pillar guide) | queued (#8) |
| Best / choose an auditor (consideration) | `/guides/how-to-choose-a-pbm-auditor` | queued (#16) |
| Services / firm | `/solutions`, `/about` | live |

## Notes
- Cross-reference with `geo_seo_plan.md` build order. As owned pages ship to Wix, expect the "Source URL" column to shift from Substack-only (🟨) to rxbs.org (✅). That shift IS the leadership move working.
- Tie into `/quarterly-research` (deep refresh) and `/system-audit` (monthly maintenance) so this gets run, not forgotten.
