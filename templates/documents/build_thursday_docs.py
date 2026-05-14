#!/usr/bin/env python3
"""
Build Thursday Plan Sponsor Toolkit reference documents (W22-W37).

Generates 16 HTML files matching the W18 Channel Pricing Audit Worksheet
visual system, then renders PDFs via WeasyPrint.

Each document is the Thursday companion to the same-week LinkedIn messy
infographic + Substack Field Note triad. Per CLAUDE.md "two reference
documents per week" rule (Mon integrated tool + Thu Field Note handout).

Layout: 2 pages, US Letter (8.5 x 11 in).
  Page 1: Title + intro + three audit passes
  Page 2: Proprietary-pattern callout + paste-ready data request +
          four-step action plan + footer

Run:
  cd templates/documents
  python3 build_thursday_docs.py
"""

import base64
import os
from pathlib import Path

DOCS_DIR = Path(__file__).parent
LOGO_PATH = DOCS_DIR.parent / "assets" / "pbs_logo_transparent.png"

# Embed logo as base64 data URI
with open(LOGO_PATH, "rb") as f:
    LOGO_B64 = base64.b64encode(f.read()).decode("ascii")
LOGO_DATA_URI = f"data:image/png;base64,{LOGO_B64}"


CSS = """
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

:root {
  --primary: #015880;
  --accent:  #A7E0FA;
  --gray:    #4D4D4D;
  --gray-2:  #8C8C8C;
  --rule:    #D6D6D6;
  --green:   #2F8F4E;
  --yellow:  #D9A618;
  --red:     #C0392B;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body {
  font-family: 'IBM Plex Sans', sans-serif;
  background: #2a2a2a;
  color: #1a1a1a;
  -webkit-font-smoothing: antialiased;
}
.doc-header {
  display: none;
  max-width: 8.5in;
  margin: 0 auto;
  padding: 32px 24px 16px;
  color: #e0e0e0;
  font-size: 13px;
  line-height: 1.5;
}
body.preview .doc-header { display: block; }
.doc-header h1 { font-size: 18px; font-weight: 600; margin-bottom: 6px; color: #fff; }
.doc-header code { background: #444; padding: 2px 6px; border-radius: 3px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; }

.page {
  width: 8.5in;
  height: 11in;
  margin: 24px auto;
  padding: 0.45in 0.65in 0.95in 0.65in;
  background: #FFFFFF;
  color: #1a1a1a;
  box-shadow: 0 10px 36px rgba(0,0,0,0.4);
  position: relative;
  page-break-after: always;
  break-after: page;
  overflow: hidden;
}
.page:last-child { page-break-after: auto; break-after: auto; }

.page-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary);
  margin-bottom: 14px;
}
.head-eyebrow-left {
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gray);
}
.head-logo img { height: 44px; width: auto; display: block; }

.title-block { margin-bottom: 14px; }
.title-eyebrow {
  display: block;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 6px;
}
.title {
  font-weight: 600;
  font-size: 28px;
  line-height: 1.2;
  color: var(--primary);
  margin-bottom: 4px;
}
.title em {
  font-style: italic;
  color: var(--accent);
  background: var(--primary);
  padding: 0 6px;
  border-radius: 3px;
}
.title-sub {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: var(--gray);
  margin-top: 4px;
}

.intro {
  font-size: 13px;
  line-height: 1.55;
  color: var(--gray);
  margin-bottom: 12px;
  padding: 10px 12px;
  border-left: 3px solid var(--accent);
  background: #f7fcff;
}

.section { margin-bottom: 8px; }
.section-head {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 4px;
}
.section-num {
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  font-size: 12px;
  flex-shrink: 0;
}
.section-title {
  font-weight: 600;
  font-size: 14px;
  color: var(--primary);
}
.section-body {
  font-size: 11.5px;
  line-height: 1.45;
  color: var(--gray);
  margin-left: 34px;
}
.section-body p { margin-bottom: 4px; }

.callout {
  margin: 6px 0 8px 34px;
  padding: 8px 10px;
  border-left: 3px solid var(--primary);
  background: #f3f9fb;
  font-size: 11px;
  line-height: 1.45;
  color: var(--gray);
}
.callout strong { color: var(--primary); }

.paste-block {
  margin: 4px 0 8px 0;
  padding: 10px 12px;
  background: #fafaf6;
  border: 1px dashed var(--gray-2);
  border-radius: 4px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9.5px;
  line-height: 1.45;
  color: #1a1a1a;
  white-space: pre-wrap;
}
.paste-block .paste-label {
  display: block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 9.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--primary);
  padding: 3px 8px;
  border-radius: 2px;
  margin-bottom: 6px;
  width: fit-content;
}

.action-box {
  margin: 5px 0;
  padding: 6px 10px;
  border-left: 3px solid var(--primary);
  background: #f7fcff;
}
.action-trigger {
  display: block;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: var(--primary);
  margin-bottom: 2px;
}
.action-title {
  font-weight: 600;
  font-size: 12px;
  color: var(--primary);
  margin-bottom: 2px;
}
.action-body {
  font-size: 11px;
  line-height: 1.4;
  color: var(--gray);
}

.footer {
  position: absolute;
  left: 0.65in;
  right: 0.65in;
  bottom: 0.4in;
  padding-top: 10px;
  border-top: 1px solid var(--rule);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 10px;
  color: var(--gray-2);
}
.footer .footer-brand strong { color: var(--primary); font-weight: 600; }
.page-num {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
}

@page {
  size: Letter;
  margin: 0;
}
@media print {
  html, body { background: #fff; }
  .doc-header { display: none; }
  .page { box-shadow: none; margin: 0; }
}
"""


def render_html(spec):
    """Render one document HTML from a spec dict."""
    week = spec["week"]
    slug = spec["topic_slug"]
    eyebrow = spec["eyebrow"]
    title_html = spec["title_html"]
    title_sub = spec.get("title_sub", "")
    intro = spec["intro"]
    passes = spec["passes"]   # list of (num, title, body_html)
    pattern_callout = spec["pattern_callout"]
    paste_label = spec["paste_label"]
    paste_text = spec["paste_text"]
    actions = spec["actions"]  # list of (trigger, title, body)
    footer_brand = "Benefit Blind Spots · Plan Sponsor Toolkit"
    footer_url = "rxbs.org · benefitblindspots.substack.com"

    head_eyebrow = "PLAN SPONSOR TOOLKIT"

    sections_p1 = ""
    for num, sec_title, sec_body in passes:
        sections_p1 += f"""
  <div class="section">
    <div class="section-head">
      <span class="section-num">{num:02d}</span>
      <h2 class="section-title">{sec_title}</h2>
    </div>
    <div class="section-body">
      {sec_body}
    </div>
  </div>
"""

    actions_html = ""
    for trigger, act_title, act_body in actions:
        actions_html += f"""
    <div class="action-box">
      <span class="action-trigger">{trigger}</span>
      <div class="action-title">{act_title}</div>
      <div class="action-body">{act_body}</div>
    </div>
"""

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{eyebrow} · Benefit Blind Spots</title>
  <style>{CSS}</style>
</head>
<body>

<header class="doc-header">
  <h1>Week {week} Thursday Plan Sponsor Toolkit · {eyebrow}</h1>
  <p>Plan Sponsor Toolkit reference document. Renders in the browser; export to PDF via Print or WeasyPrint. Built file: <code>{slug}.pdf</code>.</p>
</header>

<!-- ============================================================
     PAGE 1
     ============================================================ -->
<section class="page">
  <div class="page-head">
    <div class="head-eyebrow-left">{head_eyebrow}</div>
    <div class="head-logo"><img src="{LOGO_DATA_URI}" alt="PBS"></div>
  </div>

  <div class="title-block">
    <span class="title-eyebrow">{eyebrow}</span>
    <h1 class="title">{title_html}</h1>
    {f'<div class="title-sub">{title_sub}</div>' if title_sub else ''}
  </div>

  <div class="intro">
    {intro}
  </div>

  {sections_p1}

  <footer class="footer">
    <span class="footer-brand"><strong>{footer_brand}</strong> · {footer_url}</span>
    <span class="page-num">01 / 02</span>
  </footer>
</section>

<!-- ============================================================
     PAGE 2
     ============================================================ -->
<section class="page">
  <div class="page-head">
    <div class="head-eyebrow-left">{head_eyebrow}</div>
    <div class="head-logo"><img src="{LOGO_DATA_URI}" alt="PBS"></div>
  </div>

  <div class="section">
    <div class="section-head">
      <span class="section-num">04</span>
      <h2 class="section-title">The Pattern PBS Sees Most Often</h2>
    </div>
    <div class="section-body">
      <div class="callout">{pattern_callout}</div>
    </div>
  </div>

  <div class="section">
    <div class="section-head">
      <span class="section-num">05</span>
      <h2 class="section-title">Paste-Ready: Send to Your Broker or PBM</h2>
    </div>
    <div class="section-body">
      <div class="paste-block">
        <span class="paste-label">{paste_label}</span>
{paste_text}
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-head">
      <span class="section-num">06</span>
      <h2 class="section-title">This Quarter's Action Plan</h2>
    </div>
    <div class="section-body">
{actions_html}
    </div>
  </div>

  <footer class="footer">
    <span class="footer-brand"><strong>{footer_brand}</strong> · {footer_url}</span>
    <span class="page-num">02 / 02</span>
  </footer>
</section>

