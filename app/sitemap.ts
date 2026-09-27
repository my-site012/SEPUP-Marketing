import { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/lib/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.stepupmarketing.ca";
  const now = new Date();

  const serviceUrls: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/#industries`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#portfolio`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  return [...staticUrls, ...serviceUrls];
}
