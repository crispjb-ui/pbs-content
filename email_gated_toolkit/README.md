# Email-Gated Toolkit Lead Magnet — Artifact Index

> **Companion to** `email_gated_toolkit_implementation_guide.md` (the 6-phase build runbook). This folder contains all the production-ready artifacts the guide references: copy-paste-ready emails, HTML mockups for landing and thank-you pages, LinkedIn ad creative specs, the privacy policy template, and the tracking dashboard structure.

> **Build status (as of May 13, 2026):** Phase 1 (Wix infrastructure) and Phase 2 (email pipeline) are FUNCTIONALLY COMPLETE for the Channel Pricing pilot. System validated end-to-end. Architecture uses Hybrid Velo + Wix Automation (dynamic CMS values injected into hidden form fields, then read by Wix Automation as email variables). Three small polish items pending; site not yet published. **See `SESSION_LOG_2026_05_13.md` for the full build record, architectural decisions, and next-session pickup points.**

> **Related strategy docs at the repo root:**
> - `email_gated_toolkit_implementation_guide.md` — the 6-phase build runbook (now uses dynamic-page architecture per `Phase 1`)
> - `paid_substack_operationalization_plan.md` — when and how to launch the Substack paid tier without disrupting the lead-magnet flow
> - `ad_spend_topic_selection_framework.md` — 4-factor scoring rubric for deciding which Toolkits get LinkedIn ad budget

## What's here

```
email_gated_toolkit/
├── README.md                                ← this file
├── emails/                                  ← 5 welcome emails, copy-ready
│   ├── 01_welcome_pdf_delivery.md             Day 0 · PDF delivery
│   ├── 02_second_toolkit.md                   Day 2 · Second Toolkit + Substack
│   ├── 03_field_note_match.md                 Day 5 · Topic-matched Field Note
│   ├── 04_linkedin_newsletter.md              Day 9 · LinkedIn Newsletter invite
│   └── 05_two_ways_forward.md                 Day 14 · Substack OR Contract Review
├── landing_pages/                           ← Wix landing page mockups
│   ├── channel_pricing_landing.html           Master template (use for all Toolkits)
│   └── thank_you_template.html                Post-submit confirmation page
├── ad_creative/                             ← LinkedIn ad specs (priority order)
│   ├── 01_contract_review_readiness.md        Tier 1 #1 · Contract Review entry product
│   ├── 02_optimize_vs_go_to_market.md         Tier 1 #2 · Decision framework
│   ├── 03_pbr_framework.md                    Tier 1 #3 · Twice-yearly PBR offering
│   ├── 04_channel_pricing.md                  Tier 2 #4 · W18 winning mechanic
│   └── 05_rebate_report_audit.md              Tier 2 #5 · Top topic + reg tailwind
├── privacy_policy.md                        ← rxbs.org/privacy template
└── tracking_dashboard.md                    ← daily/weekly/monthly/quarterly metrics
```

## Service-aligned Toolkit launch priority

The Toolkit lineup mirrors PBS's three-part service offering. Tier 1 toolkits ARE the services in self-service form; Tier 2 toolkits are the audit components that integrate into the Tier 1 flow.

### Tier 1 — PBS engagement journey (3 evergreen + 2 path-specific)

| Step | Toolkit | When in client journey | Lead-magnet pairing |
|---|---|---|---|
| **1** | Contract Review Readiness Checklist | First touch with new client | Ad creative #1 |
| **2** | Optimize Existing vs. Go-to-Market Decision Framework | After Contract Review delivers findings | Ad creative #2 |
| **3a** | Contract Amendment Letter Template (W24) | If "optimize existing" recommendation | (mechanic-specific, not yet ad-promoted) |
| **3b** | RFP Scoring Methodology Audit (W25) | If "go to market" recommendation | (mechanic-specific, not yet ad-promoted) |
| **4** | Pharmacy Benefit Review (PBR) Framework | Ongoing twice-yearly engagement | Ad creative #3 |

### Tier 2 — Mechanic-specific audit components (priority order)

| Rank | Toolkit | Ad creative |
|---|---|---|
| 6 | Channel Pricing Audit Worksheet (W18) | Ad creative #4 |
| 7 | Rebate Report Audit Worksheet (W20) | Ad creative #5 |
| 8 | PBM Compensation Audit Worksheet (W27) | (built, not yet ad-promoted) |
| 9 | Quarterly Reporting Checklist (W21) | (built, not yet ad-promoted) |
| 10 | GER Audit Worksheet (W28) | (built, not yet ad-promoted) |
| 11 | Specialty Routing Audit Worksheet (W22) | (built, not yet ad-promoted) |
| 12 | Mid-Year Performance Guarantee Audit (W34) | (built, not yet ad-promoted) |
| 13 | PBM Disclosure Audit Worksheet (W31) | (built, not yet ad-promoted) |
| 14 | Termination Clause Audit Worksheet (W35) | (built, not yet ad-promoted) |
| 15 | Definition Variance Audit Worksheet (W36) | (built, not yet ad-promoted) |

### Tier 3 — Workflow + member experience (build into the system, not priority for paid promotion)

