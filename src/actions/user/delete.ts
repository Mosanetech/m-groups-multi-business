"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteUser(id: string) {

  const users = await prisma.user.count();

  if (users <= 1) {
    throw new Error(
      "Cannot delete the last user."
    );
  }

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new Error("User not found.");
  }

  if (user.role === "SUPER_ADMIN") {

    const superAdmins = await prisma.user.count({
      where: {
        role: "SUPER_ADMIN",
      },
    });

    if (superAdmins <= 1) {
      throw new Error(
        "Cannot delete the last Super Admin."
      );
    }
  }

  await prisma.user.delete({
    where: { id },
  });

  revalidatePath("/admin/users");
}