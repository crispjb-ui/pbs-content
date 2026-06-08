# Role-Segmented Toolkit Funnel — Plan of Record

**Created June 2026; locked Jun 8, 2026.** Elevates the live Wix/Zapier toolkit funnel from role-blind to role-segmented, adds a contextual offer per role, a closing layer, and real-lead tracking. Builds on the existing 5-email sequence (Day 0/2/5/9/14) in `zapier_implementation_spec.md` + `emails/`. Companion to `toolkit_dataset.md` and `closing_layer_spec.md`.

## Decisions locked with Ginny (Jun 8, 2026)
- **6 declarative roles** — no passive "just researching" option; every choice is a role we route on.
- **Employee-count field shows for BUYERS only** — hidden for Broker and Other (those branches arrive with `size` empty).
- **Contextual offering by role** — the close, the next-step offer, and the lead routing all change by who they say they are.
- **Booking:** no external tool. The "book a call" CTA is a **`mailto:team@rxbs.org`** with a pre-filled subject so replies self-route. Revisit Calendly/Wix Bookings later.
- **Speed-to-lead alerts:** **email to brett@rxbs.org and ginny@rxbs.org** (no SMS/Slack for now).
- **Pipeline tracker:** **Google Sheets** (not Airtable).

The funnel keeps the same plumbing already live (`velo_toolkit_page_code.js` → `backend/toolkitLead.web.js` → Zapier Catch Hook → CMS lookup → 5 Outlook emails). This plan adds **two form inputs** (a 6-option role dropdown + a buyer-only size field) and **one Zapier step** (a role→offering lookup that scores the lead and drives contextual copy). No path explosion: one lookup does the branching.

---

## 1. The form (what changes on `rxbs.org/toolkit/<slug>`)

Field order, top to bottom:

1. First name *(always, required)*
2. Work email *(always, required)*
3. Company *(always, required)*
4. **Role** *(always, required — dropdown, 6 options below)*
5. **Number of employees** *(BUYER roles only — collapses for Broker / Other)*

### The 6 roles (exact dropdown strings + branch)

The dropdown labels MUST match these strings exactly — the Zapier scorer and the Velo `ROLES` map both key on them.

| # | Dropdown label (the `role` value) | Branch | Sees size field? |
|---|---|---|---|
| 1 | `CEO / Owner` | **Buyer** | ✅ |
| 2 | `CFO / Finance leader` | **Buyer** | ✅ |
| 3 | `HR / Benefits leader` | **Buyer** | ✅ |
| 4 | `Benefits / plan manager` | **Buyer** | ✅ |
| 5 | `Broker / Consultant` | **Partner** | ❌ |
| 6 | `Other (TPA / pharmacy / vendor)` | **Nurture** | ❌ |

There is no "just looking" escape hatch — deliberate; it forces a self-classification we route on.

### The size field (buyers only) — exact strings + score

| Band (the `size` value) | What it signals | Size score |
|---|---|---|
| `Fewer than 100` | Usually fully insured, not the self-funded ICP | +0 |
| `100–499` | Emerging self-funded | +10 |
| `500–2,499` | **Core ICP** | +20 |
| `2,500–9,999` | **Core ICP** | +25 |
| `10,000+` | Large; high value but often consultant-locked, longer cycle | +18 |

For Broker / Other the field never renders, so `size` arrives empty and the scorer skips the size add. The Velo show/hide is already wired in `velo_toolkit_page_code.js` (the `ROLES` map + `syncSizeField()`).

---

## 2. Two funnels, not one: buyers vs partners vs nurture
- **Buyers** (CEO, CFO, HR, Benefits mgr) → goal = a **Contract / Claims Review engagement**. Pitch the audit, contextual to the role.
- **Partner** (Broker / Consultant) → per the CLAUDE.md "brokers as partners" rule, **never pitch a broker an audit**. Their track = referral/partnership: co-brandable tools, "run these with your clients," PBS as the independent audit bench they bring in. Metric = clients referred, not a direct close.
- **Nurture** (Other) → newsletter + Substack only; no sales push.

