import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-64">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="p-6">

        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {project.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 text-muted-foreground">
          {project.shortDescription}
        </p>

        <Link
          href={`/services/ict/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-primary"
        >
          View Project

          <ArrowRight size={18} />
        </Link>

      </div>
    </div>
  );
}