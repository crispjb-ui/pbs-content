---
description: Turn a week's Run of Show into a paste-ready, publish-order scheduling queue so the whole week can be scheduled in one scroll (every post with its copy, first comment, and asset inline, in the exact order it publishes).
allowed-tools: Bash, Read, Grep, Glob
---

You are producing Ginny's **scheduling queue** for week **$ARGUMENTS** (a week number, or "today" / blank = the week covering today). The week files in `newsletters/` are the single source of truth. Do not invent or rewrite copy — lift it verbatim.

## Step 1 — Find the week
If given a number, open `newsletters/week_NN_*.md`. If "today"/blank, run `date +"%a %b %-d, %Y"` and find the week file whose `## Weekly Run of Show` (or dates) covers today.

## Step 2 — Walk the Run of Show in order
Read the `## Weekly Run of Show` table. For **each row, in publish order (top to bottom)**, pull the matching content from the file and output a queue entry:

```
<Day> <Time> · <Channel>
  WHAT: <one-line description>
  COPY: <the exact paste-ready body from the fenced code block, verbatim>
  FIRST COMMENT: <verbatim, if any; note "post the moment it goes live">
  ASSET: <image/carousel/[VISUAL] reference or "none">
  NOTE: <any scheduling caveat — e.g. "schedule AFTER the 8:30 LinkedIn publishes", "⚠ needs retarget">
```

Rules:
- Keep it in strict chronological order across the whole week (Mon→Sun, by time), so it reads as a single do-this-next list.
- Substack pieces (deep dive / field note / roundup): give the title + where the body lives (PART), not the full article body.
- X (PART 4B) and Notes (PART 4) are already day-ordered — pull each day's posts in time order.
- Mark every item that needs a **manual first comment** or a **company reshare** (those can't be scheduled).
- Flag any `⚠` open item from the Run of Show at the TOP of the output so it's handled before scheduling.

## Step 3 — Header summary
Open with: week number + date range, the triple-distinct topic line, the shocking fact used this week, and a count of items by channel. Then the chronological queue.

Output to chat (paste-ready). Do not edit the week file.
