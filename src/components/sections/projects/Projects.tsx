import { prisma } from "@/lib/prisma";
import ProjectCard from "./ProjectCard";

export default async function Projects() {

  const projects = await prisma.project.findMany({

    where: {
      featured: true,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 6,

  });

  if (projects.length === 0) {
    return null;
  }

  return (

    <section className="py-24">

      <div className="container mx-auto">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
            Featured Projects
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Some Of Our Work
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>

  );

}