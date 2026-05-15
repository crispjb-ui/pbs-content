# Wix Email-Gated Toolkit — Session Handoff TODOs

**Branched from main:** May 14, 2026
**Status:** Channel Pricing landing page form is partially live. Velo code populates 5 hidden CMS-bound fields. Wix Forms App caps at 10 total fields per form (4 visible + 6 hidden). Blurb stays as the 10th form field with tightened text under 200 characters.

---

## Current state — what's working

**Channel Pricing landing page (live in Wix preview):**
- Form widget on the toolkit dynamic page (`rxbs.org/toolkit/channel-pricing`)
- 4 visible user-input fields: First name, Work Email, Company, Role (dropdown)
- 5 hidden fields currently pre-fill from Toolkits CMS collection via Velo `setFieldValues`:
  - `pdf_url` → CMS column `pdf_url`
  - `toolkit_name` → CMS column `headline`
  - `second_toolkit_name` → CMS column `second_toolkit_name`
  - `second_toolkit_pdf_url` → CMS column `second_toolkit_pdf_url`
  - `field_note_url` → CMS column `field_note_url`
- Workaround for hiding fields: moved below Submit button, covered with white box matching background

**Toolkits CMS collection populated for Channel Pricing row:**
- All metadata columns populated (toolkit name, pdf url, second toolkit pairing, field note pairing, blurb text)

**Velo code currently on the page (working as of last session):**

```javascript
$w.onReady(function () {
    $w('#dynamicDataset').onReady(() => {
        const toolkit = $w('#dynamicDataset').getCurrentItem();
        $w('#form1').setFieldValues({
            pdf_url: toolkit.pdf_url,
            toolkit_name: toolkit.headline,
            second_toolkit_name: toolkit.second_toolkit_name,
            second_toolkit_pdf_url: toolkit.second_toolkit_pdf_url,
            field_note_url: toolkit.field_note_url
        });
    });
});
```

---

## What's decided

**Form field cap: 10 total per form.** Wix Forms App limit. Currently using 9 (4 visible + 5 hidden). One slot remaining.

**Use the 10th slot for `second_toolkit_blurb`.** Reasoning: Email 2 (Day 2) is the highest-leverage email in the series — it's the early-engagement window AND it has the substantive value-prop content. Making Email 2 a single dynamic template saves 5 hardcoded variants. The trade-off is Email 3 needs 10 hardcoded variants (one per first_toolkit pairing) since `field_note_title` and `field_note_blurb` won't be form fields.

**Blurbs must be tightened to ≤200 characters.** Wix Forms App Short Text Contact field type accepts 200 chars max. The original blurbs in `02_second_toolkit.md` run 250-460 chars. Tightened versions below all fit under 200.

**CMS column must be plain Text (not Rich Text)** so Velo `setFieldValues` can pass the value cleanly without HTML stripping.

---

## TODO — Next Session Pickup

### Wix form changes

- [ ] **Add `second_toolkit_blurb` field back to the Toolkit Form** in Edit Form view
  - Field type: Short Text Contact (the type that supports manual Field Key assignment)
  - Field Key: `second_toolkit_blurb` (set in Advanced tab)
  - Position: alongside the other hidden fields below Submit
  - Verify the white cover box still hides it after re-adding
- [ ] **Confirm `second_toolkit_blurb` column in the Toolkits CMS is Text type, not Rich Text**
  - If still Rich Text: change to Text (single-line or long), confirming Wix's warning about losing formatting (your text is plain prose, no formatting to lose)
- [ ] **Update the CMS row for Channel Pricing** with the tightened blurb (see "Tightened Email 2 blurbs" section below)
- [ ] **Update the Velo code** to the version below:

