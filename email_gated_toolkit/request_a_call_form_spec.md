# Request-a-Call Form — Spec (replaces mailto: dead-ends)

**Created:** July 3, 2026 (approved from the 6-month strategy audit).
**Problem:** every discovery-call CTA in the system (Email 5, role-branched closes, site contact points) dead-ends at `mailto:team@rxbs.org`, a blank compose window. That is real friction at the single most valuable conversion step, and it produces zero structured data.
**Constraint honored (Ginny's explicit preference, Jul 3):** NO calendar-exposing scheduler (no Calendly, no Wix Bookings). Ginny's admin arranges times by email based on her availability. This form feeds that exact workflow; it does not replace it.

---

## 1. Page and placement

- **Page:** `rxbs.org/request-a-call` (Wix, Utility/Conversion archetype, same visual system as the toolkit landing pages).
- **Replaces mailto links in:** Email 5 (`05_two_ways_forward.md` CTA), the role-branched Email 5 closes (`role_funnel_plan.md` §5 CTAs), Email 7 reactivation (when live), Email 8 repeat follow-up, the `/for-brokers` page CTA (`broker_partner_track.md`), and site contact CTAs as pages get rebuilt. `team@rxbs.org` remains published as a secondary option everywhere; some senior buyers simply prefer email.
- **Link pattern with topic pre-set:** `rxbs.org/request-a-call?topic=contract-review` (also `renewal-second-opinion`, `broker-partnership`, `claims-review`, `general`). Velo reads the query param and pre-selects the topic dropdown, so each CTA lands contextually.

## 2. Form fields (5 visible, mirrors the proven toolkit form pattern)

| # | Field | Type | Required | Notes |
|---|---|---|---|---|
| 1 | First name | text | yes | |
| 2 | Work email | email | yes | |
| 3 | Company | text | yes | |
| 4 | What would you like to talk through? | dropdown | yes | Options: Contract review · Renewal second opinion · Claims review · Broker/consultant partnership · Something else. Pre-set by `?topic=` when present. |
| 5 | Anything we should know before the call? + preferred timing | textarea | no | Placeholder: "A few sentences on your situation, and whether mornings or afternoons generally work better." One free-text field covers both context and time preference without exposing any calendar. |

No role/size fields here: if the lead came through the toolkit funnel we already have them (match on email); if not, the admin asks on the scheduling thread. Shortness is the point.

## 3. Backend behavior (Velo, same architecture as `toolkitLead.web.js`)

1. `submitCallRequest()` web method: append/update Wix Contact (label `call-request`), upsert a `CallRequests` CMS row (name, email, company, topic, notes, source URL, timestamp, matched-lead flag).
2. **Match against `ToolkitLeads` by email**: if found, carry over tier/score/downloads into the notification so Ginny sees the full history in one email.
3. **Instant notification email** to ginny@rxbs.org + admin (+ brett@ to mirror the hot-lead alert list), reply-to set to the requester. Subject: `[CALL REQUEST - {{topic}}] {{name}}, {{company}}{{tier_suffix}}` where `tier_suffix` = ` - SQL lead, 3 downloads` when matched. Body includes everything needed to schedule without opening any dashboard.
4. **Confirmation email to the requester** (immediate, plain): "Got it. {{admin_name}} from our team will email you within one business day to find a time." Sets the expectation that matches the real workflow.
5. Append a row to the "PBS Toolkit Leads" Sheet (`last_action = call-requested`, or a new row with `source = call-form` if unmatched) via the existing Zapier catch-hook pattern.

## 4. Service-level rule (process, not code)

A call request is answered by the admin **within one business day**, even if only to say "finding a time." Speed-to-lead is the documented pattern behind every conversion this system has produced; a fast human reply from a real person is the experience a scheduler cannot give and this workflow can.

## 5. Measurement

`CallRequests` CMS + the Sheet give, for the first time: call-requests per month, topic mix, source (which email/page drove it), matched-vs-cold ratio, and request→held-call rate. These feed the primary KPI (qualified conversations per month, target 4-6 by October) directly.

## 6. Build checklist

- [x] Claude: draft the Wix page copy block + Velo page/backend code files. ✅ Done — Velo files `velo_call_request_page_code.js` + `velo_backend_callRequest.web.js`; paste-ready page copy, form/element-ID spec, schema, CMS fields, and both emails in `funnel_pages_build_pack.md` (Jul 6, 2026).
- [ ] Ginny: create the `CallRequests` collection, build the page, wire the notification recipients, publish.
- [ ] Claude: sweep every mailto CTA (emails 5/7/8, role plan §5, broker track, week files' newsletter first comments where applicable) to the form URL with the right `?topic=` once the page is confirmed live. Do not swap any link before the page renders (same confirm-before-link rule as toolkits).
