import { MetadataRoute } from 'next'
import { getArticleSlugs } from '@/lib/mdx'
import { services } from '@/lib/config'

const EXCLUDED_ARTICLE_SLUGS = ['irata-sertifisering-alt-du-trenger-a-vite', 'irata-vs-soft-sammenligning-sertifiseringer']

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fallsikringsele.no'
  const now = new Date()

const staticPages: MetadataRoute.Sitemap = [
  { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
  { url: `${baseUrl}/om-oss`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/tjenester`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${baseUrl}/blogg`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]

const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
  url: `${baseUrl}/tjenester/${service.slug}`,
  lastModified: now,
  changeFrequency: 'monthly',
  priority: 0.85,
}))

const articlePages: MetadataRoute.Sitemap = getArticleSlugs()
  .filter((slug) => !EXCLUDED_ARTICLE_SLUGS.includes(slug))
  .map((slug) => ({
    url: `${baseUrl}/blogg/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

return [...staticPages, ...servicePages, ...articlePages]
}
