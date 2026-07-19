"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  faqSchema,
  FAQFormData,
} from "@/lib/validators/faq";

import {
  createFAQ,
  updateFAQ,
} from "@/actions/faq";

import BasicInfoSection from "./sections/BasicInfoSection";
import SubmitButton from "./SubmitButton";

import { Card } from "@/components/ui/card";

interface Props {
  faq?: any;
}

export default function FAQForm({
  faq,
}: Props) {
  const form = useForm<FAQFormData>({
    resolver: zodResolver(faqSchema) as any,

    defaultValues:
      faq ?? {
        question: "",
        answer: "",
        order: 0,
      },
  });

  async function onSubmit(
    values: FAQFormData
  ) {
    if (faq) {
      await updateFAQ(
        faq.id,
        values
      );
    } else {
      await createFAQ(values);
    }
  }

  return (
    <Card className="p-8">

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <BasicInfoSection form={form} />

        <SubmitButton />

      </form>

    </Card>
  );
}