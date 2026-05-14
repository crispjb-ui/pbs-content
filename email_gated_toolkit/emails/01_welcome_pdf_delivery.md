# Email 1 — Day 0 — PDF Delivery

**Trigger:** Form submission on any rxbs.org/toolkit/* landing page (or LinkedIn Lead Gen Form sync via Zapier).
**Send delay:** Immediate (within 5 minutes).
**Sender name:** Ginny Crisp, PharmD
**Sender email:** team@rxbs.org
**Reply-to:** team@rxbs.org
**Personalization tokens:** `{{first_name}}` (Wix built-in), `{{first_toolkit_name}}`, `{{first_toolkit_pdf_url}}` (both Wix Contacts custom fields populated by the Automation at signup time)

---

## Subject line

`Your {{first_toolkit_name}}`

**Variants to test (after 30 days of baseline data):**
- `The 2-page worksheet (as promised)`
- `Open this when you have your contract handy`
- `{{first_name}}, here's the worksheet`

---

## Email body

```
Hi {{first_name}},

The {{first_toolkit_name}} is ready to download.

→ Download (PDF, 2 pages): {{first_toolkit_pdf_url}}

Two things you might want to know before you open it:

(1) The framework is built from patterns we see across hundreds of PBM
contracts a year at PBS. The worksheet walks through the three audit
passes that surface where your dollars are going.

(2) The paste-ready data request (page 2) is designed to drop directly
into an email to your broker or PBM account team. We use it on client
engagements in roughly the form you'll see.

If the format is useful, I'll send a few more along over the next two
weeks - one every few days, each one a different audit framework on a
different PBM mechanic.

If it's not useful, just hit reply and let me know what you'd want
instead. I read every reply.

- Ginny

Ginny Crisp, PharmD
CEO, Prescription Benefit Solutions
team@rxbs.org · rxbs.org · benefitblindspots.substack.com
```

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

## Tokens NOT used (dropped per Wix form-field cap May 14)

- `{{topic_mechanic}}` / `{{first_toolkit_mechanic_phrase}}` — Wix form has a 4-more-fields cap; mechanic phrase didn't make the cut. Email 1 prose stays generic ("patterns we see across hundreds of PBM contracts a year") rather than topic-specific ("...patterns we see on per-channel margin"). Functional loss minor.
- `{{slug}}` / UTM tracking — UTM params dropped from email body. Static link without UTM. Loses per-toolkit-origin attribution in Substack/site analytics. Can reintroduce if Wix Forms cap loosens.
