import {
  School,
  GraduationCap,
  Building2,
  Landmark,
  Briefcase,
  Globe,
} from "lucide-react";

const institutions = [
  { title: "Primary Schools", icon: School },
  { title: "Secondary Schools", icon: GraduationCap },
  { title: "Universities", icon: Building2 },
  { title: "Government", icon: Landmark },
  { title: "NGOs", icon: Globe },
  { title: "Private Companies", icon: Briefcase },
];

export default function InstitutionsWeServe() {
  return (
    <section>

      <div className="mb-12">

        <h2 className="text-4xl font-bold">

          Institutions We Serve

        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {institutions.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-3xl border p-8 text-center"
            >

              <Icon className="mx-auto mb-5 h-10 w-10 text-primary" />

              <h3 className="font-bold">

                {item.title}

              </h3>

            </div>

          );

        })}

      </div>

    </section>
  );
}