</body>
</html>
"""


# ============================================================================
# CONTENT SPECS — one per week
# ============================================================================

SPECS = [
    {
        "week": "EV",
        "topic_slug": "evergreen_contract_review_readiness_checklist",
        "eyebrow": "PBM Contract Review · Readiness Checklist",
        "title_html": "Before a PBM Contract Review. <em>What to Gather. What It Will Surface. Why Now.</em>",
        "title_sub": "The pre-engagement checklist for plan sponsors considering a contract review. Built from the engagement workflow PBS uses across approximately 100 PBM contract reviews annually.",
        "intro": "A PBM contract review is the first real touch point most plan sponsors have with PBS. This is the readiness checklist: what to gather before the review, what the review will surface, and the decision the review produces. Plan sponsors who run this checklist before engaging PBS (or any consultant) walk into the engagement with the right materials and a clear sense of what to expect. Plan sponsors who skip the checklist often delay the review by weeks while documents are pulled.",
        "passes": [
            (1, "Documents to pull before the review",
             "<p>The minimum document set: current PBM Services Agreement (current and any active amendments) · prior contract versions on file · current quarterly report (most recent four quarters) · current Plan Document / Summary Plan Description · stop-loss policy if pharmacy claims feed stop-loss · any prior PBM RFP or evaluation documents · any member-disruption or complaint logs from the past 12 months.</p><p>If any of these are not on file, surface that as a finding now — it tells PBS where the contract administration has gaps.</p>"),
            (2, "What the review covers (per-mechanic component map)",
             "<p>The Contract Review is the integration of every per-mechanic audit run together as a single engagement. Each component below is also available as a standalone Plan Sponsor Toolkit handout (the link points to the audit worksheet for that mechanic):</p><p><strong>Financial mechanics:</strong> Channel Pricing audit · Rebate Report audit · PBM Compensation audit (5 revenue streams) · GER and BER guarantee audit.</p><p><strong>Contract clauses:</strong> Performance Guarantee audit · Network Configuration audit · Disclosure obligations audit · Termination Clause audit · Definition Variance audit (across renewals).</p><p><strong>Workflow + member experience:</strong> Step Therapy Override audit · Specialty Routing audit · Coordination of Benefits audit · Member Transition Disruption audit.</p><p>Run independently, each per-mechanic toolkit surfaces specific gaps in roughly half a day each. Run together as a Contract Review, they produce an integrated audit, dollar-magnitude estimates per gap, and the written optimize-vs-go-to-market recommendation.</p>"),
            (3, "The decision the review produces",
             "<p>Every Contract Review ends with one of two recommendations: <strong>optimize existing</strong> (negotiate redlines, amendments, and remediation with the current PBM) or <strong>go to market</strong> (issue an RFP for a new PBM vendor).</p><p>The recommendation depends on three variables: (a) total dollar magnitude of audit findings · (b) negotiability assessment of the current PBM · (c) switching cost analysis. The Optimize Existing vs. Go-to-Market Decision Framework Toolkit walks each variable.</p><p>Whatever the recommendation, the next step is structured: optimize existing → Contract Amendment Letter Toolkit · go to market → RFP Scoring Methodology Toolkit. Either way, the next 12-18 months continue under the Pharmacy Benefit Review (PBR) twice-yearly cadence.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews annually at PBS:</strong> ~70% of reviews produce an 'optimize existing' recommendation (current PBM is responsive enough to negotiate redlines, audit findings produce meaningful remediation). ~30% produce 'go to market' (gap too large to close with current PBM, or operational fit poor enough that a new vendor is warranted). The decision sets the next 12-18 months of pharmacy benefit work — and most plans then move into ongoing twice-yearly Pharmacy Benefit Review cadence with PBS or a similar partner.",
        "paste_label": "PRE-ENGAGEMENT CHECKLIST · INTERNAL",
        "paste_text": "Pre-Contract-Review Document Checklist\n\n  Contract Documents:\n    □ Current PBM Services Agreement (executed copy)\n    □ All active amendments and addenda\n    □ Prior contract versions on file (last 2-3 renewal cycles)\n    □ Current Plan Document / Summary Plan Description\n\n  Performance Data:\n    □ Most recent four quarterly reports\n    □ H1 / H2 review documents from the past 12 months\n    □ Performance guarantee scorecards if produced\n\n  Operational Records:\n    □ Member complaint / disruption log (12 months)\n    □ Issue resolution tickets (12 months)\n    □ Account team turnover record\n\n  Adjacent Vendor Coordination:\n    □ Current stop-loss policy (pharmacy claims provisions)\n    □ Specialty pharmacy network agreements (if separate)\n    □ Any Pharmacy Benefit Manager Audit Reports\n\n  Strategic Context:\n    □ Internal benefits-committee priority document\n    □ Renewal cycle calendar (when does the contract expire?)\n    □ Recent broker correspondence on PBM performance\n\nDelivery format: PDF or shared-drive link. Confidential / for review purposes.",
        "actions": [
            ("STEP 1 · BEFORE THE REVIEW", "Pull the document set above", "Most plan sponsors find that pulling the documents alone surfaces an internal finding (e.g., 'we don't have the most recent amendment on file'). That finding is the first contract-administration gap."),
            ("STEP 2 · SCHEDULE THE REVIEW", "Schedule a 60-90 minute kickoff with PBS or your contract reviewer", "The kickoff confirms scope, timeline, and the deliverables. PBS typically delivers the contract review in 4-6 weeks from kickoff."),
            ("STEP 3 · DURING THE REVIEW", "Make the team available for follow-up questions", "PBS will request follow-up data during the review (specific claims samples, additional reports, broker context). Plan sponsors who can turn around requests in 2-3 days keep the review on schedule."),
            ("STEP 4 · AFTER THE REVIEW", "Convene the benefits committee to receive the findings + recommendation", "The deliverable is a written contract review report with audit findings, dollar magnitudes, and the optimize-or-go-to-market recommendation. The committee decides the next 12-18 months of pharmacy benefit work from this artifact."),
        ],
    },
    {
        "week": "EV",
        "topic_slug": "evergreen_optimize_vs_go_to_market_decision_framework",
        "eyebrow": "Post-Contract-Review · Decision Framework",
        "title_html": "Optimize Existing or Go to Market? <em>The Decision Framework PBS Uses After Every Contract Review.</em>",
        "title_sub": "Three variables decide whether to negotiate redlines with the current PBM or issue an RFP for a new vendor. The framework that turns audit findings into a strategic recommendation.",
        "intro": "Every PBM contract review ends with one of two recommendations: optimize the existing relationship through amendments and redlines, or go to market through an RFP. This is the framework PBS uses to make that call. Three variables decide it. The variables sit on different time horizons and require different data, but together they produce a clear strategic recommendation that the benefits committee can act on.",
        "passes": [
            (1, "Quantify the gap (dollar magnitude of audit findings)",
             "<p>For each contract-review finding, estimate the annual dollar impact: rebate-definition narrowing (% of gross rebate × annual gross rebate dollars) · GER guarantee miss × claims volume · channel-margin spread × specialty claim volume · network configuration drift × per-claim impact · performance-remediation owed × frequency.</p><p>Total the estimates. The pattern: when audit findings exceed approximately 5-7% of total annual pharmacy spend, the gap is large enough that going to market is typically worth the disruption. Below that threshold, optimizing existing usually wins.</p>"),
            (2, "Negotiability assessment of the current PBM",
             "<p>How responsive is the current PBM to amendments? Look at: prior amendment history (have they accepted redlines in the past 24 months?) · account team responsiveness on the contract review itself (did they cooperate on data requests?) · disclosure-obligation fulfillment (have they delivered required disclosures, or do they treat them as optional?) · response to mid-year notifications.</p><p>A responsive PBM with a minor-to-moderate gap = optimize existing. A non-responsive PBM with any gap = go to market regardless of dollar magnitude, because the gap will widen at every renewal.</p>"),
            (3, "Switching cost analysis",
             "<p>If go-to-market is on the table, what does the switch actually cost? Member disruption risk (formulary mapping gaps, PA grandfathering issues) · data portability constraints (can the new PBM use the old PBM's claims and PA history?) · runoff period economics (how long are you captive to outgoing PBM pricing?) · early-termination fees · implementation timeline (4-6 months minimum from RFP to go-live).</p><p>The Termination Clause Toolkit and the Member Transition Audit Toolkit feed directly into this assessment. If the current contract has weak termination provisions or weak data return obligations, switching cost is meaningfully higher.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews annually at PBS:</strong> roughly 70% optimize existing (current PBM is responsive enough to negotiate redlines, gap is closeable), 30% go to market (gap is too large or the PBM is not responsive). The 30% who go to market and execute the RFP correctly typically capture 8-15% of annual pharmacy spend in the first new-contract year. The 70% who optimize existing typically capture 3-7%.",
        "paste_label": "OPTIMIZE-VS-MARKET SCORING RUBRIC",
        "paste_text": "Variable                          Score   Notes\n  1. Annual audit-finding gap ........  $____   _________________\n     (% of total pharmacy spend) .....  ____%\n\n  2. PBM Negotiability (1-5):\n     · Prior amendment history .......  ___    Accepted redlines in past 24 mo?\n     · Data request responsiveness ...  ___    Days to fulfill review requests\n     · Disclosure fulfillment ........  ___    All 5 annual disclosures received?\n     · Account team continuity .......  ___    Turnover in past 12 months\n     SUBTOTAL (out of 20) ............  ___\n\n  3. Switching Cost Analysis:\n     · Member disruption risk (1-5) ..  ___\n     · Data portability strength (1-5)  ___    1=weak, 5=strong contract\n     · Runoff economics (1-5) ........  ___    Short = high score\n     · Early-termination fee ($) .....  $____\n\nRecommendation Logic:\n  · Audit-finding gap < 3% of pharmacy spend → optimize existing\n  · Gap 3-7% AND PBM Negotiability > 12/20 → optimize existing\n  · Gap 3-7% AND PBM Negotiability < 12/20 → go to market\n  · Gap > 7% → go to market regardless of negotiability\n  · Switching cost > 50% of expected first-year savings → reconsider\n\nFinal Recommendation: ____________________________\nWritten rationale: ____________________________________________\n_________________________________________________________________",
        "actions": [
            ("STEP 1 · APPLY THE RUBRIC", "Score the three variables using the rubric above", "Use audit findings from the contract review (or run them yourself with the per-mechanic Toolkits). Document the rationale for each score."),
            ("STEP 2 · IF OPTIMIZE EXISTING", "Schedule the amendment process", "Use the Contract Amendment Letter Template Toolkit (W24) for each redline. Mid-year amendment window beats year-end. Document every PBM response in writing."),
            ("STEP 3 · IF GO TO MARKET", "Schedule the RFP process", "Use the RFP Scoring Methodology Audit Worksheet (W25) before drafting the RFP. The 4-6 month timeline runs from RFP launch to new-PBM go-live; backplan from your desired effective date."),
            ("STEP 4 · EITHER WAY", "Schedule the next Pharmacy Benefit Review", "Use the PBR Twice-Yearly Framework Toolkit. Mid-year and year-end PBRs become the ongoing oversight cadence regardless of which decision the committee makes."),
        ],
    },
    {
        "week": "EV",
        "topic_slug": "evergreen_pbr_pharmacy_benefit_review_framework",
        "eyebrow": "Pharmacy Benefit Review · Twice-Yearly Framework",
        "title_html": "Pharmacy Benefit Review. <em>Twice a Year. Six Categories. Twenty Audit Items.</em>",
        "title_sub": "The framework PBS uses on the semi-annual PBR engagement, formatted as a self-service audit checklist for plan sponsors who want to run it internally.",
        "intro": "This is the self-service version of the Pharmacy Benefit Review (PBR), a twice-yearly comprehensive audit PBS runs for clients across six categories of pharmacy benefit performance. Each category has three to four audit items. Run the full framework in mid-year (June-July) and again at year-end (November-December) to surface the patterns that decide your renewal position. PBS clients receive a written PBR report; plan sponsors running this internally produce the same artifact.",
        "passes": [
            (1, "Run the six-category audit",
             "<p>Each PBR audit covers six categories with the prompts below. Score each item 1-5; the rubric and the dollar magnitude live in the per-mechanic Toolkit handouts (Channel Pricing, Rebate Audit, GER Audit, etc.).</p><p><strong>1. Financial Performance:</strong> PMPM trend vs. budget · GER vs. guarantee · BER vs. guarantee · Rebate per claim trend.</p><p><strong>2. Contract Compliance:</strong> Performance guarantee misses · Mid-year notification record · Reporting clause delivery · Disclosure obligation fulfillment.</p><p><strong>3. Clinical Programs:</strong> PA approval/denial rate · Step therapy override rate · Specialty utilization trend · Clinical-program-claimed savings audit.</p>"),
            (2, "Continue the audit (Categories 4-6)",
             "<p><strong>4. Member Experience:</strong> Member-disruption events documented · Continuity-of-care window honored · Transition supply provisioned · Member-cost-share trend.</p><p><strong>5. Vendor Management:</strong> Account team responsiveness · Issue resolution timeliness · Quarterly review quality · Account team turnover.</p><p><strong>6. Strategic Position:</strong> Network configuration drift · Definition variance across renewals · Termination clause leverage · Renewal readiness scorecard total.</p>"),
            (3, "Score and interpret",
             "<p>Total score across all 20 items: 20-100. Interpretation:</p><p><strong>Below 50:</strong> meaningful unrealized cost containment + member experience risk; bring full audit findings to the next renewal cycle.<br><strong>50-70:</strong> mixed results, focus the next 90 days on the lowest-scoring category.<br><strong>Above 70:</strong> strong PBM oversight position; document the wins, refresh the audit at the next half-year review, and shift focus to renewal readiness.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> the plan sponsors who run a structured semi-annual PBR (with this framework or one like it) walk into renewal with documented gaps that move terms. The plan sponsors who do not run the audit walk into renewal with the PBM's summary report as their only reference and inherit the PBM's frame.",
        "paste_label": "PBR DATA REQUEST · TO PBM + BROKER",
        "paste_text": "Subject: Semi-Annual Pharmacy Benefit Review — data package\n\nPlease provide the following data covering the past six months:\n\n  Financial Performance:\n    1. PMPM trend by month, with budget and prior-year comparison\n    2. GER and BER quarterly performance vs. contracted guarantee\n    3. Rebate per brand claim trend by channel (retail/mail/specialty)\n\n  Contract Compliance:\n    4. Performance guarantee scorecard for the period\n    5. List of every annual disclosure delivered (rebate attestation,\n       conflict-of-interest, data-partnership, audit-results, material-\n       change notice)\n    6. Mid-year written-notification record for any miss\n\n  Clinical Programs:\n    7. PA approval/denial rate by therapeutic class\n    8. Step therapy override rate by class\n    9. Clinical-program savings methodology (one sample calculation per\n       reported program)\n\n  Member Experience:\n   10. Member-disruption events documented (formulary changes, network\n       changes, PA criteria changes) with continuity-of-care delivery\n       confirmation\n   11. Transition supply provisioning record\n\n  Vendor Management:\n   12. Issue resolution timeliness log\n   13. Account team continuity (any turnover)\n\n  Strategic Position:\n   14. Current pharmacy network membership list and 12-month exclusion\n       log\n   15. Termination, renewal, and amendment clause status\n\nDelivery requested within 21 business days. Output goes into the Plan\nSponsor's semi-annual Pharmacy Benefit Review.",
        "actions": [
            ("MID-YEAR PBR · JUNE-JULY", "Pull the six-category data + score the framework", "Use this checklist alongside the per-mechanic Toolkit handouts. The Channel Pricing, Rebate Audit, GER Audit, PBM Compensation, and Specialty Routing Toolkits all feed into the financial performance and contract compliance categories."),
            ("YEAR-END PBR · NOVEMBER-DECEMBER", "Re-run the framework + write the year-over-year comparison", "Year-end PBR is the most useful single document a plan sponsor can take into a renewal cycle. The Y-over-Y comparison shows the trajectory PBM definitions and economics moved over the year — the silent drift the contract reads through."),
            ("BRING THE PBR TO RENEWAL", "Use the audit findings as the renewal redline agenda", "Plan sponsors with documented PBR audit findings negotiate different renewal terms than plan sponsors who walk in with the PBM's summary report. The PBR is the counter-narrative."),
            ("OPTIONAL · CONTACT PBS", "If you'd like PBS to run the PBR for your plan", "team@rxbs.org · We deliver a written PBR report with PBS-led data analysis, contract-language redlines, and the negotiation agenda for the next renewal cycle. Twice a year, scoped to your plan."),
        ],
    },
    {
        "week": 20,
        "topic_slug": "week_20_thursday_rebate_report_audit_worksheet",
        "eyebrow": "Rebate Report · Audit Worksheet",
        "title_html": "Five Rebate Terms. Five Definitions the PBM Wrote. <em>Four Sit Outside the Pass-Through Clause.</em>",
        "title_sub": "Three audit passes. One rebate report. The gap is rarely the contracted percentage.",
        "intro": "This worksheet decodes the five rebate terms that determine what your plan actually receives versus what the report says: gross rebate, net pass-through rebate, price protection rebate, administrative fee, and manufacturer drug education / data licensing payment. The audit runs in half a day and surfaces the gap between gross rebate and net pass-through that rarely matches the contracted percentage.",
        "passes": [
            (1, "Gross rebate vs. net rebate",
             "<p>Open the rebate report. Find total gross rebate dollars and total net rebate dollars (the amount that flowed to the plan). Calculate the gap.</p><p>Then go to your contract and find the rebate pass-through percentage clause. Multiply gross rebate by the contracted pass-through percentage. Compare to actual net rebate.</p><p>If actual net rebate is below the contracted percentage, the contract typically requires reconciliation. Many PBMs do not flag this on their own.</p>"),
            (2, "Rebate categorization audit",
             "<p>The plan sponsor's pass-through clause applies to \"rebates\" as the contract defines them. PBM rebate aggregators have a financial interest in classifying manufacturer payments as something other than rebates: administrative fees, data licensing fees, drug education payments, manufacturer support payments. Each of those categories typically sits outside the rebate pass-through clause.</p><p>Pull the report's category breakdown. Total all manufacturer-funded categories. Calculate what percentage are classified as \"rebate\" vs. \"fee\" vs. \"other.\" If the fee-and-other share is climbing year-over-year, the plan is losing pass-through dollars to category reclassification.</p>"),
            (3, "Rebate-per-claim trend",
             "<p>Calculate rebate per brand claim by dividing total net rebate by total brand claims for the period. Track this quarterly.</p><p>Declining rebate-per-claim with rising specialty share usually signals manufacturer payments shifting into excluded categories. Rising rebate-per-claim with rising gross spend may mean the rebate is keeping pace with cost rather than driving net cost down. Both patterns deserve a follow-up question to the PBM.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> the gap between gross rebate and net rebate is rarely the contracted pass-through percentage. It is usually a few percentage points lower, and the difference is captured in administrative-fee or data-licensing categories that the PBM classifies outside the rebate definition.",
        "paste_label": "DATA REQUEST · TO YOUR PBM ACCOUNT TEAM",
        "paste_text": "Subject: Rebate report audit — last four quarters\n\nPlease provide the following rebate-flow data:\n\n  1. Total gross manufacturer rebate dollars by quarter, broken out by\n     therapeutic category and by drug name (top 50).\n  2. Total net pass-through rebate dollars actually paid to the plan, by\n     quarter, with the pass-through percentage applied.\n  3. Manufacturer-payment category breakdown for each quarter:\n        a. Rebate (per pass-through clause)\n        b. Administrative fee\n        c. Data licensing fee\n        d. Drug education / programming payment\n        e. Price protection rebate\n        f. Other manufacturer payments (specify)\n  4. Year-over-year comparison of category-share for items a-f above.\n  5. Rebate per brand claim by quarter, with channel breakdown\n     (retail / mail / specialty).\n\nThis data is for internal contract performance audit. Delivery requested\nwithin 14 business days.",
        "actions": [
            ("STEP 1 · THIS WEEK", "Pull last four quarterly rebate reports", "Run the three comparison passes. Document the per-quarter gap in dollars."),
            ("STEP 2 · WEEK 2", "Open the contract's rebate definition + pass-through clause", "Note which categories are explicitly included or excluded. Map your H1 fee-share to those clauses."),
            ("STEP 3 · WEEK 3", "Bring the gap to your broker", "Audit history is the strongest renewal-negotiation asset a plan sponsor has. Document the variance with dates and dollar magnitude."),
            ("STEP 4 · AT RENEWAL", "Negotiate the rebate definition explicitly", "Force the contract to include manufacturer-direct payments in the pass-through definition, not exclude them. This is the single most consequential redline in the rebate clauses."),
        ],
    },
    {
        "week": 22,
        "topic_slug": "week_22_thursday_specialty_routing_audit_worksheet",
        "eyebrow": "Specialty Routing · Audit Worksheet",
        "title_html": "Five Clauses Decide Where Your Specialty Drugs Fill. <em>The PBM Owns Four.</em>",
        "title_sub": "Three audit passes. One contract clause set. One routing pattern.",
        "intro": "This worksheet walks plan sponsors through a three-pass audit of specialty drug routing. Each pass uses the five contract terms that govern where specialty drugs are filled: specialty pharmacy designation, limited distribution drug access, exclusive specialty arrangement, specialty channel pass-through, and specialty performance guarantee. Half a day of work surfaces the routing pattern your contract design does not predict.",
        "passes": [
            (1, "Pull the by-pharmacy specialty fill breakdown",
             "<p>Open your most recent quarterly report. Find the specialty drug section. Push for a drug-by-pharmacy breakdown: for each specialty drug filled in the quarter, where did it fill, by pharmacy NPI or pharmacy name?</p><p>If the breakdown is not in the report, request it. The PBM has the data; the report format is a contract negotiation.</p>"),
            (2, "Classify each fill by pharmacy ownership",
             "<p>For each specialty fill, classify the dispensing pharmacy: PBM-owned (or PBM-affiliated), independent specialty pharmacy in the network, or limited distribution drug pharmacy (manufacturer-restricted).</p><p>Calculate the share by ownership category. Compare to the network design described in your contract.</p>"),
            (3, "Compare the routing pattern to the contract clauses",
             "<p>Open your contract. Find the specialty routing language: any clause naming the PBM-owned pharmacy as preferred, exclusive, or default; any specialty drug list attachment; any prior-authorization or step-therapy provision tied to specialty fills.</p><p>Read those clauses against the actual routing pattern. The gap is your renewal-leverage item.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> the specialty routing clause is rarely as exclusive as the routing pattern. The contract preserves member choice on paper; the operational workflow steers most fills to the PBM-owned channel regardless. The leverage is in the prior-authorization and step-therapy clauses, not in the network-membership clause.",
        "paste_label": "DATA REQUEST · TO YOUR PBM ACCOUNT TEAM",
        "paste_text": "Subject: Specialty drug fill breakdown — last four quarters\n\nPlease provide:\n  1. A drug-by-pharmacy specialty fill breakdown for the last four quarters,\n     including pharmacy NPI, pharmacy name, drug name, fill count, and total\n     plan-paid dollars per drug per pharmacy.\n  2. The current Specialty Drug List (Attachment C or equivalent), including\n     any updates since contract effective date.\n  3. The Limited Distribution Drug access list (Schedule LDD-1 or equivalent).\n  4. The PA / step therapy workflow design for our top 10 specialty drugs\n     by spend.\n\nThis data is for internal contract performance audit. We expect delivery\nwithin 14 business days.",
        "actions": [
            ("STEP 1 · THIS WEEK", "Pull the four-quarter fill breakdown by pharmacy NPI", "Send the data request above. Confirm receipt and timeline. If the PBM cannot deliver within 14 business days, document the delay; that is its own audit finding."),
            ("STEP 2 · WEEK 2", "Classify ownership and calculate concentration", "Aggregate fills by ownership category. The PBM-owned share, in percentage terms, is the lead metric for the renewal conversation."),
            ("STEP 3 · WEEK 3", "Read the routing clauses against the pattern", "Highlight the specific contract language that authorizes (or fails to authorize) the routing concentration you found. The clause numbers go in the renewal redline."),
            ("STEP 4 · BEFORE THE NEXT QUARTERLY REVIEW", "Bring the audit to your broker", "Specialty routing is a recurring renewal-leverage item. Document the audit, file it, bring it to renewal."),
        ],
    },
    {
        "week": 24,
        "topic_slug": "week_24_thursday_contract_amendment_letter",
        "eyebrow": "Mid-Year Amendment · Letter Template",
        "title_html": "Five Clauses Govern Mid-Year Amendments. <em>Most Plan Sponsors Never Invoke Them.</em>",
        "title_sub": "Three steps. One amendment letter. Ninety-day notice window.",
        "intro": "This handout decodes the five contract clauses that govern mid-year amendments: amendment trigger language, notice period, materiality threshold, fee adjustment authority, and dispute resolution. Use it when H1 review surfaces a finding that meets the amendment trigger conditions. Most amendments cost the PBM nothing to decline; the documented response is itself the renewal-leverage record.",
        "passes": [
            (1, "Identify amendment-eligible findings from H1 review",
             "<p>Open your H1 review or most recent quarterly report. Pull every gap, miss, or anomaly. Then open your contract's amendment trigger clause. Match each finding to a trigger condition (performance guarantee miss, regulatory change, formulary change, materiality threshold).</p>"),
            (2, "Calculate the notice deadline and materiality threshold",
             "<p>Find the notice period clause. 30, 60, or 90 days written notice is typical. Find the materiality threshold (usually a 5% or greater impact on aggregate contract economics).</p><p>Calculate the deadline working backward from the desired effective date. Mid-June for Q4 effective. Late September for Q1 next year.</p>"),
            (3, "Draft the amendment letter using the decoded vocabulary",
             "<p>The amendment letter should reference: the specific contract clause being amended, the trigger condition being invoked, the proposed new language, the notice period being initiated, and the dispute resolution clause that applies if the PBM declines.</p><p>Send through your broker. Document the PBM's response in writing.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> the amendment window is rarely used by plan sponsors. Most plans wait until renewal and absorb the H1 finding for two more quarters. The amendment window costs nothing to invoke and forces the PBM into a documented response — which is itself the most valuable record you can bring to renewal six months later.",
        "paste_label": "AMENDMENT LETTER · TO PBM (VIA BROKER)",
        "paste_text": "[Date]\n[PBM Account Executive Name]\n\nRe: Notice of Proposed Mid-Term Contract Amendment under § [insert\n    amendment trigger clause number]\n\nPursuant to § [trigger clause] of the Pharmacy Benefits Management\nServices Agreement effective [date], Plan Sponsor hereby provides\nformal written notice of a proposed amendment.\n\nTrigger condition invoked: [name the H1 finding — e.g., GER guarantee\nmiss of [X%] over Q1-Q2; performance remediation language at § [Y]\napplies].\n\nProposed amendment: [name the specific clause language being changed,\nor the new clause being added].\n\nNotice period: [30 / 60 / 90] days. Effective date: [date], pursuant\nto § [notice clause].\n\nIf PBM declines this amendment, dispute resolution under § [dispute\nresolution clause] applies, and Plan Sponsor reserves the right to\ninvoke arbitration consistent with that clause.\n\nResponse requested within [10] business days.\n\nSincerely,\n[Plan Sponsor Authorized Representative]",
        "actions": [
            ("STEP 1 · THIS WEEK", "Pull H1 findings + amendment clauses", "Match findings to trigger conditions. Document the eligible amendments with date and dollar magnitude."),
            ("STEP 2 · WEEK 2", "Calculate the notice deadline", "Working backward from the desired effective date. Mid-June for Q4. Late September for Q1 next year."),
            ("STEP 3 · WEEK 3", "Draft and send the amendment letter through broker", "Use the template above. Customize for the specific finding and clause."),
            ("STEP 4 · WEEK 4-6", "Document the PBM response", "Whatever the response, file it. The documented exchange is the renewal-leverage asset."),
        ],
    },
    {
        "week": 25,
        "topic_slug": "week_25_thursday_rfp_scoring_audit_worksheet",
        "eyebrow": "RFP Scoring · Audit Worksheet",
        "title_html": "Five RFP Scoring Terms Decide the Winner. <em>The PBM Knows Your Methodology.</em>",
        "title_sub": "Three audit passes. One scoring methodology. Adjust before the RFP goes out.",
        "intro": "This handout decodes the five RFP scoring terms: weighted scoring, baseline normalization, financial vs. non-financial split, scenario pricing, and tiebreaker hierarchy. Run the three audit passes on the methodology your broker proposes BEFORE sending the RFP. The scoring methodology is the most consequential design decision in the renewal process.",
        "passes": [
            (1, "Weight the scoring categories against your priorities",
             "<p>Pull the scoring methodology your broker or consultant proposed. List the categories: financial terms, clinical programs, reporting capability, account team, technology, references. Assign weights.</p><p>Compare to your internal priority document. If financial is 70% but reporting matters most, the scoring will not surface the right winner.</p>"),
            (2, "Normalize the financial scoring to net cost equivalents",
             "<p>PBM proposals are not directly comparable: different MAC lists, rebate methodologies, fee structures. Without baseline normalization, the lowest-headline-pricing proposal can be the highest net cost contract.</p><p>Run all proposals through a single net-cost-equivalent comparison framework before scoring.</p>"),
            (3, "Build three scenarios into the financial score",
             "<p>Static pricing favors the proposal engineered for the snapshot. Build three scenarios: current claims mix, projected next-year mix (specialty drift), stress scenario (high-cost claimant cluster, biosimilar shift, formulary exclusion impact).</p><p>Score each PBM against all three. The proposal that wins static may rank third under stress.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> most RFP scoring methodologies score against headline pricing, not normalized net cost. The PBMs know this; the headline number is engineered to win the RFP, not to match what the plan will actually pay.",
        "paste_label": "WEIGHTING WORKSHEET · DISCUSS WITH YOUR BROKER",
        "paste_text": "Category                              Default     Adjusted\n  Financial Terms ........................ 70%      ___ %\n  Clinical Programs ...................... 10%      ___ %\n  Reporting Capability ................... 5%       ___ %\n  Technology Platform .................... 5%       ___ %\n  References / Account Team .............. 10%      ___ %\n                                          -------    -------\n  TOTAL .................................. 100%     100%\n\nFinancial-only sub-categories (within the Financial Terms weight):\n  Static current-mix pricing ............. ___ %\n  Projected mix (specialty drift) ........ ___ %\n  Stress scenario ........................ ___ %\n                                          -------\n  TOTAL .................................. 100%\n\nTiebreaker hierarchy (in order):\n  1. _________________________________\n  2. _________________________________\n  3. _________________________________",
        "actions": [
            ("STEP 1 · BEFORE RFP DRAFTING", "Document the internal priority list", "Convene the benefits committee. Produce a one-page priority document that ranks financial, clinical, reporting, and member-experience priorities for the renewal."),
            ("STEP 2 · DURING RFP DESIGN", "Adjust weights to match priorities", "Use the worksheet above. Push back on broker defaults that don't match priorities."),
            ("STEP 3 · DURING SCORING", "Apply baseline normalization", "Convert all PBM proposals to net-cost-equivalents before scoring financial terms."),
            ("STEP 4 · BEFORE FINALIST SELECTION", "Run scenario stress", "Score finalists against current-mix, projected-mix, and stress scenarios. The proposal that wins all three is your winner; if no proposal wins all three, the tiebreaker matters."),
        ],
    },
    {
        "week": 26,
        "topic_slug": "week_26_thursday_step_therapy_override_audit",
        "eyebrow": "Step Therapy Override · Audit Worksheet",
        "title_html": "Five Clauses Govern Step Therapy Overrides. <em>The Workflow Rarely Matches the Clause.</em>",
        "title_sub": "Three audit passes. One override clause. One operational workflow.",
        "intro": "This handout decodes the five step therapy override terms: trigger conditions, documentation burden, denial appeal timeline, prescriber attestation language, and member cost-share treatment. Run the three audit passes when override approval rates fall below 60%. That is the threshold where the workflow is gating clinically appropriate therapy more than the contract intends.",
        "passes": [
            (1, "Pull the override approval and denial rate",
             "<p>Open your most recent quarterly report. Find the prior authorization summary. Look for step-therapy-specific override numbers: total step therapy edits triggered, total override requests submitted, total approved, total denied.</p><p>If the report aggregates step therapy with general PA, request the breakout. Calculate the override approval rate.</p>"),
            (2, "Classify the denial reasons",
             "<p>For denied overrides, request the denial reason breakdown by category: insufficient documentation, prescriber attestation incomplete, clinical criteria not met, administrative timeout.</p><p>Category mix tells you what is causing denials. \"Insufficient documentation\" or \"administrative timeout\" dominance signals process failure, not clinical judgment.</p>"),
            (3, "Compare the override clause to the workflow",
             "<p>Open your contract's step therapy override clause. Note documentation burden, prescriber attestation requirements, denial appeal timeline.</p><p>Compare to the actual workflow: what does a prescriber submit, how long is the response window, who decides the appeal. Workflow more burdensome than the contract = clause vs. operations gap.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> when override approval rates fall below 60%, the workflow is gating clinically appropriate therapy more than the contract or formulary intend. The override clause is the contract; the workflow is the operations; the gap is your audit.",
        "paste_label": "DATA REQUEST · TO YOUR PBM ACCOUNT TEAM",
        "paste_text": "Subject: Step therapy override audit data — last four quarters\n\nPlease provide the following step-therapy-specific data, separately\nfrom general prior authorization:\n\n  1. Total step therapy edits triggered, by therapeutic class.\n  2. Total override requests submitted.\n  3. Total approved and total denied, with denial reason breakdown:\n        a. Insufficient documentation\n        b. Prescriber attestation incomplete\n        c. Clinical criteria not met\n        d. Administrative timeout\n        e. Other (specify).\n  4. Average response time from override request to determination.\n  5. Prescriber abandonment rate (overrides started but not completed).\n  6. Member therapy abandonment rate following step therapy denial.\n\nThis data is for internal workflow audit. Delivery requested within\n14 business days.",
        "actions": [
            ("STEP 1 · THIS WEEK", "Pull the override approval/denial breakdown", "Send the data request. The denial-reason category mix is the lead diagnostic."),
            ("STEP 2 · WEEK 2", "Calculate override approval rate", "If below 60%, surface for renewal. If denial reasons skew toward documentation/timeout, the issue is process not clinical."),
            ("STEP 3 · WEEK 3", "Read the override clause against the workflow", "Document specific gaps. Send written gap notification to the PBM."),
            ("STEP 4 · BEFORE NEXT QUARTERLY REVIEW", "Bring the audit to your broker", "Override workflow is a renewal-leverage item that compounds quarter over quarter."),
        ],
    },
    {
        "week": 27,
        "topic_slug": "week_27_thursday_pbm_compensation_audit",
        "eyebrow": "PBM Compensation · Audit Worksheet",
        "title_html": "Five Revenue Streams Flow from Your Plan to Your PBM. <em>Most Plan Sponsors Track One.</em>",
        "title_sub": "Three audit passes. Five compensation mechanisms. One contract.",
        "intro": "This handout decodes the five PBM compensation mechanisms that flow from your plan to your PBM: spread pricing, rebate retention, administrative fees, manufacturer-direct payments, and PBM-owned-pharmacy margin. Most plan sponsors only track the administrative fee, the smallest of the five streams. The four others are where aggregate compensation actually sits.",
        "passes": [
            (1, "Identify which mechanisms your contract authorizes",
             "<p>Open your contract. For each of the five mechanisms, find the clause that authorizes (or excludes) it. Spread pricing → pricing methodology clause. Rebate retention → rebate definition + pass-through clauses. Administrative fees → fee schedule. Manufacturer-direct → rebate exclusions. Owned-pharmacy margin → network and routing clauses.</p><p>Classify each: explicitly authorized, implicitly authorized (silent), or excluded.</p>"),
            (2, "Estimate the dollar magnitude of each mechanism",
             "<p>For each authorized mechanism, estimate annual dollar magnitude on your plan. Spread = per-claim margin × claim volume. Rebate retention = gross rebate × retention percentage. Administrative fees = per-claim or PEPM × volume. Manufacturer-direct = typically undisclosed (interrogate). Owned-pharmacy margin = specialty routing × per-fill margin.</p>"),
            (3, "Map the disclosure obligations",
             "<p>For each mechanism, find the contract's disclosure obligation: what reporting must the PBM provide, on what cadence, with what level of detail. Some mechanisms are disclosed quarterly; others are typically not disclosed at all.</p><p>The disclosure gap is the renewal-leverage item.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> aggregate PBM compensation typically exceeds the headline administrative fee by a meaningful multiple. The other four mechanisms are where the rest sits. Plan sponsors who only track administrative fees see a small fraction of total PBM compensation.",
        "paste_label": "COMPENSATION AUDIT WORKSHEET",
        "paste_text": "Mechanism                       Authorized?     Disclosed?     Est. $/yr\n  1. Spread Pricing ............ Y / N / Silent  Y / N / Partial   $______\n  2. Rebate Retention .......... Y / N / Silent  Y / N / Partial   $______\n  3. Administrative Fees ....... Y / N / Silent  Y / N / Partial   $______\n  4. Manufacturer-Direct ....... Y / N / Silent  Y / N / Partial   $______\n  5. Owned-Pharmacy Margin ..... Y / N / Silent  Y / N / Partial   $______\n                                                              -----------\n  Total Estimated Annual Compensation ..........................   $______\n\n  Headline Administrative Fee (only) ...........................   $______\n  Multiple (Total / Headline) ..................................   _____x\n\nDisclosure gaps to address at renewal:\n  ___________________________________________\n  ___________________________________________",
        "actions": [
            ("STEP 1 · THIS WEEK", "Map authorization for each mechanism", "Read the relevant contract clauses. Classify each mechanism as authorized, silent, or excluded."),
            ("STEP 2 · WEEK 2", "Estimate dollar magnitude per mechanism", "Use claims data and the worksheet above. Compare total to the headline fee."),
            ("STEP 3 · WEEK 3", "Document disclosure gaps", "Which mechanisms have no required disclosure? Those are the renewal-leverage items."),
            ("STEP 4 · AT RENEWAL", "Negotiate disclosure obligations clause-by-clause", "A PBM confident in its compensation structure welcomes disclosure. Resistance is informative."),
        ],
    },
    {
        "week": 28,
        "topic_slug": "week_28_thursday_ger_audit_worksheet",
        "eyebrow": "Generic Effective Rate · Audit Worksheet",
        "title_html": "Five GER Terms Decide Whether Your Guarantee Applies. <em>The PBM Controls Four.</em>",
        "title_sub": "Three audit passes. One GER methodology. One actual performance number.",
        "intro": "This handout decodes the five GER terms: calculation methodology, exclusion list, multi-source vs. single-source treatment, MAC list update frequency, and remediation language. The GER number on the quarterly report is rarely calculated against the same methodology the contract guarantee names. The variance is rarely flagged by the PBM. The remediation is in the contract; the trigger is the audit.",
        "passes": [
            (1, "Pull the actual GER from your claims data",
             "<p>Open your most recent quarterly report. Find the GER calculation. Verify the formula matches the contract's GER methodology clause: usually total generic ingredient cost as a percentage discount off AWP, with specific exclusions named.</p><p>If the report's GER is calculated differently than the contract methodology, the reported number is not the contracted number.</p>"),
            (2, "Compare actual GER to the guarantee",
             "<p>Your contract names a GER guarantee. Calculate the gap between actual GER and guarantee. If actual is below guarantee, the contract typically requires remediation. Many PBMs do not flag GER misses on their own.</p>"),
            (3, "Audit the exclusion list against your top 25 generic claims",
             "<p>Open the GER methodology clause and find the exclusion list. Compare to your top 25 generic claims. If high-volume generics are sitting in the exclusion list, the contracted GER guarantee applies to a smaller portion of your actual generic spend over time.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> GER guarantee misses go unreconciled on most plans because the plan sponsor never calculates the comparison. The remediation clause is in the contract; the trigger is the audit.",
        "paste_label": "GER AUDIT WORKSHEET",
        "paste_text": "Quarter ......................... [Q1 / Q2 / Q3 / Q4 · YYYY]\n\nContract guarantee (% off AWP) ............... ____%\nActual GER (this quarter) .................... ____%\nGap (Actual - Guarantee) ..................... ____%\n  • Negative gap = remediation owed\n  • Methodology must match contract for comparison\n\nExclusion list audit:\n  Drugs in top 25 generic spend that are excluded\n  from the guarantee calculation:\n    1. _______________________________\n    2. _______________________________\n    3. _______________________________\n  Year-over-year change in exclusion list:\n    Items added: ____\n    Items removed: ____\n\nRemediation request (if gap is negative):\n  Cite contract section: § ___\n  Dollar magnitude of gap: $______\n  Remediation type: cash true-up / credit / TBD",
        "actions": [
            ("STEP 1 · THIS WEEK", "Pull the GER methodology clause + actual GER", "Verify formulas match. If not, the reported GER is not the contracted GER."),
            ("STEP 2 · WEEK 2", "Calculate gap and document magnitude", "Use the worksheet above. Document with date range and dollar impact."),
            ("STEP 3 · WEEK 3", "Audit exclusion list against top 25 generics", "Identify drift. Year-over-year exclusion-list growth shrinks the guarantee's coverage."),
            ("STEP 4 · AT NEXT QUARTERLY REVIEW", "Bring the gap notification in writing", "Mid-year gap notification beats year-end. Document the PBM response."),
        ],
    },
    {
        "week": 29,
        "topic_slug": "week_29_thursday_network_configuration_audit",
        "eyebrow": "Pharmacy Network Configuration · Audit Worksheet",
        "title_html": "Five Network Terms Set Where Members Fill. <em>The Routing Pattern Rarely Matches the Clause.</em>",
        "title_sub": "Three audit passes. One network design. One exclusion log.",
        "intro": "This handout decodes the five network contract terms: preferred network, broad network, network guarantee, mandatory mail, and network exclusion list. Most plans receive the network membership list once at contract signing and never again. The exclusion log compounds quietly; the audit is what surfaces the drift.",
        "passes": [
            (1, "Pull the actual fill distribution by network configuration",
             "<p>Open your most recent quarterly report. Calculate the share of fills landing in each configuration: preferred network, broad network, mandatory mail, PBM-affiliated specialty.</p><p>If the breakdown is not in the report, request it.</p>"),
            (2, "Compare the actual fill distribution to the contract's network design",
             "<p>Open your contract's network membership clause and the preferred network list. Compare contracted design to actual pattern. Common findings: preferred-network share lower than designed (member out-of-network drift); mandatory-mail share higher than expected (workflow capture).</p>"),
            (3, "Audit the network guarantee clauses",
             "<p>Open the network guarantee clause. Note guaranteed minimums (preferred-network share, retail dispensing fee, mail discount). Compare actual performance to the guarantee, noting any carve-outs that move the in-scope categories.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> the network exclusion list grows over the contract term as pharmacies are removed for not accepting the PBM's reimbursement terms. Plan sponsors rarely receive notification of these removals, but the removals affect member access and aggregate plan economics.",
        "paste_label": "DATA REQUEST · TO YOUR PBM ACCOUNT TEAM",
        "paste_text": "Subject: Network audit — fill distribution + exclusion log\n\nPlease provide the following network data:\n\n  1. Dispensing-channel fill distribution for the last four quarters,\n     by configuration:\n        a. Preferred network\n        b. Broad network (non-preferred but in-network)\n        c. Mandatory mail\n        d. PBM-affiliated specialty\n     Per quarter, with claim count and total plan-paid dollars.\n\n  2. Network membership list as of contract effective date and current\n     network membership list. Provide diff: pharmacies added and removed.\n\n  3. Network exclusion log for the past 12 months, including reason for\n     each pharmacy removal.\n\n  4. Network guarantee performance: actual vs. contracted minimums for\n     preferred-network share, retail dispensing fee, mail discount.\n\nDelivery requested within 14 business days.",
        "actions": [
            ("STEP 1 · THIS WEEK", "Pull the fill distribution and network design clauses", "Compare actual to design. Document the gap."),
            ("STEP 2 · WEEK 2", "Calculate guarantee performance vs. minimum", "Document any miss with the dollar magnitude."),
            ("STEP 3 · WEEK 3", "Request the 12-month exclusion log", "Pharmacies removed from the network are signal about the PBM's reimbursement-term enforcement."),
            ("STEP 4 · AT RENEWAL", "Negotiate notification clauses for network changes", "Plan sponsors should receive written notification of every pharmacy removal."),
        ],
    },
    {
        "week": 30,
        "topic_slug": "week_30_thursday_cob_audit_worksheet",
        "eyebrow": "Coordination of Benefits · Audit Worksheet",
        "title_html": "Five COB Terms Decide How a Single Claim Coordinates. <em>The Flag Is Rarely Audited.</em>",
        "title_sub": "Three audit passes. One COB clause. Where copay-program economics live.",
        "intro": "This handout decodes the five COB terms: primary-secondary determination, member responsibility carve-out, Medicare-as-secondary handling, copay assistance crediting, and double-dipping prevention. Copay accumulator and maximizer programs depend entirely on accurate COB flagging at the claim level. Without auditing the flag, the program does not capture the manufacturer dollars correctly.",
        "passes": [
            (1, "Pull the COB-flagged claims sample",
             "<p>Request a COB-flagged claims sample: claims where coordination applies because the member has secondary coverage, Medicare entitlement, or active manufacturer copay assistance.</p><p>If the PBM cannot produce a COB-flagged sample, that is the first finding.</p>"),
            (2, "Classify each COB scenario by type",
             "<p>For each COB-flagged claim, classify: primary-secondary, Medicare-as-secondary, manufacturer copay card, or member-billed-separately. Calculate share by type.</p><p>The manufacturer copay card category is rarely flagged correctly; if the flag is missing, the accumulator/maximizer program does not work.</p>"),
            (3, "Compare COB outcomes to the contract",
             "<p>Open your contract's COB clause. Note the rules: primary-secondary determination order, member responsibility carve-out, copay assistance crediting policy, double-dipping prevention.</p><p>Compare to actual claim outcomes. If the contract specifies maximizer-style and the workflow is accumulator-style, the workflow is doing different work than the contract.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> the manufacturer copay card crediting category is rarely flagged correctly. Copay accumulator and copay maximizer programs depend on accurate flagging at the claim level. If the flag is missing or wrong, the program does not capture the manufacturer dollars correctly.",
        "paste_label": "COB SAMPLE REQUEST · TO PBM",
        "paste_text": "Subject: Coordination of benefits — flagged claims sample\n\nPlease provide a COB-flagged claims sample for the last quarter,\nincluding the following fields per claim:\n\n  • Member ID (de-identified or hashed)\n  • Drug name and NDC\n  • Date of fill\n  • Plan-paid amount (this plan)\n  • Member-paid amount\n  • Secondary coverage source: spouse plan / Medicare / copay card / other\n  • Secondary-paid amount\n  • COB rule applied (primary-secondary order, carve-out logic)\n  • Copay assistance flag: Y / N / partial\n  • Crediting outcome: counted toward deductible / OOP-max / bypassed\n\nWe expect to see all four COB scenario types represented.\n\nDelivery requested within 14 business days.",
        "actions": [
            ("STEP 1 · THIS WEEK", "Request COB-flagged sample", "If the PBM cannot produce, escalate. The flag exists in adjudication."),
            ("STEP 2 · WEEK 2", "Classify the sample by COB type", "Use the worksheet to calculate share by type. Manufacturer copay card mis-flagging is the most common audit finding."),
            ("STEP 3 · WEEK 3", "Compare COB rules to actual outcomes", "If contract says maximizer but workflow is accumulator, that is the gap."),
            ("STEP 4 · AT RENEWAL", "Negotiate COB clause specificity", "Vague COB language is where copay-program economics get lost."),
        ],
    },
    {
        "week": 31,
        "topic_slug": "week_31_thursday_pbm_disclosure_audit",
        "eyebrow": "PBM Disclosure · Audit Worksheet",
        "title_html": "Five Disclosures Your PBM Owes You Annually. <em>Most Plan Sponsors Receive One.</em>",
        "title_sub": "Three audit passes. One disclosure clause. One inquiry record.",
        "intro": "This handout decodes the five PBM disclosure obligations: rebate-flow attestation, conflict-of-interest disclosure, data-partnership disclosure, audit-results delivery, and material-change notice. The disclosure clauses are in nearly every contract. The disclosures themselves rarely arrive without a written request. The PBM that operates with disclosure transparency proactively sends them; the PBM that treats disclosures as optional waits to be asked.",
        "passes": [
            (1, "Build the disclosure obligation list from the contract",
             "<p>Open your contract. Find the disclosure clause (sometimes scattered across reporting, audit, and conflicts sections). For each obligation, document: what the PBM must disclose, to whom, on what cadence (annual, quarterly, on-event), in what format.</p>"),
            (2, "Catalog what was actually delivered in the past 12 months",
             "<p>Pull all formal communications from the PBM over the past year: quarterly reports, annual attestations, ad-hoc notifications, audit responses, conflict-of-interest disclosures. Catalog by date and content category.</p><p>Compare to the obligation list. Which obligations were fulfilled? Which were missed?</p>"),
            (3, "Send written requests for missed items",
             "<p>For each missed disclosure, draft a written request citing the contract clause that requires it. Send through your broker. Document the PBM's response in writing.</p><p>The PBM's response itself is informative.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> most contracts have at least four required disclosures, but plan sponsors typically receive only one (the standard quarterly report). The other three are obligations the PBM has but rarely fulfills proactively.",
        "paste_label": "DISCLOSURE OBLIGATION TRACKER",
        "paste_text": "Disclosure                          Cadence    Last Received    Status\n  1. Rebate-Flow Attestation .......... Annual    [date]            ___\n  2. Conflict-of-Interest Disclosure .. Annual    [date]            ___\n  3. Data-Partnership Disclosure ...... Annual    [date]            ___\n  4. Audit-Results Delivery ........... On-event  [date]            ___\n  5. Material-Change Notice ........... On-event  [date]            ___\n\nStatus codes: ✓ delivered · □ requested, pending · ✗ missing\n\nWritten requests sent (date / clause cited / response):\n  ___________________________________________\n  ___________________________________________",
        "actions": [
            ("STEP 1 · THIS WEEK", "Pull the disclosure clause and build the obligation list", "Annual cadence vs. quarterly vs. on-event. Document in the tracker above."),
            ("STEP 2 · WEEK 2", "Catalog what was actually received", "Pull the past 12 months of PBM communications. Compare to the list."),
            ("STEP 3 · WEEK 3", "Send written requests for missed items", "Cite the contract clause. Send through broker. Document response."),
            ("STEP 4 · AT RENEWAL", "Make disclosure cadence explicit in the new contract", "Specific delivery dates and formats."),
        ],
    },
    {
        "week": 32,
        "topic_slug": "week_32_thursday_fiduciary_compliance_audit",
        "eyebrow": "Fiduciary Compliance · Audit Worksheet",
        "title_html": "ERISA's Five Words Define Your Personal Exposure. <em>The Documentation Is What Survives.</em>",
        "title_sub": "Three audit passes. One decision log. One co-fiduciary defense.",
        "intro": "This handout decodes the five ERISA fiduciary terms: fiduciary, prudent process, plan assets, conflict of interest, and co-fiduciary liability. The prudent-process standard does not require optimal outcomes; it requires a reasonable, documented decision-making process. The audit produces the documentation that would survive a fiduciary review.",
        "passes": [
            (1, "Identify every pharmacy benefit decision in the past 12 months",
             "<p>Open benefits committee minutes, broker correspondence, and PBM decisions from the past 12 months. List every decision: contract amendments, formulary changes, RFP outcomes, cost containment programs, vendor selections, fee approvals.</p><p>For each, document the date, the deciders, and the documentation that supported the decision.</p>"),
            (2, "Apply the prudent-process test to each decision",
             "<p>For each decision: was the alternative considered? Was the data assessed? Was the conflict-of-interest landscape documented?</p><p>The prudent-process standard does not require optimal outcomes; it requires a documented process.</p>"),
            (3, "Catalog conflict-of-interest disclosures and co-fiduciary exposure",
             "<p>Open your contract's conflict-of-interest clause (if it exists). Document every PBM relationship that creates structural conflict: PBM-owned specialty pharmacy, rebate aggregator, GPO ownership, manufacturer data partnerships.</p><p>For each conflict, document whether the plan sponsor has acknowledged the conflict in writing and whether reasonable inquiry has been made.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> most plan sponsors have decisions, but few have decision documentation that would survive a fiduciary audit. The decision happened; the prudent-process record did not.",
        "paste_label": "DECISION LOG TEMPLATE",
        "paste_text": "Date        Decision                              Deciders     Doc?\n  ________  ___________________________________  __________  Y/N\n  ________  ___________________________________  __________  Y/N\n  ________  ___________________________________  __________  Y/N\n  ________  ___________________________________  __________  Y/N\n  ________  ___________________________________  __________  Y/N\n\nFor each documented decision, attach:\n  • Alternatives considered\n  • Data sources reviewed\n  • Conflict-of-interest disclosures referenced\n  • Process notes (committee deliberation, broker advice)\n\nConflict-of-interest landscape:\n  • PBM-owned specialty pharmacy:        acknowledged Y/N\n  • Rebate aggregator (PBM affiliate):    acknowledged Y/N\n  • GPO ownership:                       acknowledged Y/N\n  • Manufacturer data partnerships:      acknowledged Y/N",
        "actions": [
            ("STEP 1 · THIS WEEK", "Build the 12-month decision log", "Use the template above. List every decision and reference its documentation."),
            ("STEP 2 · WEEK 2", "Apply the prudent-process test", "Identify documentation gaps. Decisions without a record are exposed."),
            ("STEP 3 · WEEK 3", "Catalog conflicts and inquiry record", "Reasonable inquiry is what the audit produces; co-fiduciary liability triggers without it."),
            ("STEP 4 · QUARTERLY", "Refresh the log every quarter", "Documentation is a discipline, not a project."),
        ],
    },
    {
        "week": 33,
        "topic_slug": "week_33_thursday_member_transition_audit",
        "eyebrow": "Member Transition · Audit Worksheet",
        "title_html": "Five Clauses Protect Members During Transitions. <em>Most Plan Sponsors Assume They Execute.</em>",
        "title_sub": "Three audit passes. One transition event log. One gap document.",
        "intro": "This handout decodes the five member transition disruption clauses: continuity of care, transition supply, formulary-change member notification, prior authorization grandfathering, and benefit-modification ratification. The clauses are written; the execution is not automatic. The audit is what closes the gap.",
        "passes": [
            (1, "Identify every transition event in the past 12 months",
             "<p>Open benefits committee minutes and PBM correspondence. List every member-affecting transition: formulary changes, PA criteria changes, network changes, specialty-pharmacy routing changes, mail-order configuration changes.</p><p>For each, document date, member population affected, contractual transition window.</p>"),
            (2, "Compare contract language to actual member experience",
             "<p>Open your contract's transition clauses. Note the protections: continuity-of-care days, transition supply mandate, notification cadence, PA grandfathering window.</p><p>For each transition event, audit whether the contractual protections were actually delivered.</p>"),
            (3, "Catalog the gap with member counts and consequences",
             "<p>For each transition where the audit surfaces a gap, document: how many members affected, how the disruption manifested, cost or clinical consequence.</p><p>The gap document is the renewal-leverage item.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> the transition clauses are in most contracts but rarely audited. Members report disruption; the plan sponsor assumes the PBM is following the contract; the PBM is following an operational playbook that may or may not match.",
        "paste_label": "TRANSITION EVENT LOG",
        "paste_text": "Event Date    Type                Members Affected  Contract Window  Delivered?\n  __________  __________________  ______________   __________      Y / N / Partial\n  __________  __________________  ______________   __________      Y / N / Partial\n  __________  __________________  ______________   __________      Y / N / Partial\n\nFor each \"N\" or \"Partial\":\n  • Specific protection missed: ________________________________\n  • Contract section: § _______\n  • Member impact (count): _______\n  • Cost / clinical consequence: ________________________________\n\nGap notification sent to PBM (date / clause cited / response):\n  ___________________________________________",
        "actions": [
            ("STEP 1 · THIS WEEK", "Build the 12-month transition event log", "Use the template above. List every transition with member counts."),
            ("STEP 2 · WEEK 2", "Compare contractual protections to actual experience", "Did continuity-of-care, transition supply, notification cadence, and PA grandfathering execute?"),
            ("STEP 3 · WEEK 3", "Catalog gaps with consequence data", "Member counts and clinical or cost consequences make the gap concrete."),
            ("STEP 4 · AT RENEWAL", "Bring the gap document to the negotiation table", "Documented gaps shift contract redlines."),
        ],
    },
    {
        "week": 34,
        "topic_slug": "week_34_thursday_midyear_guarantee_audit",
        "eyebrow": "Mid-Year Performance Guarantee · Audit Worksheet",
        "title_html": "Five Guarantees You Should Audit at Mid-Year. <em>Year-End Notification Comes Too Late.</em>",
        "title_sub": "Three audit passes. Mid-year notification. Year-end remediation.",
        "intro": "This handout decodes the five mid-year performance guarantee terms: GER, BER, dispensing fee, rebate per claim minimum, and performance-remediation language. Mid-year is when remediation conversations work; year-end is when remediation conversations end. The PBM is operating on calendar Q3-Q4 already; the plan sponsor that audits in July has the leverage that the plan sponsor who audits in December does not.",
        "passes": [
            (1, "Pull each guarantee's actual mid-year performance",
             "<p>Open your contract. List every named performance guarantee with its threshold (GER, BER, dispensing fee maximum, rebate-per-claim minimum, etc.).</p><p>Open your H1 / mid-year claims data. Calculate actual mid-year performance using the formula the contract specifies.</p>"),
            (2, "Classify gaps by remediation type",
             "<p>For each guarantee where actual is below threshold, find the remediation clause. Classify: cash true-up at year-end, credit against next-year admin fees, \"PBM shall remediate\" undefined, or no remediation specified at all.</p><p>Unguarded guarantees are where the PBM keeps the difference at year-end without consequence.</p>"),
            (3, "Send the gap notification mid-year, not at year-end",
             "<p>For each gap with named remediation, send written notification citing guarantee, actual performance, gap, remediation clause. Mid-year notification establishes the audit on the calendar before the PBM optimizes Q3-Q4 to bury the gap.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> most contracts name guarantees but specify remediation only for some of them. The unguarded guarantees are where the PBM keeps the difference at year-end without consequence. The remediation classification is the audit's most important output.",
        "paste_label": "MID-YEAR GUARANTEE LEDGER",
        "paste_text": "Guarantee                              Threshold    Actual H1    Gap     Remediation\n  1. Generic Effective Rate (GER) ......  ____%       ____%       ____%   _________\n  2. Brand Effective Rate (BER) ........  ____%       ____%       ____%   _________\n  3. Dispensing Fee (max) ..............  $____       $____       $____   _________\n  4. Rebate per Brand Claim (min) ......  $____       $____       $____   _________\n  5. Performance Remediation language? .  Y / N (describe): _________________\n\nRemediation codes:\n  CT = cash true-up · CR = credit · TBD = undefined · NONE = no language\n\nMid-year notification sent (date / guarantee / response):\n  ___________________________________________",
        "actions": [
            ("STEP 1 · THIS WEEK", "Pull every named guarantee and threshold", "Use the ledger above. Document threshold for each."),
            ("STEP 2 · WEEK 2", "Calculate actual mid-year performance", "Methodology must match contract for the comparison to count."),
            ("STEP 3 · WEEK 3", "Classify gaps by remediation type and send mid-year notification", "Mid-year beats year-end."),
            ("STEP 4 · AT RENEWAL", "Negotiate remediation language for unguarded guarantees", "Cash true-up beats undefined every time."),
        ],
    },
    {
        "week": 35,
        "topic_slug": "week_35_thursday_termination_clause_audit",
        "eyebrow": "Termination Clause · Audit Worksheet",
        "title_html": "Five Termination Terms Decide Your Leverage. <em>Most Plans Are Locked In Without Knowing It.</em>",
        "title_sub": "Three audit passes. One termination clause. One exit timeline.",
        "intro": "This handout decodes the five termination clause terms: termination for convenience, termination for cause, runoff period, early termination fee, and data return obligation. The termination clause determines your exit options, and your exit options determine your leverage throughout the entire relationship, even when you have no intention of terminating.",
        "passes": [
            (1, "Read the termination for convenience and cause clauses",
             "<p>Find the termination for convenience clause. Note the notice period (90 days vs. 180 days makes a material difference).</p><p>Find the termination for cause clause. Note how 'cause' is defined. Vague 'material breach' language favors the PBM.</p>"),
            (2, "Audit the runoff period and termination fees",
             "<p>Find the runoff period clause: the window after termination during which the PBM continues to process claims. Long runoff = captive plan with no competitive pressure.</p><p>Find any early termination fees. If the fee exceeds projected switching savings, the leverage is neutralized.</p>"),
            (3, "Read the data return obligation",
             "<p>Find the data clause that governs your data on termination. Required: claims history, PA records, accumulator data, eligibility records. Required timeline: 30 days, NCPDP standard format.</p><p>Without strong data return language, transition to a new PBM is delayed and expensive.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> most termination-clause negotiations never result in termination. But a strong termination provision changes every other negotiation. When the PBM knows you can leave efficiently, they negotiate pricing, rebates, and service levels with more urgency. Vague termination language is its own concession.",
        "paste_label": "TERMINATION CLAUSE WORKSHEET",
        "paste_text": "Termination for Convenience\n  Notice period: ___ days  (90 = strong · 180 = weak)\n\nTermination for Cause\n  How is \"cause\" defined? _________________________\n  Specific triggers named?  Y / N\n\nRunoff Period\n  Length: ___ days\n  Pricing during runoff: same as contract / different (specify)\n\nEarly Termination Fee\n  Amount: $____ or formula: _________________\n  Caps after: month ___\n\nData Return Obligation\n  Timeline: ___ days from termination notice\n  Format: NCPDP standard / other\n  Scope: claims / PAs / accumulator / eligibility (check all that apply)\n\nRenewal redline priorities (top 3):\n  1. _________________________________\n  2. _________________________________\n  3. _________________________________",
        "actions": [
            ("STEP 1 · THIS WEEK", "Read the termination clauses end to end", "Most plan sponsors haven't read them since signing."),
            ("STEP 2 · WEEK 2", "Document the redline priorities", "Use the worksheet above."),
            ("STEP 3 · AT RENEWAL", "Negotiate the redlines", "90-day notice. Specific cause triggers. Short runoff. 30-day NCPDP-format data return."),
            ("STEP 4 · ONGOING", "Treat termination clauses as renewal-leverage even when not terminating", "The clause shapes the relationship."),
        ],
    },
    {
        "week": 36,
        "topic_slug": "week_36_thursday_definition_variance_audit",
        "eyebrow": "Definition Variance · Audit Worksheet",
        "title_html": "Same Words. Different Meanings. <em>Across Renewal Cycles, the Definitions Quietly Shrink.</em>",
        "title_sub": "Three audit passes. Past contract versions. Silent drift.",
        "intro": "This handout walks plan sponsors through how three PBMs typically read the same ten-word clause three different ways. The audit is on your own contract history: the renewal-by-renewal drift in your contract's high-impact definitions that costs the plan money without changing a visible word.",
        "passes": [
            (1, "Pull every active and prior contract on file",
             "<p>List the current PBM agreement plus every prior version, renewal cycle, amendment, and addendum on file. Identify the high-economic-impact clauses across versions: rebate definition, AWP discount methodology, pass-through clause, performance guarantee thresholds, exclusion lists, audit rights scope.</p>"),
            (2, "Compare definitions clause-by-clause across versions",
             "<p>For each high-impact clause, lay the language side by side across versions. Note: what was added, what was removed, what was reworded.</p><p>Most plan sponsors assume the contract \"stays the same\" between renewals; definition variance is what makes that costly.</p>"),
            (3, "Estimate the dollar impact of each definition change",
             "<p>For each definition change, estimate dollar magnitude. Did narrowing the rebate definition by excluding \"data licensing payments\" reduce pass-through capture by 1-2%? Did changing the AWP source shift the discount calculation? Did adding a new exclusion to the GER calculation reduce the guarantee's coverage scope?</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> rebate definitions narrow over successive renewals. Words like \"manufacturer compensation\" replaced with \"manufacturer rebates.\" Categories carved out at renewal that were inside the definition before. The contract reads similar; the economics shift quarterly.",
        "paste_label": "DEFINITION VARIANCE WORKSHEET",
        "paste_text": "Clause: ____________________________\n\n  Version 1 (effective ____)\n    \"___________________________________________________________\"\n\n  Version 2 (effective ____)\n    \"___________________________________________________________\"\n\n  Version 3 (current)\n    \"___________________________________________________________\"\n\n  Diff:\n    Words/phrases added:    ___________________________________\n    Words/phrases removed:  ___________________________________\n    Words/phrases reworded: ___________________________________\n\n  Estimated dollar impact (annual):\n    Per-claim impact: $____\n    Annual claims volume: ____\n    Annual dollar impact: $____\n\n  Renewal redline priority: HIGH / MEDIUM / LOW",
        "actions": [
            ("STEP 1 · THIS WEEK", "Pull the contract repository", "Current + every prior version on file."),
            ("STEP 2 · WEEK 2", "Compare high-impact clauses side by side", "Use the worksheet above. Document changes per clause."),
            ("STEP 3 · WEEK 3", "Estimate dollar impact per change", "Use claims data to ground the estimate."),
            ("STEP 4 · AT RENEWAL", "Bring the variance audit to the negotiation", "Silent drift becomes loud once it's documented."),
        ],
    },
    {
        "week": 37,
        "topic_slug": "week_37_thursday_pre_meeting_renewal_checklist",
        "eyebrow": "First Renewal Meeting · Pre-Meeting Checklist",
        "title_html": "Five Items to Bring to the First PBM Renewal Meeting. <em>The First Meeting Sets the Frame.</em>",
        "title_sub": "Five documents. One internal priority list. One counter-narrative.",
        "intro": "This handout names the five items every plan sponsor should walk into the first PBM renewal meeting with. The plan sponsors who walk in with all five negotiate different terms than the plan sponsors who walk in with the PBM's standard renewal deck. The PBM brings a narrative; the plan sponsor that brings these five items brings a counter-narrative.",
        "passes": [
            (1, "Mid-Year Performance Audit",
             "<p>Actual GER, BER, dispensing fee, rebate-per-claim performance vs. contracted guarantees. Documented gaps where remediation is owed. Mid-year notification record.</p><p>This is the W34 Thursday handout, refreshed for the renewal meeting.</p>"),
            (2, "Definition Variance Document",
             "<p>Side-by-side comparison of high-impact clauses across the past 3-5 contract versions. Highlights of any silent narrowing in rebate definitions, GER methodology, exclusion lists. Estimated dollar impact per change.</p><p>This is the W36 Thursday handout, refreshed for the renewal meeting.</p>"),
            (3, "Disclosure Gap List + Network Configuration Audit + Internal Priority Document",
             "<p><strong>Disclosure Gap List</strong> (W31 Thursday handout): which contractually obligated annual disclosures the PBM has actually delivered.</p><p><strong>Network Configuration Audit</strong> (W29 Thursday handout): per-channel margin and routing pattern vs. contract design.</p><p><strong>Internal Priority Document</strong>: a one-page summary of what the plan sponsor's benefits committee has prioritized for this renewal cycle. Costs the PBM the option of optimizing for what they want to optimize.</p>"),
        ],
        "pattern_callout": "<strong>Across approximately 100 PBM contract reviews and audits annually at PBS:</strong> the first renewal meeting is the frame-setting meeting. Plan sponsors who walk in with documentation set the frame; plan sponsors who walk in with the PBM's renewal deck inherit the PBM's frame. The deck the PBM brings is engineered. The five items above are the counter-engineering.",
        "paste_label": "PRE-MEETING CHECKLIST",
        "paste_text": "Pre-Meeting Document Checklist\n\n  □ 1. Mid-Year Performance Audit (W34 Thursday handout, refreshed)\n         Actual vs. guarantee. Mid-year notification log. Remediation status.\n\n  □ 2. Definition Variance Document (W36 Thursday handout, refreshed)\n         Past 3-5 versions. Drift-by-clause table. Dollar-impact estimates.\n\n  □ 3. Disclosure Gap List (W31 Thursday handout)\n         What was delivered. What was missed. Written request log.\n\n  □ 4. Network Configuration Audit (W29 Thursday handout)\n         Fill distribution by channel. Network exclusion log. Guarantee\n         performance vs. minimum.\n\n  □ 5. Internal Priority Document (one page)\n         Top 3 priorities for this renewal cycle, ranked.\n         Signed by benefits committee chair.\n\nMeeting Logistics\n  □ Meeting calendar invite sent to PBM\n  □ Internal pre-brief held with broker\n  □ Documentation packet printed and bound\n  □ Recording / minute-taker assigned\n  □ Follow-up document expected within ___ business days",
        "actions": [
            ("STEP 1 · THE WEEK BEFORE", "Refresh the four prior Thursday handouts with current data", "Mid-year audit + definition variance + disclosure gap + network config."),
            ("STEP 2 · 3 DAYS BEFORE", "Convene the benefits committee", "Produce the one-page internal priority document. Get it signed."),
            ("STEP 3 · MEETING DAY", "Open with the priority document", "Frame the conversation around your priorities, not the PBM's renewal deck."),
            ("STEP 4 · WITHIN 5 DAYS AFTER", "Send the meeting summary in writing", "Document what was discussed, what the PBM committed to, and what comes next."),
        ],
    },
]


def main():
    """Generate all HTML and PDF files."""
    print(f"Building {len(SPECS)} Thursday reference documents...")
    for spec in SPECS:
        slug = spec["topic_slug"]
        html_path = DOCS_DIR / f"{slug}.html"
        pdf_path = DOCS_DIR / f"{slug}.pdf"

        html = render_html(spec)
        html_path.write_text(html)
        print(f"  Wrote {html_path.name}")

    print()
    print("Rendering PDFs via WeasyPrint...")
    try:
        from weasyprint import HTML
        for spec in SPECS:
            slug = spec["topic_slug"]
            html_path = DOCS_DIR / f"{slug}.html"
            pdf_path = DOCS_DIR / f"{slug}.pdf"
            HTML(filename=str(html_path)).write_pdf(str(pdf_path))
            print(f"  Wrote {pdf_path.name}")
    except ImportError:
        print("  WeasyPrint not installed; skipping PDF rendering. Run: pip install weasyprint")
    print()
    print("Done.")


if __name__ == "__main__":
    main()
