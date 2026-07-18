"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import {
  blogSchema,
  BlogFormData,
} from "@/lib/validators/blog";

export async function updateBlog(
  id: string,
  data: BlogFormData
) {
  const validated =
    blogSchema.parse(data);

  await prisma.blog.update({
    where: {
      id,
    },
    data: validated,
  });

  revalidatePath("/admin/blog");
}