# Email-Gated Toolkit Lead Magnet Implementation Guide

> **What this is:** A step-by-step runbook for building the email-gated Plan Sponsor Toolkit lead-magnet flow on Wix Premium. Captures emails when readers download the Toolkit handouts, runs a 5-email welcome sequence, and feeds high-intent leads into PBS's CRM. Connects LinkedIn organic + paid traffic to the conversion funnel without leaving the rxbs.org domain.

> **Total build time:** ~2-3 weeks of part-time work (10-15 hours total). One person can do it; some tasks may benefit from a second pair of eyes.

> **Cost:** $0 incremental beyond existing Wix Premium subscription, plus optional $30/month Zapier when LinkedIn ad spend turns on.

---

## Why this exists

Today, Plan Sponsor Toolkit handouts (the printable PDFs in `templates/documents/`) ship as embedded downloads inside free Substack posts. Anyone who lands on the post can download the PDF anonymously. PBS captures no email, no follow-up, no conversion event.

This guide turns that into:

1. **Branded gated landing pages** at `rxbs.org/toolkit/<topic>` for each Toolkit handout
2. **Email capture form** — name + work email + company + role
3. **Automated PDF delivery** via Wix email
4. **5-email welcome sequence** that nurtures the lead toward Substack subscription, LinkedIn Newsletter subscription, and (eventually) paid tier or 1:1 consult
5. **CRM tagging** so PBS can identify high-intent leads (multi-Toolkit downloaders, VP+ titles)
6. **LinkedIn integration** so paid LinkedIn Lead Gen Form ads feed the same pipeline

The Sandeep Desai inquiry (May 9, 2026) validated demand: a senior PBM oversight professional asked to **pay** for the Toolkit handouts. They are real lead magnets. This guide builds the infrastructure to capture that demand systematically.

---

## Architecture overview

```
┌──────────────────────────────────────────────────────────────────────────┐
│  TRAFFIC SOURCES                                                          │
│  - LinkedIn organic post → first-comment Substack link                    │
│  - LinkedIn ad with Lead Gen Form (paid)                                  │
│  - Substack post (subscribe-to-read gate, see Phase 3)                    │
│  - Direct rxbs.org/toolkit/<topic> URL (email signature, podcast notes)  │
└──────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌──────────────────────────────────────────────────────────────────────────┐
│  WIX LANDING PAGE                                                         │
│  rxbs.org/toolkit/channel-pricing                                         │
│  Hero → form → value prop → testimonial / proprietary anchor              │
└──────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌──────────────────────────────────────────────────────────────────────────┐
│  WIX FORM                                                                 │
│  First Name · Work Email · Company · Role                                 │
└──────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌──────────────────────────────────────────────────────────────────────────┐
│  WIX CONTACTS (CRM)                                                       │
│  Tags applied:                                                            │
│  · source:linkedin-ad / source:linkedin-organic / source:substack /       │
│    source:direct                                                          │
│  · asset:channel-pricing / asset:pbm-compensation / asset:quarterly-rpt   │
│  · role:vp-benefits / role:hr-director / role:cfo / role:broker / etc.    │
└──────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌──────────────────────────────────────────────────────────────────────────┐
│  WIX AUTOMATIONS (trigger: form submitted)                                │
│  → Add tags                                                               │
│  → Send Email 1 (PDF delivery)                                            │
│  → Enroll in 5-email welcome sequence                                     │
└──────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌──────────────────────────────────────────────────────────────────────────┐
│  WELCOME SEQUENCE                                                         │
│  Day 0  · Email 1: PDF download + intro                                   │
│  Day 2  · Email 2: 2nd Toolkit + Substack subscribe CTA                   │
│  Day 5  · Email 3: Recent Field Note (topic-matched)                      │
│  Day 9  · Email 4: LinkedIn Newsletter subscribe                          │
│  Day 14 · Email 5: 1:1 consult offer (VP+ titles) or paid Substack tier   │
└──────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌──────────────────────────────────────────────────────────────────────────┐
│  HIGH-INTENT LEAD FLAG (Wix Contacts)                                     │
│  Triggered by: 2+ Toolkit downloads · or · VP+ title · or · 3+ email     │
│  opens. Surfaces in Wix dashboard for team@rxbs.org follow-up.            │
└──────────────────────────────────────────────────────────────────────────┘
```

