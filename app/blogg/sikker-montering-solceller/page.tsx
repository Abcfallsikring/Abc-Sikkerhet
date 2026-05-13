import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Sikker montering av solceller på tak – fallsikring for solcellemontører | ABC Sikkerhet",
  description: "Solcellemontering er risikofylt arbeid i høyden. Lær hvilke fallsikringskrav som gjelder, hvordan du sikrer ankerpunkter uten å skade takmembranen, og hva ABC Sikkerhet kan hjelpe med.",
  keywords: ["solcelle montering sikkerhet", "fallsikring solcellepanel", "arbeid høyden solceller", "takmembran ankerpunkt", "HMS solcelle"],
}

export default function SolcellePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft size={14} /> Tilbake til blogg</Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">BRANSJE · SOLCELLER</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sikker montering av solceller på tak</h1>
          <p className="text-zinc-400 text-lg">Solcellemontering er blant de raskest voksende arbeidsoppgavene i høyden. Her er det du trenger å vite om fallsikring.</p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500"><span>ABC Sikkerhet AS</span><span>·</span><span>6 min lesing</span></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10 flex gap-4">
          <AlertTriangle size={24} className="text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-zinc-900 mb-1">Solcellemontering er arbeid i høyden – samme regler gjelder</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Mange solcelleinstallatører er ikke kjent med kravene i Forskrift om utførelse av arbeid. Arbeidstilsynet har økt fokus på bransjen, og manglende fallsikring kan gi store bøter.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Utfordringene ved solcellearbeid på tak</h2>
        <div className="space-y-4 mb-10">
          {[
            { title: "Takmembranen tåler ikke tradisjonelle ankerpunkter", desc: "Å bore gjennom takmembranen ødelegger takgarantien og kan gi lekkasjer. Det kreves spesielle ankerpunkter som ikke penetrerer membranen." },
            { title: "Solcellepaneler skaper nye fallkanter", desc: "Panelene endrer takgeometrien og skaper nye fallkanter, kanter og hulrom som montørene kan snuble i." },
            { title: "Lange arbeidsøkter", desc: "Solcellemontering er ikke kortvarig – det er mange timer på tak. Da er stige utelukket og fullstendig fallsikringssystem påkrevd." },
            { title: "Glatte flater", desc: "Solcellepaneler kan bli svært glatte – spesielt ved dugg, regn eller is. Riktig fottøy og sikring er essensielt." },
          ].map(item => (
            <div key={item.title} className="border border-zinc-200 rounded-xl p-5">
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Ankerpunkter uten å skade takmembranen</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">Det finnes gode løsninger for ankerpunkter som ikke krever gjennomboringer:</p>
        <ul className="space-y-3 mb-10">
          {[
            "Betongtyngder med festepunkter – plasseres på flate tak uten boring",
            "Takbjelke-klemmer – festes til eksisterende takbjelker gjennom luka",
            "Ballast-ankersystemer for membrantak – godkjent for personellsikring",
            "Midlertidige rekkverk med ballastsystem – kollektiv sikring for hele laget",
            "Wirelinjesystemer langs takryggen – gir frihet til å bevege seg langs hele taket",
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm"><CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Anbefalte sikkerhetstiltak for solcellemontører</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { title: "Risikovurdering (SJA)", desc: "Gjennomfør alltid SJA før oppstart. Kartlegg fallkanter, svake punkter og redningsvei." },
            { title: "Kombisele (EN 358+361)", desc: "Velg en sele som gir både posisjonering og falloppfanging. Petzl AVAO BOD FAST eller Skylotec Ignite Ion." },
            { title: "Selvinntrekkende blokk", desc: "Bruk EN 360-godkjent fallsikringsblokk festet i godkjent ankerpunkt over hodehøyde." },
            { title: "Redningsplan", desc: "Ha alltid en skriftlig redningsplan og nødvendig utstyr for å hente ned en person som henger i selen." },
          ].map(item => (
            <div key={item.title} className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
              <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{item.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Spesialtilpassede løsninger for solcellebransjen</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">ABC Sikkerhet hjelper solcelleinstallatører med å velge riktige ankerpunkter, utstyr og prosedyrer – uten å skade taket. Kontakt oss for en uforpliktende prat.</p>
          <Link href="/kontakt" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm">Kontakt oss <ArrowRight size={14} /></Link>
        </div>
      </article>
    </main>
  )
}
