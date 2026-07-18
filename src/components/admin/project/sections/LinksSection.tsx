"use client";

import { UseFormReturn } from "react-hook-form";

import { ProjectFormData } from "@/lib/validators/project";

interface Props {
  form: UseFormReturn<ProjectFormData>;
}

export default function LinksSection({
  form,
}: Props) {
  const { register } = form;

  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Project Links
      </h2>

      <div className="grid gap-6">

        <div>

          <label>Website</label>

          <input
            {...register("websiteUrl")}
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label>GitHub</label>

          <input
            {...register("githubUrl")}
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label>Google Play</label>

          <input
            {...register("playStoreUrl")}
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label>App Store</label>

          <input
            {...register("appStoreUrl")}
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

      </div>

    </div>
  );
}