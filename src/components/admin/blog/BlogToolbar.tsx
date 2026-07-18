"use client";

import Link from "next/link";

export default function BlogToolbar() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold">
          Blog
        </h1>

        <p className="text-gray-500">
          Manage blog posts.
        </p>

      </div>

      <Link
        href="/admin/blog/new"
        className="rounded-lg bg-black px-5 py-3 text-white"
      >
        New Post
      </Link>

    </div>
  );
}