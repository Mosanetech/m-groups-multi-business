import {
  Presentation,
  Laptop,
  Users,
  BookOpen,
} from "lucide-react";

const programs = [
  {
    title: "Teacher Professional Development",
    icon: Presentation,
  },
  {
    title: "Educational ICT Training",
    icon: Laptop,
  },
  {
    title: "School Leadership Training",
    icon: Users,
  },
  {
    title: "Student Academic Support",
    icon: BookOpen,
  },
];

export default function TrainingPrograms() {
  return (
    <section>

      <div className="mb-12">

        <h2 className="text-4xl font-bold">
          Training Programs
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {programs.map((program) => {

          const Icon = program.icon;

          return (

            <div
              key={program.title}
              className="rounded-3xl border p-8 text-center"
            >

              <div className="mb-5 inline-flex rounded-full bg-primary/10 p-5">

                <Icon className="h-8 w-8 text-primary" />

              </div>

              <h3 className="font-bold">

                {program.title}

              </h3>

            </div>

          );

        })}

      </div>

    </section>
  );
}