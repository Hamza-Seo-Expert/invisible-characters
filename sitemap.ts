import { MetadataRoute } from 'next';

// Sabse zaroori line static export ke liye
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = "https://www.invisible-character.net";
  const LANGS = ["en", "es", "pt", "ar"];

  // Static Pages
  const STATIC_ROUTES = [
    "",
    "/blog",
    "/invisible-character-for-discord",
    "/blank-text-instagram",
    "/empty-name-pubg",
    "/invisible-text-whatsapp",
    "/copy-blank-space",
  ];

  // Blog Slugs
  const BLOG_SLUGS = [
    "how-to-post-blank-status-whatsapp",
    "creative-ways-to-use-invisible-characters",
    "how-to-hide-your-name-on-social-media",
  ];

  const entries: MetadataRoute.Sitemap = [];

  // 1. Root URL Entry
  entries.push({
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  });

  // 2. Language-based Routes (Static + Blogs)
  for (const lang of LANGS) {
    // Static routes for each language
    for (const route of STATIC_ROUTES) {
      entries.push({
        url: `${SITE_URL}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    }

    // Blog posts for each language
    for (const slug of BLOG_SLUGS) {
      entries.push({
        url: `${SITE_URL}/${lang}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