Everything forks on this.

---

## 3. Contextual offering by role (the heart of this)

The toolkit they download is fixed (it's the page they're on). What's **contextual** is the *close* — the next-step offer in Email 4/5, the booking subject line, and whether the lead is sales, partner, or nurture. One Zapier lookup keyed on role outputs all of it.

| Role | Offer headline (Email 4/5) | Offer body | CTA |
|---|---|---|---|
| **CEO / Owner** | *Where your plan is most exposed, in 15 minutes* | Owners don't need a 40-page report. You need the two or three places your PBM contract is quietly costing you, in plain English, and whether it's worth acting on this year. That's the call. No deck. | Book a 15-minute exposure read → team@rxbs.org |
| **CFO / Finance leader** | *The three line items most likely overcharged on your plan* | We review hundreds of PBM contracts a year, and the same handful of line items run high on nearly every one. Send your last 12 months of pharmacy claims and we'll pressure-test them against what we see in the market. A number, not a narrative. | Request a pharmacy spend pressure-test → team@rxbs.org |
| **HR / Benefits leader** | *Find the savings without changing your members' experience* | The fear with any pharmacy change is member disruption: angry calls, switched drugs, a buried benefits team. Most of the savings we find never touch the member. We'll show you which levers are invisible to employees before you decide anything. | Book a member-disruption-free audit → team@rxbs.org |
| **Benefits / plan manager** | *The clauses that let you actually run the review* | If you've ever asked your PBM for data and gotten a runaround, the problem is usually your contract, not your rep. We'll check your audit-rights and reporting language and tell you exactly what you're entitled to ask for, with the paste-ready request. | Request a reporting & audit-rights check → team@rxbs.org |
| **Broker / Consultant** | *Make your next client's PBM review the one they remember* | We work behind brokers, not around them. Bring us into a client's pharmacy review and you keep the relationship: we do the contract teardown, you deliver the win. Co-branded deliverables, your logo, your meeting. The line-by-line audit is on us. | Start a partner conversation → team@rxbs.org |
| **Other (TPA / pharmacy / vendor)** | *Keep the analysis coming* | The deepest version of this work lives in The Pharmacy Benefits Briefing and Benefit Blind Spots. Every week: one PBM mechanism decoded, one thing you can do about it. | Subscribe (free) → benefitblindspots.substack.com |

Emails 1–3 stay role-agnostic (PDF delivery, the paired second toolkit, the Field Note) — useful to everyone, keeps the build simple. The **role swap lands in Email 4 and Email 5**, the conversion emails, via merge fields `{{offer_headline}}`, `{{offer_body}}`, `{{offer_cta}}`. `{{booking_subject}}` pre-fills the mailto so a reply lands organized.

---

## 4. Scoring & routing (drives the closing layer)

The Zapier lookup outputs per submission: `role_key`, `branch`, `base_score`, plus the offer fields. The scorer adds the size score and assigns a tier.

**Base score by role:**

| Role | `role_key` | branch | base_score |
|---|---|---|---|
| CEO / Owner | `ceo` | buyer | 30 |
| CFO / Finance leader | `cfo` | buyer | 30 |
| HR / Benefits leader | `hr` | buyer | 25 |
| Benefits / plan manager | `benefits_mgr` | buyer | 18 |
| Broker / Consultant | `broker` | partner | — (tier = PARTNER) |
| Other | `other` | nurture | — (tier = NURTURE) |

**Total score (buyers only)** = base_score + size_score (§1).

**Tier assignment:**

| Condition | Tier | What happens |
|---|---|---|
| branch = partner | **PARTNER** | Instant alert to brett@ + ginny@; partner offer; Sheet row tier=PARTNER |
| buyer, score ≥ 45 | **SQL** | Instant alert to brett@ + ginny@; sales offer; Sheet row tier=SQL |
| buyer, score 25–44 | **MQL** | No instant alert; nurture + watch; Sheet row tier=MQL |
| buyer, score < 25 | **LEAD** | Newsletter nurture only; Sheet row tier=LEAD |
| branch = nurture | **NURTURE** | Newsletter only; Sheet row tier=NURTURE |

