import Hero from "@/components/sections/hero";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Service";
import FeaturedProperties from "@/components/real-estate/FeaturedProperties";
import WhyChoose from "@/components/sections/why-choose/WhyChoose";
import Process from "@/components/sections/process/Process";
import Projects from "@/components/sections/projects/Projects";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Partners from "@/components/sections/partners/Partners";
import CTA from "@/components/sections/cta/CTA";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="space-y-28 lg:space-y-36">

        <About />

        <Services />

        <FeaturedProperties />

        <WhyChoose />

        <Process />

        <Projects />

        <Testimonials />

        <Partners />

        <CTA />

      </div>
    </>
  );
}