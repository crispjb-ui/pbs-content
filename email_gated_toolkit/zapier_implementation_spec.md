# Zapier Implementation Spec — Toolkit Lead-Gen Email Automation

**Status:** Replaces the Wix Automations 5-email chain that has proven unreliable on the Wix Free tier.
**Architecture:** Velo posts form submission data directly to Zapier webhook → Zapier sends 5 emails on staggered delays via **Microsoft Outlook** (`team@rxbs.org` on Microsoft 365). Gmail and SendGrid remain as alternative send services if Outlook is ever swapped out.
**Bypasses:** Wix Automations engine entirely. Wix Forms App still receives the submission (for the Submissions database record), but no Wix Automation chain fires.

**Implementation note (May 18, 2026 evening):** Earlier sections of this spec reference Gmail as the send service; the live Zap actually uses **Microsoft Outlook Send Email** (because `team@rxbs.org` is hosted on Microsoft 365, not Google Workspace). The merge tag patterns, BCC behavior, and 5-step chain shape are identical between Gmail and Outlook actions in Zapier; treat any "Gmail" reference below as interchangeable with "Microsoft Outlook" for the actual implementation. Validated path: Velo → Catch Hook → Outlook Send → external Gmail recipient, confirmed delivered end-to-end via Microsoft 365 Message Trace.

**Architecture revision (May 19, 2026 evening — CMS-driven Email 3, form-field cleanup):** Email 3's "10 hardcoded variants via Paths" plan replaced with a single CMS-driven Outlook Send. `field_note_title` and `field_note_blurb` added to the Wix CMS Toolkits collection alongside the existing `field_note_url`. Velo webhook payload now includes all three; Step 6 in Zapier is a single Outlook Send with four merge tags. **Form-side hidden fields reduced from 6 to 1** — only `toolkit_name` kept (for Submissions DB readability); the other 5 hidden fields (pdf_url, second_toolkit_name, second_toolkit_pdf_url, second_toolkit_blurb, field_note_url) deleted because Zapier reads them from CMS via the webhook payload, not from form submission. Form goes from 10 fields to 5. **Why:** future-proofing for the weekly toolkit-addition cadence. Adding a new toolkit becomes a single CMS row insertion with all metadata; zero Zapier edits, zero Velo edits, zero form edits required.

---

## Why bypass Wix Automations entirely

Throughout May 16-18 testing on Wix Free tier:
- Trigger binding went silent after one fire post-rebinding
- Per-recipient email suppression kicked in after testing the same address
- Counter stuck at 8/200 with submissions clearly landing in the database
- Trigger configured correctly, automation Active and Published, but execution unreliable

The Wix Forms App → Zapier "Wix Form Submitted" trigger uses the same internal Wix Automations API that's been failing. A Velo-direct-POST to Zapier's "Catch Hook" webhook trigger bypasses that layer entirely.

---

## Architecture overview

```
User submits Wix form on rxbs.org/toolkit/<slug>
    ↓
Velo onWixFormSubmitted handler fires
    ↓
Velo POSTs form data + hidden CMS field values to Zapier webhook
    ↓
Zapier "Catch Hook" trigger receives the payload
    ↓
Email 1 — Send via Gmail (Day 0, immediate)
    ↓
Delay 2 days
    ↓
Email 2 — Send via Gmail (Day 2)
    ↓
Delay 3 days
    ↓
Email 3 — Send via Gmail (Day 5)
    ↓
Delay 4 days
    ↓
Email 4 — Send via Gmail (Day 9)
    ↓
Delay 5 days
    ↓
Email 5 — Send via Gmail (Day 14)
```

One Zap handles all toolkit landing pages. Hidden field values (different per landing page from the Wix CMS) make every Email 1 land with the correct PDF link, toolkit name, and pairing context.

---

## Part 1 — Zapier setup

### 1.1 Create the Zap

1. Log into Zapier
2. Create new Zap
3. Trigger: **Webhooks by Zapier → Catch Hook**
4. No filtering on the catch — accept any POST
5. Zapier generates a webhook URL like:
   ```
   https://hooks.zapier.com/hooks/catch/12345678/abcdefg/
   ```
