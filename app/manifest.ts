import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "browser",
    icons: [
      {
        src: "/icon.png",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
