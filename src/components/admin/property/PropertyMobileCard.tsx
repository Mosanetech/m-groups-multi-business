"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Eye,
  Pencil,
  Trash2,
  MapPin,
} from "lucide-react";

import FeaturedBadge from "./FeaturedBadge";
import StatusBadge from "./StatusBadge";
import DeletePropertyButton from "./DeletePropertyButton";

interface Props {
  property: any;
}

export default function PropertyMobileCard({
  property,
}: Props) {
  const image =
    property.images?.[0]?.image ??
    "/images/property-placeholder.jpg";

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">

      <div className="flex gap-4">

        <div className="relative h-24 w-24 overflow-hidden rounded-xl">

          <Image
            src={image}
            alt={property.title}
            fill
            className="object-cover"
          />

        </div>

        <div className="min-w-0 flex-1">

          <h3 className="truncate text-lg font-bold text-gray-900">
            {property.title}
          </h3>

          <p className="mt-1 flex items-center gap-1 text-sm text-gray-600">
            <MapPin size={15} />
            {property.city}
          </p>

          <p className="mt-2 text-xl font-bold">
            MK {property.price.toLocaleString()}
          </p>

        </div>

      </div>

      <div className="mt-5 flex flex-wrap gap-2">

        <StatusBadge
          status={property.status}
        />

        <FeaturedBadge
          featured={property.featured}
        />

      </div>

      <div className="mt-4 text-sm text-gray-600">
        Views: <strong>{property.views}</strong>
      </div>

      <div className="mt-6 flex gap-2">

        <Link
          href={`/services/real-estate/${property.slug}`}
          target="_blank"
          className="flex flex-1 items-center justify-center rounded-lg border px-3 py-2 hover:bg-gray-100"
        >
          <Eye size={18} />
        </Link>

        <Link
          href={`/admin/properties/${property.id}`}
          className="flex flex-1 items-center justify-center rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          <Pencil size={18} />
        </Link>

        <div className="flex-1">
          <DeletePropertyButton
            id={property.id}
          />
        </div>

      </div>

    </div>
  );
}