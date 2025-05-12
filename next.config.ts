// next.config.ts

const domain = (process.env.REPLIT_DOMAINS || 'localhost').split(',')[0] || 'localhost';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [domain],
  },
  env: {
    // You can expose custom env variables to the browser here
    CUSTOM_API_URL: process.env.CUSTOM_API_URL || '',
  },
};

export default nextConfig;
