import PageHero from "@/components/shared/page-hero/PageHero";
import About from "@/components/sections/about/About";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Learn more about M Groups, our mission, vision and commitment to delivering professional services across multiple industries."
      />

      <About />
    </>
  );
}