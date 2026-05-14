# Wix Email-Gated Toolkit — Session Handoff TODOs

**Branched from main:** May 14, 2026
**Status:** Channel Pricing landing page form is partially live. Velo code populates 5 hidden CMS-bound fields. Long Answer field type (for blurb) doesn't accept programmatic pre-fill via Wix Forms App, so blurb is being pivoted out of the form. Email automation series is fully drafted but not yet wired in Wix Automations.

---

## Current state — what's working

**Channel Pricing landing page (live in Wix preview):**
- Form widget on the toolkit dynamic page (`rxbs.org/toolkit/channel-pricing`)
- 4 visible user-input fields: First name, Work Email, Company, Role (dropdown)
- 5 hidden fields pre-fill from Toolkits CMS collection via Velo `setFieldValues`:
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

## What's blocked / decided

**Blurb form field — REMOVED from form.** Wix Forms App Long Answer field type does not accept programmatic pre-fill via `setFieldValues`. The only field type that accepts the `second_toolkit_blurb` field key in Wix Forms App is a 200-char Contact field, which is too short for the ~400-700 char blurb. Decision: kill the blurb form field and hardcode blurbs in email templates per toolkit.

**New form field to add: `field_note_title`.** Free slot recovered from blurb removal will be used for `field_note_title`. This makes Email 3 (Field Note pairing) a single dynamic template instead of needing 10 hardcoded variants. Field Note titles are short (50-80 chars), fit in Short Text.

---

## TODO — Next Session Pickup

### Wix form changes

- [ ] **Delete `second_toolkit_blurb` field from the Toolkit Form** in Wix Forms App Edit Form view
- [ ] **Add new `field_note_title` field** to the Toolkit Form
  - Field type: Short Text Contact (any type that supports Field Key assignment)
  - Field Key: `field_note_title` (set in Advanced tab)
  - Position: alongside the other hidden fields below Submit
  - Make sure the white cover box still hides it
