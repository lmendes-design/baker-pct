"use client";

/**
 * Hero direction 02 — Recipe Spec.
 *
 * The "the screen IS the brand" hero. We render a full recipe as the hero —
 * the way it would appear inside the app, but at hero scale — and put the
 * marketing copy in a slim right-hand column. The argument: the recipe screen
 * is so distinctive it does its own marketing.
 *
 * Risk: a visitor who doesn't already understand baker's percentages may
 * bounce. That's consistent with the audience choice (Confident Hobbyist).
 */
export default function HeroRecipe() {
  return (
    <section className="min-h-screen px-8 py-10 grid grid-cols-12 gap-8 max-w-[1400px] mx-auto">
      {/* Left column — the recipe (8 cols on desktop) */}
      <article className="col-span-12 md:col-span-8 flex flex-col mt-8">
        {/* Brand mark + recipe meta */}
        <header className="flex items-baseline justify-between border-b border-flour/30 pb-4">
          <span className="font-display text-2xl leading-none">%</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-flour">
            Formula · rev. 04 · Published 12 May 2026
          </span>
        </header>

        {/* Recipe title */}
        <div className="mt-10">
          <h1 className="font-display text-7xl tracking-tight leading-[0.95]">
            Pan de Campo
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-flour mt-4">
            By Lucas M. · 4 bakers following
          </p>
        </div>

        {/* Three signature numbers */}
        <dl className="mt-14 grid grid-cols-3 border-y border-flour/30 py-8">
          <Stat label="Hydration" value="75" suffix="%" emphasize />
          <Stat label="Total flour" value="1000" suffix="g" />
          <Stat label="Salt" value="2.0" suffix="%" />
        </dl>

        {/* Ingredients */}
        <section className="mt-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-flour mb-3">
            Ingredients
          </h2>
          <ul className="font-mono text-[15px] divide-y divide-flour/20">
            <Ingredient name="Bread flour" pct="85%" grams="850g" />
            <Ingredient name="Whole wheat" pct="15%" grams="150g" />
            <Ingredient name="Water" pct="75%" grams="750g" />
            <Ingredient name="Levain (100% hydration)" pct="20%" grams="200g" />
            <Ingredient name="Salt" pct="2.0%" grams="20g" />
          </ul>
        </section>

        {/* Stages */}
        <section className="mt-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-flour mb-3">
            Stages
          </h2>
          <ul className="font-mono text-[15px] divide-y divide-flour/20">
            <Stage name="Autolyse" duration="60min" detail="—" />
            <Stage name="Bulk ferment" duration="4h" detail="@ 26°C" />
            <Stage name="Pre-shape" duration="20min" detail="—" />
            <Stage name="Final shape" duration="—" detail="—" />
            <Stage name="Cold retard" duration="12h" detail="@ 4°C" />
            <Stage name="Bake" duration="45min" detail="@ 250°C → 230°C" />
          </ul>
        </section>
      </article>

      {/* Right column — marketing (4 cols on desktop) */}
      <aside className="col-span-12 md:col-span-4 flex flex-col justify-between mt-8 md:pl-8 md:border-l md:border-flour/30 md:sticky md:top-10 md:self-start">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-flour">
            What every recipe looks like
          </p>
          <h2 className="font-display text-4xl mt-6 leading-[1.05]">
            Recipes in percentages.
          </h2>
          <p className="font-sans text-base text-flour mt-6 leading-relaxed max-w-xs">
            The iPhone app for home bakers who write their own — in the same
            precise language professional bakeries use.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 items-start">
          <a
            href="#app-store"
            className="font-mono text-xs uppercase tracking-[0.16em] border border-char px-6 py-4 hover:bg-char hover:text-crumb transition-colors duration-200"
          >
            Get it on the App Store →
          </a>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-flour mt-8">
            Hero 02 · Recipe — the artifact is the marketing
          </p>
        </div>
      </aside>
    </section>
  );
}

function Stat({
  label,
  value,
  suffix,
  emphasize = false,
}: {
  label: string;
  value: string;
  suffix: string;
  emphasize?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-flour">
        {label}
      </dt>
      <dd className="flex items-baseline gap-1">
        <span
          className={`font-mono text-5xl tabular-nums ${
            emphasize ? "text-ember" : "text-char"
          }`}
        >
          {value}
        </span>
        <span
          className={`font-mono text-2xl ${
            emphasize ? "text-ember" : "text-flour"
          }`}
        >
          {suffix}
        </span>
      </dd>
    </div>
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
    <li className="grid grid-cols-[1fr_80px_80px] py-3 items-baseline">
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
    <li className="grid grid-cols-[1fr_80px_140px] py-3 items-baseline">
      <span className="font-sans text-char">{name}</span>
      <span className="tabular-nums text-char text-right">{duration}</span>
      <span className="tabular-nums text-flour text-right">{detail}</span>
    </li>
  );
}
