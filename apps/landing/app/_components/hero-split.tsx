"use client";

import BreadPhoto from "./bread-photo";

/**
 * Hero 01 — SPLIT (the canonical v0.2 §4.5 hero).
 *
 * Two registers shown side by side. Crumb (Formula) left, Linen (Bake) right,
 * Flour hairline running full-height between them. The brand argument is
 * compositional: we are both halves at once.
 *
 * Tagline splits across the divide at the bottom: "Recipes in percentages."
 * on Crumb, "Bakes in your kitchen." on Linen — the line drawn through the
 * brand.
 */
export default function HeroSplit() {
  return (
    <section className="relative min-h-dvh grid grid-cols-[60fr_40fr]">
      {/* ─── LEFT: Crumb / Formula register ─────────────────────────── */}
      <article className="relative bg-crumb px-10 lg:px-14 pt-10 pb-36 flex flex-col">
        {/* Top bar */}
        <header className="flex items-baseline justify-between border-b border-char/15 pb-3 mb-12">
          <span className="font-display text-2xl leading-none" aria-label="Baker Percentage">
            %
          </span>
          <p
            className="font-mono text-flour"
            style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            Formula · Vol. 01 · Form. 04
          </p>
        </header>

        {/* Title */}
        <div className="formula-rise">
          <p className="font-display italic text-flour text-xl tracking-tight mb-2">
            Pan&nbsp;de
          </p>
          <h1
            className="font-display font-light text-char tracking-[-0.04em] leading-[0.85]"
            style={{ fontSize: "var(--step-h2)" }}
          >
            Campo.
          </h1>
        </div>

        {/* Three signature numbers — aligned, dense */}
        <dl className="mt-10 grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 font-mono max-w-md">
          <SpecRow label="Hydration"   value="75%"   highlight />
          <SpecRow label="Total flour" value="1000g" />
          <SpecRow label="Salt"        value="2.0%"  />
        </dl>

        {/* Ingredients */}
        <section className="mt-12">
          <header className="flex items-baseline justify-between border-b border-char/20 pb-2">
            <h2
              className="font-mono text-char"
              style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              i. Ingredients
            </h2>
            <span
              className="font-mono text-flour"
              style={{ fontSize: "10px", letterSpacing: "0.18em" }}
            >
              5 items
            </span>
          </header>
          <ul className="font-mono text-[14px] mt-2">
            <Ingredient name="Bread flour"             pct="85%"  grams="850g" />
            <Ingredient name="Whole wheat"             pct="15%"  grams="150g" />
            <Ingredient name="Water"                   pct="75%"  grams="750g" />
            <Ingredient name="Levain (100% hydration)" pct="20%"  grams="200g" />
            <Ingredient name="Salt"                    pct="2.0%" grams="20g"  />
          </ul>
        </section>

        {/* Stages */}
        <section className="mt-10">
          <header className="flex items-baseline justify-between border-b border-char/20 pb-2">
            <h2
              className="font-mono text-char"
              style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              ii. Stages
            </h2>
            <span
              className="font-mono text-flour"
              style={{ fontSize: "10px", letterSpacing: "0.18em" }}
            >
              17h 5min
            </span>
          </header>
          <ul className="font-mono text-[14px] mt-2">
            <Stage name="Autolyse"      duration="60min" detail="" />
            <Stage name="Bulk ferment"  duration="4h"    detail="26°C" />
            <Stage name="Pre-shape"     duration="20min" detail="" />
            <Stage name="Final shape"   duration="—"     detail="" />
            <Stage name="Cold retard"   duration="12h"   detail="4°C" />
            <Stage name="Bake"          duration="45min" detail="250° → 230°C" />
          </ul>
        </section>
      </article>

      {/* ─── Vertical hairline ─────────────────────────────────────── */}
      <div className="absolute top-10 bottom-32 left-[60%] w-px bg-flour/30 -translate-x-px" aria-hidden />

      {/* ─── RIGHT: Linen / Bake register ──────────────────────────── */}
      <aside className="surface-linen relative px-10 lg:px-12 pt-10 pb-36 flex flex-col">
        {/* Top bar */}
        <header className="flex items-baseline justify-between border-b border-char/15 pb-3 mb-12">
          <p
            className="font-mono text-flour"
            style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            Notebook · Bake № 31
          </p>
          <p
            className="font-mono text-flour"
            style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            12 May 2026
          </p>
        </header>

        {/* Handwritten title */}
        <div className="bake-rise" style={{ animationDelay: "120ms" }}>
          <h2
            className="text-char leading-[0.95]"
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: "clamp(2.5rem, 1.5rem + 3.5vw, 4rem)",
              fontWeight: 500,
            }}
          >
            Sunday morning.
          </h2>
        </div>

        {/* Brief intro paragraph */}
        <p className="mt-6 text-flour text-[15px] leading-relaxed max-w-md bake-rise" style={{ animationDelay: "200ms" }}>
          Same formula. Different kitchen, different week. Felt tight at fold 3
          &mdash; pulled bulk early.
        </p>

        {/* Conditions */}
        <dl className="mt-10 grid grid-cols-3 gap-3 font-mono max-w-md bake-rise" style={{ animationDelay: "280ms" }}>
          <Stamp label="Kitchen" value="24.3°C" />
          <Stamp label="Humidity" value="58%" />
          <Stamp label="Total" value="17h 12m" />
        </dl>

        {/* Stage notes (mono with margin annotation) */}
        <section className="mt-10 max-w-md bake-rise" style={{ animationDelay: "360ms" }}>
          <h3
            className="font-mono text-char mb-2"
            style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            From the log
          </h3>
          <ul className="font-mono text-[13px] space-y-1.5">
            <LogLine time="07:30" text="Mixed. Salt last." />
            <LogLine time="08:30" text="Fold 1 — supple." />
            <LogLine time="09:30" text="Fold 2 — slight slack." />
            <LogLine
              time="10:30"
              text="Fold 3 — felt tight."
              margin="kitchen warmer than expected"
            />
            <LogLine time="11:15" text="Pulled bulk." />
          </ul>
        </section>

        {/* Polaroid drop */}
        <div className="mt-10 bake-rise" style={{ animationDelay: "440ms" }}>
          <figure
            className="polaroid inline-block"
            style={{ transform: "rotate(-2.2deg)", width: 200 }}
          >
            <BreadPhoto variant="boule" className="block w-full" />
            <figcaption
              className="mt-3 text-flour"
              style={{
                fontFamily: "var(--font-hand)",
                fontSize: "17px",
              }}
            >
              attempt 04 &mdash; best ear yet
            </figcaption>
          </figure>
        </div>

        {/* Closing handwritten margin note */}
        <p
          className="mt-8 text-char max-w-sm bake-rise"
          style={{
            fontFamily: "var(--font-hand)",
            fontSize: "20px",
            lineHeight: 1.4,
            animationDelay: "520ms",
          }}
        >
          Next time: shape firmer, retard a touch longer.
        </p>
      </aside>

      {/* ─── BOTTOM: tagline + CTA, split across the divide ─────────── */}
      <footer className="absolute bottom-0 left-0 right-0 grid grid-cols-[60fr_40fr] border-t border-flour/30">
        <div className="bg-crumb px-10 lg:px-14 py-7">
          <p
            className="font-display text-char tracking-tight italic"
            style={{ fontSize: "clamp(1.5rem, 1.2rem + 0.8vw, 2rem)" }}
          >
            Recipes in percentages.
          </p>
        </div>
        <div className="surface-linen px-10 lg:px-12 py-7 flex items-center justify-between gap-6">
          <p
            className="font-display text-char tracking-tight italic"
            style={{ fontSize: "clamp(1.5rem, 1.2rem + 0.8vw, 2rem)" }}
          >
            Bakes in your kitchen.
          </p>
          <a
            href="#app-store"
            className="group inline-flex items-baseline gap-3 font-mono text-char hover:text-ember transition-colors whitespace-nowrap"
            style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            <span className="border-b border-char/40 group-hover:border-ember pb-0.5 transition-colors">
              Download · iPhone
            </span>
            <span className="text-flour group-hover:text-ember transition-all group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </footer>
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
      <dt
        className="text-flour self-baseline"
        style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
      >
        {label}
      </dt>
      <dd
        className={`text-2xl tabular-nums self-baseline ${highlight ? "text-ember" : "text-char"}`}
      >
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
    <li className="grid grid-cols-[1fr_4rem_4rem] py-2 border-b border-char/8 last:border-b-0">
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
    <li className="grid grid-cols-[1fr_4rem_7rem] py-2 border-b border-char/8 last:border-b-0 items-baseline">
      <span className="font-sans text-char">{name}</span>
      <span className="tabular-nums text-char text-right">{duration}</span>
      <span className="tabular-nums text-flour text-right">{detail}</span>
    </li>
  );
}

function Stamp({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt
        className="text-flour"
        style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" }}
      >
        {label}
      </dt>
      <dd className="text-char text-lg tabular-nums">{value}</dd>
    </div>
  );
}

function LogLine({
  time,
  text,
  margin,
}: {
  time: string;
  text: string;
  margin?: string;
}) {
  return (
    <li className="grid grid-cols-[3.5rem_1fr] gap-3 items-baseline">
      <span className="text-flour tabular-nums">{time}</span>
      <span className="text-char">
        {text}
        {margin && (
          <span
            className="ml-3 text-flour"
            style={{ fontFamily: "var(--font-hand)", fontSize: "16px" }}
          >
            &mdash; {margin}
          </span>
        )}
      </span>
    </li>
  );
}
