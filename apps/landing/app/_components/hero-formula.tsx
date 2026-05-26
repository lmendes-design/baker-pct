"use client";

/**
 * Hero 01 — FORMULA
 *
 * Aesthetic: editorial / Swiss / asymmetric. The recipe is the artifact;
 * the marketing copy lives in the negative space around it.
 *
 * Signature move: the headline "Recipes in percentages." runs VERTICALLY up
 * the right edge of the page, set in massive Fraunces — the spine of a
 * printed cookbook. The recipe content fills the rest of the canvas, packed
 * dense against the left edge.
 *
 * CTA is a quiet underlined text link in the bottom-left. No button.
 */
export default function HeroFormula() {
  return (
    <section className="relative min-h-dvh grid grid-cols-[1fr_auto] gap-8 px-8 md:px-12 lg:px-16 pt-8 md:pt-10 pb-28 md:pb-32">
      {/* ─── LEFT: the recipe artifact ─────────────────────────────── */}
      <article className="flex flex-col min-w-0 max-w-[clamp(36rem,75vw,68rem)]">
        {/* Folio top bar */}
        <header className="flex items-baseline justify-between border-b border-char/15 pb-3">
          <span
            className="font-display text-2xl leading-none"
            aria-label="Baker Percentage"
          >
            %
          </span>
          <p className="font-mono text-flour" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Vol. 01 · Form. 04 · Pub. 12 May 2026 · By Lucas M.
          </p>
        </header>

        {/* Title — set with a typographic conceit: "Pan de" small label
            above "CAMPO" oversized */}
        <div className="mt-12 md:mt-16 lg:mt-20 rise">
          <p className="font-display italic text-flour text-2xl md:text-3xl tracking-tight mb-2">
            Pan&nbsp;de
          </p>
          <h1
            className="font-display font-light text-char tracking-[-0.04em] leading-[0.85]"
            style={{ fontSize: "var(--step-h1)" }}
          >
            Campo.
          </h1>
        </div>

        {/* Three signature numbers — aligned, dense, no boxes */}
        <dl className="mt-12 grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 font-mono max-w-[36rem]">
          <SpecRow label="Hydration"   value="75%"   highlight />
          <SpecRow label="Total flour" value="1000g" />
          <SpecRow label="Salt"        value="2.0%"  />
        </dl>

        {/* Ingredients table — uses a 3-col grid with hairline rows */}
        <section className="mt-14">
          <header className="flex items-baseline justify-between border-b border-char/20 pb-2">
            <h2 className="font-mono text-char" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}>
              i. Ingredients
            </h2>
            <span className="font-mono text-flour" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
              5 items
            </span>
          </header>
          <ul className="font-mono text-[15px] mt-2">
            <Ingredient name="Bread flour"             pct="85%"  grams="850g" />
            <Ingredient name="Whole wheat"             pct="15%"  grams="150g" />
            <Ingredient name="Water"                   pct="75%"  grams="750g" />
            <Ingredient name="Levain (100% hydration)" pct="20%"  grams="200g" />
            <Ingredient name="Salt"                    pct="2.0%" grams="20g"  />
          </ul>
        </section>

        {/* Stages */}
        <section className="mt-12">
          <header className="flex items-baseline justify-between border-b border-char/20 pb-2">
            <h2 className="font-mono text-char" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}>
              ii. Stages
            </h2>
            <span className="font-mono text-flour" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
              17h 5min total
            </span>
          </header>
          <ul className="font-mono text-[15px] mt-2">
            <Stage name="Autolyse"      duration="60min" detail="" />
            <Stage name="Bulk ferment"  duration="4h"    detail="26°C" />
            <Stage name="Pre-shape"     duration="20min" detail="" />
            <Stage name="Final shape"   duration="—"     detail="" />
            <Stage name="Cold retard"   duration="12h"   detail="4°C" />
            <Stage name="Bake"          duration="45min" detail="250° → 230°C" />
          </ul>
        </section>

        {/* CTA — a typographic moment, not a button */}
        <footer className="mt-20 mb-4 flex items-end justify-between gap-8">
          <a
            href="#app-store"
            className="group inline-flex items-baseline gap-3 font-mono text-char hover:text-ember transition-colors"
            style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            <span className="border-b border-char/40 group-hover:border-ember pb-0.5 transition-colors">
              Download · iPhone only
            </span>
            <span className="text-flour group-hover:text-ember transition-all group-hover:translate-x-1">
              ↗
            </span>
          </a>
          <p className="font-display italic text-flour text-base max-w-xs text-right hidden md:block">
            Every recipe in Baker&nbsp;Percentage looks like&nbsp;this.
          </p>
        </footer>
      </article>

      {/* ─── RIGHT: the spine ──────────────────────────────────────── */}
      <aside className="relative flex items-stretch" aria-hidden="true">
        {/* Vertical headline */}
        <h2
          className="font-display font-light text-char tracking-[-0.04em] leading-[0.8] whitespace-nowrap select-none"
          style={{
            writingMode: "vertical-rl",
            fontSize: "var(--step-mega)",
            transform: "rotate(180deg)",
          }}
        >
          Recipes in percentages.
        </h2>
      </aside>
    </section>
  );
}

/* ─── primitives ─────────────────────────────────────────────── */

function SpecRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <>
      <dt className="text-flour self-baseline" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}>
        {label}
      </dt>
      <dd className={`text-3xl tabular-nums self-baseline ${highlight ? "text-ember" : "text-char"}`}>
        {value}
      </dd>
    </>
  );
}

function Ingredient({
  name,
  pct,
  grams,
}: {
  name: string;
  pct: string;
  grams: string;
}) {
  return (
    <li className="grid grid-cols-[1fr_5rem_5rem] py-2.5 border-b border-char/8 last:border-b-0">
      <span className="font-sans text-char">{name}</span>
      <span className="tabular-nums text-char text-right">{pct}</span>
      <span className="tabular-nums text-flour text-right">{grams}</span>
    </li>
  );
}

function Stage({
  name,
  duration,
  detail,
}: {
  name: string;
  duration: string;
  detail: string;
}) {
  return (
    <li className="grid grid-cols-[1fr_5rem_8rem] py-2.5 border-b border-char/8 last:border-b-0 items-baseline">
      <span className="font-sans text-char">{name}</span>
      <span className="tabular-nums text-char text-right">{duration}</span>
      <span className="tabular-nums text-flour text-right">{detail}</span>
    </li>
  );
}
