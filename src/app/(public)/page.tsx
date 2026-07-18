
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Service";
import WhyChoose from "@/components/sections/why-choose/WhyChoose";
import Process from "@/components/sections/process/Process";
import CTA from "@/components/sections/cta/CTA";
import Projects from "@/components/sections/projects/Projects";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Partners from "@/components/sections/partners/Partners";
import FeaturedProperties
from "@/components/real-estate/FeaturedProperties";

export default function Home() {
  return (
    <>
      

      <Hero />

      <About />

      <Services />

      <FeaturedProperties />

      <WhyChoose />

      <Process />

      <Projects />

      {/* <LatestBlogs /> */}

     {/* <FAQSection /> */}

      <Testimonials />

      <Partners />

      <CTA />

      
    </>
  );
}