

import HeroContent from "./HeroContent";
import HeroSlider from "./slider/HeroSlider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="container relative mx-auto">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <HeroContent />

          <HeroSlider />

        </div>

      </div>

    </section>
  );
}