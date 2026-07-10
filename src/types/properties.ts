export interface Property {
  slug: string;

  title: string;

  city: string;

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
    | "Farm"
    | "Shop";

  status:
    | "For Sale"
    | "To Let"
    | "Sold"
    | "Rented"
    | "Reserved";

  latitude: number;

  longitude: number;
}