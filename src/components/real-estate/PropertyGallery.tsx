"use client";

import { useState } from "react";
import Image from "next/image";
import { Property } from "@/types/property";

interface Props {
  property: Property;
}

export default function PropertyGallery({ property }: Props) {
  const [selected, setSelected] = useState(property.gallery[0]);

  return (
    <section>

      <div className="relative h-[500px] overflow-hidden rounded-3xl">

        <Image
          src={selected}
          alt={property.title}
          fill
          className="object-cover"
        />

      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">

        {property.gallery.map((image) => (

          <button
            key={image}
            onClick={() => setSelected(image)}
            className={`relative h-28 overflow-hidden rounded-2xl border-2 transition ${
              selected === image
                ? "border-primary"
                : "border-transparent"
            }`}
          >

            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
            />

          </button>

        ))}

      </div>

    </section>
  );
}