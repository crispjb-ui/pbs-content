# AEO/GEO Master Build Plan — single source of truth

_Created Jun 20, 2026. The consolidated, sequenced checklist for the entire AEO/GEO + social-optimization initiative, so nothing discussed this session gets left out when it is built. This is the index; the detail lives in the linked docs. Work the phases top to bottom; within a phase, do the ✅/🔨 before the 🟧/📋 where there is a dependency._

## The goal + the two locked decisions
**Goal:** make Prescription Benefit Solutions the *cited* authority (not just present) when buyers ask AI engines about PBM audits and pharmacy benefits.
**Locked Jun 19, 2026:** (1) spell out **"Prescription Benefit Solutions"** + **www.rxbs.org** in all public content; "PBS" is internal-only. (2) **Wix is the canonical domain**; Substack is the crawlable distribution twin that links back.

**Status legend:** ✅ done (in repo) · 🔨 build in Wix (blueprint ready) · 🟧 Ginny action (outside the repo) · 📋 queued (future content) · 🔁 ongoing/recurring

**Detail docs (the how-to for each workstream):**
- `website_aeo_master_plan.md` — the website build SPEC: the build-once master template (Phase 0, everything derives from it), the two page archetypes, the IA/URL map, component + schema specs, and the content-cluster map
- `website_mockups/site/wix_pages_build_runbook.md` — step-by-step Wix build of the 7 pages
- `website_mockups/site/geo_seo_plan.md` — site SEO/GEO strategy + build order
- `substack_aeo_rules.md` — the every-article Substack rule
- `entity_authority_offsite_plan.md` — Wikidata, Substack Recommendations, off-site seeding
- `ai_visibility_tracker.md` — the monthly citation scoreboard
- `website_audit.md` / (this session's two audits in chat) — origin rationale

---

## PHASE 0 — Foundations & quick wins
| Item | Status | Owner | Where |
|---|---|---|---|
| Entity-naming enforced (spell out firm; remove `alternateName: PBS`; sweep site + llms.txt) | ✅ | Claude | site/*.html, llms.txt |
| Homepage + About stats band filled with real 2025 figures ($78.7M contracted, 203 plans) | ✅ | Claude | index.html, about.html |
| `robots.txt` allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…) | ✅ | Claude | site/robots.txt |
| Confirm robots.txt is live + **submit sitemap to Google Search Console + Bing Webmaster Tools** | 🟧 | Ginny | one-time |
| Fill the two `sameAs` placeholders (Ginny + company **LinkedIn URLs**) in Org/Person schema | 🟧 | Ginny → Claude | index.html, about.html |

## PHASE 1 — Owned canonical answer pages (the moat) + site cohesion
**Build the master page template FIRST (it derives every page): the template, the two page archetypes, and the IA/URL map are specified in `website_aeo_master_plan.md`.** Build order + per-page steps: **`wix_pages_build_runbook.md`.** All blueprints are in `website_mockups/site/` with desktop+mobile previews in `site/renders/`.
| Page | Blueprint | Status | Build |
|---|---|---|---|
| 1. PBM Glossary (`/glossary`) | glossary.html | ✅ blueprint | 🔨 Wix |
| 2. Contract Language Library (`/contract-language-library`) | contract-language-library.html | ✅ | 🔨 Wix |
| 3. What We're Seeing (`/what-we-are-seeing`) | what-we-are-seeing.html | ✅ | 🔨 Wix |
| 4. Guide: What Is a PBM Contract Audit | guide-pbm-contract-audit.html | ✅ | 🔨 Wix |
| 5. Guide: What Is Spread Pricing | guide-what-is-spread-pricing.html | ✅ | 🔨 Wix |
| 6. Guide: How to Choose a PBM Auditor | guide-how-to-choose-a-pbm-auditor.html | ✅ | 🔨 Wix |
| 7. Compare: PBM Audit vs. Broker Review | compare-pbm-audit-vs-broker-review.html | ✅ | 🔨 Wix |
| 8. FAQ: Questions Plan Sponsors Ask (`/faq`) | faq.html | ✅ blueprint | 🔨 Wix |
| Structured data on every page (Article/DefinedTermSet/FAQPage/Breadcrumb) — **paste into Wix SEO panel** | ✅ in blueprints | 🔨 Wix | the key AEO step |
| Cohesion: shared site.css, nav, normalized footer, dark-hero pattern across all 13 pages | ✅ | Claude | site/*.html |
| CreativeWork schema on toolkit dynamic page (bind to CMS) | ✅ blueprint | 🔨 Wix | toolkit.html |
| Service schema (Solutions) + Person/Org schema (About) | ✅ blueprint | 🔨 Wix | solutions/about |
| Insights hub wired to internal pages + "Guides & Answers" row; homepage cards wired | ✅ | Claude | insights/index |
| Add `/glossary`, `/contract-language-library`, guides to Wix nav (under Insights) + footer Reference column | 🔨 | Ginny/Wix | per runbook |
| Collect + place 3 testimonials (Home + About quote cards); official all-white logo PNG | 🟧 | Ginny | placeholders flagged |

## PHASE 2 — Substack AEO (the citation supply line)
Rule: **`substack_aeo_rules.md`** (5 requirements per article). Enforced by `week_build_spec.md` §8 + `/critique`.
| Item | Status | Owner |
|---|---|---|
| Durable Substack AEO rule written + wired into CLAUDE.md + build spec | ✅ | Claude |
| W26–W37 rewritten (SEO titles, answer-first leads, outbound rxbs.org links, firm spelled out) | ✅ | Claude |
| When building each week W38+: apply the rule via `/build-week` (gate is in §8) | 🔁 | Claude |
| Set the **SEO Title field** in Substack per post (use the `SEO Title (AEO)` line from the week file) | 🔁 🟧 | Ginny (at publish) |
| Backfill W06–W25 to the rule | 📋 | Claude (bandwidth) |
| Mirror evergreen Substack pillars → rxbs.org canonical (Library/glossary/quarterly data); Substack links back | ✅ pattern set | 🔁 |

## PHASE 3 — Social channel optimization
| Item | Status | Owner | Note |
|---|---|---|---|
| LinkedIn = entity + reach, NOT citations (re-labeled in plan) | ✅ | Claude | login-walled |
| Finish LinkedIn profile entity build: banner, endorsements (3-5), recommendations (2-3), public-URL/phone cleanup | 🟧 | Ginny | OPEN_ITEMS Tier-2 |
| Keep NAP consistent (name / Charleston SC / www.rxbs.org) across LinkedIn, X, Substack | 🟧 🔁 | Ginny | feeds entity |
| X: keep decoder threads standalone-readable (minor) | 🔁 | Claude | x_account_strategy |
| **Substack Recommendations** ask (Potter + aligned newsletters) — biggest Substack-growth lever | 🟧 | Ginny | template in entity doc |
| Native 9:16 video as Wednesday discovery surface (already in motion) | 🔁 | Ginny | linkedin_2026 deep dive |

## PHASE 4 — Entity authority & off-site (compounding)
Detail + paste-ready copy: **`entity_authority_offsite_plan.md`.**
| Item | Status | Owner |
|---|---|---|
| Wikidata items: Prescription Benefit Solutions (org) + Ginny Crisp (person) | 🟧 | Ginny |
| Listicle inclusion ("best independent PBM auditors / pharmacy benefits consultants") | 🟧 🔁 | Ginny |
| Reddit/Quora expert answers (disclosed), ~1-2/week, link the right guide/glossary page | 🟧 🔁 | Ginny |
| Directory + NAP consistency (LinkedIn, GBP, Crunchbase, Health Rosetta, Mitigate) | 🟧 | Ginny |
| Google Knowledge Panel (emerges from the above; claim when it appears) | 🟧 🔁 | Ginny |

## PHASE 5 — Measurement (proves leadership)
Scoreboard: **`ai_visibility_tracker.md`.**
| Item | Status | Owner |
|---|---|---|
| Run the 20-prompt **baseline** across ChatGPT/Perplexity/Gemini/Google AIO/Claude | 🟧 | Ginny |
| Re-run **monthly**; log cited Y/N, competitors, source URL; act on the "source URL" diagnostic | 🟧 🔁 | Ginny |
| Watch referral traffic from chatgpt.com / perplexity.ai / gemini in analytics | 🟧 🔁 | Ginny |
| Fold the monthly run into `/system-audit` + `/quarterly-research` so it is not forgotten | ✅ noted | Claude |

---

## Consolidated "Ginny inputs / assets needed" (the unblock list)
1. Ginny's LinkedIn URL + the company LinkedIn URL (→ schema `sameAs`).
2. 3 testimonials (client + broker + CFO) for Home/About quote cards.
3. Official all-white PBS logo PNG.
4. Submit sitemap to Google Search Console + Bing (one-time).
5. Create the two Wikidata items.
6. Time to: build the 7 Wix pages (runbook), run the AI-visibility baseline, send the Potter Substack-recommendation ask.

## Definition of done
- All 7 pages live at their rxbs.org slugs with structured data validating in Google's Rich Results Test.
- Every Substack article ships with its SEO Title (AEO) set and an outbound rxbs.org link.
- Wikidata items live; NAP consistent; sitemap submitted.
- The AI Visibility Tracker baseline is run, and the monthly cadence is on the calendar.
- Scoreboard goal: over 1-2 quarters, the tracker's "source URL" column shifts from Substack-only to **rxbs.org**, and Prescription Benefit Solutions appears in answers to the consideration prompts ("best independent PBM auditor").

_When an item ships, mark it ✅ here and remove the matching line from `OPEN_ITEMS.md` so the two stay in sync._
