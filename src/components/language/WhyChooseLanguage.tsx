import {
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Languages,
} from "lucide-react";

const reasons = [
  {
    icon: Languages,
    title: "Professional Linguists",
    description:
      "Experienced translators and interpreters across multiple languages.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentiality",
    description:
      "Sensitive documents are handled securely and professionally.",
  },
  {
    icon: Clock3,
    title: "Fast Turnaround",
    description:
      "Projects are delivered on time without compromising quality.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description:
      "Every translation undergoes proofreading and review before delivery.",
  },
];

export default function WhyChooseLanguage() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-4xl font-bold">
          Why Choose M Groups
        </h2>

        <p className="mt-3 text-foreground/80">
          Reliable language services tailored for businesses, institutions and individuals.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {reasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <div
              key={reason.title}
              className="rounded-3xl border p-8"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold">
                {reason.title}
              </h3>

              <p className="mt-4 text-foreground/80">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}