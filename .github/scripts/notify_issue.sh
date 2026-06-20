#!/usr/bin/env bash
# Append a scheduled-run summary as a comment on ONE rolling GitHub issue, so the
# 5 existing + new workflows surface to Ginny as a single notification thread
# instead of silent commits. Requires `issues: write` in the calling workflow and
# `gh` (preinstalled on GitHub Actions runners; GITHUB_TOKEN provided via env).
# Usage:  bash .github/scripts/notify_issue.sh "<markdown body>"
# Never fails the workflow (best-effort notification).
set -uo pipefail
TITLE="🔔 PBS automation log"
NOTIFY="@crispjb"   # mentioned on every comment so GitHub always emails/pushes
BODY="${1:-(no summary provided)}"

num=$(gh issue list --state open --search "\"$TITLE\" in:title" --json number --jq '.[0].number' 2>/dev/null || true)
if [ -z "${num:-}" ] || [ "$num" = "null" ]; then
  url=$(gh issue create --title "$TITLE" --assignee crispjb \
        --body "Rolling log of scheduled automation runs (pipeline build, roundup, critique, system audit, quarterly research, AEO page, briefs). Each comment below is one run, newest at the bottom. Check items off as you action them; leave the issue open." 2>/dev/null || true)
  num=$(printf '%s' "$url" | grep -oE '[0-9]+$' || true)
fi
if [ -n "${num:-}" ]; then
  # Backstop: (re)assign Ginny every run so she stays subscribed to the thread.
  # NOTE: notifications from the github-actions bot are unreliable; the durable
  # guarantee is Ginny clicking "Subscribe" on the issue once. This assign is best-effort.
  gh issue edit "$num" --add-assignee crispjb >/dev/null 2>&1 || true
  gh issue comment "$num" --body "$(printf '%s\n\n%s' "$NOTIFY" "$BODY")" >/dev/null 2>&1 || true
  echo "notified issue #$num"
else
  echo "notify_issue: could not resolve/create the rolling issue (non-fatal)"
fi
exit 0
