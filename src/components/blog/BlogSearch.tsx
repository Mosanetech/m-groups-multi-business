"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function BlogSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search articles..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border p-4 outline-none focus:border-primary"
    />
  );
}