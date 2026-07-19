"use server";

import { prisma } from "@/lib/prisma";
import { propertySchema } from "@/lib/validators/property";

import { revalidatePath } from "next/cache";

export async function updateProperty(
  id: string,
  data: unknown
) {
  const validated = propertySchema.parse(data);

  await prisma.property.update({
    where: {
      id,
    },

    data: {
      title: validated.title,
      slug: validated.slug,
      description: validated.description,
      city: validated.city,
      location: validated.location,
      type: validated.type,
      status: validated.status,
      price: validated.price,
      bedrooms: validated.bedrooms,
      bathrooms: validated.bathrooms,
      area: validated.area,
      featured: validated.featured,
      availableFrom: validated.availableFrom,

      images: {
        deleteMany: {},

        create: validated.images.map((image) => ({
          image,
        })),
      },
    },
  });

  revalidatePath("/admin/properties");
  revalidatePath("/");
  revalidatePath("/properties");
}