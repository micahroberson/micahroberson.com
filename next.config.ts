import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
