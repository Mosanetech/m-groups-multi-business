import Link from "next/link";
import HeroStats from "./HeroStats";

const stats = [
  {
    label: "Projects",
    value: "120+",
  },
  {
    label: "Clients",
    value: "80+",
  },
  {
    label: "Years",
    value: "10+",
  },
];

export default function HeroContent() {
  return (
    <div className="relative">

      <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
        Trusted Business Solutions
      </span>

      <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
        Building Better Communities Through Innovation
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
        M Groups provides professional Real Estate,
        ICT, Financial and Educational services through
        one trusted platform.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          href="/services"
          className="rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:scale-105"
        >
          Explore Services
        </Link>

        <Link
          href="/contact"
          className="rounded-full border border-border px-7 py-4 font-semibold transition hover:bg-muted"
        >
          Contact Us
        </Link>

      </div>

      <HeroStats stats={stats} />

    </div>
  );
}