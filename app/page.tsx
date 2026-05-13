import Link from "next/link"
import Image from "next/image"
import {
  Shield,
  HardHat,
  Zap,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  LifeBuoy,
  Activity,
} from "lucide-react"

const services = [
  { icon: Shield, title: "Fallsikring", desc: "Komplette fallsikringssystemer og utstyr for trygg arbeid i høyden.", href: "/tjenester/fallsikring" },
  { icon: HardHat, title: "Arbeid i høyden", desc: "Profesjonelle tjenester for alle typer arbeid i høyden.", href: "/tjenester/arbeid-i-hoyden" },
  { icon: Activity, title: "Rope Access", desc: "IRATA-sertifisert rope access for vanskelig tilgjengelige områder.", href: "/tjenester/rope-access" },
  { icon: LifeBuoy, title: "Redningssett & Umiddelbar redning", desc: "Påbudt redningssett til byggeplass og arbeid i høyden. Godkjente systemer og opplæring.", href: "/tjenester/redningssett", highlight: true },
  { icon: Zap, title: "Actsafe Taumopeder", desc: "Actsafe motoriserte taumopeder for sikker og effektiv vertikal forflytning. Opplæring og sertifisering.", href: "/tjenester/actsafe", highlight: true },
  { icon: Award, title: "Kurs og opplæring", desc: "Sertifiserte kurs innen fallsikring, arbeid i høyden, redning og Actsafe.", href: "/tjenester/kurs" },
  { icon: CheckCircle, title: "Inspeksjon", desc: "Grundig kontroll og sertifisering av fallsikringsutstyr.", href: "/tjenester/inspeksjon" },
  { icon: Clock, title: "Risikoanalyse", desc: "HMS-rådgivning og risikovurdering for arbeid i høyden.", href: "/tjenester/risikoanalyse" },
]

const stats = [
  { value: "15+", label: "Års erfaring" },
  { value: "500+", label: "Prosjekter fullført" },
  { value: "2000+", label: "Kurs deltakere" },
  { value: "100%", label: "Skadefrie oppdrag" },
]

