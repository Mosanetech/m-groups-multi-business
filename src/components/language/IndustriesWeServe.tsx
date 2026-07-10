import {
  Building2,
  GraduationCap,
  Landmark,
  BriefcaseBusiness,
  HeartPulse,
  Scale,
} from "lucide-react";

const industries = [
  {
    title: "Government",
    icon: Building2,
  },
  {
    title: "NGOs",
    icon: Landmark,
  },
  {
    title: "Education",
    icon: GraduationCap,
  },
  {
    title: "Business",
    icon: BriefcaseBusiness,
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
  },
  {
    title: "Legal Services",
    icon: Scale,
  },
];

export default function IndustriesWeServe() {
  return (
    <section>

      <div className="mb-12">

        <h2 className="text-4xl font-bold">
          Industries We Serve
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {industries.map((industry) => {

          const Icon = industry.icon;

          return (

            <div
              key={industry.title}
              className="rounded-3xl border p-8 text-center"
            >

              <div className="mb-6 inline-flex rounded-full bg-primary/10 p-5">

                <Icon className="h-8 w-8 text-primary" />

              </div>

              <h3 className="text-xl font-bold">

                {industry.title}

              </h3>

            </div>

          );

        })}

      </div>

    </section>
  );
}