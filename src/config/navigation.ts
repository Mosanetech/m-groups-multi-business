// src/constants/navigation.ts

import { LucideIcon, Newspaper, Briefcase, Building2, Home, Info, Mail } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  external?: boolean;
}

export const NAVIGATION: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "About",
    href: "/about",
    icon: Info,
  },
  {
    title: "Services",
    href: "/services",
    icon: Briefcase,
  },
  
  {
    title: "Blog",
    href: "/blog",
    icon: Newspaper,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Mail,
  },
];