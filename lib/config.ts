export const siteConfig = {
  name: "ABC Fallsikring AS",
  shortName: "ABC Fallsikring",
  title: "ABC Fallsikring AS – Utstyr, Kurs & Rådgivning for Arbeid i Høyden",
  description:
    "ABC Fallsikring AS er Norges totalleverandør av fallsikringsutstyr, dokumentert opplæring og rådgivning. Stolpekurs NS 9610, ActSafe taumoped, tilkomstteknikk og redningssett.",
  url: "https://www.fallsikringsele.no",
  ogImage: "https://www.fallsikringsele.no/og-image.jpg",
  email: "post@abcfallsikring.no",
  phone: "+47 33 74 08 88",
  telephone: "+47 33 74 08 88",
  phoneHref: "tel:+4733740888",
  phoneDisplay: "+47 33 74 08 88",
  contact: {
    phone: "+4733740888",
    phoneDisplay: "+47 33 74 08 88",
    email: "post@abcfallsikring.no",
    emailKurs: "kurs@abcfallsikring.no",
    address: "Korniveien 1, 3157 Barkåker",
  },
  address: {
    street: "Korniveien 1",
    city: "Barkåker",
    zip: "3157",
    region: "Vestfold",
    country: "Norge",
    full: "Korniveien 1, 3157 Barkåker",
  },
  organizationNumber: "922 646 260",
  social: {
    facebook: "https://www.facebook.com/abcfallsikring",
    linkedin: "https://www.linkedin.com/company/abc-fallsikring",
    instagram: "https://www.instagram.com/abcfallsikring",
    twitter: "https://twitter.com/abcfallsikring",
  },
  keywords: [
    "fallsikring", "arbeid i høyden", "tilkomstteknikk", "rope access", "industriell klatring",
    "dokumentert opplæring", "redningstjenester", "redningssett", "umiddelbar redning", "HMS",
    "fallsikringsutstyr", "kurs fallsikring", "NS 9610", "Norge", "Skylotec", "Petzl",
    "ActSafe", "taumoped", "ACX", "ICX", "PMX", "PME", "ACC",
    "hengetrauma", "fallsele", "ABC Fallsikring",
  ],
  openingHours: "Man–Fre 07:00–16:00",
  openingHoursSpec: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "16:00",
  },
  certifications: ["NS 9610", "ActSafe autorisert", "Skylotec partner"],
  locale: "nb_NO",
  language: "nb",
  googleSiteVerification: "",
  twitterHandle: "@abcfallsikring",
}

