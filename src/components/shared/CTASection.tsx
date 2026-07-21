import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="
        mt-24
        overflow-hidden
        rounded-[40px]
        border
        border-border
        bg-foreground
        px-6
        py-16
        text-center
        text-background
        shadow-2xl
        sm:px-10
        lg:px-16
        lg:py-20
      "
    >
      <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
        Ready to Work With M Groups?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-background/90 lg:text-lg">
        Whether you need property, ICT, financial or educational
        services, our team is ready to help.
      </p>

      <Link
        href="/contact"
        className="
          mt-10
          inline-flex
          items-center
          gap-3
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
          hover:gap-4
          hover:bg-gray-100
          hover:shadow-2xl
        "
      >
        Contact Us

        <ArrowRight size={18} />
      </Link>
    </section>
  );
}