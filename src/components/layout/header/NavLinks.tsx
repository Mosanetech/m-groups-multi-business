"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAVIGATION } from "@/config/navigation";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {NAVIGATION.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative py-2 text-sm font-medium transition-colors",
              active
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.title}

            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",
                active
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              )}
            />
          </Link>
        );
      })}
    </>
  );
}