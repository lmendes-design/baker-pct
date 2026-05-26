"use client";

export type HeroId = "formula" | "hydration" | "bake";

const items: { id: HeroId; n: string; label: string }[] = [
  { id: "formula", n: "01", label: "Formula" },
  { id: "hydration", n: "02", label: "Hydration" },
  { id: "bake", n: "03", label: "Bake" },
];

/**
 * Bottom-center floating switcher. Moved off the corner so it doesn't fight
 * any hero's own corner composition. Styled as a thin pill that reads like a
 * preview tool, not a real nav.
 */
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
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center font-mono uppercase select-none backdrop-blur-sm bg-crumb/80 border border-flour/30 rounded-full px-2 py-1.5 shadow-[0_1px_0_rgba(110,102,92,0.08)]"
      style={{ fontSize: "11px", letterSpacing: "0.16em" }}
    >
      <span className="text-flour/70 px-3">Preview</span>
      <ul className="flex items-center">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onChange(item.id)}
                aria-pressed={isActive}
                className={`px-3 py-1.5 rounded-full transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-crumb bg-char"
                    : "text-flour hover:text-char"
                }`}
              >
                <span className="opacity-60 mr-1.5">{item.n}</span>
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
