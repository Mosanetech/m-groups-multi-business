import { z } from "zod";

export const propertySchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(120),

  slug: z
    .string()
    .min(3)
    .max(150),

  description: z
    .string()
    .min(20, "Description is too short"),

  city: z
    .string()
    .min(2),

  location: z
    .string()
    .min(3),

  type: z.enum([
    "HOUSE",
    "APARTMENT",
    "VILLA",
    "OFFICE",
    "SHOP",
    "LAND",
    "WAREHOUSE",
  ]),

  status: z.enum([
    "FOR_SALE",
    "TO_LET",
    "SOLD",
    "RENTED",
  ]),

  price: z.coerce.number().positive(),

  bedrooms: z.coerce.number().min(0),

  bathrooms: z.coerce.number().min(0),

  area: z.coerce.number().positive(),

  images: z
    .array(z.string())
    .min(1, "Upload at least one image"),

  featured: z.boolean(),

  availableFrom: z
    .date()
    .optional()
    .nullable(),
});

export type PropertyFormData = z.infer<
  typeof propertySchema
>;