// src/components/admin/project/EmptyState.tsx

import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed bg-white p-16 text-center">
      <h2 className="text-2xl font-semibold">
        No Projects Yet
      </h2>

      <p className="mt-3 text-gray-500">
        Create your first ICT, Finance, Education, Language or Real Estate project.
      </p>

      <Link
        href="/admin/projects/new"
        className="mt-6 inline-flex rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-800"
      >
        Add Project
      </Link>
    </div>
  );
}