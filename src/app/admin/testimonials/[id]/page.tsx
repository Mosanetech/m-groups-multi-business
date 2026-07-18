import { notFound } from "next/navigation";

import Image from "next/image";

import {
  getTestimonial,
} from "@/actions/testimonial";

export default async function TestimonialPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const testimonial =
    await getTestimonial(id);

  if (!testimonial) {
    notFound();
  }

  return (
    <div className="max-w-4xl space-y-8">

      <div className="rounded-xl border bg-white p-8">

        <div className="flex items-center gap-6">

          {testimonial.image && (

            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />

          )}

          <div>

            <h1 className="text-3xl font-bold">
              {testimonial.name}
            </h1>

            <p className="text-gray-500">
              {testimonial.position}
            </p>

            <p className="text-gray-500">
              {testimonial.company}
            </p>

            {testimonial.featured && (

              <span className="mt-3 inline-block rounded-full bg-yellow-100 px-3 py-1 text-sm">

                ⭐ Featured

              </span>

            )}

          </div>

        </div>

      </div>

      <div className="rounded-xl border bg-white p-8">

        <h2 className="mb-5 text-2xl font-semibold">
          Testimonial
        </h2>

        <p className="leading-8 text-gray-700">
          {testimonial.message}
        </p>

      </div>

    </div>
  );
}