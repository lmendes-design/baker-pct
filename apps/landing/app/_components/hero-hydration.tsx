"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero 02 — HYDRATION
 *
 * Aesthetic: warm analog / tactile / industrial.
 *
 * Signature move: a custom rotational dial — like an oven thermostat or
 * vintage hi-fi knob. 55% → 95% range. Pointer-drag to rotate. Auto-animates
 * 55 → 75 on mount. The active arc and indicator dot in Ember; the rest of
 * the dial in Flour. Ingredient totals below react to the dial in real time.
 *
 * Nothing else in the food-app category looks like this.
 */

const MIN = 55;
const MAX = 95;
const ARC_START_DEG = -135; // bottom-left
const ARC_END_DEG = 135; // bottom-right
const ARC_SWEEP = ARC_END_DEG - ARC_START_DEG; // 270°

function pctToAngle(pct: number) {
  return ARC_START_DEG + ((pct - MIN) / (MAX - MIN)) * ARC_SWEEP;
}

function angleToPct(angleDeg: number) {
  if (angleDeg < ARC_START_DEG) return MIN;
  if (angleDeg > ARC_END_DEG) return MAX;
  return MIN + ((angleDeg - ARC_START_DEG) / ARC_SWEEP) * (MAX - MIN);
}

/** Angle convention: 0° = top, +clockwise. */
function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

