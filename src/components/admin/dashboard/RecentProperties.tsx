interface Props {
  properties: any[];
}

export default function RecentProperties({
  properties,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Recent Properties
      </h2>

      <div className="space-y-4">

        {properties.length === 0 ? (
          <p className="text-gray-500">
            No properties found.
          </p>
        ) : (
          properties.map(property => (
            <div
              key={property.id}
              className="flex justify-between border-b pb-3"
            >
              <div>

                <h3 className="font-semibold">
                  {property.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {property.city}
                </p>

              </div>

              <span className="font-semibold">
                {property.status}
              </span>

            </div>
          ))
        )}

      </div>

    </div>
  );
}