"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export interface UpdateSettingsData {
  companyName: string;
  tagline?: string;
  description?: string;

  logo?: string;
  favicon?: string;

  whatsapp?: string;
  phone1?: string;
  phone2?: string;

  email?: string;
  address?: string;
  googleMaps?: string;

  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;

  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;

  footerText?: string;
  copyright?: string;
}

export async function updateSettings(
  data: UpdateSettingsData
) {

   console.log("Incoming settings:", data);
  const existing = await prisma.siteSettings.findUnique({
  where: {
    id: "default",
  },
});
  if (!existing) {
  await prisma.siteSettings.create({
    data: {
      id: "default",
      ...data,
    },
  });
} else { {
    await prisma.siteSettings.update({
      where: {
        id: existing.id,
      },
      data,
    });
  }

  revalidatePath("/");
  revalidatePath("/admin/settings");
}}