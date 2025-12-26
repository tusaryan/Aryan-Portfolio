/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Aryan-Portfolio',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.apache.org',
      },
    ],
  },
};

export default nextConfig;
