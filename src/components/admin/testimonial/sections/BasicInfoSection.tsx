"use client";

import { UseFormReturn } from "react-hook-form";

import {
  TestimonialFormData,
} from "@/lib/validators/testimonial";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Props {
  form: UseFormReturn<TestimonialFormData>;
}

export default function BasicInfoSection({
  form,
}: Props) {

  const { register } = form;

  return (

    <section className="space-y-6">

      <h2 className="text-xl font-semibold">
        Customer Information
      </h2>

      <div>

        <Label>Name</Label>

        <Input
          {...register("name")}
          placeholder="Customer name"
        />

      </div>

      <div>

        <Label>Position</Label>

        <Input
          {...register("position")}
          placeholder="Managing Director"
        />

      </div>

      <div>

        <Label>Company</Label>

        <Input
          {...register("company")}
          placeholder="Company name"
        />

      </div>

      <div>

        <Label>Testimonial</Label>

        <Textarea
          rows={6}
          {...register("message")}
          placeholder="Customer testimonial..."
        />

      </div>

    </section>

  );
}