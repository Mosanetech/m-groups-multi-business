"use client";

import { useTransition } from "react";

import {
  deleteUser,
} from "@/actions/user";

interface Props {
  id: string;
}

export default function DeleteUserButton({
  id,
}: Props) {

  const [loading, startTransition] =
    useTransition();

  return (
    <button
      disabled={loading}
      className="text-red-600 hover:underline disabled:opacity-50"
      onClick={() => {

        if (
          !confirm(
            "Delete this administrator?"
          )
        ) {
          return;
        }

        startTransition(() => {
          deleteUser(id);
        });

      }}
    >
      Delete
    </button>
  );
}