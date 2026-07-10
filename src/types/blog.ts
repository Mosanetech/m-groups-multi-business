export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category:
    | "ICT"
    | "Real Estate"
    | "Finance"
    | "Language"
    | "Education";

  image: string;

  author: string;

  publishedAt: string;

  readTime: string;

  featured: boolean;

  tags: string[];
}