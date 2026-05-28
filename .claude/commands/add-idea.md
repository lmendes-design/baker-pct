---
description: Append a timestamped idea to docs/ideas.md (newest first).
---

The user wants to log an idea in `docs/ideas.md`.

User-provided text: $ARGUMENTS

## What to do

1. If `$ARGUMENTS` is empty or only whitespace, ask in **one short sentence** what idea to log. Don't preface, don't explain, don't list options. Wait for their reply, then continue with step 2.

2. Treat the user's text as the idea. The **first non-empty line** is the title; every line after that is the body. If they only gave a single line, there's no body — that's fine.

3. Insert the new entry **immediately after the `---` separator at the top of `docs/ideas.md`** (so newest entries are first, right under the intro). Use this format exactly:

   ```
   ## YYYY-MM-DD — <title>

   <body, if any — preserve their line breaks>

   ---
   ```

   Use today's date in ISO format (`YYYY-MM-DD`). The trailing `---` becomes the separator before the next-newest entry.

4. **Do not commit.** The user will commit when they want a batch of ideas together. If they later want to push or commit, they'll ask.

5. Reply in **one short line** confirming the idea was logged. Do not paraphrase the idea back. Do not summarize it. Do not suggest related ideas. Examples of good confirmations: `Logged.` · `Added to docs/ideas.md.` · `Down.`

The user wants their idea captured, not narrated. Resist the urge to be helpful past the point of being asked.
