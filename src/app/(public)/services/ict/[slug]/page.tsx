import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/shared/page-header/PageHeader";

import ProjectGallery from "@/components/ict/ProjectGallery";
import ProjectInfo from "@/components/ict/ProjectInfo";
import RelatedProjects from "@/components/ict/RelatedProjects";
import CTASection from "@/components/shared/CTASection";

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
console.log("Project:", project);
  if (!project) {
    notFound();
  }

  return (
    <>

      <PageHeader
        items={[
          {
            label: "Services",
            href: "/services",
          },
          {
            label: "ICT",
            href: "/services/ict",
          },
          {
            label: project.title,
          },
        ]}
        badge="Project Details"
        title={project.title}
        description={project.shortDescription}
      />

      <main className="container mx-auto py-16 space-y-16">

        <ProjectGallery
          project={project}
        />

        <ProjectInfo
          project={project}
        />

        <RelatedProjects
          currentSlug={project.slug}
        />

        <CTASection />

      </main>

    </>
  );

}