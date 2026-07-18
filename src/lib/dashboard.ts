import { prisma } from "./prisma";

export async function getDashboardStats() {
  const [
    properties,
    projects,
    blogs,
    testimonials,
    faqs,
    contactMessages,
    newsletterSubscribers,
    admins,

    recentProperties,
    recentProjects,
    recentBlogs,
    recentMessages,
  ] = await Promise.all([

    prisma.property.count(),

    prisma.project.count(),

    prisma.blog.count(),

    prisma.testimonial.count(),

    prisma.fAQ.count(),

    prisma.contactMessage.count(),

    prisma.newsletterSubscriber.count(),

    prisma.user.count(),

    prisma.property.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.project.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.blog.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.contactMessage.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    }),

  ]);

  return {
    properties,
    projects,
    blogs,
    testimonials,
    faqs,
    contactMessages,
    newsletterSubscribers,
    admins,

    recentProperties,
    recentProjects,
    recentBlogs,
    recentMessages,
  };
}