import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Users, Award, Phone, Mail } from "lucide-react"
import { CourseJsonLd } from "@/components/seo/json-ld"

export const metadata = {
  title: "Dokumentert opplæring i fallsikring – Kurs NS 9610 | ABC Fallsikring AS",
  description: "Dokumentert opplæring i fallsikring iht. NS 9610 og Forskrift om utførelse av arbeid. Grunnkurs, stolpekurs og oppfriskning – i Tønsberg eller bedriftsinternt. Maks 6 deltakere.",
  keywords: ["dokumentert opplæring fallsikring", "fallsikringskurs", "kurs arbeid i høyden", "NS 9610 kurs", "stolpekurs", "oppfriskning fallsikring", "bedriftsinternt kurs fallsikring", "Arbeidstilsynet opplæring"],
  openGraph: {
    title: "Dokumentert opplæring i fallsikring – NS 9610 | ABC Fallsikring AS",
    description: "Dokumentert opplæring iht. NS 9610 og Arbeidstilsynets krav. Grunnkurs, stolpekurs og oppfriskning. Bedriftsinternt over hele Norge.",
    url: "https://www.fallsikringsele.no/tjenester/kurs",
  },
}

const kurs = [
  {
    title: "Fallsikringskurs (NS 9610)",
    price: "3 750",
    duration: "8 timer",
    participants: "Maks 6 (bedriftsinternt: maks 8)",
    description: "Vårt mest populære kurs. Gir dokumentert kompetanse i bruk av personlig fallsikringsutstyr i henhold til NS 9610 og Forskrift om utførelse av arbeid.",
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
    <>
      <CourseJsonLd
        name="Fallsikringskurs (NS 9610) – Grunnkurs"
        description="Dokumentert opplæring i bruk av personlig fallsikringsutstyr iht. NS 9610 og Forskrift om utførelse av arbeid."
        price="3750"
        duration="PT8H"
        url="https://www.abcfallsikring.no/products/fallsikringskurs"
        credential="Kursbevis NS 9610"
      />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-zinc-900 text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              DOKUMENTERT OPPLÆRING
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kurs og opplæring i fallsikring
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
              Dokumentert opplæring iht. NS 9610 og Forskrift om utførelse av arbeid. Gjennomføres i Tønsberg eller bedriftsinternt over hele Norge. Maks 6 deltakere per kurs.
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
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { label: "NS 9610", sub: "Sertifisert standard" },
              { label: "Maks 6", sub: "Deltakere per kurs" },
              { label: "8 timer", sub: "Grunnkurs varighet" },
              { label: "Hele Norge", sub: "Bedriftsinternt" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold">{s.label}</div>
                <div className="text-sm text-white/80 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Kursoversikt */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4 text-center">Våre kurs</h2>
            <p className="text-zinc-500 text-center mb-12 max-w-2xl mx-auto">
              Alle kurs gir kursbevis og dokumentasjon som oppfyller kravene fra Arbeidstilsynet og Forskrift om utførelse av arbeid.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {kurs.map((k) => (
                <div
                  key={k.title}
                  className={`rounded-xl border ${k.highlight ? "border-orange-500 shadow-lg" : "border-zinc-200"} p-6 flex flex-col`}
                >
                  {k.highlight && (
                    <div className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-0.5 rounded-full mb-3 self-start">
                      <Award size={12} /> POPULÆR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-zinc-900 mb-1">{k.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-3">
                    <span className="flex items-center gap-1"><Clock size={14} /> {k.duration}</span>
                    <span className="flex items-center gap-1"><Users size={14} /> {k.participants}</span>
                  </div>
                  <p className="text-zinc-600 text-sm mb-4">{k.description}</p>
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {k.content.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                        <CheckCircle size={15} className="text-orange-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
                    <div>
                      <div className="text-xl font-bold text-zinc-900">kr {k.price},-</div>
                      <div className="text-xs text-zinc-400">Pris ekskl. mva</div>
                    </div>
                    <a
                      href={k.cta}
                      target={k.cta.startsWith("http") ? "_blank" : undefined}
                      rel={k.cta.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors inline-flex items-center gap-1.5"
                    >
                      Meld på <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hvorfor lovpålagt */}
        <section className="bg-zinc-50 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Hvorfor er kurs lovpålagt?</h2>
            <p className="text-zinc-600 mb-4">
              Forskrift om utførelse av arbeid § 10-1 krever at arbeidstaker som skal bruke arbeidsutstyr som medfører særlig risiko, har nødvendig opplæring og øvelse. For fallsikringsutstyr betyr dette at alle som bruker sele, stropp og ankerpunkter i jobben skal ha dokumentert opplæring.
            </p>
            <p className="text-zinc-600 mb-6">
              NS 9610 er den norske standarden for opplæring i fallsikring, og kurs hos ABC Fallsikring følger denne standarden fullt ut.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Kursbevis som dokumenterer opplæringen",
                "Gyldig dokumentasjon ved Arbeidstilsynets tilsyn",
                "Oppfriskning anbefales hvert 4. år",
                "Bedriftsinternt – vi kommer til deg",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-zinc-700">
                  <CheckCircle size={16} className="text-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Award, title: "Sertifisert iht. NS 9610", text: "Alle kurs gjennomføres i henhold til norsk standard NS 9610 for opplæring i fallsikring og arbeid i høyden." },
                { icon: Users, title: "Maks 6 deltakere", text: "Vi begrenser antall deltakere til 6 per kurs (8 ved bedriftsinterne) for å sikre individuell oppfølging og best mulig læring." },
                { icon: Phone, title: "Fleksible tidspunkter", text: "Ta kontakt på kurs@abcfallsikring.no eller 33 74 08 88 – vi finner en dag som passer for deg og dine ansatte." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-white rounded-lg p-4 border border-zinc-200">
                  <Icon size={20} className="text-orange-500 mb-2" />
                  <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{title}</h3>
                  <p className="text-xs text-zinc-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Klar for å melde deg på?</h2>
            <p className="text-zinc-500 mb-8">Se ledige plasser og meld deg på direkte i nettbutikken, eller ta kontakt for bedriftsinterne kurs og spørsmål om datoer.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.abcfallsikring.no/butikk/kurs/kurs-1" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors inline-flex items-center gap-2 justify-center">
                Meld på i nettbutikk <ArrowRight size={16} />
              </a>
              <a href="tel:+4733740888" className="border border-zinc-300 hover:border-zinc-500 text-zinc-700 font-semibold px-8 py-3.5 rounded-md transition-colors inline-flex items-center gap-2 justify-center">
                <Phone size={16} /> 33 74 08 88
              </a>
              <a href="mailto:kurs@abcfallsikring.no" className="border border-zinc-300 hover:border-zinc-500 text-zinc-700 font-semibold px-8 py-3.5 rounded-md transition-colors inline-flex items-center gap-2 justify-center">
                <Mail size={16} /> kurs@abcfallsikring.no
              </a>
            </div>
            <p className="text-xs text-zinc-400 mt-6">Oppsatte datoer passer ikke? Ring oss – vi tilpasser tid og sted etter ditt behov.</p>
          </div>
        </section>
      </main>
    </>
  )
}