const products = [
  {
    img: "/images/H-400-TG_s_01_PNG_HD_1460x1976.png",
    name: "Skylotec Ignite Ion Sele",
    category: "Fullkroppssele",
    href: "https://www.abcfallsikring.no",
  },
  {
    img: "/images/H-576-200-RIGHT_s_01_HD_1460x1976.jpg",
    name: "Skylotec Kombisele",
    category: "Arbeidssele",
    href: "https://www.abcfallsikring.no",
  },
  {
    img: "/images/a-050_s_01_730x988.png",
    name: "Skylotec Falldemper",
    category: "Falldempende stropp",
    href: "https://www.abcfallsikring.no",
  },
  {
    img: "/images/acs-0929_s_02_730x988.png",
    name: "Skylotec Karabinkrok",
    category: "Koblingselement",
    href: "https://www.abcfallsikring.no",
  },
  {
    img: "/images/Typ-52_AP-063_GPS_D-Bolt-Neutral-for-Customer_1460x1976.png",
    name: "Skylotec Ankerpunkt",
    category: "Forankringssystem",
    href: "https://www.abcfallsikring.no",
  },
  {
    img: "/images/Tether_Tether_Leash_web_1.webp",
    name: "Skylotec Tether",
    category: "Verktøysikring",
    href: "https://www.abcfallsikring.no",
  },
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
            <Link href="/kontakt" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors inline-flex items-center gap-2">
              Få gratis befaring <ArrowRight size={16} />
            </Link>
            <Link href="/tjenester" className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
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

      {/* Rope Access med bilde */}
      <section className="bg-zinc-900 text-white py-20 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              ROPE ACCESS · IRATA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industriell klatring og rope access</h2>
            <p className="text-zinc-300 mb-4 leading-relaxed">
              Rope access er den mest effektive og kostnadsbesparende metoden for å nå vanskelig tilgjengelige steder. Alle våre teknikere er IRATA-sertifiserte.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {["IRATA Level 1, 2 og 3 sertifiserte teknikere", "Fasadearbeid, inspeksjon og vedlikehold", "Offshore og vindkraft", "Rask mobilisering – ingen stillas nødvendig"].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/tjenester/rope-access" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2">
              Les mer om rope access <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="/images/SKYLOTEC_Application photo_Rope Access_06.jpg"
              alt="Rope access industriell klatring"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Redningssett med bilder */}
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
              <Link href="/tjenester/redningssett" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2">
                Les mer om redningssett <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src="/images/Rettung-Service_480x360px_1920x1920.jpg"
                  alt="Redningsservice"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src="/images/Rettung-Training_480x360px_1920x1920.jpg"
                  alt="Redningstrening"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 bg-zinc-700/50 rounded-xl p-5 border border-zinc-600">
                <LifeBuoy size={32} className="text-orange-500 mb-2" />
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Tid er kritisk ved henging i sele – kuttoff-tid for sirkulasjon kan være under 15 minutter. Umiddelbar redning kan bokstavelig talt redde liv.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actsafe seksjon med bilde */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden col-span-2">
                  <Image
                    src="/images/actsafe-sar-backpack-search-and-rescue.png"
                    alt="Actsafe søk og redning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Smyle_Sky_STROM15_960x720px.jpg"
                    alt="Actsafe taumoped i bruk"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-zinc-100 rounded-xl p-4 border border-zinc-200 flex flex-col justify-center">
                  <Zap size={28} className="text-orange-500 mb-2" />
                  <p className="text-zinc-700 text-sm font-medium">ACX · ICX · PMX · PME · ACC</p>
                  <p className="text-zinc-500 text-xs mt-1">Hele Actsafe-serien på lager</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                ACTSAFE TAUMOPEDER
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Motorisert forflytning i høyden – trygt og effektivt
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                Actsafe taumopeder revolusjonerer arbeid i høyden ved å gjøre vertikal forflytning raskere, sikrere og langt mindre belastende for kroppen. ABC Sikkerhet er autorisert forhandler og tilbyr salg, opplæring og sertifisering.
              </p>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Vi fører ACX, ICX, PMX, PME og ACC – med godt lager og rask levering. Våre instruktører er godkjent for opplæring i alle Actsafe-modeller.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/tjenester/actsafe" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2">
                  Om Actsafe <ArrowRight size={16} />
                </Link>
                <Link href="/tjenester/kurs" className="border border-zinc-300 hover:border-zinc-500 text-zinc-700 font-semibold px-6 py-3 rounded-md transition-colors">
                  Kurs og opplæring
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produkter fra nettbutikk */}
      <section className="bg-zinc-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              NETTBUTIKK
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">Profesjonelt utstyr fra Skylotec</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Vi fører et bredt utvalg av Skylotec-produkter. Besøk vår nettbutikk for priser og tilgjengelighet.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {products.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="relative h-40 bg-zinc-50">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <div className="p-3">
                  <div className="text-xs text-orange-500 font-medium mb-0.5">{p.category}</div>
                  <div className="text-xs font-semibold text-zinc-800 leading-tight">{p.name}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://www.abcfallsikring.no"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Se hele nettbutikken <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">Komplette løsninger for arbeid i høyden</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Fra risikovurdering til utførelse – vi tilbyr alle tjenester du trenger.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`group p-6 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5 ${
                  service.highlight ? "bg-orange-500 border-orange-400 text-white" : "bg-zinc-50 border-zinc-200 text-zinc-900 hover:border-orange-300"
                }`}
              >
                <service.icon size={28} className={`mb-3 ${service.highlight ? "text-white" : "text-orange-500"}`} />
                <h3 className={`font-semibold mb-2 ${service.highlight ? "text-white" : "text-zinc-900"}`}>{service.title}</h3>
                <p className={`text-sm leading-relaxed ${service.highlight ? "text-orange-100" : "text-zinc-500"}`}>{service.desc}</p>
                <div className={`mt-4 text-xs font-semibold flex items-center gap-1 ${service.highlight ? "text-white" : "text-orange-500"}`}>
                  Les mer <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/tjenester" className="border border-zinc-300 hover:border-orange-400 text-zinc-700 font-semibold px-8 py-3 rounded-md transition-colors">
              Se alle tjenester
            </Link>
          </div>
        </div>
      </section>

      {/* Skylotec logo / merkevareseksjon */}
      <section className="bg-zinc-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zinc-500 text-sm mb-6">Autorisert forhandler av</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="relative h-12 w-40">
              <Image src="/images/Skylotec_Logo.svg.png" alt="Skylotec" fill className="object-contain" />
            </div>
            <div className="text-2xl font-bold text-zinc-700 tracking-wide">PETZL</div>
            <div className="text-2xl font-bold text-zinc-700 tracking-wide">ACTSAFE</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-20 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Klar for å komme i gang?</h2>
          <p className="text-zinc-400 mb-8">Kontakt oss i dag for en uforpliktende samtale om ditt prosjekt. Vi tilbyr gratis befaring og rådgivning.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              Få gratis tilbud
            </Link>
            <a href="tel:+4733740888" className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
              Ring oss: +47 33 74 08 88
            </a>
          </div>
          <p className="text-zinc-500 text-sm mt-6">Rask responstid • Gratis befaring • Konkurransedyktige priser</p>
        </div>
      </section>
    </main>
  )
}
