# Glossary Page Build Pack — `rxbs.org/glossary`

**Created:** Jul 6, 2026. The glossary is the **fastest AEO win** per the Jul 6 AI-visibility baseline: the definitional buyer queries ("what is a rebate aggregator," "what is spread pricing," "what is GER") have **no dominant incumbent** on Google or the AI engines, and this page carries a `DefinedTermSet` schema built to win them.

**This page's content is already done.** The blueprint `website_mockups/site/glossary.html` is a finished page (answer-first lede + 24 terms + schema); the renders `renders/glossary_desktop.jpg` / `glossary_mobile.jpg` are the visual target. This pack is the **Wix assembly guide** — how to build it so the content is real, crawlable page text (which is what makes the schema pay off).

## Sources of truth (keep in sync)
- **`glossary.html`** — the page content + the two JSON-LD blocks (copy from here).
- **`templates/documents/_glossary_terms.md`** — canonical definitions shared with the toolkits. If a definition is ever refined, update `_glossary_terms.md` + `glossary.html` + the live Wix page together.

---

## 1. Build approach (the one thing that matters for AEO)

**Build with NATIVE Wix text elements — do NOT drop `glossary.html` into an HTML/iframe embed.** Content inside a Wix HTML-embed/iframe is not indexed as page text, which would waste the whole AEO play. Recreate the layout with real Wix headings and paragraphs; the JSON-LD goes in the SEO structured-data field separately. The visible text and the schema must match.

Tip: open `glossary.html` in a browser (or ask Claude to publish it as a live link) and copy each term's heading + paragraph straight from the rendered page — cleaner than copying from source.

## 2. SEO Basics (Wix → page SEO panel)

- **Title tag:** `PBM Glossary: Pharmacy Benefit Terms Plan Sponsors Should Know | Prescription Benefit Solutions`
- **Meta description:** `Plain-English definitions of the pharmacy benefit manager terms in your PBM contract: spread pricing, GER, MAC, rebate aggregator, DIR, accumulators, and more. Free reference from Prescription Benefit Solutions.`
- **URL slug:** `/glossary` · **Canonical:** `https://www.rxbs.org/glossary`
- **Indexable:** ON (this is a content page — unlike the thank-you page).

## 3. Structured data (Wix SEO → this page → Advanced → Structured data markup)

Paste the **two `<script type="application/ld+json">` blocks** from `glossary.html`:
- **`DefinedTermSet`** (glossary.html lines 23–50) — the 24-term set; this is the AEO payload.
- **`BreadcrumbList`** (glossary.html lines 51–57).

Each `DefinedTerm` has a `url` with an anchor (e.g. `#spread-pricing`) — so give the matching on-page heading that exact anchor ID (see §5).

## 4. Page structure (top to bottom)

1. **Hero** (dark/ink band): eyebrow `Free Reference` · H1 `PBM Glossary` · the answer-first lede paragraph (glossary.html ¶ in the hero — starts "A PBM glossary is a plain-English reference…") · a row of 5 **jump-nav chips** linking to the 5 section anchors.
2. **Byline:** `By Ginny Crisp, PharmD` · `Reviews hundreds of PBM contracts a year` · `Published June 2026 · Updated June 2026`.
3. **5 term sections** (§5).
4. **Lead CTA** block: "Free Plan Sponsor Toolkit Library — 29 printable worksheets" → Toolkit Library.
5. **"Keep reading" related cluster** (3 links): Contract Language Library · "What is spread pricing?" guide · "What is a PBM contract audit?" guide.
6. **Closing CTA** box: "Book a 15-minute contract review."

## 5. The 24 terms, by section (each = H3 heading + one paragraph)

Give each H3 the **anchor ID** in parentheses so the jump-nav and schema URLs resolve. Copy the definition text verbatim from `glossary.html` (keeps the wording answer-first and in sync with the schema).

**§ Pricing & cost** (anchor `#pricing`) — 8 terms:
Spread pricing (`spread-pricing`) · GER / Generic Effective Rate (`ger`) · MAC / Maximum Allowable Cost (`mac`) · AWP / Average Wholesale Price (`awp`) · WAC / Wholesale Acquisition Cost (`wac`) · Net cost per script (`net-cost`) · Dispensing fee (`dispensing-fee`) · Ingredient cost (`ingredient-cost`)

**§ Rebates & revenue** (anchor `#rebates`) — 3 terms:
Rebate passthrough (`rebate-passthrough`) · Rebate aggregator (`rebate-aggregator`) · DIR / Direct and Indirect Remuneration (`dir`)

**§ Clinical & utilization management** (anchor `#clinical`) — 5 terms:
Prior authorization / PA (`prior-authorization`) · Step therapy (`step-therapy`) · Formulary tier (`formulary-tier`) · Specialty pharmacy (`specialty-pharmacy`) · Biosimilar (`biosimilar`)

**§ Plan structures** (anchor `#structure`) — 5 terms:
Accumulator and maximizer (`accumulator-maximizer`) · Carve-out and carve-in (`carve-out`) · Fiduciary (`fiduciary`) · Audit rights (`audit-rights`) · Termination and transition (`termination`)

**§ Regulatory & coding** (anchor `#coding`) — 3 terms:
340B (`340b`) · DAW code / Dispense As Written (`daw`) · NDC / National Drug Code (`ndc`)

## 6. AEO checklist (already satisfied by the blueprint — just preserve it when building)

- [x] Answer-first lede (defines "PBM glossary" in the first sentence)
- [x] Question-shaped, keyword-rich SEO title; firm name spelled out; `www.rxbs.org`
- [x] `DefinedTermSet` + per-term `DefinedTerm` schema (the citation magnet)
- [x] Internal links out to Contract Language Library, the guides, and the toolkit library
- [x] Byline with credential + "hundreds of contracts a year" proprietary anchor
- [ ] On-page heading anchors match the schema term URLs (set during build — §5)

## 7. Build checklist (Wix)

- [ ] Build `/glossary` with native Wix text elements per §4–§5; set the heading anchor IDs.
- [ ] Paste the two JSON-LD blocks into Structured data markup (§3).
- [ ] Set SEO title + meta + slug; leave indexable ON (§2).
- [ ] Add `/glossary` to the site nav/footer Reference section and submit nothing extra (it's already in the sitemap once published).
- [ ] After it renders live: it becomes the internal-link target for "spread pricing / rebate aggregator / GER" mentions in the Substack twins and other pages (confirm-before-link rule).
