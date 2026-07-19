interface Props {
  blogs: any[];
}

export default function RecentBlogs({
  blogs,
}: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Recent Blog Posts
      </h2>

      <div className="space-y-4">

        {blogs.length === 0 ? (
          <p className="text-gray-500">
            No blog posts found.
          </p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="
                    rounded-lg
                    p-3
                    transition-colors
                    hover:bg-gray-50
                    "
            >
              <h3 className="font-semibold text-gray-900">
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