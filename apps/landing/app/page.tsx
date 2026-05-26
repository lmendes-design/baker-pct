"use client";

import { useState } from "react";
import HeroSwitcher, { type HeroId } from "./_components/hero-switcher";
import HeroCalculator from "./_components/hero-calculator";
import HeroRecipe from "./_components/hero-recipe";
import HeroManifesto from "./_components/hero-manifesto";

export default function Home() {
  const [active, setActive] = useState<HeroId>("calculator");

  return (
    <main className="relative min-h-screen">
      <HeroSwitcher active={active} onChange={setActive} />
      {active === "calculator" && <HeroCalculator />}
      {active === "recipe" && <HeroRecipe />}
      {active === "manifesto" && <HeroManifesto />}
    </main>
  );
}
