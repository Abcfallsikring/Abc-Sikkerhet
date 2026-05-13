import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Users, Award, Phone, Mail } from "lucide-react"
 
export const metadata = {
  title: "Kurs og opplæring i fallsikring og arbeid i høyden | ABC Sikkerhet",
  description: "Sertifiserte kurs i fallsikring (NS 9610), stolpekurs, oppfriskning og bedriftsinterne kurs. Gjennomføres i Tønsberg eller hos deg. Maks 6 deltakere. Ring 33 74 08 88.",
  keywords: ["fallsikringskurs", "kurs arbeid høyden", "NS 9610 kurs", "stolpekurs", "oppfriskning fallsikring", "bedriftsinternt kurs fallsikring", "Tønsberg kurs"],
  openGraph: {
    title: "Kurs og opplæring i fallsikring | ABC Sikkerhet AS",
    description: "Sertifiserte kurs i fallsikring iht. NS 9610. Gjennomføres i Tønsberg eller bedriftsinternt over hele landet.",
    url: "https://abcfallsikring.no/tjenester/kurs",
  },
}
 
const kurs = [
  {
    title: "Fallsikringskurs (NS 9610)",
    price: "3 750",
    duration: "8 timer",
    participants: "Maks 6 (bedriftsinternt: maks 8)",
    description: "Vårt mest populære kurs. Gir dokumentert, sertifisert kompetanse i bruk av personlig fallsikringsutstyr i henhold til NS 9610 og Forskrift om utførelse av arbeid.",
    content: [
      "Regelverk – Arbeidsmiljøloven og Forskrift om utførelse av arbeid",
      "Risiko og risikovurdering ved arbeid i høyden",
      "Typer fallsikringsutstyr og valg av riktig utstyr",
      "Daglig egenkontroll og periodisk kontroll",
      "Korrekt bruk av sele, stropp og ankerpunkt",
      "Redning – hva gjør du når noen henger i selen?",
      "Praktiske øvelser med eget utstyr",
    ],
    cta: "https://www.abcfallsikring.no/products/fallsikringskurs",
    highlight: true,
  },
  {
    title: "Stolpekurs / Mastekurs",
    price: "3 750",
    duration: "8 timer",
    participants: "Maks 6 (bedriftsinternt: maks 8)",
    description: "For arbeidstakere som skal jobbe i stolpe eller mast. Norske myndigheter krever dokumentert praktisk og teoretisk opplæring. Kurset følger NS 9610 og REN-metode.",
    content: [
      "Lover og forskrifter for stolpe- og mastearbeid",
      "Personlig verneutstyr for entring av stolpe",
      "Korrekt bruk av stigtrinn og klatresele",
      "Risikovurdering og SJA for stolpearbeid",
      "Nedfiring og redning fra stolpe/mast",
      "Praktisk øvelse i stolpe/mast",
    ],
    cta: "https://www.abcfallsikring.no/products/-stolpekurs",
    highlight: false,
  },
  {
    title: "Oppfriskning fallsikring",
    price: "1 950",
    duration: "4 timer",
    participants: "Maks 6 (bedriftsinternt: maks 8)",
    description: "For deg som allerede har grunnkurs og trenger oppdatering. NS 9610 anbefaler oppfriskning minimum hvert 4. år. Halvdagsformat – praktisk og effektivt.",
    content: [
      "Gjennomgang av nytt regelverk og endringer",
      "Repetisjon av utstyrskontroll og bruk",
      "Praktiske øvelser",
      "Ajourføring av dokumentasjon",
    ],
    cta: "https://abcfallsikring.no/produkt/kurs/kurs-1/oppfriskning-fallsikring",
    highlight: false,
  },
  {
    title: "Bedriftsinternt kurs",
    price: "Ta kontakt",
    duration: "Tilpasset",
    participants: "Maks 8 deltakere",
    description: "Vi kommer til deg! Alle kursene våre kan gjennomføres bedriftsinternt på ditt arbeidssted eller anlegg over hele Norge. Tilpasset din bransje og ditt utstyr.",
    content: [
      "Gjennomføres på ditt anlegg eller øvingsarena",
      "Tilpasset din bransje – bygg, industri, energi, telekom",
      "Praktisk øvelse med ditt eget utstyr",
      "Fleksibelt tidspunkt",
      "Komplett kursbevis og dokumentasjon for alle deltakere",
    ],
    cta: "/kontakt",
    highlight: false,
  },
]
 
