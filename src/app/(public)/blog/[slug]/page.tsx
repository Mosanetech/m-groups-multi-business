import Image from "next/image";
import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

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

  const post = await prisma.blog.findUnique({

    where: {
      slug,
    },

  });

  if (!post) {
    notFound();
  }

  return (

    <main className="container mx-auto py-20">

      <h1 className="text-5xl font-bold">

        {post.title}

      </h1>

      <p className="mt-6 text-muted-foreground">

        {post.createdAt.toLocaleDateString()}

      </p>

      <div className="relative mt-12 h-[500px]">

        <Image
      src={post.image}
      alt={post.title}
      fill
      sizes="100vw"
      className="rounded-3xl object-cover"
    />

      </div>

      <article className="prose mt-12 max-w-none whitespace-pre-line dark:prose-invert">

        {post.content}

      </article>

      <RelatedPosts
        currentSlug={post.slug}
      />

    </main>

  );

}