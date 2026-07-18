"use client";

import { UseFormReturn } from "react-hook-form";

import {
  TestimonialFormData,
} from "@/lib/validators/testimonial";

interface Props {
  form: UseFormReturn<TestimonialFormData>;
}

export default function BasicInfoSection({
  form,
}: Props) {

  const { register } = form;

  return (

    <div className="rounded-xl border bg-white p-6 space-y-5">

      <h2 className="text-xl font-semibold">

        Customer Information

      </h2>

      <input
        {...register("name")}
        placeholder="Customer Name"
        className="w-full rounded-lg border p-3"
      />

      <input
        {...register("position")}
        placeholder="Position"
        className="w-full rounded-lg border p-3"
      />

      <input
        {...register("company")}
        placeholder="Company"
        className="w-full rounded-lg border p-3"
      />

      <textarea
        rows={6}
        {...register("message")}
        placeholder="Customer Testimonial"
        className="w-full rounded-lg border p-3"
      />

    </div>

  );

}