"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import {
  projectSchema,
  ProjectFormData,
} from "@/lib/validators/project";

export async function createProject(
  data: ProjectFormData
) {
  const validated =
    projectSchema.parse(data);

  await prisma.project.create({
    data: validated,
  });

  revalidatePath("/admin/projects");
  revalidatePath("/");
  revalidatePath("/projects");
}