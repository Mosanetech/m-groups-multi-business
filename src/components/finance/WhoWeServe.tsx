import {
  Building2,
  Landmark,
  GraduationCap,
  Church,
  BriefcaseBusiness,
  User,
} from "lucide-react";

const clients = [
  {
    title: "Small & Medium Businesses",
    icon: BriefcaseBusiness,
  },
  {
    title: "NGOs & Donor Projects",
    icon: Landmark,
  },
  {
    title: "Government Institutions",
    icon: Building2,
  },
  {
    title: "Schools & Universities",
    icon: GraduationCap,
  },
  {
    title: "Churches & Faith Organisations",
    icon: Church,
  },
  {
    title: "Individuals & Entrepreneurs",
    icon: User,
  },
];

export default function WhoWeServe() {
  return (
    <section>

      <div className="mb-12">

        <h2 className="text-4xl font-bold">
          Who We Serve
        </h2>

        <p className="mt-3 text-muted-foreground">
          We provide financial and accounting services across different sectors.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {clients.map((client) => {

          const Icon = client.icon;

          return (

            <div
              key={client.title}
              className="rounded-3xl border p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-4">

                <Icon className="h-8 w-8 text-primary" />

              </div>

              <h3 className="text-xl font-bold">

                {client.title}

              </h3>

            </div>

          );

        })}

      </div>

    </section>
  );
}