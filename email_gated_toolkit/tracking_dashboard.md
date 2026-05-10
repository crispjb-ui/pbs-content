# Email-Gated Toolkit Tracking Dashboard

> **What this is:** The metrics PBS tracks daily, weekly, and quarterly to evaluate the email-gated Toolkit lead-magnet flow. Use this as the structure for a Wix Contacts dashboard, a Google Sheet, or a Notion page — wherever PBS's team prefers to keep operational data.

---

## DAILY METRICS (5-min check during active campaigns)

Pull from LinkedIn Campaign Manager and Wix Email Marketing.

| Metric | Source | Today | Yesterday | 7-day avg | Threshold |
|---|---|---|---|---|---|
| New leads (all sources) | Wix Contacts new contacts today | | | | — |
| Cost per lead (CPL) — LinkedIn ads | LinkedIn Campaign Manager | | | | < $40 (Tier 1), < $60 (Tier 2) |
| Form completion rate | LinkedIn Lead Gen Form | | | | > 25% |
| Email 1 open rate | Wix Email Marketing | | | | > 70% |
| Email 1 click rate (PDF link) | Wix Email Marketing | | | | > 50% |
| Email 1 spam complaint rate | Wix Email Marketing | | | | < 0.1% |

**Daily review:**
- If CPL spikes above threshold → check audience targeting + ad creative
- If Email 1 open rate drops below 60% → check sender reputation + spam folder placement
- If form completion rate drops below 18% → A/B test the form copy

---

## WEEKLY METRICS (20-30 min Monday review)

| Metric | Source | This Week | Last Week | Threshold |
|---|---|---|---|---|
| Total new leads | Wix Contacts | | | — |
| Leads by source | Wix Contacts (filtered by source: tags) | | | LinkedIn ad : Substack : organic — track ratio |
| Welcome sequence open rates (Emails 2-5) | Wix Email Marketing | | | E2 > 50%, E3 > 45%, E4 > 40%, E5 > 35% |
| Substack subscribe rate (Emails 2 + 3) | Substack source breakdown (look for "wix" UTM) | | | > 8% over 30 days |
| LinkedIn Newsletter subscribe rate (Email 4) | LinkedIn Newsletter analytics | | | > 5% |
| Contract Review reply rate (Email 5) | team@rxbs.org inbound | | | > 1% |
| Audience segment performance | LinkedIn Campaign Manager | | | VP Benefits : CFO : Director conversions per dollar |
| Ad creative variant performance (A/B tests) | LinkedIn Campaign Manager | | | Champion + challenger CPL per variant |

**Weekly decisions:**
- Which Toolkit landing page is converting best? Scale spend toward that one
- Which audience segment is converting best? Refine targeting
- Are the high-intent leads (multi-Toolkit downloaders, VP+ titles) being followed up by team@rxbs.org? Check inbound queue

---

## MONTHLY METRICS (60 min first-Monday review)

| Metric | Source | This Month | Last Month | 3-month avg |
|---|---|---|---|---|
| Total ad spend | LinkedIn Campaign Manager | | | |
| Total leads captured | Wix Contacts | | | |
| Total Substack subs from Wix-source leads | Substack analytics | | | |
| Total LinkedIn Newsletter subs from Wix-source leads | LinkedIn Newsletter analytics | | | |
| Contract Review consult inquiries | team@rxbs.org tracker | | | |
| Contract Review engagements signed | PBS sales record | | | |
| Welcome sequence completion rate (Email 5 reached) | Wix Email Marketing | | | |
| Lead-to-Substack-subscriber conversion (30-day) | Wix → Substack overlap | | | |
| Lead-to-newsletter-subscriber conversion | Wix → LinkedIn Newsletter overlap | | | |
| **Customer acquisition cost (CAC)** | Total ad spend ÷ Contract Review engagements signed | | | |

**Monthly decisions:**
- Reconcile Wix Contacts ↔ Substack subscribers (export Substack CSV monthly)
- Identify high-intent leads in Wix CRM that haven't been contacted; surface to team@rxbs.org
- Refresh Email 3 Field Note pairing per the most recent ~6 weeks of Substack content
- Review ad creative performance and rotate any creative below benchmark

---

## QUARTERLY METRICS (2-3 hour deep review)

