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
- [x] **Confirm `second_toolkit_blurb` column in the Toolkits CMS is Text type, not Rich Text** — done May 15. Column changed from Rich Text to plain Text; HTML wrapper overhead eliminated.
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

**May 15-18, 2026 (extended Wix automation debugging + Zapier pivot):**

**Progress confirmed working:**
- Channel Pricing landing page live at `rxbs.org/toolkit/channel-pricing`
- All 10 form fields wired (4 visible + 6 hidden including `second_toolkit_blurb`)
- Velo `$w('#form1').setFieldValues({...})` reliably populates hidden fields from current CMS row
- Wix CMS column type for `second_toolkit_blurb` confirmed plain Text (not Rich Text); 199-char blurb pastes cleanly
- Channel Pricing CMS row has full metadata (slug, eyebrow, headline, subtitle, 4 bullets, 4 value prop cards, SEO, pairings, blurb, mechanic_phrase, tier, etc.)
- Form submissions land in Wix Submissions database reliably (~17 test submissions confirmed)
- Default "New submission received" notification to Ginny works (confirmed)
- Wix Automation 5-email chain fired successfully ONCE on May 18 10:49 AM after trigger rebinding — delivered Email 1 with broken merge tags (Velo race condition that submit happened before hidden fields populated)
- Friday May 15: full 5-email chain delivered (7 emails total to brett@rxbs.org)
- Tier 1 toolkit rows (Contract Review Readiness, Optimize vs Go-to-Market, PBR Framework) fully spec'd in `email_gated_toolkit/toolkit_dataset.md` + ready-to-import `email_gated_toolkit/toolkits_csv_for_wix_import.csv`

**Blockers identified:**
- **Wix Free Email Marketing tier per-recipient anti-flood suppression:** brett@rxbs.org received 7 automation emails total today (one chain + isolated fire); subsequent submissions from same email silently dropped at delivery layer. Fresh emails initially work, then suppression kicks in.
- **Wix Automation trigger goes dormant after one fire:** post-rebinding the trigger fires ONCE on the next submission, then stops firing on subsequent submissions. Trigger config remains correct (Specific form = Toolkit Form, Trigger once per person OFF, Published) but execution is sporadic.
- **Counter "Emails sent: X/200" stuck at 8 after one good fire today** — Wix Automation is not registering subsequent submission events as triggers.
- **Velo page-side submit events don't exist** on the new Wix Forms App element. Tested `$w('#form1').onWixFormSubmitted(...)` → TypeError. Tested `$w('#form1').onWixFormSubmit(...)` → TypeError. The new Wix Forms App doesn't expose either of these methods.
- **Backend `wixForms_onSubmit` hook in `/backend/events.js` doesn't fire** for the new Wix Forms App — confirmed via Wix Logs (only the default page-load log appears, no entries from the hook). The new Wix Forms App uses the v2 API (`onSubmissionCreated` from `wix-forms.v2/onSubmissionCreated`), not the legacy `wixForms_onSubmit` hook.

**Zapier bypass attempt (May 18):**
- Zapier account set up with "Webhooks by Zapier → Catch Hook" trigger
- Webhook URL generated: `https://hooks.zapier.com/hooks/catch/4477930/4o4iszd/`
- Backend module `/backend/zapier.jsw` created with `sendToZapier(payload)` function using `wix-fetch`
- Backend events file `/backend/events.js` created with legacy `wixForms_onSubmit` handler — DOES NOT FIRE (Wix Forms App uses v2 API)
- Status: Zapier endpoint ready and listening; Wix side cannot deliver the webhook hit because no page-side event or legacy backend hook fires for the form
- Decision (May 18 EOD): NOT shipping Wix Forms auto-reply as fallback. Continuing Zapier pursuit with v2 API in a future session.

**Diagnostic confirmed via Wix Logs (May 18, 1:45 PM):**
- Page Velo code DOES run (default "Running the code for the Toolkits (Item) page" message appears)
- Backend hook in events.js NEVER fires (no log entries despite form submissions)
- `wixForms_onSubmit` is the wrong hook name for this form type

---

## Pipeline status — VALIDATED end-to-end May 18, 2026 evening

Wix form → Velo → Zapier webhook pipeline is **functional**. Last validated submission: request G captured in Zapier with all 13 fields parsed cleanly (4 visible form fields + 6 hidden CMS-driven fields + 3 metadata fields).

**What's live and working in Wix:**

`/backend/events.js`:

