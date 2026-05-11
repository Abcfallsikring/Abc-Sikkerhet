import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { ContactForm } from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Kontakt oss - Få tilbud på fallsikring og arbeid i høyden',
  description: 'Kontakt Høyde Sikkerhet for tilbud på fallsikring, rope access, kurs og arbeid i høyden. Gratis befaring og rådgivning. Ring oss eller send melding.',
  openGraph: {
    title: 'Kontakt oss | Høyde Sikkerhet',
    description: 'Kontakt oss for tilbud på fallsikring, rope access og arbeid i høyden.',
    url: `${siteConfig.url}/kontakt`,
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: 'Hjem', url: siteConfig.url },
          { name: 'Kontakt', url: `${siteConfig.url}/kontakt` },
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
              Kontakt oss
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              La oss snakke om ditt prosjekt
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kontakt oss i dag for en uforpliktende samtale. Vi tilbyr gratis befaring og 
              rådgivning for alle typer prosjekter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Kontaktinformasjon</h2>
                <p className="text-muted-foreground mb-8">
                  Vi er tilgjengelige for å svare på spørsmål og gi deg tilbud på dine behov.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <a 
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-post</h3>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Åpningstider</h3>
                    <p className="text-muted-foreground">
                      Mandag - Fredag: 07:00 - 16:00<br />
                      Lørdag - Søndag: Stengt
                    </p>
                    <p className="text-sm text-primary mt-1">
                      24/7 beredskap for akutte oppdrag
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick info */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Rask respons</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                    Svar innen 24 timer
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                    Gratis befaring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                    Uforpliktende tilbud
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                    Konkurransedyktige priser
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send oss en melding</h2>
                <p className="text-muted-foreground mb-8">
                  Fyll ut skjemaet så tar vi kontakt med deg så snart som mulig.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
