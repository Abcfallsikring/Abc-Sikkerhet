export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
}

export const faqCategories = [
  'Fallsikring',
  'HMS og regelverk',
  'Arbeid i høyden',
  'Kurs og sertifisering',
  'Utstyr',
  'Rope Access',
  'Redning',
  'Inspeksjon',
]

export const faqs: FAQ[] = [
  // Fallsikring
  {
    id: 'fallsikring-1',
    question: 'Hvor ofte må fallsikringsutstyr kontrolleres?',
    answer: 'I henhold til NS-EN 365 skal alt personlig verneutstyr mot fall (PPE) kontrolleres minimum én gang per år av kompetent person. Ved intensiv bruk, eksponering for kjemikalier, UV-stråling eller andre belastende forhold bør kontrollen utføres oftere. Daglig visuell inspeksjon før bruk er også påkrevd.',
    category: 'Fallsikring',
    tags: ['kontroll', 'årskontroll', 'NS-EN 365', 'PPE'],
  },
  {
    id: 'fallsikring-2',
    question: 'Hva er forskjellen på midlertidig og permanent fallsikring?',
    answer: 'Midlertidig fallsikring er utstyr som monteres og demonteres for hvert prosjekt, som mobile forankringspunkter og personlig verneutstyr. Permanent fallsikring er fast installerte systemer som livliner, ankerpunkter og horisontale sikringssystemer som er en del av bygget. Permanent fallsikring anbefales for områder med regelmessig vedlikeholdsbehov.',
    category: 'Fallsikring',
    tags: ['midlertidig', 'permanent', 'systemer'],
  },
  {
    id: 'fallsikring-3',
    question: 'Hva er en fallsikringsblokk og når brukes den?',
    answer: 'En fallsikringsblokk (fallbremse) er et automatisk låsende enhet som stopper et fall raskt. Den brukes når du trenger vertikal bevegelse og rask stoppfunksjon. Blokken trekker inn livsikringen automatisk og låser ved plutselig bevegelse. Ideell for arbeid på stiger, master og konstruksjoner.',
    category: 'Fallsikring',
    tags: ['fallsikringsblokk', 'fallbremse', 'utstyr'],
  },
  {
    id: 'fallsikring-4',
    question: 'Hva er fallfaktoren og hvorfor er den viktig?',
    answer: 'Fallfaktoren beregnes ved å dele fallhøyden på lengden av sikringsline. En fallfaktor på 0 (fall under forankringspunkt) gir lavest belastning, mens fallfaktor 2 (fall med dobbelt linelengde) gir høyest. Forankring bør alltid være over bruker for å minimere fallfaktoren og dermed belastningen på kropp og utstyr.',
    category: 'Fallsikring',
    tags: ['fallfaktor', 'teori', 'forankring'],
  },
  {
    id: 'fallsikring-5',
    question: 'Hva er pendelfall og hvordan unngår man det?',
    answer: 'Pendelfall oppstår når et fall skjer til siden for forankringspunktet, slik at personen svinger i en bue og kan treffe hindringer. For å unngå pendelfall bør forankringspunktet alltid være rett over arbeidsstedet, eller man bruker horisontale sikringssystemer som tillater bevegelse langs en akse.',
    category: 'Fallsikring',
    tags: ['pendelfall', 'risiko', 'forankring'],
  },
  {
    id: 'fallsikring-6',
    question: 'Når må man bruke energidemper?',
    answer: 'Energidemper skal brukes når det er fare for fritt fall. Energidemperen absorberer energien ved et fall og reduserer belastningen på kroppen til under 6 kN. Uten energidemper kan belastningen ved et fall være dødelig. Unntaket er ved bruk av fallsikringsblokker som har innebygd energiabsorbering.',
    category: 'Fallsikring',
    tags: ['energidemper', 'sikkerhet', 'utstyr'],
  },
  // HMS og regelverk
  {
    id: 'hms-1',
    question: 'Hvilke lover regulerer arbeid i høyden i Norge?',
    answer: 'Arbeid i høyden reguleres primært av Arbeidsmiljøloven og tilhørende forskrifter, spesielt Forskrift om utførelse av arbeid (best.nr. 703). Relevante standarder inkluderer NS-EN 363 (fallsikringssystemer), NS-EN 361 (seler), NS-EN 365 (krav til periodisk kontroll) og NS-EN 795 (forankringspunkter).',
    category: 'HMS og regelverk',
    tags: ['lover', 'forskrifter', 'standarder'],
  },
  {
    id: 'hms-2',
    question: 'Hva er NS-EN 363?',
    answer: 'NS-EN 363 er den europeiske standarden for personlig verneutstyr mot fall fra høyde - fallsikringssystemer. Den definerer krav til komponenter og systemer som skal beskytte mot fall. Standarden beskriver fem hovedtyper systemer: arbeidsbegrensning, arbeidsstøtte, fallsikring, redning og tilbakeholdssystem.',
    category: 'HMS og regelverk',
    tags: ['NS-EN 363', 'standard', 'fallsikringssystemer'],
  },
  {
    id: 'hms-3',
    question: 'Hva er NS-EN 365?',
    answer: 'NS-EN 365 er standarden for periodisk kontroll av personlig verneutstyr mot fall. Den krever at alt PPE kontrolleres minimum årlig av kompetent person. Standarden beskriver prosedyrer for kontroll, dokumentasjon og merking av utstyr, samt krav til kompetanse hos kontrollør.',
    category: 'HMS og regelverk',
    tags: ['NS-EN 365', 'kontroll', 'standard'],
  },
  {
    id: 'hms-4',
    question: 'Hva er en SJA (Sikker Jobb Analyse)?',
    answer: 'SJA er en systematisk gjennomgang av en arbeidsoppgave for å identifisere farer og etablere sikre arbeidsprosedyrer. SJA skal gjennomføres før oppstart av risikofulle arbeidsoppgaver og dokumenteres skriftlig. Den skal inkludere identifikasjon av farer, risikovurdering, forebyggende tiltak og beredskapsplan.',
    category: 'HMS og regelverk',
    tags: ['SJA', 'risikoanalyse', 'HMS'],
  },
  {
    id: 'hms-5',
    question: 'Hvem har ansvar for sikkerheten ved arbeid i høyden?',
    answer: 'Arbeidsgiver har hovedansvaret for sikkerheten og skal sørge for risikovurdering, opplæring, riktig utstyr og tilsyn. Arbeidstaker har plikt til å følge sikkerhetsregler og bruke påbudt verneutstyr. Ved innleid arbeidskraft deles ansvaret mellom innleier og utleier etter avtale.',
    category: 'HMS og regelverk',
    tags: ['ansvar', 'arbeidsgiver', 'arbeidstaker'],
  },
  {
    id: 'hms-6',
    question: 'Hva er kravene til redningsplan ved arbeid i høyden?',
    answer: 'Forskrift om utførelse av arbeid krever at det foreligger plan for redning før arbeid i høyden starter. Planen skal beskrive hvordan en person som henger i fallsikringsutstyr skal reddes ned innen 10-15 minutter for å unngå suspensjonsyndrom. Planen må tilpasses det spesifikke arbeidsstedet.',
    category: 'HMS og regelverk',
    tags: ['redningsplan', 'beredskap', 'forskrift'],
  },
  // Arbeid i høyden
  {
    id: 'hoyden-1',
    question: 'Fra hvilken høyde kreves fallsikring?',
    answer: 'I Norge kreves fallsikring fra 2 meters høyde ved arbeid på flater med fare for fall. Ved arbeid på stillas gjelder andre regler, og ved spesielt farlige arbeidsforhold kan fallsikring kreves fra lavere høyder. Arbeidsgiver må alltid gjøre en risikovurdering for å bestemme nødvendige tiltak.',
    category: 'Arbeid i høyden',
    tags: ['høydekrav', '2 meter', 'regelverk'],
  },
  {
    id: 'hoyden-2',
    question: 'Hvordan sikres arbeid på tak?',
    answer: 'Arbeid på tak sikres gjennom permanente eller midlertidige sikringssystemer. Vanlige løsninger inkluderer rekkverk, livliner, forankringspunkter og personlig verneutstyr. Valg av løsning avhenger av taktype, varighet av arbeid og antall personer. Fallsikringsplan og risikovurdering skal alltid utarbeides.',
    category: 'Arbeid i høyden',
    tags: ['takarbeid', 'taksikring', 'løsninger'],
  },
  {
    id: 'hoyden-3',
    question: 'Hva er kravene til bruk av lift ved arbeid i høyden?',
    answer: 'Operatør av lift skal ha dokumentert opplæring for den aktuelle lifttypen. Fallsikring skal brukes i bom- og knekkarmslifter. I sakselifter med rekkverk er fallsikring normalt ikke påkrevd. Daglig sjekk av liften skal utføres før bruk, og årlig sakkyndig kontroll er påbudt.',
    category: 'Arbeid i høyden',
    tags: ['lift', 'opplæring', 'kontroll'],
  },
  {
    id: 'hoyden-4',
    question: 'Hvordan planlegges sikkert vindkraftarbeid i høyden?',
    answer: 'Vindkraftarbeid krever spesialisert planlegging som tar hensyn til værforhold, tilgang, redningsplan og evakuering. Teknikere må ha dokumentert kompetanse for arbeid i høyden og spesifikk trening for vindturbiner. Arbeidsoppgaver må koordineres med kontrollrom, og værgrenser skal defineres på forhånd.',
    category: 'Arbeid i høyden',
    tags: ['vindkraft', 'vindturbin', 'planlegging'],
  },
  {
    id: 'hoyden-5',
    question: 'Hva er sikkerhetskravene for solcellemontasje på tak?',
    answer: 'Solcellemontasje på tak krever fallsikring som ved annet takarbeid. Arbeidere må ha opplæring i fallsikring og bruk av aktuelt utstyr. Midlertidige rekkverk eller permanente sikringssystemer skal vurderes. Elektriske farer må også vurderes og håndteres i risikoanalysen.',
    category: 'Arbeid i høyden',
    tags: ['solceller', 'takarbeid', 'montering'],
  },
  // Kurs og sertifisering
  {
    id: 'kurs-1',
    question: 'Hvilke kurs kreves for arbeid i høyden?',
    answer: 'For generelt arbeid i høyden kreves dokumentert opplæring i bruk av fallsikringsutstyr. For rope access kreves IRATA-sertifisering (nivå 1-3). Spesialiserte oppgaver kan kreve tilleggskurs som redningskurs, stillas-kurs eller bransjespesifikk opplæring. Oppfriskningskurs anbefales årlig.',
    category: 'Kurs og sertifisering',
    tags: ['kurs', 'opplæring', 'krav'],
  },
  {
    id: 'kurs-2',
    question: 'Hva er IRATA-sertifisering?',
    answer: 'IRATA (Industrial Rope Access Trade Association) er den internasjonalt anerkjente standarden for industriell tau-tilgang. Sertifiseringen har tre nivåer: Level 1 (grunnteknikker), Level 2 (rigging og team-ledelse) og Level 3 (prosjektledelse og arbeidstillatelser). Sertifikatet er gyldig i 3 år.',
    category: 'Kurs og sertifisering',
    tags: ['IRATA', 'rope access', 'sertifisering'],
  },
  {
    id: 'kurs-3',
    question: 'Hvor lenge er et fallsikringskurs gyldig?',
    answer: 'Det finnes ingen lovfestet gyldighetsperiode for fallsikringskurs, men bransjestandard og beste praksis tilsier oppfriskningskurs hvert 1-3 år avhengig av arbeidstype og hyppighet. IRATA-sertifisering må fornyes hvert 3. år. Arbeidsgiver har ansvar for å sikre at kompetansen holdes ved like.',
    category: 'Kurs og sertifisering',
    tags: ['gyldighet', 'oppfriskning', 'kurs'],
  },
  {
    id: 'kurs-4',
    question: 'Hva lærer man på et grunnkurs i fallsikring?',
    answer: 'Grunnkurs i fallsikring dekker teori om regelverk og standarder, identifikasjon av farer, valg av riktig utstyr, korrekt bruk av sele og tilkoblingsutstyr, kontroll av utstyr før bruk, og praktiske øvelser med montering og bruk. Kurset avsluttes med praktisk og teoretisk evaluering.',
    category: 'Kurs og sertifisering',
    tags: ['grunnkurs', 'innhold', 'fallsikring'],
  },
  {
    id: 'kurs-5',
    question: 'Kan vi få kurs på vår arbeidsplass?',
    answer: 'Ja, vi tilbyr bedriftsinterne kurs på kundens lokasjon. Dette gir fordeler som bruk av arbeidsstedets egne systemer, tilpasning til spesifikke arbeidsforhold og kostnadseffektivitet ved flere deltakere. Minimum antall deltakere gjelder. Kontakt oss for tilbud tilpasset deres behov.',
    category: 'Kurs og sertifisering',
    tags: ['bedriftskurs', 'intern opplæring', 'tilpasning'],
  },
  // Utstyr
  {
    id: 'utstyr-1',
    question: 'Hvordan velger jeg riktig fallsikringssele?',
    answer: 'Valg av sele avhenger av arbeidsoppgavene. Helkroppssele med festepunkt i ryggen er standard for fallsikring. For arbeidsstøtte trengs sele med sideringer. For tungt arbeid velg komfortmodell med polstring. Selen må passe kroppen og justeres korrekt. Kontroller at selen er CE-merket og godkjent iht. NS-EN 361.',
    category: 'Utstyr',
    tags: ['sele', 'valg', 'NS-EN 361'],
  },
  {
    id: 'utstyr-2',
    question: 'Hva er forskjellen på type A og type C forankringspunkter?',
    answer: 'Type A forankringspunkter (NS-EN 795) er strukturelle punkter designet for å tåle belastning fra en person (12 kN). Type C er horisontale sikringssystemer (livliner) som tillater bevegelse langs en akse og kan ha flere brukere. Begge må dimensjoneres og installeres korrekt for underlaget.',
    category: 'Utstyr',
    tags: ['forankring', 'NS-EN 795', 'ankerpunkt'],
  },
  {
    id: 'utstyr-3',
    question: 'Hvordan oppbevares fallsikringsutstyr korrekt?',
    answer: 'Fallsikringsutstyr skal oppbevares tørt, rent og beskyttet mot direkte sollys. Unngå kontakt med kjemikalier, olje og skarpe gjenstander. Tekstiler skal henges opp eller legges flatt, aldri knyttes. Metallkomponenter kontrolleres for korrosjon. Skadet utstyr tas ut av bruk umiddelbart.',
    category: 'Utstyr',
    tags: ['oppbevaring', 'vedlikehold', 'holdbarhet'],
  },
  {
    id: 'utstyr-4',
    question: 'Hva er levetiden på fallsikringsutstyr?',
    answer: 'Levetid varierer med produkt og bruk. Tekstiler har typisk 10 års maksimal levetid fra produksjonsdato, men faktisk levetid avhenger av bruk og vedlikehold. Metallkomponenter kan vare lenger med riktig vedlikehold. Følg alltid produsentens anbefalinger og utfør årlig kontroll.',
    category: 'Utstyr',
    tags: ['levetid', 'holdbarhet', 'utskifting'],
  },
  {
    id: 'utstyr-5',
    question: 'Hva er kravene til karabiner for fallsikring?',
    answer: 'Karabiner for fallsikring må være CE-merket og oppfylle NS-EN 362. De skal ha automatisk låsemekanisme (ikke skruelåsing) og minimum styrke på 20 kN. Karabiner skal kontrolleres visuelt før hver bruk og tas ut av bruk ved tegn på slitasje, korrosjon eller deformering.',
    category: 'Utstyr',
    tags: ['karabiner', 'NS-EN 362', 'krav'],
  },
  // Rope Access
  {
    id: 'rope-1',
    question: 'Hva er rope access?',
    answer: 'Rope access (industriell tau-tilgang) er en arbeidsmetode hvor tau brukes for å få tilgang til vanskelig tilgjengelige steder. Metoden bruker to uavhengige tausystemer for sikkerhet. IRATA-standarden definerer prosedyrer og kompetansekrav. Metoden er effektiv for inspeksjon, vedlikehold og reparasjon.',
    category: 'Rope Access',
    tags: ['rope access', 'definisjon', 'metode'],
  },
  {
    id: 'rope-2',
    question: 'Når er rope access bedre enn stillas?',
    answer: 'Rope access er ofte bedre enn stillas ved kortvarige oppdrag, vanskelig tilgjengelige områder, sensitive omgivelser og når minimalt fotavtrykk er ønskelig. Det er ofte mer kostnadseffektivt for punktarbeid, mens stillas er bedre for langvarig arbeid over større områder med flere personer.',
    category: 'Rope Access',
    tags: ['sammenligning', 'stillas', 'valg'],
  },
  {
    id: 'rope-3',
    question: 'Hva er forskjellen på IRATA Level 1, 2 og 3?',
    answer: 'Level 1 er rope access-tekniker som utfører arbeid under tilsyn. Level 2 kan rigge og lede team, samt utføre komplekse oppgaver. Level 3 er kvalifisert til å lede prosjekter, skrive risikovurderinger og utferdige arbeidstillatelser. Hvert nivå krever praktisk erfaring i tillegg til eksamen.',
    category: 'Rope Access',
    tags: ['IRATA', 'nivåer', 'kompetanse'],
  },
  {
    id: 'rope-4',
    question: 'Hvilke bransjer bruker rope access?',
    answer: 'Rope access brukes bredt i offshore (plattformer, skip), energi (vindturbiner, kraftverk), bygg (fasader, broer), industri (tanker, prosessanlegg), samt for inspeksjon, NDT, maling og vedlikehold. Metoden vokser i popularitet på grunn av effektivitet og fleksibilitet.',
    category: 'Rope Access',
    tags: ['bransjer', 'anvendelser', 'industri'],
  },
  // Redning
  {
    id: 'redning-1',
    question: 'Hva er suspensjonsyndrom?',
    answer: 'Suspensjonsyndrom (ortostatisk sjokk) er en livstruende tilstand som kan oppstå når en person henger bevistløs i fallsikringssele. Blodet samles i bena og hjertet får ikke nok blod til å pumpe. Redning må skje innen 10-15 minutter. Etter redning legges personen gradvis ned, ikke flatt umiddelbart.',
    category: 'Redning',
    tags: ['suspensjonsyndrom', 'førstehjælp', 'fare'],
  },
  {
    id: 'redning-2',
    question: 'Hvor raskt må redning skje etter et fall?',
    answer: 'Redning bør gjennomføres innen 10-15 minutter for å unngå suspensjonsyndrom. Denne tidsbegrensningen må være utgangspunkt for utarbeidelse av redningsplaner. Jo raskere redning gjennomføres, desto bedre. Derfor kreves det alltid at en redningsplan er på plass før arbeid i høyden starter.',
    category: 'Redning',
    tags: ['responstid', 'tidsfrist', 'redningsplan'],
  },
  {
    id: 'redning-3',
    question: 'Hva skal en redningsplan inneholde?',
    answer: 'En redningsplan skal beskrive varslingsprosedyrer, ansvarlige personer, nødvendig redningsutstyr og plassering, steg-for-steg redningsprosedyre, evakueringsrute, førstehjelptiltak og kommunikasjonsplan. Planen må tilpasses det spesifikke arbeidsstedet og øves på regelmessig.',
    category: 'Redning',
    tags: ['redningsplan', 'innhold', 'krav'],
  },
  {
    id: 'redning-4',
    question: 'Hvilke typer redningsutstyr finnes?',
    answer: 'Vanlig redningsutstyr inkluderer redningsseler, redningsvinsjer, nedfiringssystemer, trisser og trinser, bæreutstyr (bårer) og førstehjelpsutstyr. Valg av utstyr avhenger av arbeidsstedets forhold, høyde og tilgjengelig bemanning. Redundans bør bygges inn for kritiske systemer.',
    category: 'Redning',
    tags: ['redningsutstyr', 'typer', 'oversikt'],
  },
  // Inspeksjon
  {
    id: 'insp-1',
    question: 'Hvem kan utføre årskontroll av fallsikringsutstyr?',
    answer: 'Årskontroll skal utføres av kompetent person med dokumentert opplæring iht. NS-EN 365 og produsentens anvisninger. Personen må ha kunnskap om gjeldende standarder, utstyrstyper og kontrollprosedyrer. Mange produsenter krever autorisert kontrollør for å opprettholde garantier.',
    category: 'Inspeksjon',
    tags: ['årskontroll', 'kompetanse', 'kontrollør'],
  },
  {
    id: 'insp-2',
    question: 'Hva skjer hvis utstyr blir underkjent ved kontroll?',
    answer: 'Underkjent utstyr tas umiddelbart ut av bruk og merkes tydelig. Avhengig av skaden kan utstyret destrueres, sendes til produsent for vurdering, eller repareres hvis tillatt. Kontrolldokumentasjon oppdateres, og brukere informeres. Erstatningsutstyr må anskaffes før arbeid kan fortsette.',
    category: 'Inspeksjon',
    tags: ['underkjent', 'kassering', 'prosedyre'],
  },
  {
    id: 'insp-3',
    question: 'Hvordan dokumenteres kontroll av fallsikringsutstyr?',
    answer: 'Hvert utstyr skal ha unikt ID-nummer og føres i kontrollregister. Kontrolldokumentasjon skal inneholde utstyrstype, ID, produsent, produksjonsdato, kontrollhistorikk, funn, status og kontrollørs signatur. Mange bruker digitale systemer for effektiv oppfølging og påminnelser.',
    category: 'Inspeksjon',
    tags: ['dokumentasjon', 'register', 'system'],
  },
  {
    id: 'insp-4',
    question: 'Hva skal daglig visuell kontroll av utstyr omfatte?',
    answer: 'Daglig kontroll før bruk skal sjekke tekstiler for slitasje, kutt og UV-skader, søm for oppsprett, metallkomponenter for korrosjon og deformering, låsemekanismer for funksjon, og merking for lesbarhet. Utstyr med synlige skader tas ut av bruk og meldes til nærmeste leder.',
    category: 'Inspeksjon',
    tags: ['daglig kontroll', 'visuell', 'sjekkliste'],
  },
  // Flere generelle spørsmål
  {
    id: 'gen-1',
    question: 'Hva koster fallsikringssystemer?',
    answer: 'Kostnaden varierer betydelig basert på systemtype, størrelse og kompleksitet. Et enkelt forankringspunkt kan koste fra noen tusen kroner, mens komplette horisontale systemer kan koste hundretusenvis. Vi tilbyr gratis befaring og tilbud for å gi deg presise priser for ditt prosjekt.',
    category: 'Fallsikring',
    tags: ['pris', 'kostnad', 'tilbud'],
  },
  {
    id: 'gen-2',
    question: 'Leverer dere over hele Norge?',
    answer: 'Ja, vi leverer tjenester i hele Norge. Vi har hovedkontor i Oslo og utfører oppdrag over hele landet, inkludert offshore installasjoner. For større prosjekter kan vi etablere lokale baser. Reisekostnader inkluderes i tilbudet.',
    category: 'Fallsikring',
    tags: ['leveranse', 'geografi', 'dekning'],
  },
  {
    id: 'gen-3',
    question: 'Hvor lang tid tar en befaring?',
    answer: 'En befaring tar typisk 1-2 timer avhengig av områdets størrelse og kompleksitet. Vi kartlegger behov, vurderer løsninger og diskuterer alternativer. Etter befaring utarbeides detaljert tilbud med anbefalt løsning, tidsplan og pris.',
    category: 'Fallsikring',
    tags: ['befaring', 'tid', 'prosess'],
  },
  {
    id: 'gen-4',
    question: 'Har dere beredskapsavtaler?',
    answer: 'Ja, vi tilbyr beredskapsavtaler med garantert responstid. Avtalene tilpasses kundens behov og kan inkludere 24/7 beredskap for akutte situasjoner. Kontakt oss for å diskutere en løsning som passer for din virksomhet.',
    category: 'Fallsikring',
    tags: ['beredskap', 'avtale', '24/7'],
  },
]

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter(
    (faq) => faq.category.toLowerCase() === category.toLowerCase()
  )
}

export function searchFAQs(query: string): FAQ[] {
  const searchTerm = query.toLowerCase()
  return faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
  )
}

export function getAllFAQCategories(): { name: string; count: number }[] {
  const categoryMap = new Map<string, number>()
  
  faqs.forEach((faq) => {
    const count = categoryMap.get(faq.category) || 0
    categoryMap.set(faq.category, count + 1)
  })
  
  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}
