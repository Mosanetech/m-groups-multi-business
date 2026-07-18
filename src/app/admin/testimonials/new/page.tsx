import TestimonialForm from "@/components/admin/testimonial/TestimonialForm";

export default function NewTestimonialPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          New Testimonial
        </h1>

        <p className="text-gray-500">
          Add a new customer testimonial.
        </p>

      </div>

      <TestimonialForm />

    </div>
  );
}