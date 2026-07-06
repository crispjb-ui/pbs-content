# The Contract Decoder — v1 build spec (Q1 2027 build, execution-ready)

**What it is:** an interactive page at `rxbs.org/decoder`: paste a clause from your PBM contract, get the plain-English translation and the protective language to ask for. The Contract Language Library, turned from a document into a tool. Nothing like it exists publicly in this niche.

## v1 scope (deliberately no AI, no backend risk)

**A clause-matcher over the Library's existing weak/strong pairs.** The Library already contains, per provision: the vague "what you might see" language, the plain-English meaning, and the protective ask. v1 maps a pasted clause to the right provision family via keyword/phrase heuristics and shows that family's decode. Honest fallback when no match: "This clause doesn't match a pattern in our library yet. Paste it into the request-a-call form and a pharmacist will read it." (The MISSES are leads with intent, and each miss grows the Library.)

## Build (Wix/Velo, mirrors existing patterns)

1. **Data:** convert the Library's provisions into a `DecoderProvisions` CMS collection: `family`, `match_terms` (weighted keyword sets: e.g., rebate family matches "rebate, manufacturer payment, aggregator, pass-through, administrative fee from manufacturer"), `what_it_says`, `what_it_means`, `what_to_ask_for`, `library_anchor_url`. Claude generates the collection rows from `substack_contract_language_library.md` in one session.
2. **Page:** textarea + "Decode it" button → Velo scores match_terms against the pasted text → renders top match (and "also similar" second match) with the three-part decode + a link deeper into the Library page. No clause text is stored in v1 (say so on the page: "we do not save what you paste"); count only family-match frequency (anonymous event) to learn demand.
3. **Conversion layer:** under every result: the matched toolkit's link + "want a pharmacist to read the whole section?" → request-a-call form with `?topic=contract-review`, clause pre-context NOT passed (privacy posture stays clean).
4. **Disclaimer (fixed, bottom):** *"Educational translation of common contract patterns, not legal advice, and not a review of your specific agreement."*

## Why v1 wins even being simple

The magic is the *decode quality* (already written by PBS over months), not the matching tech. AEO: the page targets "what does [clause] mean in a PBM contract" queries and earns links no PDF can. Upgrade path (v2, only if v1 demand shows): LLM-assisted matching via a backend call, same UI, same privacy posture, gated on a fresh decision.

**Effort:** ~2 Claude sessions (data conversion + Velo code) + Brett's page build + QA against 20 real clause samples (analysts supply from public-records corpus, which conveniently exists by then). **Ship gate:** the 20-clause test decodes ≥14 correctly to family; below that, tune match_terms before launch.
