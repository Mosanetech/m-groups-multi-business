"use server";

import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";

export async function deleteFAQ(
  id: string
) {

  await prisma.fAQ.delete({

    where: {
      id,
    },

  });

  revalidatePath("/admin/faqs");

}