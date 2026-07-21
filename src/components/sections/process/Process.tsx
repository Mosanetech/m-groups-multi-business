import ProcessStep from "./ProcessStep";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    description: "Tell us what you need.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Our experts prepare the best solution.",
  },
  {
    number: "03",
    title: "Delivery",
    description: "We execute and deliver quality results.",
  },
];

export default function Process() {
  return (
    <section className="bg-background py-16 lg:py-24">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            How We Work
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {STEPS.map((step) => (
            <ProcessStep
              key={step.number}
              {...step}
            />
          ))}

        </div>

      </div>

    </section>
  );
}