---

# PHASE 1 — WIX INFRASTRUCTURE

**Time:** Days 1-3 (4-6 hours total)

## Step 1.1 — Confirm Wix Premium plan capabilities

Sign in to the Wix dashboard for rxbs.org. Go to the Account section.

Confirm the following are included or available on the current plan:

- [ ] **Custom domain** (rxbs.org connected)
- [ ] **Wix Forms** (every Premium plan includes basic forms; some advanced field types require Business or higher)
- [ ] **Wix Email Marketing / Campaigns** (some Premium plans include limited monthly campaigns; check the cap; if low, upgrade is worth considering for ~$5-15/month)
- [ ] **Wix Contacts** (built into every Wix site)
- [ ] **Wix Automations** (most Premium plans include this; verify)
- [ ] **Custom URL slugs / page paths** (so you can use `rxbs.org/toolkit/channel-pricing`)

If any are missing, note them and check the upgrade path before proceeding.

## Step 1.2 — Set up domain authentication for email deliverability

This is a one-time technical setup that prevents your welcome emails from landing in spam.

1. In the Wix dashboard, go to **Domains** → click on **rxbs.org** → **Advanced Settings** → **DNS Records**
2. Add the three records below. Wix has step-by-step instructions, but the values are typically:
   - **SPF** (TXT record at root): `v=spf1 include:_spf.wix.com ~all`
   - **DKIM** (Wix generates the value automatically when you enable email sending; copy the TXT record they provide)
   - **DMARC** (TXT record at `_dmarc.rxbs.org`): `v=DMARC1; p=none; rua=mailto:team@rxbs.org`
3. Wait ~24 hours for DNS propagation
4. Verify in Wix dashboard that all three records show "Verified"

**Why this matters:** Without proper SPF/DKIM/DMARC, Gmail and Outlook may flag your welcome emails as spam, especially when sending volume picks up. This step alone improves deliverability ~30-50%.

## Step 1.3 — Build the master Toolkit landing page template

In Wix Editor:

1. **Create a new page**: Pages menu → Add Page → Blank → name it "Toolkit · Channel Pricing"
2. **Set the URL slug**: page Settings (gear icon) → SEO → Page URL: `rxbs.org/toolkit/channel-pricing`
3. **Hide from main navigation** (Settings → Hide from menu) — these are landing pages, not part of the main site nav

