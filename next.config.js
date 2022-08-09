/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["static.tvmaze.com", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
