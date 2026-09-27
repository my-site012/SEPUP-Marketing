import { BRAND } from "./constants";

export const siteMetadata = {
  title: "Step Up Marketing | Digital Growth & AI SEO Partner",
  description:
    "We build high-performing websites, generative search strategies (AI SEO & GEO), and automated acquisition pipelines designed to capture demand and scale enterprise revenue.",
  siteUrl: "https://stepupmarketing.com",
  brandName: BRAND.name,
};

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteMetadata.siteUrl}/#organization`,
        name: BRAND.name,
        url: siteMetadata.siteUrl,
        logo: {
          "@type": "ImageObject",
          url: BRAND.headerLogo,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: BRAND.phoneTel,
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"],
          },
        ],
        sameAs: [
          "https://linkedin.com",
          "https://twitter.com",
          "https://github.com",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteMetadata.siteUrl}/#website`,
        url: siteMetadata.siteUrl,
        name: BRAND.name,
        publisher: {
          "@id": `${siteMetadata.siteUrl}/#organization`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteMetadata.siteUrl}/#service`,
        name: BRAND.name,
        image: BRAND.headerLogo,
        telephone: BRAND.phoneTel,
        priceRange: "$$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3504 Hurontario St #3008",
          addressLocality: "Mississauga",
          addressRegion: "Ontario",
          postalCode: "L5B 0B9",
          addressCountry: "CA",
        },
      },
    ],
  };
}
