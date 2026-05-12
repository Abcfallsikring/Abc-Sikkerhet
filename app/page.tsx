import Link from "next/link"
import {
  Shield,
  HardHat,
  Zap,
  Award,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  LifeBuoy,
  Activity,
} from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Fallsikring",
    desc: "Komplette fallsikringssystemer og utstyr for trygg arbeid i høyden.",
    href: "/tjenester/fallsikring",
  },
  {
    icon: HardHat,
    title: "Arbeid i høyden",
    desc: "Profesjonelle tjenester for alle typer arbeid i høyden.",
    href: "/tjenester/arbeid-i-hoyden",
  },
  {
    icon: Activity,
    title: "Rope Access",
    desc: "IRATA-sertifisert rope access for vanskelig tilgjengelige områder.",
    href: "/tjenester/rope-access",
  },
  {
    icon: LifeBuoy,
    title: "Redningssett & Umiddelbar redning",
    desc: "Påbudt redningssett til byggeplass og arbeid i høyden. Vi leverer godkjente systemer og opplæring for umiddelbar redning uten bruk av nødetater.",
    href: "/tjenester/redningssett",
    highlight: true,
  },
  {
    icon: Zap,
    title: "Actsafe Taumopeder",
    desc: "Actsafe motoriserte taumopeder for sikker og effektiv vertikal forflytning. Opplæring og sertifisering inkludert.",
    href: "/tjenester/actsafe",
    highlight: true,
  },
  {
    icon: Award,
    title: "Kurs og opplæring",
    desc: "Sertifiserte kurs innen fallsikring, arbeid i høyden, redning og Actsafe.",
    href: "/tjenester/kurs",
  },
  {
    icon: CheckCircle,
    title: "Inspeksjon",
    desc: "Grundig kontroll og sertifisering av fallsikringsutstyr.",
    href: "/tjenester/inspeksjon",
  },
  {
    icon: Clock,
    title: "Risikoanalyse",
    desc: "HMS-rådgivning og risikovurdering for arbeid i høyden.",
    href: "/tjenester/risikoanalyse",
  },
]

