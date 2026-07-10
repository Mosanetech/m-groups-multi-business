import { notFound } from "next/navigation";

import { PROPERTIES } from "@/config/properties";

import PropertyGallery from "@/components/real-estate/PropertyGallery";
import PropertyInfo from "@/components/real-estate/PropertyInfo";
import PropertyFeatures from "@/components/real-estate/PropertyFeatures";
import PropertyLocation from "@/components/real-estate/PropertyLocation";
import ContactAgent from "@/components/real-estate/ContactAgent";
import RelatedProperties from "@/components/real-estate/RelatedProperties";
import RequestViewingForm from "@/components/real-estate/RequestViewingForm";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyDetailsPage({
  params,
}: Props) {

  const { slug } = await params;

  const property = PROPERTIES.find(
    p => p.slug === slug
  );

  if (!property) {
    notFound();
  }

  return (
    <main className="container mx-auto py-16">

      <PropertyGallery property={property} />

      <div className="mt-16 grid gap-12 lg:grid-cols-3">

        <div className="lg:col-span-2">

          <PropertyInfo property={property} />

          <PropertyFeatures property={property} />

          <RequestViewingForm />

          <PropertyLocation property={property} />

        </div>

        <ContactAgent />

      </div>

      <RelatedProperties
        currentSlug={property.slug}
      />

    </main>
  );
}