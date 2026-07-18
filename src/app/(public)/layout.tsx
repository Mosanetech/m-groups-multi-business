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

      <main className="min-h-screen">
        <FloatingWhatsApp />
        {children}
      </main>

      <Footer />
    </>
  );
}