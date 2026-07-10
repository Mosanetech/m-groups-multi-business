import { PROJECTS } from "@/config/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featured = PROJECTS.filter(
    project => project.featured
  );

  if (featured.length === 0) return null;

  return (
    <section className="mt-24">

      <div className="mb-10">

        <h2 className="text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-2 text-muted-foreground">
          Some of our best ICT solutions.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {featured.map(project => (

          <ProjectCard
            key={project.slug}
            project={project}
          />

        ))}

      </div>

    </section>
  );
}