**Page structure (top to bottom):**

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER (PBS logo, minimal nav: rxbs.org · About · Contact) │
├──────────────────────────────────────────────────────────────┤
│  HERO BLOCK                                                   │
│                                                                │
│  Eyebrow: PLAN SPONSOR TOOLKIT                                │
│  H1: Same Drug. Three Channels. Three Prices.                 │
│      The Audit Worksheet to Surface the Gap.                  │
│                                                                │
│  Sub: A 2-page printable framework PBS uses across ~100 PBM  │
│       contract reviews per year. Free download.               │
│                                                                │
│  [PREVIEW IMAGE: PDF page 1 thumbnail, slight angle]          │
├──────────────────────────────────────────────────────────────┤
│  FORM BLOCK (right or below hero, depending on layout)        │
│                                                                │
│  First name: [___________]                                    │
│  Work email: [___________]                                    │
│  Company:    [___________]                                    │
│  Role:       [▼ Select]                                       │
│              · VP / Director of Benefits                      │
│              · CFO / Finance leader                           │
│              · HR Director / HR leader                        │
│              · Benefits Broker / Consultant                   │
│              · PBM Oversight (health plan)                    │
│              · Other                                          │
│                                                                │
│  [SEND ME THE WORKSHEET →]                                    │
│                                                                │
│  Privacy: We use this email only to deliver the PDF and an   │
│  occasional update. Unsubscribe anytime.                      │
├──────────────────────────────────────────────────────────────┤
│  WHAT'S IN THE WORKSHEET                                      │
│                                                                │
│  · 3 audit passes plan sponsors run on per-channel net cost   │
│  · Paste-ready PBM data request (drop into broker email)      │
│  · The pattern PBS sees most often across ~100 contracts/yr   │
│  · 4-step action plan you can execute this quarter            │
├──────────────────────────────────────────────────────────────┤
│  WHO USES THIS                                                │
│                                                                │
│  Self-funded employer benefits leaders, finance teams, and    │
│  brokers running independent PBM oversight. Hand directly to  │
│  your PBM account team or your broker as the agenda for the   │
│  next quarterly review.                                       │
├──────────────────────────────────────────────────────────────┤
│  ABOUT GINNY CRISP, PHARMD                                    │
│                                                                │
│  CEO of Prescription Benefit Solutions. PBS reviews ~100 PBM  │
│  contracts annually for self-funded employers. The Toolkit    │
│  is built from the patterns we surface in those reviews.      │
├──────────────────────────────────────────────────────────────┤
│  FOOTER (PBS contact, privacy, terms)                         │
└──────────────────────────────────────────────────────────────┘
```

**Design notes:**
- Use Plex Sans (digital register per CLAUDE.md typography rule)
- Primary Blue (#015880) for the eyebrow and headline accents
- Accent Blue (#A7E0FA) for the H1 emphasis word and CTA button
- Keep the page at one screen worth of content above the fold on desktop and mobile (form should be visible without scrolling on most laptops)

**Save this page as a template** (Wix has a "Duplicate page" feature) so you can clone it for each subsequent Toolkit handout in <10 minutes.

## Step 1.4 — Build the Wix Form

On the landing page, add a Wix Form:

1. **Add element** → **Forms** → **Contact Form** (start with the basic template)
2. **Edit Form** to configure fields:

| Field | Type | Required | Notes |
|---|---|---|---|
| First Name | Short text | ✅ | Max 50 chars |
| Work Email | Email | ✅ | Validates email format |
| Company | Short text | ✅ | Max 100 chars |
| Role | Dropdown | ✅ | Options: VP / Director of Benefits · CFO / Finance leader · HR Director · Benefits Broker / Consultant · PBM Oversight (health plan) · Other |

3. **Submit button text:** "Send me the worksheet"
4. **Confirmation message:** "Check your inbox in the next 2 minutes. The worksheet is on its way. If it doesn't arrive, check your spam folder or email team@rxbs.org."
5. **Notification email:** Configure to send a copy of every submission to team@rxbs.org so PBS sees leads in real-time.

**Critical setting:** In the form's advanced settings, enable **"Add submitter to Wix Contacts"** so every form submission becomes a CRM contact automatically.

## Step 1.5 — Set up Wix Contacts segments and tags

In the Wix dashboard, go to **Contacts**.

Create the following labels (Wix uses the term "Labels" for tags):

**Source labels:**
- `source:linkedin-ad`
- `source:linkedin-organic`
- `source:substack`
- `source:direct`
- `source:email-sig`
- `source:podcast`

**Asset labels (one per Toolkit):**
- `asset:channel-pricing`
- `asset:pbm-compensation`
- `asset:quarterly-reporting`
- `asset:specialty-routing`
- `asset:contract-amendment`
- (one for each of the 25 Toolkit handouts as you build out)

**Role labels:**
- `role:vp-benefits`
- `role:cfo`
- `role:hr-director`
- `role:broker`
- `role:pbm-oversight`
- `role:other`

**Status labels:**
- `status:lead-new` (default on signup)
- `status:lead-warm` (3+ email opens or 2+ Toolkit downloads)
- `status:lead-hot` (clicked the consult link in Email 5)
- `status:customer` (manually applied when they engage PBS for paid work)

**Workflow labels:**
- `workflow:welcome-active` (currently in the 14-day welcome sequence)
- `workflow:welcome-complete` (finished all 5 emails)

This labeling structure lets you segment any list of contacts by any combination (e.g., "show me all `role:cfo` contacts who downloaded `asset:channel-pricing` in the last 30 days").

## Step 1.6 — Upload PDFs to Wix Media Manager

1. In the Wix dashboard, go to **Media Manager** → upload all 25 Toolkit handout PDFs from `templates/documents/`
2. For each PDF, copy the public URL Wix generates (right-click → "Copy file URL")
3. Save the URL list in a spreadsheet (you'll reference these in the welcome emails)

**Naming convention** to keep things organized: upload as `toolkit_<slug>.pdf` (e.g., `toolkit_channel_pricing_audit_worksheet.pdf`).

---

# PHASE 2 — EMAIL AUTOMATION

**Time:** Days 4-7 (5-7 hours total)

## Step 2.1 — Configure the Wix Automation

In the Wix dashboard, go to **Automations** → **+ New Automation**.

**Trigger:** "Form is submitted" → select the Toolkit landing page form

**Actions** (configure in this order):

1. **Add label**: `source:direct` (or whatever source applies — you can update this conditionally later if needed)
2. **Add label**: `asset:channel-pricing` (specific to this Toolkit)
3. **Add label**: based on the Role field: `role:<selected-role>` (use Wix's conditional logic)
4. **Add label**: `status:lead-new`
5. **Add label**: `workflow:welcome-active`
6. **Send email**: trigger Email 1 (configured in Step 2.2)
7. **Wait**: 2 days
8. **Send email**: Email 2
9. **Wait**: 3 days (now Day 5 from signup)
10. **Send email**: Email 3
11. **Wait**: 4 days (Day 9)
12. **Send email**: Email 4
13. **Wait**: 5 days (Day 14)
14. **Send email**: Email 5
15. **Remove label**: `workflow:welcome-active`
16. **Add label**: `workflow:welcome-complete`

Save and activate the automation.

## Step 2.2 — Build the 5 welcome emails in Wix Email Marketing

Go to **Marketing** → **Email Marketing** → **+ Create New Campaign** → choose **Automated Campaign**.

For each of the 5 emails, configure:
- **Sender name:** Ginny Crisp, PharmD
- **Sender email:** team@rxbs.org (or ginny@rxbs.org if available)
- **Reply-to:** team@rxbs.org

Below are the email templates. Use Plex Sans typography in the template designer. Keep paragraphs short (2-3 sentences). No images except a small PBS logo in the footer.

### Email 1 — Day 0 — Subject: Your Channel Pricing Audit Worksheet

```
Hi {{first_name}},

