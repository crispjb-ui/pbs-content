# Email 5 — Day 14 — Two Ways Forward (Contract Review or Substack)

**Trigger:** 5 days after Email 4 sends (Wix Automation: Wait 5 days → Send).
**Sender:** Ginny Crisp, PharmD · team@rxbs.org
**Personalization tokens:** `{{first_name}}`, `{{first_slug}}`, `{{role}}`

---

## Subject line

`Two ways forward`

**Variants to test:**
- `{{first_name}}, the next step (if there is one)`
- `From audit to engagement`
- `Where this goes from here`

---

## Email body

```
Hi {{first_name}},

You have worked through three audit frameworks and a Field Note over the
past two weeks. If they have been useful, here are two ways to keep the
work going.

(1) Subscribe to Benefit Blind Spots Substack for the weekly cadence.
    → Free: benefitblindspots.substack.com?utm_source=wix&utm_medium=email&utm_campaign=toolkit-{{first_slug}}&utm_content=email-5-substack

(2) Consider a PBM Contract Review.

Here is what that is and how it works.

Most plan sponsors who download the Toolkit handouts at some point want
the integrated version of what the worksheets do separately. That is the
Contract Review. The toolkits you have already received cover individual
mechanics (channel pricing, rebate flow, network configuration, performance
guarantees). The Contract Review runs all of them together as a single
engagement and produces a written report with:

  · Audit findings across every mechanic, with dollar magnitude per gap
  · A prudent-process record that satisfies fiduciary documentation
  · A strategic recommendation: optimize the existing relationship through
    amendments, or go to market through an RFP for a new vendor
  · The redline agenda for whichever path the recommendation produces

Timeline: 4-6 weeks from kickoff to written deliverable. Format: written
report, plus a 60-90 minute findings meeting with the benefits committee.

For most plans, the Contract Review is the first formal touch point with
PBS. After the review, plans typically move into the recommended path
(amendments or RFP) and then settle into the twice-yearly Pharmacy Benefit
Review (PBR) cadence as the ongoing oversight engagement.

If a Contract Review would be useful for your plan — or you would like to
talk through whether it makes sense — reach out:

   team@rxbs.org

A few sentences on what you are working on is enough to start. We will set
up a 30-minute call to walk through fit and timing.

Either way - subscribe to the free Substack, or consider the Contract
Review - thanks for reading the past two weeks.

- Ginny

Ginny Crisp, PharmD, BCACP | Chief Executive Officer
team@rxbs.org
www.rxbs.org
```

---

## Conditional variants based on `{{role}}`

The base email above works for all roles. Optionally, customize the second sentence of option (2) based on the role tag for sharper targeting:

| Role tag | Customize the "what that is" framing |
|---|---|
| `role:vp-benefits` | "Most VP / Director Benefits leaders who download these worksheets at some point want the integrated version of what they do separately." |
| `role:cfo` | "Most CFOs and Finance leaders who download these worksheets eventually want the dollar-quantified integrated version. The Contract Review is that." |
| `role:hr-director` | "Most HR Directors who download these worksheets want the integrated version that produces a clear yes-or-no recommendation. The Contract Review delivers that." |
| `role:broker` | "Most brokers who download these worksheets want the partner-engagement version of the integrated review. PBS works alongside brokers on the Contract Review; you stay the relationship lead. Reach out and we can talk through how it works." |
| `role:pbm-oversight` | "Most PBM oversight teams (health plan side) who download these worksheets want the cross-PBM benchmarking version. The Contract Review can be scoped that way. Reach out and we can talk through the engagement model." |
| `role:other` | (use base email — no customization) |

The role-customized variant ships only if you can configure conditional logic in Wix Email Marketing. If not, the base email above is sufficient.

---

## Why this email matters

This is the conversion email. The prior 4 emails build trust and demonstrate value. This one names the offer.

**Two CTAs by design:**
- **CTA #1 (Substack subscribe)** is the soft-converting low-friction option. Most readers who haven't already subscribed will subscribe here. Captures them into the ongoing relationship.
- **CTA #2 (Contract Review)** is the hard-converting offer. Self-selecting: only readers ready for a paid engagement reach out. The framing names the deliverable, the timeline, and the price-anchor implicitly (4-6 week professional engagement = signal that this is a paid service, not a free consult).

**What success looks like:**
- 30-50% open rate on Email 5 (lower than earlier emails because some readers have unsubscribed or stopped engaging)
- 5-10% Substack-subscribe click rate
- 1-3% Contract Review reply rate (reading "reach out" and replying with their situation)

Reply rate of 1-3% on a B2B sequence with this audience profile (VP Benefits, CFO, HR Director, Broker, PBM Oversight) is strong. At 100 leads/month, 1-3 inbound consult inquiries per month from this email alone. Compounds with organic inbound.

---

## Voice notes

- Maintain Ginny's "I read every reply" posture — the email reads as a personal note, not a sales blast
- The two-CTA structure respects readers at different intent levels
- The price-anchor is implicit (don't list a price; the deliverable + timeline is the price signal)
- The "Either way" closing line softens the ask and keeps the reader feeling welcome regardless of their decision
