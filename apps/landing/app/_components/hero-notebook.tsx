"use client";

import BreadPhoto from "./bread-photo";

/**
 * Hero 02 — NOTEBOOK (lead with the warm register).
 *
 * The hero IS a single bake page on Linen. The formula reference is tucked
 * tiny at the top — the bake leads. Stage log in mono runs down the left;
 * a polaroid drop and a longer note sit on the right; handwritten marginalia
 * threads through. The CTA is integrated as a handwritten margin note in
 * the gutter at the bottom.
 *
 * The brand argument: this is the kind of notebook Baker Percentage keeps.
 */
export default function HeroNotebook() {
  return (
    <section className="surface-linen relative min-h-dvh px-10 lg:px-16 pt-10 pb-32">
      {/* Top bar */}
      <header className="flex items-baseline justify-between border-b border-char/15 pb-3 mb-16">
        <div className="flex items-baseline gap-5">
          <span className="font-display text-2xl leading-none" aria-label="Baker Percentage">
            %
          </span>
          <p
            className="font-mono text-flour"
            style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            Notebook · Bake № 31 · attached to Pan de Campo, rev. 04
          </p>
        </div>
        <p
          className="font-mono text-flour"
          style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          Sunday · 12 May 2026
        </p>
      </header>

      {/* Hero title — full handwritten moment */}
      <div className="bake-rise max-w-5xl">
        <p
          className="font-mono text-flour mb-4"
          style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase" }}
        >
          From the notebook
        </p>
        <h1
          className="text-char leading-[0.92] tracking-tight"
          style={{
            fontFamily: "var(--font-hand)",
            fontSize: "clamp(4rem, 2rem + 8vw, 9rem)",
            fontWeight: 500,
          }}
        >
          Sunday morning.
        </h1>
        <p
          className="mt-6 max-w-2xl font-display italic text-char tracking-tight"
          style={{ fontSize: "clamp(1.25rem, 1rem + 0.8vw, 1.65rem)", lineHeight: 1.35 }}
        >
          Same formula as last week. Kitchen was warmer; the dough was
          honest about it.
        </p>
      </div>

      {/* Two-column body — stage log left, polaroid + note right */}
      <div className="mt-16 grid grid-cols-12 gap-10 lg:gap-16 max-w-7xl">
        {/* Left — stage log */}
        <section className="col-span-12 md:col-span-7 bake-rise" style={{ animationDelay: "180ms" }}>
          <header className="flex items-baseline justify-between border-b border-char/20 pb-2 mb-3">
            <h2
              className="font-mono text-char"
              style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              Stage log
            </h2>
            <span
              className="font-mono text-flour"
              style={{ fontSize: "10px", letterSpacing: "0.18em" }}
            >
              17h 12m total
            </span>
          </header>

          {/* Conditions strip */}
          <dl className="grid grid-cols-3 gap-4 mb-8 max-w-md">
            <Stamp label="Kitchen"  value="24.3°C" />
            <Stamp label="Humidity" value="58%" />
            <Stamp label="Flour age" value="11 days" />
          </dl>

          {/* The log itself */}
          <ul className="font-mono text-[14px] space-y-2 max-w-2xl">
            <LogRow time="06:00" stage="Autolyse"     dur="60min" />
            <LogRow time="07:00" stage="Mix"          dur="—"      margin="salt last, mixed by hand 4 min" />
            <LogRow time="07:30" stage="Bulk begin"   dur="—" />
            <LogRow time="08:30" stage="Fold 1"       dur="—"      margin="supple, easy" />
            <LogRow time="09:30" stage="Fold 2"       dur="—" />
            <LogRow time="10:30" stage="Fold 3"       dur="—"      margin="felt tight — kitchen warmer than expected" />
            <LogRow time="11:15" stage="Pulled bulk"  dur="3h 45m" margin="early by 15" />
            <LogRow time="11:35" stage="Pre-shape"    dur="20min" />
            <LogRow time="12:00" stage="Cold retard"  dur="14h"    margin="fridge ran 3°C, longer" />
            <LogRow time="08:15" stage="Bake (next morning)" dur="45min" />
          </ul>
        </section>

        {/* Right — polaroid + closing note + CTA */}
        <aside className="col-span-12 md:col-span-5 flex flex-col gap-12 bake-rise" style={{ animationDelay: "320ms" }}>
          {/* Polaroid */}
          <figure
            className="polaroid self-start"
            style={{ transform: "rotate(2.4deg)", width: 248 }}
          >
            <BreadPhoto variant="boule" className="block w-full" />
            <figcaption
              className="mt-3 text-flour"
              style={{
                fontFamily: "var(--font-hand)",
                fontSize: "18px",
              }}
            >
              best ear so far &mdash; the cold retard did it
            </figcaption>
          </figure>

          {/* Free-form notes — Geist Sans, warm tone */}
          <div>
            <h3
              className="font-mono text-char mb-3"
              style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              Notes
            </h3>
            <p className="font-sans text-char text-[15px] leading-relaxed max-w-md">
              Crumb opened up more than last week &mdash; bigger holes near the
              top, denser at the base. The 75% was right for this flour; might
              try 77% next time and shape firmer to compensate. Crust split
              clean on one ear, missed the other.{" "}
              <span className="text-flour">
                Eaten with butter, salted, before noon.
              </span>
            </p>
          </div>

          {/* CTA as handwritten margin note */}
          <div className="relative mt-4">
            <p
              className="text-char max-w-sm"
              style={{
                fontFamily: "var(--font-hand)",
                fontSize: "22px",
                lineHeight: 1.4,
              }}
            >
              This is the kind of notebook Baker Percentage keeps.
            </p>
            <a
              href="#app-store"
              className="group mt-5 inline-flex items-baseline gap-3 font-mono text-char hover:text-ember transition-colors"
              style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              <span className="border-b border-char/40 group-hover:border-ember pb-0.5 transition-colors">
                Start your own
              </span>
              <span className="text-flour group-hover:text-ember transition-all group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ─── primitives ─────────────────────────────────────────────── */

function Stamp({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt
        className="text-flour"
        style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" }}
      >
        {label}
      </dt>
      <dd className="text-char text-lg tabular-nums font-mono">{value}</dd>
    </div>
  );
}

function LogRow({
  time,
  stage,
  dur,
  margin,
}: {
  time: string;
  stage: string;
  dur: string;
  margin?: string;
}) {
  return (
    <li className="grid grid-cols-[3.5rem_1fr_4rem] gap-4 items-baseline border-b border-char/8 pb-2">
      <span className="text-flour tabular-nums">{time}</span>
      <span className="text-char">
        {stage}
        {margin && (
          <span
            className="ml-3 text-flour"
            style={{ fontFamily: "var(--font-hand)", fontSize: "17px" }}
          >
            &mdash; {margin}
          </span>
        )}
      </span>
      <span className="text-flour text-right tabular-nums">{dur}</span>
    </li>
  );
}
