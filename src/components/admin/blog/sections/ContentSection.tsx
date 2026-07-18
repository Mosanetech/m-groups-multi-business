"use client";

import { UseFormReturn } from "react-hook-form";

import {
  BlogFormData,
} from "@/lib/validators/blog";

interface Props {
  form: UseFormReturn<BlogFormData>;
}

export default function ContentSection({
  form,
}: Props) {

  return (

    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Blog Content
      </h2>

      <textarea
        rows={18}
        {...form.register("content")}
        className="w-full rounded-lg border p-4"
      />

    </div>

  );
}