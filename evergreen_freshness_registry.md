# Evergreen Freshness Registry

_Created Jul 10, 2026 (approved by Brett same day, one of the 7 self-improvement loops). The rotation ledger `/freshness-pass` reads and updates monthly. Why this exists: AI-cited URLs run ~26% fresher than organic top-10 and ~half of cited content is <13 weeks old (`aeo_seo_playbook.md` §6), so the owned canonical assets need SUBSTANTIVE refreshes on a rotation — new stat, new example, updated year references, a new provision — never date-bumping without changes (detected and penalized)._

**How the rotation works:** each month `/freshness-pass` picks the 2-3 LIVE assets with the oldest `Last substantive refresh`, drafts the refresh, updates blueprint + paste files, flags the Wix/Substack edit as a to-do, and moves the date. An asset enters the rotation the day it goes live; blueprints not yet built in Wix are marked `not live` and skipped.

## Live assets (rotation pool)

| Asset | Surface | Last substantive refresh | Refresh notes |
|---|---|---|---|
| PBM Glossary (`rxbs.org/glossary`) | Wix + DefinedTermSet JSON-LD | 2026-07-16 (+AFP term) | Terms sync via `_glossary_terms.md` propagation rule; freshness pass may add a NEW buyer-relevant term or sharpen 2-3 definitions |
| Request-a-Call (`/request-a-call`) | Wix | 2026-07-08 (launched) | Conversion page: refresh = reassurance copy / topic list accuracy, not content depth |
| Thank-You (`/thank-you`) | Wix | 2026-07-08 (launched) | Coupled to the email flow (see OPEN_ITEMS coupling note); refresh only WITH an email-flow change |
| Renewal Second Opinion (`/renewal-second-opinion`) | Wix | 2026-07-16 (seasonal sharpen) | Seasonal: pre-Sep refresh should sharpen the 90-day-window dates for Jan 1 effective dates |
| Toolkit Library page + 29 toolkit PDFs | Wix + `templates/documents/` | rolling (see toolkit dataset) | Freshness pass picks the 1-2 OLDEST toolkits by original build week (W16-W18 era first), refreshes stats/examples, re-renders per `/sync-toolkits` |
| Contract Language Library (Substack evergreen) | `substack_contract_language_library.md` → live post | continuous (Library NN pushes) | Already on a continuous cadence; freshness pass checks the last push date and flags if >8 weeks stale |
| Plan Sponsor FAQ (`rxbs.org/faq`) | Wix + FAQPage/BreadcrumbList JSON-LD | 2026-07-21 (launched) | 14 Q&As from the buyer-anxiety map; refresh = new questions from `/question-harvest` (add to page AND FAQPage schema together — visible text must match schema), link-ins as guide pages publish |
| Contract Language Library (`rxbs.org/contract-language-library`) | Wix + Article/BreadcrumbList/DefinedTermSet JSON-LD | 2026-07-21 (launched) | Canonical twin of the Substack Library; updates ride each Library NN push per CLAUDE.md rule (c2) — clause card + `dateModified` bump in the Article markup. Freshness pass verifies the Wix page carries the latest pushed provisions (never diverge from the Substack body) |
| The Standards (`rxbs.org/standards`) | Wix + Article/BreadcrumbList/DefinedTermSet JSON-LD | 2026-07-22 (launched, v1.0) | ATTESTED LANGUAGE: Part 1 + the closing paragraph never change outside the annual January revision (re-attestation required). Refresh = the January v-bump with the Index; dateModified in the Article markup moves with it |
| Homepage | Wix | 2026-07-08 (schema) | Hero CTA + "Mysite" title defects still queued (gameplan P1 #12) |
| About (`rxbs.org/about`) | Wix + Organization/Person JSON-LD | 2026-07-15 (rebuilt + launched) | Person schema carries `alumniOf` + credential (the entity fix). Refresh = proof-band anchors when 2026 metrics land, media chips as appearances air (Derms on Drugs pending), named team cards if Ginny supplies bios, testimonials block when collected |
| For Brokers (`rxbs.org/for-brokers`) | Wix + Service/BreadcrumbList JSON-LD | 2026-07-14 (launched) | Conversion page: refresh = proof-band anchors when 2026 metrics land, service-card accuracy; Useful-with-clients block updated Jul 22, 2026: `/standards` link ADDED + the Contract Language Library link re-pointed Substack → `rxbs.org/contract-language-library` (Brett, same visit); `/results` joins when it goes live (money-page linking rule) |

## Not live yet (enter the pool at launch — add a row with launch date)

`/what-we-are-seeing` · the 4 guides · `/how-we-charge` · `/results` · `/privacy`

## Refresh log

| Date | Assets refreshed | What changed | Wix/Substack edit flagged |
|---|---|---|---|
| 2026-07-16 | PBM Glossary | Added new term **Alternative funding program (AFP)** in the Plan structures section (visible paragraph + DefinedTerm JSON-LD, both blueprint and paste file; canonical `_glossary_terms.md` entry; 25 terms now, paste block 6,958 chars, under the 7,000 Wix cap). Bumped byline "Updated" June→July 2026. | Yes — Wix: add AFP term paragraph + re-paste DefinedTermSet JSON-LD + bump the visible "Updated" date |
| 2026-07-16 | Renewal Second Opinion | Seasonal sharpen (pre-Sep): added the auto-renewal mechanism ("miss the window and most contracts renew automatically on the terms in front of you") and sharpened the vague "early October" / "your real deadline" to the concrete, evergreen-true anchor "the first days of October" (Jan 1 minus 90 days). Copy stays year-neutral for annual reuse. | Yes — Wix: update the two body/callout lines on `/renewal-second-opinion` (approved-copy touch — see APPROVALS_PENDING) |
| 2026-07-16 | _(considered, skipped)_ | W16 PA ROI Audit + W17 Carve-Out toolkits (oldest by build week): evergreen frameworks with no verifiable stale stat/year reference to refresh, and gated PDFs are not crawlable so they fall outside the AEO freshness-premium rationale. Request-a-Call / Homepage / About / For-Brokers / Thank-You: all launched within the prior ~8 days, no honest substantive improvement yet (About/For-Brokers wait on 2026 proof metrics; Thank-You coupled to the email flow). | No |
