import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, Shield, Users, Target, Heart, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { Stats } from '@/components/sections/stats'
import { Certifications } from '@/components/sections/certifications'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Om oss - Norges ledende eksperter på fallsikring',
  openGraph: {
    title: 'Om oss | Høyde Sikkerhet',
    description: 'Over 15 års erfaring med fallsikring, rope access og arbeid i høyden.',
    url: `${siteConfig.url}/om-oss`,
  },
}

const values = [
  {
    icon: Shield,
    title: 'Sikkerhet',
    description: 'Sikkerhet er fundamentet i alt vi gjør. Vi tar ingen snarveier og setter alltid menneskeliv først.',
  },
  {
    icon: Award,
    title: 'Kvalitet',
    description: 'Vi leverer kvalitet i verdensklasse, dokumentert gjennom våre ISO-sertifiseringer.',
  },
  {
    icon: Heart,
    title: 'Omsorg',
    description: 'Vi bryr oss om våre kunder, ansatte og samfunnet rundt oss.',
  },
  {
    icon: Lightbulb,
    title: 'Innovasjon',
    description: 'Vi søker stadig nye og bedre løsninger for å forbedre sikkerhet og effektivitet.',
  },
]

const team = [
  {
    name: 'Erik Andersen',
    role: 'Daglig leder',
  },
  {
    name: 'Maria Haugen',
    role: 'HMS-sjef',
    bio: 'Spesialist på risikoanalyse og sikkerhetsledelse med bakgrunn fra offshore.',
  },
  {
    name: 'Thomas Berg',
    role: 'Teknisk leder',
    bio: 'Ekspert på fallsikringssystemer og tekniske løsninger. 15 års erfaring.',
  },
  {
    name: 'Lise Johansen',
    role: 'Kursleder',
  },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: 'Hjem', url: siteConfig.url },
          { name: 'Om oss', url: `${siteConfig.url}/om-oss` },
        ]} 
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Om oss
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Norges eksperter på{' '}
              <span className="text-gradient">arbeid i høyden</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Siden 2009 har vi hjulpet norske bedrifter med å utføre arbeid i høyden på en trygg og 
              effektiv måte. Med over 500 prosjekter og 2000 kursdeltakere er vi en av Norges mest 
              erfarne leverandører.
            </p>
          </div>
        </div>
      </section>

      <Stats />

      {/* Story */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Vår historie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Fra lite team til ledende aktør
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Høyde Sikkerhet ble grunnlagt i 2009 av erfarne rope access-teknikere med en felles 
                  visjon: å gjøre arbeid i høyden tryggere for alle. Det som startet som et lite team 
                  med tre ansatte har vokst til å bli en av Norges ledende leverandører innen fallsikring.
                </p>
                <p>
                  Gjennom årene har vi bygget opp en unik kompetanse basert på praktisk erfaring fra 
                  hundrevis av prosjekter i industri, offshore, bygg og energisektoren. Vi har investert 
                  tungt i opplæring og sertifiseringer for å sikre at våre kunder alltid får den beste 
                  kompetansen tilgjengelig.
                </p>
                <p>
                  I dag er vi stolte av å være ISO 9001 og ISO 45001-sertifisert, og våre teknikere 
                  samme som i starten: ingen ulykker, ingen skader.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Milepæler</h3>
              <div className="space-y-6">
                {[
                  { year: '2009', event: 'Høyde Sikkerhet grunnlagt' },
                  { year: '2015', event: 'ISO 9001-sertifisering' },
                  { year: '2018', event: '500 prosjekter fullført' },
                  { year: '2020', event: 'ISO 45001-sertifisering' },
                  { year: '2023', event: '2000 kursdeltakere' },
                ].map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-10 w-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">{milestone.year}</span>
                    </div>
                    <p className="text-foreground pt-2">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Våre verdier
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Det vi står for
            </h2>
            <p className="text-lg text-muted-foreground">
              Våre kjerneverdier styrer alt vi gjør og hvordan vi behandler våre kunder og hverandre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6 text-center">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Vårt team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Erfarne eksperter
            </h2>
            <p className="text-lg text-muted-foreground">
              Vårt lederteam har samlet over 60 års erfaring innen fallsikring og arbeid i høyden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground text-center mb-1">{member.name}</h3>
                <p className="text-primary text-sm text-center mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Certifications />
      <CTA />
    </>
  )
}
