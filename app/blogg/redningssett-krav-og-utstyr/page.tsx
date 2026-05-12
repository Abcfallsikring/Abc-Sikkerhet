import Link from "next/link"
import { LifeBuoy, Clock, AlertTriangle, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Redningssett til byggeplass – krav, utstyr og umiddelbar redning | ABC Sikkerhet",
  description:
    "Alt du trenger å vite om lovpålagte redningssett ved arbeid i høyden. Krav om umiddelbar redning uten nødetater, riktig utstyr og beredskapsplan.",
}

export default function RedningssetPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogg" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Tilbake til blogg
          </Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            LOVPÅLAGT · REDNING
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Redningssett til byggeplass og arbeid i høyden – krav, utstyr og umiddelbar redning
          </h1>
          <p className="text-zinc-400 text-lg">
            Visste du at loven krever at du kan redde en kollega fra høyden på egenhånd – uten å vente på brannvesen eller ambulanse? Her er det du må vite.
          </p>
          <div className="flex items-center gap-3 mt-6 text-sm text-zinc-500">
            <span>ABC Sikkerhet AS</span>
            <span>·</span>
            <span>8 min lesing</span>
          </div>
        </div>
      </section>

      {/* Innhold */}
      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-zinc prose-lg max-w-none">

        {/* Advarsel-boks */}
        <div className="not-prose bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6 mb-10 flex gap-4">
          <AlertTriangle size={24} className="text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-zinc-900 mb-1">Tid er kritisk</h3>
            <p className="text-zinc-700 text-sm">
              En person som henger bevisstløs i fallsele kan oppleve ortostatisk sjokk (hengetrauma) i løpet av få minutter. Forskning viser at sirkulasjonssvikt kan inntreffe på under 15 minutter. Å vente på nødetatene kan koste liv – derfor er umiddelbar redning et lovkrav.
            </p>
          </div>
        </div>

        <h2>Hva sier loven om redningssett?</h2>
        <p>
          Arbeidsmiljøloven og Forskrift om utførelse av arbeid (kapittel 17) stiller klare krav til arbeid i høyden. Det er ikke tilstrekkelig å bare ha fallsikringsutstyr – arbeidsgiver er også ansvarlig for at det finnes en plan og utstyr for å hente ned en skadet eller bevisstløs person raskt og trygt.
        </p>
        <p>
          Arbeidstilsynet er tydelig: redning ved arbeid i høyden skal kunne gjennomføres av eget personell, uten å være avhengig av brannvesen, ambulanse eller andre nødetater. Dette kalles umiddelbar redning eller selvberging, og er et grunnkrav ved all bruk av personlig fallsikringsutstyr (PVU).
        </p>

        <h2>Hva er et godkjent redningssett?</h2>
        <p>
          Et komplett redningssett for arbeid i høyden skal som minimum inneholde:
        </p>

        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          {[
            { title: "Redningssele / evakueringssele", desc: "EN 1497/1498-godkjent sele som raskt kan tres på en bevisstløs person." },
            { title: "Heise- og senkesystem", desc: "Mekanisk heisanordning som tåler minst 100 kg og muliggjør kontrollert nedsenking." },
            { title: "Ankerpunkt / trefot", desc: "Godkjent ankerpunkt som tåler redningslast og er lett å rigge opp raskt." },
            { title: "Tau og forbindelsesmidler", desc: "Statisk tau av tilstrekkelig lengde med godkjente karabinkroker og skjøter." },
            { title: "Skjærekniv", desc: "For å kutte tau eller stroppfeste raskt ved behov." },
            { title: "Beredskapsplan og sjekkliste", desc: "Skriftlig plan som alle på arbeidsplassen kjenner og har øvd på." },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-200">
              <CheckCircle size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-zinc-900 text-sm">{item.title}</div>
                <div className="text-zinc-500 text-sm mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2>Hva er umiddelbar redning?</h2>
        <p>
          Umiddelbar redning betyr at arbeidsplassens eget personell er i stand til å hente ned en person fra høyden raskt – typisk innen 3–6 minutter etter en hendelse. Dette forutsetter:
        </p>
        <ul>
          <li>Utstyret er lett tilgjengelig og klart til bruk – ikke pakket ned i en container</li>
          <li>Minst én person på arbeidsplassen har øvd på redning og kjenner prosedyren</li>
          <li>Det foreligger en skriftlig redningsplan tilpasset det aktuelle arbeidsstedet</li>
          <li>Utstyret er kontrollert og godkjent (periodisk kontroll hvert 12. måned)</li>
        </ul>

        <div className="not-prose bg-zinc-900 text-white rounded-2xl p-8 my-10">
          <div className="flex items-start gap-4">
            <Clock size={32} className="text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-3">Hengetrauma – en stille drapsmann</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                Hengetrauma (ortostatisk sjokk) oppstår når en person henger passivt i fallsele uten å bevege benene. Blodet samler seg i underkroppen og hjernen får ikke nok oksygen. Bevisstløshet kan inntreffe på 3–5 minutter, og irreversibel skade etter 10–15 minutter.
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Nødetatenes responstid i Norge er gjennomsnittlig 8–12 minutter i bystrøk, og langt lenger i distriktene. Uten umiddelbar redning kan en kollega dø mens du venter på hjelp.
              </p>
            </div>
          </div>
        </div>

        <h2>Skylotec redningsutstyr – pålitelig tysk kvalitet</h2>
        <p>
          ABC Sikkerhet fører et bredt utvalg av redningsutstyr fra Skylotec, en av verdens ledende produsenter av personlig fallsikring og redningssystemer. <strong>Skylotec ble grunnlagt i 1947</strong> og har siden den gang spesialisert seg på nettopp redning – faktisk startet selskapet med å utvikle redningskurver for gruvedrift i Tyskland.
        </p>
        <p>
          Aktuelle Skylotec-produkter for redning:
        </p>
        <ul>
          <li><strong>Skylotec Triboc trefot</strong> – Teleskopisk ankerpunkt i aluminium/stål, raskt å rigge opp ved trange sjakter og takluker</li>
          <li><strong>Skylotec Nødheis HSG</strong> – Kompakt heisanordning med galvanisert stålwire, faller-indikator og krok for festing i sele</li>
          <li><strong>Skylotec ACS spil</strong> – Motorisert spil for løfting av person, kapasitet opp til 200 kg</li>
          <li><strong>Skylotec Ignite Ion sele</strong> – Kombisele godkjent som fallsikring og redningssele</li>
          <li><strong>Skylotec Peanut miniblokk</strong> – Kompakt fallsikringsblokk som integreres i redningssystemet</li>
        </ul>

        <h2>Petzl redningsutstyr – innovasjon fra Frankrike</h2>
        <p>
          Petzl er en annen bærebjelke i ABC Sikkerhet sitt sortiment. Det franske selskapet har siden 1970 produsert utstyr for arbeid i høyden, og er spesielt kjent for sine nedfirings- og redningssystemer.
        </p>
        <ul>
          <li><strong>Petzl AVAO BOD FAST</strong> – Komfortabel arbeidssele med hurtigspenner, sertifisert for både fallsikring og redning</li>
          <li><strong>Petzl I'D nedfiringsbrems</strong> – Manuell nedfiringsbrems med panikkfunksjon, brukes til kontrollert senking av skadet person</li>
          <li><strong>Petzl ASAP løpebrems</strong> – Automatisk løpebrems som alltid følger brukerens bevegelser langs tauet</li>
          <li><strong>Petzl VERTEX hjelm</strong> – Modulær vernehjelm godkjent opp til 1000V, med feste for lykter og visir</li>
          <li><strong>Petzl Expert 40 sekk</strong> – Slitesterk transportbag til redningsutstyr, med opptil 50 kg kapasitet ved oppheng</li>
        </ul>

        <h2>Krav til beredskapsplan</h2>
        <p>
          En beredskapsplan for arbeid i høyden skal alltid tilpasses det spesifikke arbeidsstedet. Den bør som minimum inneholde:
        </p>
        <ul>
          <li>Beskrivelse av arbeidsstedet og mulige fallscenarier</li>
          <li>Hvem som har ansvar for redning og varsling</li>
          <li>Hvor redningsutstyret er plassert</li>
          <li>Trinn-for-trinn redningsprosedyre med illustrasjoner</li>
          <li>Nødnumre og adkomst for nødetater (som backup)</li>
          <li>Dokumentasjon av siste øvelse og opplæring</li>
        </ul>

        <div className="not-prose bg-orange-500 text-white rounded-2xl p-8 my-10">
          <LifeBuoy size={32} className="mb-3" />
          <h3 className="text-xl font-bold mb-3">ABC Sikkerhet leverer komplette redningssett</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-4">
            Vi setter sammen godkjente redningssett tilpasset ditt arbeidssted – enten det er byggeplass, sjakt, mast, tak eller offshore-installasjon. Vi inkluderer opplæring, beredskapsplan og dokumentasjon.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition-colors text-sm"
          >
            Få tilbud på redningssett <ArrowRight size={14} />
          </Link>
        </div>

      </article>
    </main>
  )
}
