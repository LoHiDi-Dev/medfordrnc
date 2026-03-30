import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Browsers often request /favicon.ico; app uses generated /icon.png (leaf mark).
      { source: "/favicon.ico", destination: "/icon.png", permanent: false },
      { source: "/about-us", destination: "/about", permanent: true },
      {
        source: "/about-us/mission-values",
        destination: "/about/mission",
        permanent: true,
      },
      {
        source: "/about-us/our-team",
        destination: "/about/team",
        permanent: true,
      },
      {
        source: "/about-us/location-community",
        destination: "/about/location",
        permanent: true,
      },
      {
        source: "/families/visiting-information",
        destination: "/families/visiting",
        permanent: true,
      },
      {
        source: "/families/contact-a-resident",
        destination: "/families/contact",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
};

export default nextConfig;
