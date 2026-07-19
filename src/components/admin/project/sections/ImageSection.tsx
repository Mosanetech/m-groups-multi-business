"use client";

import { UseFormReturn } from "react-hook-form";

import { ProjectFormData } from "@/lib/validators/project";

import ImageUploader from "../../property/upload/ImageUploader";

import { FormSection } from "@/components/ui/form-section";

interface Props {
  form: UseFormReturn<ProjectFormData>;
}

export default function ImageSection({
  form,
}: Props) {

  const image = form.watch("image");

  return (

    <FormSection
      title="Project Image"
      description="Upload the project's featured image."
    >

      <ImageUploader
        images={image ? [image] : []}
        onChange={(urls) =>
          form.setValue(
            "image",
            urls[0] ?? "",
            {
              shouldValidate: true,
            }
          )
        }
      />

    </FormSection>

  );
}