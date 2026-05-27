/**
 * A stylized top-down view of a scored boule, used as a polaroid placeholder
 * in marketing layouts. NOT a real photo — the brand bans stock photography
 * and AI-generated bread. This is a brand-system illustration that occupies
 * the same compositional role a baker's actual crumb shot would occupy.
 *
 * Real bakes carry real user photos. This stands in for them.
 */
export default function BreadPhoto({
  variant = "boule",
  className = "",
}: {
  variant?: "boule" | "crumb";
  className?: string;
}) {
  if (variant === "crumb") {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        aria-label="Stylized bread crumb"
      >
        <rect width="200" height="200" fill="#d8c89e" />
        {/* irregular air pockets — pre-baked values for stable layout */}
        <ellipse cx="52" cy="48" rx="22" ry="18" fill="#f4ede0" />
        <ellipse cx="128" cy="38" rx="14" ry="11" fill="#f4ede0" />
        <ellipse cx="92" cy="92" rx="30" ry="22" fill="#f4ede0" />
        <ellipse cx="160" cy="82" rx="13" ry="16" fill="#f4ede0" />
        <ellipse cx="44" cy="138" rx="18" ry="14" fill="#f4ede0" />
        <ellipse cx="138" cy="148" rx="24" ry="17" fill="#f4ede0" />
        <ellipse cx="86" cy="168" rx="11" ry="9" fill="#f4ede0" />
        <ellipse cx="170" cy="170" rx="9" ry="11" fill="#f4ede0" />
        <ellipse cx="18" cy="80" rx="10" ry="14" fill="#f4ede0" />
        {/* crust at top */}
        <rect x="0" y="0" width="200" height="5" fill="#8a6940" />
      </svg>
    );
  }

  // boule — top-down scored loaf
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label="Stylized scored boule, top view">
      {/* under-shadow */}
      <ellipse cx="100" cy="172" rx="76" ry="6" fill="#1a1614" opacity="0.06" />
      {/* loaf */}
      <circle cx="100" cy="100" r="76" fill="#c8a572" />
      <circle cx="100" cy="100" r="76" fill="none" stroke="#8a6940" strokeWidth="1.5" opacity="0.5" />
      {/* crust highlights (lighter top-left, suggests light) */}
      <circle cx="80" cy="80" r="42" fill="#d8ba8a" opacity="0.7" />
      <circle cx="76" cy="74" r="22" fill="#e0c592" opacity="0.6" />
      {/* score marks — three diagonal slashes */}
      <path d="M 56 70 Q 100 56 144 76" stroke="#5e4528" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 56 104 Q 100 90 144 110" stroke="#5e4528" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 60 138 Q 100 124 142 142" stroke="#5e4528" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* tiny texture spots — flour or color variation */}
      <circle cx="118" cy="62" r="2" fill="#8a6940" opacity="0.5" />
      <circle cx="62" cy="115" r="2" fill="#8a6940" opacity="0.5" />
      <circle cx="135" cy="132" r="1.5" fill="#8a6940" opacity="0.5" />
      <circle cx="92" cy="158" r="1.5" fill="#8a6940" opacity="0.5" />
    </svg>
  );
}
