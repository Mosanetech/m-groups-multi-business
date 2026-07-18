"use client";

import { UseFormReturn } from "react-hook-form";
import { SettingsFormData } from "@/lib/validators/settings";

interface Props {
  form: UseFormReturn<SettingsFormData>;
}

export default function SeoSection({
  form,
}: Props) {

  const { register } = form;

  return (

    <div className="rounded-2xl border bg-white p-6">

      <h2 className="mb-6 text-2xl font-bold">
        SEO
      </h2>

      <div className="grid gap-6">

        <div>

          <label>Meta Title</label>

          <input
            {...register("metaTitle")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label>Meta Description</label>

          <textarea
            rows={4}
            {...register("metaDescription")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label>Keywords</label>

          <textarea
            rows={3}
            {...register("keywords")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

      </div>

    </div>

  );

}