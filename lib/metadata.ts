import { BRAND } from "./constants";

export const siteMetadata = {
  title: "Step Up Marketing | Supporting Businesses Ready to Scale With Marketing",
  description:
    "Step Up Marketing is a boutique digital marketing agency in Mississauga & GTA supporting growing businesses with practical marketing strategies, creative solutions, and hands-on execution.",
  siteUrl: "https://www.stepupmarketing.ca",
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
          url: `${siteMetadata.siteUrl}${BRAND.headerLogo}`,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: BRAND.phoneTel,
            contactType: "customer service",
            availableLanguage: ["English"],
          },
        ],
        sameAs: [
          BRAND.socialLinks.instagram,
          BRAND.socialLinks.facebook,
          BRAND.socialLinks.linkedin,
          BRAND.socialLinks.googleBusiness,
          BRAND.socialLinks.founderLinkedin,
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
        image: `${siteMetadata.siteUrl}${BRAND.headerLogo}`,
        telephone: BRAND.phoneTel,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3504 Hurontario Street",
          addressLocality: "Mississauga",
          addressRegion: "Ontario",
          postalCode: "L5B 0B9",
          addressCountry: "CA",
        },
      },
    ],
  };
}
