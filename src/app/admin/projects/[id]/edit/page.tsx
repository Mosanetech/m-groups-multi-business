import { notFound } from "next/navigation";

import { getProject } from "@/actions/project";

import ProjectForm from "@/components/admin/project/ProjectForm";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const project =
    await getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Project
        </h1>

      </div>

      <ProjectForm
        project={project}
      />

    </div>
  );
}