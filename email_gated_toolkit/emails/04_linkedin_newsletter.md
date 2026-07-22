# Email 4 — Day 9 — LinkedIn Newsletter Subscribe

**Trigger:** 4 days after Email 3 sends (Wix Automation: Wait 4 days → Send).
**Sender:** Ginny Crisp, PharmD · team@rxbs.org
**Personalization tokens:** `{{first_name}}`, `{{first_slug}}`

---

## Subject line

`The weekly briefing on LinkedIn`

**Variants to test:**
- `Two-minute weekly briefing`
- `{{first_name}}, the LinkedIn version`
- `Mondays at 7:45 AM`

---

## Email body

```
Hi {{first_name}},

One more channel worth knowing about: The Pharmacy Benefits Briefing on
LinkedIn.

It is a weekly executive briefing - Mondays at 7:45 AM EST. Two-minute
read. The same week's deep-dive thesis, condensed for the LinkedIn feed
audience. 800+ subscribers as of this month, growing weekly.

→ Subscribe: [LINKEDIN NEWSLETTER URL]?utm_source=wix&utm_medium=email&utm_campaign=toolkit-{{first_slug}}&utm_content=email-4

Why it might be useful alongside the Toolkit handouts: the Briefing covers
the higher-level strategic frame each week (the why and the what is
shifting in the PBM market). The Toolkit gives you the operational audit
(the how to run the analysis on your plan). Together they are the full
plan-sponsor view.

If you have found this email sequence useful so far, the Briefing is the
ongoing version of it. The Substack publication you may have already
subscribed to is the deeper read; the LinkedIn Newsletter is the executive
summary.

- Ginny

Ginny Crisp, PharmD | Chief Executive Officer
team@rxbs.org
www.rxbs.org
```

---

## Implementation notes

- **Replace `[LINKEDIN NEWSLETTER URL]` with the actual newsletter URL** before publishing the email template. The URL is `https://www.linkedin.com/newsletters/the-pharmacy-benefits-briefing-7XXXXXXX` (find the canonical URL in LinkedIn → Manage → Newsletters).
- **Update the subscriber count** ("800+ as of this month") at each quarterly review. As of May 2026 it is 836; refresh.
- **Skip this email** for contacts whose form data already shows a LinkedIn Newsletter subscriber. Wix Automations can check a tag (`already-newsletter-subscriber`) and skip the email if present. Set this tag manually for known overlaps; future automation can pull from LinkedIn analytics export.

## Why this email exists at Day 9 (not earlier)

The 14-day welcome sequence escalates:
- Day 0-2: deliver immediate value (PDF, second PDF)
- Day 5: deepen the value (Field Note, Substack subscription nudge)
- Day 9: invite into the ongoing weekly relationship (LinkedIn Newsletter)
- Day 14: the conversion ask (consult or paid tier)

If LinkedIn Newsletter were the Day 5 ask, the reader would not yet have seen enough value to justify a second subscription. By Day 9 they have read 3+ emails of substantive content, which earns the right to ask for the second-channel commitment.

## Voice notes

- Plain text, conversational
- Acknowledges the reader may already have subscribed to Substack ("the Substack publication you may have already subscribed to") — this respects the engaged reader without lecturing the unengaged one
- Frames LinkedIn Newsletter as the *executive summary* version (different role than Substack), not a duplicate of Substack
- Does not push hard; the option is offered, the rationale is given, the decision is theirs
