import { prisma } from "@/lib/prisma";

import BlogCard from "./BlogCard";
import FeaturedPost from "./FeaturedPost";

export default async function BlogGrid() {

  const posts = await prisma.blog.findMany({

    where: {
      published: true,
    },

    orderBy: {
      createdAt: "desc",
    },

  });

  if (posts.length === 0) {
    return null;
  }

  const featured = posts[0];

  const remaining = posts.slice(1);

  return (

    <>

      <FeaturedPost
        post={featured}
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {remaining.map((post) => (

          <BlogCard
            key={post.id}
            post={post}
          />

        ))}

      </div>

    </>

  );

}