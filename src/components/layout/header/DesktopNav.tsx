"use client";

import NavLinks from "./NavLinks";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex">
      <div
        className="
          flex
          items-center
          gap-8
          rounded-full
          border
          border-border/60
          bg-background/60
          px-8
          py-3
          backdrop-blur-xl
          backdrop-saturate-150
        "
      >
        <NavLinks />
      </div>
    </nav>
  );
}