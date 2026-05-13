import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle, FileText, Shield, Clock, Users } from "lucide-react"

export const metadata = {
  title: "Digital dokumentasjon av fallsikringsutstyr med Onix ECMS | ABC Sikkerhet",
  description:
    "ABC Sikkerhet bruker Onix ECMS for digital styring av all utstyrsdokumentasjon. Slik hjelper vi våre kunder med å oppfylle kravene fra Arbeidstilsynet.",
}

export default function OnixDokumentasjonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blogg"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Tilbake til blogg
          </Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            DOKUMENTASJON · DIGITALISERING
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Digital dokumentasjon av fallsikringsutstyr med Onix ECMS
          </h1>
          <p className="text-zinc-400 text-lg">
            Slik hjelper ABC Sikkerhet sine kunder med å ha full kontroll på dokumentasjon, inspeksjoner og sertifikater – digitalt og tilgjengelig overalt.
          </p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500">
            <span>ABC Sikkerhet AS</span>
            <span>·</span>
            <span>6 min lesing</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        {/* Onix logo og intro-boks */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-shrink-0">
            <Image
              src="https://onix.com/hubfs/raw_assets/public/Onix/images/logodark.svg"
              alt="Onix logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div>
            <h3 className="font-bold text-zinc-900 mb-1">Hva er Onix ECMS?</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Onix ECMS (Equipment Compliance Management System) er en digital plattform som lar utstyrseiere, leverandører og inspektører samarbeide om dokumentasjon og etterlevelse av regelverk. ABC Sikkerhet bruker Onix for å levere og forvalte all utstyrsdokumentasjon digitalt.
            </p>
            <a
              href="https://onix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 text-sm font-medium mt-2 transition-colors"
            >
              Les mer på onix.com <ArrowRight size={12} />
            </a>
          </div>
        </div>

        {/* Onix screenshot */}
        <div className="relative h-72 rounded-2xl overflow-hidden mb-10 border border-zinc-200">
          <Image
            src="https://onix.com/hubfs/onix_work_screen_small.jpg"
            alt="Onix ECMS plattform"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Hvorfor digital dokumentasjon er kritisk</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Arbeidsmiljøloven og Forskrift om utførelse av arbeid stiller strenge krav til dokumentasjon av fallsikringsutstyr. Alt personlig verneutstyr (PVU) skal ha oppdaterte sertifikater, periodiske kontrollrapporter og sporbar historikk. Mangler i dokumentasjonen kan føre til bøter fra Arbeidstilsynet – og i verste fall ulykker.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-8">
          Tradisjonelt har denne dokumentasjonen ligget i permer og på lokale servere – vanskelig tilgjengelig og lett å miste oversikten over. Med Onix ECMS er alt samlet digitalt, søkbart og tilgjengelig for alle med riktig tilgang.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Slik bruker ABC Sikkerhet Onix</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: FileText,
              title: "Digital utstyrsdokumentasjon",
              desc: "Alle sertifikater, bruksanvisninger og kontrollrapporter for Skylotec og Petzl-utstyr leveres digitalt via Onix.",
            },
            {
              icon: Clock,
              title: "Automatiske varsler",
              desc: "Onix varsler automatisk når periodisk kontroll nærmer seg – aldri mer utgåtte sertifikater.",
            },
            {
              icon: Shield,
              title: "Sporbarhet",
              desc: "Full historikk på hvert enkelt utstyr: hvem som har brukt det, hvilke inspeksjoner som er gjort og eventuelle hendelser.",
            },
            {
              icon: Users,
              title: "Deling med alle parter",
              desc: "Kunder, inspektører og leverandører får tilgang til relevant dokumentasjon – uten e-poster og permer.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-zinc-200 rounded-xl p-5">
              <item.icon size={20} className="text-orange-500 mb-3" />
              <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Hva krever Arbeidstilsynet?</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Ifølge Forskrift om utførelse av arbeid (§ 17-2) skal personlig verneutstyr som brukes til arbeid i høyden:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Inspekteres av bruker før hver bruk",
            "Gjennomgå periodisk kontroll av kompetent person hvert 12. måned",
            "Ha sporbar dokumentasjon på alle inspeksjoner",
            "Kasseres og dokumenteres ved feil eller alder",
            "Ha tilgjengelig bruksanvisning på norsk",
          ].map((krav) => (
            <li key={krav} className="flex items-start gap-2 text-zinc-600">
              <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
              {krav}
            </li>
          ))}
        </ul>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10">
          <h3 className="font-bold text-zinc-900 mb-2">Med Onix blir dette automatisk</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Alle kravene over håndteres automatisk i Onix ECMS. Systemet holder styr på frister, sender varsler og genererer rapporter som kan fremlegges for Arbeidstilsynet ved kontroll. ABC Sikkerhet kan hjelpe din bedrift med å komme i gang.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Fordeler for din bedrift</h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          Uansett om du har 5 eller 500 ansatte som jobber i høyden, vil digital dokumentasjon gjennom Onix gi deg:
        </p>
        <ul className="space-y-3 mb-10">
          {[
            "Alltid oppdatert dokumentasjon – tilgjengelig fra mobil, nettbrett og PC",
            "Redusert tidsbruk på administrasjon og papirhåndtering",
            "Trygghet for at ingen utstyr med utgåtte sertifikater er i bruk",
            "Enkel rapportering til Arbeidstilsynet og HMS-revisorer",
            "Bedre oversikt over totalkostnaden på utstyrsparken",
          ].map((fordel) => (
            <li key={fordel} className="flex items-start gap-2 text-zinc-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
              {fordel}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Vil du komme i gang med Onix?</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">
            ABC Sikkerhet hjelper deg med å sette opp digital dokumentasjon for din utstyrspark. Ta kontakt for en uforpliktende prat om hvordan Onix kan passe din bedrift.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm"
            >
              Kontakt oss <ArrowRight size={14} />
            </Link>
            <a
              href="https://onix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-sm"
            >
              Besøk onix.com <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </article>
    </main>
  )
}
