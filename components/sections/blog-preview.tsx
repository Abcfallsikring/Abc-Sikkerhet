import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'

const previewPosts = [
  {
    title: 'Fallsikring: Komplett guide til regler og krav i Norge',
    excerpt: 'Alt du trenger å vite om norske forskrifter, standarder og krav for fallsikring ved arbeid i høyden.',
    slug: 'fallsikring-regler-norge',
    category: 'Regelverk',
    readTime: '12 min',
    date: '2024-01-15',
  },
  {
    title: 'NS-EN 363: Forståelse av fallsikringssystemer',
    excerpt: 'En grundig gjennomgang av den europeiske standarden for personlig verneutstyr mot fall.',
    slug: 'ns-en-363-fallsikringssystemer',
    category: 'Standarder',
    readTime: '8 min',
    date: '2024-01-10',
  },
  {
    title: 'Hvordan velge riktig fallsikringsutstyr',
    excerpt: 'Praktiske råd og veiledning for valg av sele, energidemper, karabiner og annet utstyr.',
    slug: 'velge-riktig-fallsikringsutstyr',
    category: 'Utstyr',
    readTime: '10 min',
    date: '2024-01-05',
  },
]

export function BlogPreview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Fagartikler
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Siste fra bloggen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Faglig innhold om fallsikring, arbeid i høyden, regelverk og beste praksis.
            </p>
          </div>
          <Link
            href="/blogg"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors shrink-0"
          >
            Se alle artikler
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {previewPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blogg/${post.slug}`}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString('nb-NO', { 
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
