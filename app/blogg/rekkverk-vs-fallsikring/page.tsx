import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Når er det påbudt med rekkverk vs. fallsikring? 2-metersregelen forklart | ABC Sikkerhet",
  description: "Lær når norsk regelverk krever rekkverk og når personlig fallsikring er tilstrekkelig. En praktisk gjennomgang av 2-metersregelen og Forskrift om utførelse av arbeid.",
  keywords: ["rekkverk påbudt", "2-metersregelen arbeid høyden", "fallsikring vs rekkverk", "Forskrift utførelse arbeid", "krav rekkverk byggeplass"],
}

export default function RekkverkPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft size={14} /> Tilbake til blogg</Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">REGELVERK · TEKNISK</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Når er det påbudt med rekkverk vs. fallsikring?</h1>
          <p className="text-zinc-400 text-lg">En praktisk gjennomgang av 2-metersregelen og grensegangene i Forskrift om utførelse av arbeid.</p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500"><span>ABC Sikkerhet AS</span><span>·</span><span>6 min lesing</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Grunnprinsippet: Kollektiv sikring først</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Forskrift om utførelse av arbeid § 17-1 slår fast et viktig prinsipp: <strong>kollektiv fallsikring skal prioriteres fremfor personlig verneutstyr (PVU)</strong>. Dette betyr at rekkverk alltid er å foretrekke fremfor fallsele der det er praktisk mulig.</p>
        <p className="text-zinc-600 leading-relaxed mb-8">Logikken er enkel: rekkverk beskytter alle som befinner seg i området – også de som ikke er opplært i bruk av fallsele. PVU krever opplæring, korrekt bruk og fungerende redningsplan.</p>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">2-metersregelen – hva sier den egentlig?</h2>
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-zinc-900 mb-2">Forskriften sier:</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">Ved arbeid der det er fare for fall til lavere nivå og fallhøyden overstiger <strong>2 meter</strong>, skal det treffes tiltak for å hindre fall. Tiltakene skal velges i prioritert rekkefølge: 1) rekkverk/gelender, 2) arbeidsplattform med rekkverk, 3) sikkerhetsnett, 4) personlig fallsikringsutstyr.</p>
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Krav til rekkverk</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Når rekkverk brukes som fallsikring, stiller forskriften konkrete tekniske krav:</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Høyde", desc: "Minimum 1,0 meter over gulv/plattform. Ved fall mer enn 2 meter: minimum 1,0 m." },
            { title: "Mellomsperre", desc: "Mellomsperre eller tett bekleding som hindrer gjennomfall." },
            { title: "Sparkelist", desc: "Sparkelist på minimum 15 cm for å hindre at gjenstander faller ned." },
            { title: "Styrke", desc: "Tåle en horisontal last på 500 N/m (ca. 50 kg per løpemeter)." },
          ].map(item => (
            <div key={item.title} className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
              <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{item.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Når kan du bruke PVU i stedet for rekkverk?</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Det er tilfeller der rekkverk ikke er praktisk mulig. Da tillater forskriften bruk av personlig fallsikringsutstyr som alternativ:</p>
        <ul className="space-y-3 mb-8">
          {[
            "Kortvarig arbeid der montering av rekkverk tar uforholdsmessig lang tid",
            "Takreparasjoner og takarbeid der rekkverk ikke kan festes",
            "Arbeid i stige der begge hender er nødvendig",
            "Rope access og industriell klatring",
            "Inspeksjonsarbeid på konstruksjoner",
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Spesielle tilfeller</h2>
        <div className="space-y-4 mb-10">
          {[
            { title: "Skråtak", desc: "Ved arbeid på tak med helning over 15° skal det alltid være fallsikring. Rekkverk langs takfoten og sikringsliner er vanligste løsning." },
            { title: "Grøfter og sjakter", desc: "Åpne grøfter og sjakter dypere enn 2 meter skal sikres med rekkverk eller dekkes til. PVU er alternativ ved kortvarig arbeid i grøften." },
            { title: "Stillasarbeid", desc: "Stillas med arbeidsgulv høyere enn 2 meter skal ha rekkverk på alle åpne sider. Stillasbrukere trenger ikke PVU så lenge rekkverket er på plass." },
            { title: "Heisbrønner og sjakter", desc: "Her stilles særskilte krav. Trefot med fallsikringsblokk er standardløsning for personellopphold i sjakter." },
          ].map(item => (
            <div key={item.title} className="border border-zinc-200 rounded-xl p-5">
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Usikker på hva som kreves på ditt arbeidssted?</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">ABC Sikkerhet gjennomfører befaring og risikovurdering der vi kartlegger nøyaktig hvilke sikringstiltak som kreves og anbefales for din spesifikke situasjon.</p>
          <Link href="/kontakt" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm">Bestill befaring <ArrowRight size={14} /></Link>
        </div>
      </article>
    </main>
  )
}
