# /standards Build Pack — `rxbs.org/standards`

_Created Jul 21, 2026, the day the attestation cleared. Red-team: CLEARED TO PUBLISH (see `standards_independent_pbm_review.md` header). This page is the category-defining asset and the domino for the September stack: its go-live un-gates the RSO promotion pass, Email 5 v2 "Three Ways Forward," the thank-you page item-5 update, and the W35-W37 renewal first comments._

**Copy of record:** `standards_independent_pbm_review.md` (between the ▼▲ markers, post-red-team: PharmD-only byline, colon headers). Copy source render delivered in chat; regenerate from the doc anytime. Build method: duplicate `/glossary`, swap.

## 1. SEO Basics
- **Title tag:** `The Standards for Independent PBM Review | Prescription Benefit Solutions`
- **Meta description:** `The five independence criteria, minimum scope, and required deliverables of a real independent PBM review. Published so any plan sponsor can hold any reviewer, including us, to the same test.`
- **URL slug:** `/standards` · **Canonical:** `https://www.rxbs.org/standards` · **Indexable:** ON.

## 2. Structured data
Three small blocks (all fit the SEO panel comfortably — largest 1,399 chars; no Custom Code needed): `standards_jsonld_paste.md` — Article (update dates to the publish date) + BreadcrumbList (2-level) + DefinedTermSet (the five independence criteria — the citable payload for "what makes a PBM review independent" queries). Delete the glossary-inherited blocks first; no script wrappers in the panel.

## 3. Page structure
1. **Hero** (dark band): eyebrow `The Standards · Version 1.0` · H1 `The Standards for Independent PBM Review` · sub-line from the copy source. **No chips** — 4 short parts don't need jump nav; delete the glossary duplicate's chip row and anchors.
2. **Byline:** `By Ginny Crisp, PharmD · Version 1.0 · Published July 2026 · Revised annually each January`. (PharmD only — the BCACP was removed at red-team; do not reintroduce it.)
3. **Body:** the two intro paragraphs, then Part 1-4 as H2s with their numbered lists; the Part 4 questions as a styled blockquote (Accent Blue left border), verbatim.
4. **Footer paragraph** (italic, above the CTA): the "Prescription Benefit Solutions is an independent pharmacy benefits consultancy…" closer — this carries the "We accept no PBM revenue" attested claim; verbatim, never paraphrase.
5. **Keep reading:** CLL + FAQ + Glossary (all live).
6. **Closing CTA:** "Hold our review to this standard" → `request-a-call?topic=contract-review`.

## 4. Verbatim rule (stricter here than any other page)
Every sentence in Part 1 and the footer paragraph is an **attested factual claim** (Ginny's Jul 21 attestation covers the language *as written*). Copy exactly; any wording change re-opens the attestation. The annual January revision is the designated edit window.

## 5. Post-publish (the September chain — run in order)
- [ ] Search Console → request indexing for `/standards`.
- [ ] Tell Claude it renders live → repo pass: freshness registry row; the coupled RSO-promotion updates (Email 5 → v2 "Three Ways Forward" in Zapier, thank-you item 5 → "three ways forward", W35-W37 renewal first comments gain the RSO link); `/for-brokers` "Useful with clients" gains the `/standards` link (deferred slot from its build); Substack Field Note announcing the Standards (first-distribution item) gets scheduled.
- [ ] Render the §2 client-facing attestation to the toolkit PDF (`templates/documents/independence_attestation`) so it ships with engagements — the page promises it in writing.
- [ ] The 2-page Standards PDF (toolkit visual system) follows via the standard pipeline; the page publishes without waiting for it.
