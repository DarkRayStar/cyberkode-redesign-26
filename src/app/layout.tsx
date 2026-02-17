import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Cyberkode | Transforming Ideas Into Digital Reality",
  description: "We are a full-service digital agency specializing in web development, mobile apps, and digital strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
