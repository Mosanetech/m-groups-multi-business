"use client";

interface Property {
  latitude: number;
  longitude: number;
}

interface Props {
  property: Property;
}

export default function PropertyLocation({
  property,
}: Props) {
  const src = `https://maps.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`;

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold">
        Property Location
      </h2>

      <iframe
        src={src}
        width="100%"
        height="450"
        loading="lazy"
        className="rounded-3xl border"
      />
    </section>
  );
}