import {
  GraduationCap,
  ClipboardCheck,
  Search,
  BookOpen,
} from "lucide-react";

const categories = [
  {
    title: "Professional Development",
    description:
      "Teacher training, leadership development and ICT integration.",
    icon: GraduationCap,
  },
  {
    title: "Assessment & Quality Assurance",
    description:
      "School assessments, examination support and quality reviews.",
    icon: ClipboardCheck,
  },
  {
    title: "Research & Advisory",
    description:
      "Educational research, monitoring, evaluation and policy support.",
    icon: Search,
  },
  {
    title: "Academic Support",
    description:
      "Learning materials development and student academic support.",
    icon: BookOpen,
  },
];

export default function EducationCategories() {
  return (
    <section>

      <div className="mb-12">

        <h2 className="text-4xl font-bold">
          Our Expertise
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {categories.map((category) => {

          const Icon = category.icon;

          return (

            <div
              key={category.title}
              className="rounded-3xl border p-8"
            >

              <div className="mb-6 inline-flex rounded-full bg-primary/10 p-5">

                <Icon className="h-8 w-8 text-primary" />

              </div>

              <h3 className="text-2xl font-bold">
                {category.title}
              </h3>

              <p className="mt-4 text-muted-foreground">
                {category.description}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}