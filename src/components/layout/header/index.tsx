"use client";

import { useEffect, useState } from "react";

import Container from "../Container";
import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import DesktopActions from "./DesktopActions";
import MobileNav from "./MobileNav";
import MobileMenuButton from "./MobileMenuButton";
import ThemeToggle from "./ThemeToggle";
import { useScrolled } from "./useScrolled";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrolled();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/65 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Left */}
          <Logo />

          {/* Center */}
          <DesktopNav />

          {/* Right */}
          <DesktopActions />

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <MobileMenuButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

        </div>
      </Container>

      <MobileNav
        isOpen={isOpen}
        closeMenu={() => setIsOpen(false)}
      />
    </header>
  );
}