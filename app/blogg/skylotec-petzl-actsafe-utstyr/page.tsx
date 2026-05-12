import Link from "next/link"
import { Zap, Shield, Star, CheckCircle, ArrowLeft, ArrowRight, Package } from "lucide-react"

export const metadata = {
  title: "Skylotec, Petzl og Actsafe – Profesjonelt utstyr for arbeid i høyden | ABC Sikkerhet",
  description:
    "ABC Sikkerhet er autorisert forhandler av Skylotec, Petzl og Actsafe. Stort lager, rask levering og faglig rådgivning. Alt du trenger til arbeid i høyden.",
}

export default function ProduktartikkelPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Tilbake til blogg
          </Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            UTSTYR · PRODUKTER
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Skylotec, Petzl og Actsafe – det beste utstyret for arbeid i høyden
          </h1>
          <p className="text-zinc-400 text-lg">
            ABC Sikkerhet har et av Norges beste lagre av profesjonelt fallsikringsutstyr. Her er et grundig overblikk over de tre merkene vi er stoltest av å forhandle.
          </p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500">
            <span>ABC Sikkerhet AS</span>
            <span>·</span>
            <span>9 min lesing</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16">

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-12 flex gap-4">
          <Package size={24} className="text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-zinc-900 mb-1">Stort lager – rask levering</h3>
            <p className="text-zinc-700 text-sm leading-relaxed">
              ABC Sikkerhet har et godt utvalg av varer på lager og kan skaffe det meste av utstyr fra Skylotec, Petzl og Actsafe. Vi gir faglig rådgivning slik at du får riktig utstyr til ditt behov – ikke bare det som tilfeldigvis er i hyllen.
            </p>
          </div>
        </div>

        {/* SKYLOTEC */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center">
              <Shield size={20} className="text-orange-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">Skylotec</h2>
              <p className="text-zinc-500 text-sm">Grunnlagt 1947 · Neuwied, Tyskland · «Made in Germany»</p>
            </div>
          </div>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Skylotec er en familieeid bedrift som siden 1947 har produsert personlig fallsikringsutstyr og redningssystemer. Det startet med redningskurver for gruvedrift i Tyskland – og i dag leverer de alt fra enkle falldempere til avanserte motoriserte redningssystemer til industri, bygg og vind-energi verden over.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Det som skiller Skylotec fra mange konkurrenter er at nær all produksjon skjer i Europa – i egne fabrikker i Tyskland, Ungarn, Slovenien og Sverige. Det gir streng kvalitetskontroll og rask tilgang til reservedeler og dokumentasjon.
          </p>

          <h3 className="text-lg font-bold text-zinc-900 mb-4">Utvalgte Skylotec-produkter hos ABC Sikkerhet</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                name: "Skylotec Ignite Ion G-1130",
                type: "Fullkroppssele",
                desc: "EN 361-godkjent kombisele med forankringspunkt på rygg og bryst. Lett og komfortabel for lange arbeidsdager. Egnet for både arbeid i høyden og redning.",
              },
              {
                name: "Skylotec Triboc Trefot AP-004",
                type: "Ankerpunkt for sjakter og luker",
                desc: "Teleskopisk trefot i aluminium med stålbeslag. Benstørrelse 1,57–2,52 m. Sentralt øyebolt for heising, med tre ekstra festepunkter. Rask å rigge opp og ned.",
              },
              {
                name: "Skylotec Nødheis HSG-004",
                type: "Redningsheisanordning",
                desc: "Kompakt heisanordning med 15 m galvanisert stålwire (Ø5 mm), vekt 16 kg. Faller-indikator som synliggjør om enheten har vært belastet. Monteres direkte på Triboc-trefot.",
              },
              {
                name: "Skylotec ACS Spil",
                type: "Motorisert spil",
                desc: "Elektrisk spil for materialer og personheising, kapasitet opp til 200 kg. IP65-klassifisert mot vann og støv. Kan fjernstyres opptil 150 m med variabel hastighet 0–24 m/min.",
              },
              {
                name: "Skylotec Peanut Miniblokk",
                type: "Kompakt fallsikringsblokk",
                desc: "EN 360-godkjent selvinntrekkende fallsikringsblokk, ideell der man trenger kompakt utstyr uten å gå på kompromiss med sikkerhet.",
              },
              {
                name: "Skylotec Relyon Redningssett",
                type: "Komplett redningssett",
                desc: "Komplett pakke med Ignite Ion-sele, Peanut miniblokk og to karabinkroker med autolås. Klar til bruk, inkl. transportpose. Oppfyller kravene til redningssett på byggeplass.",
              },
            ].map((p) => (
              <div key={p.name} className="border border-zinc-200 rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-semibold text-zinc-900">{p.name}</div>
                    <div className="text-xs text-orange-500 font-medium mt-0.5">{p.type}</div>
                  </div>
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PETZL */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center">
              <Star size={20} className="text-orange-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">Petzl</h2>
              <p className="text-zinc-500 text-sm">Grunnlagt 1970 · Crolles, Frankrike · Familiebedrift</p>
            </div>
          </div>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Petzl startet med grotteklatring på 1930-tallet og har siden vokst til å bli et av verdens mest anerkjente merker innen fallsikring, tilkomstteknikk (rope access) og hodebelysning. De er fortsatt en familiebedrift og er kjent for innovasjon – produkter som I'D-descenderen og ASAP-løpebremsen har satt standarden for hele bransjen.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-6">
            ABC Sikkerhet fører et bredt utvalg av Petzl-produkter og kan bistå med rådgivning slik at du får riktig utstyr til ditt spesifikke behov, enten det er enkel fallsikring, rope access eller avansert redning.
          </p>

          <h3 className="text-lg font-bold text-zinc-900 mb-4">Utvalgte Petzl-produkter hos ABC Sikkerhet</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                name: "Petzl AVAO BOD FAST",
                type: "Kombisele for arbeid i tau",
                desc: "Komfortabel og fleksibel sele for fallsikring, posisjonering og fritthengende tauarbeid. Hurtigspenner gjør av- og påkledning rask. Bred hoftebeltet gir god støtte og reduserer belastning over tid.",
              },
              {
                name: "Petzl VOLT",
                type: "Fallsikringssele",
                desc: "Easyfit-design med vest som holder selen på plass. Fast-spenner på bryst og lår – ingen behov for å løfte bena ved påkledning. Tilkoblingspunkt på magen for vertikale skinnesystemer.",
              },
              {
                name: "Petzl I'D",
                type: "Nedfiringsbrems",
                desc: "Manuell nedfiringsbrems med panikkfunksjon – slipper du håndtaket låser enheten automatisk. Brukes til kontrollert senking av skadet person ved redning. Fungerer med tau 10,5–11 mm.",
              },
              {
                name: "Petzl ASAP",
                type: "Løpebrems / fallarrestator",
                desc: "Automatisk løpebrems som følger brukerens bevegelser langs tauet uten manuell håndtering. Låser ved plutselig rykk (fall). Kan kombineres med ASAP LOCK for manuell låsefunksjon.",
              },
              {
                name: "Petzl VERTEX",
                type: "Vernehjelm",
                desc: "Modulær hjelm med 6-punktsoppheng, justerbar 53–63 cm. Godkjent for 1000V (EN 50365). Modulært system for visir, hørselsvern og Petzl-hodelykter. Alle deler kan byttes ut enkeltvis.",
              },
              {
                name: "Petzl Expert 40",
                type: "Transportbag",
                desc: "40-liters sekk i slitesterkt TPU-materiale med sveiset bunn. Toppåpning og sidepanel. Seks utstyrsløkker. Maks 50 kg ved oppheng. Designet for profesjonelle innen rope access og redning.",
              },
            ].map((p) => (
              <div key={p.name} className="border border-zinc-200 rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-semibold text-zinc-900">{p.name}</div>
                    <div className="text-xs text-orange-500 font-medium mt-0.5">{p.type}</div>
                  </div>
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ACTSAFE */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center">
              <Zap size={20} className="text-orange-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">Actsafe</h2>
              <p className="text-zinc-500 text-sm">Sverige · Motoriserte taumopeder · Verdensledende</p>
            </div>
          </div>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Actsafe er et svensk selskap som har revolusjonert måten industrielle klatrere og vindteknikere forflytter seg vertikalt. Deres motoriserte taumopeder – AS3 og AS6 – gjør opp- og nedstigning raskere, sikrere og langt mindre fysisk krevende enn tradisjonell manuell klatring.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Actsafe er godkjent som personlig verneutstyr (PVU) og brukes av tårnkranoperatører, vindturbinteknikere, industrielle klatrere, fjellsikringsarbeidere og redningsmannskap over hele verden. ABC Sikkerhet er forhandler og tilbyr opplæring og sertifisering.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                name: "Actsafe ACX",
                type: "Elektrisk taumoped – flaggskipet",
                cap: "250 kg",
                speed: "18 m/min",
                drive: "Batteri",
                desc: "ACX er den mest brukte industrielle taumopeden fra Actsafe. Elektrisk drevet, fjernstyrt og kraftig nok til redning av skadet person. Leveres med 2 batterier, fjernkontroll, ladere og solid trillekoffert. Brukes av vindturbinteknikere, industrielle klatrere og redningsmannskap.",
                uses: ["Vindturbiner", "Master og mast", "Offshore", "Redning", "Fasadearbeid"],
              },
              {
                name: "Actsafe ICX",
                type: "Kompakt elektrisk taumoped",
                cap: "130 kg",
                speed: "16 m/min",
                drive: "Husqvarna 36V batteri",
                desc: "ICX er den kompakte og lette varianten, spesielt rettet mot arborister, vinduspussere, fasadevedlikehold og inspeksjonsarbeid. Bruker standard Husqvarna BLi-X 36V batteri – lett å skaffe reservebatterier. Styres med intuitivt tommelhjul. Ca. 230 m oppstigning per lading.",
                uses: ["Arboristarbeid", "Vindusrengjøring", "Fasadeinspeksjon", "Master"],
              },
              {
                name: "Actsafe PMX",
                type: "Bensindrevet taumoped – maksimal kraft",
                cap: "250 kg",
                speed: "17 m/min",
                drive: "Bensin",
                desc: "PMX er bensindrevet og gir ubegrenset rekkevidde – ideell for svært dype sjakter, høye master eller steder uten strømtilgang. Rekkevidde 700–750 m per tank. Robust design tåler støv, skitt og røff behandling. Lukkede taulåssystem holder tauet på plass selv i skitne forhold.",
                uses: ["Dype sjakter", "Lange oppdrag", "Ingen strøm tilgjengelig", "Offshore"],
              },
              {
                name: "Actsafe PME",
                type: "Bensindrevet – lett og portabel",
                cap: "200 kg",
                speed: "15 m/min",
                drive: "Bensin",
                desc: "PME er den lettere bensindrevne modellen, velegnet for telekom, linjemontører og vindkraftarbeidere som trenger lang rekkevidde uten å bære tungt utstyr. Brukes ofte i kombinasjon med ACC-klatrehjelp.",
                uses: ["Telekom", "Linjemontasje", "Vindkraft", "Inspeksjon"],
              },
              {
                name: "Actsafe ACC",
                type: "Klatrehjelp / assistert klatring",
                cap: "–",
                speed: "–",
                drive: "Manuell assistanse",
                desc: "ACC er ikke en selvstendig taumoped, men et system for assistert klatring som brukes sammen med PME. Gjør manuell klatring i tau langt mindre anstrengende og er godkjent som personlig verneutstyr (PVU). Brukes mye i telekombransjen.",
                uses: ["Telekom", "Linjemontasje", "Kombineres med PME"],
              },
            ].map((m) => (
              <div key={m.name} className="bg-zinc-900 text-white rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{m.name}</h3>
                    <div className="text-orange-400 text-xs font-medium mt-0.5">{m.type}</div>
                  </div>
                  <Zap size={24} className="text-orange-500 flex-shrink-0" />
                </div>
                {m.cap !== "–" && (
                  <div className="grid grid-cols-3 gap-3 my-4">
                    <div className="text-center bg-zinc-800 rounded-lg p-2">
                      <div className="text-lg font-bold text-orange-500">{m.cap}</div>
                      <div className="text-xs text-zinc-400">Kapasitet</div>
                    </div>
                    <div className="text-center bg-zinc-800 rounded-lg p-2">
                      <div className="text-lg font-bold text-orange-500">{m.speed}</div>
                      <div className="text-xs text-zinc-400">Hastighet</div>
                    </div>
                    <div className="text-center bg-zinc-800 rounded-lg p-2">
                      <div className="text-sm font-bold text-orange-500">{m.drive}</div>
                      <div className="text-xs text-zinc-400">Drivkraft</div>
                    </div>
                  </div>
                )}
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">{m.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {m.uses.map((u) => (
                    <span key={u} className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded">{u}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-zinc-900 mb-3">Actsafe opplæring hos ABC Sikkerhet</h3>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Actsafe krever at brukere har gjennomgått godkjent opplæring. ABC Sikkerhet tilbyr sertifisert operatørkurs som dekker:
          </p>
          <ul className="space-y-2 mb-6 text-zinc-600">
            {[
              "Daglig inspeksjon og klargjøring av taumopeden",
              "Korrekt innfesting i tau og sele",
              "Opp- og nedstigning – praktisk øvelse",
              "Nødprosedyre: manuell nedstigning ved strømbrudd",
              "Bruk av AS6 til redning av skadet person",
              "Vedlikehold og oppbevaring",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-1" />
                {p}
              </li>
            ))}
          </ul>
        </section>

        <div className="bg-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-3">Stor på lager – klar til levering</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">
            ABC Sikkerhet kan skaffe det meste fra Skylotec, Petzl og Actsafe og har godt med varer på lager. Kontakt oss for pris og tilgjengelighet – vi gir faglig rådgivning uten ekstra kostnad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm"
            >
              Spør om pris og lager <ArrowRight size={14} />
            </Link>
            <Link
              href="/tjenester/kurs"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-sm"
            >
              Se kurskalender
            </Link>
          </div>
        </div>

      </article>
    </main>
  )
}
