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
| Channel Pricing | "What We See When We Audit Channel Pricing" (W18 Field Note shipped; superseded earlier working title "Auditing Your MAC Margin: Three Channels, One PBM") | `/p/[VERIFY live Substack URL]` | The Channel Pricing Audit Worksheet decoded the channel-pricing terms. The Field Note runs the same audit on the MAC list itself: the per-channel margin spread that the contract's MAC clause is silent on. |
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

**May 18, 2026 (evening — Zapier chain validation):**

**Email service decision diverged from `zapier_implementation_spec.md`.** Actual implementation uses **Microsoft Outlook Send Email** action in Zapier (against `team@rxbs.org`, which is hosted on Microsoft 365). The spec assumes Gmail; the spec is out of date and needs updating. Outlook works fine for the use case — same merge tag pattern, same authentication flow, same end-recipient delivery.

**Zapier chain wiring status:**
- Step 1: Catch Hook (Webhooks by Zapier) — receiving payload from upstream ✓
- Step 2: Microsoft Outlook Send (Email 1, Day 0) — wired with `To` from Catch Hook `1. Email` field, Body from `01_welcome_pdf_delivery.md` content with merge tags substituted, BCC hardcoded to `brett@rxbs.org`; test send confirmed delivered to Gmail ✓
- Step 3: Delay by Zapier — configured (currently 1-minute for testing; flip to 2 days for production) ✓
- Step 4: Microsoft Outlook Send (Email 2, Day 2) — wired with same `To`/BCC pattern as Step 2, Body from `02_second_toolkit.md` with `second_toolkit_blurb` merge tag; test send confirmed delivered ✓
- Step 5+: not yet wired

**Microsoft 365 Message Trace results (admin.microsoft.com → Exchange admin → Mail flow → Message trace):** all five test sends from `team@rxbs.org` → `crispjb+test6@gmail.com` between 4:08 PM and 4:50 PM status **Delivered**. SMTP path Microsoft → Gmail is healthy, no NDR generated, no throttling observed.

**Apparent "missing email" debugging episode (preserved for future testing reference):**
- After wiring Step 4 and clicking Test, BCC (`brett@rxbs.org`) received Email 2 but Gmail inbox at `crispjb+test6@gmail.com` appeared empty for the same message
- Initial hypotheses (rate limiting, sender auth, content filtering, Microsoft throttling, merge-tag misfire) all ruled out via Message Trace + manual compose test
- **Actual cause:** Ginny's Gmail account has a pre-existing filter that routes any email mentioning Substack URLs to a `Substack` folder. Email 2 mentions `benefitblindspots.substack.com` twice (PDF context + subscribe pitch), tripped the filter, landed in the Substack folder instead of inbox
- **Lesson for future testing:** use a fresh Gmail alias without personal filters for test sends, OR explicitly check Substack/labeled folders before treating a delivery as missing. Real recipients without these filters will see Email 2 in Primary or Promotions depending on Gmail's classifier, not in a hidden filter folder.

**Velo → Zapier webhook path:** test sends so far used Zapier's manual Test button per step; full Velo → Catch Hook delivery from a real form submission still needs end-to-end validation. The Catch Hook itself receives data fine when test-fired manually.

---

## TODO — Next Session Pickup (priority order)

### Critical — finish Zapier chain wiring (Steps 5-10)

