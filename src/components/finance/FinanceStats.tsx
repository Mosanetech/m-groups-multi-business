import {
  ShieldCheck,
  Calculator,
  FileCheck,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Calculator,
    title: "Accounting",
    description: "Professional bookkeeping and reporting.",
  },
  {
    icon: FileCheck,
    title: "Audit",
    description: "Compliance and internal audit support.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    description: "Financial governance and donor compliance.",
  },
  {
    icon: Users,
    title: "Training",
    description: "Capacity building and financial workshops.",
  },
];

export default function FinanceStats() {
  return (
    <section>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-3xl border p-8 text-center"
            >

              <div className="mx-auto mb-6 inline-flex rounded-full bg-primary/10 p-5">

                <Icon className="h-8 w-8 text-primary" />

              </div>

              <h3 className="text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-3 text-muted-foreground">

                {item.description}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}