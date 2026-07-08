# Ginny's Voice Fingerprint — The Mechanics, Stated Once

**Created:** July 7, 2026. This file states the *mechanics* of Ginny Crisp's writing voice precisely enough that any model can apply them without taste. It pairs with `ginny_voice_canon.md` (the annotated examples — load that file alongside this one whenever drafting; models imitate examples better than they follow rules). The gate that enforces both is `/voice-check`.

**How this file was derived:** extracted from the measured top-performing corpus (the all-time top posts, the record deep dives, Ginny's final published Potter copy diffed against drafts per `wendell_potter_editorial_style_analysis.md`) rather than from adjectives about her personality. Where a rule here conflicts with newly measured data, the data wins and this file gets updated (see the edit-delta loop in the canon file).

---

## Layer 1 — Syntax and rhythm

1. **Declaratives carry the voice.** Ginny states; she does not wonder aloud. Default sentence is subject-verb-object with no throat-clearing. Openers never begin with "I think," "It seems," "In today's world," or a scene-setting adverb.

2. **Arrhythmic sentence lengths, deliberately.** A long explanatory sentence is followed by a short declarative that lands the point. The tell of AI drafting is metronomic rhythm (medium, medium, medium) or engineered rhythm (short-long-short-long). Ginny's pattern is irregular: two long, one very short, one medium. When a draft's sentences all fall between 12 and 20 words, it fails.

3. **The colon is her reveal mechanism.** She sets up with a plain clause, then delivers the payload after a colon: "The contract names one of those clearly: the other four live in the definitions" is the shape. Colons over em dashes always (em-dash separators are banned repo-wide); colons over dramatic one-word paragraph drops.

4. **Short paragraphs, but not staccato.** LinkedIn: 1-3 sentences per paragraph. Substack: 3-5 sentences of connected reasoning (the narrative-paragraph rule). The one-sentence-per-line influencer cadence is banned everywhere; it reads as engagement engineering.

5. **One-clause concessions.** When granting the other side a point, the concession is a clause, not a paragraph: "The negotiating leverage is real. What I look at is who keeps it." Never "You raise an excellent point, and it's true that..."

6. **Questions are rare and load-bearing.** A question appears only as (a) the closing Call-to-Engage on a post, or (b) a genuinely curious question in a reply (reply move 4). Rhetorical questions mid-copy ("So what does this mean for your plan?") are a filler tell; cut them and state the answer.

## Layer 2 — Diction

1. **Plain verbs do the work.** decides, routes, keeps, signs, pays, reads, checks, moves. Not: leverages, utilizes, empowers, unlocks, navigates, delves, underscores, fosters.

2. **The metaphor family is plumbing and structure.** Money "moves," "routes," "flows through"; contracts have "doors," "layers," "walls," "plumbing"; problems are "structural." Never war metaphors (battle, fight, weapon, ammunition), never sports metaphors (playbook is grandfathered as a repo term but not in Ginny's published copy; no home runs, no game-changers), never journey metaphors (embark, roadmap in copy).

3. **Adjectives are rationed.** "Significant," "substantial," "meaningful" replace invented numbers (repo rule). Intensifiers are near-absent: no "incredibly," "absolutely," "truly," "really" as amplifiers. If a fact needs an intensifier, the fact is too weak; find a sharper fact.

4. **Industry terms get glossed in stride, once.** First use of a term of art carries a plain-English apposition ("a group purchasing organization, the entity that negotiates the rebate") and then the term is used naturally. Never a definition paragraph; never repeated glossing; never talking down ("in simple terms...").

5. **The banned-phrase list (consolidated from the Humanize Check + observed drift):** "Here's the thing," "The truth is," "Most people don't realize," "Let that sink in," "Read that again," "game-changer," "paradigm," "at the end of the day," "It's not X. It's Y." as a drama construction, "unpack," "dive in / deep dive" as a verb in copy (the product name "deep dive" is fine), "spoiler alert," "hot take," "pro tip."

6. **First person is specific, never performative.** "I started as a clinical pharmacist" / "We reviewed a contract last quarter" — first person attached to a fact or a scene. Never first person attached to emotion inflation ("I'm so excited to share," "I'm humbled to announce").

## Layer 3 — Argument moves (the signature constructions)

1. **Name the actor, name the mechanism, name who pays.** Every adversarial claim has three named parts: who did it (the PBM, the aggregator, the parent company), what the mechanism is (the definition, the routing rule, the fee layer), and who absorbs the cost (the plan, the member, the pharmacy). A claim missing one of the three reads as complaint, not analysis.

2. **The words-versus-money test.** Her most repeated analytical frame: the contract's words and the claims' money either agree or they don't. Variants: "the summary and the contract," "the promise and the reconciliation," "the label and the route." Reach for this frame before inventing a new one.

3. **The calm escalation.** The most damning sentence in a Ginny piece is delivered flat, without italics, exclamation, or "shockingly." The shock lives in the fact; the prose stays clinical. If a draft bolds or exclaims its biggest claim, it has inverted her signature.

4. **Both-things-are-true.** She holds two facts in tension rather than dismissing the counterparty: "Both things are true at once, and only one of them is disclosed." This is what keeps the adversarial voice credible instead of ranty.

5. **The reader leaves with an action, stated plainly.** Posts and articles end with something a plan sponsor can do (ask this question in writing, check this clause, know this date), phrased as a plain instruction, never as homework scolding ("you need to," "stop doing X") and never as a commercial CTA in the body.

6. **Opinion is announced as opinion.** "My view, stated plainly:" / "I would take that over almost any rule about pricing." She marks the boundary between what the contracts show and what she believes. This is a Potter-final rule that generalizes everywhere.

## Layer 4 — Numbers and evidence

1. **Numbers are exact or absent.** $469K, 132 reviews, 90 days, §5.03. Never rounded-for-impressiveness ("nearly half a million!"), never invented, never a statistic she cannot source. When no verified number exists: "significant," "substantial," "meaningful," or a structural claim with no number at all.

2. **One unfakeable detail per piece, minimum** (Humanize Check). A contract section, a dollar figure PBS has seen, a drug name, a scene moment. On proprietary anchors, pull from `proprietary_anchor_bank.md` with its no-repeat and guardrail rules ($78.7M is contracted; 25% is the RFP rate, never "average").

3. **Attribution is honest and graded.** "Publicly associated with," "per the company's own filings," "we see in our work" — the hedge matches the source quality. Never laundering an attributed claim into a flat fact (that is what `/verify-fact` exists to catch).

## Layer 5 — Register shifts by channel (the deltas that matter)

The full tone table lives in CLAUDE.md. What a drafting model most often gets wrong is the *delta* between channels:

| Moving from → to | What changes | What stays |
|---|---|---|
| LinkedIn post → Substack deep dive | Sentences connect into reasoning paragraphs; "I/we" scenes open; the confrontation is distributed through analysis instead of concentrated in a hook | The named actor, the exact numbers, the calm escalation |
| LinkedIn → X | Half the words, more teeth, no hashtag block (0-1 max), links in first reply | The anchor; the plain verbs |
| Post → comment/reply | Drops ALL performance: no hook, no CTA, no anchor-formula. Conversational, specific, one of the six reply moves (`ginny_voice_comments_replies.md`) | The specificity; the clinical calm |
| Professional → personal post | Specific anchors shift from contracts to life (years, places, names, counted houses); warmth allowed; locations may be named (personal posts ONLY) | Arrhythmic rhythm; no exclamation stacking; the craft bar |
| Anything → Potter piece | Teach generously, gloss for a general audience, no client homework, flat forward-pointing close (Rules 1-10 in `wendell_potter_editorial_style_analysis.md` govern) | Everything in Layers 1-4 |

## Layer 6 — The never list (consolidated)

- Em dashes or " - " as sentence separators (repo-wide)
- Invented statistics (repo-wide)
- Exclamation marks in professional copy; maximum one in personal posts
- Emoji in Ginny's copy (zero on LinkedIn/Substack/X posts and replies; the repo's operational docs may use them, her published voice does not)
- Bold or italics for dramatic emphasis mid-prose (italics are for titles and genuine emphasis, rarely; LinkedIn doesn't render markdown anyway)
- Engineered pull-quotes and parallel-punch runs (Potter Rule; generalizes)
- Stacked formulas (one structural formula per post, Humanize Check rule b)
- "Dr. Ginny Crisp" (PharmD makes Dr. redundant); "RXBS"; bare "PBS" in public copy
- Broker blame, however implicit (brokers are the allies who flag gaps; the PBM is the structural adversary)
- Validate-then-echo openers in replies (`ginny_voice_comments_replies.md`)
- Self-deprecation as a device ("I'm no expert, but") — she is the expert; false modesty reads as fishing

## The 60-second application protocol (for any model, any draft)

1. Load `ginny_voice_canon.md` and find the canon entry closest to the format being drafted. Match its shape before writing.
2. Draft with Layer 3's moves: named actor + mechanism + who pays; words-versus-money frame; calm escalation.
3. Sweep against Layer 6 (mechanical: search for em dashes, exclamations, banned phrases, emoji).
4. Read the draft's sentence lengths. If rhythmic, break the pattern (Layer 1.2).
5. Verify one unfakeable detail exists and every number is sourced (Layer 4).
6. Run the channel delta check (Layer 5) — is this LinkedIn copy wearing Substack paragraphs, or a reply wearing a hook?
7. Run `/voice-check` on the result. Fix what it flags. Ship.
