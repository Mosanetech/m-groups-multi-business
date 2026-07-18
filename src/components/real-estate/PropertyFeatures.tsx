interface Props {
  property: {
    amenities: {
      id: string;
      name: string;
    }[];
  };
}

export default function PropertyFeatures({
  property,
}: Props) {
  return (
    <section className="mt-12">

      <h2 className="text-3xl font-bold">
        Features & Amenities
      </h2>

      {property.amenities.length === 0 ? (

        <p className="mt-6 text-gray-500">
          No amenities listed.
        </p>

      ) : (

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {property.amenities.map((amenity) => (

            <div
              key={amenity.id}
              className="rounded-xl border p-4"
            >
              ✓ {amenity.name}
            </div>

          ))}

        </div>

      )}

    </section>
  );
}