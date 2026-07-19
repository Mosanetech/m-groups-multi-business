"use client";

import { UseFormReturn } from "react-hook-form";
import { PropertyFormData } from "@/lib/validators/property";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-8">

        <h2 className="text-xl font-semibold text-gray-900">
          Basic Information
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Main information about this property.
        </p>

      </div>

      <div className="grid gap-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <Label htmlFor="title">
              Property Title
            </Label>

            <Input
              id="title"
              {...register("title")}
              placeholder="Modern Family House"
              className="mt-2"
            />

            {errors.title && (
              <p className="mt-2 text-sm text-red-500">
                {errors.title.message}
              </p>
            )}

          </div>

          <div>

            <Label htmlFor="slug">
              Slug
            </Label>

            <Input
              id="slug"
              {...register("slug")}
              placeholder="modern-family-house"
              className="mt-2"
            />

          </div>

        </div>

        <div>

          <Label htmlFor="description">
            Description
          </Label>

          <Textarea
            id="description"
            rows={7}
            {...register("description")}
            placeholder="Describe this property..."
            className="mt-2 resize-none"
          />

          {errors.description && (
            <p className="mt-2 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}

        </div>

      </div>

    </section>
  );
}