"use client";

import { useEffect, useState } from "react";

/**
 * Hero 03 — BAKE
 *
 * Aesthetic: code brutalism / monospace / live data.
 *
 * Signature move: the marketing page IS the product. A unified, time-ordered
 * log of your bake-in-progress and the community's activity (other bakers'
 * formulas, critiques). A pulsing "live" rule separates past from present.
 * The CTA is the next entry in the log: "[NOW] Begin your first formula".
 *
 * Demonstrates three brand pillars (authoring, timing, community) on a single
 * surface without explaining them.
 */

type Entry = {
  time: string;
  actor: string;
  kind: "self" | "community";
  text: string;
};

const past: Entry[] = [
  { time: "04:18", actor: "you",   kind: "self",      text: "Refreshed levain — 1 : 2 : 2." },
  { time: "06:00", actor: "you",   kind: "self",      text: "Autolyse — 1000g flour @ 75% hydration." },
  { time: "06:42", actor: "Sasha", kind: "community", text: "Published — Spelt country @ 78%, rev. 03." },
  { time: "07:00", actor: "you",   kind: "self",      text: "Added levain (20%) and salt (2.0%). Mixed by hand 4 min." },
  { time: "07:30", actor: "you",   kind: "self",      text: "Stretch and fold № 1." },
  { time: "08:00", actor: "Mira",  kind: "community", text: "Critiqued your rev. 03 — “Bulk feels short for 22°C ambient.”" },
  { time: "08:30", actor: "you",   kind: "self",      text: "Stretch and fold № 2." },
  { time: "09:00", actor: "you",   kind: "self",      text: "Stretch and fold № 3. Dough holds shape." },
];

export default function HeroBake() {
  const [now, setNow] = useState("—:—");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setNow(
        `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`,
      );
    };
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="min-h-dvh px-8 md:px-12 lg:px-16 pt-8 md:pt-10 pb-28 md:pb-32 flex flex-col">
      {/* ── Top bar ────────────────────────────────────────────── */}
      <header className="flex items-baseline justify-between border-b border-char/15 pb-3">
        <div className="flex items-baseline gap-4">
          <span className="font-display text-2xl leading-none" aria-label="Baker Percentage">%</span>
          <span
            className="font-mono text-flour"
            style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            Baker Percentage · Bake log
          </span>
        </div>
        <span
          className="font-mono text-flour tabular-nums"
          style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          Local time {now}
        </span>
      </header>

      {/* ── Current bake card — flush left, no box ─────────────── */}
      <div className="mt-12 grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-7">
          <p
            className="font-mono text-flour mb-3"
            style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            Now baking · Stage 04 / 09
          </p>
          <h1
            className="font-display font-light text-char tracking-[-0.03em] leading-[0.9]"
            style={{ fontSize: "var(--step-h1)" }}
          >
            Bulk ferment,
            <br />
            <span className="text-flour italic">2h&nbsp;47min</span> in.
          </h1>
        </div>
        <div className="col-span-12 md:col-span-5 flex flex-col gap-3">
          <Spec label="Formula"    value="Pan de Campo, rev. 04" mono={false} />
          <Spec label="Hydration"  value="75%" />
          <Spec label="Ambient"    value="24.3 °C" />
          <Spec label="Ends"       value="11:00 → cold retard" />
        </div>
      </div>

      {/* ── The log ───────────────────────────────────────────── */}
      <ol
        className="mt-14 font-mono tabular-nums max-w-4xl w-full mx-auto md:mx-0"
        style={{ fontSize: "14px" }}
      >
        {past.map((e, i) => (
          <LogLine key={i} entry={e} />
        ))}

        {/* Live divider — pulsing dot, hairlines on both sides */}
        <li className="my-10 flex items-center gap-4" aria-label="Live">
          <span className="h-px flex-1 bg-char/15" />
          <span className="flex items-center gap-2.5">
            <LivePulse />
            <span
              className="text-ember"
              style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase" }}
            >
              Live · {now}
            </span>
          </span>
          <span className="h-px flex-1 bg-char/15" />
        </li>

        {/* Editorial paragraph — disguised as a log "note" */}
        <li className="grid grid-cols-[5rem_1fr] gap-6 mb-10">
          <span
            className="text-flour"
            style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            note
          </span>
          <p className="font-sans text-char text-balance" style={{ fontSize: "var(--step-lead)", lineHeight: 1.55 }}>
            Every bake is a record. Times, temperatures, hydrations.{" "}
            <span className="text-flour">Yours, and the bakers you follow.</span>
          </p>
        </li>

        {/* CTA as the next log entry */}
        <li className="grid grid-cols-[5rem_5rem_1fr] gap-6 items-baseline">
          <span className="text-ember" style={{ letterSpacing: "0.04em" }}>[NOW]</span>
          <span className="text-char">you</span>
          <a
            href="#app-store"
            className="group inline-flex items-baseline gap-3 text-char hover:text-ember transition-colors"
          >
            <span className="border-b border-char/40 group-hover:border-ember pb-0.5 transition-colors">
              Begin your first formula
            </span>
            <span
              className="text-flour group-hover:text-ember transition-all group-hover:translate-x-1"
              style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              → App Store
            </span>
          </a>
        </li>
      </ol>

    </section>
  );
}

/* ─── pieces ───────────────────────────────────────────────── */

function LogLine({ entry }: { entry: Entry }) {
  const isCommunity = entry.kind === "community";
  return (
    <li className="grid grid-cols-[5rem_5rem_1fr] gap-6 py-1.5 items-baseline">
      <span className="text-flour">{entry.time}</span>
      <span className={isCommunity ? "text-ember" : "text-char"}>
        {entry.actor}
        {isCommunity ? " →" : ""}
      </span>
      <span className={isCommunity ? "text-char" : "text-flour"}>
        {entry.text}
      </span>
    </li>
  );
}

function Spec({
  label,
  value,
  mono = true,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-4 items-baseline border-b border-char/10 pb-2">
      <span
        className="font-mono text-flour"
        style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
      >
        {label}
      </span>
      <span className={`${mono ? "font-mono tabular-nums" : "font-sans"} text-char text-base`}>
        {value}
      </span>
    </div>
  );
}

function LivePulse() {
  return (
    <span className="relative inline-flex items-center justify-center w-2 h-2">
      <span className="absolute inset-0 rounded-full bg-ember ember-ping" />
      <span className="relative w-2 h-2 rounded-full bg-ember" />
    </span>
  );
}
