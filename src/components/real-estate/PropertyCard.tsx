import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, MapPin, Ruler, ArrowRight } from "lucide-react";
import { Property } from "@/types/property";
import PropertyStatusBadge from "./PropertyStatusBadge";

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}

      <div className="relative h-72 overflow-hidden">

        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <PropertyStatusBadge
    status={property.status}
      />

      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-3xl font-bold text-primary">
         MK {property.price.toLocaleString()}
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          {property.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-muted-foreground">

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
          className="mt-8 inline-flex items-center gap-2 font-semibold text-primary"
        >
          View Details
          <ArrowRight size={18} />
        </Link>

      </div>

    </div>
  );
}