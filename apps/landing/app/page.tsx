"use client";

import { useState } from "react";
import HeroSwitcher, { type HeroId } from "./_components/hero-switcher";
import HeroFormula from "./_components/hero-formula";
import HeroHydration from "./_components/hero-hydration";
import HeroBake from "./_components/hero-bake";

export default function Home() {
  const [active, setActive] = useState<HeroId>("formula");

  return (
    <main>
      {active === "formula" && <HeroFormula />}
      {active === "hydration" && <HeroHydration />}
      {active === "bake" && <HeroBake />}
      <HeroSwitcher active={active} onChange={setActive} />
    </main>
  );
}
