import { prisma } from "@/lib/prisma";
import PropertyCard from "./PropertyCard";

export default async function RecentlyAdded() {

  const properties =
    await prisma.property.findMany({

      include: {
        images: true,
      },

      orderBy: {
        createdAt: "desc",
      },

      take: 6,

    });

  if (properties.length === 0) {
    return null;
  }

  return (

    <section className="mt-24">

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Recently Added
        </h2>

        <p className="mt-2 text-muted-foreground">
          New properties uploaded recently.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {properties.map((property) => (

          <PropertyCard
            key={property.id}
            property={property}
          />

        ))}

      </div>

    </section>

  );

}