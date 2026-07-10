import Link from "next/link";

const COMPANY = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Real Estate", href: "/services/real-estate" },
  { label: "ICT", href: "/services/ict" },
  { label: "Financial Services", href: "/services/finance" },
  { label: "Academy", href: "/services/academy" },
];

export default function FooterLinks() {
  return (
    <>
      <div>
        <h3 className="mb-6 text-lg font-bold">Company</h3>

        <div className="space-y-3">
          {COMPANY.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-muted-foreground transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-lg font-bold">Services</h3>

        <div className="space-y-3">
          {SERVICES.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-muted-foreground transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}