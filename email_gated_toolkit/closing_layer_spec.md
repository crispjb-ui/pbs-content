# Closing Layer — Pipeline Tracker + Speed-to-Lead Alerts

**Status: ready to build (target Monday). ~½ day.** The layer on top of the role-segmented funnel (`role_funnel_plan.md`): every submission lands in a **Google Sheet** pipeline, and every **SQL or PARTNER** lead fires an **instant alert to brett@rxbs.org + ginny@rxbs.org** so the lead gets a human reply while it's hot.

Decisions locked (Jun 8): tracker = **Google Sheets** (no Airtable); alerts → **brett@ + ginny@**; booking = **team@rxbs.org** mailto. Scoring/tiering happens in the Zapier Code step from `role_funnel_plan.md` §5.

Architecture note: a Zapier **Filter** halts the whole Zap, so we do NOT put the alert filter in the existing email Zap (it would kill the email sequence for non-SQL leads). Instead the existing Zap writes **every** lead to the Sheet; a **second, tiny Zap** triggers off new Sheet rows and fires the alert only for SQL/PARTNER. Clean, and the working email sequence stays untouched.

---

## Part 1 — The Google Sheet (do first)

Create a sheet **"PBS Toolkit Leads"**, tab **"Leads"**, with this exact header row (row 1):

```
date | first_name | email | company | role | size | branch | score | tier | toolkit | status | last_action | owner | notes
```

| Column | Filled by | Values |
|---|---|---|
| `date` | Zapier (`{{zap_meta_human_now}}`) | submission timestamp |
| `first_name` `email` `company` `role` `size` | form fields | as submitted (`size` blank for broker/other) |
| `branch` `score` `tier` | the Code step (§5 of the funnel plan) | buyer/partner/nurture · 0–55 · SQL/MQL/LEAD/PARTNER/NURTURE |
| `toolkit` | CMS lookup | toolkit name they downloaded |
| `status` | **you, manually** | new → alerted → contacted → call → proposal → closed (or `referred` for partners) |
| `last_action` | you | free text + date of last touch |
| `owner` | you | brett / ginny |
| `notes` | you | call notes, context |

- The first 10 columns write automatically; the last 4 are the human pipeline you work down. Filter to `tier = SQL`, `status = new/alerted` to see who needs a call today.
- **Seed it now** with the 3 current pipeline leads (one row each, status = wherever they are) plus the **Chief People Officer intro** from the Derms on Drugs host as a PARTNER-referred SQL — so the funnel has a baseline from day one.
- Share the sheet with the Google account Zapier is connected to.

---

## Part 2 — Wix form fields (needed for scoring)

Already coded in `velo_toolkit_page_code.js` and `velo_backend_toolkitLead.web.js`; the Wix click-work:
1. **Role** dropdown — the 6 exact strings from `role_funnel_plan.md` §1.
2. **Number of employees** dropdown `#inputSize` inside `#sizeBox` (set "Collapsed on load") — the 5 exact bands. Buyer-only show/hide is handled by the page code.
3. Add a `size` Text field to the `ToolkitLeads` collection.

`size` already flows to Zapier via the backend `...lead` spread — no extra payload wiring.

---

## Part 3 — Lead score model

Computed in the **Code by Zapier** step from `role_funnel_plan.md` §5 (do not duplicate the logic here — that block is the single source of truth). It returns `role_key`, `branch`, `score`, `tier`, `alert`, and the contextual offer fields. Tiers: **SQL ≥ 45**, **MQL 25–44**, **LEAD < 25** (buyers); **PARTNER** (broker); **NURTURE** (other).

---

## Part 4 — Zap #1 additions (the existing toolkit email Zap)

Insert two steps **right after the CMS lookup step (Webhooks GET → get_toolkit)** and **before Email 1**:

1. **Code by Zapier** — the scorer (`role_funnel_plan.md` §5). Map inputs from the Catch Hook: `role`, `size`, `company`.
2. **Google Sheets → Create Spreadsheet Row** into "PBS Toolkit Leads" / "Leads":
   - `date` = `{{zap_meta_human_now}}`
   - `first_name` `email` `company` `role` `size` = Catch Hook fields
   - `branch` `score` `tier` = Code step outputs
   - `toolkit` = `{{2__toolkit_name}}` (CMS lookup)
   - `status` = `new` · `last_action`, `owner`, `notes` = blank

