"use client";

import { useTransition } from "react";

import {
  deleteProperty,
} from "@/actions/property";

interface Props {
  id: string;
}

export default function DeletePropertyButton({
  id,
}: Props) {
  const [pending, startTransition] =
    useTransition();

  function handleDelete() {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this property?"
      );

    if (!confirmed) return;

    startTransition(async () => {
      await deleteProperty(id);
    });
  }

  return (
    <button
      onClick={handleDelete}
      disabled={pending}
      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
    >
      {pending
        ? "Deleting..."
        : "Delete"}
    </button>
  );
}