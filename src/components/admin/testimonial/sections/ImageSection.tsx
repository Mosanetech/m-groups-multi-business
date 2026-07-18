"use client";

import { UseFormReturn } from "react-hook-form";

import {
  TestimonialFormData,
} from "@/lib/validators/testimonial";

import ImageUploader from "@/components/admin/property/upload/ImageUploader";

interface Props {
  form: UseFormReturn<TestimonialFormData>;
}

export default function ImageSection({
  form,
}: Props) {

  const image =
    form.watch("image");

  return (

    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-5 text-xl font-semibold">

        Customer Photo

      </h2>

      <ImageUploader
        images={
          image
            ? [image]
            : []
        }
        onChange={(urls) =>
          form.setValue(
            "image",
            urls[0] ?? ""
          )
        }
      />

      <div className="mt-6 flex items-center gap-3">

        <input
          type="checkbox"
          {...form.register("featured")}
        />

        <label>

          Featured Testimonial

        </label>

      </div>

    </div>

  );

}