6. Copy this URL — you'll paste it into the Velo code in Part 2

### 1.2 Test the trigger

1. Click "Test trigger"
2. Zapier waits for a webhook hit
3. Manually trigger one (you'll do this with a Velo test submission after Part 2 is done, or use Zapier's "Send test" if available)
4. Confirm the payload arrives with all expected fields

### 1.3 Action 1 — Send Email 1 (Day 0, immediate)

1. Action: **Gmail → Send Email** (recommend Gmail with `team@rxbs.org` authenticated, or use SendGrid Send Email action if you prefer dedicated email infrastructure)
2. Configuration:
   - **From:** `Ginny Crisp <team@rxbs.org>`
   - **To:** `{{trigger__email}}` (the Work Email field from form)
   - **Reply-To:** `team@rxbs.org`
   - **Subject:** `Your {{trigger__toolkit_name}}`
   - **Body Type:** HTML
   - **Body:** Paste content from `email_gated_toolkit/emails/01_welcome_pdf_delivery.md` (see Part 3 for merge tag mapping)

### 1.4 Action 2 — Delay 2 days

1. Action: **Delay by Zapier → Delay For**
2. Time: `2 days`

### 1.5 Action 3 — Send Email 2 (Day 2)

1. Action: **Gmail → Send Email**
2. Configuration:
   - **From / To / Reply-To:** same as Email 1
   - **Subject:** (per `email_gated_toolkit/emails/02_second_toolkit.md`)
   - **Body:** Email 2 content with merge tags

### 1.6 Action 4 — Delay 3 days

1. Action: **Delay by Zapier → Delay For**
2. Time: `3 days`

### 1.7 Action 5 — Send Email 3 (Day 5)

**Architecture revised May 19, 2026 evening to CMS-driven single Send (no Paths).** `field_note_title` and `field_note_blurb` added to the Wix CMS Toolkits collection and to the Velo webhook payload. Email 3 body uses four merge tags: `{{trigger__first_name}}`, `{{trigger__field_note_title}}`, `{{trigger__field_note_blurb}}`, `{{trigger__field_note_url}}`. Adding a new toolkit = adding a CMS row with all three field_note fields populated; no Zapier action edits required ever.

