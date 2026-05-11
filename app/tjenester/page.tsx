import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Mountain, Cable, Ambulance, GraduationCap, Search, Wrench, ClipboardCheck } from 'lucide-react'
import { services } from '@/lib/config'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/config'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Tjenester - Fallsikring, Rope Access og Arbeid i Høyden',
  description: 'Komplette tjenester innen fallsikring, rope access, arbeid i høyden, redningstjenester, inspeksjon og kurs. Sertifiserte eksperter med ISO 9001 og IRATA.',
  openGraph: {
    title: 'Tjenester - Fallsikring, Rope Access og Arbeid i Høyden | Høyde Sikkerhet',
    description: 'Komplette tjenester innen fallsikring, rope access, arbeid i høyden, redningstjenester, inspeksjon og kurs.',
    url: `${siteConfig.url}/tjenester`,
  },
}

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

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: 'Hjem', url: siteConfig.url },
          { name: 'Tjenester', url: `${siteConfig.url}/tjenester` },
        ]} 
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Våre tjenester
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Komplette løsninger for{' '}
              <span className="text-gradient">arbeid i høyden</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Fra risikovurdering til utførelse - vi tilbyr alle tjenester du trenger for trygg og 
              effektiv gjennomføring av arbeid i høyden. Våre sertifiserte eksperter står klare.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Shield
              return (
                <Link
                  key={service.slug}
                  href={`/tjenester/${service.slug}`}
                  className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-6">
                    <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-sm font-medium text-primary">
                        Les mer om {service.title.toLowerCase()}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
