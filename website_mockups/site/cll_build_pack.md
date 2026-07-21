# Contract Language Library Build Pack — `rxbs.org/contract-language-library`

**Created:** Jul 21, 2026. Build method: **duplicate the live `/glossary` page** (its structural twin: hero, byline, anchored sections, lead CTA, keep-reading, closing CTA) and swap content per this pack. The W29 deep dive's same-day read (5 of 7 link clicks to the Substack Library) is the live demand this page captures on-site; the contract-language buyer prompts are still red in the AI-visibility tracker pending this page.

**Content is already done.** `website_mockups/site/contract-language-library.html` is the finished page: answer-first lede + how-to box + **20 provisions across 7 families** + 3 schema blocks. This pack is the Wix assembly guide.

## Sources of truth (keep in sync)
- **`contract-language-library.html`** — page content of record (copy text from here / the rendered copy-source page).
- **`cll_jsonld_paste.md`** — the 3 JSON-LD blocks, Wix-ready.
- **`substack_contract_language_library.md`** — the provision reservoir. Rule c2 (CLAUDE.md): every future Library push updates the Substack post AND the blueprint AND flags the Wix edit (duplicate a clause card, paste weak/means/strong, bump `dateModified`). The two surfaces never diverge on provision content.

## 1. Build approach
**Native Wix text elements only — never an HTML/iframe embed** (embedded content is not indexed as page text, which wastes the AEO play). Duplicating `/glossary` gives you themed native elements for free; the work is swapping text and re-anchoring.

## 2. SEO Basics (Wix → page Settings → SEO)
- **Title tag:** `PBM Contract Language Library: Weak vs. Protective Clauses | Prescription Benefit Solutions`
- **Meta description:** `Free, evergreen PBM Contract Language Library: side-by-side weak vs. protective pharmacy benefit contract language, from Prescription Benefit Solutions.`
- **URL slug:** `/contract-language-library` · **Canonical:** `https://www.rxbs.org/contract-language-library`
- **Indexable:** ON.

## 3. Structured data (Wix SEO → Advanced → Structured data markup)
**Delete the glossary's two inherited blocks from the duplicate first**, then paste the 3 blocks from `cll_jsonld_paste.md` (Article · BreadcrumbList · DefinedTermSet). Update the Article dates if go-live isn't Jul 2026.

