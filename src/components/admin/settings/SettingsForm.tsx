"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  updateSettings,
} from "@/actions/settings";

import {
  settingsSchema,
  SettingsFormData,
} from "@/lib/validators/settings";

import GeneralSection from "./GeneralSection";
import ContactSection from "./ContactSection";
import SocialSection from "./SocialSection";
import SeoSection from "./SeoSection";
import FooterSection from "./FooterSection";
import SaveButton from "./SaveButton";
interface Props {
  settings: SettingsFormData & {
    id: string;
  };
}

export default function SettingsForm({
  settings,
}: Props) {

  const [pending, startTransition] =
    useTransition();

  const form =
    useForm<SettingsFormData>({
      resolver: zodResolver(
        settingsSchema
      ),
      defaultValues: settings,
    });

 function submit(values: SettingsFormData) {
  startTransition(async () => {
    await updateSettings(values);
  });
}

  return (

    <form
      onSubmit={form.handleSubmit(submit)}
      className="space-y-8"
    >

      <GeneralSection form={form} />

      <ContactSection form={form} />

      <SocialSection form={form} />

      <SeoSection form={form} />

      <FooterSection form={form} />

     <SaveButton
     pending={pending}
    />

    </form>

  );

}