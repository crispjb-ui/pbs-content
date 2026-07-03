# SEO + AI-Search (GEO/AEO) Plan — rxbs.org

> **Initiative tracker = `aeo_geo_master_plan.md`; website build spec = `website_aeo_master_plan.md`.** This file is the GEO/SEO strategy + structured-data detail they reference.

_Created Jun 9, 2026. The optimization layer for the locked `site/` templates. Covers classic SEO and Generative Engine Optimization (getting cited by ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude). Grounded in current (2026) practice — see sources at bottom._

## Why this matters for PBS
- AI Overviews appear in ~30-40% of Google queries; ChatGPT serves ~200M weekly users asking exactly the conversational questions PBS answers ("how do I audit a PBM contract," "what is spread pricing").
- **LLM-referred visitors convert far higher than classic organic:** ~15.9% (ChatGPT), ~10.5% (Perplexity), ~5% (Claude) vs. ~1.8% typical organic. Low volume, high intent.
- GEO is **additive** to SEO. Strong traditional SEO is the prerequisite; GEO adds citation-friendliness, structured data, and entity authority on top.

## Built-in advantages (lean into these)
1. **Freshness engine.** ~50% of AI-cited content is <13 weeks old; Prescription Benefit Solutions publishes 3 Substack + 4 LinkedIn pieces/week. Keep publishing; cross-link new content to the money pages. **Caveat (added Jun 19, 2026): LinkedIn is login-walled and largely uncrawlable by AI engines, so LinkedIn output builds the person-entity and reach, NOT citations. The crawlable freshness lives on Substack and now on the owned rxbs.org canonical pages.**
2. **Answer-shaped content.** The decoder format, the Contract Language Library, and `_glossary_terms.md` are definitional Q&A, the exact shape AI engines lift.
3. **Entity authority.** Ginny Crisp, PharmD, featured alongside Wendell Potter / Derms on Drugs, is a real citable expert entity.

---

## Decisions locked + status (Jun 19, 2026 — leadership-bar revision)

Two strategic audits (website + social) were run against a **"be the cited authority," not just "be present"** bar. Decisions locked by Ginny:

- **Entity-naming: spell out "Prescription Benefit Solutions" and use "www.rxbs.org" in all public content. "PBS" is internal shorthand only.** Rationale: the abbreviation "PBS" collides with Public Broadcasting Service and dilutes entity disambiguation for LLMs. The `alternateName: "PBS"` was REMOVED from the Organization schema; all visible site/llms.txt copy spells the name out. Carry this into every new page, Substack post, and schema block.
- **Wix is the canonical domain.** Evergreen answer content is MIRRORED onto rxbs.org as the canonical (self-canonical) source, with Substack as the crawlable distribution twin that links back. Substack stays on substack.com (no custom-domain move).
- **The core fix (both audits converge here):** the content engine already produces category-leading answer-shaped material, but its citable evergreen form must live on the OWNED domain. Owned canonical pages built this session as Wix-ready blueprints in `site/`:
  - `glossary.html` → `/glossary` (DefinedTermSet schema, 22 terms incl. rebate aggregator)
  - `contract-language-library.html` → `/contract-language-library` (canonical twin of the Substack Library; Article + DefinedTermSet schema, 15 provisions)
  - `what-we-are-seeing.html` → `/what-we-are-seeing` (original-research/data page; real 2025 figures: $78.7M contracted, 203 clients, ~$469K/PBR; Article schema)
  - Homepage stats band filled with real 2025 figures.
- **Companion scoreboard created:** `ai_visibility_tracker.md` (monthly citation audit across ChatGPT/Perplexity/Gemini/Google AIO/Claude). This is how "leadership" is measured.

Still queued (approved, not yet built): pillar guides (`/guides/pbm-contract-audit`, `what-is-spread-pricing`), consideration/comparison pages, `CreativeWork` schema on toolkit dynamic page, Wikidata entities, Substack Recommendations outreach, off-site/community seeding. See the build order at the bottom.

---

## 1. Classic SEO foundation (do first; GEO rides on it)
- **Per-page title + meta description** — already drafted for toolkits in `toolkit_dataset.md` (`seo_title`, `seo_description`). Mirror the pattern for Home/Solutions/About.
- **One H1 per page, semantic H2/H3** — templates already do this.
- **Canonical tags + XML sitemap** — Wix auto-generates a sitemap; confirm it's submitted in Google Search Console + Bing Webmaster Tools.
- **Clean URLs** — `/toolkit/<slug>` already; keep Solutions/About short.
- **Speed + mobile** — templates are responsive; keep preview images compressed (the toolkit preview PNGs are already web-sized).
- **Internal linking** — every toolkit page links to related toolkits (`related_toolkit_slugs`) and back to the Library; the Library links to Solutions; Solutions links to the capture. This link graph is also how AI crawlers map the site.

