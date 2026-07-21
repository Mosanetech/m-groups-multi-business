import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 lg:py-24">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="rounded-[40px] border border-border bg-foreground px-6 py-14 text-center text-background shadow-xl sm:px-10 lg:px-16 lg:py-20">

          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to Work With M Groups?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-background/90 lg:text-lg">
            Whether you need property, ICT solutions,
            financial guidance or professional training,
            we're ready to help.
          </p>

          <Link
            href="/contact"
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-white
              px-8
              py-4
              font-semibold
              text-black
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-gray-100
              hover:shadow-2xl
              focus:outline-none
              focus:ring-2
              focus:ring-white
              focus:ring-offset-2
              focus:ring-offset-black
            "
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}