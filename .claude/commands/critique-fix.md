---
description: Run the full pre-ship critique on a week file, then APPLY every resolvable fix in place and commit, leaving only genuinely-unresolvable items flagged. The auto-fixing counterpart to /critique (which is advisory-only). Use when you want the week left ship-clean, not just diagnosed.
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
---

You are taking a PBS week file from "critiqued" to "ship-clean." Target = `$ARGUMENTS` (a week number or file path). Two phases: **diagnose** (identical to `/critique`), then **fix** (apply every resolvable finding, commit, flag the rest).

Read first: `CLAUDE.md` (voice + rules), `week_build_spec.md` (the §8 gate checklist = the definition of done), `.claude/commands/critique.md` (the scoring rubric), and `linkedin_performance_tracker.md` (WORKING/WEAK sets + floors).

## Phase 1 — Diagnose
Run the complete `/critique` analysis (all checks in `.claude/commands/critique.md` items 1-9 + the cross-week and gate checks). Produce the full finding list exactly as `/critique` would: per-post PASS/FLAG, the headline-findings table, the single highest-risk item.

## Phase 2 — Classify each finding: RESOLVABLE vs UNRESOLVABLE

**RESOLVABLE — fix it now, directly in the file(s). Do NOT ask, do NOT defer.** A finding is resolvable when the fix is mechanical or fully derivable from content that already exists in this repo:
- **Brand rules:** bare "PBS" → "Prescription Benefit Solutions" in public copy (keep "PBS" only in internal build notes); "RXBS" → spell out; em-dash/`" - "` sentence separators → comma/colon/semicolon/paren; hashtags → 3, PascalCase, pillar set; paste-ready blocks → fenced; "Dr. Ginny Crisp" → "Ginny Crisp, PharmD"; disclaimer policy.
- **Stale internal cross-references:** PART 5/6/7 (or any build note, asset row, metrics label, visual label, PART 4B header note) that names a format/topic/post the week no longer uses → rewrite to the as-built content.
- **Run of Show drift/gaps:** add a missing row for any item that exists elsewhere in the file (roundup, "What I'd Ask", a Substack item), with the correct Where pointer; reconcile rows to built content.
- **Wrong-but-derivable dataset values:** PART 1C `field_note_title`/`field_note_url`, slugs, pairing rationale, second_toolkit selection → set to THIS week's actual field note / toolkit already drafted in the file (per the pairing rules in `email_gated_toolkit/toolkit_dataset.md`).
- **Missing mandatory templated sections** whose content is derivable from the week's own material + the conventions: the `## Substack Contract Library Update — Library 0X Week` section (Library weeks), PART 1C, Newsletter Title Options, Publish Post Copy, First Comment, PART 4B. Build them from the week's content and the CLAUDE.md conventions.
- **Library-week contract-library merge:** when a Library NN carousel ships, add/expand the surfaced provisions in `substack_contract_language_library.md` (same format pattern as the existing entries, between the `▼ BEGIN PASTE ▼` / `▲ END PASTE ▲` markers), update the Update Log `_Pending: next push_` row and the planning notes / numbering. (See CLAUDE.md "Library continuous-update workflow.")
- **Within-week duplicate / mislabeled posts:** re-angle one duplicate X/LinkedIn post to a distinct angle using material already in scope; relabel a `[VISUAL: ...]` tag and amplifier copy to the actual visual that ships.
- **Weak hook / missing 6-beat beat** where the topic and material are clear: rewrite the hook to the confrontation bar; add the missing Promise / Positioning / Conclusion / CTE beat, pulling the Positioning anchor from `proprietary_anchor_bank.md` (respect the no-repeat-within-~4 rule and the contracted-not-offered / 25%-is-RFP guardrails).

**UNRESOLVABLE — do NOT invent. Leave the placeholder in place, mark it ⚠ in the Run of Show (and at the point of use), and list it in the residual report with the reason and exactly what input is needed.** A finding is unresolvable when fixing it would require:
- An **external resource that does not exist yet**: a not-yet-published URL (a Potter/guest piece, a Substack post that publishes later in the week, a live `rxbs.org/toolkit/<slug>` page not yet built), a `pdf_url` awaiting Wix Media upload, a `field_note_url` for a Field Note not yet published.
- **Human-supplied data**: real performance metrics not yet logged, testimonials, a headshot, a quote.
- **Fabricating** a statistic or a source (banned — flag instead).
- A **genuine strategy/judgment call** the human owns: replacing a whole post's topic/shape (a hook rewrite is resolvable; a topic swap is not), picking among the 3 Newsletter Title Options, changing an A/B variant assignment, or anything where two reasonable editors would disagree on direction. When in doubt about whether something is a judgment call, flag it rather than overwrite the author's intent.

**Hard guardrails (never cross, even to "fix"):** never publish anything (drafts only, to `main`); never invent a number, URL, source, or quote; never delete drafted work without parking it (`evergreen_visual_backlog.md` / `field_note_backlog.md` per the rules); never change a deliberate strategy decision.

## Phase 3 — Apply, sync, verify
- Make the resolvable edits in place across all affected files (the week file, `substack_contract_language_library.md`, etc.).
- If you edit any toolkit HTML in `templates/documents/`, re-render per CLAUDE.md: `weasyprint <name>.html <name>.pdf` → `python3 render_preview.py <name>.pdf` → `python3 _audit_pdfs.py` (must report 0 flagged). Commit HTML+PDF+PNG together.
- Re-scan the file once more for the brand-rule set (no new em-dash separators, no bare "PBS" in public copy) so a fix didn't introduce a violation.

## Phase 4 — Report + commit
Write `critique_reports/critique_<YYYY-MM-DD>.md` with three sections:
1. **Auto-fixed** — each resolvable finding and the one-line change made.
2. **Left flagged (needs you)** — each unresolvable finding, the reason, and the exact input required (e.g., "paste the live Potter URL into PART 1 L~110 + the newsletter first comment").
3. **Ship-readiness** — "ship-clean except for N flagged inputs" or, if a strategy-level reshape is needed, say so plainly.

Commit the week file + any supporting files + the report together (`git add -A`) with a message naming the week and summarizing fixed-vs-flagged. The workflow's commit step will push; if running manually, push to `main` (Ginny works on main).

The goal: Ginny opens the week Thursday morning and it is ready to schedule, with only the truly-external inputs (a link that doesn't exist yet, a metric only she has) left to drop in.
