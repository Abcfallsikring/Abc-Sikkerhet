import Image from 'next/image'
import Link from 'next/link'
import { Shield, ArrowRight, CircleCheckBig, LifeBuoy, Zap, HardHat, Award, CircleCheck, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Shield size={14} aria-hidden="true" />
            Norges totalleverandør av fallsikring og høydesikkerhet
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Eksperter på fallsikring<br />
            <span className="text-orange-500">og arbeid i høyden</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            ABC Fallsikring AS leverer trygge løsninger for arbeid i høyden. Fra risikovurdering og sertifiserte kurs til rope access, redningssett og ActSafe taumopeder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors inline-flex items-center gap-2" href="https://www.abcfallsikring.no/contact_us">
              Kontakt oss <ArrowRight size={16} aria-hidden="true" />
            </a>
            <Link className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-8 py-3.5 rounded-md transition-colors" href="/tjenester">
              Se våre tjenester
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-orange-500 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { num: '2019', label: 'Etablert' },
            { num: 'NS 9610', label: 'Godkjent kurs' },
            { num: '100%', label: 'Sertifisert utstyr' },
            { num: '2000+', label: 'Kursdeltakere' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl font-bold">{s.num}</div>
              <div className="text-orange-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROPE ACCESS */}
      <section className="bg-zinc-900 text-white py-20 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">ROPE ACCESS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industriell klatring og rope access</h2>
            <p className="text-zinc-300 mb-4 leading-relaxed">
              ABC Fallsikring AS tilbyr profesjonelle rope access-tjenester for industri, bygg og offshore. Rask mobilisering uten behov for stillas.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {['IRATA Level 1, 2 og 3 sertifiserte teknikere', 'Fasadearbeid, inspeksjon og vedlikehold', 'Offshore og vindkraft', 'Rask mobilisering – ingen stillas nødvendig'].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <CircleCheckBig className="text-orange-500 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2" href="https://www.abcfallsikring.no/contact_us">
              Kontakt oss om rope access <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image alt="Rope access industriell klatring" src="/images/SKYLOTEC_Application photo_Rope Access_06.jpg" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* REDNINGSSETT */}
      <section className="bg-zinc-800 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">LOVPÅLAGT</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Redningssett til byggeplass og arbeid i høyden</h2>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                Norsk regelverk krever at det alltid skal finnes et godkjent redningssett tilgjengelig ved arbeid i høyden. Dette innebærer planer og utstyr for <strong className="text-white">umiddelbar redning uten bruk av nødetatene</strong>.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {['Godkjente redningssett for alle typer arbeid i høyden', 'Redningstilgang uten avhengighet av brannvesen/ambulanse', 'Kurs og praktisk øvelse for eget personell', 'Dokumentasjon og beredskapsplan inkludert', 'Oppfyller krav i Arbeidsmiljøloven og Arbeidstilsynet'].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CircleCheckBig className="text-orange-500 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2" href="https://www.abcfallsikring.no/contact_us">
                Kontakt oss om redningssett <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image alt="Redningsservice" src="/images/Rettung-Service_480x360px_1920x1920.jpg" fill className="object-cover" />
              </div>
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image alt="Redningstrening" src="/images/Rettung-Training_480x360px_1920x1920.jpg" fill className="object-cover" />
              </div>
              <div className="col-span-2 bg-zinc-700/50 rounded-xl p-5 border border-zinc-600">
                <LifeBuoy className="text-orange-500 mb-2" size={32} aria-hidden="true" />
                <p className="text-zinc-300 text-sm leading-relaxed">Tid er kritisk ved henging i sele – kuttoff-tid for sirkulasjon kan være under 15 minutter. Umiddelbar redning kan bokstavelig talt redde liv.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTSAFE */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden col-span-2">
                  <Image alt="Actsafe søk og redning" src="/images/actsafe-sar-backpack-search-and-rescue.png" fill className="object-cover" />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <Image alt="Actsafe taumoped i bruk" src="/images/Smyle_Sky_STROM15_960x720px.jpg" fill className="object-cover" />
                </div>
                <div className="bg-zinc-100 rounded-xl p-4 border border-zinc-200 flex flex-col justify-center">
                  <Zap className="text-orange-500 mb-2" size={28} aria-hidden="true" />
                  <p className="text-zinc-700 text-sm font-medium">ACX · ICX · PMX · PME · ACC</p>
                  <p className="text-zinc-500 text-xs mt-1">Hele ActSafe-serien på lager</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">ACTSAFE TAUMOPEDER</div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Motorisert forflytning i høyden – trygt og effektivt</h2>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                ActSafe taumopeder revolusjonerer arbeid i høyden ved å gjøre vertikal forflytning raskere, sikrere og langt mindre belastende for kroppen. ABC Fallsikring er autorisert forhandler og tilbyr salg, opplæring og sertifisering.
              </p>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Vi fører ACX, ICX, PMX, PME og ACC – med godt lager og rask levering. Våre instruktører er godkjent for opplæring i alle ActSafe-modeller.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2" href="https://www.abcfallsikring.no/contact_us">
                  Book ActSafe kurs <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a className="border border-zinc-300 hover:border-zinc-500 text-zinc-700 font-semibold px-6 py-3 rounded-md transition-colors" href="https://www.abcfallsikring.no/" target="_blank" rel="noopener noreferrer">
                  Se nettbutikk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUKTER */}
      <section className="bg-zinc-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">NETTBUTIKK</div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">Profesjonelt utstyr fra Skylotec</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Vi fører et bredt utvalg av Skylotec-produkter. Besøk vår nettbutikk på abcfallsikring.no for priser og tilgjengelighet.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              { href: 'https://www.abcfallsikring.no', img: '/images/H-400-TG_s_01_PNG_HD_1460x1976.png', cat: 'Fullkroppssele', name: 'Skylotec Ignite Ion Sele' },
              { href: 'https://www.abcfallsikring.no', img: '/images/H-576-200-RIGHT_s_01_HD_1460x1976.jpg', cat: 'Arbeidssele', name: 'Skylotec Kombisele' },
              { href: 'https://www.abcfallsikring.no', img: '/images/a-050_s_01_730x988.png', cat: 'Falldempende stropp', name: 'Skylotec Falldemper' },
              { href: 'https://www.abcfallsikring.no', img: '/images/acs-0929_s_02_730x988.png', cat: 'Koblingselement', name: 'Skylotec Karabinkrok' },
              { href: 'https://www.abcfallsikring.no', img: '/images/Typ-52_AP-063_GPS_D-Bolt-Neutral-for-Customer_1460x1976.png', cat: 'Forankringssystem', name: 'Skylotec Ankerpunkt' },
              { href: 'https://www.abcfallsikring.no', img: '/images/Tether_Tether_Leash_web_1.webp', cat: 'Verktøysikring', name: 'Skylotec Tether' },
            ].map(p => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="relative h-40 bg-zinc-50">
                  <Image alt={p.name} src={p.img} fill className="object-contain p-3" />
                </div>
                <div className="p-3">
                  <div className="text-xs text-orange-500 font-medium mb-0.5">{p.cat}</div>
                  <div className="text-xs font-semibold text-zinc-800 leading-tight">{p.name}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a href="https://www.abcfallsikring.no" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors">
              Se hele nettbutikken <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* TJENESTEOVERSIKT */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">Komplette løsninger for arbeid i høyden</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Fra risikovurdering til utførelse – vi tilbyr alle tjenester du trenger.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/tjenester/fallsikring', icon: <Shield className="mb-3 text-orange-500" size={28} />, title: 'Fallsikring', desc: 'Komplette fallsikringssystemer og utstyr for trygg arbeid i høyden.', orange: false },
              { href: '/tjenester/arbeid-i-hoyden', icon: <HardHat className="mb-3 text-orange-500" size={28} />, title: 'Arbeid i høyden', desc: 'Profesjonelle tjenester for alle typer arbeid i høyden.', orange: false },
              { href: '/tjenester/redningssett', icon: <LifeBuoy className="mb-3 text-white" size={28} />, title: 'Redningssett & Umiddelbar redning', desc: 'Påbudt redningssett til byggeplass og arbeid i høyden.', orange: true },
              { href: '/tjenester/actsafe', icon: <Zap className="mb-3 text-white" size={28} />, title: 'ActSafe Taumopeder', desc: 'Motoriserte taumopeder for sikker og effektiv vertikal forflytning.', orange: true },
              { href: '/tjenester/kurs', icon: <Award className="mb-3 text-orange-500" size={28} />, title: 'Kurs og opplæring', desc: 'Sertifiserte kurs innen fallsikring, arbeid i høyden, redning og ActSafe.', orange: false },
              { href: '/tjenester/inspeksjon', icon: <CircleCheck className="mb-3 text-orange-500" size={28} />, title: 'Inspeksjon', desc: 'Grundig kontroll og sertifisering av fallsikringsutstyr.', orange: false },
              { href: '/tjenester/risikoanalyse', icon: <Clock className="mb-3 text-orange-500" size={28} />, title: 'Risikoanalyse', desc: 'HMS-rådgivning og risikovurdering for arbeid i høyden.', orange: false },
            ].map(t => (
              <Link key={t.href} href={t.href} className={`group p-6 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5 ${t.orange ? 'bg-orange-500 border-orange-400 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900 hover:border-orange-300'}`}>
                {t.icon}
                <h3 className={`font-semibold mb-2 ${t.orange ? 'text-white' : 'text-zinc-900'}`}>{t.title}</h3>
                <p className={`text-sm leading-relaxed ${t.orange ? 'text-orange-100' : 'text-zinc-500'}`}>{t.desc}</p>
                <div className={`mt-4 text-xs font-semibold flex items-center gap-1 ${t.orange ? 'text-white' : 'text-orange-500'}`}>Les mer <ArrowRight size={12} aria-hidden="true" /></div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link className="border border-zinc-300 hover:border-orange-400 text-zinc-700 font-semibold px-8 py-3 rounded-md transition-colors" href="/tjenester">Se alle tjenester</Link>
          </div>
        </div>
      </section>

      {/* PARTNERE */}
      <section className="bg-zinc-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zinc-500 text-sm mb-6">Autorisert forhandler av</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="relative h-12 w-40">
              <Image alt="Skylotec" src="/images/Skylotec_Logo.svg.png" fill className="object-contain" />
            </div>
            <div className="text-2xl font-bold text-zinc-700 tracking-wide">PETZL</div>
            <div className="text-2xl font-bold text-zinc-700 tracking-wide">ACTSAFE</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-20 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Klar for å komme i gang?</h2>
          <p className="text-zinc-400 mb-8">Kontakt oss i dag for en uforpliktende samtale. Vi tilbyr gratis rådgivning om fallsikring, kurs og utstyr.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors" href="https://www.abcfallsikring.no/contact_us">Ta kontakt</a>
            <a href="tel:+4733740888" className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">Ring oss: +47 33 74 08 88</a>
          </div>
          <p className="text-zinc-500 text-sm mt-6">Rask responstid • Godkjente kurs NS 9610 • ActSafe sertifisert</p>
        </div>
      </section>
    </>
  )
}
