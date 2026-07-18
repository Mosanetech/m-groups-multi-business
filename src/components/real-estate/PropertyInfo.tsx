import { PropertyStatus } from "@prisma/client";

import {

  BedDouble,
  Bath,
  Ruler,
  MapPin,

} from "lucide-react";

import PropertyStatusBadge from "./PropertyStatusBadge";

interface Props {

  property: {

    title: string;

    city: string;

    location: string;

    price: number;

    bedrooms: number;

    bathrooms: number;

    area: number;

    description: string;

    status: PropertyStatus;

  };

}

export default function PropertyInfo({
  property,
}: Props) {

  return (

    <section>

      <PropertyStatusBadge
        status={property.status}
      />

      <h1 className="mt-6 text-5xl font-bold">

        {property.title}

      </h1>

      <div className="mt-4 flex items-center gap-2 text-gray-500">

        <MapPin size={18} />

        {property.location}, {property.city}

      </div>

      <h2 className="mt-8 text-4xl font-bold">

        MWK {property.price.toLocaleString()}

      </h2>

      <div className="mt-10 grid grid-cols-3 gap-6">

        <div className="rounded-xl border p-5">

          <BedDouble />

          <p className="mt-2">

            {property.bedrooms} Bedrooms

          </p>

        </div>

        <div className="rounded-xl border p-5">

          <Bath />

          <p className="mt-2">

            {property.bathrooms} Bathrooms

          </p>

        </div>

        <div className="rounded-xl border p-5">

          <Ruler />

          <p className="mt-2">

            {property.area} m²

          </p>

        </div>

      </div>

      <p className="mt-10 leading-8 text-gray-600">

        {property.description}

      </p>

    </section>

  );

}