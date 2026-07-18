"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteSubscriber(
  id: string
) {

  await prisma.newsletterSubscriber.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/newsletter");
}