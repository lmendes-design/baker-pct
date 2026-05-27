"use client";

import { useState } from "react";
import HeroSwitcher, { type HeroId } from "./_components/hero-switcher";
import HeroSplit from "./_components/hero-split";
import HeroNotebook from "./_components/hero-notebook";
import HeroPractice from "./_components/hero-practice";

export default function Home() {
  const [active, setActive] = useState<HeroId>("split");

  return (
    <main>
      {active === "split" && <HeroSplit />}
      {active === "notebook" && <HeroNotebook />}
      {active === "practice" && <HeroPractice />}
      <HeroSwitcher active={active} onChange={setActive} />
    </main>
  );
}