## 2. Structured data (JSON-LD) — highest-impact GEO lever
FAQPage is the single highest-impact type (your Q&A becomes a direct citation candidate). Add these via Wix's **SEO → Structured Data Markup** panel (or Velo `wix-seo`), bound to dynamic-page fields where relevant. Paste-ready blocks below.

**A. Organization (sitewide, in the site header custom code):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Prescription Benefit Solutions",
  "url": "https://www.rxbs.org",
  "logo": "https://www.rxbs.org/logo.png",
  "description": "Independent pharmacy-benefits consulting for self-funded employers: PBM contract audits, claims reviews, and contract-language development.",
  "email": "team@rxbs.org",
  "address": {"@type": "PostalAddress", "addressLocality": "Charleston", "addressRegion": "SC", "addressCountry": "US"},
  "founder": {"@type": "Person", "name": "Ginny Crisp"},
  "sameAs": [
    "[LinkedIn company or Ginny profile URL — confirm]",
    "https://benefitblindspots.substack.com",
    "https://x.com/ginny_crisp"
  ]
}
```

**B. Person (Ginny — establishes the expert entity; put on About + as author on articles):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ginny Crisp",
  "honorificSuffix": "PharmD",
  "jobTitle": "Chief Executive Officer",
  "worksFor": {"@type": "Organization", "name": "Prescription Benefit Solutions"},
  "knowsAbout": ["Pharmacy Benefit Managers", "PBM contracts", "spread pricing", "drug rebates", "self-funded employer health plans", "ERISA fiduciary duty"],
  "sameAs": [
    "[Ginny LinkedIn URL — confirm]",
    "https://x.com/ginny_crisp",
    "https://benefitblindspots.substack.com"
  ]
}
```

**C. Service (Solutions page, one per service or a ServiceList):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "PBM Contract Audit",
  "provider": {"@type": "Organization", "name": "Prescription Benefit Solutions"},
  "areaServed": "US",
  "audience": {"@type": "Audience", "audienceType": "Self-funded employers"},
  "description": "Independent line-by-line audit of a PBM Services Agreement, decoding definitions and surfacing costly clauses with redlines to fix them."
}
```

**D. FAQPage (Home + Solutions + toolkit pages — the citation magnet):** see the FAQ section now in `index.html`; mirror its Q&A into FAQPage JSON-LD. Template:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What is a PBM contract audit?",
     "acceptedAnswer": {"@type": "Answer", "text": "A PBM contract audit is an independent line-by-line review of a pharmacy benefit manager's Services Agreement ..."}}
  ]
}
```

**E. CreativeWork / DigitalDocument (each toolkit detail page, bound to the CMS row):**
```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "{{name}}",
  "description": "{{seo_description}}",
  "author": {"@type": "Organization", "name": "Prescription Benefit Solutions"},
  "isAccessibleForFree": true,
  "learningResourceType": "Checklist / worksheet",
  "url": "https://www.rxbs.org/toolkit/{{slug}}"
}
```

**F. BreadcrumbList** on Library + toolkit pages (Home › Toolkit Library › <toolkit>).

## 3. Answer-first content structure
- **First 200 words must answer the query directly** (Perplexity + AI Overviews judge relevance on opening content). Don't bury the lede. The Substack deep-dive rule already says "thesis early" — extend it to the website money pages.
- **FAQ sections** on Home, Solutions, and toolkit pages (now seeded on `index.html`). Short, declarative answers; one question = one citable unit.
- **Definitions** (spread pricing, GER, MAC, rebate aggregator) as standalone glossary entries — the `_glossary_terms.md` content can seed a public `/glossary` page that becomes pure citation-bait.
- **Original, attributable data only.** AI engines favor cited statistics, but the PBS brand rule forbids fabricated numbers. Use real, sourced facts (FTC spread figures, KFF self-funded %, "hundreds of contracts a year") with attribution. `shocking_fact_bank.md` is the sourced supply.

## 4. Crawl access for AI bots
Ship `site/robots.txt`: explicitly allow GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, plus the classic crawlers, and reference the sitemap. (Blocking them = invisible to those engines. PBS wants the citations.)

## 5. llms.txt (low-cost, honest caveat)
Ship `site/llms.txt` (a curated Markdown map of the best pages). **Honest status:** as of Q1 2026 no major AI company has committed to reading it, and Google says it doesn't use it. It's cheap insurance and good hygiene (devs/agents do use it), so worth shipping, but it is **not** where the GEO value is, structured data + freshness + authority are. Don't over-invest.

**Wix limitation:** Wix can't easily serve an arbitrary `/llms.txt` at the domain root. Options: host it via a Velo `http-functions` route, or accept it lives where Wix allows and link it from the footer. Treat as nice-to-have.

