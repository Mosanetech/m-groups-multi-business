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

    <main className="mx-auto max-w-6xl py-12 lg:py-20">
      <h1 className="text-3xl font-bold lg:text-5xl">

        {post.title}

      </h1>

      <p className="mt-8 text-base leading-8 text-foreground/80 lg:text-lg">

        {post.createdAt.toLocaleDateString()}

      </p>

      <div className="relative mt-8 h-72 md:h-[420px] lg:h-[500px]">

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