"use client";

import { UseFormReturn } from "react-hook-form";

import {
  BlogFormData,
} from "@/lib/validators/blog";

interface Props {
  form: UseFormReturn<BlogFormData>;
}

export default function BasicInfoSection({
  form,
}: Props) {

  const { register } = form;

  return (

    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Basic Information
      </h2>

      <div className="space-y-5">

        <input
          {...register("title")}
          placeholder="Title"
          className="w-full rounded-lg border p-3"
        />

        <input
          {...register("slug")}
          placeholder="Slug"
          className="w-full rounded-lg border p-3"
        />

        <textarea
          rows={4}
          {...register("excerpt")}
          placeholder="Excerpt"
          className="w-full rounded-lg border p-3"
        />

      </div>

    </div>

  );
}