## 6. Entity authority (off-site, compounding)
- Keep NAP (name/address) consistent across LinkedIn, Crunchbase, Google Business Profile, industry directories.
- Pursue a **Google Knowledge Panel** for Ginny Crisp / PBS (Organization + Person schema + consistent citations feed it).
- Third-party mentions are gold: the Potter contributor pieces, podcast guesting (`podcast_pitching_guide.md`), and broker-alliance directories (Health Rosetta, Mitigate) all build the entity AI engines trust.
- A **Wikipedia/Wikidata** entity for Ginny or PBS (if notability supports it) is a strong long-term signal.

## 7. The content engine already does the hard part
Every week's Substack deep dive + Field Note + roundup is fresh, answer-shaped, authored content. Make sure each one: (a) has the SEO subtitle (already a rule), (b) answers its core question in the first paragraph, (c) links to the relevant toolkit/money page, (d) carries Article + Person(author) schema. The website is the conversion hub; the content engine is the citation supply line. Connect them with internal links.

## Measurement
- Google Search Console + Bing Webmaster Tools (classic).
- Watch referral traffic from `chat.openai.com` / `chatgpt.com`, `perplexity.ai`, `gemini.google.com` in analytics — that's GEO working.
- Periodically prompt ChatGPT/Perplexity/Claude with buyer questions ("best way to audit a PBM contract," "independent PBM audit firm") and see whether PBS is cited. That's the real scoreboard.

## The social engine as a citation supply line (added Jun 19, 2026)
The weekly content machine IS the citation supply, but only where engines can read it. Optimize per surface:
- **Substack = the real AI-citation surface.** (a) Set a **question-shaped SEO title** (separate from the confrontational display title) matching the buyer query; (b) open every deep dive / field note with **one self-contained, quotable answer sentence**; (c) **link outbound to the rxbs.org canonical/money page** for the topic; (d) keep publishing the original-data posts (What We're Seeing) as citation bait.
- **rxbs.org = the canonical owner.** Mirror evergreen Substack pillars here (Library, glossary, quarterly data) as the self-canonical source.
- **LinkedIn = entity + reach, NOT citations** (login-walled). Finish the Ginny-Crisp profile entity; keep NAP consistent. Do not count LinkedIn volume as "freshness for AI."
- **X = amplification + minor citation** (Grok/Google). Keep decoder threads standalone-readable.
- **Substack growth lever (under-used):** the **Recommendations network** (get Benefit Blind Spots recommended by Wendell Potter's publication + aligned newsletters) is the biggest Substack-native growth path. Fold into the next Potter touch.

These are enforced going forward by the AEO gate in `week_build_spec.md` §8 and `/critique`.

## Build order (highest leverage first — revised Jun 19, 2026)
1. robots.txt (allow AI bots) + confirm sitemap in **Search Console + Bing Webmaster Tools**. *(file shipped; submission = Ginny action)*
2. Organization + Person structured data sitewide; **fill the `sameAs` LinkedIn URLs** (still placeholder). *(blocks live in index.html)*
3. Homepage **stats band filled** with real 2025 figures. *(done — index.html)*
4. **`/glossary`** (DefinedTermSet). *(blueprint built — glossary.html)*
5. **`/contract-language-library`** canonical twin. *(blueprint built)*
6. **`/what-we-are-seeing`** data/original-research page. *(blueprint built)*
7. **AEO gate** in build spec + `/critique`; Substack SEO-title + answer-sentence + outbound-link rules. *(done)*
8. **Pillar guides** (`/guides/pbm-contract-audit`, `what-is-spread-pricing`) — Article + Person self-canonical. *(queued)*
9. **Consideration/comparison pages** (how-to-choose, audit-vs-broker). *(queued)*
10. CreativeWork schema on toolkit dynamic page (bound to CMS). *(queued)*
11. **AI Visibility Tracker** baseline run (`ai_visibility_tracker.md`). *(scaffold built; run = Ginny/monthly)*
12. Entity authority: **Wikidata** (Prescription Benefit Solutions + Ginny Crisp), Knowledge Panel, directories, off-site/community seeding, Substack Recommendations. *(queued)*
13. llms.txt housekeeping (kept low-priority per the honest caveat above).

---

### Sources (2026)
- Enrich Labs — [GEO Complete Guide 2026](https://www.enrichlabs.ai/blog/generative-engine-optimization-geo-complete-guide-2026)
- Jasper — [GEO vs AEO vs SEO](https://www.jasper.ai/blog/geo-aeo)
- Frase — [What is GEO](https://www.frase.io/blog/what-is-generative-engine-optimization-geo)
- Bluehost — [What is llms.txt (2026)](https://www.bluehost.com/blog/what-is-llms-txt/)
- greadme — [Is llms.txt worth it](https://www.greadme.com/blog/seo/is-llms-txt-worth-it-for-ai-search)
