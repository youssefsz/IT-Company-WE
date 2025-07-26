/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'upload.wikimedia.org',
      'assets.vercel.com'
    ],
    unoptimized: true,
  },
  // Disable Next.js scroll restoration to ensure fresh page feel
  experimental: {
    scrollRestoration: false,
  },
}

export default nextConfig
