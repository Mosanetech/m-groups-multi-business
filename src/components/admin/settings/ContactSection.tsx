"use client";

import { UseFormReturn } from "react-hook-form";
import { SettingsFormData } from "@/lib/validators/settings";

interface Props {
  form: UseFormReturn<SettingsFormData>;
}

export default function ContactSection({
  form,
}: Props) {

  const { register } = form;

  return (

    <div className="rounded-2xl border bg-white p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Contact Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label>WhatsApp</label>

          <input
            {...register("whatsapp")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label>Phone 1</label>

          <input
            {...register("phone1")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label>Phone 2</label>

          <input
            {...register("phone2")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label>Email</label>

          <input
            {...register("email")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div className="md:col-span-2">

          <label>Address</label>

          <textarea
            rows={3}
            {...register("address")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div className="md:col-span-2">

          <label>Google Maps Link</label>

          <input
            {...register("googleMaps")}
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

      </div>

    </div>

  );

}