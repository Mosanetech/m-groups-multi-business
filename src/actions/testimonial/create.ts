"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import {
  testimonialSchema,
  TestimonialFormData,
} from "@/lib/validators/testimonial";

export async function createTestimonial(
  data: TestimonialFormData
) {

  const validated =
    testimonialSchema.parse(data);

  await prisma.testimonial.create({
    data: validated,
  });

  revalidatePath("/admin/testimonials");

}