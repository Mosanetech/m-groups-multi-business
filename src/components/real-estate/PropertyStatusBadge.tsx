import { PropertyStatus } from "@prisma/client";

interface Props {
  status: PropertyStatus;
}

const colors = {
  FOR_SALE: "bg-green-600",
  TO_LET: "bg-blue-600",
  SOLD: "bg-red-600",
  RENTED: "bg-gray-700",
};

const labels = {
  FOR_SALE: "For Sale",
  TO_LET: "To Let",
  SOLD: "Sold",
  RENTED: "Rented",
};

export default function PropertyStatusBadge({
  status,
}: Props) {

  return (

    <span
      className={`absolute left-5 top-5 rounded-full px-4 py-2 text-sm font-semibold text-white ${colors[status]}`}
    >
      {labels[status]}
    </span>

  );

}