"use client";

import { UseFormReturn } from "react-hook-form";

import { FAQFormData } from "@/lib/validators/faq";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
    <div className="space-y-8">

      <div>

        <h2 className="text-xl font-semibold">
          FAQ Information
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Create a frequently asked question.
        </p>

      </div>

      <div>

        <Label htmlFor="question">
          Question
        </Label>

        <Input
          id="question"
          {...register("question")}
          placeholder="Enter the question"
          className="mt-2"
        />

        {errors.question && (
          <p className="mt-2 text-sm text-red-500">
            {errors.question.message}
          </p>
        )}

      </div>

      <div>

        <Label htmlFor="answer">
          Answer
        </Label>

        <Textarea
          id="answer"
          rows={8}
          {...register("answer")}
          placeholder="Enter the answer"
          className="mt-2"
        />

        {errors.answer && (
          <p className="mt-2 text-sm text-red-500">
            {errors.answer.message}
          </p>
        )}

      </div>

      <div className="max-w-xs">

        <Label htmlFor="order">
          Display Order
        </Label>

        <Input
          id="order"
          type="number"
          {...register("order", {
            valueAsNumber: true,
          })}
          className="mt-2"
        />

      </div>

    </div>
  );
}