import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${site.url}/`,
          id: `${site.url}/id`,
        },
      },
    },
    {
      url: `${site.url}/id`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${site.url}/`,
          id: `${site.url}/id`,
        },
      },
    },
  ];
}
