import PageHero from "@/components/shared/page-hero/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a question or need assistance? We'd love to hear from you."
      />

      <section className="py-24">
        <div className="container mx-auto">

          <div className="mx-auto max-w-3xl rounded-3xl border bg-card p-10">

            <h2 className="text-3xl font-bold">
              Contact Information
            </h2>

            <p className="mt-6 text-muted-foreground">
              Contact form, Google Maps, WhatsApp,
              email and social media links will be
              added in the next phase.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}