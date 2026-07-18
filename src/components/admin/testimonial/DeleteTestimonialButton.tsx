"use client";

import { Trash2 } from "lucide-react";

import {
  deleteTestimonial,
} from "@/actions/testimonial";

interface Props {
  id: string;
}

export default function DeleteTestimonialButton({
  id,
}: Props) {

  async function handleDelete() {

    if (
      !confirm(
        "Delete this testimonial?"
      )
    ) return;

    await deleteTestimonial(id);

  }

  return (

    <button
      onClick={handleDelete}
      className="text-red-600"
    >

      <Trash2 size={18} />

    </button>

  );

}