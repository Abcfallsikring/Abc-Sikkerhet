/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      { source: '/arlig-kontroll', destination: '/arlig-kontroll.html' },
      { source: '/bedriftsintern-kurs', destination: '/bedriftsintern-kurs.html' },
      { source: '/oslo', destination: '/oslo.html' },
      { source: '/nord-norge', destination: '/nord-norge.html' },
    ]
  },
}

export default nextConfig
