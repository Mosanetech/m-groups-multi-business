import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Blog } from "@prisma/client";

interface Props {
  post: Blog;
}

export default function BlogCard({
  post,
}: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-64">

       <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />

      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {post.title}
        </h2>

        <p className="mt-4 text-foreground/80">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-primary"
        >
          Read Article

          <ArrowRight size={18}/>
        </Link>

      </div>

    </article>
  );
}