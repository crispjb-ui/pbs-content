# Session Log — May 13, 2026

> Build session: end-to-end implementation of the email-gated Toolkit lead-magnet system in Wix. Phase 1 and Phase 2 of the implementation guide are functionally complete for the Channel Pricing pilot. System is validated end-to-end and ready for production with three small polish items pending.

## What shipped today

### Phase 1 — Wix infrastructure (Days 1-3 of implementation guide)

**1.1 — Wix CMS `Toolkits` collection** ✓
- Fields: `slug`, `tier`, `eyebrow`, `headline`, `headline_emphasis`, `subtitle`, `pdf_url` (URL type), `Image`, `is_archived`, `Title`, etc.
- Channel Pricing row populated end-to-end:
  - tier = 2 (correctly classified as Audit Components)
  - Image: PBS-branded Canva cover (Primary Blue background, wordmark, "PBS PLAN SPONSOR TOOLKIT" eyebrow)
  - pdf_url: `https://f4a10ae5-926c-402e-bec1-e9ae8845f739.usrfiles.com/ugd/f4a10a_23fa36ae1b824651a117a6ed99437003.pdf` (uploaded to Wix Media)

**1.2 — Dynamic Toolkit page (`/toolkit/{slug}`)** ✓
- Wix dynamic page wired to Toolkits collection
- Element bindings: eyebrow / headline / headline_emphasis / subtitle / cover image / PDF mockup card / 4 supporting bullets / SEO title + meta description
- Renders the full HTML mockup spec from `landing_pages/channel_pricing_landing.html`

**1.3 — Toolkit Library at `/toolkit`** ✓
- Static page with H1, subtitle, Tier 2 section H2, tier description
- Repeater connected to `Tier2 Toolkits` dataset
- Filters: `tier = 2 AND is_archived is not True`
- Card design: PBS-branded cover image (Canva) + eyebrow (Plex Mono uppercase, Accent Blue) + headline (white Plex Sans SemiBold) + italic emphasis (Accent Blue) + subtitle + "Get the Worksheet" button (Accent Blue background)
- Button click-routes via Wix's dynamic dataset connection to `Toolkits (Item)` → `/toolkit/channel-pricing`

**Tier 1 and Tier 3 sections deferred** — no rows populated for those tiers yet. Library currently only renders Tier 2. Sections to be added as Tier 1 and 3 rows are created (per README priority order).

**1.4 — Toolkit Form (Wix Forms V2 — `#form1`)** ✓
- Visible fields: First name, Work Email, Company, Role (dropdown)
- Hidden / helper fields: `pdf_url`, `toolkit_name` (populated by Velo from dataset on page load — see Phase 2)
- Form is shared across all 25 Toolkit pages (single form, differentiated via hidden fields)
- Form was renamed from "Contact Form 1" to "Toolkit Form"

**1.5 — Wix Contacts label taxonomy** ✓ (set up before session — labels: source, asset, role, status, workflow)

**1.6 — Cleanup** ✓
- Deleted empty section below Tier 2 card on Toolkit Library page
- Deleted auto-generated artifacts from "Add a Preset" Wix flow:
  - `Properties` collection (6 sample real-estate rows)
  - `Properties (Item)` dynamic page
  - `Properties (List)` dynamic page

### Phase 2 — Email pipeline (Days 4-7 of implementation guide)

**2.1 — PDF asset** ✓
- `templates/documents/week_18_thursday_channel_pricing_audit_worksheet.pdf` uploaded to Wix Media Manager
- Public URL stored on Channel Pricing row's `pdf_url` field (URL field type, not Document field)

**2.2 — Architectural investigation** ✓ COMPLETE
- Confirmed Wix Automation's email variable picker exposes ONLY:
  - Submission metadata (date, ID, submissions link, form ID, form name)
  - Form field values (whatever the form captured, exposed as `field:<key>`)
  - Contact record fields (first/last/email/image/language/birthday/labels/address/phone)
- **NOT exposed**: page URL of submission, CMS collection lookups, dataset references
- **Implication**: Universal email template requires Velo to inject CMS values into form submission data so they become available as `field:<key>` variables

**2.3 — Architecture decision: Hybrid Velo + Wix Automation** ✓
- Decided against per-Toolkit automation branches (~5-10 min friction per new Toolkit × 100 Toolkits/yr = 8-16 hours/year of busywork)
- Decided against external email tool (ConvertKit etc.) as overkill for transactional delivery
- Hybrid Velo: ~20 lines of Velo on dynamic page populates 2 hidden form fields from current dataset row; Wix Automation reads those fields via `field:<key>` variables in email body. Zero per-Toolkit setup.

**2.4 — Velo code on `Toolkits (Item)` page** ✓
```javascript
$w.onReady(function () {
    $w('#dynamicDataset').onReady(() => {
        const toolkit = $w('#dynamicDataset').getCurrentItem();
        $w('#form1').setFieldValues({
            pdf_url: toolkit.pdf_url,
            toolkit_name: toolkit.headline
        });
    });
});
```
- Confirmed `pdf_url` and `toolkit_name` populate correctly in form submissions (verified via Wix Dashboard submission record)
- Note: `toolkit.headline` returns the `headline_emphasis` text ("The Audit Worksheet to Surface the Gap.") not the headline ("Same Drug. Three Channels. Three Prices.") — actual CMS field naming differs from intuitive label. Acceptable for current email subject pattern.

