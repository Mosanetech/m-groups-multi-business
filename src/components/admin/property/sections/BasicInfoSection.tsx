"use client";

import { UseFormReturn } from "react-hook-form";
import { PropertyFormData } from "@/lib/validators/property";

interface Props {
  form: UseFormReturn<PropertyFormData>;
}

export default function BasicInfoSection({
  form,
}: Props) {

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Basic Information
      </h2>

      <div className="space-y-5">

        <div>

          <label>Title</label>

          <input
            {...register("title")}
            className="mt-2 w-full rounded-lg border p-3"
          />

          <p className="text-sm text-red-500">
            {errors.title?.message}
          </p>

        </div>

        <div>

          <label>Slug</label>

          <input
            {...register("slug")}
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label>Description</label>

          <textarea
            rows={6}
            {...register("description")}
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

      </div>

    </div>
  );
}