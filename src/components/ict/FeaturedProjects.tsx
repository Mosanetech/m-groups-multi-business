import { prisma } from "@/lib/prisma";
import ProjectCard from "./ProjectCard";

export default async function FeaturedProjects() {
  const projects = await prisma.project.findMany({
    where: {
      featured: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="mt-24">

      <div className="mb-10">

        <h2 className="text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-2 text-foreground/80">
          Some of our best ICT solutions.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {projects.map((project) => (

          <ProjectCard
            key={project.id}
            project={project}
          />

        ))}

      </div>

    </section>
  );
}