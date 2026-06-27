# Wix Build Runbook — New AEO Pages (priority order)

> **Governed by `aeo_geo_master_plan.md` (initiative tracker) + `website_aeo_master_plan.md` (website build spec: the Phase-0 template + archetypes).** This runbook is the per-page click-by-click. Build the master template FIRST per the website build spec, then use this for each page.

_Created Jun 20, 2026. Step-by-step to build the new owned-domain answer pages in Wix, in the order that delivers the most AI-search (AEO/GEO) value per hour. Each page's content + exact structured data lives in the matching blueprint HTML in `website_mockups/site/`. Build top to bottom; you can stop after any page and the site is still coherent._

## The pages, in priority order
| # | Build | Wix slug (URL) | Blueprint file | Why this order |
|---|-------|----------------|----------------|----------------|
| 1 | **PBM Glossary** | `/glossary` | `glossary.html` | Highest citation-per-hour. Pure definitional bait; AI engines lift definitions verbatim. |
| 2 | **Contract Language Library** | `/contract-language-library` | `contract-language-library.html` | Flagship canonical twin of the Substack Library; your most ownable asset. |
| 3 | **What We're Seeing (2025)** | `/what-we-are-seeing` | `what-we-are-seeing.html` | Original-data citation bait competitors can't copy. Real 2025 figures already in it. |
| 4 | **Guide: What Is a PBM Contract Audit** | `/guides/pbm-contract-audit` | `guide-pbm-contract-audit.html` | Pillar page for the core buyer question. |
| 5 | **Guide: What Is Spread Pricing** | `/guides/what-is-spread-pricing` | `guide-what-is-spread-pricing.html` | Pillar page; high-volume definitional query. |
| 6 | **Guide: How to Choose a PBM Auditor** | `/guides/how-to-choose-a-pbm-auditor` | `guide-how-to-choose-a-pbm-auditor.html` | Consideration-stage; highest-intent (bottom-funnel) AI referrals. |
| 7 | **Compare: PBM Audit vs. Broker Review** | `/guides/pbm-audit-vs-broker-review` | `compare-pbm-audit-vs-broker-review.html` | Consideration-stage; lowest priority of the set. |
| 8 | **FAQ: Questions Plan Sponsors Ask** | `/faq` | `faq.html` | Buyer-anxiety entry point; 14 Q&As by persona with **FAQPage schema**. Links into every other page, so build it after the pages it references exist. Evergreen twin of the "Ask Ginny" videos. |

> The single most important Wix step on every page is pasting the **JSON-LD structured data** (Step D below). That is where the AEO value lives, more than the visual build. If short on time, build the page body simply but never skip the structured data.

---

