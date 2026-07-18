import Link from "next/link";

import { User } from "@prisma/client";

import ActiveBadge from "./ActiveBadge";
import RoleBadge from "./RoleBadge";
import DeleteUserButton from "./DeleteUserButton";

interface Props {
  user: User;
}

export default function UserRow({
  user,
}: Props) {

  return (

    <tr className="border-b hover:bg-gray-50">

      <td className="p-4 font-medium">
        {user.fullName}
      </td>

      <td>{user.username}</td>

      <td>{user.email}</td>

      <td>

        <RoleBadge
          role={user.role}
        />

      </td>

      <td>

        <ActiveBadge
          active={user.active}
        />

      </td>

      <td>

        {user.lastLogin
          ? new Date(
              user.lastLogin
            ).toLocaleDateString()
          : "-"}

      </td>

      <td className="space-x-3">

        <Link
          href={`/admin/users/${user.id}/edit`}
          className="text-blue-600 hover:underline"
        >
          Edit
        </Link>

        <DeleteUserButton
          id={user.id}
        />

      </td>

    </tr>

  );
}