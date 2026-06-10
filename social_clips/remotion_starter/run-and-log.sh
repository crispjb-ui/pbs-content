#!/usr/bin/env bash
# Render all podcast clips (LinkedIn first, then vertical) and stream progress.
#
#   Watch live from the repo root:
#     tail -f social_clips/remotion_starter/out/render.log
#
#   Finished clips land in:
#     social_clips/remotion_starter/out/
#
# Prereq: the episode video at public/source.mp4
set -uo pipefail
cd "$(dirname "$0")"
mkdir -p out
echo "render started: $(date -u)" | tee out/render.log
node render-all-platforms.mjs "${1:-../honest-hr-shrm_2026-06-09_clips.json}" 2>&1 | tee -a out/render.log
echo "render finished: $(date -u)" | tee -a out/render.log
