import { getBlogs } from "@/actions/blog";

import BlogTable from "@/components/admin/blog/BlogTable";
import BlogToolbar from "@/components/admin/blog/BlogToolbar";
import EmptyState from "@/components/admin/blog/EmptyState";

export default async function BlogPage() {

  const blogs =
    await getBlogs();

  return (

    <div className="space-y-8">

      <BlogToolbar />

      {blogs.length === 0 ? (

        <EmptyState />

      ) : (

        <BlogTable
          blogs={blogs}
        />

      )}

    </div>

  );

}