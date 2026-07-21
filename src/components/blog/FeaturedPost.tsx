import Image from "next/image";
import Link from "next/link";

import { Blog } from "@prisma/client";

interface Props {
  post: Blog;
}

export default function FeaturedPost({
  post,
}: Props) {
  return (
    <section className="mb-20 overflow-hidden rounded-3xl border">

      <div className="grid lg:grid-cols-2">

        <div className="relative min-h-[400px]">

       <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />

        </div>

        <div className="flex flex-col justify-center p-10">

          <span className="mb-4 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary w-fit">
            Featured Article
          </span>

          <h2 className="text-4xl font-bold">
            {post.title}
          </h2>

          <p className="mt-6 text-lg text-foreground/80">
            {post.excerpt}
          </p>

          <Link
            href={`/blog/${post.slug}`}
            className="mt-8 font-semibold text-primary"
          >
            Read More →
          </Link>

        </div>

      </div>

    </section>
  );
}