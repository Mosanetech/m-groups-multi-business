import PageHeader from "@/components/shared/page-header/PageHeader";
import CTASection from "@/components/shared/CTASection";

import ICTServices from "@/components/ict/ICTServices";
import FeaturedProjects from "@/components/ict/FeaturedProjects";
import ProjectGrid from "@/components/ict/ProjectGrid";

export default function ICTPage() {
  return (
    <>
      <PageHeader
        items={[
          {
            label: "Services",
            href: "/services",
          },
          {
            label: "ICT",
          },
        ]}
        badge="M Groups ICT"
        title="Technology Solutions"
        description="Professional ICT services, software development, networking and digital transformation."
      />

      <section className="py-20">

        <div className="container mx-auto space-y-20">

          <ICTServices />

          <FeaturedProjects />

          <ProjectGrid />

        </div>

      </section>

      <div className="container mx-auto">

        <CTASection />

      </div>

    </>
  );
}