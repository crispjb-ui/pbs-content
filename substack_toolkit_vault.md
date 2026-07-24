# The Toolkit Vault — paid-subscriber Substack post (source of truth)

_Created Jul 24, 2026. **Origin:** paid subscriber Nick suggested toolkit access inside Substack; Brett approved the perk form same day ("let's build it") — the vault ADDS paid-tier value without touching the free email-gated funnel on rxbs.org, which remains the ONLY path for non-paid readers (it is the lead engine; never ungate it). Consistent with the Jul 3 paid-Substack hold: this is a perk refinement in the Practitioner's Note class (Brett-approved; Ginny may veto), not a paid-growth investment. Measured like the Note: by WHO uses it, not revenue._

**What it is:** ONE paid-subscribers-only Substack post, "The Plan Sponsor Toolkit Vault," with every toolkit PDF attached directly — no forms, no email gate. Updated in place as the library grows or PDFs re-render.

**The recall/update mechanism (Brett's requirement):**
1. **PDF re-render →** `/sync-toolkits` Step 5b flags the matching Vault Ledger row below as `STALE` in the same commit that re-renders the PDF.
2. **New toolkit minted →** the minting session adds a Ledger row (`NOT YET ATTACHED`) + a line in the right section of the post body between the paste markers.
3. **Vault refresh (the Substack edit):** whenever any row is STALE/NOT-YET-ATTACHED, the publisher prompt below goes to Ginny/Brett — batch cadence is fine (monthly-ish, or same-day for a new toolkit worth announcing). After the live edit, flip the rows to `CURRENT (date)` and log it.
4. `/system-audit` §4 checks this ledger for rows stale >6 weeks.

**Publisher prompt (first publish):**
> In Substack: New post → title "The Plan Sponsor Toolkit Vault" → paste the body between the ▼▲ markers → at each `[ATTACH PDF: …]` marker, drag that file from `templates/documents/` into the post (Substack renders an inline file tile) and delete the marker line → set audience to **Paid subscribers only** → publish WITHOUT sending email the first time is fine, then share the link in the next Practitioner's Note / paid thread. Pin it in the publication's paid section if the UI allows. **Same sitting:** update the plan benefits in Settings → Payments with the "What subscribers get" copy below, so the subscribe page names the Vault the moment it exists.

**Publisher prompt (refresh):**
> Open the live Vault post in edit mode. For each STALE row: delete the old file tile, drag in the re-rendered PDF from `templates/documents/`. For each NOT-YET-ATTACHED row: add the new line + attachment in its section. Update the "Last updated" line at the top of the post. Save (no re-send needed).

---

## Post title, subtitle, and header image

**Title:** `The Plan Sponsor Toolkit Vault`
**Subtitle:** `Every worksheet we publish, attached in one post. Paid subscribers only, updated in place as the library grows.`

**Channel color: Gray (#4D4D4D) — Reference Channel.** The Vault sits outside the weekly Mon/Wed/Thu cadence, exactly like the Contract Language Library, Monthly Q&A, and What I'd Ask, so it takes the Reference Channel treatment: Gray background, White + Accent Blue two-tone headline (Primary Blue is unreadable on this gray), Accent Blue badge top-right with Primary Blue badge text. 2240 x 1260 px, Topic Icon template. The badge reads `PAID EXCLUSIVE` rather than repeating the asset name (the headline already carries it; the badge's job here is to signal the tier at a glance). No toolkit count in the image — the number grows, and the header should never go stale.

**Header image generation prompt:**

```
Minimalist flat vector illustration, wide banner format, 2240 x 1260 pixels. Solid dark gray background, hex #4D4D4D, with clean negative space and no background texture or grid.

Centered composition: a round bank-vault door viewed straight on, drawn swung open at a slight angle so the interior is visible. Inside the vault, instead of money, a neat upright stack of white document sheets; the front sheet shows a bold checklist with three checked boxes. The vault door has a combination dial rendered mid-turn, with a short curved motion arc beside it showing the dial in motion.

Accent Blue, hex #A7E0FA, applied to exactly these elements: the combination dial and its motion arc, the three checkmarks on the front document, and the thin rim outline of the open vault door. All other linework in white or light gray.

Repeating geometric detail: fine evenly spaced tick marks around the outer rim of the vault door, like a dial face.

Headline above or beside the vault in IBM Plex Sans SemiBold, two-tone: "THE TOOLKIT" in white and "VAULT" in Accent Blue #A7E0FA. Subtitle line below the headline in IBM Plex Mono Medium, white: "Every worksheet. One post. Always current."

Top-right corner: a small rounded rectangle badge in Accent Blue #A7E0FA containing the text "PAID EXCLUSIVE" in Primary Blue #015880, uppercase, small with slight letter spacing.
```

_If the generator mangles the headline text, fall back to the standard Canva pass: generate the illustration without text, add headline/subtitle/badge in Canva with the same specs._

---

## Subscribe-page plan benefits ("What subscribers get" — Settings → Payments)

_Added Jul 24, 2026 (Brett: the paid button should tell readers there is more content for paid while they are deciding). Reconciled Jul 24 against the LIVE Settings → Payments → Benefits fields Brett screenshotted. Each line below = one benefit field in the Substack UI (add/remove fields to match). **Sequencing: make these edits in the SAME SITTING the Vault post publishes, not before** — the paid list names the Vault, and the subscribe page must never promise content that is not live yet._

**Why the old paid list can't stay (the reconciliation):** the three current paid fields promise (a) the Monthly Q&A thread — listed twice across fields 1 and 2, and not running on a reliable cadence, (b) "What I'd Ask" scenarios — specced as subscriber-only (free-tier) content in the repo, and (c) the Quarterly "What We're Seeing" report — which is now a FREE public page at rxbs.org/what-we-are-seeing (launched Jul 23, 2026; the proof/citation surface must stay free, so it can never be sold as paid again). Replace all three with what is actually live: the Vault + the Practitioner's Note. If the Monthly Q&A later runs on a real cadence, re-add it then, not before.

**Free subscriber benefits (SINGLE field with a character cap — one compressed line, per Brett's Jul 24 UI report):**

```
Monday deep dive, Wednesday roundup, and Thursday field note, every week. Articles are never paywalled. Plus the PBM Contract Language Library.
```

**Paid subscriber benefits (the tier is capped at THREE fields — replace the three existing fields with these three):**

```
Everything in the free tier. The articles themselves are never paywalled.
```
```
The Toolkit Vault: every Plan Sponsor Toolkit PDF in one post, no forms, updated in place as the library grows.
```
```
Practitioner's Notes in Monday deep dives, plus your toolkit requests jump the build queue.
```

**Founding member benefits (SINGLE field with a character cap — one compressed line, slash-separated like the old field):**

```
All paid benefits / Direct response from Ginny on contract questions, time permitting / You underwrite analysis that takes no PBM or vendor money
```

_Notes for the publisher: (1) the "articles are never paywalled" line is deliberate and load-bearing — it protects the AI-citation surface promise and tells free readers what they are NOT losing, which builds trust in the paid ask. (2) The founding "direct response from Ginny, time permitting" line is KEPT from the current live list — it is an existing promise to existing founding members and the hedge keeps it honest. The old founding "Early access to new tools and frameworks before public release" line is DROPPED: the Vault delivers new toolkits to all paid subscribers at once, and every toolkit also publishes free on rxbs.org, so "before public release" no longer describes anything real. The current free field's "updated quarterly" on the Contract Language Library is also stale (continuous updates since May 2026); the replacement fields fix it. (3) The Practitioner's Note bullet is true W29 forward; if the Vault publishes before the first Practitioner's Note ships live, keep the bullet (the next Monday delivers it). (4) Existing paid subs (Nick and the other three) signed under the old list; the swap is a net upgrade in practice (two live perks replace three that never consistently shipped), and Ginny's reply to Nick lands the same week as evidence. (5) When a genuinely new paid perk lands later, it gets added in the same sitting it goes live — same rule as the Vault._

---

## ▼ BEGIN PASTE ▼

**Last updated: [publish date]**

This post exists because a paid subscriber asked for it. The full Plan Sponsor Toolkit library, every worksheet and framework we publish, attached below in one place: no forms, nothing to request, download what you need. It updates in place as the library grows, so bookmark it.

(The library also remains free at rxbs.org/toolkit-library for anyone willing to trade an email address. This is the no-friction version, for the people who back the work.)

**Start here: the three foundational frameworks**

Contract Review Readiness Checklist. The 8 documents to pull and 15 audits to run before your PBM contract review.
**[ATTACH PDF: templates/documents/evergreen_contract_review_readiness_checklist.pdf]**

Optimize vs. Go-to-Market Decision Framework. The fork every review ends at: renegotiate the current PBM, or run an RFP.
**[ATTACH PDF: templates/documents/evergreen_optimize_vs_go_to_market_decision_framework.pdf]**

Pharmacy Benefit Review (PBR) Framework. The twice-yearly, six-category structure of ongoing plan-sponsor oversight.
**[ATTACH PDF: templates/documents/evergreen_pbr_pharmacy_benefit_review_framework.pdf]**

**Pricing and contract economics**

Channel Pricing Audit Worksheet. Surface spread across retail, mail, and specialty in your own claims.
**[ATTACH PDF: templates/documents/week_18_channel_pricing_audit_worksheet.pdf]**

GER Audit Worksheet. Test whether the generic effective rate guarantee actually held, channel by channel.
**[ATTACH PDF: templates/documents/week_28_ger_audit_worksheet.pdf]**

Definition Variance Audit. The contract definitions that quietly decide what you pay, compared against protective language.
**[ATTACH PDF: templates/documents/week_36_thursday_definition_variance_audit.pdf]**

PBM Compensation Audit. Every stream the PBM earns on your plan, and where each one hides.
**[ATTACH PDF: templates/documents/week_27_thursday_pbm_compensation_audit.pdf]**

PBM Disclosure Audit. What the PBM must disclose, what it actually disclosed, and the gap.
**[ATTACH PDF: templates/documents/week_31_thursday_pbm_disclosure_audit.pdf]**

Contract Amendment Letter. The paste-ready letter template for opening a mid-term amendment conversation.
**[ATTACH PDF: templates/documents/week_24_thursday_contract_amendment_letter.pdf]**

**Rebates and manufacturer money**

Rebate Report Audit Worksheet. Read the rebate report the way we do: definitions first, percentage second.
**[ATTACH PDF: templates/documents/week_20_thursday_rebate_report_audit_worksheet.pdf]**

Copay Card Financial Impact Calculator. The 5-step model for what copay programs actually do to plan economics.
**[ATTACH PDF: templates/documents/week_20_copay_card_financial_impact_calculator.pdf]**

**Specialty and clinical levers**

Specialty Routing Audit Worksheet. Where your specialty scripts fill, why, and what the routing costs.
**[ATTACH PDF: templates/documents/week_22_thursday_specialty_routing_audit_worksheet.pdf]**

Step Therapy Override Audit. Whether step therapy design serves the plan or the rebate.
**[ATTACH PDF: templates/documents/week_26_thursday_step_therapy_override_audit.pdf]**

Prior Authorization ROI Audit Scorecard. Score what PA actually returns against what it costs members and HR.
**[ATTACH PDF: templates/documents/week_16_pa_roi_audit_scorecard.pdf]**

Biosimilar Readiness Assessment. Six factors that decide whether biosimilar savings reach your plan.
**[ATTACH PDF: templates/documents/week_22_biosimilar_readiness_assessment.pdf]**

Drug Pipeline Watch List. The approaching therapies that will move plan spend, and the prep for each.
**[ATTACH PDF: templates/documents/week_18_drug_pipeline_watch_list.pdf]**

Carve-Out Decision Scorecard. The 10-factor evaluation for carve-out vs. carve-in.
**[ATTACH PDF: templates/documents/week_17_carve_out_decision_scorecard.pdf]**

Network Configuration Audit. What the network design costs and who chose it.
**[ATTACH PDF: templates/documents/week_29_thursday_network_configuration_audit.pdf]**

Coordination of Benefits Audit Worksheet. The claims that paid wrong because nobody checked who pays first.
**[ATTACH PDF: templates/documents/week_30_thursday_cob_audit_worksheet.pdf]**

**Oversight and reporting cadence**

Quarterly Reporting Checklist. The 15-line audit frame plus the paste-ready broker data request.
**[ATTACH PDF: templates/documents/week_21_quarterly_reporting_checklist.pdf]**

Mid-Year Claims Red Flag Checklist. Five patterns that show up by June in plans headed for a bad January.
**[ATTACH PDF: templates/documents/week_23_midyear_claims_red_flag_checklist.pdf]**

Mid-Year Guarantee Audit. Whether the pricing guarantees are on track while there is still time to act.
**[ATTACH PDF: templates/documents/week_34_thursday_midyear_guarantee_audit.pdf]**

Fiduciary Documentation Checklist. The five document categories a prudent process leaves behind.
**[ATTACH PDF: templates/documents/week_19_fiduciary_documentation_checklist.pdf]**

Fiduciary Compliance Audit. Test your committee's pharmacy process the way a plaintiff's lawyer would.
**[ATTACH PDF: templates/documents/week_32_thursday_fiduciary_compliance_audit.pdf]**

**Renewal and RFP season**

H1 Renewal Readiness Scorecard. The benchmark dashboard that says whether you negotiate or react.
**[ATTACH PDF: templates/documents/week_24_h1_renewal_readiness_scorecard.pdf]**

RFP Scoring Audit Worksheet. Score PBM bids on what actually matters, not the headline discount.
**[ATTACH PDF: templates/documents/week_25_thursday_rfp_scoring_audit_worksheet.pdf]**

Termination Clause Audit. Whether you can actually leave, and what leaving costs.
**[ATTACH PDF: templates/documents/week_35_thursday_termination_clause_audit.pdf]**

Pre-Meeting Renewal Checklist. What to have in hand before the renewal meeting starts.
**[ATTACH PDF: templates/documents/week_37_thursday_pre_meeting_renewal_checklist.pdf]**

Member Transition Audit. Change PBMs without members ever feeling the switch.
**[ATTACH PDF: templates/documents/week_33_thursday_member_transition_audit.pdf]**

New toolkits land here as they publish. If there is a worksheet you want that does not exist yet, reply and tell me: paid subscribers' requests move to the front of the build queue.

## ▲ END PASTE ▲

---

## Vault Ledger (the recall mechanism — /sync-toolkits flips rows to STALE when a PDF re-renders)

| Toolkit file | Status |
|---|---|
| evergreen_contract_review_readiness_checklist.pdf | NOT YET ATTACHED (first publish pending) |
| evergreen_optimize_vs_go_to_market_decision_framework.pdf | NOT YET ATTACHED |
| evergreen_pbr_pharmacy_benefit_review_framework.pdf | NOT YET ATTACHED |
| week_16_pa_roi_audit_scorecard.pdf | NOT YET ATTACHED |
| week_17_carve_out_decision_scorecard.pdf | NOT YET ATTACHED |
| week_18_channel_pricing_audit_worksheet.pdf | NOT YET ATTACHED |
| week_18_drug_pipeline_watch_list.pdf | NOT YET ATTACHED |
| week_19_fiduciary_documentation_checklist.pdf | NOT YET ATTACHED |
| week_20_copay_card_financial_impact_calculator.pdf | NOT YET ATTACHED |
| week_20_thursday_rebate_report_audit_worksheet.pdf | NOT YET ATTACHED |
| week_21_quarterly_reporting_checklist.pdf | NOT YET ATTACHED |
| week_22_biosimilar_readiness_assessment.pdf | NOT YET ATTACHED |
| week_22_thursday_specialty_routing_audit_worksheet.pdf | NOT YET ATTACHED |
| week_23_midyear_claims_red_flag_checklist.pdf | NOT YET ATTACHED |
| week_24_h1_renewal_readiness_scorecard.pdf | NOT YET ATTACHED |
| week_24_thursday_contract_amendment_letter.pdf | NOT YET ATTACHED |
| week_25_thursday_rfp_scoring_audit_worksheet.pdf | NOT YET ATTACHED |
| week_26_thursday_step_therapy_override_audit.pdf | NOT YET ATTACHED |
| week_27_thursday_pbm_compensation_audit.pdf | NOT YET ATTACHED |
| week_28_ger_audit_worksheet.pdf | NOT YET ATTACHED |
| week_29_thursday_network_configuration_audit.pdf | NOT YET ATTACHED |
| week_30_thursday_cob_audit_worksheet.pdf | NOT YET ATTACHED |
| week_31_thursday_pbm_disclosure_audit.pdf | NOT YET ATTACHED |
| week_32_thursday_fiduciary_compliance_audit.pdf | NOT YET ATTACHED |
| week_33_thursday_member_transition_audit.pdf | NOT YET ATTACHED |
| week_34_thursday_midyear_guarantee_audit.pdf | NOT YET ATTACHED |
| week_35_thursday_termination_clause_audit.pdf | NOT YET ATTACHED |
| week_36_thursday_definition_variance_audit.pdf | NOT YET ATTACHED |
| week_37_thursday_pre_meeting_renewal_checklist.pdf | NOT YET ATTACHED |

_Excluded by design: `broker_partner_one_pager.pdf` (BD asset, not a toolkit) and `independence_attestation.pdf` (engagement document)._

## Update Log

| Date | What changed | Live post updated? |
|---|---|---|
| _Pending: first publish_ | Initial 29-toolkit vault | ⬜ |

## Post-publish restack Note (paste-ready)

_After the Vault post is live: restack it and paste this as the restack note (the standard launch-day move). The restack embeds the locked post card, so free subscribers see the perk exists — the note IS the upgrade ad. One-time; the Vault does not join the recurring Notes rotation._

```
A paid subscriber asked why the toolkit library lived behind an email form. Fair question. So for paid subscribers, it no longer does: every Plan Sponsor Toolkit we publish, 29 worksheets and frameworks, now sits in one post with the PDFs attached. No forms, nothing to request, and it updates in place as the library grows. The library stays free at rxbs.org for anyone willing to trade an email address. The vault is the no-friction version, for the people who back the work.
```

_The "29" is fine here (a Note is ephemeral, unlike the header image). No LinkedIn or X promotion for this — a paid-perk pitch is off-register for the feed strategy, and the paid-Substack hold means we don't spend reach on it; the locked preview in the Notes feed and the next Practitioner's Note mention carry it._

## Ginny's reply to Nick (paste-ready, voice-checked)

```
Nick, you asked for exactly this, so we built it. The Toolkit Vault is now live for paid subscribers: every worksheet in one post, no forms, updated in place as the library grows. The library stays free on rxbs.org for anyone willing to trade an email address; the vault is the no-friction version for the people who back the work. Tell me which one you reach for first. That vote shapes what we build next.
```
_Send AFTER the vault post is actually live (the reply references it in the present tense)._
