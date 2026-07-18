interface Props {
  read: boolean;
}

export default function MessageStatus({
  read,
}: Props) {

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        read
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {read ? "Read" : "Unread"}
    </span>
  );
}