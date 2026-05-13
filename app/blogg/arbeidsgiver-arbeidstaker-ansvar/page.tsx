import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Shield, Users } from "lucide-react"

export const metadata = {
  title: "Arbeidsgivers vs. arbeidstakers ansvar ved arbeid i høyden | ABC Sikkerhet",
  description: "Hvem har ansvaret når noe går galt ved arbeid i høyden? En gjennomgang av Arbeidsmiljøloven, Internkontrollforskriften og hva du plikter som arbeidsgiver og arbeidstaker.",
  keywords: ["arbeidsgiver ansvar fallsikring", "arbeidstaker ansvar høyden", "internkontrollforskriften", "arbeidsmiljøloven arbeid høyden", "HMS ansvar byggeplass"],
  openGraph: {
    title: "Arbeidsgivers vs. arbeidstakers ansvar ved arbeid i høyden",
    description: "Hvem har ansvaret når noe går galt? Gjennomgang av Internkontrollforskriften og Arbeidsmiljøloven.",
    url: "https://abcfallsikring.no/blogg/arbeidsgiver-arbeidstaker-ansvar",
  },
}

export default function AnsvarPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Tilbake til blogg
          </Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            REGELVERK · ANSVAR
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Arbeidsgivers vs. arbeidstakers ansvar ved arbeid i høyden</h1>
          <p className="text-zinc-400 text-lg">En praktisk gjennomgang av hvem som har ansvar for hva – og hva som skjer når det svikter.</p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500">
            <span>ABC Sikkerhet AS</span><span>·</span><span>7 min lesing</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10 flex gap-4">
          <AlertTriangle size={24} className="text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-zinc-900 mb-1">Hvert år skjer alvorlige ulykker</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Fall fra høyden er en av de vanligste årsaksgruppene til alvorlige arbeidsulykker i Norge. Arbeidstilsynet gjennomfører jevnlig tilsyn og kan ilegge bøter på hundretusener av kroner ved brudd på regelverket.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Det rettslige grunnlaget</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Ansvaret for sikker arbeidsplass ved arbeid i høyden er regulert av tre hovedlover og forskrifter:</p>
        <ul className="space-y-2 mb-8">
          {["Arbeidsmiljøloven (aml.) – det overordnede regelverket", "Forskrift om utførelse av arbeid – de konkrete kravene til sikring", "Internkontrollforskriften – krav til systematisk HMS-arbeid"].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Arbeidsgivers ansvar</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Arbeidsmiljøloven § 2-1 slår fast at <strong>arbeidsgiver har det overordnede ansvaret</strong> for at arbeidsmiljøet er fullt forsvarlig. Ved arbeid i høyden innebærer dette:</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Risikovurdering", desc: "Gjennomføre skriftlig risikovurdering (SJA) før alle arbeidsoperasjoner i høyden." },
            { title: "Utstyr og opplæring", desc: "Sørge for godkjent fallsikringsutstyr og dokumentert opplæring til alle ansatte." },
            { title: "Redningsplan", desc: "Ha en skriftlig plan for umiddelbar redning uten avhengighet av nødetater." },
            { title: "Periodisk kontroll", desc: "Sørge for at alt PVU kontrolleres av godkjent person hvert 12. måned." },
            { title: "Internkontroll", desc: "Dokumentere alle HMS-tiltak, avvik og forbedringer i et internkontrollsystem." },
            { title: "Tilsyn på arbeidsstedet", desc: "Sikre at arbeidet faktisk utføres i henhold til vedtatte prosedyrer." },
          ].map(item => (
            <div key={item.title} className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
              <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{item.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Arbeidstakers ansvar</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Arbeidsmiljøloven § 2-3 pålegger også arbeidstaker plikter. Det er <strong>ikke nok å si at sjefen ikke ga beskjed</strong>:</p>
        <ul className="space-y-3 mb-8">
          {[
            "Bruke pålagt verneutstyr – du kan ikke velge å la være",
            "Melde fra om farlige forhold til arbeidsgiver eller verneombud",
            "Ikke sette seg selv eller andre i unødvendig fare",
            "Delta i opplæring og instruksjon",
            "Inspisere utstyr visuelt før bruk",
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Internkontrollforskriften i praksis</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Internkontrollforskriften krever at virksomheten har et <em>systematisk HMS-arbeid</em> – ikke bare at regler er kjent, men at de er dokumentert og etterlevd. For arbeid i høyden betyr dette minimum:</p>
        <div className="bg-zinc-900 text-white rounded-2xl p-6 mb-10">
          <h3 className="font-bold mb-4">Minimumsdokumentasjon for arbeid i høyden</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            {["Skriftlig prosedyre for arbeid i høyden", "Kartlegging av alle høyrisikoarbeidsplasser", "Oversikt over alt PVU med kontrolldatoer", "Opplæringsjournal med navn og dato for alle ansatte", "Redningsplan per arbeidssted", "Avvikslogg med tiltak ved hendelser"].map(item => (
              <li key={item} className="flex items-start gap-2"><CheckCircle size={13} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Konsekvenser ved brudd</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Arbeidstilsynet kan ved tilsyn ilegge:</p>
        <ul className="space-y-2 mb-8">
          {["Pålegg om umiddelbar stans av arbeidet", "Tvangsmulkt (løpende dagbøter) til forholdet er rettet", "Overtredelsesgebyr opptil 1,5 millioner kroner", "Politianmeldelse ved alvorlige brudd eller ulykker"].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><AlertTriangle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Trenger du hjelp med HMS-dokumentasjonen?</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">ABC Sikkerhet tilbyr befaring, risikovurdering og komplett HMS-dokumentasjon for arbeid i høyden. Vi sørger for at du oppfyller alle krav fra Arbeidstilsynet.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm">Få gratis befaring <ArrowRight size={14} /></Link>
            <Link href="/tjenester/risikoanalyse" className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-sm">Om risikoanalyse</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
