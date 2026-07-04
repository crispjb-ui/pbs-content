# Critique-Fix Report — Week 28 (Network Design)
**Date:** 2026-07-04 · **Publish week:** July 13-17, 2026 · **File:** `newsletters/week_28_network_design.md`

Ran full `/critique` Phase 1 (items 1-9 + cross-week + `week_build_spec.md` §8 gate), classified findings RESOLVABLE vs UNRESOLVABLE, and applied every resolvable fix in place. Toolkit files (`week_28_thursday_ger_audit_worksheet` HTML/PDF/PNG) and the paired `week_27_thursday_pbm_compensation_audit` PDF all exist; no toolkit HTML edited, so no re-render needed.

---

## 1. Auto-fixed (resolvable)

1. **Newsletter Publish Post Copy — wrong channel taxonomy.** The paste-ready publish copy described a different five-channel set ("retail chain, independent retail, mail order, PBM-owned mail, PBM-owned specialty") than the article and newsletter body (retail, mail order, specialty, white bagging, home infusion). Rewrote the two middle lines to match the as-built five channels; also removed the "generic … at every dispensing channel" mismatch (the deep dive is drug-agnostic network design).
2. **Deep dive missing the §7 toolkit tease.** Added a short link-free tease after the intro promising the end-of-article model + free worksheet, to pull readers through.
3. **Deep dive missing the W25-forward live toolkit link (§7 + refer-back-first).** No new Monday toolkit is minted (correct per refer-back-first). Added the live `https://www.rxbs.org/toolkit/channel-pricing` worksheet as the printable companion to the in-article model at the point the model is described (clearest live topic match: per-channel net cost, retail/mail/specialty). Also adds a second rxbs.org outbound money-page link for AEO.
4. **Run of Show drift — missing X slot.** PART 4B Tuesday carries a 2:30 PM long-form X trial post that had no Run of Show row. Added the row so Run of Show reconciles to built content.
5. **Run of Show — ⚠ flags on the two rows dependent on not-yet-live external inputs** (Mon LI Newsletter: live deep-dive URL + ger-audit toolkit page; Thu Post 103: live Field Note URL in first comment).
6-10. **X PART 4B within-week duplicate bodies (§8 gate).** Re-angled five near-verbatim duplicates to distinct, in-scope, ASCII-clean bodies:
   - **Thu 5:00 PM punchy** (was a duplicate of Mon 8:30 PM [C3] "dialect … hidden on purpose") → generic-spread angle, fires after the Thursday LinkedIn reveal (LinkedIn-first respected).
   - **Fri 5:00 PM punchy** (was a duplicate of Wed 7:00 PM [A6] "spread/rebate/fee … contract contains all three") → distinct rebate-reporting "selected not fabricated" angle teasing W29.
   - **Sun 8:30 PM [B5]** (was a duplicate of Mon 7:00 PM [A4] audit-clause "auditor/records/findings → tour vs right") → distinct GER exclusion-list question.
   - **Tue 8:30 PM [B3]** (duplicated the Thu 8:00 AM pass-through recipe) → distinct network net-cost-by-channel question.
   - **Sat 2:30 PM specialty routing** repeated the exact "That's not a network. It's a funnel." closer (already in Thu [B4], echoed by Sat [C5]); replaced only its closing line with an actionable net-cost ask.

Post-fix re-scan: no bare "PBS" in public copy (all occurrences are internal build notes / logo instructions), no em-dash or " - " sentence separators in public prose, no non-ASCII inside any PART 4B X post body, dedup confirmed (each formerly-duplicated line now appears once).

---

## 2. Left flagged (needs you — genuinely external or a judgment call)

**Not-yet-live URLs (routine fill-at-publish; several auto-filled by the weekly-substack-urls workflow):**
- Newsletter body `[SUBSTACK URL]` + newsletter First Comment `[Substack deep-dive URL …]` — Monday deep dive publishes 7:30 AM Mon; paste after.
- Post 103 First Comment `[SUBSTACK FIELD NOTE URL — slug generic-spread-ger-average-hides]` — Field Note publishes 7:30 AM Thu; paste after.
- Newsletter First Comment + Post 103 First Comment `rxbs.org/toolkit/ger-audit` — landing page goes live only after the PART 1C Wix build (upload PDF + PNG, add CMS row, verify render). If not built by Monday, drop the toolkit line and route to the deep dive (per the existing italic note).
- Substack Notes `[LINK]` placeholders (Mon/Wed/Thu launch teasers) — live at publish time.

**PART 1C operational placeholders (external, expected):** `pdf_url` = `[fill after Wix Media upload]`; `field_note_url` = `[fill after Thursday Field Note publishes]`.

**Human/design assets (PART 6):** Substack article header + Field Note header images "Design needed"; Post 101 (GLP-1 Bridge messy infographic) and Post 103 (12-Cent Pill museum-frame) images to be generated per the in-file prompts.

**Judgment calls (not auto-changed — strategy the human owns):**
- **Non-Library Tuesday is a GLP-1 Bridge news-decoder (Post 101), not a "standing reveal"** per the Jul 3 reveal-slot cadence (§2). The week already carries a strong Thursday hidden-structure reveal (generic spread), the fact-supply guardrail makes a 2nd distinct reveal optional, and the Tuesday post is a deliberate, timely, well-crafted news peg. Reshaping it into a Bypass/Funnel reveal is a topic/shape swap = the author's call, not an auto-fix.
- ~~**Feed-post time = 10:00 AM** on Posts 101/103/104.~~ **RESOLVED in the orchestration pass.** CLAUDE.md is explicit and dated that the 10 AM test concluded May 8, 2026 and reverted to 8:30 AM starting W19; a "continue 10:00 AM time-test tracking" line in a W28 (July) file is stale drift against a locked convention, not an active decision, so it is a resolvable mechanical fix (the same drift was corrected in W29). All LinkedIn-feed times on Posts 101/103/104 + the RoS rows + the Content Schedule checklist were flipped to 8:30 AM, the Thu X amplifier note updated to "after 8:30 publish," and the checklist line changed to "Confirm 8:30 AM feed-post publish time." The legitimate X weekend Tier-A 10:00 AM slots were left untouched. _Note: the same 10 AM drift persists in W27/W30 and should be swept there too._

---

## 3. Ship-readiness

**Ship-clean except for the routine external inputs above.** No strategy-level reshape required. Frameworks are all in the WORKING set (Tue news-decoder, Wed 9:16 video, Thu shocking hidden-structure reveal + dollar comparison, Fri tease); triple-distinct holds (Mon Network Design / Tue GLP-1 Access / Thu Generic-Spread GER); the sourced FTC Jan-2025 shocking fact is woven into the Thursday reveal with citation framing + PBS anchor; Thursday Excellence 5-trait audit present; hashtags 3/PascalCase; paste blocks fenced; X bodies ASCII. Remaining work is the standard Monday/Thursday URL paste-ins, the ger-audit Wix build, and image generation.