**2.5 — Wix Automation: Toolkit form submitted → send branded email** ✓ ACTIVE
- Trigger: Form submitted, filtered to "Toolkit Form" specifically
- Action: Send templated email
- Sender: Ginny Crisp `<team@rxbs.org>` (custom sender configured)
- Subject: `Your toolkit is ready: ${field:toolkit_name}`
- Body: PBS-branded; dynamic greeting `${field:first_name}`; toolkit name reference; "Download the Worksheet" button linking to `${field:pdf_url}`; Substack invitation; full Ginny signature with BCACP credential + office/mobile phones + team@rxbs.org + www.rxbs.org
- Button: Primary Blue `#015880` background, white text, linked to `${field:pdf_url}` via Regular URL field (Wix resolves the variable at send time)

**2.6 — End-to-end test PASSED** ✓
- Submitted test form with brett@rxbs.org
- Email delivered to inbox (subject and body rendered with correct dynamic values)
- "Download the Worksheet" button clicked through to PDF successfully
- PDF accessible at the stored URL

### Important architectural notes

**Why the new Wix Forms V2 limited us:**
- No "hidden field" type in the field picker (but the General → Short Answer field with field-level "Hide field" toggle does exist — see polish notes)
- Form-level "Hide field" toggle excludes the field from the Automation's variable list entirely (load-bearing finding: fields with "Hide field" ON are not exposed as `field:<key>` in email templates)
- `$w('#form1').collapseField()` and `.hideField()` and `$w('#fieldId').hide()` Velo methods do NOT exist on WixFormsV2 (TypeErrors thrown when attempted). Field-level visibility cannot be controlled via Velo on this form type.

**The workaround chain we landed on:**
1. Form-level "Hide field" toggle = OFF (otherwise field excluded from automation variables)
2. Velo populates field values on page load (works correctly)
3. CSS Custom Code (loaded via Wix Dashboard → Settings → Custom Code) hides the fields visually using `[data-hook="form-field-pdf_url"] { display: none !important; }` (Phase 2 polish — see Pending below)

**Wix Automation cache behavior:**
- The variable picker is cached at automation creation time. Form fields added AFTER an automation is created are not exposed in that automation's variable picker — must delete and recreate the automation to refresh.
- First automation created before adding hidden fields → variables not available
- Recreated automation → variables available immediately

**Custom Code load behavior:**
- Custom Code added via Wix Dashboard does NOT load in Preview mode
- Loads only on Test Site or published site
- This is why the CSS field-hiding cannot be verified in Preview

## Pending polish items

These are non-blocking. System is functional and shippable today.

