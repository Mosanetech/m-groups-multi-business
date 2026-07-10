"use client";

import { useState } from "react";

export default function RequestViewingForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  return (

    <section className="mt-20 rounded-3xl border p-8">

      <h2 className="text-3xl font-bold">
        Request a Viewing
      </h2>

      <div className="mt-8 grid gap-6">

        <input
          placeholder="Full Name"
          className="rounded-xl border p-4"
          value={form.name}
          onChange={(e)=>
            setForm({
              ...form,
              name:e.target.value
            })
          }
        />

        <input
          placeholder="Phone Number"
          className="rounded-xl border p-4"
          value={form.phone}
          onChange={(e)=>
            setForm({
              ...form,
              phone:e.target.value
            })
          }
        />

        <input
          type="date"
          className="rounded-xl border p-4"
          value={form.date}
          onChange={(e)=>
            setForm({
              ...form,
              date:e.target.value
            })
          }
        />

        <textarea
          rows={5}
          placeholder="Message"
          className="rounded-xl border p-4"
          value={form.message}
          onChange={(e)=>
            setForm({
              ...form,
              message:e.target.value
            })
          }
        />

        <button className="rounded-xl bg-primary py-4 font-semibold text-white">
          Request Viewing
        </button>

      </div>

    </section>

  );

}