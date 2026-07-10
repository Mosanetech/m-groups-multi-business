import { notFound } from "next/navigation";

import { BLOG_POSTS } from "@/config/blog";

import RelatedPosts from "@/components/blog/RelatedPosts";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailsPage({
  params,
}: Props) {

  const { slug } = await params;

  const post = BLOG_POSTS.find(
    p => p.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto py-20">

      <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
        {post.category}
      </span>

      <h1 className="mt-8 text-5xl font-bold">
        {post.title}
      </h1>

      <div className="mt-6 flex flex-wrap gap-6 text-muted-foreground">

        <span>
          {post.author}
        </span>

        <span>
          {post.publishedAt}
        </span>

        <span>
          {post.readTime}
        </span>

      </div>

      <img
        src={post.image}
        alt={post.title}
        className="mt-12 h-[500px] w-full rounded-3xl object-cover"
      />

      <article className="prose mt-12 max-w-none whitespace-pre-line dark:prose-invert">

        {post.content}

      </article>

      <div className="mt-12 flex flex-wrap gap-3">

        {post.tags.map(tag => (

          <span
            key={tag}
            className="rounded-full bg-muted px-4 py-2"
          >
            #{tag}
          </span>

        ))}

      </div>

      <RelatedPosts
        currentSlug={post.slug}
      />

    </main>
  );
}