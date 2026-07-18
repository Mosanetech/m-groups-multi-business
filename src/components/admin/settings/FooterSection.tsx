"use client";

import { UseFormReturn } from "react-hook-form";
import { SettingsFormData } from "@/lib/validators/settings";

interface Props {
  form: UseFormReturn<SettingsFormData>;
}

export default function FooterSection({
  form,
}: Props) {

  const { register } = form;

  return (

    <div className="rounded-2xl border bg-white p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Footer
      </h2>

      <div className="grid gap-6">

        <div>

          <label>Footer Text</label>

          <textarea
            rows={4}
            {...register("footerText")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label>Copyright</label>

          <input
            {...register("copyright")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

      </div>

    </div>

  );

}