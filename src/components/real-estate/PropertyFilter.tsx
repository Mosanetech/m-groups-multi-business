"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PropertyFilter({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-2xl border px-5 py-4 outline-none"
    >
      <option value="">All Types</option>

      <option>House</option>

      <option>Apartment</option>

      <option>Land</option>

    </select>
  );
}