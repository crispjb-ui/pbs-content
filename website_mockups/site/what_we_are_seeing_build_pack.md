# /what-we-are-seeing Build Pack — `rxbs.org/what-we-are-seeing`

_Created Jul 23, 2026. Answer-page wave #3 (gameplan P1 #9). Blueprint: `what-we-are-seeing.html`; copy source in chat; JSON-LD: `what_we_are_seeing_jsonld_paste.md`. The annual aggregate-findings page: 6 patterns from the 2025 reviews + the real 2025 numbers. Until `/results` exists, this is ALSO the de facto proof surface, and it's the page every AI-visibility engine flagged as missing ("no on-site proof")._ 

**Two correction classes applied vs the June blueprint (both REQUIRED):**
1. **Proof-stat guardrails (5 occurrences):** the blueprint said "pharmacy spend contracted" and "savings identified" throughout. Corrected everywhere to **$78.7M in contracted savings** and **averaged $469K in contracted savings per client** ($562K RFP avg per client; 25% stays labeled as the RFP rate; "identified" appears nowhere — reserved for the $86.7M figure). Also fixed "per engagement" → **per client** (the $469K/$562K averages are per client per the metrics of record).
2. **Copay neutrality rule (Jul 16):** the blueprint's section was titled "…drain member assistance" with a member-harm thesis. Rewritten to the plan-sponsor lens: PBS uses these programs in client work; the critique targets undisclosed vendor/PBM economics (who keeps each captured dollar, %-of-savings fees, sign-off, member-communication design), never the tool itself. The rewritten section is in the copy source; do not resurrect the old heading.

## 1. Build method
Duplicate the **Spread Pricing Guide** (newest donor). Delete inherited SEO-panel structured data. This page has two extra components the guides don't: the **4-stat band** under the answer paragraph and the **4-tile engagement breakdown** — build both as simple card rows (numbers in Plex Mono).

## 2. SEO fields
- **Title tag:** `What We're Seeing in PBM Contracts: 2025 in Review | Prescription Benefit Solutions`
- **Meta description:** `In 2025 Prescription Benefit Solutions reviewed hundreds of PBM contracts across 203 self-funded employer clients and delivered $78.7M in contracted savings.`
- **URL slug:** `/what-we-are-seeing` · **Canonical:** `https://www.rxbs.org/what-we-are-seeing` · **Indexable:** ON.
- **Page name / nav:** "What We're Seeing" — Resources dropdown, after Spread Pricing Guide.

## 3. Structured data (2 blocks — Article + BreadcrumbList; no FAQPage/HowTo on this page)
From `what_we_are_seeing_jsonld_paste.md`. Article description rewritten to the guardrail-clean stats; breadcrumb 2-level; dates = publish date. Raw JSON, separate entries, validator.schema.org after publish.

## 4. Page structure
Dark hero (eyebrow `ANNUAL AGGREGATE · 2025` · H1 `What We're Seeing in PBM Contracts` · lede incl. "No individual client is identified.") → byline → **answer paragraph 19px** (the AEO citation anchor, stats bolded) → **4-stat band** ($78.7M contracted savings · 203 clients · 100s of contracts/yr · 25% avg RFP savings) → intro line + **6 findings** (H2 24 + one paragraph each) → **"How 2025 broke down"** section (paragraph + 4 tiles: 132 PBRs · 86 contract reviews · 59 RFPs · 429 other; disclaimer line) → lead-magnet card (toolkit library) → Keep reading → closing CTA row.

## 5. Live-link map
| Blueprint | Live |
|---|---|
| library.html (2 CTAs) | `rxbs.org/toolkit-library` |
| guide-pbm-contract-audit.html / guide-what-is-spread-pricing.html | both LIVE — keep |
| contract-language-library.html | `rxbs.org/contract-language-library` |
| solutions.html "Request a PBM contract audit" CTA | `rxbs.org/request-a-call?topic=contract-review` |
| index.html#book "Book a 15-minute review" CTA | **DROPPED** — duplicate destination of the request-a-call button; closing row is 3 buttons (Request a call · Browse free toolkits · Open the PBM glossary) |
| glossary.html | `rxbs.org/glossary` |

**Keep reading:** What is a PBM contract audit? · What is spread pricing? · Contract Language Library · The Standards (added; not in blueprint).

## 6. Post-live chain
- [ ] Indexing request + validator clean.
- [ ] **Cross-links in:** glossary + CLL + both guides' Keep-reading blocks gain a `What We're Seeing: 2025 in review` row; FAQ links it where an answer cites the yearly review volume; **for-brokers** "Useful with clients" block gains it (proof surface for broker conversations).
- [ ] Freshness registry row — **ANNUAL refresh cadence** (the page re-publishes each January with the prior year's numbers; the January refresh is a full stat re-verify against the metrics of record, never partial-year extrapolation).
- [ ] Site map / URL map / gameplan flip to 6 of 8.
- [ ] Note for the September campaign: this page is the citable proof link for ads/briefing copy until `/results` exists.
