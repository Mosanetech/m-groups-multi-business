import { notFound } from "next/navigation";

import { getBlog } from "@/actions/blog";

import BlogForm from "@/components/admin/blog/BlogForm";

export default async function EditBlogPage({
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

        <h1 className="text-3xl font-bold">

          Edit Blog

        </h1>

      </div>

      <BlogForm
        blog={blog}
      />

    </div>

  );

}