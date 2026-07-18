import { getProjects } from "@/actions/project";

import ProjectTable from "@/components/admin/project/ProjectTable";
import EmptyState from "@/components/admin/project/EmptyState";
import ProjectToolbar from "@/components/admin/project/ProjectToolbar";

export default async function ProjectsPage() {

  const projects =
    await getProjects();

  return (
    <div className="space-y-8">

      <ProjectToolbar />

      {projects.length === 0 ? (
        <EmptyState />
      ) : (
        <ProjectTable
          projects={projects}
        />
      )}

    </div>
  );
}