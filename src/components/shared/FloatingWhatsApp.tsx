"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/config/company";


const PHONE_NUMBER = "265999123456"; // <-- Replace with M Groups WhatsApp number

export default function FloatingWhatsApp() {
  return (
    <Link
      href={`https://wa.me/${COMPANY.whatsapp}`}
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
        duration-300
        hover:scale-110
        hover:bg-green-600
      "
    >
      <MessageCircle size={32} />
    </Link>
  );
}