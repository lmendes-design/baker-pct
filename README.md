# baker-pct

Working repo for the project. Three pieces live across two repositories:

| Piece            | Location                              | Stack                                              |
| ---------------- | ------------------------------------- | -------------------------------------------------- |
| Landing page     | `apps/landing/` (this repo)           | Next.js 16, TypeScript, Tailwind v4, Motion, GSAP, Lenis |
| Brand assets     | `brand/` (this repo)                  | Logo files, fonts, color tokens, guidelines        |
| iOS app          | separate repo — see `ios/README.md`   | (to be documented)                                 |

This repo is a **pnpm workspace**. The landing page is the only app today, but more web apps can be added under `apps/*` without restructuring.

## Quick start

```sh
pnpm install        # once, after cloning
pnpm dev            # run the landing page (http://localhost:3000)
pnpm build          # production build
pnpm lint           # run ESLint
```

## Repo layout

```
baker-pct/
├── apps/
│   └── landing/     # Next.js landing page
├── brand/           # Logo, fonts, palette, guidelines, exports
├── docs/            # Brief, strategy, references, decisions
├── ios/             # Pointer + shared notes for the iOS app repo
├── pnpm-workspace.yaml
├── package.json     # workspace root
└── README.md
```

## Keeping things up to date

- **Code & docs**: all in this repo. Commit and push.
- **Brand assets**: keep the canonical files in `brand/`. Export specific assets into `apps/landing/public/` and the iOS repo as needed — never edit the exported copies.
- **iOS app**: lives in its own repo. Document its location and how brand assets flow into it in `ios/README.md`.

## Adding a new web app later

1. `cd apps && <scaffold the new app>`
2. `pnpm install` from the repo root
3. Add a script alias to the root `package.json` if useful (e.g. `"dev:foo": "pnpm --filter foo dev"`)
