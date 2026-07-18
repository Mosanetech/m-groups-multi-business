import Service from "@/components/sections/services/Service";
import PageHero from "@/components/shared/page-hero/PageHero";
import Breadcrumb from "@/components/shared/breadcrumb/Breadcrumb";
import CTASection from "@/components/shared/CTASection";

export default function ServicesPage() {
  return (
    <>
      <section className="container mx-auto pt-10">
        <Breadcrumb
          items={[
            {
              label: "Services",
            },
          ]}
        />
      </section>

      <PageHero
        badge="M Groups"
        title="Our Professional Services"
        description="We provide Real Estate, ICT Solutions, Financial Services and Professional Training under one trusted brand."
      />

      <section className="container mx-auto py-20">
        <Service />
      </section>

      <div className="container mx-auto pb-20">
        <CTASection />
      </div>
    </>
  );
}