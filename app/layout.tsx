import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// @ts-ignore
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import LenisScroll from "@/components/LenisScroll";

import CursorLight from "@/components/animations/CursorLight";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "CodeBlooms - Premium Web Development Studio",
  description:
    "Partner with CodeBlooms to engineer lightning-fast, high-converting websites for SaaS brands. Scale your MRR with custom Next.js solutions and build a true growth engine.",

  keywords: [
    "CodeBlooms",
    "Next.js agency",
    "SaaS website development",
    "High performance websites",
    "Web development studio",
  ],

  authors: [{ name: "CodeBlooms Team" }],
  creator: "CodeBlooms",
  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "CodeBlooms - Premium Web Development Studio",
    description:
      "Lightning-fast, conversion-focused SaaS websites built with Next.js.",
    url: "https://yourdomain.com",
    siteName: "CodeBlooms",
    images: [
      {
        url: "/seo-image.png", // public folder me rakho
        width: 1200,
        height: 630,
        alt: "CodeBlooms SaaS Web Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodeBlooms - Premium Web Development Studio",
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
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-black`}
      >
        <CursorLight />
        {/* <LenisScroll /> */}
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        {/* <ContactNow /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
