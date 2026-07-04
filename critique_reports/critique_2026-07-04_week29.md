# Critique-Fix Report — Week 29 (Rebate Economics Decoded)
**Date:** 2026-07-04
**File:** `newsletters/week_29_rebate_economics.md`
**Publish week:** July 20-24, 2026
**Result:** Ship-clean except for 2 flagged inputs (both external / judgment; not auto-fixable).

---

## 1. Auto-fixed (resolvable — applied in place)

1. **LI feed posting-time drift → 8:30 AM.** All LinkedIn feed posts were scheduled at 10:00 AM (first comments 10:05 AM), contradicting the standing CLAUDE.md rule (the 10:00 AM test concluded May 8, 2026 and reverted to 8:30 AM starting W19). Corrected Post 105/106/107/108 to **8:30 AM** (first comments **8:35 AM**) across the Run of Show (7 rows), the four post-block headers, and PART 5. Reshares stay 1:30 PM (correct). _Note: W30 shows the same 10:00 AM drift on its Tue/Thu/Fri feed rows — this is systemic across recently-built weeks and likely needs the same fix elsewhere._
2. **Run of Show gap — missing Substack item.** Added the **Tue 7:30 AM "What I'd Ask" #7 (PART 2B)** row (it existed in the file but was absent from the Run of Show; matches the W30 convention of listing PART 2B Substack items).
3. **Run of Show gap — missing X post.** Added the **Wed 2:30 PM long-form X trial** row (present in PART 4B, absent from the Run of Show).
4. **Stale Thursday Notes teaser.** The Thursday Substack Notes launch teaser still described the *old* field note ("three rebate report red flags…"), which was replaced when Thursday was rebuilt to the copay-maximizer reveal. Rewrote it to tease the actual copay-maximizer Field Note (non-essential reclassification + three checks).
5. **Post 106 missing hashtags.** Added the pillar/topic set `#PBMTransparency #Rebates #PharmacyBenefits` (Transparency pillar, rebate topic-anchor). It had none.
6. **Post 108 missing hashtags.** Added `#PharmacyCosts #SiteOfCare #SelfFundedEmployers` (Cost Containment pillar, site-of-care topic-anchor), matching the W27 Friday-tease convention.
7. **Positioning-beat repetition.** Post 105 and Post 106 opened their proprietary anchor with the verbatim-identical "In the hundreds of contracts we review each year." Reworded Post 106 to "Across the hundreds of PBM contracts we read each year…" to avoid the templated-footer echo (kept the proprietary specificity; 2025 firm metrics remain held for W31+ per CLAUDE.md, so "hundreds of contracts a year" is the correct anchor for W29).
8. **Em-dash sentence separator in rendered image copy.** The sticky-note text "Window expires every year — sometimes faster." (appears in the published Post 105 visual) used an em-dash separator. Changed to a comma in both the layout spec and the image-generation prompt.
9. **LinkedIn-first timing fix (Thursday reveal protection).** The Thursday copay-maximizer X recipe was scheduled 8:00 AM — **30 minutes before** the 8:30 AM Thursday LinkedIn copay-maximizer reveal, scooping the week's protected conversion asset. Rescheduled the X recipe to **9:00 AM** (after the reveal publishes) in both the Run of Show and PART 4B, with a note; content unchanged, so it now amplifies rather than scoops.

**Brand re-scan after edits:** X post bodies confirmed pure ASCII (arrows/middots live only in instruction labels, not code blocks); no bare "PBS" in public copy (all instances are internal build/image notes); no ⚠ glyphs landed inside any paste-ready code block; all four feed posts carry 3 PascalCase hashtags; "Ginny Crisp, PharmD" correct; no em-dash/" - " separators introduced.

---

## 2. Left flagged (needs you)

1. **⚠ Post-publish Substack URLs.** Placeholders that can only resolve after the posts publish (handled by the `weekly-substack-urls` RSS auto-fill workflow, or paste at schedule time):
   - Newsletter body `[SUBSTACK URL]` (PART 2) + Newsletter First Comment deep-dive URL.
   - Post 106 first comment `[SUBSTACK MONDAY DEEP DIVE URL]` (Monday deep dive; live by Wed).
   - Post 107 first comment `[SUBSTACK FIELD NOTE URL]` (Field Note publishes Thu 7:30 AM).
   - Substack Notes launch-teaser `[LINK]`s (Mon deep dive, Wed roundup, Thu field note).
   _Input needed: the live Substack URLs once each post is published (or let the workflow auto-fill)._ Point-of-use ⚠ flags added above the Post 106/107 first-comment blocks; consolidated note added to the Run of Show header.
2. **⚠ LinkedIn-first soft overlap (Ginny's rotation call).** The Mon 8:00 AM X "audit rights limitation" recipe shares a topic with Tue's Post 105 (audit rights) and posts ~a day earlier. It is a generic evergreen recipe on a broad topic with a distinct angle (limitation vs. Post 105's unused-window finding), and Post 105 is a standard Tuesday visual, not the protected reveal — so this is a soft overlap, not a scoop. Left as a judgment call: reorder the X recipe to after Post 105 publishes, or leave as-is. Flagged in the Run of Show header.

---

## 3. Ship-readiness

**Ship-clean except for 2 flagged inputs**, neither a content problem: (1) the standard post-publish Substack URL fills (auto-handled by the RSS workflow), and (2) one soft LinkedIn-first rotation judgment for Ginny. No strategy-level reshape needed. Triple-distinct holds (Mon rebate economics / Tue audit rights / Thu copay maximizer, three distinct subjects and pillars); the Wednesday offshore-aggregator reveal is a deliberately-designed rebate-adjacent flex reveal that cross-promos back to the Monday deep dive (author's intent, left intact). Thursday Excellence 5/5 verified in the Post 107 block. No new toolkit minted (correct refer-back to the live Copay Card Financial Impact Calculator). W29 is not a Library week — no Contract Library Update section added.