function arcPath(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number,
) {
  const s = polar(cx, cy, r, startDeg);
  const e = polar(cx, cy, r, endDeg);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

export default function HeroHydration() {
  const [hydration, setHydration] = useState(MIN);
  const [dragging, setDragging] = useState(false);
  const userTouched = useRef(false);
  const dialRef = useRef<SVGSVGElement | null>(null);

  // Auto-animate 55 → 75 on mount
  useEffect(() => {
    if (userTouched.current) return;
    let raf = 0;
    let start: number | null = null;
    const from = MIN;
    const to = 75;
    const duration = 1800;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4); // ease-out quart
      if (!userTouched.current) setHydration(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Drag handlers
  const updateFromPointer = (e: React.PointerEvent<SVGSVGElement>) => {
    const svg = dialRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    // atan2(dy, dx) → 0 right, +clockwise (HTML y-axis). Shift so 0 = top.
    let angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    if (angle > 180) angle -= 360;
    setHydration(angleToPct(angle));
  };

  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (e.button !== 0) return;
    userTouched.current = true;
    setDragging(true);
    dialRef.current?.setPointerCapture(e.pointerId);
    updateFromPointer(e);
  };

  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!dragging) return;
    updateFromPointer(e);
  };

  const onPointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    setDragging(false);
    dialRef.current?.releasePointerCapture(e.pointerId);
  };

  // Derived recipe values
  const intHyd = Math.round(hydration);
  const flour = 1000;
  const water = Math.round(flour * (hydration / 100));
  const salt = Math.round(flour * 0.02);
  const levain = Math.round(flour * 0.2);
  const currentAngle = pctToAngle(hydration);
  const dotPos = polar(200, 200, 152, currentAngle);

  return (
    <section className="relative min-h-dvh px-8 md:px-12 lg:px-16 pt-8 md:pt-10 pb-28 md:pb-32 flex flex-col">
      {/* Top bar */}
      <header className="flex items-baseline justify-between border-b border-char/15 pb-3">
        <span className="font-display text-2xl leading-none" aria-label="Baker Percentage">%</span>
        <p
          className="font-mono text-flour"
          style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
          A baker&apos;s percentage, in your hand.
        </p>
      </header>

      {/* Dial + label */}
      <div className="flex-1 grid place-items-center pt-6">
        <div className="relative w-[min(72vmin,640px)]">
          {/* Faint outer hairline ring suggests a knob bezel */}
          <div
            aria-hidden
            className="absolute inset-[-1.5rem] rounded-full border border-char/10"
          />
          <div
            aria-hidden
            className="absolute inset-[-2.75rem] rounded-full border border-char/5"
          />

          <svg
            ref={dialRef}
            viewBox="0 0 400 400"
            className={`w-full select-none touch-none ${
              dragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            role="slider"
            aria-label="Hydration"
            aria-valuemin={MIN}
            aria-valuemax={MAX}
            aria-valuenow={intHyd}
            tabIndex={0}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
                userTouched.current = true;
                setHydration((h) => Math.max(MIN, h - 1));
              }
              if (e.key === "ArrowRight" || e.key === "ArrowUp") {
                userTouched.current = true;
                setHydration((h) => Math.min(MAX, h + 1));
              }
            }}
          >
            {/* Track ring */}
            <path
              d={arcPath(200, 200, 152, ARC_START_DEG, ARC_END_DEG)}
              fill="none"
              stroke="var(--color-char)"
              strokeOpacity="0.12"
              strokeWidth="1"
            />

            {/* Tick marks every 1% */}
            {Array.from({ length: MAX - MIN + 1 }).map((_, i) => {
              const pct = MIN + i;
              const major = pct % 5 === 0;
              const angle = pctToAngle(pct);
              const inner = polar(200, 200, 152, angle);
              const outer = polar(200, 200, major ? 138 : 146, angle);
              const isPast = pct <= intHyd;
              return (
                <line
                  key={pct}
                  x1={inner.x}
                  y1={inner.y}
                  x2={outer.x}
                  y2={outer.y}
                  stroke={isPast ? "var(--color-ember)" : "var(--color-char)"}
                  strokeOpacity={isPast ? (major ? 0.9 : 0.55) : (major ? 0.45 : 0.18)}
                  strokeWidth={major ? 1.5 : 1}
                  strokeLinecap="butt"
                />
              );
            })}

            {/* Major number labels — 55, 65, 75, 85, 95 */}
            {[55, 65, 75, 85, 95].map((pct) => {
              const angle = pctToAngle(pct);
              const p = polar(200, 200, 122, angle);
              return (
                <text
                  key={pct}
                  x={p.x}
                  y={p.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontFamily="var(--font-mono)"
                  fontSize="11"
                  fill="var(--color-flour)"
                  style={{ letterSpacing: "0.08em" }}
                >
                  {pct}
                </text>
              );
            })}

            {/* Active arc on top of tick layer for crispness */}
            <path
              d={arcPath(200, 200, 152, ARC_START_DEG, currentAngle)}
              fill="none"
              stroke="var(--color-ember)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Indicator dot */}
            <circle
              cx={dotPos.x}
              cy={dotPos.y}
              r={dragging ? 9 : 7}
              fill="var(--color-ember)"
              style={{ transition: "r 200ms cubic-bezier(0.22, 1, 0.36, 1)" }}
            />

            {/* Center: huge value + label */}
            <text
              x="200"
              y="195"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="var(--font-display)"
              fontWeight="300"
              fontSize="110"
              fill="var(--color-char)"
              style={{ letterSpacing: "-0.04em" }}
            >
              {intHyd}
            </text>
            <text
              x="200"
              y="260"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="var(--font-display)"
              fontStyle="italic"
              fontSize="20"
              fill="var(--color-flour)"
            >
              percent hydration
            </text>
          </svg>
        </div>
      </div>

      {/* Reactive ingredient line */}
      <section
        className="mt-6 font-mono text-flour mx-auto max-w-3xl w-full grid grid-cols-4 gap-6 text-center"
        aria-live="polite"
      >
        <ReactiveCell label="Bread flour" value="850g" />
        <ReactiveCell label="Water" value={`${water}g`} live />
        <ReactiveCell label="Levain" value={`${levain}g`} />
        <ReactiveCell label="Salt" value={`${salt}g`} />
      </section>

      {/* Footer — tagline + CTA on one line */}
      <footer className="mt-10 mb-4 flex flex-wrap items-baseline justify-between gap-6 border-t border-char/15 pt-6">
        <p className="font-display italic text-char text-2xl md:text-3xl tracking-tight">
          Recipes in percentages.
        </p>
        <a
          href="#app-store"
          className="group inline-flex items-baseline gap-3 font-mono text-char hover:text-ember transition-colors"
          style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          <span className="border-b border-char/40 group-hover:border-ember pb-0.5 transition-colors">
            Open in App Store
          </span>
          <span className="text-flour group-hover:text-ember transition-all group-hover:translate-x-1">↗</span>
        </a>
      </footer>
    </section>
  );
}

function ReactiveCell({
  label,
  value,
  live = false,
}: {
  label: string;
  value: string;
  live?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span
        style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
      >
        {label}
      </span>
      <span className={`text-2xl tabular-nums ${live ? "text-ember" : "text-char"}`}>
        {value}
      </span>
    </div>
  );
}
