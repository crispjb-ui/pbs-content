# Closing Layer — Build Spec (Google Sheets + scoring + speed-to-lead alert)

**Status: ready to build (target Monday). ~½ day.** Implements the highest-leverage part of `role_funnel_plan.md`: capture every lead, score it, and alert Ginny + Brett instantly on high-fit leads so they get worked fast. Decisions locked: pipeline tracker = **Google Sheets** (not Airtable); alerts email **brett@rxbs.org + ginny@rxbs.org**; booking = the `team@rxbs.org` mailto (no external tool yet).

Architecture note: a Zapier **Filter** halts the whole Zap, so we do NOT put the alert filter in the existing email Zap (it would kill the email sequence for non-SQL leads). Instead: the existing Zap writes **every** lead to the Sheet; a **second, tiny Zap** triggers off new Sheet rows and fires the alert only for SQL leads. Clean, and it leaves the working email sequence untouched.

---

## Part 1 — The Google Sheet (do first)
Create a sheet named **"PBS Toolkit Leads"**, tab **"Leads"**, with this exact header row (row 1):

```
date | first_name | email | company | size | role | toolkit | score | tier | status | last_action | notes
```

- `tier` = SQL / MQL / nurture / PARTNER (from the score step).
- `status` flow: `new → alerted → contacted → call → proposal → closed` (or `referred` for partners).
- **Seed it now** with the 3 current pipeline leads (one row each, status = wherever they are) so the funnel has a baseline and you can watch conversion from day one.
- Share the sheet with the Google account Zapier is connected to.

## Part 2 — Wix form fields (needed for scoring)
Add to the toolkit form so the score has inputs:
1. **Role** — add option **`ceo` → "CEO / Owner / President"** (the form has cfo / hr-director / broker today).
2. **Company size** — new required dropdown, field key `size`, with these **exact option values** (the score code matches these strings):
   - `under-100` → "Under 100 employees"
   - `100-500` → "100–500 employees"
   - `500-5000` → "500–5,000 employees"
   - `5000-plus` → "5,000+ employees"
3. Make sure both fields are passed in the form submission payload to Zapier (same path as the existing fields).

(If you want to ship Monday without touching the form, the score falls back to role-only — see the code's size handling — but adding `size` is a 5-minute edit and roughly doubles the targeting quality.)

## Part 3 — Lead score model
Computed in a **Code by Zapier (JavaScript)** step from `role` + `size`. Brokers route to the PARTNER track (not scored as buyers).

| Signal | Points |
|---|---|
| Role CFO / CEO / Owner / President | +30 · HR +15 · Broker → PARTNER |
| Size 5,000+ | +40 · 500–5,000 +30 · 100–500 +10 · under-100 −10 |

Tiers: **SQL ≥ 50** (alert + same-day outreach) · **MQL 25–49** (nurture, watch) · **nurture < 25**.
(Reachable at submission: CFO + 500–5,000 = 60 SQL; HR + 5,000+ = 55 SQL; CFO + 100–500 = 40 MQL. Engagement points come in Phase 2.)

**Code by Zapier — Input Data:** `role` = (form role), `size` = (form size). **Code:**
```javascript
const role = (inputData.role || '').toLowerCase();
const size = (inputData.size || '').toLowerCase();
if (role.includes('broker') || role.includes('consultant')) {
  output = [{ score: 0, tier: 'PARTNER' }];
} else {
  let s = 0;
  if (/(cfo|ceo|owner|president|finance)/.test(role)) s += 30;
  else if (role.includes('hr')) s += 15;
  if (size.includes('5000') || size.includes('5,000')) s += 40;
  else if (size.includes('500')) s += 30;          // 500-5000
  else if (size.includes('100')) s += 10;          // 100-500
  else if (size.includes('under') || size.includes('<')) s -= 10;
  const tier = s >= 50 ? 'SQL' : (s >= 25 ? 'MQL' : 'nurture');
  output = [{ score: s, tier: tier }];
}
```

## Part 4 — Zap #1 additions (the existing toolkit email Zap)
Insert two steps **right after the existing CMS lookup step (Webhooks GET → get_toolkit)** and **before Email 1**:

1. **Code by Zapier** (the score step above). Map its inputs from the Catch Hook fields (`role`, `size`).
2. **Google Sheets → Create Spreadsheet Row** into "PBS Toolkit Leads" / "Leads":
   - `date` = Zap meta timestamp (or a Formatter date)
   - `first_name`, `email`, `company`, `size`, `role` = Catch Hook fields
   - `toolkit` = `toolkit_name` (from the CMS lookup)
   - `score` = Code step `score` · `tier` = Code step `tier`
   - `status` = `new` · `last_action` = `download` · `notes` = blank

Leave Emails 1–5 and their delays exactly as they are. Every lead now lands in the Sheet; the sequence is untouched.

## Part 5 — Zap #2 (NEW) — speed-to-lead alert
A separate 3-step Zap so the filter can't harm the email sequence:

1. **Trigger: Google Sheets → New Spreadsheet Row** ("PBS Toolkit Leads" / "Leads").
2. **Filter by Zapier → only continue if:** `tier` (text) **exactly matches** `SQL`. *(Partners and MQL/nurture do not alert; they sit in the Sheet for batch review.)*
3. **Email by Zapier → To:** `brett@rxbs.org, ginny@rxbs.org`
   - **Subject:** `🔥 SQL lead: {{first_name}} @ {{company}} ({{role}}, {{size}}) — score {{score}}`
   - **Body:**
     ```
     New high-fit toolkit lead — reach out today.

     Name:    {{first_name}}
     Email:   {{email}}
     Company: {{company}}  ({{size}})
     Role:    {{role}}
     Toolkit: {{toolkit}}
     Score:   {{score}}  (tier {{tier}})

     Suggested move: reply within the day with a 20-minute contract gut-check.
     Mark status = "contacted" in the PBS Toolkit Leads sheet once you reach out.
     ```
4. (Optional) **Google Sheets → Update Row:** set `status` = `alerted` for that row.

## Part 6 — The close CTA (no new build)
Already specced in `role_funnel_plan.md`: the role-branched Email 5 closes to `mailto:team@rxbs.org?subject=Contract gut-check: {{company}}`. When you do the email-copy phase, paste those in. For Monday, the alert + fast human outreach is the close.

## Part 7 — Test checklist
1. Submit a test form as **CFO + 500–5,000** → expect a Sheet row with `score 60 / tier SQL`, and an alert email to brett@ + ginny@ within ~1 min.
2. Submit as **HR + under-100** → Sheet row `score 5 / nurture`, **no** alert.
3. Submit as **Broker** → Sheet row `tier PARTNER`, no alert.
4. Confirm Emails 1–5 still fire on the normal schedule (sequence untouched).

## Part 8 — Phase 2 (later, not Monday)
- **Second-download / engagement scoring:** in Zap #1, look up the email in the Sheet first; if it already exists, bump score +25 and set `last_action = second_download` (raises borderline MQLs to SQL → alert).
- **Consult-click / reply detection** → +40, status `lead-hot`.
- **Role-branched Emails 1–5** (copy in `role_funnel_plan.md`) + the broker partner fork.
- **Renewal-month** capture (+15 if within 6 months).

## Monday build order
1. Create + seed the Google Sheet (Part 1).
2. Add the `ceo` role + `size` field to the Wix form (Part 2).
3. Add the Code score step + Sheets Create Row to the existing Zap (Parts 3–4).
4. Build the 3-step alert Zap (Part 5).
5. Run the 4 tests (Part 7). Publish.
