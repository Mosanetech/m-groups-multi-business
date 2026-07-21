import Link from "next/link";

import HeroStats from "./HeroStats";
import { getSiteSettings } from "@/lib/site-settings";
import { prisma } from "@/lib/prisma";

export default async function HeroContent() {

  const settings =
    await getSiteSettings();

  const [
    projects,
    properties,
    testimonials,
  ] = await Promise.all([

    prisma.project.count(),

    prisma.property.count(),

    prisma.testimonial.count(),

  ]);

  const stats = [

    {
      label: "Projects",
      value: `${projects}+`,
    },

    {
      label: "Properties",
      value: `${properties}+`,
    },

    {
      label: "Clients",
      value: `${testimonials}+`,
    },

  ];

  return (

    <div className="relative">

      <span className="inline-flex rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">

        Trusted Business Solutions

      </span>

      <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">

        {settings.companyName}

      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/80">

        {settings.footerText}

      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          href="/services"
          className="rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:scale-105"
        >

          Explore Services

        </Link>

        <Link
          href="/contact"
          className="rounded-full border px-7 py-4 font-semibold transition hover:bg-muted"
        >

          Contact Us

        </Link>

      </div>

      <HeroStats stats={stats} />

    </div>

  );

}
