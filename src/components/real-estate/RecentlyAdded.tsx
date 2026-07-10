import { PROPERTIES } from "@/config/properties";
import PropertyCard from "./PropertyCard";

export default function RecentlyAdded() {

  const recent = [...PROPERTIES]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    )
    .slice(0, 6);

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

        {recent.map(property => (

          <PropertyCard
            key={property.slug}
            property={property}
          />

        ))}

      </div>

    </section>

  );
}