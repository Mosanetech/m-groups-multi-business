"use client";

import { useTransition } from "react";

import {
  deleteSubscriber,
} from "@/actions/newsletter";

interface Props {
  id: string;
}

export default function DeleteSubscriberButton({
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
            "Delete this subscriber?"
          )
        ) {
          return;
        }

        startTransition(() => {
          deleteSubscriber(id);
        });

      }}
    >
      Delete
    </button>

  );
}