Worked examples: CEO + 500–2,499 = 50 → SQL. CFO + 2,500–9,999 = 55 → SQL. HR + 500–2,499 = 45 → SQL. CEO + <100 = 30 → MQL. Benefits mgr + 10,000+ = 36 → MQL. Broker (any) → PARTNER.

---

## 5. Zapier lookup + scorer (paste-ready)

Add one **Code by Zapier** step right after the CMS lookup (Step 2), keyed on `role` + `size`. Returns the tier, score, alert flag, and the contextual offer fields in one step.

```javascript
// Code by Zapier — input variables: role (text), size (text), company (text)
const TABLE = {
  "CEO / Owner":                    {k:"ceo",          branch:"buyer",   base:30,
    h:"Where your plan is most exposed, in 15 minutes",
    cta:"Book a 15-minute exposure read → team@rxbs.org",
    subj:"PBM exposure read"},
  "CFO / Finance leader":           {k:"cfo",          branch:"buyer",   base:30,
    h:"The three line items most likely overcharged on your plan",
    cta:"Request a pharmacy spend pressure-test → team@rxbs.org",
    subj:"Pharmacy spend pressure-test"},
  "HR / Benefits leader":           {k:"hr",           branch:"buyer",   base:25,
    h:"Find the savings without changing your members' experience",
    cta:"Book a member-disruption-free audit → team@rxbs.org",
    subj:"Member-friendly pharmacy audit"},
  "Benefits / plan manager":        {k:"benefits_mgr", branch:"buyer",   base:18,
    h:"The clauses that let you actually run the review",
    cta:"Request a reporting & audit-rights check → team@rxbs.org",
    subj:"Audit-rights & reporting check"},
  "Broker / Consultant":            {k:"broker",       branch:"partner", base:0,
    h:"Make your next client's PBM review the one they remember",
    cta:"Start a partner conversation → team@rxbs.org",
    subj:"Broker partnership"},
  "Other (TPA / pharmacy / vendor)":{k:"other",        branch:"nurture", base:0,
    h:"Keep the analysis coming",
    cta:"Subscribe (free) → benefitblindspots.substack.com",
    subj:""}
};
const SIZE = {"Fewer than 100":0,"100–499":10,"500–2,499":20,"2,500–9,999":25,"10,000+":18};

const r = TABLE[inputData.role] || TABLE["Other (TPA / pharmacy / vendor)"];
const sizeScore = SIZE[inputData.size] || 0;
let tier;
if (r.branch === "partner")      tier = "PARTNER";
else if (r.branch === "nurture") tier = "NURTURE";
else {
  const total = r.base + sizeScore;
  tier = total >= 45 ? "SQL" : total >= 25 ? "MQL" : "LEAD";
}
const score = r.branch === "buyer" ? r.base + sizeScore : 0;
const alert = (tier === "SQL" || tier === "PARTNER") ? "yes" : "no";

output = [{
  role_key: r.k, branch: r.branch, score, tier, alert,
  offer_headline: r.h, offer_cta: r.cta,
  booking_subject: r.subj ? r.subj + " — " + (inputData.company || "") : ""
}];
```

`offer_body` is long; keep it in the email template via a tiny second Formatter Lookup keyed on `role_key → body`, or store it in a small CMS `role_offers` collection. The headline + CTA + subject from the Code step carry most of the contextual feel.

---

## 6. Role-branched Email 5 — the close (full copy)

Same Day-14 slot; the body changes by role. Buyers get an audit invitation contextual to their offer; the broker gets the partner fork (never an audit pitch); Other gets nurtured to Substack.

