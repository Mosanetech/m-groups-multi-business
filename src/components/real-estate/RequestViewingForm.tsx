"use client";

import { useState } from "react";

interface Props {
  propertyId: string;
}

export default function RequestViewingForm({
  propertyId,
}: Props) {

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    setLoading(true);

    const form =
      new FormData(e.currentTarget);

    await fetch("/api/property-inquiry", {

      method: "POST",

      body: JSON.stringify({

        propertyId,

        fullName: form.get("fullName"),

        email: form.get("email"),

        phone: form.get("phone"),

        message: form.get("message"),

      }),

    });

    alert("Inquiry sent successfully.");

    setLoading(false);

    e.currentTarget.reset();

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="mt-16 rounded-3xl border p-8 space-y-5"
    >

      <h2 className="text-2xl font-bold">
        Request Viewing
      </h2>

      <input
        name="fullName"
        placeholder="Full Name"
        required
        className="w-full rounded-xl border p-3"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full rounded-xl border p-3"
      />

      <input
        name="phone"
        placeholder="Phone"
        className="w-full rounded-xl border p-3"
      />

      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        className="w-full rounded-xl border p-3"
      />

      <button
        disabled={loading}
        className="rounded-xl bg-black px-6 py-3 text-white"
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </button>

    </form>

  );

}