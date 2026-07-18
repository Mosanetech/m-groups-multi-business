import { prisma } from "@/lib/prisma";
import ProjectCard from "./ProjectCard";

interface Props {
  currentSlug: string;
}

export default async function RelatedProjects({
  currentSlug,
}: Props) {

  const projects =
    await prisma.project.findMany({

      where: {
        NOT: {
          slug: currentSlug,
        },
      },

      take: 3,

      orderBy: {
        createdAt: "desc",
      },

    });

  if (projects.length === 0) {
    return null;
  }

  return (

    <section className="mt-24">

      <h2 className="mb-10 text-3xl font-bold">
        Related Projects
      </h2>

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