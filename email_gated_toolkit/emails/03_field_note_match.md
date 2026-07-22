# Email 3 — Day 5 — Go Deeper (CMS-token-driven)

**Trigger:** 3 days after Email 2 sends (Zapier: Delay 3 days → Microsoft Outlook Send).
**Sender:** Ginny Crisp, PharmD · team@rxbs.org
**Personalization tokens:** `{{first_name}}` (Wix built-in), plus the CMS-driven `{{field_note_title}}`, `{{field_note_blurb}}`, `{{field_note_url}}` sent to Zapier from the Toolkits collection via the webhook (per the May 19, 2026 architecture in `toolkit_dataset.md` — these are no longer gated by the old Wix form-field cap).

---

## Why this email is destination-agnostic (Option A, added May 29, 2026)

Email 3's destination is whatever the toolkit row's `field_note_*` fields point to. Until each toolkit's **dedicated** Field Note publishes, every row points to the always-live evergreen **PBM Contract Language Library** (`field_note_url` = `benefitblindspots.substack.com/p/pbm-contract-language-library`, `field_note_title` = `The PBM Contract Language Library`). When a toolkit's dedicated Field Note ships, swap that row's `field_note_title` / `field_note_blurb` / `field_note_url` to the live post — and **this email template does not change**, because it renders the tokens. So the copy must NOT hardcode the words "Field Note" around the link; it has to read correctly whether the destination is the Library or a Field Note. The body below does that: the title token is the headline, the blurb token is the substance, and the framing is "go deeper," not "this week's Field Note."

---

## Subject line

`Go deeper on the audit you downloaded (free)`

**Variants to test:**
- `{{first_name}}, the contract language behind your toolkit`
- `Free and evergreen: {{field_note_title}}`
- `Three minutes deeper on what you downloaded`

---

## Email body

```
Hi {{first_name}},

{{field_note_blurb}}

→ {{field_note_title}}: {{field_note_url}}

This is part of Benefit Blind Spots, where we publish the contract
language and audit frameworks behind the work we do for self-funded
plan sponsors. Subscribe (free) and you'll get each new Plan Sponsor
Toolkit handout the week it ships, plus the Field Notes that pair with
them.

→ Subscribe (free): benefitblindspots.substack.com

- Ginny

Ginny Crisp, PharmD | Chief Executive Officer
team@rxbs.org
www.rxbs.org
--
Prescription Benefit Solutions LLC | Charleston, SC | rxbs.org/privacy
You are receiving this because you requested a toolkit at rxbs.org.
Reply "unsubscribe" and we will remove you.
```

**How it renders today (Library default), e.g. Specialty Routing lead:**

> Hi Maria,
>
> Free and evergreen: the protective PBM contract language behind this audit, with the exact redlines to ask your PBM for. Drawn from the patterns we see across hundreds of contract reviews a year.
>
> → The PBM Contract Language Library: benefitblindspots.substack.com/p/pbm-contract-language-library
> …

**How it renders later (after the dedicated Field Note ships and the row is swapped):**

> Hi Maria,
>
> The worksheet quantifies the concentration. This Field Note decodes the routing vocabulary, white bagging and site-of-care steering, and how the contract turns a clinical decision into a margin decision.
>
> → Auditing Where Your Specialty Drugs Actually Fill: benefitblindspots.substack.com/p/...
> …

Same template, both cases. No re-edit needed when you swap a row.

---

## Tokens used

All three field-note tokens render in this email (corrected from the earlier draft, which assumed the May 14 form-field cap dropped `field_note_title` and `field_note_blurb`; the May 19 CMS-webhook architecture made all three available):

- `{{field_note_title}}` — the link label / headline line.
- `{{field_note_blurb}}` — the 1-2 sentence substance under the greeting.
- `{{field_note_url}}` — the link target.

UTM tagging on the link is still optional; add `?utm_source=email3&utm_medium=welcome&utm_campaign=toolkit` to `field_note_url` if you want Email 3 click attribution in Substack.

---

## Per-row field-note destinations (the upgrade map)

Every Tier 2 row ships with `field_note_url` = the Contract Language Library (Option A default). As each dedicated Field Note publishes, swap that row's three `field_note_*` fields to the live post. The drafted dedicated title + blurb for each toolkit live in `email_gated_toolkit/build_tier2_csv.py` (the `fn_title` / `fn_blurb` data per row), ready to paste. Reference pairings:

| First Toolkit downloaded | Dedicated Field Note to upgrade to (when live) |
|---|---|
| Contract Review Readiness | "How Plan Sponsors Actually Enforce Audit Rights" |
| Optimize vs. Go-to-Market | "What a PBM Transition Actually Looks Like: Timeline and Pitfalls" |
| PBR Framework | "Five Lines to Read First in Your PBM's Quarterly Report" |
| Channel Pricing | "What We See When We Audit Channel Pricing" (W18, shipped) |
| Rebate Report Audit | "Reading the Rebate Report Without Getting Spun" (W20, shipped) |
| PBM Compensation | "The Five Ways Your PBM Gets Paid" (W27) |
| Quarterly Reporting | "Five Lines to Read First in Your PBM's Quarterly Report" |
| GER Audit | "The Generic Guarantee That Doesn't Guarantee Much" (W28) |
| RFP Scoring | "What I'd Ask Every PBM in an RFP" (W25) |
| Specialty Routing | "White Bagging, Brown Bagging, and Where Your Specialty Dollars Go" (W22) |

(Full per-toolkit drafted title + blurb for all 25 rows are in `build_tier2_csv.py`.)

---

## Notes for the email designer

- Plain text format, same as Email 1 and Email 2.
- The `{{field_note_title}}` line is the centerpiece — make it visually prominent (bold, slightly larger on its own line).
- The `{{field_note_blurb}}` is the substantive value — give it room directly under the greeting.
- Substack subscribe is the secondary CTA.
- Do NOT reintroduce hardcoded "this week's Field Note" phrasing — it breaks when the destination is the Library. Keep the framing token-driven and "go deeper."
