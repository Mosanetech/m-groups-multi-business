import BlogRow from "./BlogRow";

interface Props {
  blogs: any[];
}

export default function BlogTable({
  blogs,
}: Props) {

  return (

    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4">
              Image
            </th>

            <th>
              Title
            </th>

            <th>
              Status
            </th>

            <th>
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {blogs.map((blog) => (

            <BlogRow
              key={blog.id}
              blog={blog}
            />

          ))}

        </tbody>

      </table>

    </div>

  );
}