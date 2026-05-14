# Email 3 — Day 5 — Recent Field Note

**Trigger:** 3 days after Email 2 sends (Wix Automation: Wait 3 days → Send).
**Sender:** Ginny Crisp, PharmD · team@rxbs.org
**Personalization tokens:** `{{first_name}}` (Wix built-in), `{{field_note_url}}` (Wix Contacts custom field populated by the Automation)

---

## Subject line

`A recent Field Note (3-min read)`

**Variants to test:**
- `{{first_name}}, a Field Note that pairs with what you downloaded`
- `From the work this week`
- `Three minutes on contract language audit`

---

## Email body

```
Hi {{first_name}},

A recent Field Note from Benefit Blind Spots that pairs with the audit
frameworks you've been reviewing:

→ Read it: {{field_note_url}}

Field Notes are the practical, tactical companion to the Monday deep
dives. Same audit-framework structure, smaller scope: a single contract
clause or a single workflow audited end-to-end.

Each Field Note pairs with a Plan Sponsor Toolkit handout (like the two
you've already received). Subscribe to Benefit Blind Spots and you'll
get each new Toolkit handout the week it ships.

→ Subscribe (free): benefitblindspots.substack.com

- Ginny

Ginny Crisp, PharmD
CEO, Prescription Benefit Solutions
team@rxbs.org · rxbs.org · benefitblindspots.substack.com
```

---

## Tokens NOT used (dropped per Wix form-field cap May 14)

- `{{field_note_title}}` — the Field Note title doesn't render in the email body; reader sees a generic "recent Field Note" intro followed by the link. Title is on the linked Substack page itself. Functional loss: minor.
- `{{field_note_blurb}}` — the 1-2 sentence preview blurb is dropped. Email 3 prose stays generic about what Field Notes are. The Field Note's own intro paragraph on Substack does the topic-specific work after click.
- `{{slug}}` / UTM tracking — UTM params dropped. Static link without UTM. Can reintroduce if Wix Forms cap loosens.

The 4 hidden form fields we kept (out of 6 needed) prioritize Email 2 (the second-toolkit pairing, which carries the most per-toolkit strategic logic) over Email 1 + Email 3 personalization. Email 2 → fully personalized. Email 1 + 3 → first-toolkit name and field-note link only.

---

## Field Note rotation by first-Toolkit downloaded

Pick the Field Note based on what they downloaded first. Refresh the choice every 60-90 days as new Field Notes ship — pull from the most recent 4-6 weeks for freshness.

| First Toolkit downloaded | Field Note pairing | `{{field_note_blurb}}` (1-2 sentences) |
|---|---|---|
| Contract Review Readiness | "How Plan Sponsors Actually Enforce Audit Rights" (FN-03 in backlog when it ships) | The Contract Review surfaces audit-rights gaps. This Field Note is what comes next: how to actually run the audit once the contract has the right language. |
| Optimize vs. Go-to-Market | "What a PBM Transition Actually Looks Like: Timeline and Pitfalls" (FN-10 in backlog) | The strategic decision is one thing. The operational reality of the switch is another. Six months minimum from RFP to go-live, with the pitfalls that catch most plans by surprise. |
| PBR Framework | "Five Lines to Read First in Your PBM's Quarterly Report" (FN-05 in backlog) | The PBR is the comprehensive twice-yearly view. This is the 30-minute version: five lines to scan in the most recent quarterly report this week. |
| Channel Pricing | "Auditing Your MAC Margin: Three Channels, One PBM" (W21 Field Note) | This morning's worksheet decoded the channel-pricing terms. The Field Note runs the same audit on the MAC list itself: the per-channel margin spread that the contract's MAC clause is silent on. |
| Rebate Report Audit | "Reading the Rebate Report Without Getting Spun" (W20 Field Note) | The worksheet runs the rebate-report audit. The Field Note is the field-level guide: how to spot category reclassification before it shows up in your annual reconciliation. |
| PBM Compensation | "Auditing How Your PBM Actually Makes Money" (W27 Field Note) | The worksheet maps the five revenue streams. The Field Note is the operational follow-on: the data request and the disclosure-gap conversation to bring to the next quarterly review. |
| Quarterly Reporting | "Five Lines to Read First in Your PBM's Quarterly Report" (FN-05 in backlog) | The Checklist is the comprehensive 15-line audit. The Field Note is the 30-minute version for the quarter when there isn't time to run the full Checklist. |
| GER Audit | "Auditing Your Generic Effective Rate Against the Guarantee" (W28 Field Note) | Direct topic match. This Field Note is the operational follow-on to the GER worksheet. |
| RFP Scoring | "Auditing Your RFP Scoring Methodology Before You Send It" (W25 Field Note) | Direct topic match. The worksheet is the audit framework; the Field Note is the practical companion for the design phase. |
| Specialty Routing | "Auditing Where Your Specialty Drugs Actually Fill" (W22 Field Note) | Direct topic match. |

---

## Notes for the email designer

- Plain text format same as Email 1 and Email 2
- The Field Note title is the centerpiece of the email — make it visually prominent (bold, slightly larger font on first line)
- The 1-2 sentence blurb is the substantive value — give it room
- Substack subscribe is the secondary CTA, with UTM parameters for attribution
