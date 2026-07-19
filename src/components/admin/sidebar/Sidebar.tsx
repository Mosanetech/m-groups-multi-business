"use client";

import type { SessionPayload } from "@/lib/session";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";

import { ADMIN_NAVIGATION } from "@/config/admin-navigation";

import {
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

interface Props {
  collapsed: boolean;
  toggleSidebar: () => void;
  closeMobile: () => void;
  session: SessionPayload;
}

export default function Sidebar({
  collapsed,
 toggleSidebar,
  closeMobile,
  session,
}: Props) {
  return (
    <div className="flex h-full flex-col">

      {/* Logo */}

      {/* Logo */}

<div className="flex items-center justify-between border-b p-4">

  <SidebarLogo
    collapsed={collapsed}
  />

  <button
    onClick={toggleSidebar}
    className="
      hidden
      lg:flex
      h-9
      w-9
      items-center
      justify-center
      rounded-lg
      border
      transition
      hover:bg-gray-100
      dark:border-zinc-700
      dark:hover:bg-zinc-800
    "
  >
    {collapsed ? (
      <PanelLeftOpen size={18} />
    ) : (
      <PanelLeftClose size={18} />
    )}
  </button>

</div>

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