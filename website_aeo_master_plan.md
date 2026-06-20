# rxbs.org AEO/GEO Master Plan (single source of truth)

_Created Jun 20, 2026. This is the ONE document for the website's AI-search build: the strategy, the architecture, the build-once template, the priority order, and the definition of done. Companions hold granular detail (named at the bottom); this file owns the plan and the sequence. Read top to bottom; build in the phase order given._

---

## North star + how "leadership" is measured
**Goal:** be the source ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude *cite* when a self-funded employer or broker asks a pharmacy-benefits question, and convert that high-intent traffic into leads. **Scoreboard:** `ai_visibility_tracker.md` (20 buyer prompts, monthly; watch the "source URL" column shift from Substack to rxbs.org and the "competitors cited" column shrink).

## Decisions locked
- **Naming:** spell out "Prescription Benefit Solutions" + www.rxbs.org in all public copy; "PBS" internal only (collides with Public Broadcasting Service for LLMs).
- **Canonical domain = Wix/rxbs.org.** Evergreen content is mirrored to rxbs.org as the self-canonical source; Substack is the crawlable distribution twin that links back.
- **Brand system = PBS v2** (`site.css` tokens): Primary `#015880`, Accent `#A7E0FA`, Gray `#4D4D4D`, paper `#FAFAF7`, ink `#0c1a22`; IBM Plex Sans / Plex Mono; triangle wordmark.

---

# THE BUILD ORDER (priority)

> **The rule that makes this a single build: build the template before the pages.** Everything below derives from Phase 0. If you build pages first and the template second, you touch every page twice. Do Phase 0 once; every page after is a fill-in.

## ▶ PHASE 0 — The master template + global components (BUILD THIS FIRST; everything derives from it)
In Wix, build these **once** as global elements + saved/reusable sections + theme settings. Spec in **Section A**.
1. **Theme tokens** (Wix Site Design): the 5 brand colors, Plex Sans/Mono, the type scale (H1/H2/H3/body/eyebrow/mono-number). Every element references these, so a later color/type change is one edit.
2. **Global header** (nav + "Learn" mega-menu) and **global footer** (5-column). Set once, appears on every page.
3. **The reusable page sections** (save each as a Wix "saved section" so new pages are assembled, not redrawn): Hero (dark + light variants), Author/Credibility block, Body prose style set, **Inline lead-magnet CTA block**, Related-Questions block, FAQ accordion, Proof/testimonial block, and the **single Lead-Form component**.
4. **Sitewide schema scaffold** (global header custom code): `WebSite`+`SearchAction`, `Organization`, `Person` (Ginny). Per-page schema slots defined (Article/FAQ/HowTo/Breadcrumb).
**Done when:** you can spin up a blank page and assemble a full, on-brand, schema-complete page from saved sections in ~15 minutes with zero new design.

## ▶ PHASE 1 — Lock the architecture (so URLs never move)
Implement **Section B**: the final URL map, the "Learn" mega-menu nav, breadcrumb pattern, and the redirect policy. Decide nested `/guides/` slugs now. **URLs are the one thing that's expensive to change after launch** (moving them breaks citations), so freeze them before building page bodies.

## ▶ PHASE 2 — Build the 7 priority pages (each = a template instance)
Assemble from Phase-0 sections, fill content from the existing blueprints, paste per-page schema. Priority order (from `wix_pages_build_runbook.md`, which holds the click-by-click):
1. Glossary → 2. Contract Language Library → 3. What We're Seeing → 4. Guide: PBM Contract Audit → 5. Guide: What Is Spread Pricing → 6. Guide: How to Choose a PBM Auditor → 7. Compare: PBM Audit vs Broker Review. Plus refit Home / Solutions / About / Insights / Toolkit pages to the Phase-0 template.

## ▶ PHASE 3 — Wire conversion once
Implement **Section C**: point every page's CTA/form through the one Lead-Form component to the right destination (toolkit funnel / speed-to-lead alert / scheduler), add the source field, fill the proof slots. Because the form is one component, this is wired once.

## ▶ PHASE 4 — Content waves (fill the cluster map)
Build out the remaining answer pages from **Section E** in waves (each is just another template instance), and mirror the strongest Substack deep dives as owned `/articles/` pages. Internal links are already designed for the full set because the cluster map (Section E) was set in Phase 1.

## ▶ PHASE 5 — Off-site authority + measurement (compounding)
Execute `entity_authority_offsite_plan.md` (Wikidata, Substack Recommendations, Reddit/Quora, listicles, NAP) and run the `ai_visibility_tracker.md` baseline + monthly. Submit sitemap to Search Console + Bing; fill the `sameAs` LinkedIn URLs.

---

# SECTION A — Master page template + component library (the Phase-0 detail)

Every content page is this stack, top to bottom. Build each block once as a Wix saved section.

