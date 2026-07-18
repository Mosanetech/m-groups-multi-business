"use client";

import { useFormStatus } from "react-dom";

interface Props {
  edit?: boolean;
}

export default function SubmitButton({
  edit,
}: Props) {

  const { pending } =
    useFormStatus();

  return (

    <button
      disabled={pending}
      className="rounded-lg bg-black px-6 py-3 text-white disabled:opacity-50"
    >
      {pending
        ? "Saving..."
        : edit
        ? "Update User"
        : "Create User"}
    </button>

  );
}