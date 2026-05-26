"use client";

/**
 * Hero direction 03 — Manifesto.
 *
 * The book-cover / typographic-poster hero. A single declarative statement set
 * very large in Fraunces, surrounded by mono numbers in the margins like the
 * marginalia of a baker's notebook. The most editorial of the three.
 *
 * Risk: lowest demonstration of the product. Strongest position on philosophy.
 * Works if the visitor is sold on the idea before they're sold on the screen.
 */

// Marginalia — small mono fragments scattered around the headline.
const marginalia = [
  { text: "75%", top: "12%", left: "8%" },
  { text: "1000g", top: "18%", right: "10%" },
  { text: "2.0%", top: "70%", left: "12%" },
  { text: "12h @ 4°C", top: "80%", right: "8%" },
  { text: "4h @ 26°C", top: "56%", left: "4%" },
  { text: "20%", top: "62%", right: "14%" },
  { text: "250°C → 230°C", top: "24%", right: "4%" },
  { text: "60min", top: "76%", left: "6%" },
] as const;

export default function HeroManifesto() {
  return (
    <section className="min-h-screen relative px-8 py-10 overflow-hidden">
      {/* Top bar */}
      <header className="flex items-center justify-between">
        <span className="font-display text-2xl leading-none">%</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-flour mr-[280px]">
          Baker Percentage · A founding text
        </span>
      </header>

      {/* Marginalia layer */}
      <div className="absolute inset-0 pointer-events-none">
        {marginalia.map((m, i) => (
          <span
            key={i}
            className="absolute font-mono text-flour/50 text-sm tabular-nums tracking-wider"
            style={{
              top: m.top,
              left: "left" in m ? m.left : undefined,
              right: "right" in m ? m.right : undefined,
            }}
          >
            {m.text}
          </span>
        ))}
      </div>

      {/* Centerpiece */}
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-flour mb-10">
          Manifesto · No. 01
        </p>

        <h1 className="font-display text-[clamp(5rem,14vw,11rem)] leading-[0.9] tracking-tight">
          Bread is{" "}
          <span className="italic font-light text-ember">math.</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-flour mt-12 max-w-2xl leading-relaxed text-balance">
          Every bakery in the world writes its recipes the same way: flour is
          100%, and every other ingredient is a percentage of that flour.
          It&apos;s the most useful piece of notation in any kitchen. Most
          baking apps don&apos;t use it.{" "}
          <span className="text-char">We do.</span>
        </p>

        <div className="mt-16 flex flex-col items-center gap-6">
          <a
            href="#app-store"
            className="font-mono text-xs uppercase tracking-[0.16em] border border-char px-7 py-4 hover:bg-char hover:text-crumb transition-colors duration-200"
          >
            Get it on the App Store →
          </a>
          <p className="font-display text-2xl italic font-light text-char">
            Recipes in percentages.
          </p>
        </div>
      </div>

      {/* Footer label */}
      <footer className="absolute bottom-8 left-0 right-0 flex justify-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-flour">
          Hero 03 · Manifesto — the idea before the artifact
        </p>
      </footer>
    </section>
  );
}
