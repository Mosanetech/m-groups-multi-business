"use client";

interface Props {
  pending: boolean;
}

export default function SaveButton({
  pending,
}: Props) {
  return (
    <div className="flex justify-end">
      <button
        type="submit"
        disabled={pending}
        className="rounded-xl bg-black px-8 py-3 font-semibold text-white"
      >
        {pending ? "Saving..." : "Save Settings"}
      </button>
    </div>
  );
}