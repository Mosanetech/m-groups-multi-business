"use server";

import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";

import { revalidatePath } from "next/cache";

interface UserData {
  username: string;
  email: string;
  fullName: string;
  password: string;
  role: "ADMIN" | "SUPER_ADMIN";
}

export async function createUser(
  data: UserData
) {

  await prisma.user.create({

    data: {

      username: data.username,

      email: data.email,

      fullName: data.fullName,

      password: await hashPassword(
        data.password
      ),

      role: data.role,

    },

  });

  revalidatePath("/admin/users");

}