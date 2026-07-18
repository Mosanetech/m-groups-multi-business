"use client";

import { useForm } from "react-hook-form";

import {
  createUser,
  updateUser,
} from "@/actions/user";

import SubmitButton from "./SubmitButton";

interface Props {
  user?: any;
}

export default function UserForm({
  user,
}: Props) {

  const {
    register,
    handleSubmit,
  } = useForm({

    defaultValues: user ?? {

      fullName: "",

      username: "",

      email: "",

      password: "",

      role: "ADMIN",

      active: true,

    },

  });

  async function onSubmit(
    values: any
  ) {

    if (user) {

      await updateUser(
        user.id,
        values
      );

    } else {

      await createUser(
        values
      );

    }

  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl border bg-white p-8"
    >

      <input
        {...register("fullName")}
        placeholder="Full Name"
        className="w-full rounded-lg border p-3"
      />

      <input
        {...register("username")}
        placeholder="Username"
        className="w-full rounded-lg border p-3"
      />

      <input
        {...register("email")}
        placeholder="Email"
        className="w-full rounded-lg border p-3"
      />

      <input
        type="password"
        {...register("password")}
        placeholder="Password"
        className="w-full rounded-lg border p-3"
      />

      <select
        {...register("role")}
        className="w-full rounded-lg border p-3"
      >
        <option value="ADMIN">
          Admin
        </option>

        <option value="SUPER_ADMIN">
          Super Admin
        </option>
      </select>

      {user && (

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            defaultChecked={user?.active ?? true}
            {...register("active")}
            />

          Active

        </label>

      )}

      <SubmitButton
        edit={!!user}
      />

    </form>

  );
}