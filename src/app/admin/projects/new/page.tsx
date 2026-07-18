import ProjectForm from "@/components/admin/project/ProjectForm";

export default function NewProjectPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Add New Project
        </h1>

        <p className="text-gray-500">
          Create a new portfolio project.
        </p>

      </div>

      <ProjectForm />

    </div>
  );
}