"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  testimonialSchema,
  TestimonialFormData,
} from "@/lib/validators/testimonial";

import {
  createTestimonial,
  updateTestimonial,
} from "@/actions/testimonial";

import BasicInfoSection from "./sections/BasicInfoSection";
import ImageSection from "./sections/ImageSection";
import SubmitButton from "./SubmitButton";

import { Card } from "@/components/ui/card";

interface Props {
  testimonial?: any;
}

export default function TestimonialForm({
  testimonial,
}: Props) {
  const form =
    useForm<TestimonialFormData>({
      resolver:
        zodResolver(testimonialSchema) as any,

      defaultValues:
        testimonial ?? {
          name: "",
          position: "",
          company: "",
          message: "",
          image: "",
          featured: false,
        },
    });

  async function onSubmit(
    values: TestimonialFormData
  ) {
    if (testimonial) {
      await updateTestimonial(
        testimonial.id,
        values
      );
    } else {
      await createTestimonial(values);
    }
  }

  return (
    <Card className="p-8">

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-10"
      >

        <BasicInfoSection
          form={form}
        />

        <ImageSection
          form={form}
        />

        <SubmitButton />

      </form>

    </Card>
  );
}