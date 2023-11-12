/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mks-sistemas.nyc3.digitaloceanspaces.com"],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