export const services = [
  { slug: "fallsikring", title: "Fallsikring", shortDescription: "Komplette fallsikringssystemer og utstyr for trygg arbeid i høyden.", description: "ABC Fallsikring AS leverer komplette fallsikringssystemer tilpasset ditt arbeidssted. Vi hjelper med risikovurdering, valg av riktig utstyr, installasjon og opplæring.", icon: "Shield", features: ["Risikovurdering og planlegging", "Godkjente ankerpunkter og wireløsninger", "Personlig verneutstyr (PVU)", "Periodisk kontroll og sertifisering", "Opplæring i bruk av utstyr"] },
  { slug: "arbeid-i-hoyden", title: "Arbeid i høyden", shortDescription: "Profesjonelle tjenester for alle typer arbeid i høyden.", description: "Vi utfører alle typer arbeid i høyden på en sikker og effektiv måte. Våre sertifiserte teknikere har erfaring fra bygg, industri og offshore.", icon: "Mountain", features: ["Fasadearbeid og vedlikehold", "Inspeksjon og kontroll", "Montering og demontering", "Takreparasjoner", "Industrielt renhold"] },
  { slug: "rope-access", title: "Tilkomstteknikk (Rope Access)", shortDescription: "Profesjonell tilkomstteknikk for industri, bygg og offshore.", description: "Tilkomstteknikk (rope access) er en kostnadseffektiv metode for å nå vanskelig tilgjengelige steder uten bruk av stillas eller lift. IRATA Level 1–3 sertifiserte teknikere.", icon: "Cable", features: ["IRATA Level 1, 2 og 3 sertifiserte teknikere", "Inspeksjon av konstruksjoner", "Vedlikehold og reparasjon", "NDT-testing i høyden", "Offshore og vindkraft"] },
  { slug: "redningstjenester", title: "Redningstjenester", shortDescription: "Beredskap og umiddelbar redning ved arbeid i høyden.", description: "ABC Fallsikring AS leverer godkjente redningssett og opplæring i umiddelbar redning uten nødetatene.", icon: "Ambulance", features: ["Godkjente redningssett til byggeplass", "Umiddelbar redning uten nødetater", "Redningsplaner og beredskapsrutiner", "Praktisk redningsøvelse", "Skylotec og Petzl redningsutstyr"] },
  { slug: "redningssett", title: "Redningssett", shortDescription: "Lovpålagte redningssett for byggeplass og arbeid i høyden.", description: "Norsk regelverk krever at det alltid finnes et godkjent redningssett tilgjengelig ved arbeid i høyden.", icon: "Ambulance", features: ["Komplett redningssett etter gjeldende krav", "Evakueringssele og heisanordning", "Trefot/ankerpunkt for sjakter og luker", "Beredskapsplan inkludert", "Opplæring av eget personell"] },
  { slug: "actsafe", title: "ActSafe Taumopeder", shortDescription: "Motoriserte taumopeder for sikker og effektiv vertikal forflytning.", description: "ABC Fallsikring AS er autorisert forhandler for ActSafe taumopeder. Vi fører ACX, ICX, PMX, PME og ACC – med lager og rask levering.", icon: "Zap", features: ["ActSafe ACX – elektrisk, 250 kg", "ActSafe ICX – kompakt elektrisk", "ActSafe PMX – bensindrevet, 250 kg", "ActSafe PME – lett bensindrevet", "ActSafe ACC – klatrehjelp", "Sertifisert operatøropplæring"] },
  { slug: "kurs", title: "Kurs og opplæring", shortDescription: "Dokumentert opplæring innen fallsikring, arbeid i høyden og ActSafe.", description: "Vi tilbyr dokumentert opplæring som oppfyller kravene i Forskrift om utførelse av arbeid og NS 9610.", icon: "GraduationCap", features: ["Grunnkurs fallsikring (NS 9610)", "Oppfriskning fallsikring", "ActSafe operatørkurs", "Stolpekurs / mastekurs", "Skreddersydde bedriftskurs"] },
  { slug: "inspeksjon", title: "Inspeksjon", shortDescription: "Periodisk kontroll og sertifisering av fallsikringsutstyr.", description: "Alt personlig fallsikringsutstyr skal inn til periodisk kontroll hvert 12. måned.", icon: "CheckCircle", features: ["Periodisk kontroll hvert 12. måned", "Kontroll av seler, liner og blokker", "Inspeksjon av ankerpunkter", "Kassasjonsvurdering", "Dokumentasjon og sertifikat"] },
  { slug: "vedlikehold", title: "Vedlikehold", shortDescription: "Service og vedlikehold av fallsikringssystemer.", description: "Vi utfører vedlikehold og service på alle typer fallsikringssystemer.", icon: "Wrench", features: ["Service av wire- og skinneanlegg", "Vedlikehold av ankerpunkter", "Korrosjonsbehandling", "Utskifting av slitte komponenter", "Servicerapport og dokumentasjon"] },
  { slug: "risikoanalyse", title: "Risikoanalyse", shortDescription: "HMS-rådgivning og risikovurdering for arbeid i høyden.", description: "Vi hjelper bedrifter med å kartlegge risiko ved arbeid i høyden og utarbeide nødvendige HMS-planer.", icon: "ClipboardList", features: ["Kartlegging av arbeidssted og risiko", "Skriftlig risikovurdering", "Valg av sikringstiltak", "Redningsplan og beredskapsrutiner", "Oppfølging og revisjon"] },
]

export type SiteConfig = typeof siteConfig
export type Service = typeof services[0]
