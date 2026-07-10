export interface ServiceSlide {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  image: string;
  color: string;
}

export const SERVICES: ServiceSlide[] = [
  {
    id: "real-estate",
    title: "Real Estate",
    description:
      "Find houses, apartments and land in prime locations.",
    buttonText: "View Properties",
     href: "/services/real-estate",
    image: "/images/services/real-estate.jpg",
    color: "#0F766E",
  },
  {
    id: "ict",
    title: "ICT Solutions",
    description:
      "Modern websites, mobile apps and enterprise software.",
    buttonText: "View Projects",
    href: "/services/ict",
    image: "/images/services/ict.jpg",
    color: "#2563EB",
  },
  {
    id: "finance",
    title: "Financial Services",
    description:
      "Professional financial consulting and investment solutions.",
    buttonText: "Explore Solutions",
     href: "/services/finance",
    image: "/images/services/finance.jpg",
    color: "#16A34A",
  },
  {
    id: "academy",
    title: "Academy",
    description:
      "Training, tutoring and professional development.",
    buttonText: "Browse Courses",
    href: "/services/education",
    image: "/images/services/academy.jpg",
    color: "#9333EA",
  },
];