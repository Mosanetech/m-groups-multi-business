"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  blogSchema,
  BlogFormData,
} from "@/lib/validators/blog";

import {
  createBlog,
  updateBlog,
} from "@/actions/blog";

import BasicInfoSection from "./sections/BasicInfoSection";
import ContentSection from "./sections/ContentSection";
import ImageSection from "./sections/ImageSection";
import SubmitButton from "./SubmitButton";

import { Card } from "@/components/ui/card";

interface Props {
  blog?: any;
}

export default function BlogForm({
  blog,
}: Props) {
  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema) as any,

    defaultValues:
      blog ?? {
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        image: "",
        published: true,
      },
  });

  async function onSubmit(
    values: BlogFormData
  ) {
    if (blog) {
      await updateBlog(blog.id, values);
    } else {
      await createBlog(values);
    }
  }

  return (
    <Card className="p-8">

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-10"
      >
        <BasicInfoSection form={form} />

        <ContentSection form={form} />

        <ImageSection form={form} />

        <SubmitButton />

      </form>

    </Card>
  );
}