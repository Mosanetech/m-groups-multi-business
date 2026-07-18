import { z } from "zod";

export const projectSchema = z.object({
  title: z
    .string()
    .min(3)
    .max(120),

  slug: z
    .string()
    .min(3),

  category: z.enum([
    "ICT",
    "REAL_ESTATE",
    "FINANCE",
    "LANGUAGE",
    "EDUCATION",
  ]),

  shortDescription: z
    .string()
    .min(20),

  description: z
    .string()
    .min(50),

  image: z.string().url(),

  websiteUrl: z
    .string()
    .url()
    .optional()
    .or(z.literal("")),

  playStoreUrl: z
    .string()
    .url()
    .optional()
    .or(z.literal("")),

  appStoreUrl: z
    .string()
    .url()
    .optional()
    .or(z.literal("")),

  githubUrl: z
    .string()
    .url()
    .optional()
    .or(z.literal("")),

  featured: z.boolean(),
});

export type ProjectFormData =
  z.infer<typeof projectSchema>;