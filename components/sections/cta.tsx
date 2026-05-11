import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config'

export function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Klar for å komme i gang?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Kontakt oss i dag for en uforpliktende samtale om ditt prosjekt. 
            Vi tilbyr gratis befaring og rådgivning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="glow-yellow text-base w-full sm:w-auto">
              <Link href="/kontakt">
                Få gratis tilbud
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base w-full sm:w-auto">
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Ring oss nå
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Rask responstid • Gratis befaring • Konkurransedyktige priser
          </p>
        </div>
      </div>
    </section>
  )
}