**CEO / Owner:**
```
{{first_name}},

Five revenue streams flow from your plan to your PBM. Most companies track one. The worksheets you have been pulling each open one of them.

If you want to know what all five total for your plan, that is the call: 15 minutes, in plain English, where you are most exposed and whether it is worth acting on this year. No deck.

Reply, or email team@rxbs.org, subject "PBM exposure read: {{company}}."

Ginny Crisp, PharmD
```

**CFO / Finance leader:**
```
{{first_name}},

You have run a few of these worksheets now. Each one surfaces one revenue stream. The version we run for clients totals all five into one dollar figure you can take to renewal.

We review hundreds of PBM contracts a year, and the same handful of line items run high on nearly every one. Send your last 12 months of pharmacy claims and we will pressure-test them against what we see in the market. You get a number, not a narrative.

Reply, or email team@rxbs.org, subject "Pharmacy spend pressure-test: {{company}}." Twenty minutes tells us both whether there is anything worth pursuing.

Ginny Crisp, PharmD
```

**HR / Benefits leader:**
```
{{first_name}},

These worksheets cover the pieces. The full review also gives you the fiduciary documentation and the member-impact read, the part that protects the plan and the people on it.

Here is the part that matters most: most of the savings we find never touch the member. We will show you which levers are invisible to your employees before you decide anything.

Worth 20 minutes? Reply, or email team@rxbs.org, subject "Member-friendly pharmacy audit: {{company}}." Looping in your finance lead is welcome.

Ginny Crisp, PharmD
```

**Benefits / plan manager:**
```
{{first_name}},

If you have ever asked your PBM for data and gotten a runaround, the problem is usually the contract, not your rep.

We will check your audit-rights and reporting language and tell you exactly what you are entitled to ask for, with the paste-ready request you can send the same day.

Reply, or email team@rxbs.org, subject "Audit-rights & reporting check: {{company}}."

Ginny Crisp, PharmD
```

**Broker / Consultant (partner — NOT an audit pitch):**
```
{{first_name}},

You clearly run real PBM oversight for your clients. These worksheets are built to make that work sharper, and you are welcome to use them in your client reviews.

When a client needs an independent contract or claims audit to back the conversation, that is what we do, as your bench, not in front of you. Co-branded deliverables, your logo, your meeting. The line-by-line audit is on us. Plenty of brokers bring us in where an outside audit carries more weight.

If that is useful, reply, or email team@rxbs.org, subject "Broker partnership: {{firm}}." Happy to walk through how it works.

Ginny Crisp, PharmD
```

**Other (TPA / pharmacy / vendor) — nurture:**
```
{{first_name}},

The deepest version of this work lives in two places, both free:

The Pharmacy Benefits Briefing (LinkedIn) and Benefit Blind Spots (Substack). Every week: one PBM mechanism decoded, one thing you can actually do about it.

→ benefitblindspots.substack.com

Ginny Crisp, PharmD
```

---

## 7. Build order (fastest path to more closes)
1. **Form:** add the 6-option `Role` dropdown + the 5-band `Number of employees` dropdown (buyer-only show/hide already coded in `velo_toolkit_page_code.js`); add `size` Text field to the ToolkitLeads collection; Publish.
2. **Closing layer first** (½ day): the Google Sheet + the Code scorer + the Sheets row + the separate alert Zap — see `closing_layer_spec.md`. Highest leverage.
3. **Contextual Email 4/5** — wire `{{offer_headline}}` / `{{offer_cta}}` / `{{booking_subject}}` into Email 4 and Email 5; paste the §6 role variants. Phase 2, after the alert/tracking layer is live.

---

## 8. What's deliberately NOT in v1
- No per-role *different toolkit PDF* — they get the toolkit they asked for. Role only changes the close.
- No calendar/scheduler — booking is the `team@rxbs.org` mailto with a pre-filled subject.
- No path explosion in Zapier — one Code step + a couple merge fields, not six branches.
- Broker track is a *partnership*, not a discount. Keep it that way.
- Engagement re-scoring (second-download +25, consult-click +40, renewal-month +15) is Phase 2.
