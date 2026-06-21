# PBS Automation — scheduled workflows + quality gates

_What runs unattended in this repo, when, and how it reaches you. Set up Jun 20, 2026. All scheduled jobs use `anthropics/claude-code-action@v1` with the `ANTHROPIC_API_KEY` repo secret (the reminder-only jobs use no API)._

## How runs reach you (notifications)
Scheduled jobs run outside any live Claude session, so they can't ping the app directly. Instead every workflow posts to **one rolling GitHub Issue titled "🔔 PBS automation log"** via `.github/scripts/notify_issue.sh`, which gives you a single GitHub-notification thread. Each comment @mentions `@crispjb` and the issue is assigned to `@crispjb`; each run is one comment (newest at the bottom). Workflows still commit their output to `main` as before, the issue just makes the run visible instead of silent.

**To actually get the email, you must add the `NOTIFY_PAT` secret (one-time).** GitHub deliberately suppresses email/push notifications for anything authored by the built-in `github-actions[bot]` (the `GITHUB_TOKEN`) — this is loop-prevention, and it's why subscribing to the issue still produced no email. The notify step now uses `${{ secrets.NOTIFY_PAT || secrets.GITHUB_TOKEN }}`: when `NOTIFY_PAT` (a Personal Access Token) is set, the comment + assignment are authored by a **real user** and GitHub emails you exactly like your failed-Action emails. Until you add it, the comments still post but stay silent (bot fallback). **Setup:** GitHub → Settings → Developer settings → Personal access tokens → either a classic token with the `repo` scope, or a fine-grained token scoped to `crispjb-ui/pbs-content` with **Issues: Read and write** → copy it → repo **Settings → Secrets and variables → Actions → New repository secret**, name `NOTIFY_PAT`, paste the token. No code changes needed after that; the next scheduled run (or a manual `workflow_dispatch`) will email you.

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
| **monthly-aeo-page** | 8th ~9a | content 🟨→draft | `/build-aeo-page` — drafts the next owned answer page from the Phase-0 template + `/critique` | site/ draft |
| **monthly-substack-backfill** | 22nd ~9a | content 🟨→draft | `/backfill-substack-aeo` — migrates one older week (W06-W25) to the Substack AEO rule | week_*.md draft |
| **monthly-system-audit** | 1st ~9a | maintain ✅ | `/system-audit`; refreshes the shocking-fact bank, checks drift | dated report |
| **monthly-citation-check-reminder** | 1st ~10a | reminder 🚫(human) | nudge to run the real `ai_visibility_tracker` prompt set in the AI engines | issue comment |
| **monthly-platform-research** | 15th ~9a | research ✅ | `/platform-research`; researches 10 platforms (LinkedIn, Substack, X, YouTube Shorts, TikTok, Instagram, Facebook, Threads, YouTube long-form, Reddit/Quora) best practices; auto-updates platform_playbooks.md + proposes rule changes to OPEN_ITEMS | playbook + proposals + issue comment |
| **quarterly-research** | 1st of Jan/Apr/Jul/Oct ~9a | research ✅ | `/quarterly-research`; bank updates + new-topic/Potter proposals to OPEN_ITEMS | research + proposals |

Legend: ✅ fully unattended · 🟨 loop preps/drafts, you finish · 🚫 human-only.

## Local quality gate (Stop hook)
`.claude/settings.json` runs `.claude/hooks/brand_lint_check.sh` on session **Stop** — an advisory run of `tools/brand_lint.py` that surfaces any hard violations on the site web surface before you commit. Silent when clean. (The SessionStart hook still handles the `/session-digest` reminder; a per-turn Stop digest reminder was intentionally NOT added because it would fire every turn.)

## Prerequisites (one-time, GitHub side)
- `ANTHROPIC_API_KEY` repo secret (already used by the existing workflows).
- `NOTIFY_PAT` repo secret (Personal Access Token) so notifier comments are authored by a real user and actually email you. Without it, runs post silently to the rolling issue. See "How runs reach you" above for the exact token scopes.
- Actions enabled with **read/write** permissions, and **"Allow GitHub Actions to create and approve pull requests / issues"** so `notify_issue.sh` can open the rolling issue.
- The research/roundup/page jobs need the runner's outbound web access (same dependency the roundup already relies on).

## Files
- `tools/brand_lint.py` — the linter (HARD = site web surface; SOFT = newsletter informational counts).
- `.github/scripts/notify_issue.sh` — the rolling-issue notifier.
- `.claude/commands/build-aeo-page.md`, `.claude/commands/backfill-substack-aeo.md` — the content-loop command specs.
- `.claude/commands/critique.md` (advisory red-team) and `.claude/commands/critique-fix.md` (same diagnosis, then auto-applies the resolvable fixes; the Wednesday-night workflow runs this one).
- Cadence rationale + the full initiative plan: `aeo_geo_master_plan.md` (tracker) and `website_aeo_master_plan.md` (website build spec).
