"use client";

export default function ListPropertyForm() {

  return (

    <section className="mt-20 rounded-3xl border p-8">

      <h2 className="text-3xl font-bold">
        List Your Property
      </h2>

      <p className="mt-2 text-muted-foreground">
        Want to sell or rent your property? Submit the details below.
      </p>

      <div className="mt-8 grid gap-5">

        <input
          placeholder="Owner Name"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Phone Number"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Property Location"
          className="rounded-xl border p-4"
        />

        <select
          className="rounded-xl border p-4"
        >
          <option>House</option>
          <option>Apartment</option>
          <option>Land</option>
          <option>Office</option>
          <option>Farm</option>
        </select>

        <textarea
          rows={5}
          placeholder="Describe your property..."
          className="rounded-xl border p-4"
        />

        <button className="rounded-xl bg-primary py-4 font-semibold text-white">
          Submit Property
        </button>

      </div>

    </section>

  );

}