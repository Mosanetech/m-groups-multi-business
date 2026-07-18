"use client";

import { UseFormReturn } from "react-hook-form";

import { ProjectFormData } from "@/lib/validators/project";

interface Props {
  form: UseFormReturn<ProjectFormData>;
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

      <div className="space-y-6">

        <div>

          <label>Project Title</label>

          <input
            {...register("title")}
            className="mt-2 w-full rounded-lg border p-3"
          />

          {errors.title && (
            <p className="mt-1 text-sm text-red-500">
              {errors.title.message}
            </p>
          )}

        </div>

        <div>

          <label>Slug</label>

          <input
            {...register("slug")}
            className="mt-2 w-full rounded-lg border p-3"
          />

          {errors.slug && (
            <p className="mt-1 text-sm text-red-500">
              {errors.slug.message}
            </p>
          )}

        </div>

        <div>

          <label>Category</label>

          <select
            {...register("category")}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="ICT">ICT</option>

            <option value="REAL_ESTATE">
              Real Estate
            </option>

            <option value="FINANCE">
              Finance
            </option>

            <option value="LANGUAGE">
              Language
            </option>

            <option value="EDUCATION">
              Education
            </option>

          </select>

        </div>

      </div>

    </div>
  );
}