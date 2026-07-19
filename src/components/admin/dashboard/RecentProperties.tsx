interface Props {
  properties: any[];
}

export default function RecentProperties({
  properties,
}: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Recent Properties
      </h2>

      <div className="space-y-4">

        {properties.length === 0 ? (
          <p className="text-gray-500">
            No properties found.
          </p>
        ) : (
          properties.map((property) => (
            <div
              key={property.id}
              className="flex items-center justify-between border-b border-gray-100 pb-4"
            >
              <div>

                <h3 className="font-semibold text-gray-900">
                  {property.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {property.city}
                </p>

              </div>

             <span
              className={`
                rounded-full
                px-3
                py-1
                text-xs
                font-semibold
                ${
                  property.status === "FOR_SALE"
                    ? "bg-green-100 text-green-700"
                    : property.status === "TO_LET"
                    ? "bg-blue-100 text-blue-700"
                    : property.status === "SOLD"
                    ? "bg-gray-200 text-gray-700"
                    : "bg-orange-100 text-orange-700"
                }
              `}
            >
              {property.status.replace("_", " ")}
            </span>

            </div>
          ))
        )}

      </div>

    </div>
  );
}