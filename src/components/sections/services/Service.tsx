import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/config/hero-slides";
import { BUSINESS_SERVICES } from "@/config/business-services";
export default function Services() {
    return (
        <section className="bg-muted/30 py-24">

            <div className="container mx-auto">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                        Our Services
                    </span>

                    <h2 className="mt-6 text-5xl font-bold">
                        Everything You Need
                        Under One Brand
                    </h2>

                    <p className="mt-6 text-lg text-muted-foreground">
                        Explore our professional
                        business divisions designed
                        to serve individuals,
                        organizations and businesses.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {BUSINESS_SERVICES.map((service) => (

                        <ServiceCard
                            key={service.title}
                            {...service}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}