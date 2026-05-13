import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, X } from "lucide-react"

export const metadata = {
  title: "Stigevett: Hvorfor stigen er din farligste arbeidsplass | ABC Sikkerhet",
  description: "Stiger er involvert i svært mange arbeidsulykker. Lær om riktig vinkel, sikring i toppen og hvorfor du ikke bør jobbe lenge fra stige. Råd fra sertifiserte fagfolk.",
  keywords: ["stigevett", "stige sikkert", "fallulykke stige", "riktig vinkel stige", "arbeid fra stige", "fallsikring stige"],
}

export default function StigevettPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft size={14} /> Tilbake til blogg</Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">UTSTYR · SIKKERHET</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Stigevett: Hvorfor stigen er din farligste arbeidsplass</h1>
          <p className="text-zinc-400 text-lg">Stiger er involvert i mange arbeidsulykker – og de fleste er fullt mulig å forebygge. Her er det du trenger å vite.</p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500"><span>ABC Sikkerhet AS</span><span>·</span><span>5 min lesing</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10 flex gap-4">
          <AlertTriangle size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-zinc-900 mb-1">Stiger er involvert i svært mange arbeidsulykker</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Selv fra lav høyde kan fall fra stige gi alvorlige skader. Arbeidstilsynet påpeker at mange stigeulykker skjer på under 3 meters høyde og skyldes feil bruk, ikke defekt utstyr.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Når er det tillatt å bruke stige?</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Forskrift om utførelse av arbeid § 17-9 er klar: stige skal kun brukes til <strong>kortvarige arbeidsoperasjoner av begrenset omfang</strong>, og bare når bruk av sikrere utstyr ikke er mulig.</p>
        <p className="text-zinc-600 leading-relaxed mb-8">I praksis betyr dette: stigen er for å komme seg opp – ikke for å jobbe fra over tid. Trenger du begge hender eller jobber du mer enn 30 minutter fra stige, bør du vurdere stillas, arbeidskurv eller lift.</p>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">3 vanligste stigeulykker – og hvordan unngå dem</h2>
        <div className="space-y-4 mb-10">
          {[
            { nr: "1", title: "Stigen glir ut i bunnen", solution: "Sett alltid stigen på hardt, plant underlag. Bruk stigefot med gummi/pigger. Be noen holde stigen, eller bruk stigebindere i bunnen." },
            { nr: "2", title: "Stigen velter sideways", solution: "Sørg for at stigen er minst 75 cm bredere enn arbeidsområdet på siden. Bind alltid stigen fast i toppen om mulig." },
            { nr: "3", title: "For bratt eller for slak vinkel", solution: "Bruk 4:1-regelen: for 4 meter høyde, sett foten 1 meter fra veggen. Det gir ca. 75° vinkel – det optimale." },
          ].map(item => (
            <div key={item.nr} className="border border-zinc-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{item.nr}</div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed"><strong className="text-zinc-700">Løsning: </strong>{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">4:1-regelen – riktig vinkel på stigen</h2>
        <div className="bg-zinc-900 text-white rounded-2xl p-6 mb-10">
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            <div><div className="text-2xl font-bold text-orange-500">75°</div><div className="text-xs text-zinc-400 mt-1">Optimal vinkel</div></div>
            <div><div className="text-2xl font-bold text-orange-500">4:1</div><div className="text-xs text-zinc-400 mt-1">Høyde:avstand</div></div>
            <div><div className="text-2xl font-bold text-orange-500">1m</div><div className="text-xs text-zinc-400 mt-1">Per 4m høyde</div></div>
          </div>
          <p className="text-zinc-300 text-sm text-center">Er stigen 8 meter lang? Sett foten 2 meter fra veggen.</p>
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Sjekkliste før du går opp</h2>
        <ul className="space-y-2 mb-10">
          {[
            "Stigen er visuelt inspisert – ingen sprekker, bøyde trinn eller skadet materiale",
            "Underlag er plant og stabilt – ikke is, leire eller løs grus",
            "Vinkel er kontrollert med 4:1-regelen",
            "Stigen stikker minst 1 meter over oppstigningspunktet",
            "Stigen er bundet fast i toppen eller sikret i bunnen",
            "Du bærer ikke tunge gjenstander som påvirker balansen",
            "Du har tre kontaktpunkter til enhver tid (to hender + en fot, eller to føtter + en hånd)",
            "Du stiger ikke høyere enn tredje øverste trinn",
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Når stigen ikke er nok</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Vurder alltid om det finnes et sikrere alternativ. ABC Sikkerhet tilbyr:</p>
        <ul className="space-y-2 mb-8">
          {["Rope access for vanskelig tilgjengelige steder", "Risikovurdering og SJA for arbeidsoperasjoner i høyden", "Kurs i riktig bruk av stige og fallsikring", "Rådgivning om valg av riktig arbeidsmetode"].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Sertifisert kurs i fallsikring og stigebruk</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">ABC Sikkerhet tilbyr kurs der dine ansatte lærer riktig og sikker bruk av stige, fallsikringsutstyr og alternative arbeidsmetoder.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/tjenester/kurs" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm">Se kurs <ArrowRight size={14} /></Link>
            <Link href="/kontakt" className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-sm">Kontakt oss</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
