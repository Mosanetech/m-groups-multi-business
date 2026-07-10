"use client";

import { useMemo, useState } from "react";

import PageHeader from "@/components/shared/page-header/PageHeader";
import CTASection from "@/components/shared/CTASection";

import BlogSearch from "@/components/blog/BlogSearch";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogCard from "@/components/blog/BlogCard";
import FeaturedPost from "@/components/blog/FeaturedPost";

import { BLOG_POSTS } from "@/config/blog";

export default function BlogPage() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const featured = BLOG_POSTS.find(post => post.featured);

  const posts = useMemo(() => {

    return BLOG_POSTS.filter(post => {

      if (post.featured) return false;

      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        post.category === category;

      return matchesSearch && matchesCategory;

    });

  }, [search, category]);

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
        description="Insights, tips and updates from our different business divisions."
      />

      <section className="py-20">

        <div className="container mx-auto">

          {featured && (
            <FeaturedPost post={featured}/>
          )}

          <div className="mb-8">

            <BlogSearch
              value={search}
              onChange={setSearch}
            />

          </div>

          <div className="mb-12">

            <BlogCategories
              value={category}
              onChange={setCategory}
            />

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {posts.map(post => (

              <BlogCard
                key={post.slug}
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