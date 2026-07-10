import { PROJECTS } from "@/config/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}

    </div>
  );
}