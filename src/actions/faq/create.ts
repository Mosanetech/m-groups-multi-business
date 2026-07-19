"use server";

import { prisma } from "@/lib/prisma";
import { faqSchema } from "@/lib/validators/faq";

import { revalidatePath } from "next/cache";

export async function createFAQ(
  data: any
) {

  const validated =
    faqSchema.parse(data);

  await prisma.fAQ.create({
    data: validated,
  });

  revalidatePath("/admin/faqs");
  revalidatePath("/");
  revalidatePath("/faqs");

}