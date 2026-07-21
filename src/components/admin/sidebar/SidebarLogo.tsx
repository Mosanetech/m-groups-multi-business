"use client";

import Link from "next/link";

interface Props {
  collapsed: boolean;
}

export default function SidebarLogo({
  collapsed,
}: Props) {
  return (
    <Link
      href="/admin"
      className="
        flex
        h-20
        items-center
        justify-between
        border-b
        border-gray-200
        bg-white
        px-5
      "
    >
      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-black
            text-lg
            font-bold
            text-white
            shadow-sm
          "
        >
          MG
        </div>

        {!collapsed && (
          <div>
            <h2 className="text-base font-bold text-gray-900">
              M Groups
            </h2>

            <p className="text-sm text-gray-600">
              Administration
            </p>
          </div>
        )}

      </div>
    </Link>
  );
}