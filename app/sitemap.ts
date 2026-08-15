import type { MetadataRoute } from "next";
import { books, projects, writing } from "./content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mokeshavarz.github.io";
  const staticRoutes = ["", "/projects", "/writing", "/library", "/experience", "/about", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date("2026-08-03"), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .8 })),
    ...projects.map((item) => ({ url: `${base}/projects/${item.slug}`, lastModified: new Date("2026-08-03"), changeFrequency: "monthly" as const, priority: .7 })),
    ...writing.map((item) => ({ url: `${base}/writing/${item.slug}`, lastModified: new Date(item.updated), changeFrequency: "monthly" as const, priority: .7 })),
    ...books.map((item) => ({ url: `${base}/library/${item.slug}`, lastModified: new Date("2026-08-03"), changeFrequency: "monthly" as const, priority: .6 })),
    ...books.flatMap((book) => (book.parts ?? []).map((part) => ({ url: `${base}/library/${book.slug}/${part.slug}`, lastModified: new Date("2026-08-15"), changeFrequency: "monthly" as const, priority: .6 }))),
  ];
}
