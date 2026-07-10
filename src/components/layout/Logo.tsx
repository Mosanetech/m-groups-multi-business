import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      <div
        className="
          flex h-11 w-11
          items-center justify-center
          rounded-xl
          bg-primary
          text-lg
          font-bold
          text-primary-foreground
          shadow-md
          transition-transform
          duration-300
          group-hover:rotate-3
        "
      >
        MG
      </div>

      <div className="hidden sm:block">
        <h2 className="text-lg font-bold leading-none">
          M Groups
        </h2>

        <p className="text-xs text-muted-foreground">
          Building Better Communities
        </p>
      </div>
    </Link>
  );
}