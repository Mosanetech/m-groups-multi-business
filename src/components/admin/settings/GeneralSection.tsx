"use client";

import { UseFormReturn } from "react-hook-form";
import { SettingsFormData } from "@/lib/validators/settings";

interface Props {
  form: UseFormReturn<SettingsFormData>;
}

export default function GeneralSection({
  form,
}: Props) {

  const { register } = form;

  return (

    <div className="rounded-2xl border bg-white p-6">

      <h2 className="mb-6 text-2xl font-bold">
        General
      </h2>

      <div className="grid gap-6">

        <div>

          <label>Company Name</label>

          <input
            {...register("companyName")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label>Tagline</label>

          <input
            {...register("tagline")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label>Description</label>

          <textarea
            rows={5}
            {...register("description")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

      </div>

    </div>

  );

}