const stats = [
  { value: "15+", label: "Års erfaring" },
  { value: "500+", label: "Prosjekter fullført" },
  { value: "2000+", label: "Kurs deltakere" },
  { value: "100%", label: "Skadefrie oppdrag" },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Shield size={14} />
            ISO 9001 &amp; IRATA Sertifisert
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Eksperter på fallsikring<br />
            <span className="text-orange-500">og arbeid i høyden</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            ABC Sikkerhet leverer trygge løsninger for arbeid i høyden. Fra risikovurdering og sertifiserte kurs til rope access, redningssett og Actsafe taumopeder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors inline-flex items-center gap-2"
            >
              Få gratis befaring <ArrowRight size={16} />
            </Link>
            <Link
              href="/tjenester"
              className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
            >
              Se våre tjenester
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-500 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-orange-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Redningssett - fremhevet seksjon */}
      <section className="bg-zinc-800 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                LOVPÅLAGT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Redningssett til byggeplass og arbeid i høyden
              </h2>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                Norsk regelverk krever at det alltid skal finnes et godkjent redningssett tilgjengelig ved arbeid i høyden. Dette innebærer planer og utstyr for <strong className="text-white">umiddelbar redning uten bruk av nødetatene</strong>.
              </p>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                ABC Sikkerhet hjelper bedrifter med å oppfylle kravene: vi leverer, installerer og opplærer i godkjente redningssystemer som sikrer at arbeidstakere kan hentes ned trygt og raskt – av eget personell.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Godkjente redningssett for alle typer arbeid i høyden",
                  "Redningstilgang uten avhengighet av brannvesen/ambulanse",
                  "Kurs og praktisk øvelse for eget personell",
                  "Dokumentasjon og beredskapsplan inkludert",
                  "Oppfyller krav i Arbeidsmiljøloven og Arbeidstilsynet",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/tjenester/redningssett"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
              >
                Les mer om redningssett <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-zinc-700/50 rounded-2xl p-8 border border-zinc-600">
              <LifeBuoy size={48} className="text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Visste du?</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                Arbeidstilsynet krever at enhver arbeidsgiver som setter arbeidstakere til arbeid i høyden skal ha en skriftlig redningsplan og nødvendig utstyr for å gjennomføre redning <strong className="text-white">uten å vente på nødetatene</strong>.
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Tid er kritisk ved henging i sele – kuttoff-tid for sirkulasjon kan være under 15 minutter. Umiddelbar redning kan bokstavelig talt redde liv.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Actsafe seksjon */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-zinc-100 rounded-2xl p-8 border border-zinc-200">
              <Zap size={48} className="text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Actsafe AS3 &amp; AS6</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Actsafe er verdensledende innen motoriserte taumopeder for profesjonell bruk. AS3 og AS6 brukes av tårnkranoperatører, vindteknikere, industrielle klatrere og redningsmannskap over hele verden.
              </p>
              <ul className="flex flex-col gap-2 text-sm text-zinc-600">
                {[
                  "Motorisert opp- og nedstigning i tau",
                  "Bærekapasitet opp til 250 kg (AS6)",
                  "Egnet for turbiner, master, fasader og konstruksjoner",
                  "Godkjent som PVU (personlig verneutstyr)",
                  "Kan brukes til redning av skadet person",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                ACTSAFE TAUMOPEDER
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Motorisert forflytning i høyden – trygt og effektivt
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                Actsafe taumopeder revolusjonerer arbeid i høyden ved å gjøre vertikal forflytning raskere, sikrere og langt mindre belastende for kroppen. ABC Sikkerhet tilbyr salg, opplæring og sertifisering.
              </p>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Våre instruktører er godkjent for å gi opplæring i Actsafe-systemene, og kursene er praktisk orienterte med fokus på riktig bruk, daglig inspeksjon og nødprosedyrer.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/tjenester/actsafe"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  Om Actsafe <ArrowRight size={16} />
                </Link>
                <Link
                  href="/tjenester/kurs"
                  className="border border-zinc-300 hover:border-zinc-500 text-zinc-700 font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  Kurs og opplæring
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section className="bg-zinc-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">Komplette løsninger for arbeid i høyden</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Fra risikovurdering til utførelse – vi tilbyr alle tjenester du trenger.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`group p-6 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5 ${
                  service.highlight
                    ? "bg-orange-500 border-orange-400 text-white"
                    : "bg-white border-zinc-200 text-zinc-900 hover:border-orange-300"
                }`}
              >
                <service.icon
                  size={28}
                  className={`mb-3 ${service.highlight ? "text-white" : "text-orange-500"}`}
                />
                <h3 className={`font-semibold mb-2 ${service.highlight ? "text-white" : "text-zinc-900"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${service.highlight ? "text-orange-100" : "text-zinc-500"}`}>
                  {service.desc}
                </p>
                <div className={`mt-4 text-xs font-semibold flex items-center gap-1 ${service.highlight ? "text-white" : "text-orange-500"}`}>
                  Les mer <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/tjenester"
              className="border border-zinc-300 hover:border-orange-400 text-zinc-700 font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Se alle tjenester
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-20 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Klar for å komme i gang?</h2>
          <p className="text-zinc-400 mb-8">
            Kontakt oss i dag for en uforpliktende samtale om ditt prosjekt. Vi tilbyr gratis befaring og rådgivning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
            >
              Få gratis tilbud
            </Link>
            <a
              href="tel:+4799999999"
              className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
            >
              Ring oss nå
            </a>
          </div>
          <p className="text-zinc-500 text-sm mt-6">Rask responstid • Gratis befaring • Konkurransedyktige priser</p>
        </div>
      </section>
    </main>
  )
}
