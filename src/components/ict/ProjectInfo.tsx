import ProjectLinks from "./ProjectLinks";

import { Project } from "@prisma/client";

interface Props {
  project: Project;
}

export default function ProjectInfo({
  project,
}: Props) {

  return (

    <section>

      <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

        {project.category}

      </span>

      <h1 className="mt-6 text-5xl font-bold">

        {project.title}

      </h1>

      <p className="mt-8 leading-8 text-muted-foreground">

        {project.description}

      </p>

      <ProjectLinks
        website={project.websiteUrl}
        playStore={project.playStoreUrl}
        appStore={project.appStoreUrl}
        github={project.githubUrl}
      />

    </section>

  );

}