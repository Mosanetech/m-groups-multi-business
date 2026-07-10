import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogPost } from "@/types/blog";

interface Props {
  post: BlogPost;
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
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
          {post.category}
        </span>

        <h2 className="mt-4 text-2xl font-bold">
          {post.title}
        </h2>

        <p className="mt-4 text-muted-foreground">
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