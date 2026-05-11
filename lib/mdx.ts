import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface ArticleMetadata {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: string
  category: string
  tags: string[]
  image?: string
  readingTime: string
  featured?: boolean
}

export interface Article extends ArticleMetadata {
  content: string
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }
  return fs.readdirSync(articlesDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    publishedAt: data.publishedAt || new Date().toISOString(),
    updatedAt: data.updatedAt,
    author: data.author || 'Høyde Sikkerhet',
    category: data.category || 'Generelt',
    tags: data.tags || [],
    image: data.image,
    readingTime: stats.text.replace('read', 'lesing'),
    featured: data.featured || false,
    content,
  }
}

export function getAllArticles(): ArticleMetadata[] {
  const slugs = getArticleSlugs()
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => article !== null)
    .map(({ content, ...metadata }) => metadata)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return articles
}

export function getArticlesByCategory(category: string): ArticleMetadata[] {
  return getAllArticles().filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  )
}

export function getArticlesByTag(tag: string): ArticleMetadata[] {
  return getAllArticles().filter(
    (article) => article.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}

export function getFeaturedArticles(limit = 3): ArticleMetadata[] {
  return getAllArticles()
    .filter((article) => article.featured)
    .slice(0, limit)
}

export function getRelatedArticles(currentSlug: string, limit = 3): ArticleMetadata[] {
  const currentArticle = getArticleBySlug(currentSlug)
  if (!currentArticle) return []

  return getAllArticles()
    .filter((article) => article.slug !== currentSlug)
    .filter((article) => 
      article.category === currentArticle.category ||
      article.tags.some((tag) => currentArticle.tags.includes(tag))
    )
    .slice(0, limit)
}

export function getAllCategories(): { name: string; count: number }[] {
  const articles = getAllArticles()
  const categoryMap = new Map<string, number>()

  articles.forEach((article) => {
    const count = categoryMap.get(article.category) || 0
    categoryMap.set(article.category, count + 1)
  })

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

export function getAllTags(): { name: string; count: number }[] {
  const articles = getAllArticles()
  const tagMap = new Map<string, number>()

  articles.forEach((article) => {
    article.tags.forEach((tag) => {
      const count = tagMap.get(tag) || 0
      tagMap.set(tag, count + 1)
    })
  })

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

export function searchArticles(query: string): ArticleMetadata[] {
  const searchTerm = query.toLowerCase()
  return getAllArticles().filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      article.category.toLowerCase().includes(searchTerm)
  )
}
