import {
  GraduationCap,
  Users,
  School,
  ClipboardCheck,
  FileSearch,
  BookOpen,
  Presentation,
  Brain,
} from "lucide-react";

const services = [
  {
    title: "Teacher Professional Development",
    icon: GraduationCap,
  },
  {
    title: "School Management Capacity Building",
    icon: Users,
  },
  {
    title: "Educational ICT Integration",
    icon: School,
  },
  {
    title: "Guidance & Counselling Training",
    icon: Brain,
  },
  {
    title: "Assessment Services",
    icon: ClipboardCheck,
  },
  {
    title: "Education Research",
    icon: FileSearch,
  },
  {
    title: "Learning Materials Development",
    icon: BookOpen,
  },
  {
    title: "Educational Workshops",
    icon: Presentation,
  },
];

export default function EducationServices() {
  return (
    <section>

      <div className="mb-12">

        <h2 className="text-4xl font-bold">
          Education Services
        </h2>

        <p className="mt-3 text-foreground/80">
          Helping schools, universities, NGOs and institutions improve learning outcomes.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {services.map((service) => {

          const Icon = service.icon;

          return (

            <div
              key={service.title}
              className="rounded-3xl border p-8 text-center transition hover:-translate-y-2 hover:shadow-lg"
            >

              <div className="mb-5 inline-flex rounded-full bg-primary/10 p-5">

                <Icon className="h-8 w-8 text-primary" />

              </div>

              <h3 className="font-bold">
                {service.title}
              </h3>

            </div>

          );

        })}

      </div>

    </section>
  );
}