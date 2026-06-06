# Role-Segmented Toolkit Funnel — Plan of Record

**Created June 2026.** Elevates the live Wix/Zapier toolkit funnel from role-blind to role-segmented, adds a closing layer, and tracks real leads. Builds on the existing 5-email sequence (Day 0/2/5/9/14) in `zapier_implementation_spec.md` + `emails/`. Companion to `toolkit_dataset.md`.

## Decisions (locked with Ginny, June 2026)
- **Booking:** no external tool for now. The "book a call" CTA is a **`mailto:team@rxbs.org`** with a pre-filled subject so replies self-route. Revisit Calendly/Wix Bookings later.
- **Speed-to-lead alerts:** **email to brett@rxbs.org and ginny@rxbs.org** (no SMS/Slack for now).
- **Roles captured:** `cfo`, `hr-director`, `broker` today; **add `ceo` (CEO/Owner/President)** and a **company-size** field.

---

## 1. Two funnels, not one: buyers vs partners
- **Buyers** — CFO/Finance, HR/Benefits, CEO/Owner → goal = a **Contract/Claims Review engagement**. Pitch the audit.
- **Partner** — Broker/Consultant → per the CLAUDE.md "brokers as partners" rule, **never pitch a broker an audit**. Their track = referral/partnership: co-brandable tools, "run these with your clients," PBS as the independent audit bench they bring in. Metric = clients referred, not a direct close.

Everything forks on this.

## 2. Capture upgrades (one-time Wix form edits)
- Add **CEO / Owner / President** role option.
- Add **company size** (covered lives / employees): `<100`, `100-500`, `500-5,000`, `5,000+`. The #1 fit qualifier and a major scoring input.
- Optional low-friction: **renewal month** (drives close timing).

## 3. Role-segmented tracks (all 5 emails branch on `{{role}}`)
Same Day 0/2/5/9/14 skeleton; angle, proof, second asset, and CTA change by role.

| | CFO / Finance | HR / Benefits | CEO / Owner | Broker / Consultant (partner) |
|---|---|---|---|---|
| Angle | dollar recovery, ROI, the number you were never shown | member impact + admin burden + fiduciary cover | bottom-line risk, "are we being managed?" | "make your client reviews sharper" — ally |
| Email 1 proof | FTC $7.3B markup / spread | cancer/HIV markup human angle | the five-revenue-streams map | "the redlines your best peers check" |
| Email 2 second asset | PBM Compensation (dollar zoom-out) | member transition / step-therapy | PBM Compensation map | Contract Language Library + a co-brandable worksheet |
| Email 4-5 close CTA | book a 20-min contract gut-check (mailto) | book a call + "loop in your CFO" | book a call | **partner intro call** / add PBS as your audit bench (NOT an audit pitch) |
| Cadence | tighter, close-oriented | standard | tighter | slower nurture |

## 4. The closing layer (download → call, no external tool)
1. **Close CTA = pre-filled mailto.** In Email 5 (all buyers), Email 4 (score ≥60), and Email 2 (hot leads):
   `mailto:team@rxbs.org?subject=Contract gut-check: {{company}}&body=...`
   Replies land in team@rxbs.org and route to Ginny/Brett.
2. **Speed-to-lead email alert to brett@ + ginny@.** Zapier sends an internal alert the moment a lead qualifies, so the team reaches out **proactively** rather than waiting for the reply. Triggers below.
3. **Pipeline tracking sheet.** Every submission + score change → Airtable/Google Sheet via Zapier. This is the consulting-leads metric the trackers are missing. Columns: name, email, company, size, role, toolkit, score, status (new → alerted → contacted → call → proposal → closed / referred), date.

## 5. Lead scoring (route effort to the right ~10%)
Additive, computed in a Zapier step at submission and on each engagement event:

| Signal | Points |
|---|---|
| Role CFO or CEO | +20 · HR +10 · Broker → partner track (scored separately) |
| Company 500-5,000 | +20 · 5,000+ +30 · <100 −10 |
| Opened Email 1 | +5 · clicked a toolkit/Substack link +10 |
| Second download (any toolkit) | +25 |
| Clicked the consult mailto | +40 → `lead-hot` |
| Renewal within 6 months | +15 |

