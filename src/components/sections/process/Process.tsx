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
    <section className="bg-muted/30 py-24">

      <div className="container mx-auto">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <h2 className="text-5xl font-bold">
            How We Work
          </h2>

        </div>

        <div className="grid gap-10 md:grid-cols-3">

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