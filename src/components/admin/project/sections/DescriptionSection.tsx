"use client";

import { UseFormReturn } from "react-hook-form";

import { ProjectFormData } from "@/lib/validators/project";

interface Props {
  form: UseFormReturn<ProjectFormData>;
}

export default function DescriptionSection({
  form,
}: Props) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Description
      </h2>

      <div className="space-y-6">

        <div>

          <label>Short Description</label>

          <textarea
            rows={3}
            {...register("shortDescription")}
            className="mt-2 w-full rounded-lg border p-3"
          />

          {errors.shortDescription && (
            <p className="mt-1 text-sm text-red-500">
              {errors.shortDescription.message}
            </p>
          )}

        </div>

        <div>

          <label>Full Description</label>

          <textarea
            rows={8}
            {...register("description")}
            className="mt-2 w-full rounded-lg border p-3"
          />

          {errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}

        </div>

      </div>

    </div>
  );
}