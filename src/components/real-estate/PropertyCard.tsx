import Image from "next/image";
import Link from "next/link";

import {
  BedDouble,
  Bath,
  MapPin,
  Ruler,
  ArrowRight,
} from "lucide-react";

import { Property } from "@prisma/client";

import PropertyStatusBadge from "./PropertyStatusBadge";

interface Props {

  property: Property & {

    images: {
      image: string;
    }[];

  };

}

export default function PropertyCard({
  property,
}: Props) {

  const image =
    property.images[0]?.image ??
    "/images/property-placeholder.jpg";

  return (

    <div className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={property.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <PropertyStatusBadge
          status={property.status}
        />

      </div>

      <div className="p-6">

        <p className="text-3xl font-bold text-black">

          MK {property.price.toLocaleString()}

        </p>

        <h3 className="mt-3 text-2xl font-bold">

          {property.title}

        </h3>

        <div className="mt-3 flex items-center gap-2 text-foreground/80">

          <MapPin size={18} />

          {property.location}, {property.city}

        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">

          <div className="flex items-center gap-2">

            <BedDouble size={18} />

            {property.bedrooms}

          </div>

          <div className="flex items-center gap-2">

            <Bath size={18} />

            {property.bathrooms}

          </div>

          <div className="flex items-center gap-2">

            <Ruler size={18} />

            {property.area} m²

          </div>

        </div>

        <Link
        href={`/services/real-estate/${property.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-black"
        >

          View Details

          <ArrowRight size={18} />

        </Link>

      </div>

    </div>

  );

}