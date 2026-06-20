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
NOTIFY="@crispjb"   # mentioned on every comment so GitHub always emails/pushes
BODY="${1:-(no summary provided)}"

num=$(gh issue list --state open --search "\"$TITLE\" in:title" --json number --jq '.[0].number' 2>/dev/null || true)
if [ -z "${num:-}" ] || [ "$num" = "null" ]; then
  url=$(gh issue create --title "$TITLE" --assignee crispjb \
        --body "Rolling log of scheduled automation runs (pipeline build, roundup, critique, system audit, quarterly research, AEO page, briefs). Each comment below is one run, newest at the bottom. Check items off as you action them; leave the issue open." 2>/dev/null || true)
  num=$(printf '%s' "$url" | grep -oE '[0-9]+$' || true)
fi
if [ -n "${num:-}" ]; then
  # (Re)assign Ginny every run. When GH_TOKEN is a real-user PAT (NOTIFY_PAT),
  # this assignment + the @mention in the comment DO trigger email/push. When it
  # is the github-actions bot, assignment by the bot does not stick / does not
  # notify (the documented suppression). Best-effort either way.
  gh issue edit "$num" --add-assignee crispjb >/dev/null 2>&1 || true
  gh issue comment "$num" --body "$(printf '%s\n\n%s' "$NOTIFY" "$BODY")" >/dev/null 2>&1 || true
  echo "notified issue #$num"
else
  echo "notify_issue: could not resolve/create the rolling issue (non-fatal)"
fi
exit 0
