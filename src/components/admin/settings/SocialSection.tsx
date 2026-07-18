"use client";

import { UseFormReturn } from "react-hook-form";
import { SettingsFormData } from "@/lib/validators/settings";

interface Props {
  form: UseFormReturn<SettingsFormData>;
}

export default function SocialSection({
  form,
}: Props) {

  const { register } = form;

  return (

    <div className="rounded-2xl border bg-white p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Social Media
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label>Facebook</label>

          <input
            {...register("facebook")}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label>Instagram</label>

          <input
            {...register("instagram")}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label>LinkedIn</label>

          <input
            {...register("linkedin")}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label>X (Twitter)</label>

          <input
            {...register("twitter")}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label>YouTube</label>

          <input
            {...register("youtube")}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label>TikTok</label>

          <input
            {...register("tiktok")}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

      </div>

    </div>

  );
}