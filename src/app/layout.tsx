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
  description: "We are a full-service digital agency specializing in web development, mobile apps, and digital strategy. Design. Build. Grow.",
  keywords: ["Digital Agency", "Web Development", "Mobile Apps", "UI/UX Design", "SEO", "Marketing", "Cyberkode"],
  authors: [{ name: "Cyberkode Team" }],
  creator: "Cyberkode",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cyberkode.com.au",
    siteName: "Cyberkode",
    title: "Cyberkode | Transforming Ideas Into Digital Reality",
    description: "We are a full-service digital agency specializing in web development, mobile apps, and digital strategy.",
    images: [
      {
        url: "/og-image.jpg", // We should ideally create this image
        width: 1200,
        height: 630,
        alt: "Cyberkode Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberkode | Transforming Ideas Into Digital Reality",
    description: "We are a full-service digital agency specializing in web development, mobile apps, and digital strategy.",
    images: ["/og-image.jpg"],
  },
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