```javascript
$w.onReady(function () {
    $w('#dynamicDataset').onReady(() => {
        const toolkit = $w('#dynamicDataset').getCurrentItem();
        $w('#form1').setFieldValues({
            pdf_url: toolkit.pdf_url,
            toolkit_name: toolkit.headline,
            second_toolkit_name: toolkit.second_toolkit_name,
            second_toolkit_pdf_url: toolkit.second_toolkit_pdf_url,
            second_toolkit_blurb: toolkit.second_toolkit_blurb,
            field_note_url: toolkit.field_note_url
        });
    });
});
```

- [ ] **End-to-end submit test:** fill out the form with real test data, click Submit, confirm submit succeeds and the welcome email arrives with the correct PDF link
- [ ] **Mobile preview check:** open the page at phone width, confirm white cover box still masks all 6 hidden fields

### Email automation wiring in Wix Email Marketing + Wix Automations

- [ ] **Build Email 1 (Day 0 — Welcome with PDF) as a single dynamic template**
  - Merge tags: `{{first_name}}`, `{{toolkit_name}}`, `{{pdf_url}}`
  - Body content from `email_gated_toolkit/emails/01_welcome_pdf_delivery.md` in repo
- [ ] **Build Email 2 (Day 2 — Second toolkit + Substack subscribe) as a single dynamic template** ✓ saves 5 hardcoded variants
  - Merge tags: `{{first_name}}`, `{{second_toolkit_name}}`, `{{second_toolkit_pdf_url}}`, `{{second_toolkit_blurb}}`
  - Body content from `email_gated_toolkit/emails/02_second_toolkit.md`
  - The `{{second_toolkit_blurb}}` merge tag pulls the tightened blurb from the form submission (which got it from CMS via Velo)
- [ ] **Build Email 3 (Day 5 — Field Note pairing) as 10 hardcoded variants** (one per first_toolkit pairing)
  - Each variant has the matching Field Note title, blurb, and URL hardcoded (no merge tags for those)
  - Merge tags used: `{{first_name}}`, `{{first_slug}}` only
  - Variant mappings live in `email_gated_toolkit/emails/03_field_note_match.md`
  - Wix Automations branches by `toolkit_name` value to route to the matching variant
- [ ] **Build Email 4 (Day 9 — LinkedIn Newsletter subscribe) as a single template**
  - Replace `[LINKEDIN NEWSLETTER URL]` placeholder with actual canonical URL from LinkedIn → Manage → Newsletters
  - Update subscriber count to current month (836+ as of May 2026)
  - Body content from `email_gated_toolkit/emails/04_linkedin_newsletter.md`
- [ ] **Build Email 5 (Day 14 — Two ways forward)** as either:
  - Single template with role-based conditional content (if Wix Email Marketing supports conditional logic), OR
  - 6 template variants (one per role tag) per `email_gated_toolkit/emails/05_two_ways_forward.md`
- [ ] **Wire the Wix Automation chain** (one automation for Channel Pricing toolkit initially):
  - Trigger: Toolkit Form submitted with `toolkit_name` matching the Channel Pricing CMS headline value
  - Step 1: Send Email 1 immediately
  - Step 2: Wait 2 days → Send Email 2 (single dynamic template)
  - Step 3: Wait 3 days → Send Email 3 (Channel Pricing variant — hardcoded with the matching Field Note content)
  - Step 4: Wait 4 days → Send Email 4
  - Step 5: Wait 5 days → Send Email 5
- [ ] **End-to-end automation test:** submit form, accelerate timers via Wix's automation testing tools, confirm all 5 emails arrive with correct content, correct PDF link, correct UTM params, and merge tags populated

### Tracking

- [ ] **Verify Substack analytics referrer tracking** — Email 2's Substack subscribe link includes `utm_source=wix&utm_medium=email&utm_campaign=toolkit-channel-pricing&utm_content=email-2-substack`. Confirm Substack analytics surfaces this attribution
- [ ] **Set up Wix Email Marketing analytics dashboard** per `email_gated_toolkit/tracking_dashboard.md` spec

### Replication for other 4 toolkit landing pages

