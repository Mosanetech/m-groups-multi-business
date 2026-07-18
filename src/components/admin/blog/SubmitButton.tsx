"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {

  const { pending } =
    useFormStatus();

  return (

    <button
      disabled={pending}
      className="
      rounded-lg
      bg-black
      px-6
      py-3
      text-white
      disabled:opacity-50
    "
    >

      {pending
        ? "Saving..."
        : "Save Blog"}

    </button>

  );
}