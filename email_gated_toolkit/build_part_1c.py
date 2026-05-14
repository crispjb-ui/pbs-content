#!/usr/bin/env python3
"""
Build PART 1C: PLAN SPONSOR TOOLKIT PAIRINGS + WIX BUILD sections for
newsletter week files W21-W37.

Per CLAUDE.md rule (h) under "Plan Sponsor Toolkit deliverables":
every week file that ships a toolkit handout must include a PART 1C
section between PART 1B (Field Note build) and PART 2 (LinkedIn
Newsletter). PART 1C is the operational source-of-truth for the
weekly Wix work: full Wix Toolkits dataset row + build checklist +
pairing rationale.

This script is the bulk-backfill generator. It is idempotent: if PART 1C
already exists in a week file, the script skips it. Re-running after
edits to PAIRINGS regenerates only missing sections (or replaces if
--force is passed).

Pairings follow the rules in email_gated_toolkit/toolkit_dataset.md:
  - Different mechanic from the first
  - PBM Compensation as universal "zoom out" anchor for single-stream audits
  - Tier 1 toolkits pair down to Tier 2 mechanics

Run:
  cd email_gated_toolkit
  python3 build_part_1c.py
"""

from pathlib import Path
import re
import sys

REPO_ROOT = Path(__file__).resolve().parent.parent
NEWSLETTERS = REPO_ROOT / "newsletters"

