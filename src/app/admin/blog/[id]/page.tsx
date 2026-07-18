import { notFound } from "next/navigation";

import Image from "next/image";

import { getBlog } from "@/actions/blog";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const blog =
    await getBlog(id);

  if (!blog) {

    notFound();

  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          {blog.title}

        </h1>

        <p className="text-gray-500">

          {blog.published
            ? "Published"
            : "Draft"}

        </p>

      </div>

      <Image
        src={blog.image}
        alt={blog.title}
        width={1200}
        height={700}
        className="rounded-xl"
      />

      <div className="rounded-xl border bg-white p-8">

        <h2 className="mb-4 text-2xl font-semibold">

          Excerpt

        </h2>

        <p>

          {blog.excerpt}

        </p>

      </div>

      <div className="rounded-xl border bg-white p-8">

        <h2 className="mb-4 text-2xl font-semibold">

          Content

        </h2>

        <div className="whitespace-pre-wrap">

          {blog.content}

        </div>

      </div>

    </div>

  );

}