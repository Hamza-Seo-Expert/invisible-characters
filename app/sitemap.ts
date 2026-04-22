import type { MetadataRoute } from "next";

// This is the CRITICAL line for output: export
export const dynamic = "force-static";

const SITE_URL = "https://www.invisible-character.net";
const LANGS = ["en", "es", "pt", "ar"];

const STATIC_ROUTES = [
  "",
  "/blog",
  "/invisible-character-for-discord",
  "/blank-text-instagram",
  "/empty-name-pubg",
  "/invisible-text-whatsapp",
  "/copy-blank-space",
];

const BLOG_SLUGS = [
  "how-to-post-blank-status-whatsapp",
  "creative-ways-to-use-invisible-characters",
  "how-to-hide-your-name-on-social-media",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Root redirect
  entries.push({
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  });

  for (const lang of LANGS) {
    for (const route of STATIC_ROUTES) {
      entries.push({
        url: `${SITE_URL}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            LANGS.map((l) => [l, `${SITE_URL}/${l}${route}`])
          ),
        },
      });
    }

    for (const slug of BLOG_SLUGS) {
      entries.push({
        url: `${SITE_URL}/${lang}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            LANGS.map((l) => [l, `${SITE_URL}/${l}/blog/${slug}`])
          ),
        },
      });
    }
  }

  return entries;
}
