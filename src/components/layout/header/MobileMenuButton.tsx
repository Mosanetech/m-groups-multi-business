"use client";

import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({
  isOpen,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-xl
        border border-border
        bg-background
        transition-all duration-300
        hover:scale-105 hover:bg-muted
        lg:hidden
      "
    >
      {isOpen ? (
        <X className="h-5 w-5" />
      ) : (
        <Menu className="h-5 w-5" />
      )}
    </button>
  );
}