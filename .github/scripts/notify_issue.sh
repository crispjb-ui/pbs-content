#!/usr/bin/env bash
# Append a scheduled-run summary as a comment on ONE rolling GitHub issue, so the
# workflows surface to Ginny as a single notification thread instead of silent
# commits. Requires `issues: write` in the calling workflow and `gh` (preinstalled
# on GitHub Actions runners).
#
# EMAIL DELIVERY:  GitHub deliberately SUPPRESSES notifications for any activity
# authored by github-actions[bot] via the built-in GITHUB_TOKEN (loop-prevention).
# So with GITHUB_TOKEN, the @mention/assignment/comment below post fine but NEVER
# email you. To actually receive email, the calling workflow passes a Personal
# Access Token as GH_TOKEN:  `${{ secrets.NOTIFY_PAT || secrets.GITHUB_TOKEN }}`.
# When NOTIFY_PAT is set, comments are authored by a REAL user and the assignment
# + @mention DO email/notify. Until NOTIFY_PAT is added, this falls back to the
# bot (posts, but silent). One-time setup: create a PAT with `repo` (or
# fine-grained: Issues read/write on crispjb-ui/pbs-content) and save it as the
# repo secret NOTIFY_PAT.
#
# Usage:  bash .github/scripts/notify_issue.sh "<markdown body>"
# Never fails the workflow (best-effort notification).
set -uo pipefail
TITLE="🔔 PBS automation log"
NOTIFY="@crispjb-ui"   # the repo-owner account; mentioned on every comment so GitHub emails/pushes
BODY="${1:-(no summary provided)}"

# ── Auto-append a tappable review link to the diff THIS run produced ──
# Ginny reviews on GitHub mobile, so every run that changed anything should link
# straight to its changes (July 1, 2026 standing instruction: "all should be
# linked"). GitHub checks the workspace out at $GITHUB_SHA; a run that commits +
# pushes advances local HEAD past it, so compare($GITHUB_SHA...HEAD) is exactly
# this run's diff. Reminder-only runs that commit nothing leave HEAD == $GITHUB_SHA
# and get NO link (correct — nothing to review). Best-effort; never fails the run.
BEFORE_SHA="${GITHUB_SHA:-}"
AFTER_SHA="$(git rev-parse HEAD 2>/dev/null || true)"
if [ -n "${GITHUB_REPOSITORY:-}" ] && [ -n "$BEFORE_SHA" ] && [ -n "$AFTER_SHA" ] && [ "$BEFORE_SHA" != "$AFTER_SHA" ]; then
  REPO_URL="${GITHUB_SERVER_URL:-https://github.com}/${GITHUB_REPOSITORY}"
  BODY="$BODY

🔗 Review this run's changes: ${REPO_URL}/compare/${BEFORE_SHA}...${AFTER_SHA}"
fi

num=$(gh issue list --state open --search "\"$TITLE\" in:title" --json number --jq '.[0].number' 2>/dev/null || true)
if [ -z "${num:-}" ] || [ "$num" = "null" ]; then
  url=$(gh issue create --title "$TITLE" --assignee crispjb-ui \
        --body "Rolling log of scheduled automation runs (pipeline build, roundup, critique, system audit, quarterly research, AEO page, briefs). Each comment below is one run, newest at the bottom. Check items off as you action them; leave the issue open." 2>/dev/null || true)
  num=$(printf '%s' "$url" | grep -oE '[0-9]+$' || true)
fi
if [ -n "${num:-}" ]; then
  # (Re)assign Ginny every run. When GH_TOKEN is a real-user PAT (NOTIFY_PAT),
  # this assignment + the @mention in the comment DO trigger email/push. When it
  # is the github-actions bot, assignment by the bot does not stick / does not
  # notify (the documented suppression). Best-effort either way.
  if ! assignout=$(gh issue edit "$num" --add-assignee crispjb-ui 2>&1); then
    echo "notify_issue: assign failed (non-fatal): $assignout"
  fi
  if commentout=$(gh issue comment "$num" --body "$(printf '%s\n\n%s' "$NOTIFY" "$BODY")" 2>&1); then
    echo "notify_issue: commented issue #$num"
  else
    echo "notify_issue: COMMENT FAILED (non-fatal). gh said: $commentout"
  fi
else
  echo "notify_issue: could not resolve/create the rolling issue (non-fatal)"
fi
exit 0
