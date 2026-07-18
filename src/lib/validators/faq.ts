import { z } from "zod";

export const faqSchema = z.object({

  question: z
    .string()
    .min(5),

  answer: z
    .string()
    .min(10),

  order: z
    .number(),

});

export type FAQFormData =
  z.infer<typeof faqSchema>;