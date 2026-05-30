# First-Comment Daily Routine

## The problem this solves

First comments are the single piece of the PBS publishing system that **cannot be scheduled**:

- **LinkedIn** does not let you pre-load the first comment on a scheduled post. The Substack
  cross-promo link (the documented conversion lever: ~6-7 free subs/week from first-comment links)
  has to be pasted by hand right after the post publishes.
- **X** is worse: the link-bearing first reply must go up within seconds of the post, because a link
  in the post body suppresses reach. So the reply can't wait.

Every first comment is already written in the week files (`newsletters/week_NN_*.md`) — PART 3 holds
the LinkedIn `#### First Comment` blocks, PART 4B holds the X `First reply (link):` lines. The routine
below surfaces the right ones each morning so nothing gets missed.

## How it works

- **Command:** `/first-comments-today` (lives at `.claude/commands/first-comments-today.md`).
- It reads today's date, finds today's scheduled posts across the week files, and outputs a
  time-ordered, paste-ready checklist of every first comment / first reply due today, flagging any
  that need a live Substack URL filled in first.
- It reads the week files as the single source of truth, so it never drifts from the scheduled copy.

## Scheduling (one-time setup in Claude Code on the web)

1. Open this repo's environment in Claude Code on the web.
2. Create a **scheduled session / trigger** set to run **daily at 7:30 AM ET**. Set the timezone to
   **America/New_York** so it auto-adjusts for daylight saving. (If the scheduler only accepts UTC: that
   is **11:30 UTC** during EDT / **12:30 UTC** during EST.) 7:30 AM ET is when the Substack pieces publish,
   giving a full hour to grab live URLs before the 8:30 AM LinkedIn posts.
3. Set the session prompt to: `/first-comments-today`
4. Save. Each morning the session runs, and the checklist arrives as the session output / notification.

The same routine can be run manually any time by typing `/first-comments-today` in a session.

## Daily use

1. Read the morning checklist.
2. If it flags a live Substack URL to grab (Mon deep dive / Wed roundup / Thu field note publishes 7:30 AM),
   open the published Substack post, copy its URL, and use it in the comments.
3. As each post publishes, paste its first comment. **X first replies first** (most time-sensitive),
   then LinkedIn.
4. First comments route to **Substack posts, not `rxbs.org/toolkit/...` landing pages**, until the Wix
   toolkit funnel cleanup is complete (see `CLAUDE.md` Wix Toolkit Lead-Gen Funnel Status).

## Why a routine and not a static list

A pre-built dated list would duplicate the week files and drift the moment a post is edited (as the
W22 atomization swaps just showed). The routine regenerates from the week files every morning, so the
checklist always matches what is actually scheduled.
