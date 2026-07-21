import PropertyRow from "./PropertyRow";
import PropertyMobileCard from "./PropertyMobileCard";

interface Props {
  properties: any[];
}

export default function PropertyTable({
  properties,
}: Props) {
  return (
    <>
      {/* Mobile */}

      <div className="space-y-4 md:hidden">
        {properties.map((property) => (
          <PropertyMobileCard
            key={property.id}
            property={property}
          />
        ))}
      </div>

      {/* Desktop */}

      <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">City</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
              <th className="p-4">Featured</th>
              <th className="p-4">Views</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((property) => (
              <PropertyRow
                key={property.id}
                property={property}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}