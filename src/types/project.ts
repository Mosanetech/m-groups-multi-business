export interface Project {
  slug: string;

  title: string;

  shortDescription: string;

  description: string;

  image: string;

  gallery: string[];

  category:
    | "Website"
    | "Mobile App"
    | "Desktop"
    | "Networking"
    | "Cyber Security"
    | "Cloud"
    | "Data";

  featured: boolean;

  technologies: string[];

  client: string;

  completed: string;

  website?: string;

  playStore?: string;

  appStore?: string;
}