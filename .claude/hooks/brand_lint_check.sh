#!/usr/bin/env bash
# Stop hook (PBS repo). Advisory brand/schema lint on the public web surface:
# surfaces any HARD violations as a pre-push reminder. Never blocks; exits 0.
# Mirrors the style of the stop-hook git check. Silent when clean.
out=$(python3 tools/brand_lint.py 2>/dev/null)
code=$?
if [ "${code:-0}" -ne 0 ]; then
  echo "[brand_lint] Hard brand/schema violations on website_mockups/site/ — fix before committing/publishing:"
  printf '%s\n' "$out" | grep "FAIL:" || true
fi
exit 0
