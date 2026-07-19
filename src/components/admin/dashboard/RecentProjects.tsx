interface Props {
  projects: any[];
}

export default function RecentProjects({
  projects,
}: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Recent Projects
      </h2>

      <div className="space-y-4">

        {projects.length === 0 ? (
          <p className="text-gray-500">
            No projects found.
          </p>
        ) : (
          projects.map((project) => (
            <div
                key={project.id}
                className="
                  rounded-lg
                  p-3
                  transition-colors
                  hover:bg-gray-50
                "
              >
              <h3 className="font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {project.category}
              </p>
              
            </div>
          ))
        )}

      </div>

    </div>
  );
}