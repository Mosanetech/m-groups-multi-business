import { prisma } from "@/lib/prisma";
import PropertyCard from "./PropertyCard";

export default async function FeaturedProperties() {

  const properties =
    await prisma.property.findMany({

      where: {
        featured: true,
      },

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

    <section className="mt-20">

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Featured Properties
        </h2>

        <p className="mt-2 text-muted-foreground">
          Hand picked premium listings.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {

          properties.map((property) => (

            <PropertyCard
              key={property.id}
              property={property}
            />

          ))

        }

      </div>

    </section>

  );

}