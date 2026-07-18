import { z } from "zod";

export const testimonialSchema = z.object({

  name: z
    .string()
    .min(2),

  position: z
    .string()
    .optional(),

  company: z
    .string()
    .optional(),

  message: z
    .string()
    .min(10),

  image: z
    .string()
    .optional(),

  featured: z.boolean(),

});

export type TestimonialFormData =
  z.infer<typeof testimonialSchema>;