## ONE-TIME pre-flight (do once, before page 1)
1. **Robots + AI crawlers:** confirm `robots.txt` (from `site/robots.txt`) is live at `www.rxbs.org/robots.txt` and allows GPTBot/ClaudeBot/PerplexityBot/Google-Extended. In Wix: Settings → SEO → Robots.txt editor → paste the file's contents → Save.
2. **Sitemap:** Wix auto-generates `sitemap.xml`. Submit it in **Google Search Console** and **Bing Webmaster Tools** (one-time). New pages get added automatically as you publish them.
3. **Sitewide schema:** confirm the **Organization + Person** JSON-LD (from `index.html` head) is in Settings → SEO → Structured Data Markup (sitewide). Fill the two `sameAs` LinkedIn URLs (Ginny's profile + the company page) once you have them.
4. **Reusable header/footer:** the Wix site header (nav) and footer are global. Add **Insights** to the header nav if not present, and add a **Reference** footer column with links to Glossary, Contract Language Library, and What We're Seeing (these get built below; you can add the footer links as you create each page).

---

## Per-page steps (repeat for each page 1→7)

Open the matching blueprint HTML in a browser (and a text editor) so you can copy text + the JSON-LD as you go.

**A. Create the page**
- Wix Editor → Pages menu → **+ Add Page** → name it (e.g. "PBM Glossary").
- Page Settings → **URL slug** → set to the slug in the table (e.g. `glossary`). For the guides, use a `/guides/` prefix if your Wix plan allows nested slugs; if not, use a flat slug like `guides-pbm-contract-audit` and keep the canonical (Step C) pointing at the `/guides/...` form you prefer, OR accept the flat slug as canonical. Be consistent.

**B. SEO basics (title + description)**
- Page Settings → **SEO Basics**.
- **Title tag:** copy the `<title>` from the blueprint's `<head>` (these are already question-shaped, the AEO win).
- **Meta description:** copy the `<meta name="description">` content.

**C. Canonical**
- Page Settings → SEO Basics → Advanced SEO → **Canonical tag:** set to the blueprint's `<link rel="canonical">` URL (e.g. `https://www.rxbs.org/glossary`). Usually Wix self-canonicals correctly; set it explicitly to be safe.

**D. Structured data (THE AEO STEP — do not skip)**
- Page Settings → SEO Basics → Advanced SEO → **Structured Data Markup** → **+ Add**.
- Open the blueprint HTML, copy EACH `<script type="application/ld+json"> … </script>` block's **inner JSON** (everything between the script tags), and paste each as a separate structured-data entry.
  - Glossary: paste the **DefinedTermSet** + **BreadcrumbList**.
  - Contract Language Library: **Article** + **BreadcrumbList** + **DefinedTermSet**.
  - What We're Seeing: **Article** + **BreadcrumbList**.
  - Each Guide / Compare page: **Article** + **BreadcrumbList** + **FAQPage**.
  - FAQ page (`/faq`): **FAQPage** + **BreadcrumbList** (the two blocks in `faq.html`).
- Validate each block at [validator.schema.org](https://validator.schema.org/) (paste the JSON) before saving.

**E. Build the page body (match the brand; the blueprint is the spec)**
- Recreate the blueprint's sections with native Wix elements (native = best for SEO/crawlability; avoid putting body copy inside an HTML-embed iframe, which engines may not read).
- **Fonts/colors (PBS v2):** headings IBM Plex Sans SemiBold; body Plex Sans Regular; numbers Plex Mono. Primary Blue `#015880`, Accent `#A7E0FA`, Gray `#4D4D4D`, paper `#FAFAF7`, dark hero `#0c1a22`.
- **Structure to mirror:** dark hero (eyebrow + H1 + one lead paragraph + breadcrumb), then a single readable column. **One H1 per page** (the hero headline). Section headers are **H2** (the blueprint's `<h2>` in Primary Blue).
- **Answer-first:** the blueprint's first body sentence is the liftable answer. Keep it as the first paragraph, verbatim. Do not bury it under a marketing intro.
- **Copy the body text** straight from the blueprint (definitions, sections, FAQ). For the Glossary and Contract Library, keep each term/provision as its own clearly-labeled block.
- **Internal links:** recreate the in-text links to other pages (glossary terms, solutions, library, book-a-review). These matter for how AI crawlers map authority across the site.

**F. Add to navigation**
- Add the page under **Insights** in the header (or as a sub-item) and to the footer **Reference** column. The blueprint's nav marks Insights active.

**G. Publish + verify**
- Publish. Open `www.rxbs.org/<slug>` and confirm it renders.
- Run the URL through Google's **Rich Results Test** and the **schema.org validator** to confirm the structured data is detected.
- Confirm the canonical and title in **View Source**.

---

## After the pages: wire the rest of the site (cohesion)
These updates make the new pages discoverable and the site consistent (the blueprints in `site/` already reflect them, so use those as the spec):
1. **Insights page (`insights.html` spec):** point the "Evergreen Reference Libraries" cards to the new internal pages (Contract Library → `/contract-language-library`, What We're Seeing → `/what-we-are-seeing`, Toolkit Library → `/toolkit-library`), and add the new **"Guides & Answers"** card row (Glossary + the 4 guides + the **FAQ**). Add **FAQ** to the Learn mega-menu dropdown too.
2. **Home (`index.html` spec):** the stats band shows the real 2025 figures (`$78.7M` contracted, `203` plans); the "Contract Library" card links to `/contract-language-library`.
3. **About (`about.html` spec):** stats band filled; **Person + Organization** structured data added (paste from the about.html head).
4. **Solutions (`solutions.html` spec):** **Service/ItemList** structured data added (paste from the head).
5. **Toolkit dynamic page (`toolkit.html` spec):** add the **DigitalDocument/CreativeWork** structured data, bound to the Toolkits CMS row (name → title, description → seo_description, url → slug) so all 29 toolkits inherit it.
6. **Footers everywhere:** four columns — Explore · Reference · Content · Contact (the Reference column = Glossary, Contract Language Library, What We're Seeing).

## Done = leadership measurable
Once pages 1-7 are live, run the baseline in `ai_visibility_tracker.md` (the 20 buyer prompts across ChatGPT/Perplexity/Gemini/Google AI Overviews/Claude). As the pages get indexed, the "source URL" column should shift from Substack-only to `rxbs.org`. That shift is the leadership move working.
