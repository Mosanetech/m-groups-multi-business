import { prisma } from "@/lib/prisma";

import TestimonialCard from "./TestimonialCard";

export default async function Testimonials() {

  const testimonials =
    await prisma.testimonial.findMany({

      where: {
        featured: true,
      },

      take: 6,

      orderBy: {
        createdAt: "desc",
      },

    });

  return (

    <section className="bg-muted/30 py-24">

      <div className="container mx-auto">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">

            What Clients Say

          </h2>

        </div>

        {

          testimonials.length === 0 ? (

            <div className="rounded-2xl border p-10 text-center">

              No testimonials available.

            </div>

          ) : (

            <div className="grid gap-8 lg:grid-cols-3">

              {

                testimonials.map((testimonial) => (

                  <TestimonialCard

                    key={testimonial.id}

                    name={testimonial.name}

                    role={testimonial.position ?? ""}

                    message={testimonial.message}

                  />

                ))

              }

            </div>

          )

        }

      </div>

    </section>

  );

}