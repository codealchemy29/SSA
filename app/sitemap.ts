import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ssacademy.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.ssacademy.com/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.ssacademy.com/programs",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.ssacademy.com/events",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}