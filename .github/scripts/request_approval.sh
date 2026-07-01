#!/usr/bin/env bash
# Post judgment-call items as TAP-TO-APPROVE checkboxes on ONE standing GitHub issue,
# so Ginny can approve from her phone. GitHub mobile renders `- [ ]` task lists as
# tappable checkboxes you toggle without editing markdown. This is the single standing
# home for automation judgment calls (system audit, quarterly, ads, video research),
# kept SEPARATE from the "PBS automation log" run stream (notify_issue.sh) so approvals
# don't drown in run noise.
#
# A checked box records APPROVAL; it does NOT auto-build. A Claude session reads the
# checked items, builds each via a review-linked PR, and ticks the box with the PR link.
# (A future `/apply` comment-command can automate the build; intentionally not wired yet.)
#
# Usage:  bash .github/scripts/request_approval.sh "<section heading>" "<markdown checklist>"
#   e.g.  bash .github/scripts/request_approval.sh "Monthly audit · 2026-07-01" \
#             "- [ ] Library-numbering fix — W27 eyebrows ->05, W33 ->06"
#
# The checklist is any markdown; use one `- [ ]` line per approvable decision, each with
# a one-line summary (+ a link to the fuller context in the report / OPEN_ITEMS).
# Requires `gh` (preinstalled on runners) + issues:write. Best-effort; never fails caller.
#
# EMAIL DELIVERY: same as notify_issue.sh — pass a real-user PAT as GH_TOKEN
# (`${{ secrets.NOTIFY_PAT || secrets.GITHUB_TOKEN }}`) so the @mention + assignment email.
set -uo pipefail
TITLE="✅ PBS — Approvals needed"
NOTIFY="@crispjb-ui"
SECTION="${1:-Approvals}"
ITEMS="${2:-}"
if [ -z "${ITEMS//[[:space:]]/}" ]; then
  echo "request_approval: no items provided; nothing to post."
  exit 0
fi

read -r -d '' BODY_HEADER <<'EOF' || true
**Approvals needed — tap to approve from your phone.**

Each item below is a checkbox. **Check the ones you approve** (GitHub mobile toggles them without editing). A Claude session then builds each **checked** item via a review-linked PR to `main` and ticks the box with the PR link. Unchecked = not approved / not built.

This is the single standing home for automation judgment calls (monthly system audit, quarterly research, ads research, video research). New batches arrive as comments below, newest at the bottom. Leave the issue open.
EOF

num=$(gh issue list --state open --search "\"$TITLE\" in:title" --json number --jq '.[0].number' 2>/dev/null || true)
if [ -z "${num:-}" ] || [ "$num" = "null" ]; then
  url=$(gh issue create --title "$TITLE" --assignee crispjb-ui --body "$BODY_HEADER" 2>/dev/null || true)
  num=$(printf '%s' "$url" | grep -oE '[0-9]+$' || true)
fi
if [ -n "${num:-}" ]; then
  gh issue edit "$num" --add-assignee crispjb-ui >/dev/null 2>&1 || true
  COMMENT="$(printf '%s\n\n### %s\n\n%s' "$NOTIFY" "$SECTION" "$ITEMS")"
  if out=$(gh issue comment "$num" --body "$COMMENT" 2>&1); then
    echo "request_approval: posted \"$SECTION\" to approvals issue #$num"
  else
    echo "request_approval: comment FAILED (non-fatal): $out"
  fi
else
  echo "request_approval: could not resolve/create the approvals issue (non-fatal)"
fi
exit 0
