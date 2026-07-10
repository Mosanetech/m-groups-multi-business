import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-24">

      <div className="container mx-auto">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <div className="relative h-[500px] overflow-hidden rounded-3xl">

            <Image
              src="/images/about/about.jpg"
              alt="About M Groups"
              fill
              className="object-cover"
            />

          </div>

          <div>

            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              About M Groups
            </span>

            <h2 className="mt-6 text-5xl font-bold">
              One Company.
              <br />
              Multiple Professional Services.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              M Groups brings together Real Estate,
              ICT, Financial Services and Education
              under one trusted brand. Our mission is
              to deliver innovative, reliable and
              affordable solutions that improve lives
              and businesses.
            </p>

            <div className="mt-8">

              <Link
                href="/about"
                className="rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground"
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