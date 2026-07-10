interface Props {
  technologies: string[];
}

export default function TechnologyBadges({
  technologies,
}: Props) {
  return (

    <div className="mt-10">

      <h3 className="mb-4 text-2xl font-bold">
        Technologies Used
      </h3>

      <div className="flex flex-wrap gap-3">

        {technologies.map((tech) => (

          <span
            key={tech}
            className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            {tech}
          </span>

        ))}

      </div>

    </div>

  );
}