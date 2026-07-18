"use client";

import Link from "next/link";

export default function ProjectToolbar() {

  return (

    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <p className="text-gray-500">
          Manage company projects.
        </p>

      </div>

      <Link
        href="/admin/projects/new"
        className="rounded-lg bg-black px-5 py-3 text-white"
      >
        Add Project
      </Link>

    </div>

  );
}