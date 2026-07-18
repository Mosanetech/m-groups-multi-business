"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import {
  blogSchema,
  BlogFormData,
} from "@/lib/validators/blog";

export async function createBlog(
  data: BlogFormData
) {
  const validated =
    blogSchema.parse(data);

  await prisma.blog.create({
    data: validated,
  });

  revalidatePath("/admin/blog");
}