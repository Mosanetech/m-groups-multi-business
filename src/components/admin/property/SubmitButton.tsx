"use client";

interface Props {
  editing?: boolean;
}

export default function SubmitButton({
  editing = false,
}: Props) {
  return (
    <button
      type="submit"
      className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
    >
      {editing
        ? "Update Property"
        : "Create Property"}
    </button>
  );
}