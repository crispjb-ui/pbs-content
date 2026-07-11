# Evergreen Freshness Registry

_Created Jul 10, 2026 (approved by Brett same day, one of the 7 self-improvement loops). The rotation ledger `/freshness-pass` reads and updates monthly. Why this exists: AI-cited URLs run ~26% fresher than organic top-10 and ~half of cited content is <13 weeks old (`aeo_seo_playbook.md` §6), so the owned canonical assets need SUBSTANTIVE refreshes on a rotation — new stat, new example, updated year references, a new provision — never date-bumping without changes (detected and penalized)._

**How the rotation works:** each month `/freshness-pass` picks the 2-3 LIVE assets with the oldest `Last substantive refresh`, drafts the refresh, updates blueprint + paste files, flags the Wix/Substack edit as a to-do, and moves the date. An asset enters the rotation the day it goes live; blueprints not yet built in Wix are marked `not live` and skipped.

## Live assets (rotation pool)

| Asset | Surface | Last substantive refresh | Refresh notes |
|---|---|---|---|
| PBM Glossary (`rxbs.org/glossary`) | Wix + DefinedTermSet JSON-LD | 2026-07-10 (launched) | Terms sync via `_glossary_terms.md` propagation rule; freshness pass may add a NEW buyer-relevant term or sharpen 2-3 definitions |
| Request-a-Call (`/request-a-call`) | Wix | 2026-07-08 (launched) | Conversion page: refresh = reassurance copy / topic list accuracy, not content depth |
| Thank-You (`/thank-you`) | Wix | 2026-07-08 (launched) | Coupled to the email flow (see OPEN_ITEMS coupling note); refresh only WITH an email-flow change |
| Renewal Second Opinion (`/renewal-second-opinion`) | Wix | 2026-07-09 (launched) | Seasonal: pre-Sep refresh should sharpen the 90-day-window dates for Jan 1 effective dates |
| Toolkit Library page + 29 toolkit PDFs | Wix + `templates/documents/` | rolling (see toolkit dataset) | Freshness pass picks the 1-2 OLDEST toolkits by original build week (W16-W18 era first), refreshes stats/examples, re-renders per `/sync-toolkits` |
| Contract Language Library (Substack evergreen) | `substack_contract_language_library.md` → live post | continuous (Library NN pushes) | Already on a continuous cadence; freshness pass checks the last push date and flags if >8 weeks stale |
| Homepage + About | Wix | 2026-07-08 (schema) | About build-out pending (bio captured Jul 10); enters rotation properly once rebuilt |

## Not live yet (enter the pool at launch — add a row with launch date)

`/contract-language-library` · `/what-we-are-seeing` · `/faq` · the 4 guides · `/for-brokers` · `/standards` · `/how-we-charge` · `/results` · `/privacy`

## Refresh log

| Date | Assets refreshed | What changed | Wix/Substack edit flagged |
|---|---|---|---|
| _(first pass: Aug 16, 2026)_ | | | |
