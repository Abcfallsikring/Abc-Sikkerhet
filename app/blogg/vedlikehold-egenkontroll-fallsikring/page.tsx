import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Vedlikehold og egenkontroll av fallsikringsutstyr | ABC Sikkerhet",
  description: "Hvordan inspisere seler, karabinkroker og stroppsamlere for slitasje – og når du må kaste utstyret. En praktisk guide til daglig egenkontroll av PVU.",
  keywords: ["egenkontroll fallsikring", "vedlikehold fallsikringsutstyr", "inspisere sele slitasje", "kaste fallsikring", "PVU kontroll"],
}

export default function VedlikeholdPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft size={14} /> Tilbake til blogg</Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">UTSTYR · VEDLIKEHOLD</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Vedlikehold og egenkontroll av fallsikringsutstyr</h1>
          <p className="text-zinc-400 text-lg">Hva du ser etter, hva du aldri bør overse – og når utstyret er klart for søppelet.</p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500"><span>ABC Sikkerhet AS</span><span>·</span><span>6 min lesing</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">To nivåer av kontroll</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <h3 className="font-bold text-zinc-900 mb-2">Daglig egenkontroll</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Utføres av brukeren selv <strong>før hver bruk</strong>. En visuell og taktil gjennomgang som tar 2–5 minutter.</p>
          </div>
          <div className="bg-zinc-900 text-white rounded-xl p-5">
            <h3 className="font-bold mb-2">Periodisk kontroll</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">Utføres av <strong>godkjent person</strong> hvert 12. måned. Dokumenteres skriftlig og arkiveres. ABC Sikkerhet tilbyr dette.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Slik inspiserer du selen</h2>
        <div className="space-y-3 mb-10">
          {[
            { del: "Tekstilremmer", sjekk: "Kutt, rifter, slitasje, misfarging, kjemikalieskade, stivhet eller mykhet som ikke er normal" },
            { del: "Søm og stikk", sjekk: "Løse tråder, sprukne sting, farge på søm (noen seler har fargede tråder som indikator)" },
            { del: "D-ringer og metallbraketter", sjekk: "Korrosjon, deformasjon, sprekker, sveisemerker som indikerer at ringen har vært belastet ved fall" },
            { del: "Spenner og låser", sjekk: "At alle spenner fungerer og låser seg korrekt. Rust, bøyde deler eller stivhet i bevegelse" },
            { del: "Etikett og merking", sjekk: "At serialnummer, produksjonsdato og sertifiseringsmerke er leselig. Utstyr uten lesbar merking kasseres" },
          ].map(item => (
            <div key={item.del} className="border border-zinc-200 rounded-xl p-4 flex gap-4">
              <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
              <div><strong className="text-zinc-900 text-sm">{item.del}:</strong> <span className="text-zinc-500 text-sm">{item.sjekk}</span></div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Karabinkroker og koblingselementer</h2>
        <ul className="space-y-2 mb-8">
          {["Åpne og lukk låsemekanismen – den skal bevege seg fritt og gå i lås av seg selv", "Sjekk at låseskruen ikke er løs eller skadet", "Se etter deformasjon – en bøyd karabinkrok har mistet opp til 70% av styrken", "Rust: lett overflaterust kan være OK, men dypere rust er kassasjonsgrunn", "Slagmerker: kraftige slag kan forårsake mikro-sprekker som ikke er synlige"].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Når skal utstyret kasseres?</h2>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10">
          <h3 className="font-bold text-zinc-900 mb-3 flex items-center gap-2"><AlertTriangle size={16} className="text-red-500" /> Kasser alltid utstyr som:</h3>
          <ul className="space-y-2">
            {["Har vært utsatt for et fall (selv om det ser uskadd ut)", "Er eldre enn produsentens angitte levetid (typisk 10 år fra produksjon)", "Har synlig skade på remmer, søm eller metallkomponenter", "Mangler lesbar merking eller sertifiseringsetikett", "Du er usikker på – tvil er kassasjonsgrunn"].map(item => (
              <li key={item} className="flex items-start gap-2 text-zinc-700 text-sm"><AlertTriangle size={13} className="text-red-500 flex-shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Bestill godkjent periodisk kontroll</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">ABC Sikkerhet utfører godkjent periodisk kontroll av all PVU med digital dokumentasjon via Onix. Kontakt oss for å avtale tid.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/tjenester/inspeksjon" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm">Om inspeksjon <ArrowRight size={14} /></Link>
            <Link href="/kontakt" className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-sm">Bestill time</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
