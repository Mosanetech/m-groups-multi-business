import { prisma } from "@/lib/prisma";
import BlogCard from "./BlogCard";

interface Props {
  currentSlug: string;
}

export default async function RelatedPosts({
  currentSlug,
}: Props) {

  const posts =
    await prisma.blog.findMany({

      where:{
        published:true,

        NOT:{
          slug:currentSlug,
        },
      },

      take:3,

      orderBy:{
        createdAt:"desc",
      },

    });

  if(posts.length===0){
    return null;
  }

  return(

    <section className="mt-24">

      <h2 className="mb-10 text-3xl font-bold">
        Related Articles
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {posts.map(post=>(

          <BlogCard
            key={post.id}
            post={post}
          />

        ))}

      </div>

    </section>

  );

}