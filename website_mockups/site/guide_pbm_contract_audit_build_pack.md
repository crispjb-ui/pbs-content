# /guide-pbm-contract-audit Build Pack — `rxbs.org/guide-pbm-contract-audit`

_Created Jul 23, 2026. First page of the answer-page wave (gameplan P1 #9: the citation moat, indexed before the Sep surge). Blueprint: `guide-pbm-contract-audit.html`; copy source delivered in chat (`guide_pbm_contract_audit_copy_source.html`); JSON-LD: `guide_pbm_contract_audit_jsonld_paste.md`. This is the money guide — it matches the highest-intent buyer query ("what is a PBM contract audit / how do you audit a PBM contract") and every AI-visibility baseline engine flagged the missing content hub it anchors._

**Slug decision (frozen):** the v2 URL map said `/guides/pbm-contract-audit`, but Wix static pages take a single URL segment, so guides publish FLAT: **`/guide-pbm-contract-audit`** (and later `/guide-what-is-spread-pricing`, `/guide-how-to-choose-a-pbm-auditor`, `/compare-pbm-audit-vs-broker-review`). Canonical + all JSON-LD updated to the flat slug. Once published, never renamed.

## 1. Build method
Duplicate **The Standards** page (newest content-page donor: byline, section ladder, paper background, closing band all present). Delete its inherited SEO-panel structured data before pasting the new blocks.

## 2. SEO fields
- **Title tag:** `What Is a PBM Contract Audit, and How Do You Audit a PBM Contract?`
- **Meta description:** `A PBM contract audit is an independent review of your pharmacy benefit contract's pricing, rebate, audit-rights, and termination terms to find what your plan overpays.`
- **URL slug:** `/guide-pbm-contract-audit` · **Canonical:** `https://www.rxbs.org/guide-pbm-contract-audit` · **Indexable:** ON.
- **Nav:** Resources dropdown, listed after FAQ (label: "PBM Contract Audit Guide"). Not top-level.

## 3. Structured data (4 blocks, all panel-sized — SEO panel, separate entries; no Custom Code needed)
Paste the four blocks from `guide_pbm_contract_audit_jsonld_paste.md`: **Article** (question headline, author Person @id, dates = publish date), **BreadcrumbList** (2-level: Home › PBM Contract Audit Guide — the blueprint's 3-level via /insights was dropped because /insights isn't built), **FAQPage** (5 Q&As — visible FAQ text on the page matches the schema verbatim), **HowTo** (4 steps). Each block is raw JSON, no `<script>` wrapper (the panel adds its own). Validator of record: validator.schema.org (Rich Results Test won't list FAQ — expected post-Aug-2023).

## 4. Page structure + type ladder (content-page ladder)
Eyebrow `PILLAR GUIDE` → H1 36 `What is a PBM contract audit?` → lede 19 → byline (GC circle · "By Ginny Crisp, PharmD · Reviews hundreds of PBM contracts a year · Published July 2026 · Updated July 2026") → lead answer paragraph (bold-weight first sentence: the quotable AEO answer) → 4 H2 sections (24, Primary Blue, accent underline) → FAQ section (H3 18) → lead-magnet CTA card → Keep reading → closing proof band. Body 16, gray #4D4D4D on paper/white cards per the established system.

## 5. Live-link map (deviations from the blueprint, all deliberate)
| Blueprint link | Live build |
|---|---|
| glossary.html#term (7 terms) | `rxbs.org/glossary` — use the live chip anchor (e.g. `#spread-pricing`) where one exists on the live page; bare `/glossary` otherwise |
| contract-language-library.html | `rxbs.org/contract-language-library` |
| library.html | `rxbs.org/toolkit-library` |
| solutions.html ("how the reviews fit together") | **re-routed to `rxbs.org/faq`** — live /solutions is the bare legacy page slated for rebuild; the FAQ's working-with-an-auditor section answers the same question |
| guide-what-is-spread-pricing.html (companion sentence + 2 Keep-reading rows) | **OMITTED until those guides publish** (never link a page before it renders). Add back per §7 |
| toolkit.html lead CTA | `rxbs.org/toolkit/contract-review-readiness` (live) |
| index.html#book closing CTA | `rxbs.org/request-a-call?topic=contract-review` |

**Keep reading (initial, all live):** Contract Language Library · PBM Glossary · Plan Sponsor FAQ · The Standards.

## 6. Proof-band correction (guardrail fix, REQUIRED — blueprint had it wrong)
The blueprint's closing band said "contracted **$78.7M in pharmacy spend**" and "**identified** roughly $469K." Both violate the 2025-metrics guardrails ($78.7M is contracted **savings**; "identified" is reserved for the $86.7M figure). Publish this corrected text (already in the copy source):
> In 2025, Prescription Benefit Solutions delivered $78.7M in contracted savings across 203 self-funded clients. Pharmacy benefit reviews averaged $469K in contracted savings per client, and PBM RFPs averaged 25% savings. Results vary by plan. The first step is an independent read of your own contract.

## 7. Post-live chain (run in order; tell Claude when it renders)
- [x] ✅ DONE Jul 23 — indexing requested; validator.schema.org clean (0 errors) on all 4 blocks. Live-build typo caught in screenshot review (CTA card "reveiw") fixed pre-publish.
- [ ] **Glossary "Keep reading" block:** add the PBM-contract-audit guide link (this was the deferred trigger logged when the block was built Jul 21).
- [ ] **FAQ link-ins:** where FAQ answers reference a contract audit, link the guide.
- [ ] **CLL:** add the guide to its related/keep-reading links.
- [ ] Freshness-registry row (content-page class; refresh = new FAQ Q&As from `/question-harvest`, link-ins as sibling guides publish, dateModified bump with real changes).
- [ ] **When each sibling guide publishes:** add the companion spread-pricing sentence back into the "How do you start" section and the two guide rows into Keep reading (tracked per-guide in their packs).

## 8. Remaining answer-page wave order (one pack per page, built on request)
1. ✅ this page → 2. `/guide-what-is-spread-pricing` → 3. `/what-we-are-seeing` (real 2025 data; proof value) → 4. `/guide-how-to-choose-a-pbm-auditor` → 5. `/compare-pbm-audit-vs-broker-review` (broker-sensitivity rules apply hard here) → 6. `/guide-how-to-read-a-pbm-rebate-report` (blueprint exists; wave 2).
