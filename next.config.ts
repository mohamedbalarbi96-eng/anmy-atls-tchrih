import type { NextConfig } from "next";

const defaultLocale = "en";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: `/${defaultLocale}`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