```javascript
import { sendToZapier } from 'backend/zapier.jsw';

// v2 hook for the new Wix Forms App (namespace: wix.form_app.form).
// Wix's backend runtime auto-discovers this export by name; no import needed.
export async function wixForms_onSubmissionCreated(event) {
    console.log('[events] wixForms_onSubmissionCreated fired');
    console.log('[events] full event:', JSON.stringify(event, null, 2));

    const entity = event.entity || {};
    const submissions = entity.submissions || {};

    // Defensive: only act on the new Wix Forms App submissions.
    if (entity.namespace && entity.namespace !== 'wix.form_app.form') {
        console.log('[events] ignoring submission from namespace:', entity.namespace);
        return;
    }

    // Wix auto-generates suffixes on contact field keys (e.g. email_d952).
    // Find the email key dynamically so this works across duplicated forms.
    const emailKey = Object.keys(submissions).find(
        k => k === 'email' || k.startsWith('email_')
    );

    const payload = {
        first_name: submissions.first_name,
        email: emailKey ? submissions[emailKey] : undefined,
        company: submissions.company,
        role: submissions.role,
        toolkit_name: submissions.toolkit_name,
        pdf_url: submissions.pdf_url,
        second_toolkit_name: submissions.second_toolkit_name,
        second_toolkit_pdf_url: submissions.second_toolkit_pdf_url,
        second_toolkit_blurb: submissions.second_toolkit_blurb,
        field_note_url: submissions.field_note_url,
        submission_id: entity._id,
        form_id: entity.formId,
        submitted_at: entity._createdDate || new Date().toISOString()
    };

    console.log('[events] payload to Zapier:', JSON.stringify(payload));

    try {
        const result = await sendToZapier(payload);
        console.log('[events] Zapier POST result:', JSON.stringify(result));
    } catch (err) {
        console.error('[events] Zapier POST failed:', err.message || err);
    }
}
```

`/backend/zapier.jsw`:

```javascript
import { fetch } from 'wix-fetch';

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/4477930/4o4iszd/';

export async function sendToZapier(payload) {
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    return {
        status: response.status,
        ok: response.ok
    };
}
```

Page-side Velo on the Toolkits (Item) dynamic page:

```javascript
$w.onReady(function () {
    $w('#dynamicDataset').onReady(() => {
        const toolkit = $w('#dynamicDataset').getCurrentItem();
        $w('#form1').setFieldValues({
            pdf_url: toolkit.pdf_url,
            toolkit_name: toolkit.title_fld || toolkit.pdf_filename_display,
            second_toolkit_name: toolkit.second_toolkit_name,
            second_toolkit_pdf_url: toolkit.second_toolkit_pdf_url,
            second_toolkit_blurb: toolkit.second_toolkit_blurb,
            field_note_url: toolkit.field_note_url
        });
    });
});
```

### Three traps we hit and resolved (record for future-proofing)

**Trap 1: v2 hook syntax.** Previous draft used `import { onSubmissionCreated } from 'wix-forms.v2/onSubmissionCreated'` as if it were an SDK function. It isn't. Like the legacy `wixForms_onSubmit` hook, the v2 Wix Forms backend event uses a **magic-named export** that Wix's backend runtime scans for in `/backend/events.js`. Correct pattern: `export async function wixForms_onSubmissionCreated(event)`. Field values live at `event.entity.submissions` (an object where keys are the form Field Keys and values are the submitted data). Namespace for the new Wix Forms App is `wix.form_app.form`.

**Trap 2: Email field key is auto-generated and locked.** Wix auto-generates suffixes on contact field keys (`email_d952` in our case) and **does not let you rename them in the Form Editor → Advanced tab** (the input is read-only for contact fields). Code must use `Object.keys(submissions).find(k => k === 'email' || k.startsWith('email_'))` to find the email key defensively. This pattern will work across duplicated forms even though each form gets its own random suffix.

**Trap 3: CMS field labels vs field keys.** What the CMS edit screen shows as "headline" is not necessarily the field key `headline` in Velo. On the Channel Pricing row:
- CMS UI shows "headline" column with value "Same Drug. Three Channels. Three Prices." — that's `toolkit.headline1` in Velo
- `toolkit.headline` actually returns "The Audit Worksheet to Surface the Gap." — a different column whose UI label may be different
- System Title field "Channel Pricing Audit Worksheet" is `toolkit.title_fld` in Velo, NOT `toolkit.title` or `toolkit.name` (both undefined on this schema)

When unsure of a Velo accessor, add a debug log `console.log('toolkit:', JSON.stringify(toolkit, null, 2))` to the page Velo code, publish, load the page, and inspect the full dump in Wix Logs. The real field keys are visible there.

### Test plan to re-validate the pipeline (use this anytime the Wix code is edited)

1. [ ] Wix editor → Dev Mode → confirm code in `/backend/events.js`, `/backend/zapier.jsw`, and Toolkits (Item) page matches the blocks above
2. [ ] **Publish the site** (top-right Publish button). Backend events do NOT fire on Preview, only on Published.
3. [ ] In Zapier, open the Zap → click "Test trigger" → Zapier shows "Waiting for request"
4. [ ] Fresh incognito window → open `rxbs.org/toolkit/channel-pricing`
5. [ ] **Wait at least 10 seconds** after the page is fully loaded before submitting (gives the page Velo code time to populate hidden fields via `setFieldValues`; submitting faster than that can produce a submission with hidden fields blank)
6. [ ] Submit with a fresh email (e.g. `ginny+v2testN@gmail.com`)
7. [ ] Wix dashboard → Dev Mode → Site Monitoring → Logs. Confirm:
   - `[events] wixForms_onSubmissionCreated fired`
   - `[events] full event: {...}`
   - `[events] payload to Zapier: {...}` — all 10 form fields populated
   - `[events] Zapier POST result: {"ok":true,"status":200}`
