import {
  Building2,
  Newspaper,
  BriefcaseBusiness,
  Users,
  Mail,
  FileText,
} from "lucide-react";

import { getDashboardStats } from "@/lib/dashboard";

import StatCard from "@/components/admin/dashboard/StatCard";
import QuickActions from "@/components/admin/dashboard/QuickActions";
import RecentProperties from "@/components/admin/dashboard/RecentProperties";
import RecentProjects from "@/components/admin/dashboard/RecentProjects";
import RecentBlogs from "@/components/admin/dashboard/RecentBlogs";

export default async function AdminDashboard() {

  const stats = await getDashboardStats();

  return (

    <div>

      <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Welcome back.
          </p>

        </div>
       <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Properties"
          value={stats.properties}
          icon={Building2}
        />

        <StatCard
          title="Projects"
          value={stats.projects}
          icon={BriefcaseBusiness}
        />

        <StatCard
          title="Blogs"
          value={stats.blogs}
          icon={Newspaper}
        />

        <StatCard
          title="Testimonials"
          value={stats.testimonials}
          icon={Users}
        />

        <StatCard
          title="FAQs"
          value={stats.faqs}
          icon={FileText}
        />

        <StatCard
          title="Messages"
          value={stats.contactMessages}
          icon={Mail}
        />

        <StatCard
          title="Subscribers"
          value={stats.newsletterSubscribers}
          icon={Mail}
        />

        <StatCard
          title="Admins"
          value={stats.admins}
          icon={Users}
        />

      </div>

      <div className="mt-10">
  <QuickActions />
</div>

<div className="mt-10 grid gap-6 lg:grid-cols-3">

  <RecentProperties
    properties={stats.recentProperties}
  />

  <RecentProjects
    projects={stats.recentProjects}
  />

  <RecentBlogs
    blogs={stats.recentBlogs}
  />

</div>

    </div>

  );
}