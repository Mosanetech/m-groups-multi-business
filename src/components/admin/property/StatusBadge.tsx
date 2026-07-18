interface Props {
  status:
    | "FOR_SALE"
    | "TO_LET"
    | "SOLD"
    | "RENTED";
}

export default function StatusBadge({
  status,
}: Props) {
  const colors = {
    FOR_SALE:
      "bg-green-100 text-green-700",

    TO_LET:
      "bg-blue-100 text-blue-700",

    SOLD:
      "bg-red-100 text-red-700",

    RENTED:
      "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[status]}`}
    >
      {status.replace("_", " ")}
    </span>
  );
}