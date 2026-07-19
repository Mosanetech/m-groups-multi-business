"use client";

import { UseFormReturn } from "react-hook-form";

import {
  BlogFormData,
} from "@/lib/validators/blog";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  form: UseFormReturn<BlogFormData>;
}

export default function ContentSection({
  form,
}: Props) {

  return (

    <section className="space-y-6">

      <h2 className="text-xl font-semibold">
        Blog Content
      </h2>

      <div>

        <Label>Content</Label>

        <Textarea
          rows={18}
          {...form.register("content")}
          placeholder="Write your article..."
        />

      </div>

    </section>

  );
}