The Channel Pricing Audit Worksheet is attached below.

→ Download the worksheet (PDF, 2 pages): [PUBLIC PDF URL FROM STEP 1.6]

Two things you might want to know before you open it:

(1) The framework is built from patterns we see across ~100 PBM contracts a
year at PBS. The same handful of clauses move per-channel margin on most
plans. The worksheet walks through the three audit passes that surface
where your dollars are going.

(2) The paste-ready data request (page 2) is designed to drop directly into
an email to your broker or PBM account team. We use it on client engagements
in roughly the form you'll see.

If the format is useful, I'll send a few more along over the next two weeks
— one every few days, each one a different audit framework on a different
PBM mechanic.

If it's not useful, just hit reply and let me know what you'd want instead.
I read every reply.

— Ginny
Ginny Crisp, PharmD
CEO, Prescription Benefit Solutions
team@rxbs.org · rxbs.org · benefitblindspots.substack.com
```

### Email 2 — Day 2 — Subject: A second audit worksheet, different mechanic

```
Hi {{first_name}},

You opened the Channel Pricing worksheet a couple days ago. If it was
useful, here's the second one.

→ PBM Compensation Audit Worksheet (PDF, 2 pages): [PUBLIC PDF URL]

Channel pricing is one of five revenue streams that flow from your plan to
your PBM. Most plan sponsors only track the administrative fee — the
smallest of the five.

This worksheet walks through:
  · The five compensation mechanisms (spread, rebate retention, admin fees,
    manufacturer-direct payments, owned-pharmacy margin)
  · Three audit passes to identify which mechanisms apply to your contract
  · The disclosure-gap framework that becomes your renewal-leverage item

If you want the weekly version of this kind of analysis, our Substack
publication "Benefit Blind Spots" ships a deep dive every Monday and a
tactical Field Note every Thursday. Free.

→ Subscribe: benefitblindspots.substack.com

— Ginny
```

### Email 3 — Day 5 — Subject: Recent Field Note, topic-matched

```
Hi {{first_name}},

A recent Field Note from Benefit Blind Spots that pairs with the audit
frameworks you've been reviewing:

[INSERT MOST RECENT FIELD NOTE TITLE — SWAP MONTHLY]

→ Read it: [SUBSTACK FIELD NOTE URL]

Field Notes are the practical, tactical companion to the Monday deep dives.
Same audit-framework structure, smaller scope: a single contract clause or
a single workflow audited end-to-end.

