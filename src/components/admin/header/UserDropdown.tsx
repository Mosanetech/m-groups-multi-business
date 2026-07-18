"use client";

import {
  LogOut,
  User,
} from "lucide-react";

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
        px-4
        py-2
      "
      >
        <User />

        Admin
      </summary>

      <div
        className="
        absolute
        right-0
        mt-2
        w-52
        rounded-xl
        border
        bg-white
        shadow-lg
      "
      >

        <form
          action="/api/admin/logout"
          method="post"
        >

          <button
            className="
            flex
            w-full
            items-center
            gap-2
            px-4
            py-3
            hover:bg-gray-100
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