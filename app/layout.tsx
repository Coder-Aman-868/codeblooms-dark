import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
// @ts-ignore
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import dynamic from 'next/dynamic';
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const Footer = dynamic(() => import("@/components/common/Footer"));
const BackToTop = dynamic(() => import("@/components/common/BackToTop"));

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Clear Orbit - Premium Web Development Studio",
  description:
    "Partner with Clear Orbit to engineer lightning-fast, high-converting websites for SaaS brands. Scale your MRR with custom Next.js solutions and build a true growth engine.",

  keywords: [
    "Clear Orbit",
    "Next.js agency",
    "SaaS website development",
    "High performance websites",
    "Web development studio",
    "Frontend development",
    "React development",
    "Website development company",
    "E-commerce development",
    "Web design agency",
    "Professional website",
    "Custom website development",
    "Digital transformation",
    "Tech startup development",
    "Conversion rate optimization",
    "UI/UX design",
    "Web development services"
  ],

  authors: [{ name: "Clear Orbit Team" }],
  creator: "Aman Siwach",
  metadataBase: new URL("https://clear-orbit.vercel.app/"),

  openGraph: {
    title: "Clear Orbit - Premium Web Development Studio",
    description:
      "Lightning-fast, conversion-focused SaaS websites built with Next.js.",
    url: "https://yourdomain.com",
    siteName: "Clear Orbit",
    images: [
      {
        url: "/seo-image.png", // public folder me rakho
        width: 1200,
        height: 630,
        alt: "Clear Orbit SaaS Web Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Clear Orbit - Premium Web Development Studio",
    description:
      "High-converting SaaS websites engineered for growth.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${poppins.className} antialiased bg-black`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
