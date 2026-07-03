# AEO / SEO Playbook (search + answer-engine technique)

_Created Jun 22, 2026. The current-best-practices record for how PBS gets **cited by answer engines and ranked in search** — the SEARCH counterpart to `platform_playbooks.md` (which covers social). Maintained monthly by `/aeo-research` (`.claude/commands/aeo-research.md`); the AEO build loops read it (`/build-aeo-page`, `/backfill-substack-aeo`, and `/build-week`'s Substack-AEO gate). Where a researched best practice conflicts with PBS's measured citation data (`ai_visibility_tracker.md`), the measured data wins._

_Strategy lives in `website_mockups/site/geo_seo_plan.md` + `aeo_geo_master_plan.md`; the per-article rule in `substack_aeo_rules.md`; the website build spec in `website_aeo_master_plan.md`. This file is the evolving **technique** layer that keeps those current. Each item tagged **CONFIRMED** (primary/authoritative source + date) or **DIRECTIONAL** (single/practitioner source)._

## 1. Answer-engine citation behavior (ChatGPT search, Perplexity, Google AI Overviews, Gemini, Claude)
- **Answer-first, self-contained passages get cited.** Engines lift a quotable sentence that answers the query without surrounding context. PBS rule already enforces this (open with one quotable answer sentence). **CONFIRMED** (multiple AEO sources, 2025-2026).
- **Entity clarity matters.** Spell out "Prescription Benefit Solutions" + consistent `sameAs` across the web so engines disambiguate the entity (the bare "PBS" collides with Public Broadcasting Service). **CONFIRMED** (matches CLAUDE.md naming rule rationale).
- **Freshness + structure** help selection; clean headings, lists, and a direct Q→A block are pulled more than dense narrative. **DIRECTIONAL.**
- _(Refresh monthly: any shift in how each engine selects/cites; new citation surfaces.)_

## 2. Structured data / schema
- **Load-bearing types for PBS:** `Organization` + `Person` (with `sameAs`), `Article`, `FAQPage`, `DefinedTermSet`/`DefinedTerm` (glossary), `HowTo` (guides), `WebSite` + `SearchAction`, `BreadcrumbList`. Already built into the site blueprints (31 JSON-LD blocks). **CONFIRMED** (schema.org + Google Search Central).
- **Markup must match visible content** (fake/mismatched schema risks a manual action). **CONFIRMED.**
- _(Refresh monthly: new/newly-weighted types, rich-result + AI-Overview eligibility changes, deprecations.)_

## 3. llms.txt / AI-crawler conventions
- PBS ships an `llms.txt` (per CLAUDE.md). Track adoption + whether engines honor it; keep it in sync with the owned-page map. **DIRECTIONAL** (emerging convention).
- _(Refresh monthly: format changes, engine support, robots/AI-crawler directive shifts.)_

## 4. Answer-first / passage-level optimization
- **Question-shaped SEO title** distinct from the display title, matching the buyer query (enforced by `substack_aeo_rules.md`). **CONFIRMED.**
- **One self-contained answer sentence** opening each piece; **outbound link to the rxbs.org canonical** (glossary / contract-language-library / pillar guide). **CONFIRMED** (PBS rule).
- Topical clusters + internal linking from Substack twin → rxbs.org canonical concentrate authority. **CONFIRMED.**

## 5. Classic SEO still load-bearing for B2B
- E-E-A-T / author authority (real author byline, credentials, `Person` schema, off-site entity signals per `entity_authority_offsite_plan.md`). **CONFIRMED.**
- Internal linking + canonical/twin handling (Substack self-canonical for non-evergreen; evergreen pillars get an rxbs.org canonical twin, Substack links back). **CONFIRMED** (PBS rule).
- Sitemap submitted to Search Console + Bing (open item). Page experience / Core Web Vitals as a tiebreaker. **CONFIRMED.**

## Open technique questions to resolve in research
- Which schema property changes (if any) Google has newly weighted for AI-Overview eligibility this quarter.
- Whether any engine has changed Substack-vs-owned-domain citation preference (affects the canonical-twin priority).
- Current llms.txt honoring across the five engines.

## 6. Engine-specific retrieval facts (added 2026-07-03 plan review)
- **ChatGPT retrieves via Bing's index + OAI-SearchBot.** Bing Webmaster Tools verification + IndexNow (Wix-native) are prerequisites for ChatGPT visibility. **CONFIRMED** (OpenAI bot docs + multiple 2026 analyses).
- **Claude search runs on Brave's index** (~87% citation overlap with Brave organic). Clean, fast, server-rendered HTML wins there. **CONFIRMED** (Anthropic subprocessor list; RivalHound study).
- **Google AI Overviews/AI Mode decoupled from rank:** top-10 organic supplied ~76% of AIO citations mid-2025 → ~38% by early 2026 (Ahrefs). Retrieval is passage-level via query fan-out (~9-11 sub-queries per prompt) — every H2/H3 section must stand alone as a complete answer. **CONFIRMED.**
- **Engines barely overlap** (~11% of domains cited by both ChatGPT and Perplexity) — optimize per-engine, don't assume one win carries. **CONFIRMED** (Profound citation study).
- **Branded web mentions are the strongest single AI-visibility predictor** (Ahrefs 75K-brand study: 0.664 correlation vs 0.218 for backlinks). Third-party listicles + Reddit dominate consideration-query synthesis (Reddit ≈ 47% of Perplexity's top citations). Digital PR / listicle inclusion is a first-order GEO tactic. **CONFIRMED.**
- **Ghost citations:** ~62% of AI citations never name the brand (Semrush, 378K citations). Counter-tactic: put the firm name in the same sentence as every quotable proprietary stat. **CONFIRMED.**
- **Freshness premium:** AI-cited URLs ~26% fresher than organic top-10; ~half of cited content <13 weeks old. Substantive quarterly refreshes with visible + schema `dateModified`; date-bumping without changes is detected and penalized. **CONFIRMED/DIRECTIONAL.**
- **llms.txt: Google formally stated (Jun 2026) it ignores it**; OpenAI log data shows near-zero fetches; Wix now auto-generates one. Keep at zero further investment. **CONFIRMED.**
- **New measurement surfaces (2026):** Google Search Console generative-AI performance report (Jun 2026 rollout; keep the AI-grounding toggle ON), GA4 native "AI Assistant" channel (May 2026), **Wix AI Visibility Overview** (native citation/mention/sentiment tracking in Wix Analytics — enable it). 35-70% of AI referrals arrive referrer-less; the form source field stays ground truth. **CONFIRMED.**
- **Agentic browsers** (ChatGPT Atlas, Perplexity Comet) fill forms — keep lead forms simple labeled fields, no CAPTCHA walls. **DIRECTIONAL.**

## Changelog
### 2026-07-03 (website revamp plan review)
- Added section 6 (engine-specific retrieval facts) from the full plan-review research pass; source detail + top-10 recommendations in `audit_reports/website_revamp_plan_review_2026-07-03.md`.

### 2026-06-22 (seed)
- File created as the search/AEO technique counterpart to `platform_playbooks.md`. Seeded sections 1-5 from the AEO build done Jun 2026 (site blueprints, `substack_aeo_rules.md`, `website_aeo_master_plan.md`). Future entries are written by `/aeo-research` monthly.
