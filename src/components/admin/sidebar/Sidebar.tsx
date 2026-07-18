"use client";

import type { SessionPayload } from "@/lib/session";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";

import { ADMIN_NAVIGATION } from "@/config/admin-navigation";

interface Props {
  collapsed: boolean;
  closeMobile: () => void;
  session: SessionPayload;
}

export default function Sidebar({
  collapsed,
  closeMobile,
  session,
}: Props) {
  return (
    <div className="flex h-full flex-col">

      {/* Logo */}

      <SidebarLogo
        collapsed={collapsed}
      />

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-3 py-6">

        <div className="space-y-2">

          {ADMIN_NAVIGATION.map((item) => (

            <SidebarItem
              key={item.href}
              {...item}
              collapsed={collapsed}
              closeMobile={closeMobile}
            />

          ))}

        </div>

      </nav>

      {/* Bottom User */}

      <div className="border-t p-4">

        <div
          className="
          flex
          items-center
          gap-3
        "
        >

          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-black
            font-bold
            text-white
          "
          >

            {session.username
              .charAt(0)
              .toUpperCase()}

          </div>

          {!collapsed && (

            <div>

              <p className="font-semibold">

                {session.username}

              </p>

              <p className="text-xs text-gray-500">

                {session.role}

              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}