# Email 2 — Day 2 — Second Toolkit + Substack Subscribe

**Trigger:** 2 days after Email 1 sends (Wix Automation: Wait 2 days → Send).
**Sender name:** Ginny Crisp, PharmD
**Sender email:** team@rxbs.org
**Personalization tokens:** `{{first_name}}` (Wix built-in), `{{first_toolkit_name}}`, `{{second_toolkit_name}}`, `{{second_toolkit_pdf_url}}`, `{{second_toolkit_blurb}}` (Wix Contacts custom fields populated by the Automation)

---

## Subject line

`A second audit worksheet, different mechanic`

**Variants to test:**
- `Toolkit #2: {{second_toolkit_name}}`
- `{{first_name}}, a second worksheet`
- `Different mechanic, same audit framework`

---

## Email body

```
Hi {{first_name}},

You opened the {{first_toolkit_name}} a couple days ago. If it was
useful, here's the second one.

→ {{second_toolkit_name}} (PDF, 2 pages):
   {{second_toolkit_pdf_url}}

{{second_toolkit_blurb}}

If you want the weekly version of this kind of analysis, our Substack
publication "Benefit Blind Spots" ships a deep dive every Monday and a
tactical Field Note every Thursday. Free.

→ Subscribe: benefitblindspots.substack.com

- Ginny

Ginny Crisp, PharmD | Chief Executive Officer
team@rxbs.org
www.rxbs.org
```

---

## `{{second_toolkit_blurb}}` per Toolkit pairing

The second Toolkit should be a different audit mechanic from the first. Use this map to choose the second offering based on what they downloaded first:

| First Toolkit downloaded | Recommended second Toolkit | `{{second_toolkit_blurb}}` |
|---|---|---|
| Channel Pricing | PBM Compensation | "Channel pricing is one of five revenue streams that flow from your plan to your PBM. Most plan sponsors only track the administrative fee — the smallest of the five. This worksheet walks through all five compensation mechanisms (spread, rebate retention, admin fees, manufacturer-direct payments, owned-pharmacy margin), the three audit passes to identify which apply to your contract, and the disclosure-gap framework that becomes your renewal-leverage item." |
| PBM Compensation | Quarterly Reporting | "If the compensation worksheet surfaced disclosure gaps, the Quarterly Reporting Checklist is the practical companion. The 15-line audit framework catches the gaps in the report your PBM sends every quarter — what's missing, what's misclassified, what to ask for next quarter." |
| Quarterly Reporting | Channel Pricing | "Quarterly reporting tells you what happened. The Channel Pricing Audit Worksheet tells you what's happening in real time across retail, mail, and specialty. Three audit passes plan sponsors can run on their own claims data without waiting for the next quarterly report." |
| Specialty Routing | PBM Compensation | "Specialty routing produces one of the five PBM compensation streams (owned-pharmacy margin). The PBM Compensation Audit Worksheet maps the other four. Three audit passes to identify which mechanisms apply to your contract and the disclosure gap to bring to renewal." |
| GER Audit | Channel Pricing | "GER measures your generic discount against the AWP benchmark. Channel Pricing measures the per-claim margin across retail, mail, and specialty. Different mechanics, same audit posture: pull the contract clause, calculate actuals, document the gap." |

---

## Notes for the email designer

- Same Plex Sans body styling as Email 1
- The second-toolkit blurb is the substantive value of this email — give it room (3-4 sentence paragraph)
- Substack subscribe link is the secondary CTA, not the primary
- The Substack URL with UTM parameters lets PBS track conversion in Substack analytics ("source: linkedin.com" becomes "source: wix" once the email comes from Wix Email Marketing)
