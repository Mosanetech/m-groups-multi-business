import { BLOG_POSTS } from "@/config/blog";
import BlogCard from "./BlogCard";

interface Props {
  currentSlug: string;
}

export default function RelatedPosts({
  currentSlug,
}: Props) {

  const posts = BLOG_POSTS.filter(
    post => post.slug !== currentSlug
  ).slice(0,3);

  return (
    <section className="mt-24">

      <h2 className="mb-10 text-3xl font-bold">
        Related Articles
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {posts.map(post => (

          <BlogCard
            key={post.slug}
            post={post}
          />

        ))}

      </div>

    </section>
  );
}