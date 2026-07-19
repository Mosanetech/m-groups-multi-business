"use client";

import { UseFormReturn } from "react-hook-form";

import {
  BlogFormData,
} from "@/lib/validators/blog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Props {
  form: UseFormReturn<BlogFormData>;
}

export default function BasicInfoSection({
  form,
}: Props) {

  const { register } = form;

  return (

    <section className="space-y-6">

      <h2 className="text-xl font-semibold">
        Basic Information
      </h2>

      <div>

        <Label>Title</Label>

        <Input
          {...register("title")}
          placeholder="Blog title"
        />

      </div>

      <div>

        <Label>Slug</Label>

        <Input
          {...register("slug")}
          placeholder="blog-title"
        />

      </div>

      <div>

        <Label>Excerpt</Label>

        <Textarea
          rows={4}
          {...register("excerpt")}
          placeholder="Short summary..."
        />

      </div>

    </section>

  );
}