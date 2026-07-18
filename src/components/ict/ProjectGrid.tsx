import { prisma } from "@/lib/prisma";
import ProjectCard from "./ProjectCard";

export default async function ProjectGrid() {

  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {projects.map((project) => (

        <ProjectCard
          key={project.id}
          project={project}
        />

      ))}

    </div>

  );

}