import { User } from "@prisma/client";

import UserRow from "./UserRow";

interface Props {
  users: User[];
}

export default function UserTable({
  users,
}: Props) {

  if (!users.length) {

    return (
      <div className="rounded-xl border bg-white p-12 text-center">

        <h2 className="text-2xl font-semibold">
          No Users
        </h2>

      </div>
    );

  }

  return (

    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="w-full">

        <thead>

          <tr className="border-b bg-gray-50">

            <th className="p-4 text-left">
              Name
            </th>

            <th className="text-left">
              Username
            </th>

            <th className="text-left">
              Email
            </th>

            <th className="text-left">
              Role
            </th>

            <th className="text-left">
              Status
            </th>

            <th className="text-left">
              Last Login
            </th>

            <th className="text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <UserRow
              key={user.id}
              user={user}
            />

          ))}

        </tbody>

      </table>

    </div>

  );
}