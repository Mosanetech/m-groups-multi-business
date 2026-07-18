import { prisma } from "@/lib/prisma";

export async function getProject(
  id: string
) {
  return prisma.project.findUnique({
    where: {
      id,
    },
  });
}