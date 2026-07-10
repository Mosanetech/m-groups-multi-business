export interface Property {
  slug: string;

  title: string;

  city:
    | "Blantyre"
    | "Lilongwe"
    | "Mzuzu"
    | "Zomba";

  location: string;

  price: number;

  bedrooms: number;

  bathrooms: number;

  parking: number;

  area: number;

  image: string;

  gallery: string[];

  description: string;

  amenities: string[];

  featured: boolean;

  createdAt: string;

  type:
    | "House"
    | "Apartment"
    | "Land"
    | "Office"
    | "Farm";

  status:
  | "For Sale"
  | "For Rent"
  | "Sold"
  | "Rented";

  latitude: number;

  longitude: number;
}