"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ServiceSlide } from "@/config/hero-slides";

interface HeroSlideProps {
  slide: ServiceSlide;
}

export default function HeroSlide({ slide }: HeroSlideProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slide.id}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-full w-full overflow-hidden rounded-3xl"
      >
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 z-10 w-full p-8 text-white">

          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{ backgroundColor: slide.color }}
          >
            {slide.title}
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mt-4 text-3xl font-bold"
          >
            {slide.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .35 }}
            className="mt-3 text-white/90"
          >
            {slide.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-6"
          >
            <Link
              href={slide.href}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:gap-3"
            >
              {slide.buttonText}
              <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}