## 4. Page structure (top to bottom, mapped from the glossary duplicate)
1. **Hero** (keep the dark band): eyebrow `Contract Library · Free & Evergreen` · H1 `PBM Contract Language Library` · sub-line `The vague language plan sponsors typically see in a PBM Services Agreement, set next to the protective language they should ask for instead.` · **jump chips → 7 family anchors** (§5; the glossary's 5 chips become 7 — duplicate two).
2. **Byline** (keep): `By Ginny Crisp, PharmD · Reviews hundreds of PBM contracts a year · Published July 2026 · Updated July 2026`.
3. **Answer-first lede** (the AEO-load-bearing paragraph — copy verbatim): begins `The PBM Contract Language Library is a free, side-by-side reference…`. Its two in-body links: "PBM glossary" → `/glossary` (live ✓); "PBM contract audit" → the live solutions/services page if one exists, else drop the link and keep plain text (confirm-before-link).
4. **"How to use this library" box:** 3-step ordered list (before renewal / during negotiation / after signing).
5. **7 family sections** (§5) — each: H2 family head + one-line sub + its clause cards.
6. **Lead CTA** (keep the glossary's Toolkit Library card; retitle): `Contract Review Readiness Checklist — The 8 documents to pull and 15 audits to run before a PBM contract review. Free.` → Toolkit Library page.
7. **"Keep reading"** (trim to live pages only): `PBM glossary: every term defined` → `/glossary`. The two guide links (PBM-contract-audit, choose-an-auditor) join when those pages publish.
8. **Closing CTA band** (keep the glossary's): headline `Want this language tested against your own contract?` → button to `/request-a-call?topic=contract-review` (same target the glossary uses).
9. **Sitewide disclaimer line** above the CTA: `Prescription Benefit Solutions reviews hundreds of PBM contracts a year. These examples represent common patterns, not specific client contracts. Illustrative examples for educational purposes. Actual contract terms vary by plan, PBM, and market conditions.`

## 5. The 20 provisions, by family (each clause = H3 + weak quote + "What it actually means" + protective quote)
Give each family H2 the **anchor ID** in parentheses so the hero chips resolve. Every clause card keeps the three-part pattern: **"What you might see"** (red-tinted quote) → **"What it actually means:"** (plain paragraph) → **"What you should ask for"** (blue-tinted quote). In Wix, style the two quote blocks as the glossary's callout/quote boxes (or plain blockquotes if the duplicate has none); the LABELS must stay as visible text.

- **§ Pricing Guarantees** (`#pricing-guarantees`) — 4: Generic Effective Rate (GER) · Brand Discount Guarantee · Definition of Generic Drug · Spread Pricing / Claim Pricing. _GER card keeps its "Illustrative example…" disclaimer line._
- **§ Rebate Provisions** (`#rebates`) — 2: Rebate Passthrough · Rebate Guarantee.
- **§ Audit Rights** (`#audit-rights`) — 7: Audit Access · Audit Remedy · Audit Frequency and Notice (§ 10.01) · Audit Scope (§ 10.02) · Auditor Identity (§ 10.03) · Findings Binding (§ 10.04) · Cost Responsibility and Materiality Threshold (§ 10.05).
- **§ Clinical Program Provisions** (`#clinical`) — 2: Prior Authorization · Formulary Management.
- **§ Termination and Transition** (`#termination`) — 2: Termination Notice and Termination for Convenience · Data Transfer.
- **§ Specialty Pharmacy** (`#specialty`) — 1: Specialty Routing.
- **§ Biosimilar Provisions** (`#biosimilars`) — 2: Biosimilar Formulary Placement · Brand-to-Biosimilar Transition and Performance.

Copy all clause text verbatim from the rendered copy-source page (or `contract-language-library.html` opened in a browser) — verbatim keeps the on-page text in sync with the Substack Library and the schema.

## 6. AEO checklist (preserved from the blueprint — keep intact while building)
- [x] Answer-first lede (defines the Library in the first sentence, firm name + Charleston SC entity anchors)
- [x] Question-relevant SEO title; firm name spelled out; `www.rxbs.org`
- [x] DefinedTermSet over the 7 provision families (the citation magnet for "PBM contract language" queries)
- [x] Internal links: glossary, toolkit library, request-a-call
- [x] Byline with credential + "hundreds of contracts a year" proprietary anchor
- [ ] Family heading anchors match the hero chips (set during build — §5)

## 7. Build checklist (Wix)
- [ ] Pages panel → Glossary → "..." → **Duplicate**; rename `Contract Language Library`; set slug `/contract-language-library`.
- [ ] Swap content per §4-§5 with native elements; set family anchor IDs; rewire hero chips (7).
- [ ] Delete inherited glossary JSON-LD; paste the 3 blocks (§3); set SEO title/meta (§2); indexable ON.
- [ ] Add to the **Resources** nav dropdown (alongside Toolkit Library + Glossary) + footer Reference column.
- [ ] Preview desktop + mobile (chips, anchors, quote blocks legible); **Publish**.
- [ ] **Tell Claude it renders live** → triggers the five-link re-point pass in one commit: glossary "Keep reading" block + glossary closing-CTA re-point, W29-W37 deep-dive body links, `/for-brokers` "Useful with clients" link, Substack Library post link-back (AEO rule) — all logged in OPEN_ITEMS with this page as the trigger.
- [ ] Request indexing in Search Console (URL inspection → Request indexing); the sitemap picks it up automatically within days.
