import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.fallsikringsele.no'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Sider Googlebot skal holde seg unna
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
