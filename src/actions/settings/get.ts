"use server";

import { prisma } from "@/lib/prisma";

export async function getSettings() {
 let settings = await prisma.siteSettings.findUnique({
  where: {
    id: "default",
  },
});
  if (!settings) {
    settings = await prisma.siteSettings.create({
     data: {
  id: "default",
  companyName: "M360",
   },
    });
  }

  return {
    id: settings.id,

    companyName: settings.companyName,

    tagline: settings.tagline ?? "",
    description: settings.description ?? "",

    logo: settings.logo ?? "",
    favicon: settings.favicon ?? "",

    whatsapp: settings.whatsapp ?? "",
    phone1: settings.phone1 ?? "",
    phone2: settings.phone2 ?? "",

    email: settings.email ?? "",
    address: settings.address ?? "",
    googleMaps: settings.googleMaps ?? "",

    facebook: settings.facebook ?? "",
    instagram: settings.instagram ?? "",
    linkedin: settings.linkedin ?? "",
    twitter: settings.twitter ?? "",
    youtube: settings.youtube ?? "",
    tiktok: settings.tiktok ?? "",

    metaTitle: settings.metaTitle ?? "",
    metaDescription: settings.metaDescription ?? "",
    keywords: settings.keywords ?? "",

    footerText: settings.footerText ?? "",
    copyright: settings.copyright ?? "",
  };
}