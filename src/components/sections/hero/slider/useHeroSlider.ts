"use client";

import { useCallback, useEffect, useState } from "react";

interface UseHeroSliderOptions {
  totalSlides: number;
  autoPlay?: boolean;
  interval?: number;
}

export function useHeroSlider({
  totalSlides,
  autoPlay = true,
  interval = 6000,
}: UseHeroSliderOptions) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, nextSlide]);

  return {
    currentSlide,
    nextSlide,
    previousSlide,
    goToSlide,
  };
}