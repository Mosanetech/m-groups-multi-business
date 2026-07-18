"use client";

import { Trash2 } from "lucide-react";

import {
  deleteBlog,
} from "@/actions/blog";

interface Props {
  id: string;
}

export default function DeleteBlogButton({
  id,
}: Props) {

  async function handleDelete() {

    if (
      !confirm(
        "Delete this blog post?"
      )
    ) {
      return;
    }

    await deleteBlog(id);

  }

  return (

    <button
      onClick={handleDelete}
      className="text-red-600 hover:text-red-800"
    >

      <Trash2 size={18} />

    </button>

  );
}