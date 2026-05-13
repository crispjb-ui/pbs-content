# Email 1 — Day 0 — PDF Delivery

**Trigger:** Form submission on any rxbs.org/toolkit/* landing page (or LinkedIn Lead Gen Form sync via Zapier).
**Send delay:** Immediate (within 5 minutes).
**Sender name:** Ginny Crisp, PharmD
**Sender email:** team@rxbs.org
**Reply-to:** team@rxbs.org
**Personalization tokens:** `{{first_name}}`, `{{toolkit_name}}`, `{{pdf_url}}`

---

## Subject line

`Your {{toolkit_name}} Worksheet`

**Variants to test (after 30 days of baseline data):**
- `The 2-page worksheet (as promised)`
- `Open this when you have your contract handy`
- `{{first_name}}, here's the worksheet`

---

## Email body

```
Hi {{first_name}},

The {{toolkit_name}} Worksheet is ready to download.

→ Download (PDF, 2 pages): {{pdf_url}}?utm_source=wix&utm_medium=email&utm_campaign=toolkit-{{slug}}&utm_content=email-1

Two things you might want to know before you open it:

(1) The framework is built from patterns we see across hundreds of PBM
contracts a year at PBS. The same handful of clauses move {{topic_mechanic}}
on most plans. The worksheet walks through the three audit passes that
surface where your dollars are going.

(2) The paste-ready data request (page 2) is designed to drop directly into
an email to your broker or PBM account team. We use it on client engagements
in roughly the form you'll see.

If the format is useful, I'll send a few more along over the next two weeks
- one every few days, each one a different audit framework on a different
PBM mechanic.

If it's not useful, just hit reply and let me know what you'd want instead.
I read every reply.

- Ginny

Ginny Crisp, PharmD
CEO, Prescription Benefit Solutions
team@rxbs.org · rxbs.org · benefitblindspots.substack.com
```

---

## Token reference per Toolkit

| Token | Channel Pricing | PBM Compensation | Quarterly Reporting | Specialty Routing | GER Audit |
|---|---|---|---|---|---|
| `{{toolkit_name}}` | Channel Pricing Audit | PBM Compensation Audit | Quarterly Reporting Checklist | Specialty Routing Audit | GER Audit |
| `{{slug}}` | channel-pricing | pbm-compensation | quarterly-reporting | specialty-routing | ger-audit |
| `{{topic_mechanic}}` | per-channel margin | total PBM compensation across five revenue streams | what shows up (and what doesn't) in the quarterly report | where your specialty drugs actually fill | actual GER vs. the contracted guarantee |
| `{{pdf_url}}` | Wix Media Manager URL for the Channel Pricing PDF | (one per Toolkit) | | | |

---

## Notes for the email designer in Wix

- Use Plex Sans for body, 14-15pt
- No images except a small PBS logo (footer, 80px)
- No fancy headers, no colored backgrounds — the email reads as a personal note
- Text-only links, not buttons (preserves the personal-note feel)
- Single CTA: the PDF download link
- Keep below 200 words total

## Notes on the unsubscribe link

Wix Email Marketing adds the unsubscribe link automatically in the footer. Verify it works on every test send. CAN-SPAM compliance requires a working unsubscribe + a physical mailing address.
