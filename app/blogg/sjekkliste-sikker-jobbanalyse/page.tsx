import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, ClipboardList } from "lucide-react"

export const metadata = {
  title: "Sjekkliste for sikker jobbanalyse (SJA) ved arbeid i høyden | ABC Sikkerhet",
  description: "En praktisk guide til hvordan du gjennomfører en sikker jobbanalyse (SJA) før arbeid i høyden. Gratis sjekkliste og trinn-for-trinn veiledning.",
  keywords: ["sjekkliste SJA", "sikker jobbanalyse høyden", "risikovurdering arbeid høyden", "SJA skjema", "HMS sjekkliste byggeplass"],
}

export default function SJAPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft size={14} /> Tilbake til blogg</Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">HMS · VERKTØY</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sjekkliste for sikker jobbanalyse (SJA) ved arbeid i høyden</h1>
          <p className="text-zinc-400 text-lg">En praktisk guide til å gjennomføre SJA – og en sjekkliste du kan ta med ut på arbeidsstedet.</p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500"><span>ABC Sikkerhet AS</span><span>·</span><span>7 min lesing</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Hva er en sikker jobbanalyse (SJA)?</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">En SJA er en systematisk gjennomgang av arbeidsoppgaven <em>før</em> den starter. Formålet er å identifisere farer, vurdere risiko og bestemme konkrete tiltak – slik at alle vet hva de skal gjøre og hva de skal passe på.</p>
        <p className="text-zinc-600 leading-relaxed mb-8">SJA er ikke bare god praksis – det er et krav i Internkontrollforskriften og Forskrift om utførelse av arbeid for alle ikke-rutinepregede arbeidsoperasjoner med vesentlig risiko.</p>

        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Steg for steg: Slik gjennomfører du SJA</h2>
        <div className="space-y-4 mb-10">
          {[
            { step: "1", title: "Beskriv arbeidsoppgaven", desc: "Skriv ned hva som skal gjøres, hvem som skal gjøre det og hvor. Vær konkret – ikke 'takreparasjon', men 'tetting av avløpsrør på 6 meter flatt tak'." },
            { step: "2", title: "Kartlegg farene", desc: "Gå gjennom hvert steg i arbeidsoperasjonen og spør: Hva kan gå galt? Vanlige farer: fall, fallende gjenstander, elektrisitet, dårlig vær, trange arbeidsforhold." },
            { step: "3", title: "Vurder risikoen", desc: "For hver fare: vurder sannsynlighet (1-3) og konsekvens (1-3). Risiko = S × K. Risiko over 4 krever tiltak." },
            { step: "4", title: "Bestem tiltak", desc: "For hver risiko: hva gjøres for å redusere den? Rekkverk? Fallsele? Sikring av verktøy? Kommunikasjon? Nødplan?" },
            { step: "5", title: "Gjennomgå med alle", desc: "Gå gjennom SJA-en med alle som skal utføre arbeidet. Alle skal signere – ikke bare forstå, men bekrefte at de har lest og forstått." },
            { step: "6", title: "Evaluer etter jobben", desc: "Etter ferdig jobb: gikk noe galt? Var tiltakene gode nok? Oppdater SJA-en for neste gang." },
          ].map(item => (
            <div key={item.step} className="flex gap-4 bg-zinc-50 rounded-xl p-5 border border-zinc-100">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
              <div><h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3><p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p></div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">SJA-sjekkliste for arbeid i høyden</h2>
        <div className="bg-zinc-900 text-white rounded-2xl p-6 mb-10">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2"><ClipboardList size={18} className="text-orange-500" /> Bruk denne listen på arbeidsstedet</h3>
          <div className="space-y-2">
            {[
              "Arbeidsstedet er befart og risikofaktorer er kartlagt",
              "Fallhøyde er målt og dokumentert",
              "Ankerpunkter er identifisert og belastningstestet",
              "Alt PVU er kontrollert og er innenfor sertifikattid",
              "Redningsplan er kjent for alle på arbeidsstedet",
              "Redningsutstyr er tilgjengelig og klart til bruk",
              "Alle har gjennomgått SJA og signert",
              "Kommunikasjonsprosedyre er avtalt",
              "Nødtelefonnummer er kjent for alle",
              "Faresonering er på plass (ingen uvedkommende under arbeidsstedet)",
              "Værforhold er vurdert og er innenfor akseptable grenser",
              "Arbeid stoppes hvis forholdene endrer seg vesentlig",
            ].map(item => (
              <label key={item} className="flex items-start gap-3 cursor-pointer">
                <div className="w-4 h-4 border border-zinc-500 rounded flex-shrink-0 mt-0.5"></div>
                <span className="text-zinc-300 text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Trenger du hjelp med risikovurdering?</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">ABC Sikkerhet tilbyr befaring og profesjonell risikovurdering for alle typer arbeid i høyden. Vi lager skreddersydde SJA-maler for din bedrift.</p>
          <Link href="/tjenester/risikoanalyse" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm">Om risikoanalyse <ArrowRight size={14} /></Link>
        </div>
      </article>
    </main>
  )
}
