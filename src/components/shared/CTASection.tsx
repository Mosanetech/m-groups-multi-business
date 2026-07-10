import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="mt-24 rounded-3xl bg-primary px-10 py-20 text-center text-white">

      <h2 className="text-4xl font-bold">
        Ready to Work With M Groups?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-white/90">

        Whether you need property, ICT, financial or educational
        services, our team is ready to help.

      </p>

      <Link
        href="/contact"
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-primary transition hover:gap-4"
      >
        Contact Us

        <ArrowRight size={18} />
      </Link>

    </section>
  );
}