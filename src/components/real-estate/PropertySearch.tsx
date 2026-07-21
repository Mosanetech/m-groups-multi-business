"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PropertySearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">

      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/80"
        size={20}
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search property..."
        className="w-full rounded-2xl border py-4 pl-12 pr-4 outline-none focus:border-primary"
      />

    </div>
  );
}