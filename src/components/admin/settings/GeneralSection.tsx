"use client";

import { UseFormReturn } from "react-hook-form";
import { SettingsFormData } from "@/lib/validators/settings";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

       <Label>Company Name</Label>
        <Input {...register("companyName")} />

        <Label>Tagline</Label>
        <Input {...register("tagline")} />

        <Label>Description</Label>
        <Textarea
            rows={5}
            {...register("description")}
        />

      </div>

    </div>

  );

}