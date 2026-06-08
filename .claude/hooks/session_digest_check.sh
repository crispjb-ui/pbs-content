#!/usr/bin/env bash
# SessionStart hook (PBS repo only). If PBS session transcripts exist that have
# not been digested since the timestamp in .claude/.last_digest, prompt the
# session to run /session-digest. Uses a content timestamp (not file mtime) so it
# survives git restore/container resets. Defensive: never blocks; always exits 0.
proj="$HOME/.claude/projects/$(pwd | sed 's#/#-#g')"
marker=".claude/.last_digest"
{
  [ -d "$proj" ] || exit 0
  last=$(head -1 "$marker" 2>/dev/null)
  if [ -n "$last" ]; then
    newer=$(find "$proj" -name '*.jsonl' -newermt "$last" 2>/dev/null | wc -l | tr -d ' ')
  else
    newer=$(find "$proj" -name '*.jsonl' 2>/dev/null | wc -l | tr -d ' ')
  fi
  newer=${newer:-0}
  if [ "$newer" -gt 0 ] 2>/dev/null; then
    printf '{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"AUTO-DIGEST: %s undigested PBS session transcript(s) found in ~/.claude/projects. Run /session-digest now (read the JSONL transcripts newer than the timestamp in .claude/.last_digest) to capture decisions, rules, and preferences into CLAUDE.md + OPEN_ITEMS, then write a fresh UTC timestamp to .claude/.last_digest and commit. Do this before other work unless the user redirects."}}\n' "$newer"
  fi
} 2>/dev/null
exit 0
