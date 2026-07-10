import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "M Groups",
  description: "Business Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider>

          <Header />

          <main className="min-h-screen">
            <FloatingWhatsApp />
            {children}
          </main>

          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}