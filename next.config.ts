import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/lawn-mowing",
        destination: "/services/mowing",
        permanent: true,
      },
      {
        source: "/services/garden-maintenance",
        destination: "/services/garden-tidy",
        permanent: true,
      },
      {
        source: "/services/garden-clean-ups",
        destination: "/services/rubbish-removal",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
