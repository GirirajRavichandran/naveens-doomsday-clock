import type { MetadataRoute } from "next";
import { SITE_URL } from "./siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: "2025-01-13",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
