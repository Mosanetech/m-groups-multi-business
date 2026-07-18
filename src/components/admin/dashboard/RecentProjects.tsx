interface Props {
  projects: any[];
}

export default function RecentProjects({
  projects,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Recent Projects
      </h2>

      <div className="space-y-4">

        {projects.length === 0 ? (
          <p className="text-gray-500">
            No projects found.
          </p>
        ) : (
          projects.map(project => (
            <div
              key={project.id}
              className="border-b pb-3"
            >
              <h3 className="font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-gray-500">
                {project.category}
              </p>
            </div>
          ))
        )}

      </div>

    </div>
  );
}