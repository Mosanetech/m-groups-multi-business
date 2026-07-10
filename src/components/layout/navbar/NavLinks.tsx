import Link from "next/link";
import { NAVIGATION } from "@/config/navigation";

interface NavLinksProps {
  onClick?: () => void;
  className?: string;
}

export default function NavLinks({
  onClick,
  className,
}: NavLinksProps) {
  return (
    <>
      {NAVIGATION.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className={className}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}