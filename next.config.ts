/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // allowed external domains
    domains: ['res.cloudinary.com', 'cdn-icons-png.flaticon.com'],
    // optional more-flexible matcher
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com', port: '', pathname: '/**' },
    ],
  },
  esLint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;