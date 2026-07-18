import { prisma } from "@/lib/prisma";

export async function getBlog(
  id: string
) {
  return prisma.blog.findUnique({
    where: {
      id,
    },
  });
}