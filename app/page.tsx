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
ABC Fallsikring AS leverer trygge løsninger for arbeid i høyden. Fra risikovurdering og dokumentert opplæring til tilkomstteknikk, redningssett og ActSafe taumopeder.
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
<Image alt="ActSafe ACX taumoped i bruk" src="/images/Smyle_Sky_STROM15_960x720px.jpg" fill className="object-cover" />
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
<h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">ActSafe taumopeder – rask og trygg vertikal forflytning</h2>
<p className="text-zinc-600 mb-4 leading-relaxed">
ABC Fallsikring er autorisert forhandler og kurssted for ActSafe. Vi fører hele serien – ACX, ICX, PMX, PME og ACC – for klatring, oppstigning og redning i alle typer arbeid i høyden.
</p>
<p className="text-zinc-600 mb-6 leading-relaxed">
Vi har produktene på lager og tilbyr rask levering over hele Norge. Våre instruktører er godkjent for opplæring og sertifisering i alle ActSafe-modeller.
</p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2" href="https://www.abcfallsikring.no/contact_us">
Book ActSafe kurs <ArrowRight size={16} aria-hidden="true" />
</a>
<a className="border border-zinc-300 hover:border-zinc-500 text-zinc-700 font-semibold px-6 py-3 rounded-md transition-colors" href="https://www.abcfallsikring.no/categories/actsafe">
Se nettbutikk
</a>
</div>
</div>
</div>
</div>
</section>

{/* SKYLOTEC */}
<section className="bg-zinc-50 py-20 px-4">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-10">
<div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">NETTBUTIKK</div>
<h2 className="text-3xl font-bold text-zinc-900 mb-3">Profesjonelt utstyr fra Skylotec</h2>
<p className="text-zinc-500 max-w-xl mx-auto text-sm">Vi fører et bredt utvalg av Skylotec-produkter. Besøk vår nettbutikk på abcfallsikring.no for priser og tilgjengelighet.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
{[
{ name: 'Skylotec Ignite Ion Sele', cat: 'Fullkroppssele' },
{ name: 'Skylotec Kombisele', cat: 'Arbeidssele' },
{ name: 'Skylotec Falldemper', cat: 'Falldempende stropp' },
{ name: 'Skylotec Karabinkrok', cat: 'Koblingselement' },
{ name: 'Skylotec Ankerpunkt', cat: 'Forankringssystem' },
{ name: 'Skylotec Tether', cat: 'Verktøysikring' },
].map(p => (
<a key={p.name} href="https://www.abcfallsikring.no" className="bg-white rounded-xl p-4 border border-zinc-200 hover:border-orange-400 transition-colors group">
<div className="text-xs text-zinc-400 mb-1">{p.cat}</div>
<div className="font-medium text-zinc-800 text-sm group-hover:text-orange-600 transition-colors">{p.name}</div>
</a>
))}
</div>
<div className="text-center mt-8">
<Link className="border border-zinc-300 hover:border-orange-400 text-zinc-700 font-semibold px-8 py-3 rounded-md transition-colors" href="https://www.abcfallsikring.no">
Se hele nettbutikken
</Link>
</div>
</div>
</section>

{/* TJENESTER GRID */}
<section className="bg-white py-20 px-4">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-bold text-zinc-900 mb-3 text-center">Komplette løsninger for arbeid i høyden</h2>
<p className="text-zinc-500 text-center mb-10 max-w-xl mx-auto text-sm">Fra risikovurdering til utførelse – vi tilbyr alle tjenester du trenger.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{[
{ icon: Shield, title: 'Fallsikring', desc: 'Komplette fallsikringssystemer og utstyr for trygg arbeid i høyden.', href: '/tjenester/fallsikring' },
{ icon: HardHat, title: 'Arbeid i høyden', desc: 'Profesjonelle tjenester for alle typer arbeid i høyden.', href: '/tjenester/arbeid-i-hoyden' },
{ icon: LifeBuoy, title: 'Redningssett & Umiddelbar redning', desc: 'Påbudt redningssett til byggeplass og arbeid i høyden.', href: '/tjenester/redningssett' },
{ icon: Zap, title: 'ActSafe Taumopeder', desc: 'Motoriserte taumopeder for sikker og effektiv vertikal forflytning.', href: '/tjenester/actsafe' },
{ icon: Award, title: 'Kurs og opplæring', desc: 'Dokumentert opplæring innen fallsikring, arbeid i høyden og ActSafe.', href: '/tjenester/kurs' },
{ icon: CircleCheck, title: 'Inspeksjon', desc: 'Grundig kontroll og sertifisering av fallsikringsutstyr.', href: '/tjenester/inspeksjon' },
{ icon: HardHat, title: 'Risikoanalyse', desc: 'HMS-rådgivning og risikovurdering for arbeid i høyden.', href: '/tjenester/risikoanalyse' },
].map(({ icon: Icon, title, desc, href }) => (
<Link key={title} href={href} className="bg-zinc-50 rounded-xl p-5 border border-zinc-200 hover:border-orange-400 transition-colors group">
<Icon className="text-orange-500 mb-3" size={22} aria-hidden="true" />
<div className="font-semibold text-zinc-900 mb-1 text-sm group-hover:text-orange-600 transition-colors">{title}</div>
<div className="text-zinc-500 text-xs leading-relaxed">{desc}</div>
<div className="mt-3 text-orange-500 text-xs font-medium flex items-center gap-1">Les mer <ArrowRight size={12} /></div>
</Link>
))}
</div>
<div className="text-center mt-8">
<Link className="border border-zinc-300 hover:border-orange-400 text-zinc-700 font-semibold px-8 py-3 rounded-md transition-colors" href="/tjenester">
Se alle tjenester
</Link>
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
<a className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors" href="https://www.abcfallsikring.no/contact_us">
Ta kontakt
</a>
<a href="tel:+4733740888" className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
Ring oss: +47 33 74 08 88
</a>
</div>
<p className="text-zinc-500 text-sm mt-6">Rask responstid • Godkjente kurs NS 9610 • ActSafe sertifisert</p>
</div>
</section>
</>
)
}
