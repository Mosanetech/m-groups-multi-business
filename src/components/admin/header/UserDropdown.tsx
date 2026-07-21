"use client";

import { LogOut, User } from "lucide-react";

export default function UserDropdown() {
  return (
    <details className="relative">

      <summary
        className="
          flex
          cursor-pointer
          items-center
          gap-3
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          py-2
          text-gray-900
          shadow-sm
          transition
          hover:bg-gray-100
          list-none
        "
      >
        <User size={18} />

        <span className="font-medium">
          Admin
        </span>
      </summary>

      <div
        className="
          absolute
          right-0
          mt-3
          w-56
          overflow-hidden
          rounded-xl
          border
          border-gray-200
          bg-white
          shadow-xl
        "
      >
        <form
          action="/api/admin/logout"
          method="post"
        >
          <button
            type="submit"
            className="
              flex
              w-full
              items-center
              gap-3
              px-4
              py-3
              text-gray-700
              transition
              hover:bg-red-50
              hover:text-red-600
            "
          >
            <LogOut size={18} />

            Logout
          </button>
        </form>
      </div>

    </details>
  );
}