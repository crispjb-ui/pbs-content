# Buyer Anxiety Map (what keeps the decision-maker up at night)

_Created Jun 23, 2026. The pain-point / jobs-to-be-done lens under all PBS content. Organizes by the buyer's **anxiety**, not by topic, because PBS's own data shows naming the discomfort outperforms informational content 10-100x. This is a **source file** read by `/build-week` (hooks for Wednesday POV / Thursday / Friday tease), `/video-research` (anxiety-anchored scripts + the "Ask Ginny" format), and `/ads-research` (the "what keeps you up at night" ad series). Built from the content pillars, the AEO buyer-query bank, the patterns in hundreds of contract reviews, and the first funnel wins (GWCU broker; Stand Together)._

**How to use it:** pick a persona → pick a live anxiety → the hook is the fear stated plainly, the body is the PBS answer, the CTA is the matching asset. One anxiety = one post / one video / one ad. Rotate so the same fear is not hit twice in ~4 weeks. Anxieties map to existing answer assets (toolkits, guides, the contract library) so every piece has a place to send them.

---

## Persona 1 — CFO / VP Finance (the economic buyer)
_Owns the number. Fears being surprised, being wrong in front of the board, and being exposed._

| What keeps them up at night | Trigger moment | The question they'd actually ask | PBS answer (quotable) | Asset to send |
|---|---|---|---|---|
| Pharmacy trend is outrunning the budget and I can't explain why to the board | Q3 budgeting; board prep | "Why is pharmacy up double digits and what's actually driving it?" | "Most of the increase is in places your standard report doesn't show: net cost by channel, rebate gross-to-net, specialty routing." | PBM Disclosure / GER audit |
| We might be overpaying and I'd never know | Renewal; a peer's audit findings | "How do I know if we're overpaying, and can I prove it?" | "You verify net cost against the contract, not the PBM's summary. The gap is usually in spread and rebate definitions." | PBM Compensation Audit |
| A fiduciary / ERISA claim could land on me | A lawsuit in the news (J&J-style) | "Am I personally exposed, and what protects me?" | "'We trusted our PBM' is not a defense. A documented, prudent process is." | Fiduciary Documentation |
| The renewal is going to be a surprise again | 90 days from renewal | "How do I walk in with my own numbers instead of reacting to theirs?" | "The 90 days before renewal decide your leverage. Your PBM started months ago." | 90-Day Renewal timeline |
| The number the PBM gave me, I can't trust | Any reporting cycle | "How do I get a number I can actually verify?" | "Audit rights that let you pick the auditor and see the claims, or the report is just faith." | Audit Rights / Contract Review Readiness |

## Persona 2 — HR Director / Benefits Director (the operational buyer + user)
_Owns the experience and the relationship. Fears disruption, blame, and not getting straight answers._

| What keeps them up at night | Trigger moment | The question they'd actually ask | PBS answer (quotable) | Asset to send |
|---|---|---|---|---|
| A coverage change will blow up into member complaints | Open enrollment; a PA denial escalates | "How do I avoid a disruption I didn't see coming?" | "Most disruptions trace to a contract clause nobody read, not a clinical decision." | Mid-Year Claims / Formulary questions |
| I can't get a straight answer out of our PBM | Any escalation | "Why is it so hard to get clear answers, and what do I ask?" | "The contract was written so the answer is optional. These questions make it mandatory." | PBM Disclosure / What I'd Ask |
| Our "customized" formulary may not be customized | Renewal; a member's drug excluded | "Is our formulary built for our members or the PBM's rebates?" | "Ask how it differs from the PBM's standard book. Often it doesn't." | Formulary / Contract Library |
| I'll look unprepared at renewal | 60-90 days out | "What should I have ready before the PBM presents?" | "Your data, your benchmarks, your priorities, documented, before they frame the terms." | Contract Review Readiness |
| A GLP-1 / specialty decision will sink the budget | A high-cost claim; a coverage ask | "How do I make the coverage call without guessing?" | "Coverage is a design decision with clinical criteria and contract language, not a yes/no." | GLP-1 / Specialty Routing |

## Persona 3 — Broker / Consultant (the partner / influencer)
_Owns the client relationship. Fears being out-experted and losing the account._

| What keeps them up at night | Trigger moment | The question they'd actually ask | PBS answer (quotable) | Asset to send |
|---|---|---|---|---|
| A client asks a pharmacy question I can't answer deeply | Client meeting; an RFP | "How do I bring real pharmacy depth without becoming a PBM expert?" | "Bring the contract questions, not the renewal quote. We partner, we don't compete." | Toolkit library (partner-enablement) |
| I could lose the account to someone with pharmacy expertise | Prospect threat; a cost spike | "How do I make pharmacy a reason clients stay, not leave?" | "The advisor who saw the pharmacy issue coming is the one who keeps the account." | Toolkit library + co-engagement |
| The PBM relationship is opaque even to me | A client cost surprise | "How do I see what's really in my client's PBM deal?" | "The same five revenue streams hide on nearly every contract. Here's where to look." | PBM Compensation / Contract Review |

_(Persona 4 — CEO / Owner of a smaller self-funded plan — overlaps the CFO fears; use the CFO row set, dialed to "this is real money to a company my size.")_

---

## How this feeds the machine
- **Content posts (`/build-week`):** the Wednesday POV hook, the Friday tease, and many Thursday concepts start from one anxiety row. Write the fear as the hook, the answer as the body, the asset as the first-comment CTA.
- **Video posts (`/video-research` + the bank):** each anxiety row is a 9:16 talking-head script (fear in the first 3s, answer in the middle, CTA at the end). Also the engine behind the **"Ask Ginny" DM → video-reply** format (see `video_content_bank.md`): the questions people DM map back to these rows, confirming or expanding the map.
- **Ads (`/ads-research` + the bank):** the **"What keeps you up at night" ad series** = one ad per anxiety, each offering the matching toolkit.
- **FAQ hub (rxbs.org, queued):** the evergreen answer surface; the "question they'd actually ask" column is the FAQ question, the answer column is the answer, with FAQPage schema for AEO.
- **AEO query set:** the "question" column should be reconciled against the `ai_visibility_tracker.md` 20-prompt bank so the anxieties and the searched queries stay aligned.

## Maintenance
`/video-research` and `/build-week` read this file; when real DM'd questions or contract-review patterns surface a new anxiety, add a row (note the source). Review quarterly against the win log + the AEO query bank. Anonymize any client-specific detail.

## Changelog
### 2026-06-23 (seed)
- Map created with 3 core personas (CFO, HR/Benefits, Broker) + the CEO overlap note, each with live anxieties → trigger → question → answer → asset. Built from the pillars, AEO query bank, contract-review patterns, and the first funnel wins.
