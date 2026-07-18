"use client";

import { UseFormReturn } from "react-hook-form";

import {
  BlogFormData,
} from "@/lib/validators/blog";

import ImageUploader from "@/components/admin/property/upload/ImageUploader";

interface Props {
  form: UseFormReturn<BlogFormData>;
}

export default function ImageSection({
  form,
}: Props) {

  const image =
    form.watch("image");

  return (

    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Featured Image
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
          {...form.register(
            "published"
          )}
        />

        <label>
          Publish immediately
        </label>

      </div>

    </div>

  );
}