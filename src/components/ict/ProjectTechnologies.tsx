import { Cpu } from "lucide-react";

interface Props {
  technologies: string[];
}

export default function ProjectTechnologies({
  technologies,
}: Props) {
  return (
    <section className="mt-16">

      <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">

        <Cpu />

        Technologies Used

      </h2>

      <div className="flex flex-wrap gap-4">

        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border bg-muted px-5 py-3"
          >
            {tech}
          </span>
        ))}

      </div>

    </section>
  );
}