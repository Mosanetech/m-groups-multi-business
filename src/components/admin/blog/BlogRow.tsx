"use client";

import Image from "next/image";
import Link from "next/link";

import { Blog } from "@prisma/client";

import DeleteBlogButton from "./DeleteBlogButton";

interface Props {
  blog: Blog;
}

export default function BlogRow({
  blog,
}: Props) {

  return (

    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">

        <Image
          src={blog.image}
          alt={blog.title}
          width={90}
          height={60}
          className="rounded-lg object-cover"
        />

      </td>

      <td>{blog.title}</td>

      <td>
        {blog.published
          ? "Published"
          : "Draft"}
      </td>

      <td>

        <Link
          href={`/admin/blog/${blog.id}`}
          className="mr-4 text-green-600"
        >
          View
        </Link>

        <Link
          href={`/admin/blog/${blog.id}/edit`}
          className="mr-4 text-blue-600"
        >
          Edit
        </Link>

        <DeleteBlogButton
          id={blog.id}
        />

      </td>

    </tr>

  );
}