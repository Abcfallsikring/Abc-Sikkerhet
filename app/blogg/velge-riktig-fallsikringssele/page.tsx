import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Slik velger du riktig fallsikringssele | ABC Sikkerhet",
  description: "Forskjellen på støtteseler, falloppfangingsseler og seler for hengende arbeid. Lær hva du skal se etter og hvilken sele som passer til din arbeidsoppgave.",
  keywords: ["fallsikringssele", "velge sele arbeid høyden", "kombisele", "støttesele", "hengende arbeid sele", "Skylotec sele", "Petzl sele"],
}

export default function SelePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft size={14} /> Tilbake til blogg</Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">UTSTYR · GUIDE</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Slik velger du riktig fallsikringssele</h1>
          <p className="text-zinc-400 text-lg">Ikke alle seler er like. Her er en praktisk guide til å velge riktig sele for din arbeidsoppgave.</p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500"><span>ABC Sikkerhet AS</span><span>·</span><span>6 min lesing</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">De tre hovedtypene seler</h2>
        <div className="space-y-6 mb-12">
          {[
            {
              type: "Støttesele (Work Positioning Harness)",
              standard: "EN 358",
              use: "Posisjonering og arbeid i vinkel – ikke for falloppfanging",
              examples: "Arbeid i mast, arbeid i vinkel på stillas",
              color: "bg-blue-50 border-blue-200",
              badge: "EN 358",
            },
            {
              type: "Falloppfangingssele (Full Body Harness)",
              standard: "EN 361",
              use: "Stopper fall – er det du trenger der det er reell fallrisiko",
              examples: "Takarbeid, grøfter, arbeidsplattformer uten rekkverk",
              color: "bg-orange-50 border-orange-200",
              badge: "EN 361",
            },
            {
              type: "Kombisele / multisele",
              standard: "EN 358 + EN 361",
              use: "Kombinerer støtte og falloppfanging i én sele",
              examples: "Rope access, arbeid i høyden over tid, inspeksjonsarbeid",
              color: "bg-green-50 border-green-200",
              badge: "EN 358+361",
            },
          ].map(item => (
            <div key={item.type} className={`rounded-2xl p-6 border ${item.color}`}>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-zinc-900">{item.type}</h3>
                <span className="text-xs font-bold bg-zinc-900 text-white px-2 py-1 rounded">{item.badge}</span>
              </div>
              <p className="text-zinc-600 text-sm mb-2"><strong>Brukes til:</strong> {item.use}</p>
              <p className="text-zinc-500 text-sm"><strong>Eksempel:</strong> {item.examples}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Hva betyr festepunktene?</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Ulike seler har ulike festepunkter – og det er ikke tilfeldig. Her er de vanligste:</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { point: "Dorsalt (rygg)", desc: "For falloppfanging. Kobler til falldempende stropp eller blokk. Gir best kraftfordeling ved fall." },
            { point: "Frontalt (bryst)", desc: "For redning og heising. Kobler til heisanordning eller tau. Holder kroppen oppreist ved heising." },
            { point: "Lateral (side)", desc: "For posisjonering. Kobler til ankerpunkt for å holde deg i arbeidsposisjon." },
            { point: "Sternal (sternum)", desc: "For tau-arbeid og rope access. Plassert midt på brystet for optimal balanse i tau." },
          ].map(item => (
            <div key={item.point} className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
              <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{item.point}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Tilpassing er kritisk</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">En feil tilpasset sele kan forårsake alvorlige skader ved fall – og er et regelbrudd. Tommelfingerreglene:</p>
        <ul className="space-y-3 mb-10">
          {[
            "Bryststroppene skal krysse på brystet – ikke for høyt opp mot halsen",
            "Lårstroppene skal sitte tett nok til at én flat hånd kan føres under",
            "Skulderstroppene skal ligge flatt mot skuldrene uten å bite",
            "Dorsalt D-ring skal sitte mellom skulderbladene – ikke i nakken",
            "Ta på selen og gjør en 'henge-test' ved usikkerhet",
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Anbefalte seler fra ABC Sikkerhet</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { name: "Skylotec Ignite Ion G-1130", type: "Kombisele EN 361", desc: "Lett, komfortabel og EN 361-godkjent. Dorsalt og frontalt festepunkt. Anbefales for de fleste typer arbeid i høyden." },
            { name: "Petzl AVAO BOD FAST", type: "Arbeidssele EN 358+361", desc: "Hurtigspenner og bred hoftestøtte. Ideell for langvarig hengende arbeid og rope access." },
            { name: "Skylotec Relyon", type: "Komplett redningssett", desc: "Sele med tilhørende fallsikringsblokk og karabinkroker. Klar til bruk som redningssett på byggeplass." },
            { name: "Petzl VOLT", type: "Fallsikringssele EN 361", desc: "Easyfit-design med vest som holder selen på plass. Fast-spenner for rask og korrekt påkledning." },
          ].map(item => (
            <div key={item.name} className="border border-zinc-200 rounded-xl p-5">
              <div className="text-xs text-orange-500 font-medium mb-1">{item.type}</div>
              <h3 className="font-semibold text-zinc-900 mb-2 text-sm">{item.name}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Usikker på hvilken sele du trenger?</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">ABC Sikkerhet hjelper deg med å velge riktig utstyr. Vi fører et bredt utvalg av Skylotec og Petzl-seler med godt lager og rask levering.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://www.abcfallsikring.no" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm">Se nettbutikk <ArrowRight size={14} /></a>
            <Link href="/kontakt" className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-sm">Få råd</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
