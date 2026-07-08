---
description: Capture Ginny's pre-publish edits as voice training data. Paste a before/after (the drafted copy vs what Ginny actually published) and this logs the delta to the canon's contrast pairs, extracts the pattern, and promotes recurring patterns into the fingerprint. The loop that keeps the voice locked as it evolves.
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
---

Ginny edited drafted copy before publishing, and that edit is the highest-quality voice signal PBS generates (the Potter Rules 1-10 came from exactly this kind of diff). Input = `$ARGUMENTS` or the pasted content: the BEFORE (what was drafted) and the AFTER (what Ginny actually published or how she rewrote it). If only one side was provided, ask for the other; the delta IS the data.

## Steps

1. **Diff the two versions** and identify each meaningful change. Ignore typo fixes and platform-mechanical changes (link placement, hashtag swaps). Keep changes of wording, structure, order, cuts, and additions.

2. **For each meaningful change, name the pattern in one line.** Not "she changed X to Y" but the generalizable rule: "cut the validating first sentence," "replaced the abstract claim with the specific clause," "broke the parallel run," "softened the broker-adjacent implication," "moved the opinion marker earlier."

3. **Log to `ginny_voice_canon.md`** under the "Contrast pairs from Ginny's edits (the delta log)" section: date, the format/channel, the before/after excerpt (trimmed to the changed portion plus minimal context), and the one-line pattern(s). Newest entries at the top of the section.

4. **Check for promotion.** Search the delta log for the same pattern appearing in **2-3 or more entries**. When a pattern recurs:
   - Add or refine the matching rule in `ginny_voice_fingerprint.md` (the correct layer), citing the delta-log dates as the evidence.
   - If the pattern contradicts an existing fingerprint or CLAUDE.md rule, do NOT silently rewrite the rule: flag the conflict in `OPEN_ITEMS.md` with both citations (the maintenance-model escalation rule governs).
   - If it is a genuinely new rule class (not a refinement), note it in the reply so Brett/Ginny can confirm before future weeks build on it.

5. **Commit** with a message naming the pattern(s) captured, and tell the user in one or two sentences what was logged and whether anything got promoted to the fingerprint.

## Guardrails

- Never invent a delta. If the before and after are effectively identical, say so and log nothing.
- Ginny's version wins by definition. If her edit appears to violate a repo rule (e.g., she added an em dash), log it as a delta and FLAG the tension in OPEN_ITEMS rather than "correcting" her side of the pair; the rule may need updating, or it may be a one-off, and that is her call.
- Keep excerpts short enough to scan (the changed sentences plus a line of context, not whole articles).