When ready to roll out beyond Channel Pricing, repeat the entire setup for each of:
- [ ] Contract Review Readiness toolkit
- [ ] Optimize vs Go-to-Market toolkit
- [ ] Rebate Report Audit toolkit
- [ ] PBM Compensation Audit Worksheet (likely the 5th, paired as "second toolkit" with Channel Pricing)

For each:
- [ ] Build the toolkit PDF (Plan Sponsor Toolkit handout in `templates/documents/`)
- [ ] Upload the PDF to Wix Media Manager, get the URL
- [ ] Add a row to the Toolkits CMS collection with all metadata + tightened blurb for the second_toolkit_blurb column
- [ ] Verify the dynamic page renders correctly at `rxbs.org/toolkit/<slug>`
- [ ] Email 2 template is shared (single dynamic template) — no per-toolkit version needed thanks to the form-field blurb
- [ ] Build a matching Email 3 variant with hardcoded Field Note title, blurb, and URL for that toolkit's pairing
- [ ] Wire a Wix Automation that triggers on form submissions with the matching `toolkit_name` value, routing to the correct Email 3 variant

---

## Tightened Email 2 blurbs (≤200 chars — paste into the CMS `second_toolkit_blurb` column for each toolkit row)

These replace the longer blurbs in `email_gated_toolkit/emails/02_second_toolkit.md`. Each is under 200 characters and reads cleanly. Plain text only — no formatting.

### Channel Pricing row → second_toolkit_blurb column:

> The PBM Compensation Audit Worksheet maps all five revenue streams that flow from your plan to your PBM. Channel pricing is one. The other four are where most disclosure gaps live.

(199 chars)

### PBM Compensation row → second_toolkit_blurb column:

> The Quarterly Reporting Checklist pairs with compensation work. 15-line audit catches what's missing or misclassified in your PBM's quarterly report and what to demand next quarter.

(180 chars)

### Quarterly Reporting row → second_toolkit_blurb column:

> Quarterly reporting tells you what happened. The Channel Pricing Audit Worksheet tells you what's happening across retail, mail, and specialty now. Three audit passes on your own claims data.

(192 chars)

### Specialty Routing row → second_toolkit_blurb column:

> Specialty routing produces one of five PBM compensation streams (owned-pharmacy margin). The PBM Compensation Audit Worksheet maps the other four and the disclosure gap to bring to renewal.

(192 chars)

### GER Audit row → second_toolkit_blurb column:

> GER measures generic discount vs AWP. Channel Pricing measures per-claim margin across retail, mail, and specialty. Same audit posture: pull the clause, calculate actuals, document the gap.

(193 chars)

---

## Field Note pairings (for hardcoding into 10 Email 3 variants)

Each variant uses these values hardcoded directly into the email template. Pulled from `email_gated_toolkit/emails/03_field_note_match.md`:

