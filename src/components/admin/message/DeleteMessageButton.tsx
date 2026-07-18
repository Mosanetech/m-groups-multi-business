"use client";

import { useTransition } from "react";

import {
  deleteMessage,
} from "@/actions/message";

interface Props {
  id: string;
}

export default function DeleteMessageButton({
  id,
}: Props) {

  const [loading, startTransition] =
    useTransition();

  return (
    <button
      disabled={loading}
      className="text-red-600 hover:underline"
      onClick={() => {

        if (
          !confirm(
            "Delete this message?"
          )
        ) {
          return;
        }

        startTransition(() => {
          deleteMessage(id);
        });

      }}
    >
      Delete
    </button>
  );
}