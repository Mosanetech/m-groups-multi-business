"use client";

import { useEffect, useState } from "react";
import type { SessionPayload } from "@/lib/session";

import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

interface Props {
  children: React.ReactNode;
  session: SessionPayload;
}

export default function AdminLayout({
  children,
  session,
}: Props) {
  const [collapsed, setCollapsed] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  function toggleSidebar() {
    setCollapsed((prev) => !prev);
  }

  function openMobile() {
    setMobileOpen(true);
  }

  function closeMobile() {
    setMobileOpen(false);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeMobile();
      }
    }

    window.addEventListener("keydown", onKey);

    return () =>
      window.removeEventListener(
        "keydown",
        onKey
      );
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">

      {/* Desktop Sidebar */}

      <aside
        className={`
        hidden
        lg:flex
        lg:flex-col
        border-r
        bg-white
        transition-all
        duration-300
        ${
          collapsed
            ? "w-20"
            : "w-72"
        }
      `}
      >
        <Sidebar
          collapsed={collapsed}
          closeMobile={closeMobile}
          session={session}
        />
      </aside>

      {/* Mobile Overlay */}

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Mobile Sidebar */}

      <aside
        className={`
        fixed
        left-0
        top-0
        z-50
        flex
        h-screen
        w-72
        flex-col
        border-r
        bg-white
        shadow-2xl
        transition-transform
        duration-300
        lg:hidden
        ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
      `}
      >
        <Sidebar
          collapsed={false}
          closeMobile={closeMobile}
          session={session}
        />
      </aside>

      {/* Main */}

      <div className="flex flex-1 flex-col overflow-hidden">

        <Header
          collapsed={collapsed}
          toggleSidebar={
            toggleSidebar
          }
          openMobile={openMobile}
          username={session.username}
        />

        <main
          className="
          flex-1
          overflow-y-auto
          p-4
          md:p-6
          lg:p-8
        "
        >
          {children}
        </main>

      </div>

    </div>
  );
}