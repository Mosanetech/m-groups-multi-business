import PageHeader from "@/components/shared/page-header/PageHeader";
import CTASection from "@/components/shared/CTASection";

import PropertyGrid from "@/components/real-estate/PropertyGrid";
import FeaturedProperties from "@/components/real-estate/FeaturedProperties";
import RecentlyAdded from "@/components/real-estate/RecentlyAdded";
import ListPropertyForm from "@/components/real-estate/ListPropertyForm";

export default function RealEstatePage() {
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
          },
        ]}
        badge="M Groups Real Estate"
        title="Find Your Next Property"
        description="Browse verified houses, apartments, commercial buildings and land across Malawi."
      />

      <section className="py-20">
        <div className="container mx-auto space-y-20">

          <PropertyGrid />

          <FeaturedProperties />

          <RecentlyAdded />

          <ListPropertyForm />

        </div>
      </section>

      <div className="container mx-auto">
        <CTASection />
      </div>
    </>
  );
}