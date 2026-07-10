"use client";

import Link from "next/link";
import { ChevronRight, House } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="container mx-auto py-6">

      <nav className="flex flex-wrap items-center gap-2 rounded-xl bg-muted p-4 text-sm">

        <Link
          href="/"
          className="flex items-center gap-2 font-medium hover:text-primary"
        >
          <House size={16} />
          Home
        </Link>

        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2"
          >
            <ChevronRight size={16} />

            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold">
                {item.label}
              </span>
            )}
          </div>
        ))}

      </nav>

    </div>
  );
}