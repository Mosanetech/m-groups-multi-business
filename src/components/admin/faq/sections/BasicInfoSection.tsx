"use client";

import { UseFormReturn } from "react-hook-form";
import { FAQFormData } from "@/lib/validators/faq";

interface Props {
  form: UseFormReturn<FAQFormData>;
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
        FAQ Information
      </h2>

      <div className="space-y-6">

        <div>

          <label>Question</label>

          <input
            {...register("question")}
            className="mt-2 w-full rounded-lg border p-3"
          />

          <p className="text-red-500 text-sm">
            {errors.question?.message}
          </p>

        </div>

        <div>

          <label>Answer</label>

          <textarea
            rows={8}
            {...register("answer")}
            className="mt-2 w-full rounded-lg border p-3"
          />

          <p className="text-red-500 text-sm">
            {errors.answer?.message}
          </p>

        </div>

        <div>

          <label>Display Order</label>

          <input
            type="number"
            {...register("order", {
              valueAsNumber: true,
            })}
            className="mt-2 w-40 rounded-lg border p-3"
          />

        </div>

      </div>

    </div>
  );
}