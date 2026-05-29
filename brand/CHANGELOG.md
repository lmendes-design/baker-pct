# Brand guidelines — changelog

## v1.2 — 2026-05-28

Removed the handwriting font as a brand element.

The reasoning: a handwriting face creates too much typographic contrast with the rest of the brand and is harder to read at body sizes. The Bake register can express its warmth without breaking type-system consistency — italic of the display serif does the personal-voice work that the handwriting font was doing, and the warmth comes from materiality, voice, motion, and layout, not from a separate typeface.

The brand now commits to **three typographic roles, one family per role**:

- A display serif with character — formal moments in regular weight, personal/diary moments in italic.
- A precise neo-grotesque sans — UI, body, navigation.
- A monospaced face — every quantity, exclusively.

No fourth role. The Bake register's warmth lives in older paper, polaroid photo drops, generous margins, kitchen-time motion, and the words the user writes — not in a different font.

Sections updated: §1.2 (registers table), §3.3 (type strategy), §3.4 (materiality), Appendix A (Risk 3).

---

## v1.1 — 2026-05-28

Structural revision focused on **concept over prescription**. The brand's strategic decisions are unchanged; the doc just stops telling itself how to execute them.

### Visual identity (Part 3) — reframed as concept

- Specific hex codes removed. The doc talks about "warm paper," "deep ink," "the hot accent" — not named colors with values. Contrast ratios moved out.
- Named typefaces removed. The doc talks about "a display serif with character," "a precise neo-grotesque sans," "a monospaced face for quantities," "a handwriting face for marginalia" — not specific font families.
- Type scale table removed.
- Construction specs removed (clear-space pixels, minimum sizes, lockup variants).

The principles stay; the implementation lives in the design system (tokens, font files, Figma) where it can be substituted without altering the brand.

### Application (Part 4) — removed entirely

App icon details, recipe surface layout, bake/notebook surface layout, timer treatment, landing page direction, social posts, don'ts gallery. These were design drawings, not brand commitments. They belong in the design system and in design files, not in a brand document.

### Operational (Part 5) — reduced

Kept: naming for features, file structure for brand assets.
Removed: recipe formatting standard, bake formatting standard, community ritual specifics, accessibility, versioning section.

The recipe and bake schemas live in product spec; accessibility lives in the design system and engineering standards; community ritual lives in product/community docs.

### Net effect

The doc is now about half its previous length. It reads as a brand argument, not an implementation manual. What the brand is and why — here. How to build it — downstream.

---

## v1.0 — 2026-05-28

Editorial pass. No content changes — every decision from v0.2 is preserved. The doc is rewritten as a single settled voice: the "v0.1 said X, v0.2 introduces Y" scaffolding is removed, inline `(NEW in v0.2)` tags are stripped, and Appendix C (the v0.1→v0.2 diff) is dropped. The brand stops describing its own version history inside the working document; the changelog (this file) is where that lives instead.

This is the working document going forward.

---

## v0.2 — 2026-05-26

The biggest revision since the founding document. Triggered by the insight that **bread is not a cake recipe** — cakes are deterministic, bread is responsive. v0.1 framed Baker Percentage as a precision-led brand ("the math is the recipe"); v0.2 recognizes precision is half the truth, and adds the other half.

### Strategic changes

- New one-line: positions the app as a **craft tool AND a diary**, not just a craft tool.
- Three new pillars (math, hand, kitchen) replacing the three v0.1 pillars (math-as-story, recipes-taken-seriously, time-held).
- New manifesto: "Bread is math. And then it's not."
- Promise shift: from "the math is the recipe" to "better bread, in your kitchen, over time."
- Audience refined: still Confident Hobbyists, now explicitly bakers "who already know the recipe isn't the bread."

### Verbal identity changes

- **Two registers** introduced: Formula (precise, inherited from v0.1) and Bake (warm, new). Both real, deployed at different moments.
- New tagline (recommended): "Recipes in percentages. Bakes in your kitchen."
- Expanded vocabulary: `bake`, `page`, `notebook`, `fork` enter the lexicon.
- New voice samples covering diary content, onboarding screen 2, marketing in the Bake register.

### Visual identity changes

- New color: **Linen** (`#ede3d2`) — Bake register paper stock. Slightly more aged and humid than Crumb.
- New feature font: **Caveat** — handwriting font for diary marginalia. Used sparingly. Never in marketing chrome.
- New **Materiality** section (§3.4) — two paper stocks, handwriting, weathered surfaces, polaroid photo drops. Primary vehicle of warmth in v0.2.
- **Motion rewritten** (§3.7) — two tempos. Formula keeps the snappy 250ms feel; Bake moves at "kitchen time" — 500–700ms with breath.

### Product / application changes

- New **Bake / notebook** surface (§4.3) — the diary feature. Linen canvas. Stage log, free-form notes, optional polaroid drops.
- Landing page direction revised to a **split-canvas hero**: Crumb (Formula) and Linen (Bake) side-by-side.
- Social formats expanded from 3 to 5 (added The Notebook Page and The Diptych).
- Timer surface slightly softened (1px Ember rule instead of 4px, slower pulse).

### New rules and prohibitions

- "Make professional bread at home" framing — banned.
- Lifestyle photography, AI-coach nag notifications, engagement-bait diary patterns — banned.
- The notebook does not nag. The feed is chronological. No "For You."

### What did NOT change

- The name: Baker Percentage.
- The audience: Confident Hobbyists.
- The recipe schema: identical to v0.1.
- The app icon: identical.
- The typography stack: Fraunces + Geist Sans + Geist Mono (Caveat is additive, feature-scope only).
- The five v0.1 brand colors (Crumb, Char, Rye, Flour, Starch, Ember).
- The contract: no ads, ever.

### Where v0.1 lives

Commit `2f44f7d` on `main`.

---

## v0.1 — 2026-05-26

Original founding draft. Precision-led brand. Single register ("the math is the recipe"). Single canvas (Crumb). Three pillars (math-as-story, recipes-taken-seriously, time-held).

Useful, but a half-truth. Superseded by v0.2 the same day, after a working session that surfaced the bread-is-not-a-cake-recipe insight.
