import { prisma } from "./prisma";

export async function getSiteSettings() {

  const settings =
    await prisma.siteSettings.findFirst();

  if (!settings) {

    return {

      companyName: "M Groups",

      whatsapp: "",

      phone1: "",

      phone2: "",

      email: "",

      address: "",

      facebook: "",

      instagram: "",

      linkedin: "",

      twitter: "",

      youtube: "",

      tiktok: "",

      footerText: "",

      copyright: "",

    };

  }

  return settings;

}