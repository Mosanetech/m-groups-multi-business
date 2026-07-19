"use client";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
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

   <Card>

    <form
    onSubmit={handleSubmit(onSubmit)}
    className="space-y-6"
    > 

      <div>

      <Label>
      Full Name
      </Label>

      <Input
      {...register("fullName")}
      />

      </div>

     <div>

        <Label>
        Username
        </Label>

        <Input
        {...register("username")}
        />

        </div>

      <div>

      <Label>
      Email
      </Label>

      <Input
      type="email"
      {...register("email")}
      />

      </div>

       <div>

        <Label>
        Password
        </Label>

        <Input
        type="password"
        {...register("password")}
        />

        </div>

      <div>

      <Label>
      Role
      </Label>

      <Select
      {...register("role")}
      >

      <option value="ADMIN">
      Admin
      </option>

      <option value="SUPER_ADMIN">
      Super Admin
      </option>

      </Select>

      </div>
      {user && (

        <div className="flex items-center gap-3">

        <Checkbox
        {...register("active")}
        />

        <Label className="mb-0">
        Active
        </Label>

        </div>
      )}

      <SubmitButton
        edit={!!user}
      />

   </form>

</Card>

  );
}