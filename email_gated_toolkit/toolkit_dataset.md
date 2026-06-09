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
| `tier` | Number | Library section grouping | 1 = Tier 1 foundational (Start Here); 2 = Tier 2 mechanic-specific. In the import CSV. |
| `pillar` | Text | Library pillar grouping + segmentation | One of the 6 PBS pillars, or `Foundational` for Tier 1. **NOT in the current import CSV — add this column.** Values in the Library display fields table below. |
| `preview_image` | Image | Library card thumbnail + landing-page hero | Wix **Image-type** field (not a text URL). Upload `<name>_preview.png` to Media, select it in the cell. One-time: bind a library Repeater image + the landing hero image to this field. Mapping in the table below. |
| `card_desc` | Text | Library card one-line description | Short (≤ ~12 words) plain-English line shown on the library card under the title. Values in the table below. |
| `is_featured` | Boolean | Pin to Start Here / featured row | TRUE for the 3 Tier 1 anchors; FALSE otherwise. In the CSV. |
| `is_archived` | Boolean | Hide from library without deleting the row | FALSE = visible. In the CSV. |

**Schema-lock note (Jun 9, 2026):** the library-page revamp drove three additions the email funnel did not need: `pillar`, `preview_image` (Image type), and `card_desc`. `tier`, `is_featured`, `is_archived` already exist in the import CSV; `pillar`/`preview_image`/`card_desc` must be added to the Wix collection before the revamped library page can bind its grouped, product-shot cards. Adding them once here makes every row's load complete in a single pass (no re-touch). Landing-page display columns (`eyebrow`, `headline`, `headline_emphasis`, `subtitle`, `bullet_1-4`, `valueprop_card_1-4_title/body`, `seo_title`, `seo_description`, `related_toolkit_slugs`, `image_alt_text`, `pdf_filename_display`) are already in the CSV header and feed the dynamic landing page.

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
| `image_alt_text` | `Channel Pricing Audit Worksheet, a 2-page PBS plan sponsor toolkit for auditing per-channel net cost across retail, mail, and specialty` |
| `mechanic_phrase` | `per-channel margin` |
| `pillar` | `Transparency & Industry Education` |
| `second_toolkit_name` | `PBM Compensation Audit Worksheet` |
| `second_toolkit_pdf_url` | `https://f4a10ae5-926c-402e-bec1-e9ae8845f739.usrfiles.com/ugd/f4a10a_bb76ebca1b994c0db20e64985f6a5b44.pdf` |
| `second_toolkit_blurb` | `The PBM Compensation Audit Worksheet maps all five revenue streams that flow from your plan to your PBM. Channel pricing is one. The other four are where most disclosure gaps live.` |
| `field_note_title` | `What We See When We Audit Channel Pricing` |
| `field_note_blurb` | `The Channel Pricing Audit Worksheet decoded the channel-pricing terms. The Field Note runs the same audit on the MAC list itself: the per-channel margin spread that the contract's MAC clause is silent on.` |
| `field_note_url` | `[CONFIRM — live URL for the W18 "What We See When We Audit Channel Pricing" Field Note. The prior value (/p/one-drug-class-to-watch-the-next) was a mismatched slug and has been removed so Email 3 cannot ship a wrong link. The W18 week file still carries the placeholder [SUBSTACK FIELD NOTE URL]; paste the real Substack URL here.]` |

**Verification flag (May 19, 2026; updated Jun 9, 2026):** the prior `field_note_url` value pointed at `/p/one-drug-class-to-watch-the-next`, which is a different post than the `field_note_title` `What We See When We Audit Channel Pricing`. The wrong URL has been removed and replaced with a confirm-placeholder (above) so Email 3 will not send a bad link to Channel Pricing leads. ACTION: confirm the live Substack URL for the W18 Channel Pricing Field Note and paste it into the row before Email 3 ships.

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

## Library display fields (pillar + preview_image + card_desc) — all 29

> Canonical source for the revamped Toolkit Library page grouping and cards (`website_mockups/toolkit-library-v2.html`) and for the `pillar` / `preview_image` / `card_desc` columns. `preview_image` = upload `templates/documents/<base>_preview.png` to Wix Media and select it in the row's Image cell. Pillar grouping is editorial (each toolkit maps cleanly to one of the 6 PBS pillars); adjust if any feel mis-bucketed. Broker/Consultant Resources is intentionally empty (no standalone toolkit; brokers get the partner track, not a gated audit).

### Tier 1 — Foundational (Start Here, is_featured = TRUE)

| slug | pillar | preview_image base | card_desc |
|---|---|---|---|
| contract-review-readiness | Foundational | evergreen_contract_review_readiness_checklist | The 8 documents to pull before you open your PBM contract. |
| optimize-vs-go-to-market | Foundational | evergreen_optimize_vs_go_to_market_decision_framework | Decide whether to renegotiate your current PBM or run an RFP. |
| pbr-framework | Foundational | evergreen_pbr_pharmacy_benefit_review_framework | The twice-yearly structure of a plan-sponsor pharmacy benefit review. |

