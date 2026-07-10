"use client";

import { useState } from "react";

import { PROPERTIES } from "@/config/properties";

import PropertyCard from "./PropertyCard";
import PropertySearch from "./PropertySearch";
import PropertyFilter from "./PropertyFilter";

export default function PropertyGrid() {

  const [search, setSearch] = useState("");

  const [type, setType] = useState("");

  const filtered = PROPERTIES.filter((property) => {

    const matchesSearch =
      property.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      property.city
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      property.location
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesType =
      !type || property.type === type;

    return matchesSearch && matchesType;

  });

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 md:flex-row">

        <PropertySearch
          value={search}
          onChange={setSearch}
        />

        <PropertyFilter
          value={type}
          onChange={setType}
        />

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {filtered.map((property) => (

          <PropertyCard
            key={property.slug}
            property={property}
          />

        ))}

      </div>
    </>
  );
}