# Broker Partner Track — the Hylant-Diversification Engine

**Created:** July 3, 2026 (approved from the 6-month strategy audit, `strategy_audit_2026_07.md`)
**Objective:** 3-5 active non-Hylant broker relationships by December 31, 2026.
**Why:** ~95% of PBS client flow comes through one broker relationship (Hylant). That relationship stays the anchor; this track adds parallel broker relationships so a single point of failure becomes a portfolio. The GWCU pattern (broker bulk-downloads the toolkit library → meeting → collaboration) proved the funnel can produce these; this track industrializes it.

**Standing guardrails (load-bearing, from CLAUDE.md):**
- Brokers are partners, PBMs are the adversary. Every asset frames the broker as the hero who brings independent pharmacy expertise to their clients. Never imply a broker missed something (W14 tripwire).
- Never pitch a broker an audit. The offer is partnership: PBS works behind the broker, not around them. The broker stays the relationship lead with their client, always.
- Public copy spells out "Prescription Benefit Solutions" (naming rule, Jun 19, 2026).

---

## 1. The proof pattern (what we are replicating)

GWCU / Mike Thomson, June 2026: downloaded ~17 toolkits over a short window → PARTNER-tier alert → personal outreach → June 22 meeting → collaboration forming for his clients' pharmacy needs. The sequence that worked: **useful assets → visible expertise → partner framing → fast personal follow-up → a defined way to work together.** Every element below hardens one step of that sequence.

## 2. Broker relationship tracker

Maintained here (move to the Google Sheet as a "Partners" tab when the count passes ~8). Status ladder: `LEAD → CONTACTED → MET → COLLABORATING → REFERRING` (REFERRING = has brought PBS into at least one client engagement).

