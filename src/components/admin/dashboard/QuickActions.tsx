import Link from "next/link";
import {
  Building2,
  BriefcaseBusiness,
  Newspaper,
  Users,
  FileText,
  Mail,
} from "lucide-react";

const actions = [
  {
    title: "Add Property",
    href: "/admin/properties/new",
    icon: Building2,
  },
  {
    title: "Add Project",
    href: "/admin/projects/new",
    icon: BriefcaseBusiness,
  },
  {
    title: "New Blog",
    href: "/admin/blog/new",
    icon: Newspaper,
  },
  {
    title: "Add Testimonial",
    href: "/admin/testimonials/new",
    icon: Users,
  },
  {
    title: "Add FAQ",
    href: "/admin/faqs/new",
    icon: FileText,
  },
  {
    title: "Messages",
    href: "/admin/messages",
    icon: Mail,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Quick Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.href}
              href={action.href}
              className="
                flex
                items-center
                gap-4
                rounded-xl
                border
                p-4
                transition-all
                hover:border-black
                hover:shadow-md
              "
            >
              <div className="rounded-xl bg-black p-3 text-white">
                <Icon size={20} />
              </div>

              <span className="font-medium text-gray-900">
                {action.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}