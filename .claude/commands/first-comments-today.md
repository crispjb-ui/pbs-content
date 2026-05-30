---
description: Surface today's LinkedIn + X first comments that must be posted manually after each post publishes
allowed-tools: Bash, Read, Grep, Glob
---

You are running the PBS daily first-comment routine. First comments on LinkedIn and X
**cannot be scheduled** — they must be pasted by hand the moment each post publishes
(on X the link-bearing first reply must go up within seconds so the link does not suppress
reach). Your job is to surface today's needed first comments, paste-ready, so Ginny can add
them as each post goes live.

The week files in `newsletters/` are the single source of truth. Do not invent copy; lift it.

## Step 1 — Establish today

Run:
```
date +"%a %b %-d, %Y"
```
Note today's weekday + date token in two forms the files use, e.g. `Wed Jun 10` (day header /
timeline) and `Jun 10` (loose match). Also note whether today is Mon/Wed/Thu (Substack publish days).

## Step 2 — Find today's posts

1. `Glob` `newsletters/week_*.md`. Identify the week file that covers today by grepping each file's
   PART 3 Publishing Timeline and PART 4B day headers for today's date token (`Grep` for `Jun 10`,
   etc.). Weekend posts live only in PART 4B, so match on the date token, not the Mon-Fri subtitle range.
2. In that week file, collect:
   - **LinkedIn Feed posts dated today** — from the `## Publishing Timeline` table (rows with today's
     date + `LinkedIn Feed`). Get the Post number and time (usually 8:30 AM).
   - **LinkedIn Newsletter** if today is Monday (7:45 AM) — newsletters usually don't take a first
     comment unless the file specifies one; check.
   - **X posts dated today** — from PART 4B, the `**<Day Date>**` block. List every slot (AM / midday /
     PM) that has a `First reply (link):` line. Text-only posts with no link need NO first comment; skip them.

## Step 3 — Pull the paste-ready copy

- For each LinkedIn post today: open `## Post NN` in PART 3 and lift its `#### First Comment` block verbatim.
- For each X slot today: lift the `First reply (link):` text verbatim from PART 4B.

## Step 4 — Flag URLs that must be filled first

Any first comment containing a placeholder like `[SUBSTACK ... link]`, `[Monday Substack deep dive link]`,
`[Thursday Field Note link]`, `[... URL]`, or `rxbs.org/toolkit/...` needs attention:
- If the linked Substack piece **publishes today** (Mon deep dive 7:30 AM / Wed roundup 7:30 AM /
  Thu field note 7:30 AM), remind Ginny to grab that live Substack URL FIRST, then use it in the comments.
- Per the Wix funnel status in `CLAUDE.md`, first comments should route to the **Substack post, not the
  `rxbs.org/toolkit/...` landing page**, until the toolkit funnel cleanup is done. If a lifted first comment
  points at a toolkit landing page, flag it and suggest the Substack equivalent.

## Step 5 — Output (this is what Ginny sees)

Lead with a one-line summary. Then a **time-ordered checklist**, each item paste-ready. Keep it tight.

Format:

> **First comments to post by hand today — {Weekday}, {Date}**
> {N} LinkedIn + {M} X. {one line on any live-URL you need to grab first, or "no Substack URL needed today."}
>
> For each item, in time order:
>
> **{time} · {channel} · {post name}**
> (⚠️ fill live URL first, if applicable)
> ```
> {paste-ready first comment / first reply copy}
> ```

If nothing needs a first comment today (e.g., a quiet Saturday with only text-only X posts), say so
in one line: **"No first comments needed today."** Do not pad.

## Notes

- This runs as a scheduled morning session (~8:15 AM ET, just before the 8:30 posts). The reader is
  Ginny, mid-coffee, about to publish. Be a checklist, not an essay.
- Order matters: X first replies are the most time-sensitive (seconds after posting); call that out.
- Never post anything yourself. You surface; Ginny pastes.
