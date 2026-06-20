---
description: Monthly platform best-practices research. For each platform (LinkedIn, Substack, X, YouTube Shorts, TikTok, Instagram, Facebook, Threads, YouTube (long-form), Reddit/Quora) researches CURRENT best practices with adversarial verification, vets each "hack" for ToS risk + B2B brand-fit, auto-applies safe format/spec/tactic updates to platform_playbooks.md, and proposes rule-level changes to OPEN_ITEMS for one-time approval. Drafting/research only; never auto-publishes.
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, WebSearch, WebFetch
---

You are running the PBS monthly platform best-practices research and feeding it back into the content system. Read `CLAUDE.md` first (voice, brand rules, no-fabrication, the measured-data override). This loop keeps the per-platform content specs current so the weekly build (`/build-week`) and the clip plan (`/clip-podcast`) draft to the latest best practices automatically.

**The source of truth this loop maintains is `platform_playbooks.md`** — the per-platform playbook the build reads. (Do NOT create that file from scratch in this command; a separate process owns its creation. Edit it in place if it exists; if it does not yet exist, write the per-platform sections + changelog in the same structure so the build can read them.) This command is **research + drafting only. It never auto-publishes anything** (LinkedIn / X / Substack / Facebook / Instagram / TikTok / YouTube / Threads / Reddit).

## Step 1 — Research current best practices, per platform (adversarial verification)
For each platform — **LinkedIn, Substack, X, YouTube Shorts, TikTok, Instagram, Facebook, Threads, YouTube (long-form), Reddit/Quora** — run `WebSearch` + `WebFetch` for the current (this-month) best practices that matter to PBS's content: hook patterns, post/clip format, length/spec (aspect ratio, duration, character counts, image dimensions), posting cadence, what the ranking algorithm is rewarding now, link placement, hashtag norms.

**Adversarially verify every finding.** For each, mark it:
- **CONFIRMED** — corroborated by a primary/authoritative source (platform docs, the platform's own engineering/creator blog, or 2+ independent reputable sources) with a date.
- **DIRECTIONAL** — a single source, a creator-influencer claim, or an unverified "hack"; useful signal but not load-bearing.

Cite every finding with its source and date. No fabricated figures.

## Step 2 — Vet each finding for ToS risk AND B2B brand-fit (before anything is applied)
PBS is a **clinical-credibility B2B brand** reaching CFOs, HR directors, and benefits brokers as **Prescription Benefit Solutions**. A tactic only earns its way into the playbook if it survives both screens:
1. **ToS risk.** Reject (or flag, never silently apply) anything that risks a platform's terms of service — engagement-pod schemes, bot/automation tricks, follow/unfollow churn, fake-engagement, banned-link workarounds, anything that could get the account throttled or suspended.
2. **B2B brand-fit.** Reject reach hacks that pull the WRONG audience (consumer virality that drifts off the plan-sponsor segment), cheapen the clinical-credibility register, or read as influencer-slop (these also trip the Humanize Check). Reach for its own sake is not the goal; the right reach is.
3. **Measured-data override.** PBS's own logged results in `linkedin_performance_tracker.md` ALWAYS beat generic advice. Where a researched best practice conflicts with PBS's measured WORKING/WEAK data, the measured data wins — note the conflict explicitly in the playbook entry rather than overwriting the measured learning.

Rejected/flagged items are recorded as such (with the reason) — they are NOT applied.

## Step 3 — Auto-apply the safe, format/spec/tactic-level updates (mechanical, no approval)
These are mechanical and need no approval, so apply them directly by **editing `platform_playbooks.md` in place**:
- Update each platform's section with the current verified hook patterns, format, spec (aspect/duration/char counts/dimensions), cadence, link/hashtag norms — sourced, each tagged CONFIRMED or DIRECTIONAL.
- Add a **dated changelog entry** (e.g., `## Changelog` → `### <YYYY-MM-DD>`) listing what changed per platform, with the source for each change.
- Keep the measured-data override notes inline where a best practice conflicts with PBS's logged results.

These are spec/format/tactic refreshes only — not new rules.

## Step 4 — Propose (do NOT auto-apply) any RULE-level change
Anything that changes a **rule** — a new post type, a cadence shift, a new format/template, or a change to a `CLAUDE.md` / `week_build_spec.md` rule — is a judgment call. **Append a clearly-labeled proposal to `OPEN_ITEMS.md`** for Ginny's one-time approval. **Do NOT edit `CLAUDE.md` or `week_build_spec.md` yourself.** Each proposal states: the platform, the proposed rule change, the sourced evidence (CONFIRMED/DIRECTIONAL), the ToS + brand-fit verdict, and which file/section it would touch if approved.

## Step 5 — Write the two-section notify body
Write `/tmp/notify_body.md` with exactly two sections, in plain language:

```
## ✅ Auto-applied to platform_playbooks.md (FYI)
- <platform>: <what changed> (CONFIRMED/DIRECTIONAL, source + date)
- ...

## 🟧 Needs your one-time approval (in OPEN_ITEMS)
- <platform>: <proposed rule change> → would touch <file/section>
- ...
```

Lead with a one-line header naming the run (e.g. `**Monthly Platform Research** · <date>`). If a section is empty, say so (`- none this month`).

## Autonomy boundary (important)
Format / spec / tactic refreshes are mechanical + sourced → **auto-apply to `platform_playbooks.md`**. New post types, cadence shifts, new formats, and CLAUDE.md / week_build_spec rule changes are judgment calls → **propose to OPEN_ITEMS only**. The weekly `/build-week` and `/clip-podcast` read `platform_playbooks.md` on their next run, so the auto-applied refreshes flow into the content automatically; rule changes wait for Ginny's yes. **This loop never publishes; it only researches and drafts.**
