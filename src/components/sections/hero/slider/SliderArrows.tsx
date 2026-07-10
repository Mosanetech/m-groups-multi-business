"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderArrowsProps {
  onNext: () => void;
  onPrevious: () => void;
}

export default function SliderArrows({
  onNext,
  onPrevious,
}: SliderArrowsProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-5 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/70"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-5 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/70"
      >
        <ChevronRight size={20} />
      </button>
    </>
  );
}