# Each entry: (week, file_stem, [toolkit dicts])
# Toolkit dict keys: slot (Monday Deep Dive | Thursday Field Note Handout),
#   name, slug, pdf_filename, mechanic_phrase, pillar,
#   second_name, second_slug, second_pdf_filename, second_blurb,
#   field_note_title, field_note_url_placeholder, rationale
PAIRINGS = {
    21: {
        "file": "week_21_quarterly_reporting.md",
        "toolkits": [
            {
                "slot": "Monday Deep Dive",
                "name": "Quarterly Reporting Checklist",
                "slug": "quarterly-reporting",
                "pdf_filename": "week_21_quarterly_reporting_checklist.pdf",
                "mechanic_phrase": "15-line audit framework",
                "pillar": "PBM Contract Insights",
                "second_name": "PBM Compensation Audit Worksheet",
                "second_pdf_filename": "week_27_thursday_pbm_compensation_audit.pdf",
                "second_blurb": "Quarterly Reporting names what to audit on the report your PBM sends. PBM Compensation names where the money goes that does not always show up on the report. The five compensation streams (spread, rebate retention, admin fees, manufacturer-direct, owned-pharmacy margin) are what the Quarterly Reporting framework checks against. Together they pair as the two halves of one renewal-leverage record.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBM Compensation is the universal zoom-out anchor for any single-stream audit framework. Channel Pricing Field Note is the strongest published audit-themed Field Note available for Email 3.",
            }
        ],
    },
    22: {
        "file": "week_22_biosimilar_strategy.md",
        "toolkits": [
            {
                "slot": "Monday Deep Dive",
                "name": "Biosimilar Readiness Assessment",
                "slug": "biosimilar-readiness",
                "pdf_filename": "week_22_biosimilar_readiness_assessment.pdf",
                "mechanic_phrase": "biosimilar adoption economics",
                "pillar": "Clinical Pharmacy Perspectives",
                "second_name": "PBM Compensation Audit Worksheet",
                "second_pdf_filename": "week_27_thursday_pbm_compensation_audit.pdf",
                "second_blurb": "Biosimilar adoption rates are suppressed by rebate-retention economics on the originator drug. Rebate retention is one of five PBM compensation streams. This worksheet walks through all five and the disclosure-gap framework that surfaces whether your contract financially incentivizes the PBM to delay biosimilar conversion. The biosimilar question is downstream of the compensation question.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBM Compensation anchors the rebate-retention thread that drives biosimilar suppression. Channel Pricing Field Note carries the same audit-framework posture.",
            },
            {
                "slot": "Thursday Field Note Handout",
                "name": "Specialty Routing Audit Worksheet",
                "slug": "specialty-routing",
                "pdf_filename": "week_22_thursday_specialty_routing_audit_worksheet.pdf",
                "mechanic_phrase": "specialty fill routing",
                "pillar": "PBM Contract Insights",
                "second_name": "PBM Compensation Audit Worksheet",
                "second_pdf_filename": "week_27_thursday_pbm_compensation_audit.pdf",
                "second_blurb": "Specialty routing produces one of the five PBM compensation streams (owned-pharmacy margin). This worksheet maps the other four (spread, rebate retention, admin fees, manufacturer-direct) and walks through the three audit passes to identify which mechanisms apply to your contract. Specialty routing alone is one revenue stream; PBM Compensation is the full map.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBM Compensation universal anchor. Channel Pricing Field Note is the structurally similar revenue-stream audit; reader continues in the same analytical posture.",
            },
        ],
    },
    23: {
        "file": "week_23_mid_year_claims.md",
        "toolkits": [
            {
                "slot": "Monday Deep Dive",
                "name": "Mid-Year Claims Red Flag Checklist",
                "slug": "midyear-claims-red-flag",
                "pdf_filename": "week_23_midyear_claims_red_flag_checklist.pdf",
                "mechanic_phrase": "claims-data pattern audit",
                "pillar": "Self-Funded Employer Guidance",
                "second_name": "Quarterly Reporting Checklist",
                "second_pdf_filename": "week_21_quarterly_reporting_checklist.pdf",
                "second_blurb": "The Red Flag Checklist surfaces patterns in your claims data. The Quarterly Reporting Checklist audits whether the PBM's quarterly report shows those patterns or buries them. Five patterns to look for in claims data; fifteen lines to audit on the report that should reflect them. Together they pair as cause and disclosure-trace.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "Quarterly Reporting is the natural operational follow-on (data audit then reporting audit). Channel Pricing Field Note covers the most common Red Flag pattern.",
            }
        ],
    },
    24: {
        "file": "week_24_h1_h2_review.md",
        "toolkits": [
            {
                "slot": "Monday Deep Dive",
                "name": "H1 Renewal Readiness Scorecard",
                "slug": "h1-renewal-readiness",
                "pdf_filename": "week_24_h1_renewal_readiness_scorecard.pdf",
                "mechanic_phrase": "five mid-year metrics",
                "pillar": "Self-Funded Employer Guidance",
                "second_name": "Pharmacy Benefit Review (PBR) Framework",
                "second_pdf_filename": "evergreen_pbr_pharmacy_benefit_review_framework.pdf",
                "second_blurb": "The H1 Scorecard is the five-metric mid-year snapshot. The PBR Framework is the twice-yearly six-category comprehensive audit PBS runs for clients. Run the H1 Scorecard in July to surface the metrics that matter; run the full PBR in mid-year to produce the documentation that goes into the renewal cycle. Together they pair as the lean check and the thorough audit.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "Tier 1 evergreen PBR Framework is the natural deeper companion to a Tier 2 scorecard. Channel Pricing Field Note covers a renewal-relevant audit.",
            },
            {
                "slot": "Thursday Field Note Handout",
                "name": "Contract Amendment Letter Template",
                "slug": "contract-amendment-letter",
                "pdf_filename": "week_24_thursday_contract_amendment_letter.pdf",
                "mechanic_phrase": "mid-year amendment notice",
                "pillar": "PBM Contract Insights",
                "second_name": "Quarterly Reporting Checklist",
                "second_pdf_filename": "week_21_quarterly_reporting_checklist.pdf",
                "second_blurb": "The Amendment Letter Template is what you send when an H1 finding meets the amendment trigger. The Quarterly Reporting Checklist is what produces the H1 finding in the first place. The 15-line audit framework names the gap; the amendment letter documents the response. Together they pair as audit then ask.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "Quarterly Reporting is the natural prerequisite that surfaces the gap the Amendment Letter responds to. Channel Pricing Field Note is the structurally similar audit-framework example.",
            },
        ],
    },
    25: {
        "file": "week_25_renewal_countdown.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "RFP Scoring Methodology Audit Worksheet",
                "slug": "rfp-scoring-audit",
                "pdf_filename": "week_25_thursday_rfp_scoring_audit_worksheet.pdf",
                "mechanic_phrase": "RFP scoring design",
                "pillar": "PBM Contract Insights",
                "second_name": "Optimize Existing vs Go-to-Market Decision Framework",
                "second_pdf_filename": "evergreen_optimize_vs_go_to_market_decision_framework.pdf",
                "second_blurb": "The RFP Scoring Audit only matters if go-to-market is the right decision. The Optimize vs Go-to-Market Framework is the three-variable decision tree that produces the recommendation in the first place. About 70% of contract reviews end in 'optimize existing,' which means the RFP path is the wrong path for most plans. Together they pair as decision then design.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "Optimize vs Go-to-Market is the natural upstream decision Tier 1 framework. Channel Pricing Field Note demonstrates the kind of audit finding that often supports 'optimize' over 'RFP.'",
            }
        ],
    },
    26: {
        "file": "week_26_formulary_management.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "Step Therapy Override Audit Worksheet",
                "slug": "step-therapy-override",
                "pdf_filename": "week_26_thursday_step_therapy_override_audit.pdf",
                "mechanic_phrase": "override workflow audit",
                "pillar": "Clinical Pharmacy Perspectives",
                "second_name": "PBM Compensation Audit Worksheet",
                "second_pdf_filename": "week_27_thursday_pbm_compensation_audit.pdf",
                "second_blurb": "Step therapy override approval rates are often driven by rebate-retention economics on the step-1 drug, not clinical criteria alone. Rebate retention is one of five PBM compensation streams. This worksheet maps all five and the disclosure-gap framework that surfaces whether your override workflow is compensation-driven or clinically-driven. The clinical question is often downstream of the contract question.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBM Compensation anchors the rebate-retention thread driving step therapy decisions. Channel Pricing Field Note carries the same audit posture.",
            }
        ],
    },
    27: {
        "file": "week_27_pbm_evaluation.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "PBM Compensation Audit Worksheet",
                "slug": "pbm-compensation",
                "pdf_filename": "week_27_thursday_pbm_compensation_audit.pdf",
                "mechanic_phrase": "five-stream compensation map",
                "pillar": "Transparency & Industry Education",
                "second_name": "Quarterly Reporting Checklist",
                "second_pdf_filename": "week_21_quarterly_reporting_checklist.pdf",
                "second_blurb": "PBM Compensation names where the money goes. Quarterly Reporting audits whether the PBM's report shows it. The five compensation streams (spread, rebate retention, admin fees, manufacturer-direct, owned-pharmacy margin) are what the 15-line Quarterly Reporting audit checks against. Together they pair as identification then disclosure-trace, which is the two halves of any renewal-leverage finding.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "Quarterly Reporting is the operational disclosure-trace partner to PBM Compensation. Channel Pricing Field Note is a worked example of one compensation stream audited in detail.",
            }
        ],
    },
    28: {
        "file": "week_28_network_design.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "Generic Effective Rate (GER) Audit Worksheet",
                "slug": "ger-audit",
                "pdf_filename": "week_28_thursday_ger_audit_worksheet.pdf",
                "mechanic_phrase": "GER variance audit",
                "pillar": "PBM Contract Insights",
                "second_name": "PBM Compensation Audit Worksheet",
                "second_pdf_filename": "week_27_thursday_pbm_compensation_audit.pdf",
                "second_blurb": "GER is one specific contract guarantee. PBM Compensation is the full map of how the PBM is paid (including the streams that distort how GER is calculated). The five streams (spread, rebate retention, admin fees, manufacturer-direct, owned-pharmacy margin) explain why GER variance is rarely a math error and almost always a methodology design. Together they pair as one guarantee and the full economics that shape it.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBM Compensation universal anchor for single-mechanic audits. Channel Pricing Field Note covers a similar single-mechanic audit framework.",
            }
        ],
    },
    29: {
        "file": "week_29_rebate_economics.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "Pharmacy Network Configuration Audit Worksheet",
                "slug": "network-configuration-audit",
                "pdf_filename": "week_29_thursday_network_configuration_audit.pdf",
                "mechanic_phrase": "network design audit",
                "pillar": "PBM Contract Insights",
                "second_name": "PBM Compensation Audit Worksheet",
                "second_pdf_filename": "week_27_thursday_pbm_compensation_audit.pdf",
                "second_blurb": "Network configuration produces one of the five PBM compensation streams (owned-pharmacy margin when mandatory mail or PBM-affiliated specialty is in play). PBM Compensation maps the other four and the disclosure-gap framework that becomes your renewal-leverage item. Network design is one revenue lever; PBM Compensation is the full map.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBM Compensation universal anchor. Channel Pricing Field Note explicitly addresses the retail/mail/specialty channel split that network design controls.",
            }
        ],
    },
    30: {
        "file": "week_30_site_of_care.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "Coordination of Benefits (COB) Audit Worksheet",
                "slug": "cob-audit",
                "pdf_filename": "week_30_thursday_cob_audit_worksheet.pdf",
                "mechanic_phrase": "COB claim-flag audit",
                "pillar": "Self-Funded Employer Guidance",
                "second_name": "PBM Compensation Audit Worksheet",
                "second_pdf_filename": "week_27_thursday_pbm_compensation_audit.pdf",
                "second_blurb": "COB flagging at the claim level determines whether copay-assistance dollars stack onto your plan's out-of-pocket maximums or stay separate. The economics of that flag are entirely about the rebate-retention and manufacturer-direct streams in your PBM compensation. This worksheet maps all five compensation streams and the disclosure-gap framework that surfaces which mechanism your COB workflow is silently optimized for.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBM Compensation universal anchor (COB ties to rebate-retention and manufacturer-direct streams). Channel Pricing Field Note carries the same audit posture.",
            }
        ],
    },
    31: {
        "file": "week_31_pbm_rfp.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "PBM Disclosure Audit Worksheet",
                "slug": "pbm-disclosure-audit",
                "pdf_filename": "week_31_thursday_pbm_disclosure_audit.pdf",
                "mechanic_phrase": "disclosure obligation audit",
                "pillar": "Transparency & Industry Education",
                "second_name": "PBM Compensation Audit Worksheet",
                "second_pdf_filename": "week_27_thursday_pbm_compensation_audit.pdf",
                "second_blurb": "Disclosure obligations are the contractual mechanism for surfacing compensation streams the PBM otherwise does not name. PBM Compensation maps the five streams; PBM Disclosure audits whether the contract requires the PBM to disclose each. Together they pair as the substance (what the PBM is paid) and the form (how the contract requires it disclosed). The gap between the two is the renewal-leverage item.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBM Compensation is the natural substantive partner to a disclosure-obligation audit. Channel Pricing Field Note covers the kind of finding disclosure obligations should surface.",
            }
        ],
    },
    32: {
        "file": "week_32_clinical_program_roi.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "Fiduciary Compliance Audit Worksheet",
                "slug": "fiduciary-compliance-audit",
                "pdf_filename": "week_32_thursday_fiduciary_compliance_audit.pdf",
                "mechanic_phrase": "ERISA prudent process audit",
                "pillar": "PBM Contract Insights",
                "second_name": "Pharmacy Benefit Review (PBR) Framework",
                "second_pdf_filename": "evergreen_pbr_pharmacy_benefit_review_framework.pdf",
                "second_blurb": "ERISA prudent process requires a reasonable, documented decision-making process. The PBR Framework is the twice-yearly comprehensive audit that produces that documentation across six categories of plan performance. The Fiduciary Audit names the standard; the PBR delivers the artifact. Together they pair as the legal obligation and the operational practice that satisfies it.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBR Framework Tier 1 evergreen is the documentation-producing partner to a fiduciary audit. Channel Pricing Field Note is the kind of finding that should be in the PBR write-up.",
            }
        ],
    },
    33: {
        "file": "week_33_member_communication.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "Member Transition Audit Worksheet",
                "slug": "member-transition-audit",
                "pdf_filename": "week_33_thursday_member_transition_audit.pdf",
                "mechanic_phrase": "transition disruption audit",
                "pillar": "Self-Funded Employer Guidance",
                "second_name": "PBM Compensation Audit Worksheet",
                "second_pdf_filename": "week_27_thursday_pbm_compensation_audit.pdf",
                "second_blurb": "Member-disruption events (formulary changes, network changes, PA criteria changes) are usually downstream of a compensation-stream optimization the PBM ran on the contract. PBM Compensation maps the five streams and the disclosure-gap framework that surfaces the contract-economics decisions producing the disruption. Member experience is downstream of contract economics; auditing one without the other misses the cause.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBM Compensation universal anchor (transitions trace to compensation-stream optimizations). Channel Pricing Field Note covers a similar contract-economics-driven member impact.",
            }
        ],
    },
    34: {
        "file": "week_34_specialty_management.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "Mid-Year Performance Guarantee Audit Worksheet",
                "slug": "midyear-guarantee-audit",
                "pdf_filename": "week_34_thursday_midyear_guarantee_audit.pdf",
                "mechanic_phrase": "performance guarantee mid-year audit",
                "pillar": "PBM Contract Insights",
                "second_name": "Quarterly Reporting Checklist",
                "second_pdf_filename": "week_21_quarterly_reporting_checklist.pdf",
                "second_blurb": "The Mid-Year Guarantee Audit names which guarantees to check at mid-year. The Quarterly Reporting Checklist audits whether the PBM's quarterly report shows the data those guarantees are measured against. The 15-line framework is the report-side audit; the guarantee audit is the contract-side audit. Together they pair as the two halves of a documented mid-year position.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "Quarterly Reporting is the natural disclosure-trace partner to a performance-guarantee audit. Channel Pricing Field Note covers a similar audit framework.",
            }
        ],
    },
    35: {
        "file": "week_35_renewal_negotiation.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "Termination Clause Audit Worksheet",
                "slug": "termination-clause-audit",
                "pdf_filename": "week_35_thursday_termination_clause_audit.pdf",
                "mechanic_phrase": "exit-option audit",
                "pillar": "PBM Contract Insights",
                "second_name": "Optimize Existing vs Go-to-Market Decision Framework",
                "second_pdf_filename": "evergreen_optimize_vs_go_to_market_decision_framework.pdf",
                "second_blurb": "Termination clauses determine your exit options. Exit options determine your leverage even when you have no intention of terminating. The Optimize vs Go-to-Market Framework is the three-variable decision tree where 'go to market' becomes the recommended path, and the path requires functional termination language to execute. Termination clause audit is the prerequisite; the decision framework is what you do with the leverage it creates.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "Optimize vs Go-to-Market Tier 1 evergreen is the strategic frame inside which termination leverage operates. Channel Pricing Field Note demonstrates a typical audit finding that supports the 'go to market' path.",
            }
        ],
    },
    36: {
        "file": "week_36_contract_red_flags.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "Definition Variance Audit Worksheet",
                "slug": "definition-variance-audit",
                "pdf_filename": "week_36_thursday_definition_variance_audit.pdf",
                "mechanic_phrase": "definition drift audit",
                "pillar": "PBM Contract Insights",
                "second_name": "PBM Compensation Audit Worksheet",
                "second_pdf_filename": "week_27_thursday_pbm_compensation_audit.pdf",
                "second_blurb": "Definition variance is how the PBM expands compensation streams across renewal cycles without changing visible contract language. PBM Compensation maps the five streams the definitions silently modulate (spread, rebate retention, admin fees, manufacturer-direct, owned-pharmacy margin). The definition audit names the words that drifted; the compensation audit names the dollar amounts those drifts produced. Together they pair as the mechanism and the financial impact.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBM Compensation universal anchor (definitions modulate compensation streams). Channel Pricing Field Note covers a definitions-driven audit finding.",
            }
        ],
    },
    37: {
        "file": "week_37_renewal_readiness.md",
        "toolkits": [
            {
                "slot": "Thursday Field Note Handout",
                "name": "Pre-Meeting Renewal Checklist",
                "slug": "pre-meeting-renewal-checklist",
                "pdf_filename": "week_37_thursday_pre_meeting_renewal_checklist.pdf",
                "mechanic_phrase": "renewal-meeting preparation",
                "pillar": "Self-Funded Employer Guidance",
                "second_name": "Pharmacy Benefit Review (PBR) Framework",
                "second_pdf_filename": "evergreen_pbr_pharmacy_benefit_review_framework.pdf",
                "second_blurb": "The Pre-Meeting Checklist names what to walk into the renewal meeting with. The PBR Framework is the twice-yearly comprehensive audit that produces those items. Run the PBR in mid-year and year-end; the renewal-meeting items are the natural artifact of the audit. The checklist is the conclusion; the PBR is the work that produces it.",
                "field_note_title": "What We See When We Audit Channel Pricing",
                "field_note_url_placeholder": "https://benefitblindspots.substack.com/p/[grab-from-Substack]",
                "rationale": "PBR Tier 1 evergreen is the work that produces what the checklist lists. Channel Pricing Field Note is an example renewal-leverage finding the PBR surfaces.",
            }
        ],
    },
}


