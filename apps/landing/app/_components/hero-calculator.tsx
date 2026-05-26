"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero direction 01 — Calculator.
 *
 * The brand's "show, don't tell" hero. The page itself acts as a tiny baker's-
 * percentage calculator: the hydration value animates on mount from 60% → 75%,
 * the water gram cell recomputes live, and the user can drag the slider to
 * see the math respond.
 *
 * Why this direction works: it demonstrates the entire product premise in
 * three seconds. You don't read about the math — you watch it.
 */
export default function HeroCalculator() {
  const [hydration, setHydration] = useState(60);
  const userTouched = useRef(false);

  // Auto-animate the hydration on mount: 60% → 75%, ease-out cubic, 1500ms.
  useEffect(() => {
    if (userTouched.current) return;
    let raf = 0;
    let start: number | null = null;
    const from = 60;
    const to = 75;
    const duration = 1500;

    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = from + (to - from) * eased;
      if (!userTouched.current) setHydration(value);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const totalFlour = 1000;
  const hydrationDisplay = Math.round(hydration);
  const water = Math.round(totalFlour * (hydration / 100));
  const salt = Math.round(totalFlour * 0.02);
  const levain = Math.round(totalFlour * 0.2);

  return (
    <section className="min-h-screen px-8 py-10 flex flex-col">
      {/* Top bar — brand mark left, recipe eyebrow right of the switcher area */}
      <header className="flex items-center justify-between">
        <span
          className="font-display text-2xl leading-none"
          aria-label="Baker Percentage"
        >
          %
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-flour mr-[280px]">
          Country Loaf · 1000g flour · rev. 04
        </span>
      </header>

      {/* Centerpiece */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
        {/* The big number */}
        <div className="flex flex-col items-center">
          <span className="font-mono text-flour text-[11px] uppercase tracking-[0.14em] mb-6">
            Drag to set hydration
          </span>
          <div className="flex items-start leading-none">
            <span className="font-mono text-[clamp(8rem,18vw,14rem)] tabular-nums">
              {hydrationDisplay}
            </span>
            <span className="font-mono text-[clamp(4rem,9vw,7rem)] text-ember mt-2 ml-2">
              %
            </span>
          </div>
          <span className="font-display text-5xl mt-2 italic font-light">
            Hydration.
          </span>
        </div>

        {/* Slider */}
        <div className="w-full max-w-md mt-12 mb-16">
          <input
            type="range"
            min={55}
            max={95}
            step={1}
            value={hydrationDisplay}
            onChange={(e) => {
              userTouched.current = true;
              setHydration(Number(e.target.value));
            }}
            className="brand-range w-full"
            aria-label="Hydration percentage"
          />
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-wider text-flour mt-2">
            <span>55%</span>
            <span>75%</span>
            <span>95%</span>
          </div>
        </div>

        {/* Recipe table — three signature numbers, then ingredient grid */}
        <div className="w-full max-w-3xl border-t border-flour/30 pt-10">
          <dl className="grid grid-cols-3 gap-8">
            <Cell label="Total flour" value={`${totalFlour}g`} />
            <Cell label="Water" value={`${water}g`} live />
            <Cell label="Salt" value={`${salt}g`} />
          </dl>
        </div>

        {/* Ingredient list */}
        <ul className="w-full max-w-3xl mt-10 divide-y divide-flour/20 font-mono text-sm">
          <Row name="Bread flour" pct="85%" grams="850g" />
          <Row name="Whole wheat" pct="15%" grams="150g" />
          <Row name="Water" pct={`${hydrationDisplay}%`} grams={`${water}g`} live />
          <Row name="Levain" pct="20%" grams={`${levain}g`} />
          <Row name="Salt" pct="2.0%" grams={`${salt}g`} />
        </ul>
      </div>

      {/* Footer — tagline + CTA */}
      <footer className="flex flex-col items-center gap-8 mt-16">
        <h1 className="font-display text-5xl tracking-tight">
          Recipes in percentages.
        </h1>
        <a
          href="#app-store"
          className="font-mono text-xs uppercase tracking-[0.16em] border border-char px-7 py-4 hover:bg-char hover:text-crumb transition-colors duration-200"
        >
          Get it on the App Store →
        </a>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-flour mt-2">
          Hero 01 · Calculator — the math, alive on the page
        </p>
      </footer>
    </section>
  );
}

function Cell({
  label,
  value,
  live = false,
}: {
  label: string;
  value: string;
  live?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-flour">
        {label}
      </dt>
      <dd
        className={`font-mono text-3xl tabular-nums ${
          live ? "text-ember" : "text-char"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function Row({
  name,
  pct,
  grams,
  live = false,
}: {
  name: string;
  pct: string;
  grams: string;
  live?: boolean;
}) {
  return (
    <li className="grid grid-cols-3 py-3">
      <span className="font-sans text-char">{name}</span>
      <span className={`tabular-nums ${live ? "text-ember" : "text-char"}`}>
        {pct}
      </span>
      <span
        className={`tabular-nums text-right ${live ? "text-ember" : "text-flour"}`}
      >
        {grams}
      </span>
    </li>
  );
}
