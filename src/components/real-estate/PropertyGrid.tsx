import { prisma } from "@/lib/prisma";

import PropertyCard from "./PropertyCard";

interface Props {
  searchParams?: Promise<{
    search?: string;
    type?: string;
  }>;
}

export default async function PropertyGrid({
  searchParams,
}: Props) {
  const params = (await searchParams) ?? {};

  const search = params.search ?? "";
  const type = params.type ?? "";

  const properties = await prisma.property.findMany({
    where: {
      AND: [
        search
          ? {
              OR: [
                {
                  title: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
                {
                  city: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
                {
                  location: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
              ],
            }
          : {},

        type
          ? {
              type: type as any,
            }
          : {},
      ],
    },

    include: {
      images: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  if (properties.length === 0) {
    return (
      <p className="text-center text-foreground/80">
        No properties found.
      </p>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}