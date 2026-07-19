import { prisma } from "@/lib/prisma";

export default async function FeaturedProperties() {
  const count = await prisma.property.count();

  return (
    <section className="py-20">
      <h1 className="text-5xl font-bold">
        Total Properties: {count}
      </h1>
    </section>
  );
}