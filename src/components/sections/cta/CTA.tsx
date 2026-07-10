import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">

      <div className="container mx-auto">

        <div className="rounded-[40px] bg-primary px-8 py-20 text-center text-white">

          <h2 className="text-5xl font-bold">
            Ready to Work With M Groups?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Whether you need property, ICT solutions,
            financial guidance or professional training,
            we're ready to help.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-primary"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}