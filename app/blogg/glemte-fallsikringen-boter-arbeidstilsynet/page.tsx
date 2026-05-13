import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Glemte fallsikringen – hva koster det i bøter fra Arbeidstilsynet? | ABC Sikkerhet",
  description: "Overtredelsesgebyr fra Arbeidstilsynet kan komme på hundretusener av kroner. Se hva ulike brudd faktisk koster og hva som er billigst – bøter eller riktig utstyr.",
  keywords: ["Arbeidstilsynet bøter fallsikring", "overtredelsesgebyr HMS", "gebyr arbeid høyden", "tilsyn fallsikring", "kostnad manglende fallsikring"],
}

export default function BøterPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft size={14} /> Tilbake til blogg</Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">REGELVERK · ØKONOMI</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Glemte fallsikringen – hva koster det i bøter?</h1>
          <p className="text-zinc-400 text-lg">En sammenligning av kostnaden ved manglende fallsikring vs. kostnaden ved å gjøre det riktig.</p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500"><span>ABC Sikkerhet AS</span><span>·</span><span>5 min lesing</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Arbeidstilsynets virkemidler</h2>
        <p className="text-zinc-600 leading-relaxed mb-8">Arbeidstilsynet kan ved tilsyn bruke en rekke virkemidler – fra pålegg til umiddelbar stans og store bøter. Her er en oversikt:</p>

        <div className="space-y-4 mb-10">
          {[
            { type: "Pålegg med frist", cost: "Ingen umiddelbar kostnad", desc: "Krav om å rette opp forholdet innen en bestemt frist. Overholdes ikke fristen, ilegges tvangsmulkt." },
            { type: "Tvangsmulkt", cost: "Fra 5 000 – 50 000 kr/dag", desc: "Løpende dagbøter som påløper til forholdet er rettet. En uke med tvangsmulkt kan raskt bli 200 000+." },
            { type: "Overtredelsesgebyr", cost: "50 000 – 1 500 000 kr", desc: "Engangsgebyr for alvorlige brudd. Størrelsen avhenger av bruddets alvorlighet, bedriftens størrelse og gjentakelse." },
            { type: "Stans av arbeid", cost: "Produksjonstap", desc: "Umiddelbar stans av arbeidsoperasjonen. Alle kostnader ved forsinkelse påløper for virksomheten." },
            { type: "Politianmeldelse", cost: "Straffeansvar", desc: "Ved alvorlige brudd eller ulykker kan enkeltpersoner og ledelsen anmeldes og straffes med bøter eller fengsel." },
          ].map(item => (
            <div key={item.type} className="border border-zinc-200 rounded-xl p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-zinc-900">{item.type}</h3>
                <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">{item.cost}</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Hva koster riktig utstyr?</h2>
        <div className="bg-zinc-900 text-white rounded-2xl p-6 mb-10">
          <h3 className="font-bold mb-4">Komplett fallsikringsutstyr for én person</h3>
          <div className="space-y-2 text-sm">
            {[
              ["Kombisele (Skylotec Ignite Ion)", "2 500 – 4 500 kr"],
              ["Falldempende stropp 2 m", "800 – 1 500 kr"],
              ["Karabinkrok autolås", "400 – 800 kr"],
              ["Selvinntrekkende blokk 3 m", "2 000 – 4 000 kr"],
              ["Periodisk kontroll per år", "500 – 1 000 kr"],
            ].map(([item, price]) => (
              <div key={item} className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-300">{item}</span>
                <span className="text-orange-400 font-medium">{price}</span>
              </div>
            ))}
            <div className="flex justify-between pt-2 font-bold">
              <span>Totalt</span>
              <span className="text-orange-500">ca. 6 000 – 11 000 kr</span>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10">
          <h3 className="font-bold text-zinc-900 mb-2">Konklusjonen er enkel</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">Komplett fallsikringsutstyr for én person koster mellom 6 000 og 11 000 kr. Et overtredelsesgebyr starter på 50 000 kr og kan gå til 1,5 millioner. Det er ikke regnestykket du vil tape.</p>
        </div>

        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Kom i gang med riktig fallsikring</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">ABC Sikkerhet hjelper deg med å velge riktig utstyr, opplæring og dokumentasjon – slik at du aldri trenger å bekymre deg for tilsyn fra Arbeidstilsynet.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm">Kontakt oss <ArrowRight size={14} /></Link>
            <a href="https://www.abcfallsikring.no" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-sm">Se nettbutikk</a>
          </div>
        </div>
      </article>
    </main>
  )
}
