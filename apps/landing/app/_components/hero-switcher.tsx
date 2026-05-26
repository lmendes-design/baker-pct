"use client";

export type HeroId = "calculator" | "recipe" | "manifesto";

const items: { id: HeroId; n: string; label: string }[] = [
  { id: "calculator", n: "01", label: "Calculator" },
  { id: "recipe", n: "02", label: "Recipe" },
  { id: "manifesto", n: "03", label: "Manifesto" },
];

export default function HeroSwitcher({
  active,
  onChange,
}: {
  active: HeroId;
  onChange: (id: HeroId) => void;
}) {
  return (
    <nav
      aria-label="Hero direction preview"
      className="fixed top-6 right-6 z-50 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] select-none"
    >
      <span className="text-flour">Preview</span>
      <span className="text-flour/40">·</span>
      <ul className="flex items-center gap-4">
        {items.map((item, i) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => onChange(item.id)}
                aria-pressed={isActive}
                className={`flex items-center gap-2 transition-colors duration-200 ${
                  isActive
                    ? "text-ember"
                    : "text-flour hover:text-char"
                }`}
              >
                <span>{item.n}</span>
                <span>{item.label}</span>
              </button>
              {i < items.length - 1 && (
                <span aria-hidden className="text-flour/40">
                  ·
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
