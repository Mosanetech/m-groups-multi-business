import PropertyRow from "./PropertyRow";

interface Props {
  properties: any[];
}

export default function PropertyTable({
  properties,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">
              Image
            </th>

            <th className="text-left">
              Title
            </th>

            <th className="text-left">
              City
            </th>

            <th className="text-left">
              Price
            </th>

            <th className="text-left">
              Status
            </th>

            <th className="text-left">
              Featured
            </th>

            <th className="text-left">
              Views
            </th>

            <th className="text-left">
              Actions
            </th>

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
  );
}