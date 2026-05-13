import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle, Smartphone, BarChart2, Bell, Search } from "lucide-react"

export const metadata = {
  title: "Slik fungerer periodisk kontroll med Onix Inspect | ABC Sikkerhet",
  description:
    "Onix Inspect gjør periodisk kontroll av fallsikringsutstyr raskere og mer nøyaktig. ABC Sikkerhet forklarer hvordan systemet fungerer i praksis.",
}

export default function OnixInspectPage() {
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
            INSPEKSJON · ONIX
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Slik fungerer periodisk kontroll med Onix Inspect
          </h1>
          <p className="text-zinc-400 text-lg">
            Onix Inspect digitaliserer hele inspeksjonsprosessen – fra sjekkliste til ferdig rapport. Her er en praktisk gjennomgang av hvordan ABC Sikkerhet bruker verktøyet.
          </p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500">
            <span>ABC Sikkerhet AS</span>
            <span>·</span>
            <span>5 min lesing</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        {/* Onix logo og produkt-boks */}
        <div className="bg-zinc-900 text-white rounded-2xl p-6 mb-10 flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-shrink-0">
            <Image
              src="https://onix.com/hubfs/raw_assets/public/Onix/images/logolight.svg"
              alt="Onix logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">Onix Inspect</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Onix Inspect er modulen i Onix ECMS som er laget spesielt for inspektører. Med forhåndslagde og tilpassbare sjekklister, offline-funksjonalitet og automatisk rapportgenerering er det det raskeste og mest nøyaktige verktøyet for periodisk kontroll av PVU og annet utstyr.
            </p>
          </div>
        </div>

        {/* Onix screenshot */}
        <div className="relative h-72 rounded-2xl overflow-hidden mb-10 border border-zinc-200">
          <Image
            src="https://onix.com/hubfs/onix_work_screen_small.jpg"
            alt="Onix Inspect i bruk"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Hva er periodisk kontroll?</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Ifølge norsk regelverk skal alt personlig fallsikringsutstyr (seler, stroppsamlere, blokker, karabinkroker og lignende) gjennomgå en grundig periodisk kontroll minimum én gang i året. Kontrollen skal utføres av en kompetent person med kjennskap til utstyret og regelverket.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-8">
          Resultatet av kontrollen skal dokumenteres skriftlig og oppbevares. Hos ABC Sikkerhet gjøres dette digitalt via Onix Inspect – noe som gjør prosessen raskere, mer nøyaktig og enklere å dokumentere overfor Arbeidstilsynet.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Steg for steg: Slik foregår en inspeksjon</h2>

        <div className="space-y-4 mb-10">
          {[
            {
              step: "1",
              title: "Skann QR-koden på utstyret",
              desc: "Hvert utstyr er merket med en unik QR-kode eller NFC-brikke. Inspektøren scanner koden med mobilen og får opp all historikk og informasjon om utstyret umiddelbart.",
            },
            {
              step: "2",
              title: "Gå gjennom digital sjekkliste",
              desc: "Onix Inspect åpner automatisk riktig sjekkliste basert på utstyrstype. Sjekklisten er tilpasset de aktuelle standardene (EN 365, EN 363 etc.) og sikrer at ingenting glemmes.",
            },
            {
              step: "3",
              title: "Dokumenter funn med bilder",
              desc: "Eventuelle skader eller avvik dokumenteres direkte i appen med bilder. Inspektøren kan markere om utstyret godkjennes, trenger oppfølging eller skal kasseres.",
            },
            {
              step: "4",
              title: "Rapporten genereres automatisk",
              desc: "Når sjekklisten er fullført genereres en digital inspeksjonsrapport automatisk. Den sendes direkte til kunden via Onix og er tilgjengelig i systemet for fremtidige revisjoner.",
            },
            {
              step: "5",
              title: "Varsel om neste kontroll settes",
              desc: "Onix setter automatisk neste kontrollfriste basert på inspeksjonsdato og krav til utstyrstype. Kunden mottar varsel i god tid før fristen løper ut.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-zinc-50 rounded-xl p-5 border border-zinc-100">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Funksjoner i Onix Inspect</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { icon: Smartphone, title: "Fungerer offline", desc: "Inspeksjoner kan gjennomføres uten internettforbindelse og synkroniseres automatisk når man er tilkoblet igjen." },
            { icon: BarChart2, title: "Digital rapportgenerering", desc: "Ferdige, profesjonelle inspeksjonsrapporter genereres automatisk og kan deles med kunden umiddelbart." },
            { icon: Bell, title: "Automatiske varsler", desc: "Kunden varsles automatisk når neste periodiske kontroll nærmer seg – ingen manuell oppfølging nødvendig." },
            { icon: Search, title: "Sporbarhet per utstyr", desc: "Full historikk på hvert enkelt utstyr: alle inspeksjoner, funn, bilder og hvem som har utført kontrollen." },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-zinc-200 rounded-xl p-5">
              <item.icon size={20} className="text-orange-500 mb-3" />
              <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Utstyr ABC Sikkerhet kontrollerer via Onix</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          ABC Sikkerhet utfører godkjent periodisk kontroll av alle typer personlig fallsikringsutstyr, og all dokumentasjon håndteres i Onix:
        </p>
        <ul className="space-y-2 mb-10">
          {[
            "Fallsikringsseler (Skylotec, Petzl og andre merker)",
            "Selvinntrekkende fallsikringsblokker",
            "Energiabsorberende stroppsamlere og liner",
            "Karabinkroker og koblingselementer",
            "Ankerpunkter og festemidler",
            "Komplette redningssett",
            "Actsafe taumopeder og tilbehør",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm">
              <CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-zinc-900 text-white rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start mb-10">
          <div className="flex-shrink-0">
            <Image
              src="https://onix.com/hubfs/raw_assets/public/Onix/images/logolight.svg"
              alt="Onix logo"
              width={100}
              height={34}
              className="h-8 w-auto"
            />
          </div>
          <div>
            <h3 className="font-bold mb-2">Onix er brukt av ledende norske selskaper</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Veidekke, Statnett og NCC er blant selskapene som bruker Onix ECMS for å holde kontroll på utstyrsdokumentasjon. ABC Sikkerhet hjelper deg med å komme i gang.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Bestill periodisk kontroll med Onix-dokumentasjon</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">
            ABC Sikkerhet tilbyr godkjent periodisk kontroll av alt fallsikringsutstyr, med digital dokumentasjon levert via Onix. Kontakt oss for å avtale inspeksjon.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm"
            >
              Bestill kontroll <ArrowRight size={14} />
            </Link>
            <Link
              href="/tjenester/inspeksjon"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-sm"
            >
              Om inspeksjonstjenesten
            </Link>
          </div>
        </div>

      </article>
    </main>
  )
}

