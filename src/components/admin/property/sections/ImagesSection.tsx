"use client";

import { UseFormReturn } from "react-hook-form";

import {
  PropertyFormData,
} from "@/lib/validators/property";

import ImageUploader from "../upload/ImageUploader";

interface Props {
  form: UseFormReturn<PropertyFormData>;
}

export default function ImagesSection({
  form,
}: Props) {
  const images = form.watch("images");

  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Images
      </h2>

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

    </div>
  );
}