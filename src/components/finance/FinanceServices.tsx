import { CheckCircle2 } from "lucide-react";
import { FINANCE_SERVICES } from "@/config/finance-services";

export default function FinanceServices() {
  return (
    <section>

      <div className="mb-12">

        <h2 className="text-4xl font-bold">
          Our Finance Services
        </h2>

        <p className="mt-3 text-foreground/80">
          Professional financial management and advisory solutions for businesses,
          NGOs, institutions and government organizations.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {FINANCE_SERVICES.map((category) => {

          const Icon = category.icon;

          return (

            <div
              key={category.title}
              className="rounded-3xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4">

                <Icon className="h-8 w-8 text-primary" />

              </div>

              <h3 className="text-2xl font-bold">
                {category.title}
              </h3>

              <div className="mt-6 space-y-4">

                {category.services.map((service) => (

                  <div
                    key={service}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      className="text-primary"
                      size={18}
                    />

                    {service}

                  </div>

                ))}

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}