Step Therapy Override (W26) · COB Claims Audit (W30) · Member Transition Audit (W33) · Network Configuration Audit (W29) · Fiduciary Compliance Audit (W32) · Pre-Meeting Renewal Checklist (W37)

## How the artifacts connect

```
LinkedIn ad with Lead Gen Form
   │  uses → ad_creative/0N_<toolkit>.md (image prompt + headline + targeting)
   ↓
LinkedIn Lead Gen Form
   │  collects → name, email, company, role, custom question
   ↓
Wix Contacts (via Zapier)
   │  tagged with → source:linkedin-ad, asset:<toolkit>, role:<role>
   ↓
Wix Automation (5-email welcome sequence)
   │  sends → emails/01-05_*.md (content) wrapped in Wix Email Marketing template
   ↓
PDF delivered → templates/documents/<toolkit>.pdf (built from build_thursday_docs.py)
   ↓
Welcome sequence completes → contact tagged workflow:welcome-complete
   ↓
High-intent leads flagged → team@rxbs.org reviews via Wix Contacts dashboard
   ↓
Contract Review inbound inquiry → PBS engagement signed
```

Organic traffic feeds the same flow:

```
LinkedIn organic post → first-comment Substack link → Substack post
   │  rxbs.org/toolkit/<toolkit> link in the post body
   ↓
Wix landing page → landing_pages/channel_pricing_landing.html (template)
   ↓
[same flow as above from Wix Contacts onward]
```

## Build order (same as implementation guide phases)

**Phase 1 (Days 1-3):**
1. Privacy policy → publish at rxbs.org/privacy (use `privacy_policy.md`)
2. Channel Pricing landing page → build in Wix Editor (use `landing_pages/channel_pricing_landing.html` as the spec)
3. Thank-you page → build in Wix Editor (use `landing_pages/thank_you_template.html`)
4. Wix Contacts label taxonomy → set up labels per the implementation guide
5. Wix Forms → configure per the landing page

**Phase 2 (Days 4-7):**
6. Welcome sequence → build 5 automated campaigns in Wix Email Marketing using `emails/01-05_*.md`
7. Wix Automation → configure trigger + 5-email schedule
8. End-to-end test

**Phase 3 (Days 8-10):**
9. Substack gate conversion → switch 5 Toolkit posts to "Free subscribers"

**Phase 4 (Days 11-14, when ad spend turns on):**
10. LinkedIn Campaign Manager → set up account, billing
11. Lead Gen Form → build using `ad_creative/01_contract_review_readiness.md` spec
12. Zapier bridge → LinkedIn Lead Gen Forms → Wix Contacts

**Phase 5 (Week 3):**
13. First $750 ad campaign → Tier 1 #1 Contract Review Readiness
14. Daily monitoring → use `tracking_dashboard.md` daily metrics
15. Weekly review → expand to next Tier 1 ad if performance hits thresholds

**Phase 6 (Week 4+):**
16. Add Tier 1 #2 (Optimize-vs-Go-to-Market) and Tier 1 #3 (PBR Framework)
17. Add Tier 2 #4 (Channel Pricing) and #5 (Rebate Audit)
18. Monthly reconciliation per `tracking_dashboard.md`
19. Quarterly review per `tracking_dashboard.md`

## Customizing for additional Toolkits

The `landing_pages/channel_pricing_landing.html` template is designed to be duplicated for each Toolkit. To create a new landing page:

1. Copy the HTML file
2. Update the `<title>`, `<meta description>`, hero eyebrow, hero H1, hero subtitle, hero bullets
3. Update the form action URL and Wix Automation trigger to point at the new Toolkit
4. Update the PDF preview title, "What's in the worksheet" cards, audience tags
5. Save as `<toolkit_slug>_landing.html` in `landing_pages/`

The same approach applies to the welcome emails. The email templates use tokens (`{{first_name}}`, `{{toolkit_name}}`, etc.) that swap based on which Toolkit was downloaded. Email 1 is the only email that needs Toolkit-specific customization; Emails 2-5 are largely shared across all Toolkit flows.

## Accountability

| Role | Owner | What they do |
|---|---|---|
| Wix infrastructure (landing pages, forms, automations) | PBS team / web developer | Phase 1, Phase 2 build |
| Welcome email content | Ginny | Voice, tone, edits to email copy |
| LinkedIn ad creative + targeting | Ginny + ad operator | Ad copy, image prompts, audience configuration |
| Daily/weekly tracking | team@rxbs.org operator | Monitor metrics, escalate per protocol |
| Contract Review consult inquiries | Ginny | Personal follow-up to high-intent leads |
| Quarterly review + iteration | Ginny | Strategic adjustments to funnel |

## When something breaks

See the triage table in `email_gated_toolkit_implementation_guide.md` Appendix E. Most issues are deliverability, ad creative drift, or audience mismatch — all addressable within a normal weekly review cycle.

## Updating this folder

This folder is a living set of artifacts. As the funnel matures, expect:

- Additional landing pages added to `landing_pages/` (one per Toolkit)
- Additional ad creative specs added to `ad_creative/` (rotation refresh, new variants)
- Email content updates in `emails/` based on A/B test learnings
- Tracking dashboard refinements in `tracking_dashboard.md`

Keep this README current as artifacts are added or retired.

---

*Last updated: May 13, 2026.*
