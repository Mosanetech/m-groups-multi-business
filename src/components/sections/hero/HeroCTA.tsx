import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
      
      <Link
        href="/contact"
        className="
          inline-flex items-center justify-center
          rounded-xl
          bg-primary
          px-6 py-3
          text-sm font-medium text-primary-foreground
          transition-all duration-300
          hover:scale-105 hover:shadow-lg
          active:scale-95
        "
      >
        Get Started
      </Link>

      <Link
        href="/properties"
        className="
          inline-flex items-center justify-center
          rounded-xl
          border border-border
          px-6 py-3
          text-sm font-medium
          transition-all duration-300
          hover:bg-muted
        "
      >
        View Properties
      </Link>

    </div>
  );
}