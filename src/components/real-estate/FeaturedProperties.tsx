import { prisma } from "@/lib/prisma";
import PropertyCard from "./PropertyCard";

export default async function FeaturedProperties() {
  const properties = await prisma.property.findMany({
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
    <section className="py-24">

      <div className="container mx-auto px-4">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Featured Properties
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Properties For Sale
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Discover our latest featured properties.
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

      </div>

    </section>
  );
}