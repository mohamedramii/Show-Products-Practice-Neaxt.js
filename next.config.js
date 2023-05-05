/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "www.shutterstock.com",
      "images.unsplash.com",
      "",
      "as2.ftcdn.net",
      "cdn.thewirecutter.com",
    ],
  },
};

module.exports = nextConfig;
