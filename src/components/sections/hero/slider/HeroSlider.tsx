"use client";

import { SERVICES } from "@/config/hero-slides";

import HeroSlide from "./HeroSlide";
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";

import { useHeroSlider } from "./useHeroSlider";

export default function HeroSlider() {
  const {
    currentSlide,
    nextSlide,
    previousSlide,
    goToSlide,
  } = useHeroSlider({
    totalSlides: SERVICES.length,
  });

  return (
    <div className="relative h-[620px] w-full">

      <HeroSlide slide={SERVICES[currentSlide]} />

      

      <SliderArrows
        onNext={nextSlide}
        onPrevious={previousSlide}
      />

      <SliderDots
        total={SERVICES.length}
        active={currentSlide}
        onSelect={goToSlide}
      />

    </div>
  );
}