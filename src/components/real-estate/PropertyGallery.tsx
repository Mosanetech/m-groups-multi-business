"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {

  property: {
    title: string;

    images: {
      image: string;
    }[];
  };

}

export default function PropertyGallery({
  property,
}: Props) {

  const images =
    property.images.length
      ? property.images
      : [{ image: "/placeholder-property.jpg" }];

  const [selected, setSelected] =
    useState(images[0].image);

  return (

    <section>

      <div className="relative h-[520px] overflow-hidden rounded-3xl">

        <Image
          src={selected}
          alt={property.title}
          fill
          className="object-cover"
        />

      </div>

      <div className="mt-5 grid grid-cols-4 gap-4">

        {

          images.map((image) => (

            <button
              key={image.image}
              onClick={() => setSelected(image.image)}
              className="relative h-28 overflow-hidden rounded-xl"
            >

              <Image
                src={image.image}
                alt=""
                fill
                className="object-cover"
              />

            </button>

          ))

        }

      </div>

    </section>

  );

}