import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SnappyWorks Gardening",
    short_name: "SnappyWorks",
    description:
      "Professional gardening and outdoor maintenance services in Geelong, Victoria.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafff9",
    theme_color: "#2d6a4f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
