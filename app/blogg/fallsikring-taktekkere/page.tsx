import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Fallsikring for taktekkere: Sikring på skråtak og flate tak | ABC Sikkerhet",
  description: "En komplett guide til fallsikring for taktekkere. Krav til sikring på skråtak, flate tak og takrygger – med anbefalte produkter og løsninger.",
  keywords: ["fallsikring taktekkere", "sikring skråtak", "fallsikring flatt tak", "takarbeid HMS", "takrekkverk", "fallsikring tak"],
}

export default function TaktekkerePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft size={14} /> Tilbake til blogg</Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">BRANSJE · TAKTEKKERE</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Fallsikring for taktekkere: Skråtak og flate tak</h1>
          <p className="text-zinc-400 text-lg">En praktisk guide med konkrete krav og anbefalte løsninger for de vanligste taktypene.</p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500"><span>ABC Sikkerhet AS</span><span>·</span><span>6 min lesing</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Regelverket for takarbeid</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Forskrift om utførelse av arbeid § 17-1 krever at arbeidsgiver ved arbeid på tak skal sørge for at det er treffet tiltak som hindrer fall fra takfot, gjennom takflate og mot takgjennomføringer. Kravet gjelder fra 2 meters fallhøyde.</p>
        <p className="text-zinc-600 leading-relaxed mb-8">For tak med helning over 15° skal det alltid brukes fallsikring uavhengig av varigheten på arbeidet.</p>

        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Løsninger for ulike taktyper</h2>
        <div className="space-y-6 mb-10">
          {[
            {
              type: "Skråtak (helning 15–45°)",
              solutions: ["Takankre med wirelinjesystem langs mønekammen", "Fallsikringsblokk festet i godkjent takanker over hodehøyde", "Midlertidig rekkverk langs takfot ved langvarig arbeid"],
              products: ["Skylotec takankre", "Selvinntrekkende fallsikringsblokk EN 360"],
            },
            {
              type: "Bratt tak (helning over 45°)",
              solutions: ["Alltid personlig fallsikring med dorsal tilkobling", "Wirelinjesystem langs mønekammen", "Vurder om stillas/arbeidskurv er mer egnet"],
              products: ["Kombisele med dorsal og frontal D-ring", "Energiabsorberende stropp 1,5–2 m"],
            },
            {
              type: "Flatt tak",
              solutions: ["Rekkverk langs alle takfotskanter (preferert løsning)", "Ballast-ankersystem for wirelinjer", "Fallsele med selvinntrekkende blokk ved kortvarige oppgaver nær kanten"],
              products: ["Midlertidige rekkverkssystemer med ballast", "Skylotec/Petzl fallsikringsblokker"],
            },
          ].map(item => (
            <div key={item.type} className="border border-zinc-200 rounded-xl p-6">
              <h3 className="font-bold text-zinc-900 mb-3">{item.type}</h3>
              <div className="mb-3">
                <div className="text-xs font-semibold text-zinc-500 mb-2">ANBEFALTE TILTAK</div>
                {item.solutions.map(s => <div key={s} className="flex items-start gap-2 text-sm text-zinc-600 mb-1"><CheckCircle size={13} className="text-orange-500 flex-shrink-0 mt-0.5" />{s}</div>)}
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-500 mb-2">PRODUKTER</div>
                {item.products.map(p => <div key={p} className="text-xs text-orange-600 font-medium mb-1">→ {p}</div>)}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Farlige situasjoner å være ekstra obs på</h2>
        <ul className="space-y-2 mb-10">
          {["Takluker og takvinduer – fall gjennom glassflater er svært vanlig", "Takrygger og mønet – særlig farlig ved glatte forhold", "Overlys og takgjennomføringer – dekk alltid til åpninger", "Ising og dugg – bruk riktig fottøy og stopp arbeidet ved for glatte forhold", "Fritthengende takrenner – ikke bruk som støtte"].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Utstyr og rådgivning for taktekkere</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">ABC Sikkerhet leverer godkjent fallsikringsutstyr og tilbyr befaring og risikovurdering for takarbeid. Vi kjenner kravene og finner den best egnede løsningen.</p>
          <Link href="/kontakt" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm">Kontakt oss <ArrowRight size={14} /></Link>
        </div>
      </article>
    </main>
  )
}