| Metric | Source | Q1 | Q2 | Q3 | Q4 |
|---|---|---|---|---|---|
| Total ad spend | LinkedIn Campaign Manager | | | | |
| Total leads | Wix Contacts | | | | |
| Total Contract Review engagements | PBS sales record | | | | |
| **CAC** (ad spend ÷ engagements) | calculated | | | | |
| **LTV** (avg engagement value × 1.5 for follow-on PBR) | calculated | | | | |
| **CAC : LTV ratio** | calculated | | | | |
| Substack growth from Wix-source leads | Substack subscriber count | | | | |
| Top-performing Toolkit (by lead volume) | Wix Contacts asset: tags | | | | |
| Top-performing Toolkit (by CR conversion) | PBS sales record cross-ref | | | | |
| Top-performing audience segment | LinkedIn Campaign Manager | | | | |

**Quarterly decisions:**
- If CAC : LTV > 1 : 3 → spend is sustainable, scale aggressively
- If CAC : LTV > 1 : 1 but < 1 : 3 → fine-tune audience or creative; don't scale yet
- If CAC : LTV < 1 : 1 → pull spend, return to organic-only motion until offer or audience is sharper
- Identify Toolkit handouts to add or retire based on lead volume and conversion
- Review the welcome sequence end-to-end; rebuild any email scoring below benchmark

---

## KEY DEFINITIONS

**Lead.** A contact captured in Wix Contacts with at least name + work email + company + role. Created by a Toolkit landing page form submission, a LinkedIn Lead Gen Form submission, or a direct subscription.

**Tier 1 lead.** A lead from one of the three Tier 1 ads (Contract Review Readiness, Optimize-vs-Go-to-Market, PBR Framework). Higher-intent because the Toolkit maps directly to a PBS service.

**Tier 2 lead.** A lead from a mechanic-specific Toolkit ad (Channel Pricing, Rebate, GER, etc.). Lower-intent at signup but nurtured through the welcome sequence.

**Welcome sequence completion.** A lead who has opened (or clicked) at least one of Emails 2-5. Indicates active engagement with the nurture flow.

**High-intent lead.** A lead with any of: 2+ Toolkit downloads · VP+ job title · 3+ welcome-sequence email opens · Email 5 click on Contract Review CTA. Flagged for human follow-up via team@rxbs.org.

**Contract Review consult inquiry.** An inbound email to team@rxbs.org from a captured lead, mentioning Contract Review or asking to schedule a call. Counted in the funnel between welcome sequence completion and engagement signed.

**Engagement signed.** A Contract Review (or PBR or RFP) engagement contract signed with a captured lead.

---

## SAMPLE DASHBOARD VIEW (Wix Contacts custom report)

Build a Wix Contacts saved view with the following filters and sorts. Pin to the team@rxbs.org dashboard for daily review.

**View 1: New leads this week**
- Filter: created in past 7 days
- Sort: newest first
- Columns: name, email, company, role, source, asset
- Action: scan for VP+ titles for proactive follow-up

**View 2: High-intent leads pending follow-up**
- Filter: any of (status:lead-warm, status:lead-hot, 2+ asset: tags)
- Filter: NOT contacted in past 30 days
- Sort: most recent activity first
- Action: triage to team@rxbs.org for personal outreach

**View 3: Welcome sequence stalled**
- Filter: workflow:welcome-active AND zero email opens in past 5 days
- Action: investigate deliverability, consider re-engagement email

**View 4: Multi-Toolkit downloaders**
- Filter: contacts with 2+ asset: tags
- Sort: most recent
- Action: highest priority for Contract Review consult outreach

---

## ESCALATION PROTOCOL

When metrics fall outside thresholds, escalate per this protocol:

| Condition | Trigger | Escalate to | Timeline |
|---|---|---|---|
| CPL > $75 for 3 consecutive days | LinkedIn ad performance | Account owner | Same day |
| Email 1 open rate < 45% for 5 consecutive sends | Email Marketing performance | Wix administrator | Same day, check deliverability |
| Form completion rate < 12% for 1 week | Conversion drift | Account owner | Weekly review, A/B test next week |
| Spam complaint rate > 0.5% | Email reputation risk | Wix administrator + Ginny | Immediate, pause sequence |
| LinkedIn Lead Gen Form rejected | Ad policy issue | Account owner | Immediate, revise creative/copy |
| Zero Contract Review inquiries for 60 days | Funnel break | Ginny + sales operations | Quarterly review with intervention |

---

*Update this dashboard structure as the funnel matures. Add new metrics as new Toolkits launch; retire metrics that prove unactionable.*