### Tier 2 — by pillar

| slug | pillar | preview_image base | card_desc |
|---|---|---|---|
| quarterly-reporting | PBM Contract Insights | week_21_quarterly_reporting_checklist | 15 lines to read first in the report your PBM sends each quarter. |
| contract-amendment-letter | PBM Contract Insights | week_24_thursday_contract_amendment_letter | Paste-ready redline letter to send your PBM mid-cycle. |
| rfp-scoring-audit | PBM Contract Insights | week_25_thursday_rfp_scoring_audit_worksheet | Score PBM RFP responses on what actually matters. |
| ger-audit | PBM Contract Insights | week_28_thursday_ger_audit_worksheet | Test your guaranteed effective rate against the actuals. |
| midyear-guarantee-audit | PBM Contract Insights | week_34_thursday_midyear_guarantee_audit | Check performance guarantees at the mid-year mark. |
| termination-clause-audit | PBM Contract Insights | week_35_thursday_termination_clause_audit | The clauses that decide whether you can actually leave. |
| definition-variance-audit | PBM Contract Insights | week_36_thursday_definition_variance_audit | Where the contract's definitions quietly cost you. |
| channel-pricing | Transparency & Industry Education | week_18_channel_pricing_audit_worksheet | Three passes that surface spread across retail, mail, and specialty. |
| rebate-report-audit | Transparency & Industry Education | week_20_thursday_rebate_report_audit_worksheet | Read what your PBM's rebate report doesn't say out loud. |
| pbm-compensation | Transparency & Industry Education | week_27_thursday_pbm_compensation_audit | Map all five revenue streams flowing from your plan to your PBM. |
| pbm-disclosure-audit | Transparency & Industry Education | week_31_thursday_pbm_disclosure_audit | What the PBM must disclose versus what it actually does. |
| pa-roi-audit | Cost Containment Strategies | week_16_pa_roi_audit_scorecard | A five-metric scorecard to audit your prior-authorization ROI. |
| copay-card-calculator | Cost Containment Strategies | week_20_copay_card_financial_impact_calculator | A five-step model for copay card and accumulator impact. |
| midyear-claims-red-flag | Cost Containment Strategies | week_23_midyear_claims_red_flag_checklist | Five claim patterns to catch before they compound into renewal. |
| network-configuration-audit | Cost Containment Strategies | week_29_thursday_network_configuration_audit | Check the pharmacy network for steered margin. |
| cob-audit | Cost Containment Strategies | week_30_thursday_cob_audit_worksheet | Recover spend hiding in coordination-of-benefits gaps. |
| drug-pipeline-watch | Clinical Pharmacy Perspectives | week_18_drug_pipeline_watch_list | Five drug categories to budget for in 2026-2027. |
| biosimilar-readiness | Clinical Pharmacy Perspectives | week_22_biosimilar_readiness_assessment | A six-factor readiness check for biosimilar conversion. |
| specialty-routing | Clinical Pharmacy Perspectives | week_22_thursday_specialty_routing_audit_worksheet | Where your specialty scripts get routed, and why it costs more. |
| step-therapy-override | Clinical Pharmacy Perspectives | week_26_thursday_step_therapy_override_audit | Audit your step-therapy override pathway for friction. |
| member-transition-audit | Clinical Pharmacy Perspectives | week_33_thursday_member_transition_audit | Protect members through a PBM or formulary switch. |
| carve-out-decision | Self-Funded Employer Guidance | week_17_carve_out_decision_scorecard | Ten factors that decide carve-in versus carve-out. |
| fiduciary-documentation | Self-Funded Employer Guidance | week_19_fiduciary_documentation_checklist | Five documentation categories that protect the plan fiduciary. |
| h1-renewal-readiness | Self-Funded Employer Guidance | week_24_h1_renewal_readiness_scorecard | Five mid-year metrics plus a renewal-readiness score. |
| fiduciary-compliance-audit | Self-Funded Employer Guidance | week_32_thursday_fiduciary_compliance_audit | Test the plan against its ERISA fiduciary duties. |
| pre-meeting-renewal-checklist | Self-Funded Employer Guidance | week_37_thursday_pre_meeting_renewal_checklist | What to settle before you walk into the renewal meeting. |

Pillar counts: Foundational 3 · PBM Contract Insights 7 · Transparency & Industry Education 4 · Cost Containment Strategies 5 · Clinical Pharmacy Perspectives 5 · Self-Funded Employer Guidance 5 · Broker/Consultant Resources 0. Total 29.

---

*Last updated: 2026-06-09 (Tier 1 fixes + schema lock + library display-field mapping).*
