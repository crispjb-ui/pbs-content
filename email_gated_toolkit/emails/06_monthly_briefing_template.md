# Email 6+ — Monthly "PBS Briefing" — Post-Sequence Nurture (recurring)

**Created:** July 3, 2026 (approved from the 6-month strategy audit). Fixes the "sequence ends at Day 14 with no after-life" gap: every captured lead who finished (or lapsed out of) Emails 1-5 now gets one value-first note per month, forever, until they unsubscribe or convert.

**Audience:** every row in the "PBS Toolkit Leads" Sheet / Wix Contacts with a completed or expired 5-email sequence, all tiers (SQL through NURTURE), excluding active clients and anyone in a live sales conversation (owner column non-empty).

**List boundary (decided July 3, 2026, Ginny/Brett):** the briefing list is **leads only. NEVER import the Substack subscriber list into Wix.** Three reasons: (1) consent and deliverability — Substack subs opted into a Substack publication, not a Wix-sent email; a cold-imported list draws spam flags that would damage deliverability for the toolkit emails, which are the money emails; (2) Substack subs already get three Ginny emails a week, so the briefing adds nothing but an unsubscribe prompt; (3) intent levels differ — toolkit leads traded a work email for an audit worksheet (buying-adjacent), which is who this email is for. The lists converge the right way on their own: Substack readers who get serious download a toolkit and become leads. People on both lists get both; acceptable, because the briefing is observations-from-our-work, not article promos.

**Automation (added July 3, 2026):** the draft is generated automatically on the 25th of each month by the `monthly-briefing-draft` workflow via `/draft-monthly-briefing` (saved to `email_gated_toolkit/briefings/briefing_YYYY_MM.md` for review; nothing sends automatically). The command enforces the fortnight-spacing skip rule against Email 07 and the no-repeat-toolkit-within-3-issues rotation.
**Send:** first Tuesday of each month, 9:00 AM EST (off the 8:30 LinkedIn cadence; Tuesday is a strong B2B email day and avoids Monday publish load).
**Mechanism (phase 1, zero new infrastructure):** Wix Email Marketing campaign to the segmented contact list, drafted from this template each month. Phase 2 (if volume grows): move to an automation keyed on a `sequence_complete` contact label.
**Sender:** Ginny Crisp, PharmD · team@rxbs.org. Same personal-note register as Emails 1-5: Plex Sans plain text, no buttons, no banners.

---

## Subject line pattern

`What we're seeing in PBM contracts — {{Month}}`

Variants to rotate: `Three things from this month's contract reviews` · `{{Month}} pharmacy benefits briefing` · `The clause we kept flagging this month`

---

## Body template (fill the three slots each month, keep under ~250 words)

```
Hi {{first_name}},

Once a month, three things worth knowing from the contract and claims
work we are doing at Prescription Benefit Solutions. No pitch, just the
patterns.

(1) {{OBSERVATION_1 — a current contract/claims pattern, sourced from
    the month's reviews, the shocking-fact bank, or quarterly research.
    One short paragraph, plan-sponsor-actionable.}}

(2) {{OBSERVATION_2 — a news development with the employer impact stated
    plainly. Pull from the Wednesday roundup's strongest item.}}

(3) {{OBSERVATION_3 — one practical tool: name a specific toolkit and the
    situation it fits. Link: rxbs.org/toolkit/{{slug}}.}}

That is the briefing. If any of these touches something your plan is
working through, reply and tell me about it. I read every reply.

- Ginny

Ginny Crisp, PharmD | Chief Executive Officer
team@rxbs.org | www.rxbs.org
```

---

## Rules of production

- **Value first, always.** No month leads with an offer. The Contract Review gets named at most quarterly, and only as observation 3's tool slot ("when a plan wants all of these run together, that is a Contract Review").
- **Source discipline:** observations come from real PBS work or sourced facts (shocking-fact bank citations); no fabricated statistics; disclaimer rule applies if dollar figures appear.
- **One unfakeable detail per issue** (Humanize Check): a clause section number, a real (anonymized) scenario from the month, a specific drug or dollar pattern.
- **Naming rule:** spell out Prescription Benefit Solutions; "PBS" only after first use in the same email, and never in the subject line.
- **No em-dash sentence separators; ASCII-safe punctuation** (email clients vary).
- **Reuse economics:** each issue should be assembled in under 30 minutes from existing material (roundup + fact bank + toolkit dataset). If it takes longer, it is over-built.
- **Measurement:** log opens/clicks/replies per issue in `tracking_dashboard.md`. Success = 30-40% open rate steady-state and at least one substantive reply per issue at 100+ list size. A reply is a sales-hour item the same week.
- **Exclusions each send:** active clients, open sales conversations, unsubscribes, and anyone who received the renewal-reactivation email (07) in the same 2-week window (never two PBS emails in the same fortnight).