- [x] **Catch Hook receiving payload** — Step 1 confirmed working May 18 evening
- [x] **Step 2 (Email 1, Day 0) wired** — Microsoft Outlook Send action with merge tags substituting from Catch Hook trigger; test send delivered
- [x] **Step 3 (Delay) configured** — currently 1-minute for testing
- [x] **Step 4 (Email 2, Day 2) wired** — same pattern as Step 2, body from `02_second_toolkit.md`; test send delivered
- [ ] **Step 5 (Delay)** — add Delay by Zapier action, 1-min for testing, 3 days for production
- [ ] **Step 6 (Email 3, Day 5) — Field Note pairing — CMS-DRIVEN SINGLE SEND (revised May 19, 2026 evening).** No Paths needed. Architecture: Wix CMS Toolkits collection holds `field_note_title`, `field_note_blurb`, `field_note_url` per toolkit row. Velo's webhook payload includes those three values from `dynamicDataset.getCurrentItem()`. Step 6 is a single Microsoft Outlook Send action with body using `{{trigger__first_name}}`, `{{trigger__field_note_title}}`, `{{trigger__field_note_blurb}}`, `{{trigger__field_note_url}}` merge tags. Paste-ready Email 3 body is documented in the **CMS-driven architecture pivot** session log entry below.

  **Why CMS-driven instead of Paths:** new toolkits ship weekly. Each new toolkit needs Field Note + 2nd toolkit pairing. With CMS-driven, adding a new toolkit = adding a CMS row with all metadata populated; zero Zapier edits, zero Velo edits, zero form edits. With Paths, every new toolkit requires editing the Zap (add a new branch, exact-string match on toolkit_name, test, republish). Paths approach was rejected as not future-proof at the weekly-cadence rate.

  **Sub-tasks for Step 6:**
  - [ ] Add `field_note_blurb` column to Wix CMS Toolkits collection (plain Text, not Rich Text) — `field_note_title` and `field_note_url` columns already exist
  - [ ] Populate `field_note_title` + `field_note_blurb` + `field_note_url` for all current Toolkits rows (values for Channel Pricing + 3 Tier 1 toolkits drafted in `email_gated_toolkit/toolkit_dataset.md`)
  - [ ] Update Velo webhook-payload code to include `field_note_title: toolkit.field_note_title` and `field_note_blurb: toolkit.field_note_blurb` alongside the existing `field_note_url` line. Republish site.
  - [ ] Wire single Outlook Send for Step 6 with the paste-ready body, no Paths action
  - [ ] Verify the Channel Pricing CMS row's `field_note_url` (currently `/p/one-drug-class-to-watch-the-next` which does not match the title `What We See When We Audit Channel Pricing`) and correct before live test
- [ ] **Form-side cleanup (revised May 19 evening, do this alongside Step 6):**
  - [ ] Delete the 5 hidden form fields no longer needed: `pdf_url`, `second_toolkit_name`, `second_toolkit_pdf_url`, `second_toolkit_blurb`, `field_note_url`. Zapier reads these from CMS via the webhook payload, not from the form submission.
  - [ ] **Keep `toolkit_name` as the single remaining hidden field** so the Wix Submissions DB shows at-a-glance which toolkit each lead downloaded
  - [ ] Simplify Velo's `setFieldValues` call to populate only `toolkit_name` (one-line)
  - [ ] Remove the white-box cover hiding the hidden fields (now over-engineered for a single remaining field)
  - [ ] Form goes from 10 fields to 5 (4 visible + 1 hidden). Wix Forms 10-field cap is no longer a constraint going forward.
