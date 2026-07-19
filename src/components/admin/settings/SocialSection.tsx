"use client";

import { UseFormReturn } from "react-hook-form";
import { SettingsFormData } from "@/lib/validators/settings";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

        <Label>Facebook</Label>
        <Input {...register("facebook")} />

        <Label>Instagram</Label>
        <Input {...register("instagram")} />

        <Label>LinkedIn</Label>
        <Input {...register("linkedin")} />

        <Label>X (Twitter)</Label>
        <Input {...register("twitter")} />

        <Label>YouTube</Label>
        <Input {...register("youtube")} />

        <Label>TikTok</Label>
        <Input {...register("tiktok")} />

      </div>

    </div>

  );
}