import Link from "next/link";

import FooterBottom from "./FooterBottom";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">

      <div className="container mx-auto py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          <div>

            <Link
              href="/"
              className="text-3xl font-bold"
            >
              M Groups
            </Link>

            <p className="mt-6 leading-7 text-muted-foreground">
              Delivering Real Estate,
              ICT, Financial and Educational
              services under one trusted brand.
            </p>

          </div>

          <FooterLinks />

          <FooterContact />

        </div>

        <FooterBottom />

      </div>

    </footer>
  );
}