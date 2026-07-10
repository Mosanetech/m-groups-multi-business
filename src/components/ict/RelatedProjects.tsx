import { PROJECTS } from "@/config/projects";
import ProjectCard from "./ProjectCard";

interface Props {
  currentSlug: string;
}

export default function RelatedProjects({
  currentSlug,
}: Props) {

  const related = PROJECTS
    .filter(project => project.slug !== currentSlug)
    .slice(0, 3);

  return (

    <section className="mt-24">

      <h2 className="mb-10 text-3xl font-bold">
        Related Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {related.map(project => (

          <ProjectCard
            key={project.slug}
            project={project}
          />

        ))}

      </div>

    </section>

  );

}