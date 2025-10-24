import { MetadataRoute } from "next";
import { execSync } from "child_process";

function getLastCommitDate(): Date {
  try {
    const timestamp = execSync('git log -1 --format=%ct')
      .toString()
      .trim();
    return new Date(parseInt(timestamp) * 1000);
  } catch (error) {
    console.error("Failed to get git commit date:", error);
    return new Date(); // Fallback to current date
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = getLastCommitDate();

  return [
    {
      url: "https://praveen-portfolio.app",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}