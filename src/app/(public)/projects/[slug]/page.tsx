import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/shared/page-header/PageHeader";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: Props) {

  const { slug } = await params;

  const project = await prisma.project.findUnique({

    where: {
      slug,
    },

  });

  if (!project) {
    notFound();
  }

  return (

    <>

      <PageHeader
        items={[
          {
            label: "Projects",
            href: "/projects",
          },
          {
            label: project.title,
          },
        ]}
        badge="Project"
        title={project.title}
        description={project.shortDescription}
      />

      <main className="container mx-auto py-20">

        <div className="overflow-hidden rounded-3xl">

          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-3xl"
          />

        </div>

        <div className="mx-auto mt-12 max-w-5xl">

          <div className="mb-6">

            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

              {project.category}

            </span>

          </div>

          <h1 className="text-5xl font-bold">

            {project.title}

          </h1>

          <p className="mt-8 text-lg leading-8 text-foreground/80">

            {project.description}

          </p>

        </div>

      </main>

    </>

  );

}