| # | Component | What it contains | Derives / why once |
|---|-----------|------------------|--------------------|
| 1 | **Global header** | brand + nav + "Learn" mega-menu + Book-a-Review button | global element, every page |
| 2 | **Hero** (2 variants) | dark `.ghero` (reference/guides) + light (utility); eyebrow + H1 + one lead paragraph + breadcrumb | saved section; the H1 = the one per page |
| 3 | **Author/Credibility block** *(NEW — not in blueprints yet)* | "By Ginny Crisp, PharmD" + headshot + **Published** date + **Updated** date + one-line credential ("reviews hundreds of PBM contracts a year") | E-E-A-T + freshness signal AI weights; build once, reuse |
| 4 | **Body prose styles** | H2/H3 in Primary Blue, blockquote (weak/strong clause style), term block, "answer-first" lead style | theme-level, applies everywhere |
| 5 | **Inline lead-magnet CTA** *(NEW)* | a mid-article card offering the page's matching gated toolkit (preview image + 1-line + Get-it button → Lead Form) | parameterized by toolkit; the conversion lever on content pages |
| 6 | **Related Questions / Keep Reading** *(NEW)* | 3-5 internal links to sibling cluster pages + glossary terms | topic-cluster glue + dwell; one component, links set per page |
| 7 | **FAQ accordion** | 3-5 Q&As mirrored into FAQPage schema | standard on every guide/solution page |
| 8 | **Proof/testimonial block** *(NEW slots)* | real testimonials, client logos, 2025 stats ($78.7M, 203, $469K/PBR) | reserve the space now; fill as content lands |
| 9 | **Lead-Form component** *(ONE form)* | first name, work email, company, role, **+ "How did you hear about us?"** (source) | see Section C; one backend, wired once |
| 10 | **Global footer** | 5-column (Explore / Reference / Content / Contact + brand) | global element |
| 11 | **Schema scaffold** | sitewide WebSite/Org/Person in header; per-page Article+FAQ(+HowTo)+Breadcrumb | see Section D |

**Net-new vs. today's blueprints:** items **3, 5, 6, 8, 9 (source field), and 11 (WebSite/HowTo)** do not exist in the current HTML and should be added to the template so every page inherits them. The current `site/` pages already cover 1, 2, 4, 7, 10.

---

# SECTION B — Information architecture, URL map, nav, redirects

**Primary nav (rename "Insights" → a "Learn" mega-menu that houses the content hub):**
`Home · Solutions · Free Tools (Toolkit Library) · Learn ▾ · About · [Book a Review]`
The **Learn** dropdown groups: Guides · Glossary · Contract Language Library · What We're Seeing · Latest (Insights/blog).

**Final URL map (freeze before building bodies):**

| Page | URL | Status |
|------|-----|--------|
| Home | `/` | refit to template |
| Solutions | `/solutions` | refit |
| About | `/about` | refit |
| Toolkit Library | `/toolkit-library` | live |
| Toolkit detail (×29) | `/toolkit/<slug>` | live |
| Insights / Latest hub | `/insights` | refit |
| Glossary | `/glossary` | build |
| Contract Language Library | `/contract-language-library` | build |
| What We're Seeing | `/what-we-are-seeing` | build |
| Guide: PBM Contract Audit | `/guides/pbm-contract-audit` | build |
| Guide: What Is Spread Pricing | `/guides/what-is-spread-pricing` | build |
| Guide: How to Choose a PBM Auditor | `/guides/how-to-choose-a-pbm-auditor` | build |
| Compare: Audit vs Broker Review | `/guides/pbm-audit-vs-broker-review` | build |
| Guides (wave 2, Section E) | `/guides/<topic>` | planned |
| Deep-dive mirrors (wave 2) | `/articles/<slug>` | planned |
| Book a review | `/` `#book` (or `/book`) | wire |

**Breadcrumbs:** `Home › Learn › <page>` for reference/guides; `Home › Toolkit Library › <toolkit>` for toolkits. **Redirect policy:** a published URL is never deleted or renamed without a 301; slugs are final at Phase 1.

---

# SECTION C — Conversion + lead routing (wire once)

**One Lead-Form component, used everywhere.** Fields: First name · Work email · Company · Role (select) · **How did you hear about us? (select: Search/AI assistant, LinkedIn, Substack, Referral, Podcast, Other)** ← the only way to attribute AI/dark traffic.

**Routing table (where each CTA goes):**

| Page / CTA | Destination | Mechanism |
|------------|-------------|-----------|
| Toolkit detail "Get the toolkit" | gated-PDF email funnel | existing Wix Velo funnel (live) |
| **Inline CTA on a guide/glossary page** | the matching toolkit's funnel | same Velo funnel, prefilled toolkit_name |
| Home / Solutions / About "Book a Review" | **speed-to-lead alert** (ginny@ + brett@) + CRM | `closing_layer_spec.md`; add a **scheduler embed** (Calendly) as the primary, form as fallback |
| Footer newsletter | Substack/LinkedIn newsletter signup | external |

**Proof slots to fill (reserve in the template now):** 3 testimonials, client logos, the 2025 stat band, "as featured on" (Potter / Derms on Drugs). **Add a visible phone (843) + click-to-call** in header/contact.

---

# SECTION D — Sitewide schema + measurement (set once)

