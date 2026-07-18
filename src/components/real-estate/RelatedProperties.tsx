import Link from "next/link";
import Image from "next/image";

import { prisma } from "@/lib/prisma";

interface Props {
  currentId: string;
}

export default async function RelatedProperties({
  currentId,
}: Props) {

  const properties =
    await prisma.property.findMany({

      where: {
        NOT: {
          id: currentId,
        },
      },

      include: {
        images: true,
      },

      take: 3,

      orderBy: {
        createdAt: "desc",
      },

    });

  if (properties.length === 0) {
    return null;
  }

  return (

    <section className="mt-20">

      <h2 className="mb-8 text-3xl font-bold">
        Related Properties
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        {properties.map((property) => (

          <Link
            key={property.id}
            href={`/services/real-estate/${property.slug}`}
            className="overflow-hidden rounded-2xl border"
          >

            <div className="relative h-60">

              <Image
                src={
                  property.images[0]?.image ??
                  "/placeholder-property.jpg"
                }
                alt={property.title}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-5">

              <h3 className="font-bold">
                {property.title}
              </h3>

              <p className="mt-2 text-gray-500">
                MWK {property.price.toLocaleString()}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

}