"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { LucideIcon } from "lucide-react";

interface Props {

  title: string;

  href: string;

  icon: LucideIcon;

  collapsed: boolean;

  closeMobile: () => void;

}

export default function SidebarItem({

  title,

  href,

  icon: Icon,

  collapsed,

  closeMobile,

}: Props) {

  const pathname =
    usePathname();

  const active =
    pathname === href;

  return (

    <Link
      href={href}
      onClick={closeMobile}
      className={`
      group
      flex
      items-center
      gap-3
      rounded-xl
      px-4
      py-3
      transition-all
      duration-200

      ${
        active
          ? "bg-black text-white shadow-lg"
          : "text-gray-700 hover:bg-gray-100 hover:text-black"
      }
    `}
    >

      <Icon
        size={21}
      />

      {!collapsed && (

        <span className="font-medium">

          {title}

        </span>

      )}

    </Link>

  );
}