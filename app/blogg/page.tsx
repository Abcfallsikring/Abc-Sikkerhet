import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, Tag, Search } from 'lucide-react'
import { getAllArticles, getAllCategories } from '@/lib/mdx'
import { siteConfig } from '@/lib/config'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { BlogSearch } from '@/components/blog/blog-search'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Blogg - Fagartikler om fallsikring og arbeid i høyden',
  description: 'Faglige artikler, guider og nyheter om fallsikring, arbeid i høyden, regelverk, utstyr og beste praksis. Skrevet av erfarne eksperter.',
  openGraph: {
    title: 'Blogg | Høyde Sikkerhet',
    description: 'Faglige artikler om fallsikring, arbeid i høyden og regelverk.',
    url: `${siteConfig.url}/blogg`,
  },
}

export default function BlogPage() {
  const articles = getAllArticles()
  const categories = getAllCategories()

  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: 'Hjem', url: siteConfig.url },
          { name: 'Blogg', url: `${siteConfig.url}/blogg` },
        ]} 
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Fagartikler
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Kunnskap om fallsikring og arbeid i høyden
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Utforsk våre fagartikler om regelverk, beste praksis, utstyr og teknikker. 
              Skrevet av erfarne eksperter for å gi deg verdifull innsikt.
            </p>
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Kategorier:</span>
              <Link
                href="/blogg"
                className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full whitespace-nowrap"
              >
                Alle ({articles.length})
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/blogg?kategori=${encodeURIComponent(category.name.toLowerCase())}`}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-colors whitespace-nowrap"
                >
                  {category.name} ({category.count})
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blogg/${article.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {article.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(article.publishedAt).toLocaleDateString('nb-NO', { 
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readingTime}
                      </div>
                    </div>

                    {/* Tags */}
                    {article.tags.length > 0 && (
                      <div className="flex items-center gap-2 mt-4 flex-wrap">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Ingen artikler ennå</h2>
              <p className="text-muted-foreground">
                Artiklene våre kommer snart. Følg med!
              </p>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  )
}
