import Link from "next/link";

import FooterBottom from "./FooterBottom";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";

import { getSiteSettings } from "@/lib/site-settings";

export default async function Footer() {

  const settings =
    await getSiteSettings();

  return (

    <footer className="border-t bg-muted/30">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-4">

          <div>

            <Link
              href="/"
              className="text-3xl font-bold"
            >
              {settings.companyName}
            </Link>

            <p className="mt-6 leading-7 text-foreground/80">

              {settings.footerText ||

                "Delivering Real Estate, ICT, Financial and Educational services under one trusted brand."}

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