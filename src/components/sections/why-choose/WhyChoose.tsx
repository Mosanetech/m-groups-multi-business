import {
  ShieldCheck,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Trusted Brand",
    description:
      "Professional services delivered with transparency and integrity.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Experts in real estate, ICT, finance and education.",
  },
  {
    icon: Briefcase,
    title: "One Ecosystem",
    description:
      "Access multiple professional services from one trusted company.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We combine technology with business to solve real-world problems.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24">

      <div className="container mx-auto">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Why Businesses Choose M Groups
          </h2>

          <p className="mt-6 text-lg text-foreground/80">
            We bring together multiple professional services under one
            trusted brand, making it easier for individuals and businesses
            to succeed.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}