- [ ] **Update the CMS column** — `field_note_title` column already exists in the Toolkits collection per earlier work; confirm it's populated for the Channel Pricing row with "What We See When We Audit Channel Pricing" (or whatever the actual Field Note title is)
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
            field_note_title: toolkit.field_note_title,
            field_note_url: toolkit.field_note_url
        });
    });
});
```

- [ ] **End-to-end submit test:** fill out the form with real test data, click Submit, confirm submit succeeds (no silent fail on hidden required fields)
- [ ] **Mobile preview check:** open the page at phone width, confirm white cover box still masks all hidden fields

### Email automation wiring in Wix Email Marketing + Wix Automations

- [ ] **Build Email 1 (Day 0 — Welcome with PDF) in Wix Email Marketing**
  - Single template, uses these merge tags: `{{first_name}}`, `{{toolkit_name}}`, `{{pdf_url}}`
  - Body content from `email_gated_toolkit/emails/01_welcome_pdf_delivery.md` in repo
- [ ] **Build Email 2 (Day 2 — Second toolkit + Substack subscribe)** as 5 template variants, one per first_toolkit
  - Each variant uses merge tags: `{{first_name}}`, `{{second_toolkit_name}}`, `{{second_toolkit_pdf_url}}`
  - Each variant has the toolkit-specific blurb **hardcoded** in the body (see "Email 2 blurbs by toolkit" section below)
- [ ] **Build Email 3 (Day 5 — Field Note pairing) as a single template** using merge tags
  - Subject line: `{{field_note_title}} — recent Field Note`
  - Body uses: `{{first_name}}`, `{{field_note_title}}`, `{{field_note_url}}`, `{{first_slug}}`
  - Body content from `email_gated_toolkit/emails/03_field_note_match.md`
  - The 1-2 sentence `field_note_blurb` paragraph: either hardcode a generic intro that works for any Field Note pairing, OR write 10 variants (one per toolkit), OR add `field_note_blurb` as a 7th form field (would require tightening some blurbs to fit 200 chars)
- [ ] **Build Email 4 (Day 9 — LinkedIn Newsletter subscribe)** as a single template
  - Replace `[LINKEDIN NEWSLETTER URL]` placeholder with actual canonical URL from LinkedIn → Manage → Newsletters
  - Update subscriber count to current month (836+ as of May 2026)
  - Body content from `email_gated_toolkit/emails/04_linkedin_newsletter.md`
- [ ] **Build Email 5 (Day 14 — Two ways forward)** as either:
  - Single template with role-based conditional content (if Wix Email Marketing supports conditional logic), OR
  - 6 template variants (one per role tag) per `email_gated_toolkit/emails/05_two_ways_forward.md`
- [ ] **Wire the Wix Automation chain** (one automation for Channel Pricing toolkit initially):
  - Trigger: Toolkit Form submitted with `toolkit_name` = "Channel Pricing Audit Worksheet" (or whatever the actual CMS headline value is for that toolkit row)
  - Step 1: Send Email 1 immediately
  - Step 2: Wait 2 days → Send Email 2 (Channel Pricing variant)
  - Step 3: Wait 3 days → Send Email 3 (single dynamic template)
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
- [ ] Add a row to the Toolkits CMS collection with all metadata
- [ ] Verify the dynamic page renders correctly at `rxbs.org/toolkit/<slug>`
- [ ] Build the matching Email 2 variant with the corresponding hardcoded blurb (see "Email 2 blurbs by toolkit" below)
- [ ] Create a Wix Automation routed to the right Email 2 variant for that toolkit's form submissions

---

## Email 2 blurbs by toolkit (for hardcoding into email templates)

Pull from the mapping table in `email_gated_toolkit/emails/02_second_toolkit.md`. Reproduced here for convenience.

**When first toolkit downloaded = Channel Pricing → Email 2 variant uses second toolkit = PBM Compensation. Hardcode this blurb:**

> Channel pricing is one of five revenue streams that flow from your plan to your PBM. Most plan sponsors only track the administrative fee, the smallest of the five. This worksheet walks through all five compensation mechanisms (spread, rebate retention, admin fees, manufacturer-direct payments, owned-pharmacy margin), the three audit passes to identify which apply to your contract, and the disclosure-gap framework that becomes your renewal-leverage item.

**When first toolkit downloaded = PBM Compensation → Email 2 variant uses second toolkit = Quarterly Reporting. Hardcode this blurb:**

> If the compensation worksheet surfaced disclosure gaps, the Quarterly Reporting Checklist is the practical companion. The 15-line audit framework catches the gaps in the report your PBM sends every quarter — what's missing, what's misclassified, what to ask for next quarter.

**When first toolkit downloaded = Quarterly Reporting → Email 2 variant uses second toolkit = Channel Pricing. Hardcode this blurb:**

> Quarterly reporting tells you what happened. The Channel Pricing Audit Worksheet tells you what's happening in real time across retail, mail, and specialty. Three audit passes plan sponsors can run on their own claims data without waiting for the next quarterly report.

**When first toolkit downloaded = Specialty Routing → Email 2 variant uses second toolkit = PBM Compensation. Hardcode this blurb:**

> Specialty routing produces one of the five PBM compensation streams (owned-pharmacy margin). The PBM Compensation Audit Worksheet maps the other four. Three audit passes to identify which mechanisms apply to your contract and the disclosure gap to bring to renewal.

**When first toolkit downloaded = GER Audit → Email 2 variant uses second toolkit = Channel Pricing. Hardcode this blurb:**

> GER measures your generic discount against the AWP benchmark. Channel Pricing measures the per-claim margin across retail, mail, and specialty. Different mechanics, same audit posture: pull the contract clause, calculate actuals, document the gap.

---

## Quick reference — what's in the repo for this workstream

| File | Purpose |
|---|---|
| `email_gated_toolkit/emails/01_welcome_pdf_delivery.md` | Email 1 body, merge tags |
| `email_gated_toolkit/emails/02_second_toolkit.md` | Email 2 body, full blurb mapping by toolkit pair |
| `email_gated_toolkit/emails/03_field_note_match.md` | Email 3 body, Field Note pairing mapping |
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
- Pivoted blurb out of the form; will be hardcoded in 5 Email 2 template variants instead
- Recommended new form field: `field_note_title` (to make Email 3 a single dynamic template)
- Did NOT yet delete the blurb field or add field_note_title — that's the next step
- Did NOT yet build any of the 5 emails in Wix Email Marketing — that's the next major work
- Did NOT yet wire any Wix Automation — that's the next major work after emails are built

---

*Handoff doc locked: May 14, 2026. Pick up at the top of the TODO list.*