| Broker / Firm | Contact | Source | Status | Last touch | Next step | Notes |
|---|---|---|---|---|---|---|
| Hylant | (anchor partner) | Pre-existing | REFERRING | ongoing | maintain cadence | The anchor. This track diversifies alongside, never away from, Hylant. |
| GWCU | Mike Thomson | Toolkit funnel (bulk download, Jun 2026) | COLLABORATING | Jun 22, 2026 meeting | scope first joint client engagement; send enablement kit | The proof pattern. |
| Custom Benefits | Cristy Gupton | Toolkit funnel (PARTNER lead) | CONTACTED | Jun 2026 email | invite to a 20-minute partner conversation | |
| Health Compass Consulting (Orlando, FL) | Bunky Garrabrant (Implementation Director, Procurement) | Toolkit funnel PARTNER alert Jul 13, 2026 + **paid monthly Substack sub Jul 11** (the sub that triggered the #85 Rising badge) | LEAD | — | Ginny P1 note (fee-based fiduciary firm; reference their Fiduciary Governance Protocol; downloads = Contract Review Readiness + Mid-Year Amendment Letter → likely a live client situation) | Founded 2018 by Donovan Pyle (Validation Institute senior advisor); fee-based, carrier/vendor-agnostic, anti-commission positioning = ideological twin of the PBS independence stance. Bunky = ops/procurement + media contact; Pyle = the eventual relationship. Highest-alignment PARTNER lead yet. |
| *(open)* | | | | | | Target: fill from PARTNER-tier alerts + Broker-pillar content respondents. |

**Sourcing lanes for the open rows:** (1) PARTNER-tier funnel alerts (already wired), (2) commenters/savers on Broker-pillar LinkedIn content (Library carousels especially; brokers are the documented bookmark audience), (3) warm intros from podcast hosts and existing partners ("who else should I talk to?"), (4) the Library 02 "Five Clauses the Best Brokers Check First" repost audience.

## 3. `/for-brokers` landing page copy (Wix build)

*Dovetails with the website-revamp review item ⑤ (`/for-brokers` partner page) already in OPEN_ITEMS. This is the copy for that build. Page archetype: Utility/Conversion. CTA routes to the request-a-call form (see `email_gated_toolkit/request_a_call_form_spec.md`) with topic pre-set to "Broker partnership."*

**Hero headline:** Your clients' pharmacy questions, answered by an independent bench.

**Hero subhead:** Prescription Benefit Solutions works behind brokers and consultants, not around them. You stay the relationship lead. We bring the clinical pharmacist's read of the PBM contract, the claims, and the renewal.

**Section 1 — What we do for your clients (through you):**
- PBM contract reviews and audits: the redline agenda before your client signs or renews.
- Pharmacy claims reviews: where the spend is actually going, mechanic by mechanic.
- PBM RFP support: independent scoring, so the incumbent's story gets tested.
- Renewal-season second opinions: a fast, independent read when the timeline is tight.

**Section 2 — How the partnership works:**
1. You bring us in. Your client hears about us from you, and every deliverable reinforces that you brought the expertise.
2. We do the pharmacy work. Clinical pharmacists who review hundreds of PBM contracts a year, independent of any PBM revenue.
3. You lead the conversation. Findings go through you, in a form you can present. We join the client meeting when you want us there, in the role you define.

**Section 3 — Proof:** In 2025, Prescription Benefit Solutions delivered $78.7M in contracted savings across 203 clients, including 59 PBM RFPs at a 25% savings rate. *(Guardrails: contracted-not-offered; 25% is the RFP rate, never "average"; PBS claims these solo.)*

**Section 4 — Start with the tools:** The full Plan Sponsor Toolkit library is free and co-usable with your clients today: `rxbs.org/toolkit-library`. Many of our broker partnerships started with a broker running a worksheet with a client.

**CTA:** Start a partner conversation → [request-a-call form, topic: Broker partnership]

## 4. Broker enablement kit (the send-after-first-contact package)

A single email-able package, assembled from existing assets plus one new one-pager:

1. **NEW: "How Prescription Benefit Solutions Works With Brokers" one-pager** — `templates/documents/broker_partner_one_pager.html/.pdf` (build to the Plan Sponsor Toolkit visual system; 1 page, not 2). Content blocks: the three partnership principles (you lead / we do the pharmacy work / your client, your relationship), the four service lanes from the landing page, the 2025 proof band, engagement mechanics (how a joint engagement starts, typical 4-6 week Contract Review timeline), and contact. Traffic-light rubric not needed; this is a relationship document.
2. **Toolkit sampler:** links to 3 toolkits chosen for broker-client use (Contract Review Readiness checklist, Quarterly Reporting checklist, and the toolkit matching the broker's stated client concern).
3. **The Contract Language Library link** (the documented broker bookmark asset).
4. **Co-branding offer, stated simply:** "If a worksheet would land better with your logo next to ours, we do that. Ask."

## 5. PARTNER follow-up email templates

*All send from Ginny personally (not the automation), triggered by the PARTNER-tier alert. Personal-note register: Plex-plain text, no buttons, short.*

**Template P1 — first touch after a PARTNER alert (send within 1 business day):**

```
Hi {{first_name}},

I saw you grabbed the {{toolkit_name}} worksheet. Brokers and consultants
are exactly who we built these for, so I wanted to reach out directly.

Quick version of who we are: Prescription Benefit Solutions is an
independent pharmacy benefits consultancy. We work behind brokers, not
around them. When a client of yours needs a contract review, a claims
audit, or an independent read on a renewal, we do the pharmacy work and
you stay the relationship lead.

No pitch here. If it would ever be useful to have an independent pharmacy
bench behind you, I would enjoy a short call to compare notes on what we
are each seeing in PBM contracts right now.

My colleague (cc'd) can find a time that works if you are interested.

- Ginny

Ginny Crisp, PharmD, BCACP | Chief Executive Officer
team@rxbs.org | www.rxbs.org
```

**Template P2 — after the first meeting (send same day):**

```
Hi {{first_name}},

Thank you for the time today. Two follow-ups as promised:

(1) The one-pager on how we work with broker partners is attached, along
with the toolkit links we discussed: {{toolkit_links}}.

(2) On {{client_situation_discussed}}: when the timing is right, a short
three-way conversation is usually the easiest way to start. You frame it,
we bring the pharmacy read, your client hears one story.

Whatever the pace, glad to be connected. What we see across hundreds of
PBM contracts a year is more useful shared than kept.

- Ginny
```

**Template P3 — quarterly partner check-in (for CONTACTED/MET rows with no activity in ~90 days):**

```
Hi {{first_name}},

Quarterly note, no ask attached. Three things we are seeing in PBM
contracts this quarter that may be useful in your client conversations:

{{three_current_observations_from_shocking_fact_bank_or_quarterly_research}}

If any of those touch something a client of yours is working through,
that is exactly the kind of thing we can dig into together.

- Ginny
```

## 6. Operating cadence and measurement

- **One broker touch per week** inside the weekly sales hour (see `email_gated_toolkit/sales_hour_runbook.md`): advance the top tracker row that has a defined next step.
- **PARTNER alerts get Template P1 within 1 business day.** Speed is the pattern that made GWCU work.
- **Monthly:** update the tracker table; count of rows at COLLABORATING+ is the KPI reported against the 3-5 year-end target.
- **Quarterly:** Template P3 sweep over stale rows; refresh the three observations from the latest quarterly research.

## 7. Build checklist

- [ ] Ginny: approve landing copy above → build `/for-brokers` in Wix (with the website-revamp item ⑤).
- [ ] Claude: build `templates/documents/broker_partner_one_pager.html` + PDF + preview PNG (standard toolkit pipeline: weasyprint → render_preview.py → _audit_pdfs.py).
- [ ] Ginny: send the enablement kit to GWCU (Template P2 framing) and Template P1-style invite to Cristy Gupton.
- [ ] Claude: add "Partners" tab spec to the Google Sheet when tracker passes ~8 rows.
