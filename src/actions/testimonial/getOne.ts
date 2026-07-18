import { prisma } from "@/lib/prisma";

export async function getTestimonial(
  id: string
) {

  return prisma.testimonial.findUnique({

    where: {
      id,
    },

  });

}