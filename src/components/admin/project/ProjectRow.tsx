import Link from "next/link";

import { Project } from "@prisma/client";

import DeleteProjectButton from "./DeleteProjectButton";

interface Props {
  project: Project;
}

export default function ProjectRow({
  project,
}: Props) {

  return (

    <tr className="border-b">

      <td className="p-4">

        {project.title}

      </td>

      <td>

        {project.category}

      </td>

      <td>

        {project.featured ? "⭐" : "-"}

      </td>

      <td className="space-x-3">

        <Link
          href={`/admin/projects/${project.id}`}
          className="text-green-600"
        >

          View

        </Link>

        <Link
          href={`/admin/projects/${project.id}/edit`}
          className="text-blue-600"
        >

          Edit

        </Link>

        <DeleteProjectButton
          id={project.id}
        />

      </td>

    </tr>

  );

}