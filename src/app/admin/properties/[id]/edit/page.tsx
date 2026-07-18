import { notFound } from "next/navigation";

import { getProperty } from "@/actions/property";

import PropertyForm from "@/components/admin/property/PropertyForm";

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const property = await getProperty(id);

  if (!property) {
    notFound();
  }

  return (

    <div>

      <h1 className="mb-8 text-3xl font-bold">

        Edit Property

      </h1>

      <PropertyForm property={property} />

    </div>

  );

}