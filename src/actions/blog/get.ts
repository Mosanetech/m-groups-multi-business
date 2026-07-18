import { prisma } from "@/lib/prisma";

export async function getBlogs() {
  return prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}