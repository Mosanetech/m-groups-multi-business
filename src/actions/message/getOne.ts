import { prisma } from "@/lib/prisma";

export async function getMessage(
  id: string
) {
  return prisma.contactMessage.findUnique({
    where: {
      id,
    },
  });
}