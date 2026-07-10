import { Property } from "@/types/property";
import {
  BedDouble,
  Bath,
  Car,
  Ruler,
  MapPin,
} from "lucide-react";

interface Props {
  property: Property;
}

export default function PropertyInfo({
  property,
}: Props) {
  return (
    <section>

      <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
        {property.status}
      </span>

      <h1 className="mt-6 text-5xl font-bold">
        {property.title}
      </h1>

      <p className="mt-4 flex items-center gap-2 text-muted-foreground">

        <MapPin size={18} />

        {property.location}, {property.city}

      </p>

      <h2 className="mt-8 text-4xl font-bold text-primary">
        MK {property.price.toLocaleString()}
      </h2>

      <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">

        <div className="rounded-2xl border p-5">

          <BedDouble />

          <p className="mt-3 font-semibold">
            {property.bedrooms} Bedrooms
          </p>

        </div>

        <div className="rounded-2xl border p-5">

          <Bath />

          <p className="mt-3 font-semibold">
            {property.bathrooms} Bathrooms
          </p>

        </div>

         <div className="rounded-2xl border p-5">

          <Car />

          <p className="mt-3 font-semibold">

            {property.parking} Parking

          </p>

</div>

        <div className="rounded-2xl border p-5">

          <Ruler />

          <p className="mt-3 font-semibold">
            {property.area} m²
          </p>

        </div>

      </div>

      <p className="mt-10 leading-8 text-muted-foreground">
        {property.description}
      </p>

    </section>
  );
}