- [ ] **Step 7 (Delay)** — 4 days production
- [ ] **Step 8 (Email 4, Day 9) — LinkedIn Newsletter subscribe** — Microsoft Outlook Send, body from `04_linkedin_newsletter.md`. Replace `[LINKEDIN NEWSLETTER URL]` placeholder with actual canonical URL from LinkedIn → Manage → Newsletters; update subscriber count to current month (836+ as of May 2026)
- [ ] **Step 9 (Delay)** — 5 days production
- [ ] **Step 10 (Email 5, Day 14) — Two ways forward** — Microsoft Outlook Send, body from `05_two_ways_forward.md`. Role-conditional content if Zapier supports inline conditionals; otherwise 6 hardcoded variants in a Paths branch on `{{trigger__role}}`
- [ ] **Once chain wired, flip all delays from test values to production values** (Day 0 / Day 2 / Day 5 / Day 9 / Day 14)
- [ ] **End-to-end live test:** submit the actual form on `rxbs.org/toolkit/channel-pricing` from an incognito browser with a fresh Gmail alias (avoid the Substack-filter testing gotcha), confirm all 5 emails arrive on the production delay schedule with correct merge tag values, correct PDF link, correct Field Note URL for the Channel Pricing pairing
- [ ] **Verify Velo → Catch Hook is actually firing on real form submissions** (we've only validated each Zap step individually via Zapier's manual Test button; the upstream Velo backend hook firing is implied by the fact that Channel Pricing test submissions appeared in Wix Submissions DB, but we haven't confirmed the webhook fires on real submissions end-to-end yet)

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
- [ ] Eventually add Library 02-N toolkits and the rest of the 26 Tier 2 toolkit rows (full CSV build per `toolkit_dataset.md` pairing rules)

### Phase 1 prep — one decision today (do this alongside Step 6 wiring)

- [ ] **Add a Zapier step that writes each form submission to a contact registry** keyed by email. This becomes the lookup table for Phase 1 returning-visitor recognition. Implementation options (pick whichever fits the team's tooling):
  - **Wix Custom Collection** (recommended for tightest Wix integration): Zapier action "Wix → Insert Data Item" into a new collection `ToolkitSubmissions` with columns `email`, `first_name`, `company`, `role`, `last_toolkit_slug`, `last_toolkit_name`, `last_download_date`, `total_downloads_count`. Insert step runs after Step 1 (Catch Hook), before Step 2 (Email 1). When an email already exists in the collection, increment `total_downloads_count` instead of inserting a duplicate (Zapier's "Find or Create" pattern).
  - **Google Sheets** (simpler, less coupled to Wix): Zapier action "Google Sheets → Lookup Spreadsheet Row" by email; if not found, "Create Spreadsheet Row" with the same fields. Operationally simpler but requires Google Sheets account and is harder to expose to a future Members dashboard.
  - **Airtable** (best long-term contact-database UX): structured database with views per toolkit, automation hooks, future CRM integration. Heavier setup; consider if PBS has Airtable already.

  **Why do this now:** the registry sits there populating as leads come in. When you build Phase 1 (returning-visitor recognition) and Phase 2 (Wix Members library), the contact history is already there to power both. Without the registry from Day 1, you'd have to backfill from Zapier task history later, which is technically possible but ugly.

  **Recommended:** Wix Custom Collection. Tightest integration with the future Members-gated library page. ~10 minutes to wire as a single Zapier step.

---

## Future architecture roadmap — repeat-user recognition + Library access

**Context:** the Channel Pricing funnel is Phase 0 — first-time toolkit delivery + 5-email nurture for net-new leads. The user research signal is clear that repeat visitors are real ("there are repeat people coming back for more toolkits") and shouldn't have to re-fill the same form per toolkit. This roadmap captures the phased path to handling repeat users and library-style access without painting the current build into a corner.

### Phase 0 — current build (status as of May 19, 2026)

- First-time visitor lands on a toolkit landing page (e.g., `rxbs.org/toolkit/channel-pricing`)
- Fills 4-visible-field form (first_name, email, company, role)
- Velo posts CMS + form data to Zapier
- Zapier delivers 5-email sequence (Email 1 immediately; 2, 3, 4, 5 on Day 2/5/9/14 production delays)
- Same email address on a second toolkit landing page = full second 5-email sequence in parallel with the first (the friction-and-blast problem)

### Phase 1 — cookie recognition + sequence dedup

**Trigger to build:** funnel is live end-to-end; first 2-3 weeks of real submissions have proven the chain works; team has bandwidth to invest 1-2 sessions in UX improvement.

**What it solves:**
- Returning visitors don't re-fill the form on the same browser
- Same email across multiple toolkit downloads doesn't trigger overlapping 5-email sequences
- Repeat downloaders get a short delivery-only email instead of full nurture re-run

**Mechanics:**

1. **Velo cookie at form-submit time.** On successful form submission, set a `wix-storage-frontend` cookie with `{email, first_name, company, role, last_toolkit_downloaded, last_download_date}`. Persists across visits to any `rxbs.org/toolkit/*` page.

2. **Returning visitor on a toolkit page.** Velo reads the cookie on page load. If cookie exists and email is non-empty, hide the form and show a "Welcome back, [first_name]" button. Button onClick fires the Zapier webhook directly with the cookie data + the current page's `toolkit.slug`, then triggers the PDF download (or redirects to a thank-you page) without form submission.

3. **Zapier first-time vs repeat branch.** Add a Filter step early in the Zap (after Step 1 Catch Hook, before Step 2 Email 1):
   - **First-time path** (email not in `ToolkitSubmissions` registry): full 5-email sequence runs as today
   - **Repeat-downloader path** (email already in registry): single delivery email with the new toolkit's PDF link + a one-line acknowledgment ("here's your second toolkit"). Optionally a different short sequence for repeat downloaders (1-2 emails over 3-5 days) instead of full 5-email blast.

4. **Registry update on every download.** Increment `total_downloads_count`, update `last_toolkit_*` fields, append the new toolkit_slug to a `download_history` column (or maintain a related collection of download events).

**Effort:** 1-2 sessions of work. Velo cookie + page-load handler, Zapier Filter + Path branch, registry update step. No new infrastructure needed beyond the Phase 1 prep registry already in place.

**Risk to monitor:** cookie-based recognition only works on the same browser. A user who downloads on phone then revisits on desktop will still see the form on desktop. Phase 2 (Members account) solves this; Phase 1 accepts the same-browser limitation.

### Phase 2 — Wix Members library + account dashboard

**Trigger to build:** funnel has been converting for 4-6 weeks; repeat downloads are measurable; team has bandwidth to invest 2-3 weeks in member infrastructure. Phase 2 is the right model when conversion volume justifies the build.

**What it solves:**
- Cross-device recognition (Phase 1's same-browser limitation)
- Library-style access (browse all toolkits + download any without form-per-item)
- Account dashboard showing what user has downloaded + recommended next toolkits
- Segmentation by engagement signals (opens, click-throughs, repeat downloads) for differentiated email content

**Mechanics:**

1. **Wix Members integration.** Convert the form submission flow to auto-create a free Wix Member account at first toolkit download. Member is created with email as identifier; profile populated from form fields (first_name, company, role).

2. **Library page at `rxbs.org/toolkit-library`.** Public preview of all toolkits (titles, headlines, subtitle copy from CMS). Toolkit PDFs gated behind member sign-in. Repeater on the page reads from the existing `Toolkits` CMS collection (no new data structure required).

3. **Account dashboard at `rxbs.org/my-toolkits`.** Lists toolkits the signed-in member has downloaded, with download dates. "Recommended next" row pulled from `related_toolkit_slugs` (already a CMS column on each toolkit row). Member can re-download any prior toolkit without re-entering form data.

4. **Migration path from Phase 0/1 contacts.** Existing `ToolkitSubmissions` registry rows (from Phase 1 prep) become the seed for Wix Members. Bulk-create Member accounts from registry on rollout day, send a one-time "claim your account" email with auto-sign-in link. Members can update their profile, set email preferences, view download history.

5. **Email sequence differentiation by engagement signal.** Zapier (or Wix Automation, or both) branches on member engagement signals:
   - High engagement (opened 4-5 of last 5 emails) → continued nurture with content premieres
   - Low engagement (opened 0-1 of last 5 emails) → re-engagement email or sequence pause
   - Specific drug class/topic interest signaled by repeat downloads of related toolkits → topic-anchored sequence

**Effort:** 2-3 weeks. Wix Members feature configuration, library page design + build, account dashboard, migration tooling for existing leads, sequence differentiation logic, deliverability re-test under Member-account branding.

**Tier requirement:** Wix Members is on the Wix Premium tier (likely already in use for the Wix Business plan covering the current site). No new platform fees expected; check Wix tier-feature matrix to confirm.

### Decision dependencies between phases

| Decision in Phase 0/1 | Affects Phase 2? |
|---|---|
| Registry keyed by email (not by anonymous ID) | YES — emails are how Wix Members will match existing contacts |
| Registry includes first_name, company, role | YES — these populate Member profile fields at conversion |
| Zapier writes timestamp + toolkit_slug on every download | YES — becomes Member dashboard history |
| Email-as-identifier across all touchpoints (form, Zapier, CMS) | YES — Phase 2 Members account uses email as the join key |

**Hard rule:** never assign or rely on anonymous IDs (UUID, session ID) in the registry. Always email. If email is missing, the submission is incomplete and shouldn't enter the registry. Phase 2 depends on email being the canonical identity.

### Out of scope for both phases (deferred indefinitely)

- Paid tier / payment processing (toolkits remain free lead magnets through Phase 2)
- Native mobile app
- Single-sign-on (SSO) with LinkedIn or other providers — email-and-password Wix Members is sufficient
- Account deletion / GDPR self-service portal (handle via team@rxbs.org request flow until volume justifies)

---
- Did NOT yet build any of the 5 emails in Wix Email Marketing — that's the next major work
- Did NOT yet wire any Wix Automation — that's the next major work after emails are built

---

*Handoff doc revised: May 19, 2026 (architecture pivot: CMS-driven Email 3, form-side cleanup, Phase 1 + Phase 2 roadmap added). Pick up at the top of the TODO list.*
