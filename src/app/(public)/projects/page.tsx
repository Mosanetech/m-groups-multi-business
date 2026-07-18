import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/shared/page-header/PageHeader";

import ProjectCard from "@/components/sections/projects/ProjectCard";

export default async function ProjectsPage() {

  const projects = await prisma.project.findMany({

    orderBy: {
      createdAt: "desc",
    },

  });

  return (

    <>

      <PageHeader
        items={[
          {
            label: "Projects",
          },
        ]}
        badge="Portfolio"
        title="Our Projects"
        description="Explore some of the work we have completed."
      />

      <section className="container mx-auto py-20">

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </section>

    </>

  );

}