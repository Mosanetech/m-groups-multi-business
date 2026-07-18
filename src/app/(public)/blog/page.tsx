import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/shared/page-header/PageHeader";
import CTASection from "@/components/shared/CTASection";

import BlogCard from "@/components/blog/BlogCard";
import FeaturedPost from "@/components/blog/FeaturedPost";

export default async function BlogPage() {

  const posts = await prisma.blog.findMany({

    where: {
      published: true,
    },

    orderBy: {
      createdAt: "desc",
    },

  });

  const featured = posts[0];

  const remaining = posts.slice(1);

  return (
    <>
      <PageHeader
        items={[
          {
            label: "Blog",
          },
        ]}
        badge="M Groups Blog"
        title="Latest Articles"
        description="Insights, updates and useful information from M Groups."
      />

      <section className="py-20">

        <div className="container mx-auto">

          {featured && (
            <FeaturedPost post={featured} />
          )}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {remaining.map((post) => (

              <BlogCard
                key={post.id}
                post={post}
              />

            ))}

          </div>

        </div>

      </section>

      <div className="container mx-auto">

        <CTASection />

      </div>

    </>
  );

}