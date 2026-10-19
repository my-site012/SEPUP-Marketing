import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { siteMetadata, generateStructuredData } from "@/lib/metadata";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileAppNav from "@/components/MobileAppNav";

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
    default: "Step Up Marketing | Supporting Businesses Ready to Scale with Marketing",
    template: "%s | Step Up Marketing",
  },
  description:
    "Boutique digital marketing agency in Mississauga & GTA supporting growing businesses with practical marketing strategies, creative solutions, and hands-on execution.",
  keywords: [
    "Digital Marketing Agency Mississauga",
    "Boutique Marketing Agency GTA",
    "Marketing Strategy Toronto",
    "Website Design Mississauga",
    "Google Ads Management GTA",
    "Social Media Marketing Ontario",
    "Local SEO Mississauga",
    "Garvita Uppal",
  ],
  authors: [{ name: "Step Up Marketing" }],
  creator: "Step Up Marketing",
  publisher: "Step Up Marketing",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteMetadata.siteUrl,
    title: "Step Up Marketing | Supporting Businesses Ready to Scale",
    description:
      "Boutique digital marketing agency in Mississauga & GTA supporting small and medium-sized businesses with practical strategies and hands-on execution.",
    siteName: siteMetadata.brandName,
    images: [
      {
        url: "/founder.png",
        width: 1200,
        height: 630,
        alt: "Step Up Marketing - Founded by Garvita Uppal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Step Up Marketing | Supporting Businesses Ready to Scale",
    description:
      "Boutique digital marketing agency in Mississauga & GTA supporting small and medium-sized businesses with practical strategies and hands-on execution.",
    images: ["/founder.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased text-on-surface bg-surface selection:bg-rose-100 selection:text-rose-900 min-h-screen flex flex-col justify-between">
        {children}
        <WhatsAppButton />
        <MobileAppNav />
      </body>
    </html>
  );
}
