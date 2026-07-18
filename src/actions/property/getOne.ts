import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export type PropertyWithRelations =
  Prisma.PropertyGetPayload<{
    include: {
      images: true;
      amenities: true;
      inquiries: true;
    };
  }>;

export async function getProperty(
  id: string
): Promise<PropertyWithRelations | null> {

  return prisma.property.findUnique({

    where: {
      id,
    },

    include: {
      images: true,
      amenities: true,
      inquiries: true,
    },

  });

}