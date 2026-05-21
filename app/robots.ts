import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://v0-h-ydesikkerhet.vercel.app' // Bytt ut med endelig domene

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Sider Googlebot skal holde seg unna
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
