import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { siteMetadata, generateStructuredData } from "@/lib/metadata";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

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
        url: "https://lh3.googleusercontent.com/aida/AEtjO1WZUyDCDm5z35boHaN70aKIVV9EjdbU5xEG5H1P45y9Av-QgrKO2SqtFouf4nhOnC8B0rS58D0Zohhi6dvFYo3UHZmKH7OAT8BPG9VyjoLdnelOfHQzWEmfR_0PYynu5l6HdKdorXGUL6UV2Ptd8WBv9csFuFlI_aJNtd1mtPcx0c7ElknyKoIIwkUupU9YEVik_YjfmSISG6PHgH74ZH1TC2gMovyULaTibVZBUUBJ7FlY7xpVB50GLck",
        width: 1200,
        height: 630,
        alt: "Step Up Marketing - Digital Growth Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Step Up Marketing | Digital Growth Partner",
    description:
      "Turn your digital presence into compounding business growth. High-speed engineering, AI SEO, and revenue pipelines.",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1WZUyDCDm5z35boHaN70aKIVV9EjdbU5xEG5H1P45y9Av-QgrKO2SqtFouf4nhOnC8B0rS58D0Zohhi6dvFYo3UHZmKH7OAT8BPG9VyjoLdnelOfHQzWEmfR_0PYynu5l6HdKdorXGUL6UV2Ptd8WBv9csFuFlI_aJNtd1mtPcx0c7ElknyKoIIwkUupU9YEVik_YjfmSISG6PHgH74ZH1TC2gMovyULaTibVZBUUBJ7FlY7xpVB50GLck",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
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
      </body>
    </html>
  );
}
