import PropertyCard from "./PropertyCard";
import { PROPERTIES } from "@/config/properties";

interface Props {
    currentSlug: string;
}

export default function RelatedProperties({
  currentSlug,
}: Props) {

  const related = PROPERTIES.filter(
    property => property.slug !== currentSlug
  ).slice(0, 3);

  return (
    <section className="mt-20">

      <h2 className="mb-10 text-3xl font-bold">
        Related Properties
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {related.map(property => (
          <PropertyCard
            key={property.slug}
            property={property}
          />
        ))}

      </div>

    </section>
  );
}