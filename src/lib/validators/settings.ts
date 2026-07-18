import { z } from "zod";

export const settingsSchema = z.object({
  companyName: z.string().min(2),

  tagline: z.string().optional(),

  description: z.string().optional(),

  logo: z.string().optional(),

  favicon: z.string().optional(),

  whatsapp: z.string().optional(),

  phone1: z.string().optional(),

  phone2: z.string().optional(),

  email: z.string().email().optional().or(z.literal("")),

  address: z.string().optional(),

  googleMaps: z.string().optional(),

  facebook: z.string().optional(),

  instagram: z.string().optional(),

  linkedin: z.string().optional(),

  twitter: z.string().optional(),

  youtube: z.string().optional(),

  tiktok: z.string().optional(),

  metaTitle: z.string().optional(),

  metaDescription: z.string().optional(),

  keywords: z.string().optional(),

  footerText: z.string().optional(),

  copyright: z.string().optional(),
});

export type SettingsFormData =
  z.infer<typeof settingsSchema>;