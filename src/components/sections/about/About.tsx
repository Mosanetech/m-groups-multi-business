import Image from "next/image";
import Link from "next/link";

import { getSiteSettings } from "@/lib/site-settings";

export default async function About() {

  const settings =
    await getSiteSettings();

  return (

    <section className="py-24">

      <div className="container mx-auto">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <div className="relative h-[500px] overflow-hidden rounded-3xl">

            <Image
              src="/images/about/about.jpg"
              alt={settings.companyName}
              fill
              className="object-cover"
            />

          </div>

          <div>

            <span className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">

              About {settings.companyName}

            </span>

            <h2 className="mt-6 text-5xl font-bold">

              {settings.companyName}

            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

              {settings.footerText}

            </p>

            <div className="mt-8">

              <Link
                href="/about"
                className="rounded-full bg-black px-7 py-4 font-semibold text-white"
              >

                Learn More

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}