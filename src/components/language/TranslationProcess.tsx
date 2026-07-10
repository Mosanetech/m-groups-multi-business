import {
  ClipboardList,
  Languages,
  SearchCheck,
  Send,
} from "lucide-react";

const steps = [
  {
    title: "Submit Request",
    icon: ClipboardList,
  },
  {
    title: "Translation",
    icon: Languages,
  },
  {
    title: "Quality Review",
    icon: SearchCheck,
  },
  {
    title: "Delivery",
    icon: Send,
  },
];

export default function TranslationProcess() {
  return (
    <section>

      <div className="mb-12">

        <h2 className="text-4xl font-bold">
          Our Translation Process
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (

            <div
              key={step.title}
              className="rounded-3xl border p-8 text-center"
            >

              <div className="mb-5 text-sm font-bold text-primary">

                Step {index + 1}

              </div>

              <div className="mb-5 inline-flex rounded-full bg-primary/10 p-5">

                <Icon className="h-8 w-8 text-primary" />

              </div>

              <h3 className="text-xl font-bold">

                {step.title}

              </h3>

            </div>

          );

        })}

      </div>

    </section>
  );
}