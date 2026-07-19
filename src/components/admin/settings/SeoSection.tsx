"use client";

import { UseFormReturn } from "react-hook-form";
import { SettingsFormData } from "@/lib/validators/settings";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Props {
  form: UseFormReturn<SettingsFormData>;
}

export default function SeoSection({
  form,
}: Props) {

  const { register } = form;

  return (

    <div className="rounded-2xl border bg-white p-6">

      <h2 className="mb-6 text-2xl font-bold">
        SEO
      </h2>

      <div className="grid gap-6">

        <Label>Meta Title</Label>
          <Input {...register("metaTitle")} />

          <Label>Meta Description</Label>
          <Textarea
              rows={4}
              {...register("metaDescription")}
          />

          <Label>Keywords</Label>
          <Textarea
              rows={3}
              {...register("keywords")}
          />

      </div>

    </div>

  );

}