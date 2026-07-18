import { prisma } from "@/lib/prisma";

export async function getFAQs() {

  return prisma.fAQ.findMany({

    orderBy: {
      order: "asc",
    },

  });

}