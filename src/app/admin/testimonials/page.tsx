import {
  getTestimonials,
} from "@/actions/testimonial";

import TestimonialToolbar from "@/components/admin/testimonial/TestimonialToolbar";
import TestimonialTable from "@/components/admin/testimonial/TestimonialTable";
import EmptyState from "@/components/admin/testimonial/EmptyState";

export default async function TestimonialsPage() {

  const testimonials =
    await getTestimonials();

  return (
    <div className="space-y-8">

      <TestimonialToolbar />

      {testimonials.length === 0 ? (
        <EmptyState />
      ) : (
        <TestimonialTable
          testimonials={testimonials}
        />
      )}

    </div>
  );
}