**≥60 = SQL** (alert brett@ + ginny@; personal outreach same day) · **30-59 = MQL** (nurture, watch for next trigger) · **<30 = nurture only**.

## 6. Speed-to-lead alert — exact Zapier additions
Add to the existing Zap (after the Catch Hook + CMS lookup steps):
1. **Formatter / Code step "score":** compute the additive score from role + company-size + (for engagement re-scoring) the event type.
2. **Filter "SQL?":** only continue if `score >= 60` OR `event = second_download` OR `event = consult_click`.
3. **Email by Zapier → brett@rxbs.org, ginny@rxbs.org.** Subject: `🔥 SQL: {{first_name}} @ {{company}} ({{role}}, {{size}}) score {{score}}`. Body: contact + which toolkit + score breakdown + the line "Reach out within the day." 
4. **Create/Update row** in the pipeline Sheet/Airtable (status `alerted`).
Non-SQL submissions skip the alert but still get the Sheet row (status `new`) and the normal 5-email sequence.

## 7. Role-branched email copy

**Emails 1-4:** keep the existing base templates; swap the proof line (Email 1), the second-asset blurb (Email 2), and the CTA (Email 4) per the role table above using `{{role}}` conditionals. Broker gets the partner fork (co-brandable framing, Contract Library, no audit pitch).

**Email 5 — "Two Ways Forward" (the close) — full role variants:**

CFO / Finance:
```
{{first_name}},

You have run a few of these worksheets now. Each one surfaces one revenue stream. The version we run for clients totals all five into one dollar figure you can take to renewal.

Two ways forward:

1. Keep using the worksheets. They are yours, free, forever.
2. Have us run the full Contract Review: we pull your claims and contract, document every stream, and hand you the number and the redlines.

If the second one is useful, reply or email team@rxbs.org, subject "Contract gut-check: {{company}}." Twenty minutes tells us both whether there is anything worth pursuing.

Ginny Crisp, PharmD
```

HR / Benefits:
```
{{first_name}},

These worksheets cover the pieces. The full Contract Review is the version that also gives you the fiduciary documentation and the member-impact read, the part that protects the plan and the people on it.

Two ways forward:

1. Keep the worksheets. Yours, free.
2. We run the full review and hand you (and your CFO) the documented findings.

Worth 20 minutes? Reply or email team@rxbs.org, subject "Contract gut-check: {{company}}." Looping in your finance lead is welcome.

Ginny Crisp, PharmD
```

CEO / Owner:
```
{{first_name}},

Five revenue streams flow from your plan to your PBM. Most companies track one. The worksheets you have been pulling each open one of them.

If you want to know what all five total for your plan, that is the Contract Review: we pull the claims and the contract and show you the number, in plain English, with what to do about it.

Reply or email team@rxbs.org, subject "Contract gut-check: {{company}}." Twenty minutes.

Ginny Crisp, PharmD
```

Broker / Consultant (partner — NOT an audit pitch):
```
{{first_name}},

You clearly run real PBM oversight for your clients. These worksheets are built to make that work sharper, and you are welcome to use them in your client reviews.

When a client needs an independent contract or claims audit to back the conversation, that is what we do, as your bench, not in front of you. Plenty of brokers bring us in on the engagements where an outside audit carries more weight.

If that is useful, reply or email team@rxbs.org, subject "Partner intro: {{company}}." Happy to walk through how it works.

Ginny Crisp, PharmD
```

## 8. Build order (fastest path to more closes)
1. **Speed-to-lead alert + pipeline Sheet + the score step** (§5-6). Highest leverage; ~½ day in Zapier.
2. **Add CEO role + company-size field** to the Wix form.
3. **Role-branch Email 5** (copy above), then Email 4 CTA, then Emails 1-3 proof/asset swaps + the broker fork.
4. A/B Email 1 subject + the close-CTA placement after 30 days of data.

## 9. Metrics that matter
By role: download → Email-1 open → consult-mailto click → call → proposal → closed; broker → clients referred. Headline = **calls booked** and **audits won**, not open rates. Seed the Sheet with the 3 current pipeline leads so the funnel has a baseline.
