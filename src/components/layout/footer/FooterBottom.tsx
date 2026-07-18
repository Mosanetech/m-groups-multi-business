import { getSiteSettings } from "@/lib/site-settings";

export default async function FooterBottom() {

  const settings =
    await getSiteSettings();

  return (

    <div
      className="
      mt-16
      border-t
      pt-8
      text-center
      text-sm
      text-muted-foreground
    "
    >

      {

        settings.copyright ||

        `© ${new Date().getFullYear()} ${settings.companyName}. All rights reserved.`

      }

    </div>

  );

}