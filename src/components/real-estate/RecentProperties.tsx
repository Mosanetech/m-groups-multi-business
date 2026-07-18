import { getProperties } from "@/actions/property";

import PropertyCard from "./PropertyCard";

export default async function RecentProperties() {
  const properties = await getProperties();

  const recent = [...properties].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );

  return (
    <section className="mt-24">
      <div className="mb-10">
        <h2 className="text-4xl font-bold">
          Recently Added
        </h2>

        <p className="mt-3 text-muted-foreground">
          Latest properties available.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {recent.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </section>
  );
}