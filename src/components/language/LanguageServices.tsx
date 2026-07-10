import { LANGUAGE_SERVICES } from "@/config/language-services";

export default function LanguageServices() {
  return (
    <section>

      <div className="mb-12">

        <h2 className="text-4xl font-bold">
          Our Language Services
        </h2>

        <p className="mt-3 text-muted-foreground">
          Professional language solutions for individuals, businesses and institutions.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {LANGUAGE_SERVICES.map((service) => {

          const Icon = service.icon;

          return (

            <div
              key={service.title}
              className="rounded-3xl border p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4">

                <Icon className="h-8 w-8 text-primary" />

              </div>

              <h3 className="text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-muted-foreground leading-7">
                {service.description}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}