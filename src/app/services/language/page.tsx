import PageHeader from "@/components/shared/page-header/PageHeader";
import CTASection from "@/components/shared/CTASection";

import LanguageServices from "@/components/language/LanguageServices";
import LanguagesSupported from "@/components/language/LanguagesSupported";
import TranslationProcess from "@/components/language/TranslationProcess";
import IndustriesWeServe from "@/components/language/IndustriesWeServe";
import WhyChooseLanguage from "@/components/language/WhyChooseLanguage";

export default function LanguagePage() {
  return (
    <>
      <PageHeader
        items={[
          {
            label: "Services",
            href: "/services",
          },
          {
            label: "Language",
          },
        ]}
        badge="M Groups Language Division"
        title="Professional Language Services"
        description="Translation, interpretation, sign language, transcription, editing, proofreading and language training."
      />

      <section className="py-20">

        <div className="container mx-auto space-y-24">

          <LanguageServices />

          <LanguagesSupported />

          <TranslationProcess />

          <IndustriesWeServe />

          <WhyChooseLanguage />

        </div>

      </section>

      <div className="container mx-auto">

        <CTASection />

      </div>
    </>
  );
}