"use client";

import { UseFormReturn } from "react-hook-form";

import { PropertyFormData } from "@/lib/validators/property";

import ImageUploader from "../upload/ImageUploader";

interface Props {
  form: UseFormReturn<PropertyFormData>;
}

export default function ImagesSection({
  form,
}: Props) {

  const images = form.watch("images");

  return (

    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-8">

        <h2 className="text-xl font-semibold">
          Images
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Upload one or more images for this property.
        </p>

      </div>

      <ImageUploader
        images={images}
        onChange={(urls) =>
          form.setValue(
            "images",
            urls,
            {
              shouldValidate: true,
            }
          )
        }
      />

    </section>

  );
}