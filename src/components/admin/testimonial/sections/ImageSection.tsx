"use client";

import { UseFormReturn } from "react-hook-form";

import {
  TestimonialFormData,
} from "@/lib/validators/testimonial";

import ImageUploader from "@/components/admin/property/upload/ImageUploader";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Props {
  form: UseFormReturn<TestimonialFormData>;
}

export default function ImageSection({
  form,
}: Props) {

  const image =
    form.watch("image");

  return (

    <section className="space-y-6">

      <h2 className="text-xl font-semibold">
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
            urls[0] ?? "",
            {
              shouldValidate: true,
            }
          )
        }
      />

      <div className="flex items-center gap-3">

        <Checkbox
          checked={form.watch("featured")}
          onChange={(e) =>
            form.setValue(
              "featured",
              e.target.checked,
              {
                shouldValidate: true,
              }
            )
          }
        />

        <Label>
          Featured Testimonial
        </Label>

      </div>

    </section>

  );
}