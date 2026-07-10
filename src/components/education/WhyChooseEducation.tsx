import {
  CheckCircle2,
  Award,
  Users,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "Experienced Trainers",
    icon: Award,
  },
  {
    title: "Practical Learning",
    icon: Users,
  },
  {
    title: "Quality Assurance",
    icon: ShieldCheck,
  },
  {
    title: "Trusted by Institutions",
    icon: CheckCircle2,
  },
];

export default function WhyChooseEducation() {
  return (
    <section>

      <div className="mb-12">

        <h2 className="text-4xl font-bold">

          Why Choose M Groups

        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {reasons.map((reason) => {

          const Icon = reason.icon;

          return (

            <div
              key={reason.title}
              className="rounded-3xl border p-8 text-center"
            >

              <Icon className="mx-auto mb-5 h-10 w-10 text-primary" />

              <h3 className="font-bold">

                {reason.title}

              </h3>

            </div>

          );

        })}

      </div>

    </section>
  );
}