# PBS Automation — scheduled workflows + quality gates

_What runs unattended in this repo, when, and how it reaches you. Set up Jun 20, 2026. All scheduled jobs use `anthropics/claude-code-action@v1` with the `ANTHROPIC_API_KEY` repo secret (the reminder-only jobs use no API)._

## How runs reach you (notifications)
Scheduled jobs run outside any live Claude session, so they can't ping the app directly. Instead every workflow posts to **one rolling GitHub Issue titled "🔔 PBS automation log"** via `.github/scripts/notify_issue.sh`, which gives you a single GitHub-notification thread. Each comment @mentions `@crispjb-ui` (the repo-owner account) and the issue is assigned to it; each run is one comment (newest at the bottom). Workflows still commit their output to `main` as before, the issue just makes the run visible instead of silent.

**To actually get the email/push, the `NOTIFY_PAT` secret must be a CLASSIC token from a SEPARATE account (set up + verified working Jun 22, 2026).** GitHub deliberately suppresses notifications for anything authored by the built-in `github-actions[bot]` (the `GITHUB_TOKEN`) — loop-prevention, and why subscribing alone produced nothing. It ALSO does not notify you about your own activity, so a PAT from `@crispjb-ui` (the repo owner) would not work either — the comment author must be a *different* account than the recipient. The working setup: a dedicated bot account **`crispjb-bot`** was added as a **Write collaborator**, and `NOTIFY_PAT` holds a **classic** PAT from that bot account (scope `repo`, or `public_repo` since this repo is public). The notify step uses `${{ secrets.NOTIFY_PAT || secrets.GITHUB_TOKEN }}`, so the comment + assignment to `@crispjb-ui` are authored by `crispjb-bot` and GitHub delivers the mobile push (email is off by the user's choice; push preferred). **Important: a FINE-GRAINED token does NOT work here** — fine-grained tokens can only write to repos *owned by the token's own account*, and `crispjb-bot` is a collaborator, not the owner, so its fine-grained token can read the public repo but every write returns "Resource not accessible by personal access token." Classic tokens are not owner-scoped, so they work. To rotate: generate a new classic token as `crispjb-bot` and replace the `NOTIFY_PAT` secret value.

**First-comments is NOT a GitHub workflow.** The daily first-comments reminder runs as a **scheduled Claude Code web session** (Triggers, set up in the web app) invoking `/first-comments-today`, which delivers the checklist as a Claude-app session (phone push) each morning. It lives outside this repo; the repo only supplies the `/first-comments-today` command it runs.

## The guardrail (what stays human)
Every content-producing job ends at **drafted + critiqued + committed to `main` as a draft** and notifies you. **Nothing auto-publishes** (LinkedIn / X / Substack / the Wix build) and **nothing does outreach** (Potter, Wikidata, listicles). You review and ship. Auto-drafts land on `main` flagged as drafts (matches the existing pipeline/roundup behavior).

## Schedule (America/New_York targets; crons are UTC, DST-approximate)

| Workflow | When | Type | What it does | Output |
|---|---|---|---|---|
| **brand-lint** | every push + PR | gate ✅ | Brand/schema lint on the site web surface (em-dash, bare "PBS", "RXBS", JSON-LD valid, title) + toolkit 2-page PDF audit | fails the build on violation |
| **weekly-build-pipeline** | Fri ~8a | content ✅→draft | `/build-pipeline` → `/build-week`; keeps ~4 weeks drafted ahead (incl. per-week research) | week_*.md drafts |
| **weekly-roundup** | Tue 7:30a | content ✅→draft | RSS + web search → "What Crossed My Desk" roundup draft | roundups/ draft |
| **weekly-critique** | Wed ~10p ET | content ✅→draft | `/critique-fix` the next week to ship (the week you schedule Thursday): diagnoses, then APPLIES every resolvable fix to the week file and commits; only unresolvable items (external URLs that don't exist yet, human data) left flagged. Ready Thursday AM | week_*.md + critique_reports/ |
| **weekly-monday-brief** | Mon ~7a | surface ✅ | pipeline-health + next-4-week ⚠ + toolkits due | issue comment |
| **weekly-metrics-prompt** | Fri ~5p | reminder 🟨 | nudge to paste the week's numbers into `/log-metrics` (dashboards aren't API-readable) | issue comment |
| **monthly-search-console** | 3rd ~12p | monitor ✅ | `tools/gsc_pull.py` — pulls rxbs.org organic search performance (impressions, clicks, CTR, position, top queries + pages) from the Google Search Console API → appends a snapshot to `search_console_tracker.md`. Needs `GSC_SA_KEY` secret; no-ops with setup steps until set | search_console_tracker.md + issue comment |
| **monthly-aeo-page** | 8th ~9a | content 🟨→draft | `/build-aeo-page` — drafts the next owned answer page from the Phase-0 template + `/critique` | site/ draft |
| **monthly-platform-research** | 15th ~9a | research ✅ | `/platform-research`; researches 10 social platforms best practices; auto-updates platform_playbooks.md + proposes rule changes to OPEN_ITEMS | playbook + proposals + issue comment |
| **monthly-aeo-research** | 18th ~9a | research ✅ | `/aeo-research`; researches how answer engines (ChatGPT, Perplexity, Google AIO, Gemini, Claude) + Google search are evolving for citation/ranking; auto-updates aeo_seo_playbook.md + proposes rule changes to OPEN_ITEMS | playbook + proposals + issue comment |
| **monthly-video-research** | 20th ~9a | research ✅ | `/video-research`; video best-practices + competitor/advisor video teardown + PBS video results; auto-updates `video_content_bank.md` (concepts, shoot-list, retirements) + proposes rule changes. Feeds `/build-week` Wed slot + `/clip-podcast` | video bank + proposals + issue comment |
| **monthly-ads-research** | 24th ~9a | research ✅ | `/ads-research`; sweeps competitor + advisor LinkedIn ads (longevity = working proxy), develops PBS ad concepts wired to the toolkit funnel; auto-updates `paid_ads_bank.md` + `competitor_ad_teardown.md`; PROPOSES every spend/launch decision. Pre-launch; never auto-spends | ad banks + proposals + issue comment |
| **monthly-substack-backfill** | 22nd ~9a | content 🟨→draft | `/backfill-substack-aeo` — migrates one older week (W06-W25) to the Substack AEO rule | week_*.md draft |
| **monthly-system-audit** | 1st ~9a | maintain ✅ | `/system-audit`; refreshes the shocking-fact bank, checks drift | dated report |
| **monthly-citation-check-reminder** | 1st ~10a | reminder 🚫(human) | nudge to run the real `ai_visibility_tracker` prompt set in the AI engines (login-walled, can't be automated) | issue comment |
| **quarterly-research** | 1st of Jan/Apr/Jul/Oct ~9a | research ✅ | `/quarterly-research`; bank updates + new-topic/Potter proposals to OPEN_ITEMS | research + proposals |

Legend: ✅ fully unattended · 🟨 loop preps/drafts, you finish · 🚫 human-only.

## Local quality gate (Stop hook)
`.claude/settings.json` runs `.claude/hooks/brand_lint_check.sh` on session **Stop** — an advisory run of `tools/brand_lint.py` that surfaces any hard violations on the site web surface before you commit. Silent when clean. (The SessionStart hook still handles the `/session-digest` reminder; a per-turn Stop digest reminder was intentionally NOT added because it would fire every turn.)

## Prerequisites (one-time, GitHub side)
- `ANTHROPIC_API_KEY` repo secret (already used by the existing workflows).
- `NOTIFY_PAT` repo secret — a **classic** PAT from the `crispjb-bot` collaborator account (NOT fine-grained; NOT the owner account). Set + verified Jun 22, 2026. See "How runs reach you" above for why. Without it, runs post silently to the rolling issue.
- **Convention for any new Claude-using workflow:** include `id-token: write` in its `permissions:` block — `claude-code-action` fetches an OIDC token and fails without it. (The Monday brief hit exactly this on its first scheduled run, Jun 22, 2026; it was the only workflow missing the line.)
- `GSC_SA_KEY` repo secret (Google service-account JSON) for the monthly Search Console pull. Until it's set, `monthly-search-console` no-ops with setup steps (it never fails). Full steps in `search_console_tracker.md`.
- Actions enabled with **read/write** permissions, and **"Allow GitHub Actions to create and approve pull requests / issues"** so `notify_issue.sh` can open the rolling issue.
- The research/roundup/page jobs need the runner's outbound web access (same dependency the roundup already relies on).

## Files
- `tools/brand_lint.py` — the linter (HARD = site web surface; SOFT = newsletter informational counts).
- `tools/gsc_pull.py` — the Google Search Console monthly pull (writes `search_console_tracker.md`).
- **Search visibility, three layers:** `aeo_seo_playbook.md` (technique, refreshed by `/aeo-research`), `search_console_tracker.md` (organic-search performance, auto-pulled), `ai_visibility_tracker.md` (AI-citation read, manual). `.claude/commands/aeo-research.md` is the research-loop spec.
- `.github/scripts/notify_issue.sh` — the rolling-issue notifier. **Auto-appends a tappable "Review this run's changes" commit link** whenever a run committed something, and **verifies the commit actually landed on `main`** first: if pushed, it links `commit/<sha>` (the exact diff); if the commit did NOT reach `main` (a push that failed/was rejected), it prepends a loud ⚠️ "changes NOT saved — re-run needed" instead of a false success (July 1, 2026 — added after a quarterly run reported "committed" on a rejected push). Reminder-only runs that commit nothing get neither. No per-workflow change needed — every workflow that calls this script inherits it. **Push-race prevention:** every committing workflow's push step now rebases onto the latest `main` and retries (5×), so concurrent automations (e.g. monthly + quarterly both fire on the 1st) can't reject each other and lose work; if it still can't push, the run fails honestly and the notifier warns.
- `.claude/commands/build-aeo-page.md`, `.claude/commands/backfill-substack-aeo.md` — the content-loop command specs.
- `.claude/commands/critique.md` (advisory red-team) and `.claude/commands/critique-fix.md` (same diagnosis, then auto-applies the resolvable fixes; the Wednesday-night workflow runs this one).
- Cadence rationale + the full initiative plan: `aeo_geo_master_plan.md` (tracker) and `website_aeo_master_plan.md` (website build spec).
