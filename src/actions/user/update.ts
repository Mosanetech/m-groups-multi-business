"use server";

import { prisma } from "@/lib/prisma";

import { hashPassword } from "@/lib/password";

import { revalidatePath } from "next/cache";

interface UserData {

  username: string;

  email: string;

  fullName: string;

  password?: string;

  role: "ADMIN" | "SUPER_ADMIN";

  active: boolean;

}

export async function updateUser(
  id: string,
  data: UserData
) {

  await prisma.user.update({

    where: {
      id,
    },

    data: {

      username: data.username,

      email: data.email,

      fullName: data.fullName,

      role: data.role,

      active: data.active,

      ...(data.password && {
        password: await hashPassword(
          data.password
        ),
      }),

    },

  });

  revalidatePath("/admin/users");

}