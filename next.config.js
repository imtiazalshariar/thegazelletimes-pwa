/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.thegazelletimes.com",
      },
    ],
  },
};

module.exports = nextConfig;
