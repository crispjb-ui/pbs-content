# Toolkit Dataset — Source of Truth

> **Purpose.** This file is the source of truth for the Wix `Toolkits` Data Collection. Each row below is one entry in the collection; each entry becomes one URL on `rxbs.org/toolkit/<slug>` and feeds the welcome-email sequence with all the per-toolkit content.
>
> **Architecture.** The Wix dynamic-page template renders any row in this collection as a landing page. The form on that page submits a hidden bundle of fields (the row's own values + the paired second toolkit's values + the paired Field Note's values). The Wix Automation reads those form fields, writes them to the contact's custom fields, and Emails 1-5 reference them as tokens. **One automation, one set of email templates, N rows.** Adding toolkit N+1 = add a row here, add a row in Wix, upload one PDF. No new landing page, no new automation, no new email campaign.
>
> **Denormalization.** Each row stores the *paired* second toolkit's name + PDF URL + blurb directly (denormalized) rather than a foreign key. Tradeoff: if a paired toolkit's PDF URL changes, multiple rows need updating. Acceptable for 29 toolkits; scriptable from this file.

---

## Schema

| Column | Type | Used by | Notes |
|---|---|---|---|
| `slug` | Text (key) | URL routing, contact label `asset:<slug>` | Lowercase, hyphen-separated. Matches the landing page URL segment. |
| `name` | Text | Landing page H1, Email 1 token `{{first_toolkit_name}}` | Full toolkit name as it appears in the PDF header. |
| `pdf_url` | URL | Email 1 download link | Public Wix Media URL after upload. |
| `mechanic_phrase` | Text | Email 1 body (`"patterns we see on <mechanic_phrase>"`) | 3-5 words. Audit-mechanic specific. |
| `pillar` | Text | Contact label `pillar:<x>`, segmentation | One of the 6 PBS pillars. |
| `second_toolkit_name` | Text | Email 2 token `{{second_toolkit_name}}` | The paired toolkit's full name. |
| `second_toolkit_pdf_url` | URL | Email 2 download link | The paired toolkit's public Wix Media URL. |
| `second_toolkit_blurb` | Long Text | Email 2 body (3-4 sentence pair explanation) | Drafted per-pairing, not generic. |
| `field_note_title` | Text | Email 3 token `{{trigger__field_note_title}}` | The paired published Field Note's title. |
| `field_note_blurb` | Long Text | Email 3 body (1-2 sentence pairing explanation) | Drafted per-pairing. Added May 19, 2026 as part of CMS-driven Email 3 architecture (single Send action, no Zapier Paths needed). |
| `field_note_url` | URL | Email 3 link | benefitblindspots.substack.com URL. |

**Architecture note (revised May 19, 2026):** All toolkit-specific email content is driven from this CMS collection via Velo's `dynamicDataset.getCurrentItem()` and posted directly to the Zapier webhook. Adding a new toolkit ships its full email content as soon as the CMS row is populated — no Zapier edits, no Velo code edits, no form-field changes required. The Wix Contacts custom-fields path from the original Wix Automation architecture is deprecated.

**Form-side hidden fields (revised May 19, 2026):** The form-side hidden-field population (Velo `setFieldValues`) is now simplified to a single hidden field `toolkit_name` — kept only so the Wix Submissions DB record shows at-a-glance which toolkit each lead downloaded. All other CMS-derived values (pdf_url, second_toolkit_*, field_note_*) are sent to Zapier directly from CMS via the webhook payload, not via form fields. Form drops from 10 fields to 5 (4 visible + 1 hidden), eliminating the Wix Forms 10-field cap headache and the white-box hidden-field workaround.

---

## Pairing rules

Each toolkit row's `second_toolkit_*` fields are populated using these rules:

1. **Different mechanic from the first.** Email 2's job is to demonstrate breadth: "you saw mechanic A, here's mechanic B that ties into the same contract."
2. **PBM Compensation as the "zoom out" anchor.** Any toolkit auditing a single revenue stream (channel pricing, rebate, spread, owned-pharmacy) pairs to PBM Compensation as the comprehensive five-stream framework.
3. **Tier 1 toolkits pair down to Tier 2 mechanics.** Contract Review Readiness → Channel Pricing Audit. Optimize vs Go-to-Market → RFP Scoring or Contract Amendment. PBR Framework → Mid-Year Claims Red Flag.
4. **PBM Compensation entry pairs to Quarterly Reporting** (the operational follow-on, since PBM Comp surfaces what to ask for; Quarterly Reporting audits whether the PBM is showing it).

---

## Rows

### channel-pricing — Channel Pricing Audit Worksheet

| Column | Value |
|---|---|
| `slug` | `channel-pricing` |
| `name` | `Channel Pricing Audit Worksheet` |
| `pdf_url` | `[Wix Media URL — already live]` |
| `mechanic_phrase` | `per-channel margin` |
| `pillar` | `Transparency & Industry Education` |
| `second_toolkit_name` | `PBM Compensation Audit Worksheet` |
| `second_toolkit_pdf_url` | `https://f4a10ae5-926c-402e-bec1-e9ae8845f739.usrfiles.com/ugd/f4a10a_bb76ebca1b994c0db20e64985f6a5b44.pdf` |
| `second_toolkit_blurb` | `The PBM Compensation Audit Worksheet maps all five revenue streams that flow from your plan to your PBM. Channel pricing is one. The other four are where most disclosure gaps live.` |
| `field_note_title` | `What We See When We Audit Channel Pricing` |
| `field_note_blurb` | `The Channel Pricing Audit Worksheet decoded the channel-pricing terms. The Field Note runs the same audit on the MAC list itself: the per-channel margin spread that the contract's MAC clause is silent on.` |
| `field_note_url` | `https://benefitblindspots.substack.com/p/one-drug-class-to-watch-the-next` |

**Verification flag (May 19, 2026):** the `field_note_url` slug `/p/one-drug-class-to-watch-the-next` does not match the `field_note_title` `What We See When We Audit Channel Pricing`. Confirm the live Substack URL for the W18 Channel Pricing Field Note and update this row before Email 3 ships to Channel Pricing leads.

---

### contract-review-readiness — Contract Review Readiness Checklist (Tier 1)

| Column | Value |
|---|---|
| `slug` | `contract-review-readiness` |
| `Title` | `Contract Review Readiness Checklist` |
| `eyebrow` | `TIER 1 · PBM CONTRACT REVIEW · READINESS CHECKLIST` |
| `headline` | `Pull Eight Documents. Surface Fifteen Audits.` |
| `headline_emphasis` | `The Readiness Checklist Before Your PBM Contract Review.` |
| `subtitle` | `A 2-page printable framework PBS uses across 100s of PBM contract reviews annually. Free download. Sent to your inbox.` |
| `bullet_1` | `8-document set to pull before the review kickoff` |
| `bullet_2` | `15 per-mechanic audit components mapped (financial, contract, workflow)` |
| `bullet_3` | `Optimize-existing vs go-to-market recommendation with dollar magnitudes` |
| `bullet_4` | `Paste-ready broker email to request what's missing` |
| `valueprop_card_1_title` | `Documents to Gather` |
| `valueprop_card_1_body` | `Pull eight items before the review kickoff: current PBM Services Agreement and amendments, prior contract versions, last four quarterly reports, Plan Document, stop-loss policy, prior RFP/evaluation docs, member disruption logs. Whatever is missing is a finding by itself.` |
| `valueprop_card_2_title` | `Fifteen Audits Mapped` |
| `valueprop_card_2_body` | `Every Contract Review integrates fifteen per-mechanic audits: financial (channel pricing, rebate, PBM compensation, GER/BER), contract clauses (performance guarantee, network, disclosure, termination, definitions), workflow (step therapy, specialty routing, COB, member transition). Each runs standalone in half a day.` |
| `valueprop_card_3_title` | `The Decision the Review Produces` |
| `valueprop_card_3_body` | `Every Contract Review ends with one of two recommendations: optimize existing (negotiate redlines and amendments with the current PBM) or go to market (issue an RFP). The Decision Framework Toolkit walks the three variables: total finding magnitude, negotiability, and switching cost.` |
| `valueprop_card_4_title` | `This Quarter's Action Plan` |
| `valueprop_card_4_body` | `Pull the document set. Schedule a 60-90 minute kickoff. Make the team available for follow-up questions. Convene the benefits committee to receive the findings and the optimize-vs-go-to-market recommendation. The next 12-18 months continue under twice-yearly Pharmacy Benefit Review cadence.` |
| `pdf_filename_display` | `Contract Review Readiness Checklist` |
| `seo_title` | `PBM Contract Review Readiness Checklist - Free Download - Prescription Benefit Solutions` |
| `seo_description` | `The readiness checklist PBS uses across 100s of PBM contract reviews annually. 8 documents to pull, 15 audits mapped, optimize-vs-go-to-market recommendation. Free download.` |
| `related_toolkit_slugs` | `channel-pricing, pbm-compensation, optimize-vs-go-to-market` |
| `image_alt_text` | `Marked-up PBM Services Agreement contract page with handwritten red-pen annotations on unmonitored clauses` |
| `pdf_url` | `[Upload evergreen_contract_review_readiness_checklist.pdf to Wix Media, paste URL]` |
| `tier` | `1` |
| `mechanic_phrase` | `integrated contract review` |
| `is_featured` | `TRUE` |
| `is_archived` | `FALSE` |
| `second_toolkit_name` | `Channel Pricing Audit Worksheet` |
| `second_toolkit_pdf_url` | `https://f4a10ae5-926c-402e-bec1-e9ae8845f739.usrfiles.com/ugd/f4a10a_23fa36ae1b824651a117a6ed99437003.pdf` |
| `second_toolkit_blurb` | `The Channel Pricing Audit Worksheet runs one of the fifteen audits inside a Contract Review. Half a day per-channel for retail, mail, specialty. Run standalone or as part of the integrated review.` |
| `field_note_title` | `How Plan Sponsors Actually Enforce Audit Rights` |
| `field_note_blurb` | `The Contract Review surfaces audit-rights gaps. This Field Note is what comes next: how to actually run the audit once the contract has the right language.` |
| `field_note_url` | `[PLACEHOLDER — FN-03 in field_note_backlog.md not yet shipped; populate when Field Note publishes]` |

---

### optimize-vs-go-to-market — Optimize Existing vs Go-to-Market Decision Framework (Tier 1)

| Column | Value |
|---|---|
| `slug` | `optimize-vs-go-to-market` |
| `Title` | `Optimize Existing vs Go-to-Market Decision Framework` |
| `eyebrow` | `TIER 1 · POST-CONTRACT-REVIEW · DECISION FRAMEWORK` |
| `headline` | `Optimize Existing. Or Go to Market.` |
| `headline_emphasis` | `The Three-Variable Decision Framework PBS Uses After Every Contract Review.` |
| `subtitle` | `A 2-page printable framework PBS uses to score the optimize-vs-go-to-market call after every contract review. Free download. Sent to your inbox.` |
| `bullet_1` | `Three-variable rubric: finding magnitude, negotiability, switching cost` |
| `bullet_2` | `Score template you can run with your benefits committee` |
| `bullet_3` | `Optimize path: redline agenda + amendment timeline` |
| `bullet_4` | `Go-to-market path: 4-6 month RFP backplan from effective date` |
| `valueprop_card_1_title` | `Quantify the Gap` |
| `valueprop_card_1_body` | `Total the dollar magnitude of audit findings from the per-mechanic toolkits. The contract review surfaces individual gaps; the Decision Framework converts the stack into a single number that drives the recommendation. Document the rationale for each gap.` |
| `valueprop_card_2_title` | `Negotiability Assessment` |
| `valueprop_card_2_body` | `Score the current PBM on willingness to move on each finding. Track recent responses, contract history, and prior amendment patterns. PBMs that haven't moved in three renewal cycles rarely move now. The score determines whether optimize is even a viable path.` |
| `valueprop_card_3_title` | `Switching Cost Analysis` |
| `valueprop_card_3_body` | `Quantify implementation cost, member disruption risk, and timeline risk for a PBM change. Add data migration, member communication, and clinical program reconfiguration. The switching cost is real but bounded; document it before recommending either path.` |
| `valueprop_card_4_title` | `This Quarter's Action Plan` |
| `valueprop_card_4_body` | `Score the three variables. If recommendation is optimize: schedule the amendment process using the Contract Amendment Letter Toolkit. If go-to-market: schedule the RFP using the RFP Scoring Methodology Audit. Either way: schedule the next twice-yearly Pharmacy Benefit Review.` |
| `pdf_filename_display` | `Optimize vs Go-to-Market Decision Framework` |
| `seo_title` | `Optimize Existing vs Go-to-Market PBM Decision Framework - Free Download - Prescription Benefit Solutions` |
| `seo_description` | `The three-variable decision framework PBS uses after every contract review. Score finding magnitude, negotiability, and switching cost. Free download.` |
| `related_toolkit_slugs` | `contract-review-readiness, rfp-scoring-audit, contract-amendment-letter` |
| `image_alt_text` | `Decision matrix chart on a whiteboard with three variables scored: dollar magnitude, negotiability, switching cost` |
| `pdf_url` | `[Upload evergreen_optimize_vs_go_to_market_decision_framework.pdf to Wix Media, paste URL]` |
| `tier` | `1` |
| `mechanic_phrase` | `optimize vs go-to-market` |
| `is_featured` | `TRUE` |
| `is_archived` | `FALSE` |
| `second_toolkit_name` | `Contract Amendment Letter Template` |
| `second_toolkit_pdf_url` | `[Upload week_24_thursday_contract_amendment_letter.pdf to Wix Media, paste URL]` |
| `second_toolkit_blurb` | `The Contract Amendment Letter Template carries the optimize-existing path forward. Paste your audit findings into the redline letter, send to your PBM with the negotiation timeline. Mid-year window beats year-end.` |
| `field_note_title` | `What a PBM Transition Actually Looks Like: Timeline and Pitfalls` |
| `field_note_blurb` | `The strategic decision is one thing. The operational reality of the switch is another. Six months minimum from RFP to go-live, with the pitfalls that catch most plans by surprise.` |
| `field_note_url` | `[PLACEHOLDER — FN-10 in field_note_backlog.md not yet shipped; populate when Field Note publishes]` |
| `field_note_url` | `[TBD]` |

---

### pbr-framework — Pharmacy Benefit Review Framework (Tier 1)

| Column | Value |
|---|---|
| `slug` | `pbr-framework` |
| `Title` | `Pharmacy Benefit Review Framework` |
| `eyebrow` | `TIER 1 · PHARMACY BENEFIT REVIEW · TWICE-YEARLY FRAMEWORK` |
| `headline` | `Six Categories. Twenty Audit Items.` |
| `headline_emphasis` | `The Twice-Yearly Pharmacy Benefit Review Framework.` |
| `subtitle` | `A 2-page printable framework PBS uses for the twice-yearly PBR audit. Six categories, twenty scored items, paste-ready renewal agenda. Free download. Sent to your inbox.` |
| `bullet_1` | `Six PBR categories: financial, contract, clinical, member, vendor, strategic` |
| `bullet_2` | `Twenty audit items scored 1-5 against PBM data` |
| `bullet_3` | `Score interpretation: below 50 / 50-70 / above 70 with next-step paths` |
| `bullet_4` | `Use the PBR findings as your renewal redline agenda` |
| `valueprop_card_1_title` | `Run the Six-Category Audit` |
| `valueprop_card_1_body` | `The PBR covers Financial Performance, Contract Compliance, Clinical Programs, Member Experience, Vendor Management, Strategic Position. Each category has 3-4 audit items (20 total). Pull the data package from the PBM and score each item 1-5 against the data.` |
| `valueprop_card_2_title` | `Score and Interpret` |
| `valueprop_card_2_body` | `Total score: 20-100. Below 50 = meaningful unrealized cost containment and member experience risk; bring full audit findings to next renewal cycle. 50-70 = focus the next 90 days on the lowest-scoring category. Above 70 = strong oversight position; shift focus to renewal readiness.` |
| `valueprop_card_3_title` | `Bring the PBR to Renewal` |
| `valueprop_card_3_body` | `Plan sponsors with documented PBR findings negotiate different renewal terms than plan sponsors walking in with the PBM's summary report. The PBR is the counter-narrative. Build the written report and pre-circulate to the benefits committee before the first renewal meeting.` |
| `valueprop_card_4_title` | `This Quarter's Action Plan` |
| `valueprop_card_4_body` | `Pull the six-category data and score the framework. Re-run six months later and write the period-over-period comparison. Use the audit findings as the renewal redline agenda. PBS can run the PBR for your plan as a standing twice-yearly engagement.` |
| `pdf_filename_display` | `Pharmacy Benefit Review Framework` |
| `seo_title` | `Pharmacy Benefit Review (PBR) Framework - Free Download - Prescription Benefit Solutions` |
| `seo_description` | `The twice-yearly Pharmacy Benefit Review framework PBS uses with self-funded plan sponsors. Six categories, twenty audit items, renewal-ready findings. Free download.` |
| `related_toolkit_slugs` | `contract-review-readiness, midyear-claims-red-flag, h1-renewal-readiness` |
| `image_alt_text` | `Six-category PBR scoring framework with twenty audit items on a sticky-note dashboard layout` |
| `pdf_url` | `[Upload evergreen_pbr_pharmacy_benefit_review_framework.pdf to Wix Media, paste URL]` |
| `tier` | `1` |
| `mechanic_phrase` | `pharmacy benefit review` |
| `is_featured` | `TRUE` |
| `is_archived` | `FALSE` |
| `second_toolkit_name` | `Mid-Year Claims Red Flag Checklist` |
| `second_toolkit_pdf_url` | `[Upload week_23_midyear_claims_red_flag_checklist.pdf to Wix Media, paste URL]` |
| `second_toolkit_blurb` | `The Mid-Year Claims Red Flag Checklist is the within-cycle audit that feeds your PBR. Five claim patterns surface between renewals; pair with twice-yearly PBR for ongoing oversight.` |
| `field_note_title` | `Five Lines to Read First in Your PBM's Quarterly Report` |
| `field_note_blurb` | `The PBR is the comprehensive twice-yearly view. This is the 30-minute version: five lines to scan in the most recent quarterly report this week.` |
| `field_note_url` | `[PLACEHOLDER — FN-05 in field_note_backlog.md not yet shipped; populate when Field Note publishes]` |
| `field_note_url` | `[TBD]` |

---

### Remaining 26 rows — to be populated

Toolkit roster (from `templates/documents/`):

**Tier 1 — Evergreen anchors:**
- `contract-review-readiness` — Contract Review Readiness Checklist
- `optimize-vs-go-to-market` — Optimize Existing vs Go-to-Market Decision Framework
- `pbr-framework` — Pharmacy Benefit Review Framework

**Tier 2 — Mechanic-specific audits (W16-W37):**
- `pa-roi-audit` — PA ROI Audit Scorecard (W16)
- `carve-out-decision` — Carve-Out Decision Scorecard (W17)
- `drug-pipeline-watch` — Drug Pipeline Watch List (W18 Monday)
- `fiduciary-documentation` — Fiduciary Documentation Checklist (W19)
- `copay-card-calculator` — Copay Card Financial Impact Calculator (W20 Monday)
- `rebate-report-audit` — Rebate Report Audit Worksheet (W20 Thursday)
- `quarterly-reporting` — Quarterly Reporting Checklist (W21)
- `biosimilar-readiness` — Biosimilar Readiness Assessment (W22 Monday)
- `specialty-routing` — Specialty Routing Audit Worksheet (W22 Thursday)
- `midyear-claims-red-flag` — Mid-Year Claims Red Flag Checklist (W23)
- `h1-renewal-readiness` — H1 Renewal Readiness Scorecard (W24 Monday)
- `contract-amendment-letter` — Contract Amendment Letter Template (W24 Thursday)
- `rfp-scoring-audit` — RFP Scoring Methodology Audit (W25)
- `step-therapy-override` — Step Therapy Override Audit (W26)
- `pbm-compensation` — PBM Compensation Audit Worksheet (W27)
- `ger-audit` — GER Audit Worksheet (W28)
- `network-configuration-audit` — Network Configuration Audit (W29)
- `cob-audit` — Coordination of Benefits Audit Worksheet (W30)
- `pbm-disclosure-audit` — PBM Disclosure Audit Worksheet (W31)
- `fiduciary-compliance-audit` — Fiduciary Compliance Audit (W32)
- `member-transition-audit` — Member Transition Audit (W33)
- `midyear-guarantee-audit` — Mid-Year Performance Guarantee Audit (W34)
- `termination-clause-audit` — Termination Clause Audit (W35)
- `definition-variance-audit` — Definition Variance Audit (W36)
- `pre-meeting-renewal-checklist` — Pre-Meeting Renewal Checklist (W37)

Each row will get its full `pairing` + `field_note_url` + `second_toolkit_blurb` filled in a batch pass once Channel Pricing's end-to-end loop is verified working.

---

*Last updated: 2026-05-14.*