PART_1C_TEMPLATE = """# PART 1C: PLAN SPONSOR TOOLKIT PAIRINGS + WIX BUILD

This section is the operational source-of-truth for the Wix work this week. {plural_intro} Companion file: `email_gated_toolkit/toolkit_dataset.md`.

---
{toolkit_blocks}"""

TOOLKIT_BLOCK_TEMPLATE = """
## Toolkit {idx} — {slot} · {name}

### Wix Toolkits dataset row

| Column | Value |
|---|---|
| `slug` | `{slug}` |
| `name` | `{name}` |
| `pdf_url` | `[fill after Wix Media upload]` |
| `mechanic_phrase` | `{mechanic_phrase}` |
| `pillar` | `{pillar}` |
| `second_toolkit_name` | `{second_name}` |
| `second_toolkit_pdf_url` | `[Wix Media URL of {second_name}]` |
| `second_toolkit_blurb` | `{second_blurb}` |
| `field_note_title` | `{field_note_title}` |
| `field_note_url` | `{field_note_url_placeholder}` |

### Wix build checklist

- [ ] Upload `templates/documents/{pdf_filename}` to Wix Media Manager
- [ ] Copy public URL → paste into `pdf_url` cell
- [ ] Confirm `second_toolkit_pdf_url` is set ({second_name} → `templates/documents/{second_pdf_filename}`)
- [ ] Wix CMS → Toolkits collection → Add Item → paste all column values above
- [ ] Verify `rxbs.org/toolkit/{slug}` renders correctly
- [ ] Submit test form with personal email → confirm Email 1 fires within 5 min with right PDF
- [ ] Confirm `field_note_url` points to a published Substack URL before the Wix row goes live

### Pairing rationale

{rationale}

---
"""


