import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { siteMetadata, generateStructuredData } from "@/lib/metadata";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: "Step Up Marketing | Turn Digital Presence Into Real Business Growth",
    template: "%s | Step Up Marketing",
  },
  description:
    "We build high-performing websites, AI SEO & GEO search strategies, and targeted acquisition campaigns designed to capture demand and scale enterprise revenue.",
  keywords: [
    "Digital Growth Partner",
    "AI SEO",
    "Generative Engine Optimization",
    "GEO",
    "Web Engineering",
    "Enterprise SEO",
    "Google Ads PPC",
    "High-Performance Websites",
  ],
  authors: [{ name: "Step Up Marketing" }],
  creator: "Step Up Marketing",
  publisher: "Step Up Marketing",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMetadata.siteUrl,
    title: "Step Up Marketing | Digital Growth Partner",
    description:
      "Turn your digital presence into compounding business growth. High-speed engineering, AI SEO, and revenue pipelines.",
    siteName: siteMetadata.brandName,
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Step Up Marketing - Digital Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Step Up Marketing | Digital Growth Partner",
    description:
      "Turn your digital presence into compounding business growth. High-speed engineering, AI SEO, and revenue pipelines.",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import WhatsAppButton from "@/components/WhatsAppButton";
import MobileAppNav from "@/components/MobileAppNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-surface font-sans font-body-md text-on-surface antialiased selection:bg-[#ffe4e6] selection:text-[#e11d48]">
        {children}
        <WhatsAppButton />
        <MobileAppNav />
      </body>
    </html>
  );
}
