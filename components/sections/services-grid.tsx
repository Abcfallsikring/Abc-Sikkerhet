import Link from 'next/link'
import { ArrowRight, Shield, Mountain, Cable, Ambulance, GraduationCap, Search, Wrench, ClipboardCheck } from 'lucide-react'
import { services } from '@/lib/config'

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Mountain,
  Cable,
  Ambulance,
  GraduationCap,
  Search,
  Wrench,
  ClipboardCheck,
}

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Våre tjenester
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Komplette løsninger for arbeid i høyden
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fra risikovurdering til utførelse - vi tilbyr alle tjenester du trenger for trygg og effektiv 
            gjennomføring av arbeid i høyden.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Shield
            return (
              <Link
                key={service.slug}
                href={`/tjenester/${service.slug}`}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Link */}
                  <div className="flex items-center text-sm font-medium text-primary">
                    Les mer
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/tjenester"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Se alle tjenester
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
