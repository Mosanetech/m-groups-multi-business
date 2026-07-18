import PageHeader from "@/components/shared/page-header/PageHeader";
import CTASection from "@/components/shared/CTASection";

import EducationServices from "@/components/education/EducationServices";
import EducationCategories from "@/components/education/EducationCategories";
import TrainingPrograms from "@/components/education/TrainingPrograms";
import InstitutionsWeServe from "@/components/education/InstitutionsWeServe";
import WhyChooseEducation from "@/components/education/WhyChooseEducation";

export default function EducationPage() {
  return (
    <>
      <PageHeader
        items={[
          {
            label: "Services",
            href: "/services",
          },
          {
            label: "Education",
          },
        ]}
        badge="M Groups Education"
        title="Education & Professional Development"
        description="Training, research, quality assurance and academic support services."
      />

      <section className="py-20">

        <div className="container mx-auto space-y-24">

          <EducationServices />

          <EducationCategories />

          <TrainingPrograms />

          <InstitutionsWeServe />

          <WhyChooseEducation />

        </div>

      </section>

      <div className="container mx-auto">

        <CTASection />

      </div>
    </>
  );
}