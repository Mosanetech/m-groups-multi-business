import { prisma } from "@/lib/prisma";

export async function getSubscriber(
  id: string
) {
  return prisma.newsletterSubscriber.findUnique({
    where: {
      id,
    },
  });
}