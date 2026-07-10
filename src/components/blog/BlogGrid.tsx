import { BLOG_POSTS } from "@/config/blog";

import BlogCard from "./BlogCard";
import FeaturedPost from "./FeaturedPost";

export default function BlogGrid() {

  const featured = BLOG_POSTS.find(
    post => post.featured
  );

  const posts = BLOG_POSTS.filter(
    post => !post.featured
  );

  return (
    <>

      {featured && (
        <FeaturedPost
          post={featured}
        />
      )}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {posts.map(post => (

          <BlogCard
            key={post.slug}
            post={post}
          />

        ))}

      </div>

    </>
  );
}