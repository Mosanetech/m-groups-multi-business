import { z } from "zod";

export const blogSchema = z.object({

  title: z
    .string()
    .min(5)
    .max(150),

  slug: z
    .string()
    .min(3)
    .max(150),

  excerpt: z
    .string()
    .min(20)
    .max(250),

  content: z
    .string()
    .min(50),

  image: z
    .string()
    .url(),

  published: z.boolean(),

});

export type BlogFormData =
  z.infer<typeof blogSchema>;