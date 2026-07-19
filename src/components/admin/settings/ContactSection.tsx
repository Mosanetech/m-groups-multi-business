"use client";

import { UseFormReturn } from "react-hook-form";
import { SettingsFormData } from "@/lib/validators/settings";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

       <Label>WhatsApp</Label>
      <Input {...register("whatsapp")} />

      <Label>Phone 1</Label>
      <Input {...register("phone1")} />

      <Label>Phone 2</Label>
      <Input {...register("phone2")} />

      <Label>Email</Label>
      <Input
          type="email"
          {...register("email")}
      />

      <Label>Address</Label>
      <Textarea
          rows={3}
          {...register("address")}
      />

      <Label>Google Maps Link</Label>
      <Input {...register("googleMaps")} />

      </div>

    </div>

  );

}