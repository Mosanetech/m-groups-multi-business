"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function markMessageRead(
  id: string
) {
  await prisma.contactMessage.update({
    where: {
      id,
    },
    data: {
      read: true,
    },
  });

  revalidatePath("/admin/messages");
  revalidatePath("/contact");
}