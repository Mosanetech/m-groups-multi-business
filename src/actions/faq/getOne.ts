import { prisma } from "@/lib/prisma";

export async function getFAQ(
  id: string
) {

  return prisma.fAQ.findUnique({

    where: {
      id,
    },

  });

}