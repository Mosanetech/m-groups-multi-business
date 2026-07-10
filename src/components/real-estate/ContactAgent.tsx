"use client";

import {
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Share2,
} from "lucide-react";

export default function ContactAgent() {

  return (

    <div className="sticky top-28 rounded-3xl border p-8 shadow-sm">

      <h3 className="text-3xl font-bold">

        Contact Agent

      </h3>

      <div className="mt-8 space-y-4">

        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 text-white">

          <Phone />

          Call Agent

        </button>

        <button className="flex w-full items-center justify-center gap-3 rounded-xl border py-4">

          <MessageCircle />

          WhatsApp

        </button>

        <button className="flex w-full items-center justify-center gap-3 rounded-xl border py-4">

          <Mail />

          Email

        </button>

        <button className="flex w-full items-center justify-center gap-3 rounded-xl border py-4">

          <Calendar />

          Book Viewing

        </button>

        <button className="flex w-full items-center justify-center gap-3 rounded-xl border py-4">

          <Share2 />

          Share Property

        </button>

      </div>

    </div>

  );
}