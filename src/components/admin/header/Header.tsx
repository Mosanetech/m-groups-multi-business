"use client";

import {
  Bell,
  Menu,
  Search,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import UserDropdown from "./UserDropdown";

interface Props {
  collapsed: boolean;

  toggleSidebar: () => void;

  openMobile: () => void;

  username: string;
}

export default function Header({
  collapsed,
  toggleSidebar,
  openMobile,
  username,
}: Props) {
  return (
    <header
      className="
      sticky
      top-0
      z-30
      flex
      h-20
      items-center
      justify-between
      border-b
      bg-white
      px-4
      md:px-8
      shadow-sm
    "
    >

      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Mobile */}

        <button
          onClick={openMobile}
          className="
          rounded-lg
          border
          p-2
          lg:hidden
          hover:bg-gray-100
        "
        >
          <Menu size={22} />
        </button>

        {/* Desktop */}

        <button
          onClick={toggleSidebar}
          className="
          hidden
          rounded-lg
          border
          p-2
          transition
          hover:bg-gray-100
          lg:flex
        "
        >
          {collapsed ? (
            <PanelLeftOpen />
          ) : (
            <PanelLeftClose />
          )}
        </button>

        {/* Search */}

        <div
          className="
          relative
          hidden
          md:block
        "
        >
          <Search
            size={18}
            className="
            absolute
            left-3
            top-3
            text-gray-400
          "
          />

          <input
            placeholder="Search..."
            className="
            w-80
            rounded-xl
            border
            bg-gray-50
            py-2.5
            pl-10
            pr-4
            outline-none
            transition
            focus:border-black
            focus:bg-white
          "
          />

        </div>

      </div>

      {/* Right */}

      <div
        className="
        flex
        items-center
        gap-5
      "
      >

        <button
          className="
          rounded-lg
          p-2
          transition
          hover:bg-gray-100
        "
        >
          <Bell size={20} />
        </button>

        <div className="hidden sm:block">

          <p className="text-sm text-gray-500">
            Welcome
          </p>

          <p className="font-semibold">
            {username}
          </p>

        </div>

        <UserDropdown />

      </div>

    </header>
  );
}