**Email 3 body (paste into the Outlook Send action's Body field):**

```
Hi {{trigger__first_name}},

A recent Field Note from Benefit Blind Spots that pairs directly
with what you downloaded:

→ {{trigger__field_note_title}}

{{trigger__field_note_blurb}}

Read it: {{trigger__field_note_url}}

Field Notes are the practical, tactical companion to the Monday
deep dives. Same audit-framework structure, smaller scope: a single
contract clause or workflow audited end-to-end.

Each Field Note pairs with a Plan Sponsor Toolkit handout (like the
two you've already received). Subscribe to Benefit Blind Spots and
you'll get each new Toolkit handout the week it ships.

→ Subscribe (free): benefitblindspots.substack.com

- Ginny

Ginny Crisp, PharmD
CEO, Prescription Benefit Solutions
team@rxbs.org · rxbs.org · benefitblindspots.substack.com
```

### 1.8 Action 6 — Delay 4 days

Time: `4 days`

### 1.9 Action 7 — Send Email 4 (Day 9)

Body from `04_linkedin_newsletter.md`.

### 1.10 Action 8 — Delay 5 days

Time: `5 days`

### 1.11 Action 9 — Send Email 5 (Day 14)

Body from `05_two_ways_forward.md`.

### 1.12 Turn the Zap ON

Once tested end-to-end, toggle the Zap to "On."

---

## Part 2 — Velo code modification

Replace the existing Velo code on the Toolkits (Item) page with:

```javascript
import { fetch } from 'wix-fetch';

const ZAPIER_WEBHOOK_URL = 'PASTE_YOUR_ZAPIER_WEBHOOK_URL_HERE';

$w.onReady(function () {
    // 1. Populate the single remaining hidden form field (toolkit_name) for Submissions DB readability
    $w('#dynamicDataset').onReady(() => {
        const toolkit = $w('#dynamicDataset').getCurrentItem();
        $w('#form1').setFieldValues({
            toolkit_name: toolkit.headline
        });
    });

    // 2. On successful form submission, POST full toolkit context to Zapier webhook (read from CMS, not form)
    $w('#form1').onWixFormSubmitted(async (event) => {
        const toolkit = $w('#dynamicDataset').getCurrentItem();
        const formValues = event.fieldValues || {};

        const payload = {
            // Visible form fields (user input)
            first_name: formValues.first_name || formValues.firstName,
            email: formValues.email || formValues.work_email,
            company: formValues.company,
            role: formValues.role,
            // CMS-derived toolkit context (read fresh from current item; not stored as form fields)
            toolkit_slug: toolkit.slug,
            toolkit_name: toolkit.headline,
            pdf_url: toolkit.pdf_url,
            second_toolkit_name: toolkit.second_toolkit_name,
            second_toolkit_pdf_url: toolkit.second_toolkit_pdf_url,
            second_toolkit_blurb: toolkit.second_toolkit_blurb,
            field_note_title: toolkit.field_note_title,
            field_note_blurb: toolkit.field_note_blurb,
            field_note_url: toolkit.field_note_url,
            // Metadata
            submission_timestamp: new Date().toISOString(),
            source_url: 'rxbs.org/toolkit/' + toolkit.slug
        };

        try {
            await fetch(ZAPIER_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            console.log('Zapier webhook fired successfully');
        } catch (err) {
            console.error('Zapier webhook failed:', err);
        }
    });
});
```

### Key behavior changes from the original Velo code:

1. **Hidden fields still populate** (existing logic preserved)
2. **NEW:** `onWixFormSubmitted` event handler that fires AFTER Wix accepts the submission
3. **NEW:** Builds a payload directly from the current CMS item (bypasses any race condition between Velo and form submission timing — the CMS item is read fresh at submit time, not at page load)
4. **NEW:** POSTs the payload to the Zapier webhook URL
5. **NEW:** Console logs success/failure for diagnostics

### Why this is more reliable than the previous Velo+Wix Automation approach:

- **No timing race condition:** The CMS data is read at submit time, not at page load. Even if user submits before `dataset.onReady`, the `onWixFormSubmitted` handler reads the current item fresh and sends complete data.
- **No Wix Automation dependency:** The form submission to Wix and the Zapier webhook fire are independent. Wix Automation can be disabled entirely.
- **Console-loggable:** If Zapier webhook fails, the error logs to browser console, making future debugging straightforward.

---

## Part 3 — Merge tag mapping

The Velo POST sends this JSON structure:

```json
{
  "first_name": "Test User",
  "email": "test@example.com",
  "company": "Test Co",
  "role": "VP / Director of Benefits",
  "toolkit_slug": "channel-pricing",
  "toolkit_name": "Same Drug. Three Channels. Three Prices.",
  "pdf_url": "https://...usrfiles.com/...pdf",
  "second_toolkit_name": "PBM Compensation Audit Worksheet",
  "second_toolkit_pdf_url": "https://...usrfiles.com/...pdf",
  "second_toolkit_blurb": "The PBM Compensation Audit Worksheet maps all five revenue streams...",
  "field_note_title": "What We See When We Audit Channel Pricing",
  "field_note_url": "https://benefitblindspots.substack.com/p/...",
  "submission_timestamp": "2026-05-18T15:00:00.000Z",
  "source_url": "rxbs.org/toolkit/channel-pricing"
}
```

### Zapier merge tag conversion (from existing Wix templates)

| Existing Wix template token | Zapier merge tag |
|---|---|
| `{{first_name}}` | `{{trigger__first_name}}` |
| `{{first_toolkit_name}}` | `{{trigger__toolkit_name}}` |
| `{{first_toolkit_pdf_url}}` | `{{trigger__pdf_url}}` |
| `{{second_toolkit_name}}` | `{{trigger__second_toolkit_name}}` |
| `{{second_toolkit_pdf_url}}` | `{{trigger__second_toolkit_pdf_url}}` |
| `{{second_toolkit_blurb}}` | `{{trigger__second_toolkit_blurb}}` |
| `{{field_note_url}}` | `{{trigger__field_note_url}}` |
| `{{role}}` | `{{trigger__role}}` |
| `{{first_slug}}` | `{{trigger__toolkit_slug}}` |

Note: Zapier prefixes trigger-output fields with `trigger__` (or sometimes just shows them as the field name when you select them in the action editor). The actual prefix may vary depending on Zapier UI version; the safest approach is to USE Zapier's "Insert Data" picker when configuring each action, which auto-generates the correct syntax.

---

## Part 4 — Email template porting

For each of the 5 emails (`email_gated_toolkit/emails/01_*.md` through `05_*.md`):

1. **Open the markdown file**
2. **Copy the email body** (the content under `## Email body`)
3. **Convert markdown to HTML** (optional — Gmail accepts plain text; SendGrid recommends HTML)
4. **Replace Wix-style merge tags with Zapier-style** per the table above
5. **Paste into Zapier action's "Body" field**

### Minimum-viable Email 1 example (HTML version)

```html
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">

<p>Hi {{trigger__first_name}},</p>

<p>The {{trigger__toolkit_name}} is ready to download.</p>

<p><a href="{{trigger__pdf_url}}" style="background: #015880; color: #fff; padding: 12px 24px; text-decoration: none; display: inline-block; border-radius: 4px;">Download (PDF, 2 pages)</a></p>

<p>Two things you might want to know before you open it:</p>

<p><strong>1.</strong> The framework is built from patterns we see across hundreds of PBM contracts a year at PBS. The worksheet walks through the three audit passes that surface where your dollars are going.</p>

<p><strong>2.</strong> The paste-ready data request (page 2) is designed to drop directly into an email to your broker or PBM account team. We use it on client engagements in roughly the form you'll see.</p>

<p>If you run it and want a second opinion on what you're seeing in your contracts, reply to this email. I read every response.</p>

<p>For ongoing analysis of how PBM contracts actually work (and what they don't show you), my Substack publishes weekly:<br>
<a href="https://benefitblindspots.substack.com">benefitblindspots.substack.com</a></p>

<p>Best,<br>
Ginny Crisp, PharmD, BCACP<br>
Chief Executive Officer<br>
Prescription Benefit Solutions<br>
team@rxbs.org · rxbs.org</p>

</body>
</html>
```

Same pattern for Emails 2-5: open markdown file, convert merge tags, paste into Zapier action.

---

## Part 5 — Wix Automation disable (optional but recommended)

Once Zapier is firing reliably, disable the Wix Automation chain to avoid any chance of duplicate sends:

1. Wix dashboard → Automations
2. Find the "Untitled automation" (the 5-email chain)
3. Toggle from "Active" to "Inactive"
4. Save

The Wix Form's default "New submission received" notification to Ginny can STAY active — it's separate from the email chain and gives you a real-time alert when someone submits.

---

## Testing gotchas (added May 18, 2026 evening)

**Gmail filter false negatives.** If the test recipient is a Gmail address belonging to someone who is already a subscriber to multiple Substacks, they likely have a personal filter routing any Substack-URL-containing email into a `Substack` label/folder. Email 2 mentions `benefitblindspots.substack.com` twice and will trip this filter. Symptom: BCC monitor address receives the email, recipient's Gmail inbox appears empty, Microsoft 365 Message Trace shows "Delivered." **Fix:** use a fresh Gmail alias without filters for test sends (e.g., `name+toolkit-test@gmail.com` on an account that doesn't subscribe to Substacks), OR explicitly check the recipient's Substack/labeled folders before treating a delivery as missing.

