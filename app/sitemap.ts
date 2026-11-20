import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: "2026-11-16", priority: 1 },
    { url: `${SITE_URL}/wellness/`, lastModified: "2026-11-16", priority: 0.9 },
    { url: `${SITE_URL}/blog/`, lastModified: "2026-11-16", priority: 0.7 },
    { url: `${SITE_URL}/type-2-diabetes-symptoms-treatment/`, lastModified: "2026-11-02", priority: 0.8 },
  ];
}
