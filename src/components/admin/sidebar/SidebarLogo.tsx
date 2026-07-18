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
      gap-3
      border-b
      px-5
      transition-all
    "
    >

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
      "
      >

        MG

      </div>

      {!collapsed && (

        <div>

          <h2 className="font-bold">

            M Groups

          </h2>

          <p className="text-sm text-gray-500">

            Administration

          </p>

        </div>

      )}

    </Link>

  );
}