**Test-step button does not honor delays.** When clicking "Test action" on individual Zap steps in the Zapier UI, each step runs immediately with no Delay step enforcement. This is fine for validating per-step wiring (merge tags, recipient address, body content) but does NOT validate the production chain's pacing. To test the full chain with delays, submit the actual form on the live landing page once and let the Zap run end-to-end.

**Test delays vs production delays.** During chain wiring it's tempting to set all Delay actions to 1 minute for fast iteration. Note that Gmail's spam classifier treats rapid (sub-5-minute) sequential sends from the same external sender to the same recipient differently than day-spaced sends. If you're testing on tight delays and seeing Promotions placement that wouldn't happen on day-spaced production cadence, that's a testing artifact, not a production issue. Flip delays to production values (Day 0/2/5/9/14) before drawing final conclusions about inbox placement.

**Microsoft 365 Message Trace is the source of truth for "did Microsoft deliver."** Path: `admin.microsoft.com` → expand **Admin centers** → **Exchange** → **Mail flow** → **Message trace** → **Start a trace**. Filter by sender (`team@rxbs.org`) and recipient. Status column tells you: `Delivered` (Microsoft handed off to the recipient mailbox and the receiving server accepted), `Failed`, `Pending` (still retrying), `FilteredAsSpam`, `Quarantined`. If status is `Delivered` and the recipient says the email is missing, the message is somewhere in the recipient's mail account (Promotions tab, label, filter folder, archive) — not a deliverability problem.