Each Field Note pairs with a Plan Sponsor Toolkit handout (like the two
you've already received). Subscribe to Benefit Blind Spots and you'll get
each new Toolkit handout the week it ships.

→ Subscribe (free): benefitblindspots.substack.com

— Ginny
```

### Email 4 — Day 9 — Subject: The weekly briefing on LinkedIn

```
Hi {{first_name}},

One more channel worth knowing about: The Pharmacy Benefits Briefing on
LinkedIn.

It's a weekly executive briefing — Mondays at 7:45 AM EST. Two-minute
read. The same week's deep-dive thesis, condensed for the LinkedIn feed
audience. 800+ subscribers as of this month.

→ Subscribe: [LINKEDIN NEWSLETTER URL]

Why it might be useful alongside the Toolkit handouts: the Briefing covers
the higher-level strategic frame each week. The Toolkit gives you the
operational audit. Together they're the full plan-sponsor toolkit.

If you've found this email sequence useful so far, the Briefing is the
ongoing version of it.

— Ginny
```

### Email 5 — Day 14 — Subject: Two ways forward

```
Hi {{first_name}},

You've worked through three audit frameworks and a Field Note over the past
two weeks. If they've been useful, here are two ways to keep the work going.

(1) Subscribe to Benefit Blind Spots Substack for the weekly cadence.
    → Free: benefitblindspots.substack.com

(2) If you'd like to talk through how PBS supports plan sponsors directly
    on PBM oversight, contract review, or audit work — reach out at
    team@rxbs.org with a few sentences on what you're working on. We'll
    set up a 30-minute call.

We're a small team focused on a specific question: how plan sponsors run
PBM oversight that produces real cost containment without sacrificing
clinical or member experience. If that's the question you're working on,
we'd be glad to talk.

Either way, thanks for reading.

— Ginny
Ginny Crisp, PharmD
CEO, Prescription Benefit Solutions
team@rxbs.org · rxbs.org
```

## Step 2.3 — Test the full sequence end-to-end

1. Submit a test entry through the landing page form (use a personal email)
2. Verify Email 1 arrives within 5 minutes
3. Verify the PDF download link works
4. Check Wix Contacts: confirm the contact was created with the right labels
5. Wait 2 days and verify Email 2 arrives
6. Continue checking each email arrives on schedule

If any step fails, the most common issues are:

- **Email lands in spam** → Check SPF/DKIM/DMARC setup (Step 1.2)
- **Email doesn't trigger** → Check Wix Automation is "Active" not "Draft"
- **Wrong labels applied** → Check the conditional logic in the automation
- **PDF link broken** → Verify the public URL in Wix Media Manager

## Step 2.4 — Duplicate the automation for each Toolkit

Once the Channel Pricing flow works end-to-end, duplicate the automation and customize for the next Toolkit:

1. Wix Automations → Channel Pricing automation → **Duplicate**
2. Rename to "PBM Compensation Toolkit Welcome"
3. Update the trigger to point at the PBM Compensation landing page form
4. Update the asset label (`asset:pbm-compensation`)
5. Update Email 1 to deliver the PBM Compensation PDF and reference Channel Pricing as the *next* email
6. Update Email 2 to deliver Channel Pricing (or another Toolkit)
7. Save

Repeat for the strongest 3-5 Toolkit handouts. You don't need to build all 25 immediately — start with the highest-engagement topics and build out as performance data tells you what to scale.

**Recommended starting set (in order):**
1. Channel Pricing Audit Worksheet (W18 — proven 17K reach + 4-5 Substack subs)
2. PBM Compensation Audit Worksheet (W27)
3. Quarterly Reporting Checklist (W21 — Sandeep-pattern interest)
4. Specialty Routing Audit Worksheet (W22)
5. GER Audit Worksheet (W28)

---

# PHASE 3 — SUBSTACK GATE CONVERSION

**Time:** Days 8-10 (1-2 hours total)

## Step 3.1 — Convert Toolkit Substack posts from paywall to email gate

For each of the 5 strongest Toolkit-paired Substack posts (the ones whose Toolkit has been built into Wix in Phase 2):

1. Open the post in the Substack editor
2. Click the gear/settings icon (right sidebar)
3. **Who can read this?** → change from "Everyone" or "Paid subscribers" to **"Free subscribers"**
4. Save / Republish

Now anyone visiting the post sees a "Subscribe to read" wall with an email field. They subscribe (free) → unlock the post + the embedded PDF.

## Step 3.2 — Optimize the title and subtitle for the email gate

Substack only shows the **title + subtitle/meta description** before the gate. Make them sell the trade.

**Pattern:**

| Element | Pattern | Example (Channel Pricing) |
|---|---|---|
| Title | Specific deliverable + audit framing | Channel Pricing Audit Worksheet: Three Passes Plan Sponsors Should Run This Quarter |
| Subtitle | Proprietary anchor + free trade | The 5-line audit framework PBS uses across ~100 PBM contract reviews per year. Free download. |

Update each Toolkit-paired post to follow this pattern.

## Step 3.3 — Add the rxbs.org landing page link inside the post

Above the embedded PDF in each Toolkit Substack post, add a callout block:

> **Prefer to download the worksheet directly?**
> Get it at rxbs.org/toolkit/channel-pricing — same PDF, sent to your inbox.

This gives readers two paths:
- **Path A**: Subscribe to Substack (free) → unlock + download PDF (Substack captures the email)
- **Path B**: Click through to Wix landing page → download PDF (Wix captures the email + enrolls in welcome sequence)

Path B is the higher-conversion path because the welcome sequence kicks in. Both are valid; both put the email into a system PBS controls.

---

# PHASE 4 — LINKEDIN LEAD GEN FORM INTEGRATION

**Time:** Days 11-14 (3-4 hours total)

> **Skip this phase entirely if not running LinkedIn ads yet.** You can add it later when ad spend turns on. Phases 1-3 alone build a fully working email-gate flow for organic traffic.

## Step 4.1 — Set up LinkedIn Campaign Manager

1. Sign into LinkedIn → **Work** menu → **Advertise**
2. Create a Campaign Manager account if not already done. Use Prescription Benefit Solutions as the company.
3. Add a billing method (you won't be charged until ads run).

## Step 4.2 — Build a LinkedIn Lead Gen Form

In Campaign Manager: **Account Assets** → **Lead Gen Forms** → **+ Create**.

**Form configuration:**

| Field | Setting |
|---|---|
| Form name | "Channel Pricing Audit Worksheet" |
| Headline | Same Drug. Three Channels. Three Prices. |
| Offer description | Free 2-page audit worksheet PBS uses across ~100 PBM contract reviews per year. |
| Privacy policy URL | rxbs.org/privacy (build this page if it doesn't exist yet) |

**Lead details to collect** (LinkedIn pre-fills these from the user's profile):
- First name
- Last name
- Work email
- Company name
- Job title

**Custom questions** (optional but useful for segmentation):
- Role category (dropdown matching the Wix form Role field)

**Confirmation message:**
"Check your inbox — the worksheet is on its way."

**Confirmation URL:** `rxbs.org/toolkit/channel-pricing/thank-you` (build a simple thank-you page in Wix)

## Step 4.3 — Set up the Zapier bridge

LinkedIn doesn't natively integrate with Wix Contacts. Zapier handles the bridge.

1. Sign up for Zapier (free tier handles ~100 leads/month; $30/month for higher volume)
2. **Create Zap**:
   - **Trigger**: LinkedIn Lead Gen Forms → New Lead
   - **Action**: Wix → Add Contact
3. **Map the fields**:
   - LinkedIn First Name → Wix First Name
   - LinkedIn Email → Wix Email
   - LinkedIn Company → Wix Company
   - LinkedIn Job Title → Wix Custom Field "Role"
4. **Add a second action**: Wix → Add Label → `source:linkedin-ad` + `asset:channel-pricing`
5. **Test** the Zap with a sample lead, verify it appears in Wix Contacts with the right labels
6. **Turn on** the Zap

The Wix Automation from Phase 2 will trigger the welcome sequence automatically when the contact is added with the right labels.

## Step 4.4 — Test the LinkedIn → Wix → Email pipeline

Submit a test through the LinkedIn Lead Gen Form (LinkedIn lets you preview the form). Verify:

1. Lead appears in Zapier task history
2. Contact appears in Wix Contacts with `source:linkedin-ad` label
3. Email 1 arrives at the test email within 5 minutes
4. Welcome sequence proceeds on schedule

If any step fails, debug the Zapier task history first — it shows exactly where the data flow broke.

---

# PHASE 5 — SOFT LAUNCH

**Time:** Week 3 (ongoing monitoring)

## Step 5.1 — Pick the launch Toolkit

**Start with Channel Pricing.** Strongest engagement track record (W18 was 17K + 4-5 free Substack subs from one organic post). The Toolkit is built. The Substack post is gated. The Wix landing page is live.

## Step 5.2 — Set up the launch ad campaign

In LinkedIn Campaign Manager:

**Campaign objective:** Lead generation (uses Lead Gen Forms)

**Audience targeting:**
- **Job titles**: VP of Benefits, Director of Benefits, Benefits Manager, Senior Benefits Manager, CFO, VP of Finance, Director of HR, VP of HR, Total Rewards Director, Health and Welfare Director, Benefits Consultant, Health and Welfare Consultant
- **Industries**: Hospitals & Health Care, Manufacturing, Financial Services, Higher Education, Government Administration, Insurance, Pharmaceutical Manufacturing
- **Company size**: 1,001-10,000 (focus on the self-funded sweet spot)
- **Geography**: United States
- **Member skills** (optional add): Pharmacy Benefits, Employee Benefits, ERISA, Self-Funded Insurance

**Ad format:** Single Image Ad with Lead Gen Form

**Ad creative:**
- **Image**: The Channel Pricing PDF cover page rendered at LinkedIn's recommended size (1200x627), or the W18 messy infographic three-pill-bottle photoreal
- **Headline**: Three pharmacies. One PBM. Five clauses that decide the margin.
- **Description**: Free audit worksheet. The framework PBS uses across ~100 PBM contract reviews per year.
- **CTA button**: Download

**Budget:** Start with $500 over 7 days ($70/day). Adjust based on early performance.

**Bid strategy:** Maximum delivery (let LinkedIn optimize for cost-per-lead in the first week).

## Step 5.3 — Monitor daily, decide weekly

**Daily checks (5 min):**
- Cost per lead (CPL) — target: under $40 for B2B benefits niche; flag anything above $75
- Number of leads
- Welcome email open rate (Email 1 — should be 60-80% for a fresh lead-magnet sequence)

**Weekly review (20-30 min):**
- Audience segment performance (which job titles convert best)
- Welcome sequence completion rate (% who open all 5 emails)
- Substack subscription rate from Email 2/3 click-throughs (use UTM parameters: `?utm_source=wix&utm_campaign=toolkit-cp`)
- LinkedIn Newsletter subscription rate from Email 4
- 1:1 consult inquiries from Email 5 (these go to team@rxbs.org)

**Kill criteria** (when to pull spend):
- CPL above $75 after first week → audience is too broad or offer is mismatched
- Welcome sequence completion under 30% → sequence isn't earning the relationship
- 60-day Substack subscription rate below 5% → the ad audience isn't your audience

**Scale criteria** (when to expand spend):
- CPL under $40 with strong sequence completion (>50%) and >10% Substack conversion at 30 days → double the budget, build the next Toolkit landing page, run two campaigns in parallel

## Step 5.4 — Iterate

After 30 days of data, the next moves typically are:

- **Add Toolkit #2**: PBM Compensation. Same flow, second campaign. Test whether multi-Toolkit downloaders (the high-intent flag) convert at higher rates than single-Toolkit downloaders.
- **Add custom audiences**: Upload PBS's existing Substack and LinkedIn Newsletter subscriber list. Build a lookalike audience from it. Target ads at the lookalike to find people similar to your existing readers.
- **Refine the welcome sequence**: Drop Email 4 if it's not driving LinkedIn Newsletter subscriptions; add a different email instead. Test subject-line variations.

---

# PHASE 6 — ONGOING OPERATIONS

## Step 6.1 — Adding new Toolkit handouts to the system

Every time a new Toolkit handout ships (one every 1-2 weeks per the publishing cadence):

1. Upload the PDF to Wix Media Manager
2. Duplicate the Channel Pricing landing page → update copy + form for the new Toolkit
3. Duplicate the Channel Pricing welcome automation → update Email 1 PDF link + asset label
4. Add the asset label to Wix Contacts label list
5. Update the Toolkit Substack post to "Free subscribers" gate
6. Add the rxbs.org landing page callout inside the Substack post

Time: ~30-45 minutes per new Toolkit once the template is set up.

## Step 6.2 — Monthly reconciliation

Once a month:

- **Export Substack subscribers** (CSV) → import as a tagged segment in Wix Contacts (`source:substack`). Lets PBS see overlap between Substack readers and Toolkit downloaders.
- **Identify high-intent leads**: filter Wix Contacts for any contact with `status:lead-warm` or `status:lead-hot`. Send to team@rxbs.org for human follow-up if they haven't been contacted in 60 days.
- **Pull Wix Email Marketing performance**: open rates, click rates, unsubscribes per campaign. Flag any sequence email below 30% open rate for content review.

## Step 6.3 — Quarterly review

Every 90 days:

- **Conversion funnel review**: Lead → Email 1 open → Email 2 open → Email 5 open → Substack subscription → LinkedIn Newsletter subscription → consult inquiry. Identify the biggest drop-off and target it for iteration.
- **Audience segment review**: which roles, industries, company sizes are converting best? Adjust LinkedIn ad targeting accordingly.
- **CAC vs. LTV**: total LinkedIn ad spend ÷ total consult inquiries that convert into paid engagements = customer acquisition cost. Compare to lifetime value of a typical PBS engagement. If CAC > LTV / 3, the model needs work.
- **Toolkit performance**: which Toolkit handouts drive the most signups, the best welcome-sequence engagement, the best downstream Substack conversion? Rank them. The top 3 are the ones to feature in lead-magnet ads.

---

# Appendix

## A. Email subject line variants to test

After 30 days of baseline data, A/B test subject lines on Email 1. Variants to try:

- "Your Channel Pricing Audit Worksheet" (current)
- "The 2-page worksheet (as promised)"
- "Open this when you have your contract handy"
- "{{first_name}}, here's the worksheet"

## B. UTM parameter convention for tracking

Every link in welcome emails should carry UTM parameters so Substack and LinkedIn analytics can attribute the source.

Pattern:
```
?utm_source=wix&utm_medium=email&utm_campaign=toolkit-<topic>&utm_content=email-<n>
```

Examples:
- Email 2 link to PBM Compensation Toolkit: `?utm_source=wix&utm_medium=email&utm_campaign=toolkit-cp&utm_content=email-2`
- Email 3 link to Substack Field Note: `?utm_source=wix&utm_medium=email&utm_campaign=toolkit-cp&utm_content=email-3`

## C. Privacy / unsubscribe / CAN-SPAM compliance

Every welcome email must include:

- A physical mailing address in the footer (PBS office address)
- A working unsubscribe link (Wix Email Marketing adds this automatically; verify it works)
- The sender's identity clearly stated

Wix's email engine handles CAN-SPAM compliance by default if you use the built-in unsubscribe link.

## D. Build sequence summary

| Phase | Days | Deliverable |
|---|---|---|
| 1 | 1-3 | Wix infrastructure: domain auth, landing page template, form, contacts segments, PDF hosting |
| 2 | 4-7 | Email automation: 5-email welcome sequence, Wix Automation triggers, end-to-end test |
| 3 | 8-10 | Substack gate conversion: 5 strongest Toolkit posts switched to "Free subscribers", titles/subtitles optimized, rxbs.org link added |
| 4 | 11-14 | LinkedIn Lead Gen Form: Campaign Manager setup, Lead Gen Form, Zapier bridge, end-to-end test |
| 5 | Week 3 | Soft launch: $500 ad campaign on Channel Pricing, daily monitoring, weekly review |
| 6 | Week 4+ | Ongoing: add new Toolkits, monthly reconciliation, quarterly review |

## E. Triage when something breaks

| Symptom | First thing to check |
|---|---|
| Email lands in spam | SPF/DKIM/DMARC records (Step 1.2) |
| Email doesn't send at all | Wix Automation is Active (not Draft) |
| Wrong labels applied | Conditional logic in Wix Automation |
| PDF download link broken | Public URL in Wix Media Manager |
| LinkedIn lead doesn't reach Wix | Zapier task history (most issues show here) |
| LinkedIn ad rejected | LinkedIn ad policy (usually image text density or claim wording) |
| Welcome sequence open rate below 30% | Subject lines + sender reputation |

---

*This guide is a living document. Update it as the flow evolves, new Toolkit handouts ship, and learning from ad spend refines the targeting and copy. Last updated: May 9, 2026.*
