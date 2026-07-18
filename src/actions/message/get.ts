import { prisma } from "@/lib/prisma";

export async function getMessages() {
  return prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}