"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";

import { deleteProject } from "@/actions/project";

interface Props {
  id: string;
}

export default function DeleteProjectButton({
  id,
}: Props) {
  const [pending, startTransition] =
    useTransition();

  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    startTransition(async () => {
      await deleteProject(id);
    });
  }

  return (
    <button
      onClick={handleDelete}
      disabled={pending}
      className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 disabled:opacity-50"
    >
      <Trash2 size={16} />

      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}