import { BlogPost } from "@/types/blog";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "business-website-malawi",

    title: "5 Reasons Every Business Needs a Professional Website",

    excerpt:
      "A professional website builds credibility, increases visibility and attracts more customers.",

    content: `
A professional website is your company's digital office.

Customers search online before making decisions.

Having a modern website helps build trust, generate leads and improve communication with clients.

Whether you own a shop, NGO or company, a website is no longer optional.

It is one of the best investments any business can make.
`,

    category: "ICT",

    image: "/images/blog/blog1.jpg",

    author: "M Groups",

    publishedAt: "July 2026",

    readTime: "5 min",

    featured: true,

    tags: [
      "Website",
      "Business",
      "Technology",
    ],
  },

  {
    slug: "buying-land-malawi",

    title: "Things To Consider Before Buying Land In Malawi",

    excerpt:
      "Buying land requires proper verification, documentation and planning.",

    content: `
Always verify ownership before purchasing land.

Inspect the land physically.

Request legal documents.

Work with trusted property consultants.

These steps help avoid fraud and future disputes.
`,

    category: "Real Estate",

    image: "/images/blog/blog2.jpg",

    author: "M Groups",

    publishedAt: "July 2026",

    readTime: "6 min",

    featured: false,

    tags: [
      "Land",
      "Property",
      "Investment",
    ],
  },

  {
    slug: "financial-planning",

    title: "How Financial Planning Helps Small Businesses",

    excerpt:
      "Financial planning allows businesses to grow sustainably and make informed decisions.",

    content: `
Every successful business starts with proper financial planning.

Budgeting, bookkeeping and cash-flow monitoring reduce unnecessary losses.

Businesses that plan their finances are more likely to grow and attract investors.
`,

    category: "Finance",

    image: "/images/blog/blog3.jpg",

    author: "M Groups",

    publishedAt: "July 2026",

    readTime: "4 min",

    featured: false,

    tags: [
      "Finance",
      "Business",
      "Accounting",
    ],
  },
];