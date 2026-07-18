import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/shared/page-header/PageHeader";

import PropertyGallery from "@/components/real-estate/PropertyGallery";
import PropertyInfo from "@/components/real-estate/PropertyInfo";
import PropertyFeatures from "@/components/real-estate/PropertyFeatures";
import RelatedProperties from "@/components/real-estate/RelatedProperties";
import ContactAgent from "@/components/real-estate/ContactAgent";
import RequestViewingForm from "@/components/real-estate/RequestViewingForm";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyPage({
  params,
}: Props) {

  const { slug } = await params;

  const property =
    await prisma.property.findUnique({

      where: {
        slug,
      },

      include: {
        images: true,
        amenities: true,
      },

    });

  if (!property) {
    notFound();
  }

  return (
    <>

      <PageHeader
        items={[
          {
            label: "Services",
            href: "/services",
          },
          {
            label: "Real Estate",
            href: "/services/real-estate",
          },
          {
            label: property.title,
          },
        ]}
        badge="Property Details"
        title={property.title}
        description={`${property.location}, ${property.city}`}
      />

      <main className="container mx-auto py-16">

        <PropertyGallery
          property={property}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-3">

          <div className="lg:col-span-2 space-y-10">

            <PropertyInfo
              property={property}
            />

            <PropertyFeatures
              property={property}
            />

            <RequestViewingForm
              propertyId={property.id}
            />

          </div>

          <ContactAgent />

        </div>

        <RelatedProperties
          currentId={property.id}
        />

      </main>

    </>
  );

}