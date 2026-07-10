import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Luxury Residential Homes",
    category: "Real Estate",
    image: "/images/projects/project1.jpg",
    href: "/services/real-estate",
  },
  {
    title: "Corporate Management System",
    category: "ICT",
    image: "/images/projects/project2.jpg",
    href: "/services/ict",
  },
  {
    title: "Business Financial Planning",
    category: "Finance",
    image: "/images/projects/project3.jpg",
    href: "/services/finance",
  },
  {
    title: "Professional Translation Services",
    category: "Language",
    image: "/images/projects/project4.jpg",
    href: "/services/language",
  },
  {
    title: "Teacher Capacity Building",
    category: "Education",
    image: "/images/projects/project5.jpg",
    href: "/services/education",
  },
];

export default function Projects() {
  return (
    <section className="py-24">
      <div className="container mx-auto">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Featured Projects
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Some Of Our Work
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}