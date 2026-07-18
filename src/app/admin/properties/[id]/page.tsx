import { notFound } from "next/navigation";

import { getProperty } from "@/actions/property";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const property = await getProperty(id);

  if (!property) {
    notFound();
  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          {property.title}
        </h1>

        <p className="text-gray-500">
          {property.city} • {property.location}
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div>

         {(property.images ?? []).length > 0 && (

            <img
                src={property.images?.[0]?.image}
                className="w-full rounded-xl"
            />

            )}
        </div>

        <div className="space-y-4">

          <p>

            <strong>Price:</strong>

            {" "}MK {property.price.toLocaleString()}

          </p>

          <p>

            <strong>Status:</strong>

            {" "}

            {property.status}

          </p>

          <p>

            <strong>Bedrooms:</strong>

            {" "}

            {property.bedrooms}

          </p>

          <p>

            <strong>Bathrooms:</strong>

            {" "}

            {property.bathrooms}

          </p>

          <p>

            <strong>Area:</strong>

            {" "}

            {property.area}㎡

          </p>

          <p>

            <strong>Description</strong>

          </p>

          <p className="text-gray-600">
            {property.description}
          </p>

        </div>

      </div>

    </div>

  );
}