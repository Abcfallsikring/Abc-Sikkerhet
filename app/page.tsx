'use client'
import { useState } from 'react'
import {
  Shield, ArrowRight, Phone, CheckCircle2, LifeBuoy, Zap,
  HardHat, Award, ClipboardCheck, BarChart2, ChevronDown,
  MapPin, Mail, Clock, ShoppingBag, BookOpen
} from 'lucide-react'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Hva slags kurs tilbyr ABC Fallsikring?',
      a: 'Vi tilbyr stolpekurs tilpasset NS 9610 og REN-metode (8 timer, maks 6 deltakere), kurs i arbeid i tau, og godkjent opplæring på ActSafe taumoped fra Skylotec. Bedriftsinterne kurs kan ha inntil 8 deltakere. Kurspriser starter fra kr 4.600,-. Kontakt oss på kurs@abcfallsikring.no eller ring 33 74 08 88.',
    },
    {
      q: 'Hva kreves for arbeid i stolpe i Norge?',
      a: 'Norske myndigheter krever at arbeidstakere som skal jobbe i stolpe kan dokumentere praktisk og teoretisk opplæring. Vårt stolpekurs gir nettopp denne dokumentasjonen — 8 timer med teori, praktisk og bruk av utstyr iht. NS 9610.',
    },
    {
      q: 'Er redningssett lovpålagt ved arbeid i høyden?',
      a: 'Ja. Norsk regelverk krever at det alltid skal finnes et godkjent redningssett tilgjengelig ved arbeid i høyden. Vi leverer godkjente redningssett, beredskapsplaner og opplæring i umiddelbar redning.',
    },
    {
      q: 'Selger dere utstyr til enkeltpersoner og bedrifter?',
      a: 'Ja. Nettbutikken vår på abcfallsikring.no er åpen for alle. Priser vises eksklusive moms som standard, men kan vises inklusive moms. Bedrifter som kjøper regelmessig oppfordres til å ta kontakt.',
    },
    {
      q: 'Tilbyr dere service og kontroll av utstyr?',
      a: 'Ja, vi er godkjent servicepunkt for alle ActSafe-produkter. For fallsikringsutstyr som krever årlig kontroll er det viktig at kontrollregimet overholdes for a bevare reklamasjonsretten.',
    },
  ]

  return (
    <>
      <section className="bg-zinc-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Shield size={14} aria-hidden="true" />
            Norges totalleverandør av høydesikkerhet
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Eksperter på fallsikring<br />
            <span className="text-red-500">og arbeid i høyden</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            ABC Fallsikring AS leverer godkjent utstyr, sertifiserte kurs og profesjonell rådgivning. Fra stolpekurs og redningssett til ActSafe taumoped og rope access — alt på ett sted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-md transition-colors inline-flex items-center gap-2 justify-center" href="https://www.abcfallsikring.no/" target="_blank" rel="noopener noreferrer">Se nettbutikken <ArrowRight size={16} aria-hidden="true" /></a>
            <a className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-8 py-3.5 rounded-md transition-colors" href="https://www.abcfallsikring.no/contact_us" target="_blank" rel="noopener noreferrer">Book kurs</a>
          </div>
        </div>
      </section>
      <section className="bg-red-600 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 justify-center text-white text-sm font-semibold">
          {['Godkjent kurs NS 9610', 'ActSafe sertifisert forhandler', 'Skylotec-partner', 'Org.nr)922 646 260', 'Tønsberg, Vestfold'].map((t) => (
            <span key={t} className="flex items-center gap-2"><CheckCircle2 size={15} aria-hidden="true" /> {t}</span>
          ))}
        </div>
      </section>
      <section className="bg-zinc-800 py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[{num: '8t', label: 'Sertifisert kursdag'},{num: '6',label:'Max deltakere per kurs'},{num:'140kg',label:'Godkjent kapasitet Skylotec'},{num:'2019',label:'Etablert'}].map(s => (
            <div key={s.label}><div className="text-3xl font-bold text-red-500">{s.num}</div><div className="text-zinc-400 text-sm mt-1">{s.label}</div></div>
          ))}
        </div>
      </section>
      <section className="bg-zinc-50 py-20 px-4" id="tjenester">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-2">Hva vi tilbyr</p>
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">Komplette løsninger for arbeid i høyden</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Fra utstyr og kurs til redningssett og rope access — vi er din totalleverandør.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{icon:<Shield className="text-red-600" size={28} aria-hidden="true"/>,title:'Fallsikringsutstyr',desc:'Bredt sortiment av godkjente sikringstau, karabiner, forbindelsesliner og seler fra Skylotec. Alt oppfyller gseldende EN-standarder.',href:'https://www.abcfallsikring.no/categories/fallsikring',label:'Se utstyr'},{icon:)<Award className="text-red-600" size={28} aria-hidden="true"/>,title:'Kurs & opplaering',desc:'Sertifiserte kurs i stolpearbeid (NS 9610), arbeid i tau og ActSafe taumoped. Teori, praktisk og bruk av dag.',href:'https://www.abcfallsikring.no/contact_us',label:'Book kurs'},{icon:<LifeBuoy className="text-red-600" size={28} aria-hidden="true"/>,title:'Redningssett' desc:'Lovpalagte redningssett for byggeplass og arbeid i hoyden.',href:'/contact_us',label:'Les mer'},{icon:<Zap className="text-red-600" size={28} aria-hidden="true"/>,title:'ActSafe taumoped',desc:'Autorisert forhandler og sertifisert opplaeringsleverandor for ACX, ICX, PMX, PME og ACC.' href:'/contact_us',label:'Bestill kurs'},{icon:)<HardHat className="text-red-600" size={28} aria-hidden="true"/>,title:'Rope access',desc:'Industriell klatring med IRATA-sertifiserte teknikere.' href:'/contact_us',label:'Ta kontakt'},{icon:<ClipboardCheck className="text-red-600" size={28} aria-hidden="true"/>,title:'Inspeksjon & service',desc:'Godkjent servicepunkt for ActSafe-produkter.' href:'/contact_us',label:'Bestill service'}].map(s => (
              <article key={s.title} className="bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg text-zinc-900 mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{s.desc}</p>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-red-600 flex items-center gap-1 hover:gap-2 transition-all">{s.label} <ArrowRight size={12} aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-red-600 py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Klar for a sikre din arbeidsplass?</h2>
          <p className="text-red-100 mb-8">Besok abcfallsikring.no - din totalleverandor av fallsikringsutstyr, kurs og radgivning.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-3.5 rounded-md transition-colors" href="https://www.abcfallsikring.no/" target="_blank" rel="noopener noreferrer">Besok abcfallsikring.no</a>
            <a href="tel:+4733740888" className="border border-red-300 hover:border-white text-white font-semibold px-8 py-3.5 rounded-md transition-colors">Ring: +47 33 74 08 88</a>
          </div>
        </div>
      </section>
    </>
  )
}
