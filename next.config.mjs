const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/Aryan-Portfolio' : '',
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

if (!isProd) {
  nextConfig.rewrites = async () => {
    return [
      {
        source: '/Aryan-Portfolio/:path*',
        destination: '/:path*',
      },
    ];
  };
}

export default nextConfig;
