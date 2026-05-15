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
| `field_note_title` | Text | Email 3 token `{{field_note_title}}` | The paired published Field Note's title. |
| `field_note_url` | URL | Email 3 link | benefitblindspots.substack.com URL. |

**Wix Contacts Custom Fields (matching tokens for email templates):**
- `first_toolkit_slug` · `first_toolkit_name` · `first_toolkit_pdf_url` · `first_toolkit_mechanic_phrase`
- `second_toolkit_name` · `second_toolkit_pdf_url` · `second_toolkit_blurb`
- `field_note_title` · `field_note_url`
- `pillar`

The Wix Automation copies form-submission values into these contact custom fields at signup time; Emails 1-5 reference them as tokens.

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
| `field_note_url` | `https://benefitblindspots.substack.com/p/one-drug-class-to-watch-the-next` |

---

### Remaining 28 rows — to be populated

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
