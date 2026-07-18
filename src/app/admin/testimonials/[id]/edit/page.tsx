import { notFound } from "next/navigation";

import {
  getTestimonial,
} from "@/actions/testimonial";

import TestimonialForm from "@/components/admin/testimonial/TestimonialForm";

export default async function EditTestimonialPage({
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
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Testimonial
        </h1>

      </div>

      <TestimonialForm
        testimonial={testimonial}
      />

    </div>
  );
}