import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Forankringspunkter: Hva kan du faktisk stole på? | ABC Sikkerhet",
  description: "Ikke alle festepunkter er trygge ankerpunkter. Lær hvordan du identifiserer sikre forankringspunkter i betong, stål og tre – og hva du aldri skal koble til.",
  keywords: ["forankringspunkt fallsikring", "ankerpunkt arbeid høyden", "sikker ankring", "forankring betong stål tre", "godkjent ankerpunkt"],
}

export default function ForankringPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft size={14} /> Tilbake til blogg</Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">UTSTYR · TEKNIKK</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Forankringspunkter: Hva kan du faktisk stole på?</h1>
          <p className="text-zinc-400 text-lg">Feil valg av ankerpunkt kan føre til katastrofe selv med perfekt annet utstyr. Her er en praktisk guide.</p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500"><span>ABC Sikkerhet AS</span><span>·</span><span>6 min lesing</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10 flex gap-4">
          <AlertTriangle size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-zinc-900 mb-1">Kravet er klart: 12 kN</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Et godkjent ankerpunkt for fallsikring skal tåle minst <strong>12 kN</strong> (ca. 1200 kg) statisk belastning. Dette er ikke noe du kan vurdere visuelt – det må enten dokumenteres fra produsent eller testes av kompetent person.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Hva er et godkjent ankerpunkt?</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Forskrift om utførelse av arbeid § 17-6 krever at ankerpunkter for personlig fallsikring skal:</p>
        <ul className="space-y-2 mb-8">
          {["Tåle en statisk last på minimum 12 kN", "Være dokumentert av produsent eller vurdert av kompetent person", "Ha EN 795-godkjenning dersom det er et dedikert ankerpunkt", "Sitte i eller over hodehøyde når det er mulig", "Inspiseres visuelt før bruk"].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Ulike underlagsmaterialer</h2>
        <div className="space-y-4 mb-10">
          {[
            { material: "Armert betong", safe: ["Ekspanderende bolter (Hilti, Fischer)", "Kjemisk ankring i min. 150mm dybde", "Eksisterende godkjente løftepunkter"], unsafe: ["Plastdybler i betong", "Ankring i betong under 80mm tykkelse"] },
            { material: "Konstruksjonsstål", safe: ["Klemmer/U-bolter rundt bærende bjelker", "Sveist øyebolt på dokumentert stålkonstruksjon", "Godkjente kabelbreer og wiresystemer"], unsafe: ["Tynnplatekonstruksjoner", "Ubehandlet aluminium uten statisk vurdering"] },
            { material: "Tre og bindingsverk", safe: ["Gjennom-bolter med forsterkning på begge sider", "Festepunkter til bærende drager/åser, ikke kledning", "Spesialtilpassede treklosser med dokumentasjon"], unsafe: ["Taklekter og ikke-bærende kledning", "Gamle tre-konstruksjoner uten tilstandsvurdering"] },
          ].map(item => (
            <div key={item.material} className="border border-zinc-200 rounded-xl p-5">
              <h3 className="font-bold text-zinc-900 mb-3">{item.material}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <div className="text-xs font-semibold text-green-600 mb-2">✅ Kan brukes</div>
                  {item.safe.map(s => <div key={s} className="text-xs text-zinc-600 mb-1">• {s}</div>)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-red-600 mb-2">❌ Ikke bruk</div>
                  {item.unsafe.map(u => <div key={u} className="text-xs text-zinc-600 mb-1">• {u}</div>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Dedikerte ankerpunkter fra ABC Sikkerhet</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Den sikreste løsningen er alltid et dedikert, dokumentert ankerpunkt. ABC Sikkerhet leverer og monterer:</p>
        <ul className="space-y-2 mb-8">
          {["Skylotec takankre for flate og skrå tak", "Wirelinjesystemer (horizontal life lines)", "Punktankre med EN 795 dokumentasjon", "Trefot-systemer for sjakter og luker", "Mobile ankerpunkter for kortvarig bruk"].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Trenger du godkjente ankerpunkter?</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">ABC Sikkerhet monterer og dokumenterer godkjente ankerpunkter for alle typer bygningsmateriale. Vi leverer komplett dokumentasjon.</p>
          <Link href="/kontakt" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm">Kontakt oss <ArrowRight size={14} /></Link>
        </div>
      </article>
    </main>
  )
}