| # | Item | Effort | Notes |
|---|---|---|---|
| 1 | Verify CSS hides `pdfUrl` + `toolkitname` fields on form | 5 min | Publish or use Test Site (Custom Code doesn't load in Preview). CSS selector `[data-hook="form-field-pdf_url"]` and `[data-hook="form-field-toolkit_name"]` confirmed via DOM inspection. |
| 2 | Remove failed `hideField` / `hide()` lines from Velo | 2 min | Console errors are non-blocking but noisy. Replace Velo code with clean version (already documented above). |
| 3 | Update email copy: "100s of PBM contracts" → "approximately 100 PBM contract reviews annually" | 2 min | CLAUDE.md canonical phrasing. Stronger proprietary anchor. |
| 4 | Consider softening "I read every response" in email body | 1 min | If Ginny doesn't actually read every reply, soften to "I read most replies" or remove. Per CLAUDE.md Humanize Check rule. |
| 5 | Publish site to push Toolkit Library + dynamic pages live | 1 min | All technical validation complete; just hasn't been published. `rxbs.org/toolkit` and `rxbs.org/toolkit/channel-pricing` become discoverable after publish. |

## How to add the next Toolkit (zero-touch architecture)

The pipeline is universal. New Toolkit rows require **no per-Toolkit email setup**. Process:

1. Build the PDF (via `templates/documents/build_thursday_docs.py` or manual build)
2. Upload PDF to Wix Media Manager → copy public URL
3. Add row to Wix CMS Toolkits collection:
   - `slug` — URL slug (e.g., `rebate-report-audit`)
   - `tier` — 1, 2, or 3
   - `eyebrow` — "Rebate Report · Audit Worksheet"
   - `headline` — main hook
   - `headline_emphasis` — italic accent line
   - `subtitle` — long descriptive paragraph
   - `pdf_url` — paste the Wix Media URL
   - `Image` — upload PBS-branded cover (use the same Canva template; only the text overlay differs if needed)
   - `is_archived` — False
4. Save row.

The Library card auto-appears in the matching tier section. The dynamic page at `/toolkit/<slug>` renders automatically with all bound content + form. The email automation fires on form submission with the new Toolkit's name and PDF URL injected via Velo. End-to-end functional with zero email or automation work.

## Strategic discussions in session

### LinkedIn follower trajectory (1,800 followers as of today)

- Started at ~600 in Jan 2026, now at ~1,800 (+1,200 in 4.5 months, ~267/month, ~9/day)
- **3x growth in 4-5 months** is strong for B2B niche specialty audience
- Realistic trajectory:
  - 5K by Q4 2026 to Q2 2027
  - 10K by Q3 2027 to Q1 2028
  - 50K is a 3-5 year story; requires viral hits or major media amplification (not a near-term anchor)
- **What's already accelerating**: Cuban interactions (2 cluster amplifications in April), 46% follower→newsletter conversion rate (5x industry avg), Substack growing +18%/week, three Substack pieces per week compounding
- **Anchor on newsletter conversion rate**, not raw follower count. The latter is lagging.

### Substack pricing strategy

**Current state (low end for B2B specialty):**
- Monthly: $8 | Annual: $80 | Founding: $240

**Realistic upper limits at scale:**
- Monthly: $15-20 | Annual: $150-200 | Founding: $500-750
- B2B specialty audiences (CFOs, HR Directors, brokers with budget authority) don't blink at $20/month; perceived value matters more than price.

**Bigger opportunity than raising individual tiers** = new offering tiers:
1. **Team / Firm License** — $1,500-2,500/year per brokerage firm or employer benefits team. This is where most B2B Substacks make real revenue.
2. **Quarterly "What We're Seeing" Premium Report** — $500-1,000 standalone or included in Founding+
3. **PBM RFP Toolkit** — $500-1,500 one-time
4. **Contract Language Library Premium** — $200-500/year (free version stays as SEO discovery play)
5. **Quarterly Live Workshop** — $200-500/seat
6. **Enterprise Annual License** — $5K-25K/year per large broker firm or self-funded employer (bridges to PBS consulting retainer)

**Target by mid-2027**: 500 paid annual subs at $150/year + 10 team licenses at $2K/year = **$95K/year recurring from Substack alone**. Doesn't preclude consulting business; feeds it.

### Wendell Potter collaboration (initial meeting completed)

Ginny invited to contribute to "HEALTH CARE un-covered" Substack **twice a month**. Potential to drive significant cross-traffic from Wendell's audience (50K+ subscribers).

**Pricing implication: HOLD CURRENT PRICES until 6-8 weeks of Wendell-driven data.**
- Maximize conversion when the wave hits ($8/month converts higher than $20/month for a brand-new audience)
- Get to 500-1,000 subs first, then raise prices
- Grandfather existing subscribers

**What to build BEFORE the Wendell launch:**
1. **Add a second Founding tier at $500** — "Founding Sponsor" with quarterly office hours + first access to new Toolkits + name in newsletter. Captures alignment-driven supporters from Wendell's audience.
2. **Toolkit Library page is the lead magnet for Wendell-driven traffic** — already built. Wendell article CTA: "For the audit worksheet, grab Ginny's free toolkit at rxbs.org/toolkit/channel-pricing"
3. **Team / Firm License tier drafted (not launched)** — when Wendell-driven traffic spikes from broker firms and advocacy orgs, the offer is ready.

**Content division of labor between publications:**
- Wendell's: Big-picture industry critique, policy analysis, accessible to general audience ("Here's why PBM contracts are structured this way")
- Ginny's: Tactical plan-sponsor implementation ("Here's the 4-line redline to fix it on your contract")
- Each Wendell article ends with TWO CTAs: free Toolkit download (high-intent capture) + Substack mention (broader audience capture)

**Metrics to watch in first 60 days of Wendell collaboration:**
- Substack subscribers: +200-500 net adds
- Toolkit form submissions: +50-100
- Paid sub conversion rate: hold at current 5-10%
- Founding tier signups: 5-15

## Next-session pickup

1. **Decide: publish to live OR continue staging.** All technical work is validated end-to-end. Publishing makes `rxbs.org/toolkit` and `rxbs.org/toolkit/channel-pricing` live and discoverable.
2. **Verify CSS field-hiding works on live or Test Site** — single test once published.
3. **Clean up Velo console errors** — paste corrected code (remove failed hide attempts).
4. **Polish email copy** — "100s" → "approximately 100"; soften "I read every response" if needed.
5. **Start populating Tier 1 Toolkits** per README priority:
   - Tier 1 #1: Contract Review Readiness Checklist
   - Tier 1 #2: Optimize Existing vs. Go-to-Market Decision Framework
   - Tier 1 #3: PBR Framework
6. **Add Tier 1 and Tier 3 sections to Toolkit Library page** when those rows exist (duplicate the Tier 2 section pattern: H2 + tier description + Repeater filtered to `tier = 1` or `tier = 3`).
7. **Build the second Founding tier on Substack** ($500 "Founding Sponsor") before Wendell collaboration launches.

## Files changed this session

This session log file. All other work happened in Wix (CMS, dynamic pages, static pages, forms, automations, Velo code panel, Custom Code).

---

*Session: May 13, 2026. Build owner: Ginny / Brett. Architecture: Hybrid Velo + Wix Automation (validated). Pipeline status: PRODUCTION-READY, pending three polish items.*
