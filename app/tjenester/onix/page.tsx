Onix tjeneste · TSX
Copy

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle, FileText, Shield, Clock, Users, Bell, Smartphone, BarChart2 } from "lucide-react"
 
export const metadata = {
  title: "Onix ECMS – Digital dokumentasjon og utstyrskontroll | ABC Sikkerhet",
  description:
    "ABC Sikkerhet bruker Onix ECMS for digital styring av all dokumentasjon for fallsikringsutstyr. Periodisk kontroll, sertifikater og sporbarhet – alt digitalt.",
}
 
export default function OnixTjenestePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/tjenester"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Tilbake til tjenester
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                DOKUMENTASJON · DIGITALISERING
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Digital dokumentasjon med Onix ECMS
              </h1>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                ABC Sikkerhet bruker Onix – Norges ledende system for digital utstyrsdokumentasjon – for å levere, forvalte og dele all dokumentasjon for fallsikringsutstyr.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/kontakt"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  Kom i gang <ArrowRight size={16} />
                </Link>
                <a
                  href="https://onix.com/no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  Les mer om Onix <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4">
              <Image
                src="https://onix.com/hubfs/raw_assets/public/Onix/images/logodark.svg"
                alt="Onix ECMS"
                width={160}
                height={54}
                className="h-12 w-auto"
              />
              <p className="text-zinc-500 text-sm text-center">Equipment Compliance Management System</p>
              <div className="grid grid-cols-3 gap-3 w-full mt-2">
                {["Skylotec", "Petzl", "Actsafe"].map((brand) => (
                  <div key={brand} className="bg-zinc-50 rounded-lg p-2 text-center text-xs font-semibold text-zinc-600">
                    {brand}
                  </div>
                ))}
              </div>
              <p className="text-zinc-400 text-xs text-center">All dokumentasjon for utstyr fra disse merkene leveres via Onix</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Onix platform screenshot */}
      <section className="bg-zinc-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">Én plattform – full oversikt</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Onix samler all utstyrsdokumentasjon på ett sted, tilgjengelig for alle med riktig tilgang.</p>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
            <Image
              src="https://onix.com/hubfs/onix_work_screen_small.jpg"
              alt="Onix ECMS plattform"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
 
      {/* Hva er Onix */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Hva er Onix ECMS?</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Onix ECMS (Equipment Compliance Management System) er en uavhengig digital plattform som lar utstyrseiere, leverandører og inspektører samarbeide om dokumentasjon og etterlevelse av HMS-krav.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Onix brukes av norske industri- og byggeledere som Veidekke, Statnett og NCC. ABC Sikkerhet er leverandør og inspektør på plattformen, og leverer all dokumentasjon for Skylotec, Petzl og Actsafe-utstyr direkte til kundenes Onix-konto.
              </p>
              <ul className="space-y-3">
                {[
                  "Godkjent av Arbeidstilsynet for dokumentasjonskrav",
                  "Brukt av over 1000 selskaper i Norge og Europa",
                  "Sikret med Microsoft Azure Cloud",
                  "Fungerer på mobil, nettbrett og PC",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-zinc-600 text-sm">
                    <CheckCircle size={15} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {[
                { icon: FileText, title: "Administrer dokumentasjon", desc: "Digitaliser og administrer alt utstyr og dokumentasjon på ett sted." },
                { icon: Shield, title: "Spor utstyr", desc: "Hold kontroll på hvem som bruker utstyret, hvor det er og når det skal til kontroll." },
                { icon: Users, title: "Del informasjon", desc: "Gi alle tilgang til kritisk informasjon og dokumentasjon – alltid oppdatert." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-zinc-50 rounded-xl p-5 border border-zinc-100">
                  <item.icon size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* Slik bruker ABC Sikkerhet Onix */}
      <section className="bg-zinc-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Slik leverer ABC Sikkerhet dokumentasjon via Onix</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Fra inspeksjon til ferdig digital rapport – alt skjer automatisk i Onix.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, step: "1", title: "Skann utstyret", desc: "QR-kode eller NFC-brikke på hvert utstyr kobles til digital historikk i Onix." },
              { icon: FileText, step: "2", title: "Digital sjekkliste", desc: "Inspektøren fyller ut tilpasset sjekkliste basert på utstyrstype og gjeldende standard (EN 363, EN 365 etc.)." },
              { icon: BarChart2, step: "3", title: "Automatisk rapport", desc: "Inspeksjonsrapporten genereres og sendes direkte til kundens Onix-konto – klar til fremleggelse." },
              { icon: Bell, step: "4", title: "Varsel om neste kontroll", desc: "Onix setter automatisk neste kontrollfriste og varsler kunden i god tid." },
              { icon: Shield, step: "5", title: "Full sporbarhet", desc: "Komplett historikk på hvert utstyr: inspeksjoner, funn, bilder og hvem som utførte kontrollen." },
              { icon: Users, step: "6", title: "Tilgang for alle parter", desc: "Kunden, HMS-ansvarlig og Arbeidstilsynet kan alle få tilgang til dokumentasjonen digitalt." },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <item.icon size={18} className="text-orange-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Regelverk */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Krav fra Arbeidstilsynet</h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Forskrift om utførelse av arbeid stiller strenge krav til dokumentasjon av personlig verneutstyr (PVU) som brukes til arbeid i høyden. Med Onix oppfylles alle kravene automatisk.
              </p>
              <ul className="space-y-3">
                {[
                  "Periodisk kontroll hvert 12. måned av kompetent person",
                  "Skriftlig dokumentasjon på alle inspeksjoner",
                  "Sporbar historikk per enkelt utstyr",
                  "Tilgjengelig bruksanvisning på norsk",
                  "Kassasjonsdokumentasjon ved utrangering",
                  "Beredskapsplan og redningsplan for arbeid i høyden",
                ].map((krav) => (
                  <li key={krav} className="flex items-start gap-2 text-zinc-600 text-sm">
                    <CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    {krav}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://onix.com/hubfs/raw_assets/public/Onix/images/logodark.svg"
                  alt="Onix"
                  width={80}
                  height={27}
                  className="h-7 w-auto"
                />
                <span className="text-zinc-400 text-sm">+</span>
                <span className="font-bold text-zinc-900">ABC Sikkerhet</span>
              </div>
              <h3 className="font-bold text-zinc-900 mb-3">Alt oppfylles automatisk</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Når ABC Sikkerhet utfører inspeksjonen og leverer dokumentasjon via Onix, oppfylles samtlige krav fra Arbeidstilsynet automatisk. Du kan fremlegge dokumentasjonen digitalt ved kontroll.
              </p>
              <div className="bg-white rounded-xl p-4 border border-orange-100">
                <p className="text-zinc-500 text-xs">
                  <strong className="text-zinc-700">Tips:</strong> Onix sender automatisk varsler når neste periodiske kontroll nærmer seg – slik at du aldri risikerer å jobbe med utstyr med utgåtte sertifikater.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Utstyr vi dokumenterer */}
      <section className="bg-zinc-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">Utstyr vi dokumenterer via Onix</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "Fallsikringsseler", "Selvinntrekkende blokker", "Energiabsorberende liner",
              "Karabinkroker", "Ankerpunkter", "Komplette redningssett",
              "Actsafe taumopeder", "Vernehjelmer", "Redningsheiser",
              "Trefot / sjaktstativer", "Klatretau og liner", "Koblingsstroppsamlere",
            ].map((item) => (
              <div key={item} className="bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-700 flex items-center gap-2">
                <CheckCircle size={13} className="text-orange-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Blogglenker */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Les mer om Onix og dokumentasjon</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              href="/blogg/digital-dokumentasjon-onix-ecms"
              className="group bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all"
            >
              <div className="text-xs text-orange-500 font-semibold mb-2">BLOGG</div>
              <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors">
                Digital dokumentasjon av fallsikringsutstyr med Onix ECMS
              </h3>
              <p className="text-zinc-500 text-sm">Slik hjelper ABC Sikkerhet sine kunder med å ha full kontroll på dokumentasjon og sertifikater.</p>
              <div className="mt-4 text-orange-500 text-sm font-medium flex items-center gap-1">Les artikkel <ArrowRight size={12} /></div>
            </Link>
            <Link
              href="/blogg/periodisk-kontroll-onix-inspect"
              className="group bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all"
            >
              <div className="text-xs text-orange-500 font-semibold mb-2">BLOGG</div>
              <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors">
                Slik fungerer periodisk kontroll med Onix Inspect
              </h3>
              <p className="text-zinc-500 text-sm">Steg for steg: Fra QR-skanning til ferdig digital inspeksjonsrapport levert i Onix.</p>
              <div className="mt-4 text-orange-500 text-sm font-medium flex items-center gap-1">Les artikkel <ArrowRight size={12} /></div>
            </Link>
          </div>
        </div>
      </section>
 
      {/* CTA */}
      <section className="bg-orange-500 py-20 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="https://onix.com/hubfs/raw_assets/public/Onix/images/logolight.svg"
              alt="Onix"
              width={100}
              height={34}
              className="h-8 w-auto opacity-90"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4">Klar for digital dokumentasjon?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Kontakt ABC Sikkerhet for å komme i gang med Onix. Vi setter opp dokumentasjon for din utstyrspark og sørger for at du alltid er à jour med kravene fra Arbeidstilsynet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white text-orange-600 font-semibold px-8 py-3.5 rounded-md hover:bg-orange-50 transition-colors"
            >
              Kontakt oss
            </Link>
            <a
              href="tel:+4733740888"
              className="border border-white/50 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors"
            >
              Ring +47 33 74 08 88
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
 
