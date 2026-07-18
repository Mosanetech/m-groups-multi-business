import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3).max(120),

  slug: z.string().min(3).max(150),

  category: z.enum([
    "ICT",
    "REAL_ESTATE",
    "FINANCE",
    "LANGUAGE",
    "EDUCATION",
  ]),

  shortDescription: z
    .string()
    .min(20)
    .max(250),

  description: z
    .string()
    .min(50),

  image: z.string().url(),

  websiteUrl: z.string().optional(),

  playStoreUrl: z.string().optional(),

  appStoreUrl: z.string().optional(),

  githubUrl: z.string().optional(),

  featured: z.boolean(),
});

export type ProjectFormData =
  z.infer<typeof projectSchema>;