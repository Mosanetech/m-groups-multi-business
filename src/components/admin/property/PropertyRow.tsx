import Link from "next/link";
import Image from "next/image";

import { Property } from "@prisma/client";

import DeletePropertyButton from "./DeletePropertyButton";
import StatusBadge from "./StatusBadge";

interface Props {
  property: Property & {
    images?: {
      image: string;
    }[];
  };
}

export default function PropertyRow({
  property,
}: Props) {
  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">

      <td className="p-4">
        {property.images?.[0] ? (
          <Image
            src={property.images[0].image}
            alt={property.title}
            width={90}
            height={70}
            className="rounded-lg object-cover"
          />
        ) : (
          <div className="flex h-[70px] w-[90px] items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-500">
            No image
          </div>
        )}
      </td>

      <td className="font-medium">
        {property.title}
      </td>

      <td>{property.city}</td>

      <td>
        MK {property.price.toLocaleString()}
      </td>

      <td>
        <StatusBadge status={property.status} />
      </td>

      <td>
        {property.featured ? "⭐" : "-"}
      </td>

      <td>{property.views}</td>

      <td className="space-x-3 whitespace-nowrap">

        <Link
          href={`/admin/properties/${property.id}`}
          className="text-green-600 hover:underline"
        >
          View
        </Link>

        <Link
          href={`/admin/properties/${property.id}/edit`}
          className="text-blue-600 hover:underline"
        >
          Edit
        </Link>

        <DeletePropertyButton
          id={property.id}
        />

      </td>

    </tr>
  );
}