| First toolkit | Field Note title | Field Note URL slug | Hardcoded blurb in Email 3 |
|---|---|---|---|
| Contract Review Readiness | "How Plan Sponsors Actually Enforce Audit Rights" | `/p/[FN-03 slug when shipped]` | The Contract Review surfaces audit-rights gaps. This Field Note is what comes next: how to actually run the audit once the contract has the right language. |
| Optimize vs Go-to-Market | "What a PBM Transition Actually Looks Like: Timeline and Pitfalls" | `/p/[FN-10 slug when shipped]` | The strategic decision is one thing. The operational reality of the switch is another. Six months minimum from RFP to go-live, with the pitfalls that catch most plans by surprise. |
| PBR Framework | "Five Lines to Read First in Your PBM's Quarterly Report" | `/p/[FN-05 slug when shipped]` | The PBR is the comprehensive twice-yearly view. This is the 30-minute version: five lines to scan in the most recent quarterly report this week. |
| Channel Pricing | "Auditing Your MAC Margin: Three Channels, One PBM" | `/p/[W21 Field Note slug]` | This morning's worksheet decoded the channel-pricing terms. The Field Note runs the same audit on the MAC list itself: the per-channel margin spread that the contract's MAC clause is silent on. |
| Rebate Report Audit | "Reading the Rebate Report Without Getting Spun" | `/p/[W20 Field Note slug]` | The worksheet runs the rebate-report audit. The Field Note is the field-level guide: how to spot category reclassification before it shows up in your annual reconciliation. |
| PBM Compensation | "Auditing How Your PBM Actually Makes Money" | `/p/[W27 Field Note slug]` | The worksheet maps the five revenue streams. The Field Note is the operational follow-on: the data request and the disclosure-gap conversation to bring to the next quarterly review. |
| Quarterly Reporting | "Five Lines to Read First in Your PBM's Quarterly Report" | `/p/[FN-05 slug when shipped]` | The Checklist is the comprehensive 15-line audit. The Field Note is the 30-minute version for the quarter when there isn't time to run the full Checklist. |
| GER Audit | "Auditing Your Generic Effective Rate Against the Guarantee" | `/p/[W28 Field Note slug]` | Direct topic match. This Field Note is the operational follow-on to the GER worksheet. |
| RFP Scoring | "Auditing Your RFP Scoring Methodology Before You Send It" | `/p/[W25 Field Note slug]` | Direct topic match. The worksheet is the audit framework; the Field Note is the practical companion for the design phase. |
| Specialty Routing | "Auditing Where Your Specialty Drugs Actually Fill" | `/p/[W22 Field Note slug]` | Direct topic match. |

Each variant of Email 3 also uses these merge tags (dynamic): `{{first_name}}`, `{{first_slug}}` — those come from the form submission.

---

## Quick reference — what's in the repo for this workstream

| File | Purpose |
|---|---|
| `email_gated_toolkit/emails/01_welcome_pdf_delivery.md` | Email 1 body, merge tags |
| `email_gated_toolkit/emails/02_second_toolkit.md` | Email 2 body (use tightened blurbs from this TODO doc, not the longer originals) |
| `email_gated_toolkit/emails/03_field_note_match.md` | Email 3 body and Field Note pairing mapping |
| `email_gated_toolkit/emails/04_linkedin_newsletter.md` | Email 4 body |
| `email_gated_toolkit/emails/05_two_ways_forward.md` | Email 5 body, role-conditional variants |
| `email_gated_toolkit/landing_pages/channel_pricing_landing.html` | Visual spec for the Channel Pricing landing page |
| `email_gated_toolkit/ad_creative/04_channel_pricing.md` | Channel Pricing ad creative |
| `email_gated_toolkit/tracking_dashboard.md` | Analytics tracking spec |
| `email_gated_toolkit/privacy_policy.md` | Privacy policy text |
| `email_gated_toolkit_implementation_guide.md` | Implementation guide (CMS schema, etc.) |
| `templates/documents/week_18_channel_pricing_audit_worksheet.pdf` | The actual PDF lead magnet |

---

## Session log (so next session has context)

**May 14, 2026:**
- Confirmed Wix Forms App Long Answer field type doesn't accept programmatic pre-fill
- Workaround for hiding form fields: moved below Submit, covered with white box (working in preview)
- Velo code on the Toolkits Dynamic Page successfully populates 5 short-text hidden fields via `setFieldValues`
- Confirmed Wix Forms App caps at 10 fields per form (4 visible + 6 hidden); currently using 9
- Decision: use the 10th slot for `second_toolkit_blurb` (not field_note_title) because Email 2 is the higher-leverage email and dynamic-template saves 5 variants
- Tightened all 5 second_toolkit_blurb variants to ≤200 chars; documented above for paste into CMS
- Did NOT yet re-add the blurb field, update CMS column type, or paste tightened blurbs into CMS rows — that's the next step
- Did NOT yet build any of the 5 emails in Wix Email Marketing — that's the next major work
- Did NOT yet wire any Wix Automation — that's the next major work after emails are built

---

*Handoff doc locked: May 14, 2026. Pick up at the top of the TODO list.*
