"use client";

interface SliderDotsProps {
  total: number;
  active: number;
  onSelect: (index: number) => void;
}

export default function SliderDots({
  total,
  active,
  onSelect,
}: SliderDotsProps) {
  return (
    <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`h-3 rounded-full transition-all duration-300 ${
            active === index
              ? "w-8 bg-white"
              : "w-3 bg-white/40 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  );
}