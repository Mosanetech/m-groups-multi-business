"use client";

import { UseFormReturn } from "react-hook-form";
import { PropertyFormData } from "@/lib/validators/property";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  form: UseFormReturn<PropertyFormData>;
}

export default function LocationSection({
  form,
}: Props) {
  const { register } = form;

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-8">

        <h2 className="text-xl font-semibold">
          Location
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Where is this property located?
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <Label htmlFor="city">
            City
          </Label>

          <Input
            id="city"
            {...register("city")}
            placeholder="Blantyre"
            className="mt-2"
          />

        </div>

        <div>

          <Label htmlFor="location">
            Address / Location
          </Label>

          <Input
            id="location"
            {...register("location")}
            placeholder="Area 43"
            className="mt-2"
          />

        </div>

      </div>

    </section>
  );
}