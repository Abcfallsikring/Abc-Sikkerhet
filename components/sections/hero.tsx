import Link from 'next/link'
import { ArrowRight, Shield, Award, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">ISO 9001 &amp; soft Sertifisert</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Norges eksperter på{' '}
              <span className="text-gradient">fallsikring</span>{' '}
              og arbeid i høyden
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Vi leverer trygge løsninger for arbeid i høyden. Fra risikovurdering og sertifiserte kurs 
              til rope access og redningstjenester. Din sikkerhet er vår prioritet.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="glow-yellow text-base">
                <Link href="/kontakt">
                  Få gratis befaring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/tjenester">
                  Se våre tjenester
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Skadefrie oppdrag</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">15+ år</p>
                  <p className="text-sm text-muted-foreground">Erfaring</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">2000+</p>
                  <p className="text-sm text-muted-foreground">Kursdeltakere</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="hidden lg:block relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main card */}
              <div className="absolute inset-0 glass rounded-2xl p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="h-3 w-3/4 bg-primary/30 rounded" />
                  <div className="h-3 w-1/2 bg-primary/20 rounded" />
                  <div className="h-24 w-full bg-secondary rounded-lg" />
                  <div className="flex gap-4">
                    <div className="h-12 flex-1 bg-primary rounded-lg" />
                    <div className="h-12 flex-1 bg-secondary rounded-lg" />
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-8 -right-8 glass rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-success rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-success-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Sertifisert</p>
                    <p className="text-xs text-muted-foreground">soft Level 3</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-8 glass rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">500+</p>
                    <p className="text-xs text-muted-foreground">Prosjekter fullført</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
