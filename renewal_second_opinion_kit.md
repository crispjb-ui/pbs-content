# Renewal Second Opinion — the September offer kit (publish-ready)

**Status:** copy-complete; **name + copy APPROVED (Ginny, Jul 9, 2026 — Decision #1)**. Contains: the offer definition, the landing page copy (`rxbs.org/renewal-second-opinion`, Utility/Conversion archetype), the 90-Day Notice framing, and the campaign integration lines. ⏱ page live by Aug 15; the offer is the September campaign's product.
**⚠ RED-TEAM (Jul 6, 2026): PASSED attacks 1-6.** One sequencing note: the independence line references the published Standards, so /standards must be live before this page is PROMOTED (the rollout calendar already guarantees this: Standards Aug W1, RSO promotion Sep 8). Date-math verified (90 days before Jan 1 = early Oct).

## The offer (internal definition)

A fast, fixed-scope, independent read of a plan's PBM renewal terms before signature: what changed against the current contract, what the changes cost, and what to push back on before the notice window closes. Scope is deliberately narrow (renewal terms + the three highest-leverage contract sections), timeline days not weeks, priced as an entry engagement. It is the first rung of the product ladder; findings routinely justify the full Contract Review, but the offer must stand alone honestly. **Excluded from the findings guarantee at launch** (see `findings_guarantee_design.md` §3).

---

## ▼ LANDING PAGE COPY BEGINS ▼

# Do not sign the renewal unread.

**A Renewal Second Opinion is a fast, independent read of your PBM renewal terms, from clinical pharmacists who review hundreds of PBM contracts a year, before your notice window closes.**

Your January 1 renewal is being decided right now. Renewal terms typically arrive between August and October. Termination and amendment notice windows, usually 90 days, close in early October. Whatever gets signed this fall is the contract your plan lives with all of next year.

Here is what we see in our work at Prescription Benefit Solutions: renewal changes are rarely announced. They are redlined. A definition shifts. An exclusion list grows. A guarantee gets a new denominator. The cover letter says "no significant changes," and the redline says otherwise.

**What the Renewal Second Opinion covers:**

1. **Every change,** located and translated: the renewal terms laid against your current contract, each difference explained in plain English with its cost direction.
2. **The three sections that decide the money:** pricing-guarantee definitions and math, rebate language and exclusions, and your audit and termination rights.
3. **The push-back list:** the specific language to request before you sign, drawn from the protective provisions we negotiate across hundreds of contracts a year.

**What you receive:** a written summary your CFO can read in ten minutes, the marked-up terms, the push-back language ready to send, and your Fiduciary File entry documenting that the renewal was independently reviewed before signature.

**Timeline:** days, not weeks. Built to fit inside a closing notice window.

**Independence:** we take no money from any PBM. Our only client in this engagement is your plan. Our standards are published and we attest to them in writing.

> **The 90-Day Check:** if your plan renews January 1, count back 90 days. That is your real deadline, and it is earlier than it feels. If you are inside the window and the renewal terms are sitting unread, that is exactly the situation this engagement exists for.

**[Request a call]** — a few sentences on where your renewal stands is enough to start. Our team will reply within one business day.

*Prescription Benefit Solutions · Charleston, SC · Independent pharmacy benefits consulting · www.rxbs.org*

## ▲ LANDING PAGE COPY ENDS ▲

---

## The 90-Day Notice (the ritual, internal)

The offer's calendar hook, used every September until the market says it back to us. Naming rules: it is always "the 90-Day Check" in public copy (verb, actionable), "the 90-Day Notice window" when referring to the contract mechanism. Every use passes the date-math gate (90 days before Jan 1 = early October; verify against the real year). Annual rhythm: first mention in the late-August newsletter, center stage in the Sep 8 reactivation email (already drafted to this framing), the Sep 16 briefing's action segment, and every renewal-topic first comment through early October.

## Campaign integration lines (paste-ready)

**Email 07 (already drafted, no change needed):** the existing item (3) routes here once the page is live; swap `reply to this email` CTA per that file's note → `rxbs.org/renewal-second-opinion`.

**LinkedIn first comment (renewal-topic posts, Sep):**
```
Renewal terms on your desk? We run a fast independent read of exactly what changed and what to push back on before the notice window closes, with the paste-ready language included: rxbs.org/renewal-second-opinion
```

**Briefing close (Sep 16, spoken):** "If your renewal is sitting on your desk right now, the Renewal Second Opinion exists for exactly this month. The link is on the screen; our team replies within a business day."

**X (post-publish amplification, ASCII-safe):**
```
Renewal season rule: do not sign it unread. The changes are rarely announced. They are redlined. We read them independently, in days, before your notice window closes. Link in reply.
```

## Wix assembly specifics (SEO + schema + CTA — added Jul 6, 2026)

Archetype: Utility/Conversion, same visual system as the toolkit landing pages. Build with **native Wix elements** (crawlable). This page has **no form of its own** — its CTA deep-links into the request-a-call page, which is why request-a-call must be built first.

**SEO Basics (Wix page SEO panel):**
- **Title tag:** `Renewal Second Opinion: An Independent Read of Your PBM Renewal Before You Sign | Prescription Benefit Solutions`
- **Meta description:** `Renewal terms arrive August to October and the 90-day notice window closes in early October. A Renewal Second Opinion is a fast, independent read of your PBM renewal terms, from pharmacists who review hundreds of PBM contracts a year, before you sign.`
- **URL slug:** `/renewal-second-opinion` · **Canonical:** `https://www.rxbs.org/renewal-second-opinion` · **Indexable:** ON.

**Structured data (Wix SEO → Advanced → Structured data markup):**
```
{"@context":"https://schema.org","@type":"Service","name":"Renewal Second Opinion","serviceType":"PBM renewal contract review","description":"A fast, independent read of a self-funded plan's PBM renewal terms before signature: what changed against the current contract, what the changes cost, and what to push back on before the notice window closes.","provider":{"@type":"Organization","@id":"https://www.rxbs.org/#organization","name":"Prescription Benefit Solutions"},"areaServed":"US","audience":{"@type":"Audience","audienceType":"Self-funded employers and plan sponsors"},"url":"https://www.rxbs.org/renewal-second-opinion"}
```

**Page structure** (from the LANDING PAGE COPY block above): H1 `Do not sign the renewal unread.` → the bold answer-first subhead → the "renewal terms arrive Aug–Oct / window closes early Oct" body → the "renewal changes are redlined, not announced" paragraph → **What it covers** (3-item numbered list) → **What you receive** → **Timeline** → **Independence** → the **90-Day Check** styled as an Accent-Blue callout box → the **Request a call** CTA → the footer line.

**The CTA wiring (the one dependency):** the `[Request a call]` button links to
`https://www.rxbs.org/request-a-call?topic=renewal-second-opinion`
(the `?topic=` pre-selects the dropdown, so the request lands contextually). Build request-a-call first.

## Build checklist

- [x] Ginny: approve name + copy (**Decision #1**) — ✅ **APPROVED Jul 9, 2026, name kept as "Renewal Second Opinion"** (alternatives evaluated and declined). Price posture per the pricing memo still open at build time.
- [x] Brett: build request-a-call **first** (its CTA target), then build `/renewal-second-opinion` per the assembly specifics above. ✅ **PAGE LIVE Jul 9, 2026 — five weeks ahead of the Aug 15 deadline.** Open micro-polish: restore the H1's trailing period ("unread.") and add the footer line; CTA `?topic=renewal-second-opinion` pre-select **VERIFIED live Jul 9** (no false validation error).
- [x] Paste the `Service` JSON-LD + SEO fields; leave indexable ON. ✅ **Validated Jul 9 (validator.schema.org: Service, 0 errors / 0 warnings; title/meta/canonical all rendering).**
- [ ] **Do NOT promote publicly until `/standards` is live** (the Independence line references the published Standards; rollout has Standards at Aug W1, this page's public promotion at Sep 8). Building/publishing quietly before then is fine; linking it publicly is the gated step.
- [ ] Claude session: after the page is live, sweep the campaign links in (Email 07 CTA → `rxbs.org/renewal-second-opinion`, W35-37 first comments where renewal-topical).
