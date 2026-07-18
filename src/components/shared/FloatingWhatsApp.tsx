import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { getSiteSettings } from "@/lib/site-settings";

export default async function FloatingWhatsApp() {

  const settings =
    await getSiteSettings();

  if (!settings.whatsapp) {
    return null;
  }

  return (

    <Link
      href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      className="
      fixed
      bottom-6
      right-6
      z-50
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-full
      bg-green-500
      text-white
      shadow-2xl
      transition
      hover:scale-110
      hover:bg-green-600
    "
    >

      <MessageCircle size={30} />

    </Link>

  );

}