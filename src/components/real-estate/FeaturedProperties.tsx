import { PROPERTIES } from "@/config/properties";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  const featured = PROPERTIES.filter(
    property => property.featured
  );

  if (featured.length === 0) return null;

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

        {featured.map(property => (
          <PropertyCard
            key={property.slug}
            property={property}
          />
        ))}

      </div>

    </section>
  );
}