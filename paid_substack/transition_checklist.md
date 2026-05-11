# Substack Gate Transition Checklist

> **What this is:** A per-post checklist of which existing Substack posts need their access setting flipped to **Free subscribers** for the pre-Wix bridge state (right now), and which posts revert to **Public** with rxbs.org callout once the Wix funnel is live.

> **When to use this:** Now, during the Wix-build window. Use again as a one-time checklist on the week Wix goes live to flip everything back to Public.

---

## State 1 — Pre-Wix bridge (right now)

Goal: every post that contains an embedded Toolkit PDF is gated to Free subscribers, so the email-capture moment happens on Substack until rxbs.org/toolkit/* is live.

### Monday Toolkit-paired deep dives

These all have integrated Toolkit handouts. Gate to Free subscribers:

| Week | Monday topic | Toolkit handout | Action |
|---|---|---|---|
| W16 | Prior Authorization ROI | PA ROI Audit Scorecard | [ ] Set to Free subscribers |
| W17 | Carve-Out Decision | Carve-Out Decision Scorecard | [ ] Set to Free subscribers |
| W18 | Drug Pipeline Watch List | Drug Pipeline Watch List | [ ] Set to Free subscribers |
| W19 | Fiduciary Responsibility | Fiduciary Documentation Checklist | ✓ Already gated (today's conversion event) |
| W20 | Manufacturer Programs | Copay Card Financial Impact Calculator | [ ] Set to Free subscribers |
| W21 | Quarterly Reporting | Quarterly Reporting Checklist | [ ] Set to Free subscribers |
| W22 | Biosimilar Strategy | Biosimilar Readiness Assessment | [ ] Set to Free subscribers |
| W23 | Mid-Year Claims | Mid-Year Claims Red Flag Checklist | [ ] Set to Free subscribers |
| W24 | H1/H2 Review | H1 Renewal Readiness Scorecard | [ ] Set to Free subscribers (when ships ~Jun 16) |

### Thursday Toolkit-paired Field Notes

These all have Thursday handouts. Gate to Free subscribers:

| Week | Thursday Field Note | Toolkit handout | Action |
|---|---|---|---|
| W18 | What We See When We Audit Channel Pricing | Channel Pricing Audit Worksheet | [ ] Set to Free subscribers |
| W20 | Reading the Rebate Report Without Getting Spun | Rebate Report Audit Worksheet | [ ] Set to Free subscribers (when ships May 21) |
| W22 | Auditing Where Your Specialty Drugs Actually Fill | Specialty Routing Audit Worksheet | [ ] Set to Free subscribers (when ships Jun 4) |
| W24 | Auditing Your Mid-Year Contract Amendment Window | Contract Amendment Letter Template | [ ] Set to Free subscribers (when ships Jun 18) |
| W25 | Auditing Your RFP Scoring Methodology | RFP Scoring Methodology Audit Worksheet | [ ] Set to Free subscribers (when ships Jun 25) |
| W26 | Auditing Your Step Therapy Override Workflow | Step Therapy Override Audit Worksheet | [ ] Set to Free subscribers (when ships Jul 2) |
| W27 | Auditing How Your PBM Actually Makes Money | PBM Compensation Audit Worksheet | [ ] Set to Free subscribers (when ships Jul 9) |
| W28 | Auditing Your Generic Effective Rate | GER Audit Worksheet | [ ] Set to Free subscribers (when ships Jul 16) |
| W29 | Auditing Your Pharmacy Network Configuration | Network Configuration Audit Worksheet | [ ] Set to Free subscribers (when ships Jul 23) |
| W30 | Auditing Your Coordination of Benefits Claims | COB Claims Audit Worksheet | [ ] Set to Free subscribers (when ships Jul 30) |
| W31 | Auditing Your PBM's Annual Disclosure Obligations | PBM Disclosure Audit Worksheet | [ ] Set to Free subscribers (when ships Aug 6) |
| W32 | Auditing Your Fiduciary Compliance Against the Contract | Fiduciary Compliance Audit Worksheet | [ ] Set to Free subscribers (when ships Aug 13) |
| W33 | Auditing Your Member Transition Disruption Clauses | Member Transition Audit Worksheet | [ ] Set to Free subscribers (when ships Aug 20) |
| W34 | Auditing Your Mid-Year Performance Guarantees | Mid-Year Performance Guarantee Audit Worksheet | [ ] Set to Free subscribers (when ships Aug 27) |
| W35 | Auditing Your Termination Clause (Field Note pairs with W35 Thursday Slot A) | Termination Clause Audit Worksheet | [ ] Set to Free subscribers (when ships Sep 4) |
| W36 | Auditing Definition Variance Across Renewals | Definition Variance Audit Worksheet | [ ] Set to Free subscribers (when ships Sep 11) |
| W37 | The First Meeting with Your PBM at Renewal | Pre-Meeting Renewal Checklist | [ ] Set to Free subscribers (when ships Sep 17) |

### Posts that stay Public (no gate)

Do NOT gate these:

- Wednesday "What Crossed My Desk" roundup (all weeks)
- Thursday Field Notes WITHOUT an embedded Toolkit PDF:
  - W17 Thursday Field Note (if applicable)
  - W19 Field Note ("Five Lines to Read First in Your PBM's Quarterly Report" — no Thursday Toolkit; Monday W19 deep dive has the Toolkit and is already gated)
  - W21 Field Note ("Auditing Your MAC Margin" — no Thursday Toolkit; W21 Monday deep dive has the Toolkit)
  - W23 Field Note ("Decoded the Admin Fees. Now Audit Them." — no Thursday Toolkit; W23 Monday has the Toolkit)
  - Any other Thursday Field Note that doesn't embed a PDF
- Substack Notes (all)
- Contract Language Library (`benefitblindspots.substack.com/p/pbm-contract-language-library`) — keep Public for SEO
- "What I'd Ask" #1 W15 — already shipped free; no retroactive change
- "What I'd Ask" #1 W17 — already shipped free; no retroactive change

### Posts that move to PAID (separate from this Free Subscribers gate)

- "What I'd Ask" #2 W19 (Tuesday May 13 ship) — first paid-only post going forward
- "What I'd Ask" #3 onward (W21, W23, W25, W27, etc.) — paid-only
- "What We're Seeing" Q2 2026 (W24 late June) — paid-only
- All future "What We're Seeing" reports — paid-only

---

## State 2 — Post-Wix transition (one-time, the week Wix goes live)

When `rxbs.org/toolkit/*` landing pages are live and the Wix Form is capturing emails into the welcome sequence, run this one-time content sweep on every gated post:

For each post in State 1's Monday and Thursday tables above:

1. Open the Substack post
2. **Remove the embedded PDF** from the post body
3. Add a callout block where the PDF used to be:

   > **Free download:** Get the [Toolkit Name] (PDF, 2 pages) at **rxbs.org/toolkit/\<slug\>**.

4. Change access setting from **Free subscribers** to **Everyone** (public)
5. Save / Republish

Estimated time: ~5 minutes per post. ~25 posts × 5 min = ~2 hours one time.

After this sweep:
- All Substack publication posts are public again
- Email-capture happens on rxbs.org via the Wix Form
- Paid-only content stays paid-only (no change to What I'd Ask, What We're Seeing, etc.)

### Update LinkedIn first comments

On the same Wix go-live week, retroactively update the Thursday LinkedIn first comments to the two-link pattern:

```
Today's Field Note on Benefit Blind Spots is the operational follow-on: 
[blurb about Field Note specifically].

Read the Field Note: [SUBSTACK URL]
Download the worksheet directly: rxbs.org/toolkit/<slug>
```

Per the audit findings PR (#6), each Thursday W20-W37 has a working first comment already. Just append the second link.

---

## Quick decision tree

When a new post ships, use this decision tree:

```
Does the post have an embedded Toolkit PDF?
├─ YES
│   ├─ Pre-Wix (today) → Free subscribers gate
│   └─ Post-Wix (later) → Public + rxbs.org callout (no embedded PDF)
└─ NO
    ├─ Is it a "What I'd Ask" or "What We're Seeing" post?
    │   ├─ YES → Paid subscribers only
    │   └─ NO → Public
    └─ (catches: Wed roundup, generic Field Notes, Notes, Library)
```

---

*This checklist is the operational bridge between the current Substack-only state and the future Substack + Wix architecture. Update it as posts ship through both phases.*

*Last updated: May 11, 2026.*
