interface Props {
  role: "ADMIN" | "SUPER_ADMIN";
}

export default function RoleBadge({
  role,
}: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        role === "SUPER_ADMIN"
          ? "bg-purple-100 text-purple-700"
          : "bg-blue-100 text-blue-700"
      }`}
    >
      {role === "SUPER_ADMIN"
        ? "Super Admin"
        : "Admin"}
    </span>
  );
}