**Global header (sitewide) JSON-LD — add these (net-new):**
- `WebSite` + `SearchAction` (sitelinks search box):
```json
{"@context":"https://schema.org","@type":"WebSite","name":"Prescription Benefit Solutions","url":"https://www.rxbs.org","potentialAction":{"@type":"SearchAction","target":"https://www.rxbs.org/search?q={query}","query-input":"required name=query"}}
```
- `Organization` (enrich the existing one): add `contactPoint` (email/phone), `foundingDate`, `areaServed`, `numberOfEmployees`, and the **filled `sameAs`** (Ginny LinkedIn + company LinkedIn — currently blank).
- `Person` (Ginny) sitewide as today.

**Per-page schema (template slots):** Article + Person(author) + FAQPage + Breadcrumb on guides; **add `HowTo`** on the "how to audit / how to choose / how to read" guides (step content). DefinedTermSet on glossary; CreativeWork on toolkits.

**Measurement instrumentation (wire during the build, once):**
- Google Search Console + Bing Webmaster: submit sitemap.
- Analytics events: CTA click, form submit, scroll-depth, toolkit download.
- A saved **LLM-referrer segment** (chatgpt.com, perplexity.ai, gemini.google.com, claude.ai) + watch branded-search lift.
- **UTM convention** for the Substack→site canonical links so cross-channel traffic is attributable.
- `llms.txt`: serve via a Velo `http-functions` route (decision: do it; low effort once).

---

# SECTION E — Content map / topic clusters (design IA for the final shape)

Build internal links + nav for this **full target set** now, even though pages ship in waves. Each pillar guide is a hub linking to its cluster pages + glossary terms; each cluster page links back to the pillar.

| Pillar (hub) | Cluster pages (wave 2 = `/guides/…`) | Glossary terms it links |
|--------------|--------------------------------------|--------------------------|
| **PBM Contract Audit** `/guides/pbm-contract-audit` | definition-variance, audit-rights, termination | spread, GER, MAC, AWP, audit rights, fiduciary |
| **Pricing & Spread** `/guides/what-is-spread-pricing` | channel-pricing, net-cost, **how-to-read-a-pbm-rebate-report** | spread, net cost, dispensing fee, AWP |
| **Rebates** `/guides/how-to-read-a-pbm-rebate-report` *(new)* | rebate-aggregators, copay-accumulators-maximizers | rebate passthrough, rebate aggregator, DIR |
| **Specialty & Clinical** `/guides/specialty-pharmacy-carve-out` *(new)* | biosimilar-strategy, glp1-coverage-self-funded, site-of-care, step-therapy | specialty pharmacy, biosimilar, PA, step therapy |
| **Process / Choosing** `/guides/how-to-choose-a-pbm-auditor` | audit-vs-broker-review, **pbm-rfp-how-to**, carve-in-vs-carve-out | (links across) |
| **Fiduciary & Compliance** `/guides/erisa-fiduciary-pharmacy` *(new)* | 340b-and-self-funded-plans | fiduciary, 340B |
| **Transparency / Category** `/guides/what-is-a-transparent-pbm` *(new)* | comparison/category terms | (links across) |

**Also in the plan:** the **deep-dive mirroring template** (`/articles/<slug>`) so the best Substack pillars become owned on-site articles (self-canonical), and the **glossary-term → standalone-page** graduation path (a high-traffic term earns its own page that the glossary entry links to).

---

# COMPANION FILES (detail this plan points to)
| File | Holds |
|------|-------|
| `website_mockups/site/wix_pages_build_runbook.md` | per-page Wix click-by-click (Phase 2) |
| `website_mockups/site/geo_seo_plan.md` | the GEO/SEO strategy + structured-data blocks |
| `substack_aeo_rules.md` | the 5-part rule for every Substack article (feeds the site via canonical links) |
| `ai_visibility_tracker.md` | the monthly citation scoreboard (Phase 5) |
| `entity_authority_offsite_plan.md` | Wikidata / Substack Recs / Reddit / listicles (Phase 5) |
| `website_mockups/site/site.css` + `site/README.md` | the locked design system + build-of-record |

---

# DEFINITION OF DONE — one complete build
- [ ] **Phase 0:** theme tokens + global header/footer + all reusable sections (incl. NEW author block, inline CTA, related-questions, one Lead-Form with source field) + sitewide schema saved. A new page can be assembled in ~15 min.
- [ ] **Phase 1:** URL map frozen, Learn mega-menu live, breadcrumbs + redirect policy set.
- [ ] **Phase 2:** 7 priority pages live; Home/Solutions/About/Insights/Toolkit refit to template.
- [ ] **Phase 3:** every CTA routed through the one form; source field live; scheduler embedded; proof slots filled.
- [ ] **Phase 4:** wave-2 cluster pages + deep-dive mirrors shipping on the template.
- [ ] **Phase 5:** sitemap submitted; `sameAs` filled; Wikidata + Substack Recs live; tracker baseline run.
- [ ] **Verify:** every page passes the schema validator + Rich Results Test; mobile + speed checked; `ai_visibility_tracker.md` shows rxbs.org appearing in answers.
