"use client";

import { useTransition } from "react";

import {
  deleteFAQ,
} from "@/actions/faq";

interface Props {
  id: string;
}

export default function DeleteFAQButton({
  id,
}: Props) {

  const [loading, startTransition] =
    useTransition();

  return (

    <button
      className="text-red-600 hover:underline"
      disabled={loading}
      onClick={() => {

        if (
          !confirm(
            "Delete this FAQ?"
          )
        ) {
          return;
        }

        startTransition(() => {
          deleteFAQ(id);
        });

      }}
    >

      Delete

    </button>

  );
}