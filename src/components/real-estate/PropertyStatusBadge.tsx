interface Props {
  status:
    | "For Sale"
    | "For Rent"
    | "Sold"
    | "Rented";
}

export default function PropertyStatusBadge({
  status,
}: Props) {

  const colors = {

    "For Sale":
      "bg-green-600",

    "For Rent":
      "bg-blue-600",

    Sold:
      "bg-red-600",

    Rented:
      "bg-gray-700",

  };

  return (

    <span
      className={`absolute left-5 top-5 rounded-full px-4 py-2 text-sm font-semibold text-white ${colors[status]}`}
    >
      {status}
    </span>

  );

}