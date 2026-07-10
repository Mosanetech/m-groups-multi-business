import { CheckCircle2 } from "lucide-react";

import { Property } from "@/types/property";

interface Props {
  property: Property;
}

export default function PropertyFeatures({
  property,
}: Props) {

  return (

    <section className="mt-16">

      <h2 className="mb-8 text-3xl font-bold">

        Property Features

      </h2>

      <div className="grid gap-4 sm:grid-cols-2">

        {property.amenities.map((feature) => (

          <div
            key={feature}
            className="flex items-center gap-3 rounded-xl border p-4"
          >

            <CheckCircle2 className="text-primary" />

            <span>{feature}</span>

          </div>

        ))}

      </div>

    </section>

  );
}