8. [ ] Back to Zapier → click Test trigger again → confirm the new request appears with all 13 parsed fields including Toolkit Name = "Channel Pricing Audit Worksheet"

### Next — build the 5 Zapier email actions

Pipeline is validated; the Zap currently has only the trigger configured (Catch Hook) with no email actions. Build per `email_gated_toolkit/zapier_implementation_spec.md` Part 1.3-1.11:
- Action 1: Gmail Send Email (Day 0 welcome with PDF) — body from `emails/01_welcome_pdf_delivery.md`
- Action 2: Delay 2 days
- Action 3: Gmail Send Email (Day 2 second toolkit) — body from `emails/02_second_toolkit.md`
- Action 4: Delay 3 days
- Action 5: Gmail Send Email (Day 5 field note) — body from `emails/03_field_note_match.md`
- Action 6: Delay 4 days
- Action 7: Gmail Send Email (Day 9 LinkedIn newsletter) — body from `emails/04_linkedin_newsletter.md`
- Action 8: Delay 5 days
- Action 9: Gmail Send Email (Day 14 two ways forward) — body from `emails/05_two_ways_forward.md`
- **If `wixForms_onSubmissionCreated fired` does NOT appear in Wix Logs:** the form is on a different namespace than `wix.form_app.form` OR the form is not the new Wix Forms App. Drop the namespace filter (delete the `if (entity.namespace && ...)` block) and re-test to see what fires. Also consider: the form widget might still be the **old** Wix Forms (CRM Contacts) app, in which case `wixForms_onFormSubmit` (legacy CRM hook in `wix-crm-backend/events`) is the right hook, not v2.
- **If nothing fires at all from any export name:** fall back to a dataset `_afterInsert` hook on the Submissions data collection (Wix dashboard → CMS → Submissions → Hooks). This catches the row insertion directly and bypasses the forms event system entirely.

- [ ] Once Zapier captures payload, build 5 email actions per `email_gated_toolkit/zapier_implementation_spec.md`
- [ ] Test end-to-end on Live with fresh email
- [ ] Disable Wix Automation chain once Zapier confirmed working

### High priority — landing page polish

- [ ] Fix the "phantom box" UX issue: form's success behavior currently shows inline message that gets hidden by the cover box. Switch to redirect-to-thank-you-page approach (build a Wix thank-you page using `email_gated_toolkit/landing_pages/thank_you_template.html` as design reference). Once form submits, visitor goes to a new page — no post-submit form state to clean up.
- [ ] Confirm Velo race condition is addressed in production (5+ second wait after page load before submit; real users won't hit this but it's worth documenting)

### Medium priority — Tier 1 toolkit rollout

- [ ] Bulk import Tier 1 toolkit rows via `email_gated_toolkit/toolkits_csv_for_wix_import.csv` (Wix CMS → Import CSV)
- [ ] Upload 3 Tier 1 PDFs to Wix Media Manager (drag-and-drop bulk):
  - `evergreen_contract_review_readiness_checklist.pdf`
  - `evergreen_optimize_vs_go_to_market_decision_framework.pdf`
  - `evergreen_pbr_pharmacy_benefit_review_framework.pdf`
- [ ] Paste each PDF's Wix Media URL into the imported rows' `pdf_url` cells
- [ ] Build Tier 1 landing pages in Wix (duplicate the Channel Pricing dynamic page template — should auto-populate from the new CMS rows)
- [ ] Add "Start Here · Foundational Frameworks" Tier 1 section to the Toolkit Library page (duplicate the existing Tier 2 Repeater, filter dataset to `tier=1`, position above)

### Low priority — production deliverability

- [ ] Set up SPF/DKIM authentication for `rxbs.org` sender domain in Wix Email Marketing → Settings → Senders → Authenticate Domain (or in Zapier's email service if using Zapier path)
- [ ] Add cookie-based "skip form for returning visitors" Velo logic (Phase 2 of the strategic architecture)
- [ ] Eventually add Library 02-N toolkits and the rest of the 26 Tier 2 toolkit rows (full CSV build per `toolkit_dataset.md` pairing rules)

---
- Did NOT yet build any of the 5 emails in Wix Email Marketing — that's the next major work
- Did NOT yet wire any Wix Automation — that's the next major work after emails are built

---

*Handoff doc locked: May 14, 2026. Pick up at the top of the TODO list.*
