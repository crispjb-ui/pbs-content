#!/usr/bin/env bash
# SessionStart guard against the ephemeral-container stale-clone problem.
#
# Each new container re-clones the repo at a fixed (often weeks-old) commit, not
# the live origin/main. This fast-forwards the working branch to origin/main at
# session start so work always begins from the true latest. It is non-destructive:
# it only advances when the tree is clean and the move is a clean fast-forward.
# If the tree is dirty or the branch has diverged, it does nothing but print a
# loud warning so the divergence is reconciled deliberately, never silently.

set -uo pipefail
cd "$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0

branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null)"
[ -z "$branch" ] && exit 0

# Fetch the latest for the current branch and main (quiet; tolerate offline).
git fetch origin "$branch" main >/dev/null 2>&1 || true

local_head="$(git rev-parse HEAD 2>/dev/null)"
remote_head="$(git rev-parse "origin/$branch" 2>/dev/null || git rev-parse origin/main 2>/dev/null)"
[ -z "$remote_head" ] && exit 0

# Already current?
[ "$local_head" = "$remote_head" ] && exit 0

dirty="$(git status --porcelain)"
if [ -n "$dirty" ]; then
  echo "⚠️  SessionStart sync: local tree is BEHIND origin but has uncommitted changes."
  echo "    Local  $branch @ ${local_head:0:7}"
  echo "    Remote          @ ${remote_head:0:7}"
  echo "    Not auto-syncing (would risk your changes). Reconcile manually:"
  echo "      git stash && git reset --hard ${remote_head:0:7} && git stash pop"
  exit 0
fi

# Clean tree: only fast-forward if remote is a descendant of local (safe).
if git merge-base --is-ancestor "$local_head" "$remote_head" 2>/dev/null; then
  git reset --hard "$remote_head" >/dev/null 2>&1 \
    && echo "✅ SessionStart sync: fast-forwarded $branch ${local_head:0:7} → ${remote_head:0:7} (caught up to origin)."
else
  echo "⚠️  SessionStart sync: $branch has DIVERGED from origin (not a fast-forward)."
  echo "    Local  @ ${local_head:0:7}   Remote @ ${remote_head:0:7}"
  echo "    Reconcile deliberately (merge/rebase) before working."
fi
exit 0
