"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import {
  projectSchema,
  ProjectFormData,
} from "@/lib/validators/project";

export async function updateProject(
  id: string,
  data: ProjectFormData
) {
  const validated =
    projectSchema.parse(data);

  await prisma.project.update({
    where: {
      id,
    },
    data: validated,
  });

  revalidatePath("/admin/projects");
}