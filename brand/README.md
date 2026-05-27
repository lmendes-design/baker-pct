# Brand

Canonical brand assets and guidelines. Treat this folder as the **single source of truth** — every exported logo, color, or font used in the landing page or iOS app should trace back to a file here.

**Start here:** [`guidelines.md`](./guidelines.md) — Baker Percentage brand guidelines (current).
**History:** [`CHANGELOG.md`](./CHANGELOG.md) — version-to-version diffs.

## Suggested structure

```
brand/
├── logo/              # SVG masters, PNG exports at common sizes
├── fonts/             # Licensed font files + license docs
├── colors/            # Palette (Figma export, tokens.json, etc.)
├── guidelines/        # Brand book (PDF or markdown), do/don'ts
└── exports/           # Generated assets for specific surfaces (landing, app icon, social)
```

Fill this out as the rebrand progresses. Don't edit assets copied into `apps/landing/public/` or the iOS repo — change the master here, then re-export.
