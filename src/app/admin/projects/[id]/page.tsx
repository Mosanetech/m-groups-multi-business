import { notFound } from "next/navigation";

import Image from "next/image";

import { getProject } from "@/actions/project";

export default async function ProjectPage({
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

        <h1 className="text-4xl font-bold">
          {project.title}
        </h1>

        <p className="text-gray-500">
          {project.category}
        </p>

      </div>

      {project.image && (

        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="rounded-xl"
        />

      )}

      <div className="rounded-xl border bg-white p-8">

        <h2 className="mb-4 text-xl font-semibold">
          Description
        </h2>

        <p className="whitespace-pre-wrap">
          {project.description}
        </p>

      </div>

    </div>

  );
}