Leave Emails 1–5 and their delays exactly as they are. Every lead lands in the Sheet; the sequence is untouched.

> Free Zapier note: this adds 1 task/lead (6 total now). 100 free tasks/mo ≈ 16 leads/mo; the $19.99 Starter tier covers ~125. Worth it once SQLs land.

---

## Part 5 — Zap #2 (NEW) — speed-to-lead alert

A separate 3-step Zap so the filter can't harm the email sequence:

1. **Trigger:** Google Sheets → **New Spreadsheet Row** ("PBS Toolkit Leads" / "Leads").
2. **Filter by Zapier → only continue if** `tier` (text) **exactly matches** `SQL` **OR** `tier` exactly matches `PARTNER`. (MQL/LEAD/NURTURE sit in the Sheet for batch review; no alert.)
3. **Email by Zapier → Send Outbound Email:**
   - **To:** `brett@rxbs.org, ginny@rxbs.org`
   - **Reply-To:** the lead's `{{email}}` (a reply goes straight to them)
   - **Subject:** `🔥 {{tier}} lead: {{first_name}} @ {{company}} ({{role}}, {{size}}) — score {{score}}`
   - **Body:**
     ```
     New {{tier}} toolkit lead — reach out today.

     Name:    {{first_name}}
     Email:   {{email}}
     Company: {{company}}  ({{size}})
     Role:    {{role}}
     Toolkit: {{toolkit}}
     Score:   {{score}}  (tier {{tier}})

     Suggested first move ({{role}}):
     {{offer_headline}}
     {{offer_cta}}

     Reply to this email to reach {{first_name}} directly.
     Mark status = "contacted" in the PBS Toolkit Leads sheet once you reach out.
     ```
   (`offer_headline` / `offer_cta` come through only if you also wrote them into the Sheet row; otherwise drop those two lines.)
4. (Optional) **Google Sheets → Update Row:** set `status` = `alerted` for that row.

**Speed note:** Google Sheets triggers **poll** — free Zapier ~15 min, paid (Starter) ~1–2 min. For true speed-to-lead, go paid once SQL volume is real. **Instant alternative (no polling):** have the Velo backend POST SQL/PARTNER leads to a *second* dedicated Catch Hook (scoring would then live in Velo). v1 keeps it all in Zapier; flip to the Velo-direct alert if the 15-min poll proves too slow.

---

## Part 6 — Status workflow (how you work the Sheet)

1. Alert hits brett@/ginny@ → reply to the lead within the hour → `status = contacted`, set `owner`, `last_action`.
2. Booking is the mailto reply; when a call lands → `status = call`.
3. After the call → `proposal`, then `closed` (won/lost). Partners → `referred`.
4. MQL/LEAD/NURTURE rows: no alert; they ride the email nurture. Promote manually if they reply to any email (replies land in team@rxbs.org — watch that inbox).

---

## Part 7 — Test checklist (the 6-role matrix)

1. **CEO + 500–2,499** → Sheet row `score 50 / tier SQL`, alert to brett@ + ginny@.
2. **CFO + 2,500–9,999** → `score 55 / SQL`, alert.
3. **HR + Fewer than 100** → `score 25 / MQL`, **no** alert.
4. **Benefits mgr + 10,000+** → `score 36 / MQL`, no alert.
5. **Broker** (no size field shown) → `tier PARTNER`, alert.
6. **Other** → `tier NURTURE`, no alert.
7. Confirm Emails 1–5 still fire on the normal schedule for all six (sequence untouched).

---

## Part 8 — Phase 2 (later, not Monday)
- **Engagement re-scoring** in Zap #1: look up the email in the Sheet; if it exists, bump score +25 (`last_action = second_download`) — raises borderline MQLs to SQL → alert. Consult-mailto click → +40, status `lead-hot`. Renewal within 6 months → +15.
- **Contextual Emails 1–3** if the role-agnostic versions underperform.
- **Scheduler** (Calendly / Wix Bookings) if booking volume justifies replacing the mailto.

---

## Monday build order
1. Create + seed the Google Sheet (Part 1).
2. Confirm the Wix form has the 6-role dropdown + buyer-only `size` field; add `size` to the ToolkitLeads collection; Publish (Part 2).
3. Add the Code scorer + Sheets Create Row to the existing Zap (Parts 3–4).
4. Build the 3-step alert Zap (Part 5).
5. Run the 6-role test matrix (Part 7). Publish.
