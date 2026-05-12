export const siteConfig = {
  name: "ABC Sikkerhet AS",
  shortName: "ABC Sikkerhet",
  description:
    "ABC Sikkerhet AS er eksperter på fallsikring, arbeid i høyden, rope access og redningstjenester. Autorisert forhandler av Skylotec, Petzl og Actsafe taumopeder (ACX, ICX, PMX, PME, ACC). Sertifiserte kurs og godkjente redningssett til byggeplass.",
  url: "https://abcfallsikring.no",
  ogImage: "https://abcfallsikring.no/og-image.jpg",
  email: "finn@abcfallsikring.no",
  phone: "+47 33 74 08 88",
  address: {
    street: "Korniveien 1",
    city: "Barkåker",
    zip: "3157",
    country: "Norge",
  },
  organizationNumber: "922 646 260",
  social: {
    facebook: "https://www.facebook.com/abcfallsikring",
    linkedin: "https://www.linkedin.com/company/abc-fallsikring",
    instagram: "https://www.instagram.com/abcfallsikring",
  },
  keywords: [
    "fallsikring",
    "arbeid i høyden",
    "rope access",
    "industriell klatring",
    "redningstjenester",
    "redningssett",
    "umiddelbar redning",
    "HMS",
    "fallsikringsutstyr",
    "kurs fallsikring",
    "Norge",
    "Skylotec",
    "Petzl",
    "Actsafe",
    "taumoped",
    "ACX",
    "ICX",
    "PMX",
    "PME",
    "ACC",
    "IRATA",
    "SOFT",
    "hengetrauma",
    "fallsele",
    "ABC fallsikring",
    "ABC Sikkerhet",
  ],
  openingHours: "Man–Fre 07:00–16:00",
  certifications: ["ISO 9001:2015", "ISO 45001:2018", "IRATA", "SOFT"],
}

export type SiteConfig = typeof siteConfig

