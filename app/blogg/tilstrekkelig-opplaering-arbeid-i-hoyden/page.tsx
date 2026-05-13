import Link from "next/link"
import { Award, BookOpen, HardHat, CheckCircle, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Hva er tilstrekkelig opplæring for arbeid i høyden? | ABC Sikkerhet",
  description:
    "Konkrete krav fra Arbeidstilsynet og Forskrift om utførelse av arbeid. Hva må du som arbeidsgiver dokumentere, og hva er minimumsopplæring for fallsikring og redning?",
}

export default function OpplaringPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Tilbake til blogg
          </Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            OPPLÆRING · REGELVERK
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hva er tilstrekkelig opplæring for arbeid i høyden?
          </h1>
          <p className="text-zinc-400 text-lg">
            «Tilstrekkelig opplæring» er et juridisk begrep med konkrete konsekvenser. Her bryter vi ned hva loven faktisk krever – og hva som skjer hvis du ikke oppfyller kravene.
          </p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500">
            <span>ABC Sikkerhet AS</span>
            <span>·</span>
            <span>10 min lesing</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 mb-10">
          <h3 className="font-bold text-zinc-900 mb-2 flex items-center gap-2">
            <BookOpen size={18} className="text-orange-500" />
            Lovgrunnlag
          </h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Kravene til opplæring ved arbeid i høyden følger av <strong>Forskrift om utførelse av arbeid (FOR-2011-12-06-1357), Kapittel 17</strong>, og de generelle opplæringskravene i <strong>Forskrift om organisering, ledelse og medvirkning (best.nr. 701)</strong>. Arbeidsgiver er alltid ansvarlig for at opplæringen er gjennomført og dokumentert.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">Hva betyr «tilstrekkelig opplæring»?</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Regelverket bruker begrepet «tilstrekkelig opplæring» uten alltid å definere eksakt antall timer. Men prinsippet er klart: arbeidstakeren skal kunne utføre arbeidet trygt, identifisere farer, bruke utstyret korrekt og vite hva de skal gjøre hvis noe går galt.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-8">
          Det holder ikke å ha lest en bruksanvisning. Opplæringen skal være <strong>både teoretisk og praktisk</strong>, og den praktiske delen skal skje under tilsyn av en kvalifisert person.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">Konkrete timekrav fra forskriften</h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          For stillasarbeid har forskriften satt konkrete minimumskrav:
        </p>

        <div className="space-y-4 mb-10">
          {[
            {
              label: "Stillas 2–5 meter (systemstillas)",
              teori: "7,5 timer",
              praksis: "7,5 timer",
              note: "Under tilsyn av kvalifisert person",
            },
            {
              label: "Stillas 5–9 meter (systemstillas)",
              teori: "15 timer",
              praksis: "15 timer",
              note: "Inkludert kravene fra 2–5 m",
            },
            {
              label: "Stillas over 9 meter / spesialstillas",
              teori: "25 timer",
              praksis: "25 timer",
              note: "Tilleggsopplæring utover 5–9 m",
            },
          ].map((row) => (
            <div key={row.label} className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
              <div className="font-semibold text-zinc-900 mb-3">{row.label}</div>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="text-center bg-white rounded-lg p-3 border border-zinc-200">
                  <div className="text-2xl font-bold text-orange-500">{row.teori}</div>
                  <div className="text-xs text-zinc-500 mt-1">Teoretisk opplæring</div>
                </div>
                <div className="text-center bg-white rounded-lg p-3 border border-zinc-200">
                  <div className="text-2xl font-bold text-orange-500">{row.praksis}</div>
                  <div className="text-xs text-zinc-500 mt-1">Praktisk øvelse</div>
                </div>
              </div>
              <p className="text-xs text-zinc-400">{row.note}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">Opplæring i personlig fallsikringsutstyr (PVU)</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          For bruk av personlig fallsikringsutstyr – som fallsele, koblingsstropp, falldemper og selvlåsende blokk – stiller forskriften krav om dokumentert opplæring uten å fastsette et eksakt timekrav. Opplæringen skal minst dekke:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          {[
            "Korrekt påkledning og justering av sele",
            "Kontroll av utstyr før bruk (daglig inspeksjon)",
            "Forståelse for frie fall og falldempere",
            "Valg av riktig ankerpunkt og arbeidsmetode",
            "Hva gjøre ved fall – redningsprosedyre",
            "Hengetrauma – hva det er og forebygging",
            "Periodisk kontroll og kassasjonskrav",
            "Begrensninger for utstyret i aktuelle arbeidsforhold",
          ].map((p) => (
            <div key={p} className="flex items-start gap-2.5 bg-zinc-50 rounded-lg p-3 border border-zinc-200">
              <CheckCircle size={15} className="text-orange-500 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-700 text-sm">{p}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">Opplæring i redning</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Siden loven krever at arbeidsgiver sørger for umiddelbar redning, må minst én person per arbeidsgruppe ha praktisk opplæring i redning fra høyden. Denne opplæringen skal inkludere:
        </p>
        <ul className="space-y-2 mb-6 text-zinc-600">
          <li className="flex items-start gap-2"><CheckCircle size={15} className="text-orange-500 flex-shrink-0 mt-1" />Oppsett av redningsanker og trefot</li>
          <li className="flex items-start gap-2"><CheckCircle size={15} className="text-orange-500 flex-shrink-0 mt-1" />Påsetting av evakueringssele på bevisstløs person</li>
          <li className="flex items-start gap-2"><CheckCircle size={15} className="text-orange-500 flex-shrink-0 mt-1" />Kontrollert senking med nedfiringsbrems</li>
          <li className="flex items-start gap-2"><CheckCircle size={15} className="text-orange-500 flex-shrink-0 mt-1" />Førstehjelp ved hengetrauma</li>
          <li className="flex items-start gap-2"><CheckCircle size={15} className="text-orange-500 flex-shrink-0 mt-1" />Praktisk øvelse på faktisk arbeidssted</li>
        </ul>

        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6 mb-10">
          <AlertTriangle size={20} className="text-orange-500 mb-2" />
          <h3 className="font-bold text-zinc-900 mb-1">Viktig: dokumentasjon er obligatorisk</h3>
          <p className="text-zinc-700 text-sm leading-relaxed">
            Det er ikke nok å ha gjennomført opplæringen – du må kunne dokumentere den. Opplæringen skal være tilgjengelig for verneombudet og Arbeidstilsynet. Manglende dokumentasjon kan medføre overtredelsesgebyr.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">Hva skjer ved mangelfull opplæring?</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Arbeidstilsynet har skjerpet reaksjonspraksisen betydelig de siste årene. I 2024 vedtok de over 650 overtredelsesgebyrer. Konsekvenser av mangelfull opplæring kan være:
        </p>
        <ul className="space-y-2 mb-8 text-zinc-600">
          <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-orange-500 flex-shrink-0 mt-1" />Overtredelsesgebyr fra Arbeidstilsynet</li>
          <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-orange-500 flex-shrink-0 mt-1" />Stansing av arbeid på byggeplassen</li>
          <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-orange-500 flex-shrink-0 mt-1" />Erstatningsansvar ved ulykke</li>
          <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-orange-500 flex-shrink-0 mt-1" />Straffeansvar for arbeidsgiver/ledelse ved alvorlige hendelser</li>
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">Kurs fra ABC Sikkerhet</h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          ABC Sikkerhet tilbyr sertifiserte kurs som oppfyller kravene i forskriften, inkludert kursbevis og dokumentasjon som kan fremlegges for Arbeidstilsynet. Vi tilpasser kursene til din bransje og ditt arbeidssted.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: HardHat, title: "Grunnkurs fallsikring", desc: "1–2 dager. Teori og praksis. Kursbevis utleveres." },
            { icon: Award, title: "Redningskurs", desc: "Halvdag. Praktisk redning fra høyden. Øvelse på arbeidssted." },
            { icon: BookOpen, title: "Actsafe operatørkurs", desc: "Godkjent opplæring i Actsafe taumopeder." },
          ].map((kurs) => (
            <div key={kurs.title} className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
              <kurs.icon size={24} className="text-orange-500 mb-3" />
              <div className="font-semibold text-zinc-900 mb-1 text-sm">{kurs.title}</div>
              <p className="text-zinc-500 text-xs leading-relaxed">{kurs.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Er opplæringen din i orden?</h3>
          <p className="text-zinc-300 text-sm leading-relaxed mb-4">
            Kontakt oss for en gratis gjennomgang av opplæringsbehovet i din bedrift. Vi hjelper deg å komme i samsvar med regelverket.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm"
          >
            Kontakt oss <ArrowRight size={14} />
          </Link>
        </div>

      </article>
    </main>
  )
}
