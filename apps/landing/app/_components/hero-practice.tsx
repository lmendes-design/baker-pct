"use client";

import BreadPhoto from "./bread-photo";

/**
 * Hero 03 — PRACTICE (lead with the long arc).
 *
 * The page shows the SAME formula across multiple bakes over time, arranged
 * as a horizontal sequence. Each card is a compact bake page: number, date,
 * key condition, mini crumb thumbnail, one handwritten note. The trajectory
 * is implicit — the bread becomes specifically yours.
 *
 * The final card is empty: "Bake № 32 — yours, when you start." The CTA
 * lives inside the absence.
 *
 * This direction tests whether the v0.2 promise ("better bread next month
 * than this month") can be the hero argument all on its own.
 */

type Bake = {
  no: string;
  date: string;
  condition: string;
  note: string;
};

const bakes: Bake[] = [
  { no: "01", date: "Mar 02", condition: "73% hyd", note: "First try. Gummy crumb. Too wet for this flour." },
  { no: "07", date: "Mar 28", condition: "72% hyd", note: "Better spring. Pulled bulk earlier." },
  { no: "18", date: "Apr 15", condition: "+15% WW",  note: "Added whole wheat. More flavor. Tightened up." },
  { no: "27", date: "Apr 30", condition: "Spelt 20%", note: "Spelt blend. Open crumb. Slightly under-baked." },
  { no: "31", date: "May 12", condition: "75% hyd", note: "Best ear so far. The cold retard did it." },
];

export default function HeroPractice() {
  return (
    <section className="relative min-h-dvh bg-crumb px-10 lg:px-16 pt-10 pb-32 flex flex-col">
      {/* Top bar */}
      <header className="flex items-baseline justify-between border-b border-char/15 pb-3 mb-14">
        <div className="flex items-baseline gap-5">
          <span className="font-display text-2xl leading-none" aria-label="Baker Percentage">
            %
          </span>
          <p
            className="font-mono text-flour"
            style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            Notebook · Pan de Campo
          </p>
        </div>
        <p
          className="font-mono text-flour"
          style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          31 bakes · Mar 02 → May 12, 2026
        </p>
      </header>

      {/* Title block */}
      <div className="formula-rise max-w-5xl">
        <p
          className="font-mono text-flour mb-4"
          style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase" }}
        >
          Same formula, ten weeks
        </p>
        <h1
          className="font-display font-light text-char tracking-[-0.03em] leading-[0.9]"
          style={{ fontSize: "var(--step-h1)" }}
        >
          Bread becomes
          <br />
          <span className="italic text-ember">specifically</span> yours.
        </h1>
        <p className="mt-6 max-w-xl text-char text-[15px] leading-relaxed">
          Every bake is a page in your notebook. Conditions, notes, what you&apos;d
          change. The math is the floor;{" "}
          <span className="text-flour">your hands write the rest.</span>
        </p>
      </div>

      {/* Timeline */}
      <ol
        className="mt-16 grid grid-cols-6 gap-4 lg:gap-5 items-stretch"
        aria-label="Selected bakes from this formula"
      >
        {bakes.map((bake, i) => (
          <li
            key={bake.no}
            className="bake-rise"
            style={{ animationDelay: `${180 + i * 100}ms` }}
          >
            <BakeCard bake={bake} />
          </li>
        ))}
        {/* The empty sixth slot — CTA lives inside the absence */}
        <li
          className="bake-rise"
          style={{ animationDelay: `${180 + bakes.length * 100}ms` }}
        >
          <PendingCard />
        </li>
      </ol>

      {/* Closing tagline */}
      <footer className="mt-auto pt-14 border-t border-char/15 flex flex-wrap items-baseline justify-between gap-6">
        <p
          className="font-display italic text-char tracking-tight"
          style={{ fontSize: "clamp(1.5rem, 1.2rem + 0.8vw, 2.25rem)" }}
        >
          Recipes in percentages. Bakes in your kitchen.
        </p>
        <a
          href="#app-store"
          className="group inline-flex items-baseline gap-3 font-mono text-char hover:text-ember transition-colors"
          style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          <span className="border-b border-char/40 group-hover:border-ember pb-0.5 transition-colors">
            Start your notebook
          </span>
          <span className="text-flour group-hover:text-ember transition-all group-hover:translate-x-1">↗</span>
        </a>
      </footer>
    </section>
  );
}

/* ─── pieces ───────────────────────────────────────────────── */

function BakeCard({ bake }: { bake: Bake }) {
  return (
    <article className="surface-linen h-full p-5 flex flex-col gap-3 border border-flour/20">
      {/* Bake number */}
      <header className="flex items-baseline justify-between">
        <span
          className="font-mono text-flour"
          style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          Bake №
        </span>
        <span
          className="font-mono text-flour"
          style={{ fontSize: "10px", letterSpacing: "0.18em" }}
        >
          {bake.date}
        </span>
      </header>
      <p
        className="font-mono tabular-nums text-char leading-none"
        style={{ fontSize: "clamp(2rem, 1.5rem + 1.5vw, 2.75rem)" }}
      >
        {bake.no}
      </p>

      {/* Mini bread photo */}
      <div className="mt-2">
        <BreadPhoto variant="boule" className="block w-full max-w-[120px]" />
      </div>

      {/* Conditions one-line */}
      <p
        className="font-mono text-char mt-1"
        style={{ fontSize: "10px", letterSpacing: "0.12em" }}
      >
        {bake.condition}
      </p>

      {/* Handwritten note */}
      <p
        className="text-char mt-1 flex-1"
        style={{
          fontFamily: "var(--font-hand)",
          fontSize: "16px",
          lineHeight: 1.35,
        }}
      >
        {bake.note}
      </p>
    </article>
  );
}

function PendingCard() {
  return (
    <article className="h-full p-5 flex flex-col gap-3 border border-dashed border-flour/40 bg-crumb">
      <header className="flex items-baseline justify-between">
        <span
          className="font-mono text-flour"
          style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          Bake №
        </span>
        <span
          className="font-mono text-ember"
          style={{ fontSize: "10px", letterSpacing: "0.18em" }}
        >
          pending
        </span>
      </header>
      <p
        className="font-mono tabular-nums text-ember leading-none"
        style={{ fontSize: "clamp(2rem, 1.5rem + 1.5vw, 2.75rem)" }}
      >
        32
      </p>

      {/* Empty space where the bread photo would go */}
      <div className="mt-2 aspect-square w-full max-w-[120px] border border-dashed border-flour/30" />

      <p
        className="text-char mt-2 flex-1"
        style={{
          fontFamily: "var(--font-hand)",
          fontSize: "17px",
          lineHeight: 1.35,
        }}
      >
        Yours, when you start.
      </p>

      <a
        href="#app-store"
        className="group inline-flex items-baseline gap-2 font-mono text-char hover:text-ember transition-colors mt-1"
        style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" }}
      >
        <span className="border-b border-char/40 group-hover:border-ember pb-0.5 transition-colors">
          Begin
        </span>
        <span className="text-flour group-hover:text-ember transition-all group-hover:translate-x-1">↗</span>
      </a>
    </article>
  );
}