export const services = [
  {
    slug: "fallsikring",
    title: "Fallsikring",
    shortDescription: "Komplette fallsikringssystemer og utstyr for trygg arbeid i høyden.",
    description:
      "ABC Sikkerhet leverer komplette fallsikringssystemer tilpasset ditt arbeidssted. Vi hjelper med risikovurdering, valg av riktig utstyr, installasjon og opplæring.",
    icon: "Shield",
    features: [
      "Risikovurdering og planlegging",
      "Godkjente ankerpunkter og wireløsninger",
      "Personlig verneutstyr (PVU)",
      "Periodisk kontroll og sertifisering",
      "Opplæring i bruk av utstyr",
    ],
  },
  {
    slug: "arbeid-i-hoyden",
    title: "Arbeid i høyden",
    shortDescription: "Profesjonelle tjenester for alle typer arbeid i høyden.",
    description:
      "Vi utfører alle typer arbeid i høyden på en sikker og effektiv måte. Våre sertifiserte teknikere har erfaring fra bygg, industri og offshore.",
    icon: "Mountain",
    features: [
      "Fasadearbeid og vedlikehold",
      "Inspeksjon og kontroll",
      "Montering og demontering",
      "Takreparasjoner",
      "Industrielt renhold",
    ],
  },
  {
    slug: "rope-access",
    title: "Rope Access",
    shortDescription: "IRATA-sertifisert rope access for vanskelig tilgjengelige områder.",
    description:
      "Rope access (tilkomstteknikk) er en kostnadseffektiv metode for å nå vanskelig tilgjengelige steder uten bruk av stillas eller lift. Alle våre teknikere er IRATA-sertifiserte.",
    icon: "Cable",
    features: [
      "IRATA Level 1, 2 og 3 teknikere",
      "Inspeksjon av konstruksjoner",
      "Vedlikehold og reparasjon",
      "NDT-testing i høyden",
      "Offshore og vindkraft",
    ],
  },
  {
    slug: "redningstjenester",
    title: "Redningstjenester",
    shortDescription: "Beredskap og umiddelbar redning ved arbeid i høyden.",
    description:
      "ABC Sikkerhet leverer godkjente redningssett og opplæring i umiddelbar redning. Vi sørger for at din bedrift kan redde en person fra høyden uten å vente på nødetatene.",
    icon: "Ambulance",
    features: [
      "Godkjente redningssett til byggeplass",
      "Umiddelbar redning uten nødetater",
      "Redningsplaner og beredskapsrutiner",
      "Praktisk redningsøvelse",
      "Skylotec og Petzl redningsutstyr",
    ],
  },
  {
    slug: "redningssett",
    title: "Redningssett",
    shortDescription: "Lovpålagte redningssett for byggeplass og arbeid i høyden.",
    description:
      "Norsk regelverk krever at det alltid finnes et godkjent redningssett tilgjengelig ved arbeid i høyden. Vi leverer komplette sett og opplæring.",
    icon: "Ambulance",
    features: [
      "Komplett redningssett etter gjeldende krav",
      "Evakueringssele og heisanordning",
      "Trefot/ankerpunkt for sjakter og luker",
      "Beredskapsplan inkludert",
      "Opplæring av eget personell",
    ],
  },
  {
    slug: "actsafe",
    title: "Actsafe Taumopeder",
    shortDescription: "Motoriserte taumopeder for sikker og effektiv vertikal forflytning.",
    description:
      "ABC Sikkerhet er autorisert forhandler og opplæringspartner for Actsafe taumopeder. Vi fører ACX, ICX, PMX, PME og ACC – med stort lager og rask levering.",
    icon: "Zap",
    features: [
      "Actsafe ACX – elektrisk, 250 kg",
      "Actsafe ICX – kompakt elektrisk",
      "Actsafe PMX – bensindrevet, 250 kg",
      "Actsafe PME – lett bensindrevet",
      "Actsafe ACC – klatrehjelp",
      "Sertifisert operatøropplæring",
    ],
  },
  {
    slug: "kurs",
    title: "Kurs og opplæring",
    shortDescription: "Sertifiserte kurs innen fallsikring, arbeid i høyden og Actsafe.",
    description:
      "Vi tilbyr sertifiserte kurs som oppfyller kravene i Forskrift om utførelse av arbeid. Kursbevis og dokumentasjon som kan fremlegges for Arbeidstilsynet.",
    icon: "GraduationCap",
    features: [
      "Grunnkurs fallsikring (1–2 dager)",
      "Redningskurs – umiddelbar redning",
      "Actsafe operatørkurs",
      "Rope access (IRATA) kurs",
      "Skreddersydde bedriftskurs",
    ],
  },
  {
    slug: "inspeksjon",
    title: "Inspeksjon",
    shortDescription: "Periodisk kontroll og sertifisering av fallsikringsutstyr.",
    description:
      "Alt personlig fallsikringsutstyr skal inn til periodisk kontroll hvert 12. måned. Vi utfører godkjent inspeksjon og utsteder kontrolldokumentasjon.",
    icon: "CheckCircle",
    features: [
      "Periodisk kontroll hvert 12. måned",
      "Kontroll av seler, liner og blokker",
      "Inspeksjon av ankerpunkter",
      "Kassasjonsvurdering",
      "Dokumentasjon og sertifikat",
    ],
  },
  {
    slug: "vedlikehold",
    title: "Vedlikehold",
    shortDescription: "Service og vedlikehold av fallsikringssystemer.",
    description:
      "Vi utfører vedlikehold og service på alle typer fallsikringssystemer, inkludert wire- og skinneanlegg, ankerpunkter og kollektive sikringssystemer.",
    icon: "Wrench",
    features: [
      "Service av wire- og skinneanlegg",
      "Vedlikehold av ankerpunkter",
      "Korrosjonsbehandling",
      "Utskifting av slitte komponenter",
      "Servicerapport og dokumentasjon",
    ],
  },
  {
    slug: "risikoanalyse",
    title: "Risikoanalyse",
    shortDescription: "HMS-rådgivning og risikovurdering for arbeid i høyden.",
    description:
      "Vi hjelper bedrifter med å kartlegge risiko ved arbeid i høyden og utarbeide nødvendige risikovurderinger og HMS-planer i tråd med Arbeidstilsynets krav.",
    icon: "ClipboardList",
    features: [
      "Kartlegging av arbeidssted og risiko",
      "Skriftlig risikovurdering",
      "Valg av sikringstiltak",
      "Redningsplan og beredskapsrutiner",
      "Oppfølging og revisjon",
    ],
  },
]
