"use client";

import { UseFormReturn } from "react-hook-form";

import { ProjectFormData } from "@/lib/validators/project";

import ImageUploader from "../../property/upload/ImageUploader";

interface Props {
  form: UseFormReturn<ProjectFormData>;
}

export default function ImageSection({
  form,
}: Props) {
  const image = form.watch("image");

  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Project Image
      </h2>

      <ImageUploader
        images={image ? [image] : []}
        onChange={(urls) => {
          form.setValue(
            "image",
            urls[0] ?? ""
          );
        }}
      />

    </div>
  );
}