---

## Part 6 — Testing checklist

1. [ ] Zapier Zap created with webhook trigger
2. [ ] Webhook URL copied
3. [ ] Velo code updated on the Toolkit (Item) dynamic page
4. [ ] Velo code's `ZAPIER_WEBHOOK_URL` constant populated with the actual URL
5. [ ] Site published (so Velo changes go live)
6. [ ] Test submission with fresh email (e.g., `ginny+zaptest@gmail.com`) from incognito on live URL
7. [ ] Confirm submission appears in Wix Submissions table (existing behavior preserved)
8. [ ] Confirm Zapier webhook receives the POST (Zapier task history)
9. [ ] Confirm Email 1 arrives within 2 minutes
10. [ ] Confirm Email 1 has working Download button (PDF link rendered from merge tag)
11. [ ] Wait 2 days, confirm Email 2 arrives
12. [ ] Wait 3 days, confirm Email 3 arrives
13. [ ] Wait 4 days, confirm Email 4 arrives
14. [ ] Wait 5 days, confirm Email 5 arrives
15. [ ] Once verified, disable the Wix Automation chain (Part 5)

---

## Cost summary

**Free tier:** $0/month covers 100 Zapier tasks/month = 20 leads/month with full 5-email chain (5 tasks per lead).

**Paid Zapier Starter:** $19.99/month covers 750 tasks = 150 leads/month with full chain.

**Gmail sending limits:** ~500 emails/day on Google Workspace (your `team@rxbs.org` if it's Google Workspace), no extra cost beyond your existing Workspace subscription.

**SendGrid alternative:** 100 emails/day on free tier; $19.95/month for 50,000 emails on paid tier with domain authentication.

**Total cost at PBS scale (50-150 leads/month):**
- Up to 20 leads/mo: $0
- 20-150 leads/mo: $20/mo (Zapier Starter)
- 150+ leads/mo: $20-$40/mo (Zapier upgrade tier)

For comparison: Wix Business & eCommerce Premium is $28/mo and gives you a less reliable email infrastructure.

---

## Architectural notes

### One Zap handles all toolkit landing pages

Because the Velo code sends toolkit-specific values from the current CMS item, every form submission carries its own context. The same Zap renders different content per submission based on the merge tag values. **No need for per-toolkit Zaps.**

### Add a new toolkit landing page in the future

When you add Library 02, 03, etc.:
1. Add new row to Wix CMS Toolkits collection with all metadata
2. Wix dynamic page auto-generates `rxbs.org/toolkit/<new-slug>`
3. New page automatically inherits the same Velo code (it's set per dynamic page template, not per item)
4. New form submissions automatically POST to the same Zapier webhook with the new toolkit's data
5. Zap runs unchanged

### Failure mode safety

If Zapier webhook ever fails (network blip, Zapier downtime), the Wix form submission STILL completes (Velo catches the error and continues). You'll have the submission row in the Wix Submissions table as a backup record, and can manually resend Email 1 if needed.

---

*Last updated: 2026-05-18*
