import ProjectRow from "./ProjectRow";

interface Props {
  projects: any[];
}

export default function ProjectTable({
  projects,
}: Props) {

  return (

    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4">Image</th>

            <th>Title</th>

            <th>Category</th>

            <th>Featured</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {projects.map((project) => (

            <ProjectRow
              key={project.id}
              project={project}
            />

          ))}

        </tbody>

      </table>

    </div>

  );
}