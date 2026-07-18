interface Props {
  blogs: any[];
}

export default function RecentBlogs({
  blogs,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Recent Blog Posts
      </h2>

      <div className="space-y-4">

        {blogs.length === 0 ? (
          <p className="text-gray-500">
            No blog posts found.
          </p>
        ) : (
          blogs.map(blog => (
            <div
              key={blog.id}
              className="border-b pb-3"
            >
              <h3 className="font-semibold">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-500">
                {blog.createdAt.toLocaleDateString()}
              </p>
            </div>
          ))
        )}

      </div>

    </div>
  );
}