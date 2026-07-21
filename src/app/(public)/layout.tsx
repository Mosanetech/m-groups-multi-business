import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="min-h-screen overflow-x-hidden">
        <FloatingWhatsApp />

        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}