import {
  LayoutDashboard,
  Building2,
  BriefcaseBusiness,
  Newspaper,
  Users,
  Settings,
  Mail,
  FileText,
  HelpCircle
} from "lucide-react";

export const ADMIN_NAVIGATION = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },

  {
    title: "Properties",
    href: "/admin/properties",
    icon: Building2,
  },

  {
    title: "Projects",
    href: "/admin/projects",
    icon: BriefcaseBusiness,
  },

  {
    title: "Blog",
    href: "/admin/blog",
    icon: FileText,
  },
  
  {
      title: "Testimonials",
      href: "/admin/testimonials",
      icon: Users,
    },
    {
      title: "Messages",
      href: "/admin/messages",
      icon: Mail,
    },
      {
    title: "Newsletter",
    href: "/admin/newsletter",
    icon: Mail,
    },
    {
  title: "FAQs",
  href: "/admin/faqs",
  icon: HelpCircle,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },

  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];