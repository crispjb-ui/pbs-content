# rxbs.org AEO/GEO Master Plan v2 (website build spec — conversion-first)

_Created Jun 20, 2026; **rebuilt to v2 on Jul 6, 2026** to align with the master gameplan, the September renewal campaign, and the publish-ready asset bank. **What changed in v2:** the build order flipped from content-first to **conversion-first** (the campaign-critical pages ship before the answer pages); the URL map gained the new asset pages (/standards, /renewal-second-opinion, /request-a-call, /how-we-charge, /results, /for-brokers); four new reusable components (trust-nav cluster, seasonal campaign band, Fiduciary File block, proof band); measurement moved BEFORE the build (baseline + conversion events pre-launch); the Calendly reference was removed (contradicted Ginny's no-scheduler decision — the request-a-call form is the primary conversion mechanism); and a sitewide internal-linking rule was added. The initiative-level tracker across all workstreams remains `aeo_geo_master_plan.md`; the execution order of everything lives in `MASTER_GAMEPLAN.md` (this plan = its P1 block, in detail)._

---

## North star + how "leadership" is measured
**Goal:** be the source ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude *cite* when a self-funded employer or broker asks a pharmacy-benefits question, and convert that high-intent traffic into qualified conversations. **Scoreboards:** `ai_visibility_tracker.md` (20 buyer prompts monthly; watch the source-URL column shift from Substack to rxbs.org) and `kpi_scoreboard.md` (the conversion side: the site exists to feed qualified conversations, the primary KPI).

## Decisions locked
- **Naming:** spell out "Prescription Benefit Solutions" + www.rxbs.org in all public copy; "PBS" internal only (collides with Public Broadcasting Service for LLMs).
- **Canonical domain = Wix/rxbs.org.** Evergreen content mirrored to rxbs.org self-canonical; Substack is the crawlable distribution twin that links back.
- **Brand system = PBS v2** (`site.css` tokens): Primary `#015880`, Accent `#A7E0FA`, Gray `#4D4D4D`, paper `#FAFAF7`, ink `#0c1a22`; IBM Plex Sans / Plex Mono; triangle wordmark.
- **NO calendar-exposing scheduler, ever** (Ginny, Jul 3, 2026). The request-a-call form (`email_gated_toolkit/request_a_call_form_spec.md`) is the primary call-to-action mechanism sitewide; the admin schedules by email. Any earlier reference to Calendly/Wix Bookings is superseded.
- **Answer-first everywhere (v2):** every page, both archetypes, opens with one self-contained, quotable sentence stating what the page is or answers (the Substack AEO rule applied to the site). On money pages this is a plain service definition ("A Renewal Second Opinion is a fast, independent read of your PBM renewal terms before you sign"), not marketing framing.

---

# THE BUILD ORDER v2 (conversion-first)

> **Two rules make this one build, not three:** (1) build the template before the pages (Phase 0 once; every page after is a fill-in); (2) **the September campaign's pages ship before the answer pages** — campaign traffic lands on money pages, and money pages convert; answer pages compound later regardless of a two-week delay. Deadline that governs everything: **the conversion spine live by Aug 15.**

## ▶ PHASE 0 — Master template + global components (BUILD FIRST)
Build once in Wix as theme settings + global elements + saved sections. Spec in Section A.
1. **Theme tokens** (colors, Plex type scale).
2. **Global header** (nav per Section B, incl. the trust cluster) + **global footer**.
3. **Reusable sections:** Hero (dark + light), Author/Credibility block, body prose styles, Inline lead-magnet CTA, Related-Questions block, FAQ accordion, the single Lead-Form component, **and the four v2 additions: the Seasonal Campaign Band, the Fiduciary File block, the Proof Band (2025 stats), and the Trust-cluster footer links.**
4. **Sitewide schema scaffold** (WebSite+SearchAction, Organization, Person) + per-page schema slots.
**Done when:** a blank page assembles into a full on-brand, schema-complete page from saved sections in ~15 minutes.

## ▶ PHASE 0.5 — Measurement BEFORE anything ships (v2: promoted from Phase 5)
Do these while Phase 0 is underway; none depends on new pages existing:
1. Submit sitemap to **Google Search Console AND Bing Webmaster** (ChatGPT retrieves via Bing); confirm **IndexNow** is on (Wix-native). Set `GSC_SA_KEY` so the monthly pull starts.
2. **Run the 20-prompt AI-visibility baseline NOW** — without a pre-build baseline there is no before/after proof the build moved citations.
3. Enable **Wix AI Visibility Overview** (native citation/mention tracking).
4. Define the **conversion events** in analytics before launch: toolkit form submit, call-request submit, briefing registration, PDF download; the LLM-referrer segment (chatgpt.com, perplexity.ai, gemini.google.com, claude.ai); the UTM convention for Substack→site links.
5. Fill the `sameAs` LinkedIn URLs in the Organization/Person schema.

## ▶ PHASE 1 — Lock the architecture (URLs never move)
Implement Section B: the v2 URL map (now including the asset pages), the nav with the Learn mega-menu AND the trust cluster, breadcrumbs, redirect policy. Freeze slugs before building bodies; a published URL is never renamed without a 301.

## ▶ PHASE 2 — THE CONVERSION SPINE (the campaign-critical eight; ⏱ live by Aug 15)
Build in THIS order (each later page links to earlier ones; copy sources named):
1. **`/request-a-call`** — `email_gated_toolkit/request_a_call_form_spec.md`. Everything else CTAs into it; build it first.
2. **`/renewal-second-opinion`** — `renewal_second_opinion_kit.md` (▼▲ copy). The September offer's landing page.
3. **`/for-brokers`** — `broker_partner_track.md` §3 copy. The PARTNER-track landing surface.
4. **`/standards`** — `standards_independent_pbm_review.md` (▼▲ copy, after Ginny's pass + counsel). The category manifesto; the RSO page's independence attestation cites it.
5. **`/how-we-charge`** — `pricing_architecture_memo.md` page copy (after Ginny's tier decision). Radical fee transparency; classic high-intent AI query.
6. **`/results`** — shell now (2025 stat band + "case studies coming" slots), case studies slot in as the closeout kit permissions them.
7. **`/glossary`** and 8. **`/contract-language-library`** — the two AEO anchor pages (blueprints done); they ship in Phase 2 because every money page's cluster links point at them.
Plus, while in the editor: fix the live-site defects (`website_audit.md`): the "Mysite" SEO titles, hero CTA, blank Newsletter page, Toolkit Library nav placement.

## ▶ PHASE 3 — The remaining answer pages + refits
`/what-we-are-seeing`, `/faq`, the 4 guides (blueprints done), then refit Home / Solutions / About / Insights to the template. **The redesigned homepage is deliberately LAST in this phase:** LinkedIn traffic lands on toolkit/article pages, campaign traffic on the RSO page, AI-referred traffic on answer pages; the homepage has the least measurable job, so it never blocks the campaign. Live-page retrofit (Toolkit Library schema + the 29 toolkit forms' source field) rides along here.

## ▶ PHASE 4 — Content waves (unchanged)
Remaining cluster pages from Section E in waves + mirror the strongest Substack deep dives as `/articles/` pages. Later additions when their gates clear: `/decoder` (`contract_decoder_spec.md`, Q1 2027), the benchmark intake (`benchmark_coop_spec.md`, Q4), the Index's canonical page (mid-Jan 2027).

## ▶ PHASE 5 — Off-site authority (compounding; measurement already moved to 0.5)
Execute `entity_authority_offsite_plan.md` (Wikidata, Substack Recommendations, Reddit/Quora, listicles, NAP) + the monthly tracker cadence.

---

# SECTION A — Master template + component library

## Two page archetypes (unchanged in structure; v2 adds four components + one rule)

| Component | **Content / Answer** (guides, glossary, library, what-we're-seeing, articles) | **Utility / Conversion** (Home, Solutions, money pages, toolkit pages) |
|---|---|---|
| Author byline + dates | ✅ | ❌ |
| **Answer-first lead sentence** | ✅ | ✅ **(v2: plain service definition, not marketing framing)** |
| Article / FAQ / HowTo schema | ✅ | page's own type (Service / CollectionPage / DigitalDocument / WebSite) |
| Inline lead-magnet CTA | ✅ | ➖ (the page is the offer) |
| Keep-reading cluster links | ✅ | ✅ |
| Lead-form source field | (on its CTA's target form) | ✅ every form |
| **Fiduciary File block (v2)** | ➖ | ✅ every service/money page, identical block |
| **Proof Band (v2: 2025 stats, reusable)** | optional footer slot | ✅ every money page |
| **Seasonal Campaign Band (v2)** | ➖ | ✅ Home (+ optionally Solutions) |
| Global header/footer + theme | ✅ | ✅ |

**The four v2 components (build once as saved sections):**
1. **Seasonal Campaign Band** — one designated, easily-editable band under the Home hero that always carries the CURRENT campaign: Sep-Oct = "Do not sign the renewal unread" → `/renewal-second-opinion`; Jan = the Transparency Index; spring = the quarterly briefing. One edit per quarter; the site always reflects the business's annual rhythm without redesign. (Owner: Brett, per the rollout calendar.)
2. **Fiduciary File block** — the identical closing section on every service page: "Every engagement closes with your Fiduciary File" + the 5-item list + the counsel-safe disclaimer (copy: `fiduciary_file_onepager.md`, post-counsel).
3. **Proof Band** — the 2025 stat strip ($78.7M contracted · 203 clients · 59 RFPs at 25% · $469K avg PBR savings, with the standing guardrails: contracted-not-offered, 25%-is-RFP-rate) as ONE reusable component so the numbers update in one place, annually, when the 2026 figures land.
4. **Trust cluster** — a linked trio (Standards · Results · How We Charge) rendered in the header nav (Section B) and as a footer block on every page. These three pages ARE the differentiation; they are never buried under About.

**Blueprint status (Jun 20):** `.byline`/`.lead-cta`/`.related` already live in `site.css` and all 7 content blueprints; HowTo schema on the 3 how-to guides; source field on all forms; Home carries WebSite+SearchAction + enriched Organization. **v2 gap for the builder:** the four components above exist as copy in their asset docs, not yet as blueprint HTML; build them directly as Wix saved sections from the copy sources (or ask a Claude session to produce blueprint HTML first).

## Live-page retrofit (Toolkit Library + 29 toolkit pages) — unchanged from v1
CollectionPage+ItemList schema on the library (paste-ready JSON below); source field onto the live toolkit form (⚠ carefully, it is wired to the live Velo funnel: add the CMS column + notification merge too); DigitalDocument schema on the dynamic page; one cluster cross-link per toolkit to its matching guide/glossary.

```json
{"@context":"https://schema.org","@type":"CollectionPage","name":"Plan Sponsor Toolkit Library","url":"https://www.rxbs.org/toolkit-library","description":"Free printable PBM audit worksheets and decision frameworks for self-funded employers, from Prescription Benefit Solutions.","isPartOf":{"@type":"WebSite","name":"Prescription Benefit Solutions","url":"https://www.rxbs.org"},"mainEntity":{"@type":"ItemList","itemListElement":[
{"@type":"ListItem","position":1,"url":"https://www.rxbs.org/toolkit/contract-review-readiness","name":"Contract Review Readiness Checklist"},
{"@type":"ListItem","position":2,"url":"https://www.rxbs.org/toolkit/channel-pricing","name":"Channel Pricing Audit Worksheet"},
{"@type":"ListItem","position":3,"url":"https://www.rxbs.org/toolkit/pbm-compensation","name":"PBM Compensation Audit Worksheet"}
]}}
```

---

# SECTION B — Information architecture, URL map, nav, redirects (v2)

**Primary nav (v2):**
`Home · Solutions · Free Tools (Toolkit Library) · Learn ▾ · Why Us ▾ · For Brokers · [Request a Call]`
- **Learn ▾** groups: Guides · Glossary · Contract Language Library · What We're Seeing · FAQ · Latest.
- **Why Us ▾ (v2, the trust cluster):** The Standards · Results · How We Charge · About.
- **For Brokers** sits at top level (the second persona deserves a door, and the PARTNER track needs the landing surface).
- The header button changes from "Book a Review" to **"Request a Call"** (matches the actual mechanism and Ginny's scheduling model).

**Final URL map v2 (freeze at Phase 1):**

| Page | URL | Status / copy source |
|------|-----|----------------------|
| Home | `/` | 🟨 schema live Jul 6; full refit LAST (after sunset), carries the Seasonal Campaign Band |
| Solutions | `/solutions` | 🟦 legacy page still up; refit pending (Fiduciary File block ON HOLD per its gate) |
| **Request a Call** | `/request-a-call` | ✅ LIVE Jul 8, 2026 |
| **Renewal Second Opinion** | `/renewal-second-opinion` | ✅ LIVE Jul 9, 2026 (5 weeks ahead of gate) |
| **For Brokers** | `/for-brokers` | ✅ LIVE Jul 14, 2026 |
| **The Standards** | `/standards` | ✅ LIVE Jul 22, 2026 (attestation model; counsel waived Jul 21) |
| **How We Charge** | `/how-we-charge` | 🟦 not built (post tier decision) |
| **Results** | `/results` | 🟦 not built — shell + Proof Band; case studies as permissioned |
| Glossary | `/glossary` | ✅ LIVE Jul 10, 2026 |
| Contract Language Library | `/contract-language-library` | ✅ LIVE Jul 21, 2026 |
| What We're Seeing | `/what-we-are-seeing` | ✅ LIVE Jul 23, 2026 (2025 data; ANNUAL January refresh; proof surface until /results) |
| FAQ | `/faq` | ✅ LIVE Jul 21, 2026 |
| Guides ×4 | **FLAT slugs** `/guide-<slug>` (Wix can't nest; frozen Jul 23) | ✅ ALL FOUR LIVE Jul 23, 2026: `/guide-pbm-contract-audit` · `/guide-what-is-spread-pricing` · `/guide-how-to-choose-a-pbm-auditor` · `/compare-pbm-audit-vs-broker-review` — answer-page wave COMPLETE |
| About / Insights | `/about` · `/insights` | ✅ /about rebuilt + LIVE Jul 15, 2026 · 🟦 /insights not built (CURRENT NEWSLETTER legacy page to sunset into it) |
| Toolkit Library + ×29 | `/toolkit-library` · `/toolkit/<slug>` | ✅ live; CollectionPage/ItemList retrofit still pending |
| Guides wave 2 / articles | `/guides/…` · `/articles/…` | Phase 4 |
| Decoder · Benchmark · Index | `/decoder` · `/benchmark` · `/transparency-index` | gated; Phase 4+ (reserved slugs) |
| Privacy Policy | `/privacy` | ✅ LIVE Jul 22, 2026 (footer-only, noindex-exempt: indexable, hidden from nav) |
| Links hub | `/links` | 🟦 pack ready (`links_build_pack.md`); builds with the video-account launch |

**Breadcrumbs:** `Home › Learn › <page>` (content), `Home › Why Us › <page>` (trust), `Home › Toolkit Library › <toolkit>`. **Redirect policy:** unchanged; slugs final at Phase 1, including the three reserved ones.

---

# SECTION C — Conversion + lead routing (v2)

**Two components, wired once:**
1. **The Lead-Form** (toolkit gating): First name · Work email · Company · Role · **How did you hear about us?** (Search/AI assistant, LinkedIn, Substack, Referral, Podcast, Other) — the only way to attribute AI/dark traffic.
2. **The Request-a-Call form** (consult intent): per its spec — topic dropdown pre-set by `?topic=`, admin+Ginny alert with lead-history match, NO scheduler. **This supersedes v1's Calendly line entirely.**

**Routing table v2:**

| Page / CTA | Destination |
|------------|-------------|
| Toolkit "Get the toolkit" | live Velo gated-PDF funnel (unchanged) |
| Inline CTA on content pages | the matching toolkit's funnel |
| **Every money-page CTA + header button** | `/request-a-call?topic=<contextual>` |
| Seasonal Campaign Band | the current campaign's page (Sep: RSO; Jan: Index) |
| Briefing promo blocks | Zoom registration (lead rows via `source=briefing`) |
| Footer newsletter | Substack/LinkedIn signup |

**THE INTERNAL-LINKING RULE (v2, sitewide, non-negotiable):** every Content/Answer page links to exactly **one money page and one toolkit** (chosen for topical fit, in the Keep-reading block or inline); every **money page** links to `/standards`, `/results`, and the request-a-call form. Hub-and-spoke with a conversion edge on every node; a cited page that routes nowhere converts nothing. Apply at build time from this rule, not ad hoc.

**Proof slots:** 3 testimonials + "as seen on" (Potter · SHRM Honest HR · Derms on Drugs) + the Proof Band. Visible phone + click-to-call in header/contact.

---

# SECTION D — Sitewide schema + measurement (v2: measurement moved to Phase 0.5)

Sitewide JSON-LD (header): `WebSite`+`SearchAction`, enriched `Organization` (contactPoint, foundingDate, areaServed, numberOfEmployees, **filled** `sameAs`), `Person` (Ginny). Per-page: Article+FAQ+Breadcrumb on guides (+`HowTo` on the how-tos), DefinedTermSet on glossary, **Service schema on Solutions and each money page (v2)**, CollectionPage on the library, DigitalDocument on toolkits. `llms.txt` served via Velo http-function (includes the answer-page map; already in the blueprint set).

Measurement itself: see Phase 0.5 — it happens BEFORE the build so the build is measurable. The monthly rhythm afterward: GSC pull (automated), AI-visibility 20-prompt set, Wix AI Overview read, and the source-field distribution in the lead Sheet.

---

# SECTION E — Content map / topic clusters (unchanged from v1, plus the linking rule)

The pillar/cluster table and FAQ-hub design stand as v1 wrote them (pillars: Contract Audit · Pricing & Spread · Rebates · Specialty & Clinical · Process/Choosing · Fiduciary & Compliance · Transparency/Category; FAQ hub built from `buyer_anxiety_map.md` with FAQPage schema; glossary-term graduation path; `/articles/` mirroring template). **v2 addition:** when building any cluster page, apply the Section C linking rule (one money page + one toolkit per page) and the answer-first opener. The Fiduciary & Compliance pillar gains an obvious future spoke: the Fiduciary File explainer; the Transparency pillar gains the Index page as its eventual hub.

**Answer-page build log (one page per `/build-aeo-page` run):**

| Candidate answer page (priority order) | Slug | Status |
|---|---|---|
| What is a PBM contract audit? | `guide-pbm-contract-audit` | ✅ built |
| What is spread pricing? | `guide-what-is-spread-pricing` | ✅ built |
| How to choose a PBM auditor | `guide-how-to-choose-a-pbm-auditor` | ✅ built |
| PBM audit vs. broker review | `compare-pbm-audit-vs-broker-review` | ✅ built |
| How to read a PBM rebate report | `guide-how-to-read-a-pbm-rebate-report` | ✅ drafted Jul 8, 2026 (Article + FAQPage + HowTo + Breadcrumb; review pending) |
| Carve-in vs. carve-out | `compare-carve-in-vs-carve-out` | ⬜ missing |
| GLP-1 coverage for self-funded plans | `guide-glp1-coverage-self-funded` | ⬜ missing |
| 340B and self-funded plans | `guide-340b-and-self-funded-plans` | ⬜ missing |
| Copay accumulators and maximizers | `guide-copay-accumulators-maximizers` | ⬜ missing |
| PBM RFP: how to | `guide-pbm-rfp-how-to` | ⬜ missing (how-to → HowTo schema) |
| ERISA fiduciary duty and pharmacy | `guide-erisa-fiduciary-pharmacy` | ⬜ missing |
| Specialty pharmacy carve-out | `guide-specialty-pharmacy-carve-out` | ⬜ missing |
| What is a transparent PBM? | `guide-what-is-a-transparent-pbm` | ⬜ missing |

---

# COMPANION FILES (v2)
| File | Holds |
|------|-------|
| `MASTER_GAMEPLAN.md` | where this build sits in the everything-order (P1) + the rollout calendar |
| `website_mockups/site/wix_pages_build_runbook.md` | per-page Wix click-by-click (note: v1 page order; Phase-2 order above governs) |
| `request_a_call_form_spec.md` · `renewal_second_opinion_kit.md` · `standards_independent_pbm_review.md` · `fiduciary_file_onepager.md` · `pricing_architecture_memo.md` · `broker_partner_track.md` | the money/trust pages' copy sources (▼▲ blocks) |
| `website_mockups/site/geo_seo_plan.md` + `site.css` + `site/README.md` | GEO/SEO strategy + locked design system |
| `substack_aeo_rules.md` | the article-side rule (feeds the site via canonicals) |
| `ai_visibility_tracker.md` · `entity_authority_offsite_plan.md` | scoreboard + off-site (Phases 0.5 and 5) |

---

# DEFINITION OF DONE v2 — one complete build
- [ ] **Phase 0:** tokens + header/footer + ALL reusable sections including the four v2 components; a new page assembles in ~15 min.
- [ ] **Phase 0.5:** baseline run BEFORE pages ship; GSC+Bing sitemaps; IndexNow; Wix AI Overview on; conversion events + LLM-referrer segment + UTM convention defined; `sameAs` filled.
- [ ] **Phase 1:** URL map v2 frozen (incl. the three reserved slugs); Learn + Why Us + For Brokers nav live; breadcrumbs + redirect policy.
- [ ] **Phase 2 ⏱ Aug 15:** the conversion spine live (request-a-call → RSO → for-brokers → standards → how-we-charge → results shell → glossary → contract-language-library); live-site defects fixed; every page passes the linking rule + answer-first check.
- [ ] **Phase 3:** remaining answer pages + refits (homepage last); toolkit retrofit (source field on the live funnel, done carefully).
- [ ] **Phase 4:** wave-2 pages shipping on the template; reserved slugs activate as their gates clear.
- [ ] **Phase 5:** off-site items executing; monthly measurement rhythm running.
- [ ] **Verify:** schema validator + Rich Results on every page; mobile + speed pass; the tracker shows rxbs.org appearing in answers; the lead Sheet's source field shows AI/search rows arriving.
