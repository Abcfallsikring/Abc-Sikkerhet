import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle, Phone, Shield, Mountain, Cable, Ambulance, GraduationCap, Search, Wrench, ClipboardCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { services, siteConfig } from '@/lib/config'
import { BreadcrumbJsonLd, JsonLd } from '@/components/seo/json-ld'
import { CTA } from '@/components/sections/cta'
import { FAQPreview } from '@/components/sections/faq-preview'

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

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  
  if (!service) {
    return { title: 'Tjeneste ikke funnet' }
  }

  return {
    title: `${service.title} - Profesjonelle tjenester`,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
      url: `${siteConfig.url}/tjenester/${slug}`,
    },
  }
}

// Extended service content
const serviceContent: Record<string, {
  intro: string
  benefits: string[]
  process: { title: string; description: string }[]
  faq: { question: string; answer: string }[]
}> = {
  'fallsikring': {
    intro: 'Fallsikring er grunnlaget for trygt arbeid i høyden. Vi leverer komplette fallsikringsløsninger tilpasset dine behov, fra analyse og planlegging til installasjon og opplæring. Våre systemer følger alle gjeldende standarder inkludert NS-EN 363, NS-EN 365 og NS-EN 361.',
    benefits: [
      'Skreddersydde løsninger tilpasset ditt prosjekt',
      'Sertifiserte installatører med lang erfaring',
      'Dokumentasjon i henhold til alle krav',
      'Opplæring av dine ansatte inkludert',
      'Årlig service og inspeksjon',
      'Døgnberedskap ved akutte behov',
    ],
    process: [
      { title: 'Befaring', description: 'Vi kartlegger behovene og vurderer arbeidsområdet grundig.' },
      { title: 'Risikoanalyse', description: 'Identifisering av farer og utarbeidelse av tiltak.' },
      { title: 'Løsningsdesign', description: 'Utvikling av optimal fallsikringsløsning.' },
      { title: 'Installasjon', description: 'Profesjonell montering av sertifiserte teknikere.' },
      { title: 'Opplæring', description: 'Grundig opplæring av brukere i korrekt bruk.' },
      { title: 'Dokumentasjon', description: 'Komplett dokumentasjon og sertifikater.' },
    ],
    faq: [
      { question: 'Hvor ofte må fallsikringsutstyr kontrolleres?', answer: 'I henhold til NS-EN 365 skal alt personlig verneutstyr mot fall kontrolleres minimum én gang per år av kompetent person.' },
      { question: 'Hvem kan installere fallsikringssystemer?', answer: 'Installasjon bør utføres av sertifiserte teknikere med dokumentert kompetanse og erfaring med de aktuelle systemene.' },
      { question: 'Hva inkluderer årlig service?', answer: 'Årlig service inkluderer visuell inspeksjon, funksjonstest, dokumentasjon og eventuell utskifting av slitte komponenter.' },
    ],
  },
  'arbeid-i-hoyden': {
    intro: 'Våre sertifiserte teknikere utfører alle typer arbeid i høyden på en sikker og effektiv måte. Med over 15 års erfaring har vi løst komplekse oppgaver for industri, offshore, bygg og energisektoren over hele Norge.',
    benefits: [
      'IRATA-sertifiserte teknikere',
      'Fleksible løsninger for alle bransjer',
      'Minimalt fotavtrykk på arbeidsstedet',
      'Rask mobilisering ved behov',
      'Konkurransedyktige priser',
      '24/7 beredskap for akutte oppdrag',
    ],
    process: [
      { title: 'Henvendelse', description: 'Kontakt oss for å diskutere ditt prosjekt.' },
      { title: 'Vurdering', description: 'Vi analyserer oppdraget og utarbeider løsning.' },
      { title: 'Tilbud', description: 'Du mottar et detaljert og konkurransedyktig tilbud.' },
      { title: 'Planlegging', description: 'Grundig planlegging og SJA utarbeides.' },
      { title: 'Utførelse', description: 'Profesjonell gjennomføring av arbeidet.' },
      { title: 'Dokumentasjon', description: 'Rapport og dokumentasjon leveres.' },
    ],
    faq: [
      { question: 'Hvilke typer arbeid utfører dere i høyden?', answer: 'Vi utfører inspeksjon, vedlikehold, reparasjon, maling, installasjon og demontering på tak, fasader, master, vindturbiner og industrianlegg.' },
      { question: 'Hvordan sikrer dere kvaliteten?', answer: 'Alle våre teknikere er sertifiserte og følger strenge kvalitetsprosedyrer. Vi dokumenterer alt arbeid og har ISO 9001-sertifisering.' },
    ],
  },
  'rope-access': {
    intro: 'Rope access er en effektiv og kostnadsbesparende metode for å nå vanskelig tilgjengelige områder. Våre IRATA-sertifiserte teknikere bruker industrielle klatreteknikker for inspeksjon, vedlikehold og reparasjon i høyden.',
    benefits: [
      'IRATA Level 3 sertifiserte teknikere',
      'Raskere enn tradisjonelt stillas',
      'Lavere kostnader',
      'Minimalt fotavtrykk',
      'Offshore-erfaring',
      'NDT-kompetanse',
    ],
    process: [
      { title: 'Befaring', description: 'Vurdering av tilgjengelighet og metode.' },
      { title: 'Risikovurdering', description: 'Utarbeidelse av sikker arbeidsplan.' },
      { title: 'Rigging', description: 'Oppsett av tau og sikringssystemer.' },
      { title: 'Arbeid', description: 'Utførelse av oppdraget.' },
      { title: 'Nedrigging', description: 'Sikker fjerning av utstyr.' },
      { title: 'Rapport', description: 'Dokumentasjon av utført arbeid.' },
    ],
    faq: [
      { question: 'Hva er IRATA-sertifisering?', answer: 'IRATA (Industrial Rope Access Trade Association) er den internasjonalt anerkjente standarden for industriell tau-tilgang med tre nivåer av kompetanse.' },
      { question: 'Når er rope access bedre enn stillas?', answer: 'Rope access er ofte mer effektivt ved kortvarige oppdrag, vanskelig tilgjengelige områder, og når minimalt fotavtrykk er ønskelig.' },
    ],
  },
  'redningstjenester': {
    intro: 'Vi tilbyr profesjonelle redningstjenester og beredskap for å sikre rask og trygg evakuering ved nødssituasjoner. Våre redningsmannskap er trent til å håndtere de mest krevende redningsoperasjoner i høyden.',
    benefits: [
      'Døgnkontinuerlig beredskap',
      'Erfarne redningsmannskap',
      'Avansert redningsutstyr',
      'Evakueringsøvelser',
      'Skreddersydde beredskapsplaner',
      'Rask responstid',
    ],
    process: [
      { title: 'Analyse', description: 'Kartlegging av redningsbehov.' },
      { title: 'Planlegging', description: 'Utvikling av redningsplan.' },
      { title: 'Utstyr', description: 'Plassering av nødvendig utstyr.' },
      { title: 'Opplæring', description: 'Trening av personell.' },
      { title: 'Øvelser', description: 'Regelmessige redningsøvelser.' },
      { title: 'Beredskap', description: 'Kontinuerlig beredskap ved arbeid.' },
    ],
    faq: [
      { question: 'Hva inkluderer en redningsplan?', answer: 'En redningsplan beskriver prosedyrer for evakuering, nødvendig utstyr, ansvar og kommunikasjon ved en nødssituasjon.' },
      { question: 'Hvor raskt kan dere rykke ut?', answer: 'Ved kritiske situasjoner har vi beredskap som kan mobiliseres på kort varsel, avhengig av lokasjon.' },
    ],
  },
  'kurs': {
    intro: 'Vi tilbyr sertifiserte kurs innen fallsikring, arbeid i høyden og redning. Våre instruktører har lang erfaring og leverer praktisk, relevant opplæring tilpasset dine behov.',
    benefits: [
      'Sertifiserte instruktører',
      'Praktisk rettet opplæring',
      'Kurs på deres lokasjon',
      'Skreddersydde kurs',
      'IRATA Level 1-3',
      'Dokumenterte kompetansebevis',
    ],
    process: [
      { title: 'Behovsanalyse', description: 'Vi kartlegger deres opplæringsbehov.' },
      { title: 'Tilpasning', description: 'Kurset tilpasses deres bransje.' },
      { title: 'Teori', description: 'Grundig gjennomgang av teori.' },
      { title: 'Praksis', description: 'Hands-on trening med utstyr.' },
      { title: 'Evaluering', description: 'Testing av kompetanse.' },
      { title: 'Sertifisering', description: 'Utstedelse av kompetansebevis.' },
    ],
    faq: [
      { question: 'Hvilke kurs tilbyr dere?', answer: 'Vi tilbyr grunnkurs i fallsikring, bruk av PPE, IRATA nivå 1-3, redningskurs og bedriftsspesifikke kurs.' },
      { question: 'Hvor lang tid tar et kurs?', answer: 'Kursvarighet varierer fra én dag for grunnkurs til flere uker for IRATA-sertifisering.' },
    ],
  },
  'inspeksjon': {
    intro: 'Regelmessig inspeksjon av fallsikringsutstyr er lovpålagt og kritisk for sikkerheten. Vi utfører grundig årskontroll av alt personlig verneutstyr og faste installasjoner i henhold til NS-EN 365.',
    benefits: [
      'Sertifiserte inspektører',
      'Grundig dokumentasjon',
      'Merking og registrering',
      'Digitalt utstyrsregister',
      'Påminnelser om kontroll',
      'Rask behandling',
    ],
    process: [
      { title: 'Registrering', description: 'Alt utstyr registreres i vårt system.' },
      { title: 'Visuell kontroll', description: 'Grundig visuell inspeksjon.' },
      { title: 'Funksjonstest', description: 'Testing av funksjonalitet.' },
      { title: 'Vurdering', description: 'Godkjenning eller kassering.' },
      { title: 'Merking', description: 'Merking med kontrollstatus.' },
      { title: 'Rapport', description: 'Komplett kontrollrapport.' },
    ],
    faq: [
      { question: 'Hvor ofte må utstyr kontrolleres?', answer: 'Minimum årlig, men oftere ved intensiv bruk eller eksponering for belastende forhold.' },
      { question: 'Hva skjer med underkjent utstyr?', answer: 'Underkjent utstyr merkes tydelig og destrueres eller sendes til fabrikanten for vurdering.' },
    ],
  },
  'vedlikehold': {
    intro: 'Regelmessig vedlikehold sikrer at fallsikringssystemer fungerer optimalt og ivaretar sikkerheten over tid. Vi tilbyr serviceavtaler og utfører forebyggende vedlikehold av alle typer systemer.',
    benefits: [
      'Forebyggende vedlikehold',
      'Serviceavtaler',
      'Rask respons',
      'Originale reservedeler',
      'Dokumentert arbeid',
      'Kompetente teknikere',
    ],
    process: [
      { title: 'Inspeksjon', description: 'Gjennomgang av systemets tilstand.' },
      { title: 'Diagnose', description: 'Identifisering av vedlikeholdsbehov.' },
      { title: 'Planlegging', description: 'Utarbeidelse av vedlikeholdsplan.' },
      { title: 'Utførelse', description: 'Gjennomføring av vedlikehold.' },
      { title: 'Testing', description: 'Verifisering av funksjon.' },
      { title: 'Dokumentasjon', description: 'Registrering i servicelog.' },
    ],
    faq: [
      { question: 'Hvor ofte bør systemer vedlikeholdes?', answer: 'Vi anbefaler årlig vedlikehold, men frekvensen avhenger av bruk og miljøforhold.' },
      { question: 'Tilbyr dere serviceavtaler?', answer: 'Ja, vi tilbyr fleksible serviceavtaler tilpasset deres behov og budsjett.' },
    ],
  },
  'risikoanalyse': {
    intro: 'En grundig risikoanalyse er fundamentet for trygt arbeid i høyden. Vi hjelper deg med å identifisere farer, vurdere risiko og implementere effektive tiltak i henhold til norske forskrifter og internasjonale standarder.',
    benefits: [
      'Erfarne HMS-rådgivere',
      'Praktisk tilnærming',
      'Dokumentasjon i henhold til krav',
      'SJA-utvikling',
      'Beredskapsplaner',
      'Kontinuerlig oppfølging',
    ],
    process: [
      { title: 'Kartlegging', description: 'Identifisering av arbeidsoppgaver.' },
      { title: 'Fareidentifikasjon', description: 'Systematisk identifikasjon av farer.' },
      { title: 'Risikovurdering', description: 'Vurdering av sannsynlighet og konsekvens.' },
      { title: 'Tiltak', description: 'Utvikling av risikoreduserende tiltak.' },
      { title: 'Dokumentasjon', description: 'Utarbeidelse av SJA og prosedyrer.' },
      { title: 'Implementering', description: 'Støtte ved innføring av tiltak.' },
    ],
    faq: [
      { question: 'Hva er en SJA?', answer: 'SJA (Sikker Jobb Analyse) er en systematisk gjennomgang av arbeidsoppgaver for å identifisere farer og etablere sikre arbeidsprosedyrer.' },
      { question: 'Er risikoanalyse lovpålagt?', answer: 'Ja, arbeidsgiver er pålagt å kartlegge farer og vurdere risiko før arbeid som kan medføre fare for liv eller helse.' },
    ],
  },
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  
  if (!service) {
    notFound()
  }

  const Icon = iconMap[service.icon] || Shield
  const content = serviceContent[slug] || {
    intro: service.description,
    benefits: service.features,
    process: [],
    faq: [],
  }

  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: 'Hjem', url: siteConfig.url },
          { name: 'Tjenester', url: `${siteConfig.url}/tjenester` },
          { name: service.title, url: `${siteConfig.url}/tjenester/${slug}` },
        ]} 
      />
      <JsonLd 
        type="service" 
        data={{
          name: service.title,
          description: service.description,
          url: `${siteConfig.url}/tjenester/${slug}`,
          areaServed: 'Norway',
        }} 
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Hjem</Link>
            <span>/</span>
            <Link href="/tjenester" className="hover:text-primary transition-colors">Tjenester</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {content.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="glow-yellow">
                  <Link href="/kontakt">
                    Få tilbud
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${siteConfig.contact.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Ring oss
                  </a>
                </Button>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">Fordeler</h2>
              <ul className="space-y-4">
                {content.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      {content.process.length > 0 && (
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Vår prosess
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Hvordan vi jobber
              </h2>
              <p className="text-lg text-muted-foreground">
                En strukturert tilnærming sikrer kvalitet og forutsigbarhet i alle prosjekter.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.process.map((step, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 relative">
                  <div className="absolute -top-3 -left-3 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 mt-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {content.faq.length > 0 && (
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Spørsmål og svar
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ofte stilte spørsmål om {service.title.toLowerCase()}
                </h2>
              </div>

              <div className="space-y-4">
                {content.faq.map((item, index) => (
                  <div key={index} className="bg-background border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Andre tjenester
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((s) => {
                const ServiceIcon = iconMap[s.icon] || Shield
                return (
                  <Link
                    key={s.slug}
                    href={`/tjenester/${s.slug}`}
                    className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                  >
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <ServiceIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {s.shortDescription}
                    </p>
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
