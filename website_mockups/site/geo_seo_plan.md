# SEO + AI-Search (GEO/AEO) Plan — rxbs.org

_Created Jun 9, 2026. The optimization layer for the locked `site/` templates. Covers classic SEO and Generative Engine Optimization (getting cited by ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude). Grounded in current (2026) practice — see sources at bottom._

## Why this matters for PBS
- AI Overviews appear in ~30-40% of Google queries; ChatGPT serves ~200M weekly users asking exactly the conversational questions PBS answers ("how do I audit a PBM contract," "what is spread pricing").
- **LLM-referred visitors convert far higher than classic organic:** ~15.9% (ChatGPT), ~10.5% (Perplexity), ~5% (Claude) vs. ~1.8% typical organic. Low volume, high intent.
- GEO is **additive** to SEO. Strong traditional SEO is the prerequisite; GEO adds citation-friendliness, structured data, and entity authority on top.

## PBS's built-in advantages (lean into these)
1. **Freshness engine.** ~50% of AI-cited content is <13 weeks old; PBS publishes 3 Substack + 4 LinkedIn pieces/week. Keep publishing; cross-link new content to the money pages.
2. **Answer-shaped content.** The decoder format, the Contract Language Library, and `_glossary_terms.md` are definitional Q&A, the exact shape AI engines lift.
3. **Entity authority.** Ginny Crisp, PharmD, featured alongside Wendell Potter / Derms on Drugs, is a real citable expert entity.

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
  "alternateName": "PBS",
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

## Build order (highest leverage first)
1. robots.txt (allow AI bots) + confirm sitemap in Search Console. *(file shipped)*
2. Organization + Person structured data sitewide. *(blocks ready; live example in index.html)*
3. FAQ sections + FAQPage schema on Home/Solutions/toolkit. *(seeded on index.html)*
4. CreativeWork schema on toolkit dynamic page (bound to CMS).
5. Answer-first rewrite of money-page openings.
6. Public `/glossary` page from `_glossary_terms.md`.
7. llms.txt + entity-authority housekeeping (Knowledge Panel, directories).

---

### Sources (2026)
- Enrich Labs — [GEO Complete Guide 2026](https://www.enrichlabs.ai/blog/generative-engine-optimization-geo-complete-guide-2026)
- Jasper — [GEO vs AEO vs SEO](https://www.jasper.ai/blog/geo-aeo)
- Frase — [What is GEO](https://www.frase.io/blog/what-is-generative-engine-optimization-geo)
- Bluehost — [What is llms.txt (2026)](https://www.bluehost.com/blog/what-is-llms-txt/)
- greadme — [Is llms.txt worth it](https://www.greadme.com/blog/seo/is-llms-txt-worth-it-for-ai-search)
