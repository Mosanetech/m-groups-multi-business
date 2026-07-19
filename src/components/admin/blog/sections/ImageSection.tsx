"use client";

import { UseFormReturn } from "react-hook-form";

import {
  BlogFormData,
} from "@/lib/validators/blog";

import ImageUploader from "@/components/admin/property/upload/ImageUploader";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Props {
  form: UseFormReturn<BlogFormData>;
}

export default function ImageSection({
  form,
}: Props) {

  const image = form.watch("image");

  return (

    <section className="space-y-6">

      <h2 className="text-xl font-semibold">
        Featured Image
      </h2>

      <ImageUploader
        images={image ? [image] : []}
        onChange={(urls) =>
          form.setValue(
            "image",
            urls[0] ?? ""
          )
        }
      />

      <div className="flex items-center gap-3">

        <Checkbox
        checked={form.watch("published")}
        onChange={(e) =>
          form.setValue(
            "published",
            e.target.checked,
            {
              shouldValidate: true,
            }
          )
        }
      />

        <Label>
          Publish immediately
        </Label>

      </div>

    </section>

  );
}