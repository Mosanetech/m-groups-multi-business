"use client";

import { UseFormReturn } from "react-hook-form";
import { PropertyFormData } from "@/lib/validators/property";

interface Props {
  form: UseFormReturn<PropertyFormData>;
}

export default function LocationSection({
  form,
}: Props) {

  const { register } = form;

  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Location
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label>City</label>

          <input
            {...register("city")}
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label>Location</label>

          <input
            {...register("location")}
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

      </div>

    </div>
  );
}