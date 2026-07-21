import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({
  className,
}: LogoProps) {
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
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-black
          text-lg
          font-bold
          text-white
          shadow-md
        "
      >
        MG
      </div>

      <div className="hidden sm:block">
        <h2 className="text-lg font-bold">
          M Groups
        </h2>

        <p className="text-xs text-foreground/80">
          Building Better Communities
        </p>
      </div>
    </Link>
  );
}