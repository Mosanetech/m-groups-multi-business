"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTestimonial(
  id: string
) {

  await prisma.testimonial.delete({

    where: {
      id,
    },

  });

  revalidatePath("/admin/testimonials");

}