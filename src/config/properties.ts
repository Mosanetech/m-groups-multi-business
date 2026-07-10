import { Property } from "@/types/property";

export const PROPERTIES: Property[] = [
  {
    slug: "house-1",

    title: "Modern Family House",

    city: "Zomba",

    location: "Matawale",

    price: 120000000,

    bedrooms: 4,

    bathrooms: 3,

    parking: 2,

    area: 320,

    image: "/images/properties/house1.jpg",

    gallery: [
      "/images/properties/house1.jpg",
      "/images/properties/house2.jpg",
      "/images/properties/house3.jpg",
    ],

    description:
      "Beautiful modern family house located in Matawale with spacious rooms, secure parking and private garden.",

    amenities: [
      "Swimming Pool",
      "Solar Power",
      "Electric Fence",
      "Borehole",
      "Wi-Fi",
      "Garden",
    ],

    featured: true,

    createdAt: "2026-07-08",

    type: "House",

    status: "For Sale",

    latitude: -15.385,

    longitude: 35.318,
  },

  {
    slug: "land-1",

    title: "Commercial Plot",

    city: "Lilongwe",

    location: "Area 6",

    price: 75000000,

    bedrooms: 0,

    bathrooms: 0,

    parking: 10,

    area: 1200,

    image: "/images/properties/land1.jpg",

    gallery: [
      "/images/properties/land1.jpg",
    ],

    description:
      "Prime commercial land suitable for offices, shopping complex or apartments.",

    amenities: [
      "Road Access",
      "Electricity Available",
      "Water Available",
      "Corner Plot",
    ],

    featured: false,

    createdAt: "2026-07-09",

    type: "Land",

    status: "For Sale",

    latitude: -13.9626,

    longitude: 33.7741,
  },
];