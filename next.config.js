/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "firebasestorage.googleapis.com"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
