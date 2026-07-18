import BlogForm from "@/components/admin/blog/BlogForm";

export default function NewBlogPage() {

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">

          New Blog Post

        </h1>

        <p className="text-gray-500">

          Create a new article.

        </p>

      </div>

      <BlogForm />

    </div>

  );

}