def build_section(toolkits):
    n = len(toolkits)
    if n == 1:
        t = toolkits[0]
        plural_intro = (
            f"One toolkit ships this week ({t['slot'].lower()}: {t['name']}); "
            f"it becomes a row in the Wix `Toolkits` Data Collection at "
            f"`rxbs.org/toolkit/{t['slug']}` and gets a 5-email welcome sequence "
            f"wired through the existing Wix Automation."
        )
    else:
        names = " + ".join(f"{t['slot']} {t['name']}" for t in toolkits)
        plural_intro = (
            f"{n} toolkits ship this week ({names}); each becomes a row in the "
            f"Wix `Toolkits` Data Collection at `rxbs.org/toolkit/<slug>` and "
            f"each gets a 5-email welcome sequence wired through the existing "
            f"Wix Automation."
        )

    blocks = "".join(
        TOOLKIT_BLOCK_TEMPLATE.format(idx=i + 1, **t) for i, t in enumerate(toolkits)
    )
    return PART_1C_TEMPLATE.format(plural_intro=plural_intro, toolkit_blocks=blocks)


def insert_part_1c(week_file: Path, section: str, force: bool = False) -> str:
    text = week_file.read_text()
    if "# PART 1C:" in text and not force:
        return "skipped (already present)"

    pattern = re.compile(r"\n(# PART 2: LINKEDIN NEWSLETTER[^\n]*\n)")
    m = pattern.search(text)
    if not m:
        return f"ERROR: no PART 2 marker found"

    new_text = text[: m.start()] + f"\n{section}\n" + text[m.start() + 1 :]
    week_file.write_text(new_text)
    return "inserted"


def main():
    force = "--force" in sys.argv
    for week_num in sorted(PAIRINGS.keys()):
        entry = PAIRINGS[week_num]
        week_file = NEWSLETTERS / entry["file"]
        if not week_file.exists():
            print(f"W{week_num}: ERROR — file not found: {week_file}")
            continue
        section = build_section(entry["toolkits"])
        result = insert_part_1c(week_file, section, force=force)
        n = len(entry["toolkits"])
        print(f"W{week_num} ({n} toolkit{'s' if n > 1 else ''}): {result}")


if __name__ == "__main__":
    main()
