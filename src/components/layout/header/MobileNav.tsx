"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAVIGATION } from "@/config/navigation";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function MobileNav({
  isOpen,
  closeMenu,
}: MobileNavProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "absolute left-0 top-full w-full border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
        isOpen
          ? "translate-y-0 scale-100 opacity-100"
          : "-translate-y-4 scale-95 opacity-0 pointer-events-none"
      )}
    >
      <nav className="flex flex-col">
        {NAVIGATION.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "border-b border-border/50 px-6 py-4 text-sm transition-colors",
                active
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}