export default function KursPage() {
  return (
    <main className="min-h-screen bg-white">
 
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            SERTIFISERT OPPLÆRING
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kurs og opplæring i fallsikring
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            Sertifiserte kurs iht. NS 9610. Gjennomføres i Tønsberg eller bedriftsinternt hos deg over hele Norge. Maks 6 deltakere per kurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.abcfallsikring.no/butikk/kurs/kurs-1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors inline-flex items-center gap-2"
            >
              Meld deg på kurs <ArrowRight size={16} />
            </a>
            <a
              href="tel:+4733740888"
              className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-8 py-3.5 rounded-md transition-colors inline-flex items-center gap-2"
            >
              <Phone size={16} /> Ring 33 74 08 88
            </a>
          </div>
        </div>
      </section>
 
      {/* Nøkkeltall */}
      <section className="bg-orange-500 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: "NS 9610", label: "Sertifisert standard" },
            { value: "Maks 6", label: "Deltakere per kurs" },
            { value: "8 timer", label: "Grunnkurs varighet" },
            { value: "Hele Norge", label: "Bedriftsinternt" },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-orange-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
 
      {/* Kursoversikt */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">Våre kurs</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Alle kurs gir kursbevis og dokumentasjon som oppfyller kravene fra Arbeidstilsynet og Forskrift om utførelse av arbeid.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {kurs.map((k) => (
              <div key={k.title} className={`rounded-2xl border p-6 flex flex-col ${k.highlight ? "bg-zinc-900 text-white border-zinc-700" : "bg-white border-zinc-200"}`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-xl font-bold ${k.highlight ? "text-white" : "text-zinc-900"}`}>{k.title}</h3>
                  {k.highlight && <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">POPULÆR</span>}
                </div>
                <div className="flex gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-orange-500" />
                    <span className={k.highlight ? "text-zinc-300" : "text-zinc-600"}>{k.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-orange-500" />
                    <span className={k.highlight ? "text-zinc-300" : "text-zinc-600"}>{k.participants}</span>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed mb-4 ${k.highlight ? "text-zinc-300" : "text-zinc-600"}`}>{k.description}</p>
                <ul className="space-y-1.5 mb-6 flex-grow">
                  {k.content.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={13} className="text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className={k.highlight ? "text-zinc-300" : "text-zinc-600"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-700/30">
                  <div>
                    <div className={`text-xs ${k.highlight ? "text-zinc-400" : "text-zinc-500"}`}>Pris ekskl. mva</div>
                    <div className={`text-xl font-bold ${k.highlight ? "text-orange-400" : "text-orange-500"}`}>
                      {k.price === "Ta kontakt" ? k.price : `kr ${k.price},-`}
                    </div>
                  </div>
                  {k.cta.startsWith("http") ? (
                    <a
                      href={k.cta}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-md transition-colors text-sm"
                    >
                      Meld på <ArrowRight size={14} />
                    </a>
                  ) : (
                    <Link
                      href={k.cta}
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-md transition-colors text-sm"
                    >
                      Kontakt oss <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Krav til opplæring */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Hvorfor er kurs lovpålagt?</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Forskrift om utførelse av arbeid § 10-1 krever at arbeidstaker som skal bruke arbeidsutstyr som medfører særlig risiko, har nødvendig opplæring og øvelse. For fallsikringsutstyr betyr dette at alle som bruker sele, stropp og ankerpunkter i jobben skal ha dokumentert opplæring.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-6">
                NS 9610 er den norske standarden for opplæring i fallsikring, og kurs hos ABC Sikkerhet følger denne standarden fullt ut.
              </p>
              <ul className="space-y-3">
                {[
                  "Kursbevis som dokumenterer opplæringen",
                  "Gyldig dokumentasjon ved Arbeidstilsynets tilsyn",
                  "Oppfriskning anbefales hvert 4. år",
                  "Bedriftsinternt – vi kommer til deg",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm">
                    <CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
                <Award size={28} className="text-orange-500 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2">Sertifisert iht. NS 9610</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">Alle kurs gjennomføres i henhold til norsk standard NS 9610 for opplæring i fallsikring og arbeid i høyden.</p>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
                <Users size={28} className="text-orange-500 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2">Maks 6 deltakere</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">Vi begrenser antall deltakere til 6 per kurs (8 ved bedriftsinterne) for å sikre individuell oppfølging og best mulig læring.</p>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
                <Clock size={28} className="text-orange-500 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2">Fleksible tidspunkter</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">Ta kontakt på kurs@abcfallsikring.no eller 33 74 08 88 – vi finner en dag som passer for deg og dine ansatte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Kontakt og påmelding */}
      <section className="py-20 px-4 bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Klar for å melde deg på?</h2>
          <p className="text-zinc-400 mb-10">Se ledige plasser og meld deg på direkte i nettbutikken, eller ta kontakt for bedriftsinterne kurs og spørsmål om datoer.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <a
              href="https://www.abcfallsikring.no/butikk/kurs/kurs-1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-4 rounded-xl transition-colors flex flex-col items-center gap-2"
            >
              <ArrowRight size={20} />
              <span className="text-sm">Meld på i nettbutikk</span>
            </a>
            <a
              href="tel:+4733740888"
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-6 py-4 rounded-xl transition-colors flex flex-col items-center gap-2 border border-zinc-700"
            >
              <Phone size={20} className="text-orange-500" />
              <span className="text-sm">33 74 08 88</span>
            </a>
            <a
              href="mailto:kurs@abcfallsikring.no"
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-6 py-4 rounded-xl transition-colors flex flex-col items-center gap-2 border border-zinc-700"
            >
              <Mail size={20} className="text-orange-500" />
              <span className="text-sm">kurs@abcfallsikring.no</span>
            </a>
          </div>
          <p className="text-zinc-500 text-sm">Oppsatte datoer passer ikke? Ring oss – vi tilpasser tid og sted etter ditt behov.</p>
        </div>
      </section>
 
    </main>
  )
}
 
