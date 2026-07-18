import {
  getUsers,
} from "@/actions/user";

import UserToolbar from "@/components/admin/users/UserToolbar";

import UserTable from "@/components/admin/users/UserTable";

export default async function UsersPage() {

  const users =
    await getUsers();

  return (

    <div className="space-y-8">

      <UserToolbar />

      <UserTable
        users={users}
      />

    </div>

  );

}