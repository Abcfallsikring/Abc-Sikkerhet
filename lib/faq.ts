export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}
 
export interface FAQCategory {
  id: string
  name: string
  description: string
}
 
export const faqCategories: FAQCategory[] = [
  {
    id: "generelt",
    name: "Generelt",
    description: "Generelle spørsmål om fallsikring og arbeid i høyden",
  },
  {
    id: "regelverk",
    name: "Regelverk",
    description: "Spørsmål om lover, forskrifter og krav",
  },
  {
    id: "utstyr",
    name: "Utstyr",
    description: "Spørsmål om fallsikringsutstyr og produkter",
  },
  {
    id: "kurs",
    name: "Kurs og opplæring",
    description: "Spørsmål om kurs, sertifisering og opplæring",
  },
  {
    id: "redning",
    name: "Redning",
    description: "Spørsmål om redningssett og redningsberedskap",
  },
  {
    id: "inspeksjon",
    name: "Inspeksjon",
    description: "Spørsmål om kontroll og vedlikehold av utstyr",
  },
]
 
export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Hva er arbeid i høyden?",
    answer:
      "Arbeid i høyden er alt arbeid hvor det er fare for fall til et lavere nivå. Dette inkluderer arbeid på stillas, stige, tak og andre høyder. Krav om sikringsinnretninger trer i kraft ved 2 meters høyde eller mer.",
    category: "generelt",
  },
  {
    id: "2",
    question: "Hva krever Arbeidstilsynet av fallsikring?",
    answer:
      "Arbeidstilsynet krever at arbeidsgiver planlegger og gjennomfører arbeid i høyden på en sikker måte. Kollektiv fallsikring skal prioriteres fremfor personlig verneutstyr. Arbeidstaker skal ha dokumentert opplæring i bruk av utstyr.",
    category: "regelverk",
  },
  {
    id: "3",
    question: "Hva er tilstrekkelig opplæring for arbeid i høyden?",
    answer:
      "Opplæringen skal være både teoretisk og praktisk, og den praktiske delen skal skje under tilsyn av kvalifisert person. For stillas 2–5 m kreves 7,5 timer teori og 7,5 timer praksis. For stillas 5–9 m kreves 15 timer teori og 15 timer praksis.",
    category: "kurs",
  },
  {
    id: "4",
    question: "Hvor ofte må fallsikringsutstyr kontrolleres?",
    answer:
      "Alt personlig fallsikringsutstyr skal inn til periodisk kontroll hvert 12. måned. I tillegg skal utstyret inspiseres visuelt av brukeren før hver bruk. Skadet eller utslitt utstyr skal tas ut av bruk umiddelbart.",
    category: "inspeksjon",
  },
  {
    id: "5",
    question: "Hva er et redningssett og er det lovpålagt?",
    answer:
      "Et redningssett inneholder utstyr for å kunne hente ned en person fra høyden uten hjelp fra nødetatene. Arbeidsgiver er lovpålagt å sørge for at det finnes en redningsplan og nødvendig utstyr for umiddelbar redning ved all bruk av personlig fallsikringsutstyr.",
    category: "redning",
  },
  {
    id: "6",
    question: "Hva er hengetrauma?",
    answer:
      "Hengetrauma (ortostatisk sjokk) oppstår når en person henger passivt i fallsele. Blodet samler seg i underkroppen og hjernen får ikke nok oksygen. Bevisstløshet kan inntreffe på 3–5 minutter. Dette er grunnen til at umiddelbar redning er et lovkrav.",
    category: "redning",
  },
  {
    id: "7",
    question: "Hva er forskjellen på rope access og tradisjonelt stillasarbeid?",
    answer:
      "Rope access (tilkomstteknikk) bruker tau og spesialisert klatreteknikk for å nå steder som er vanskelig tilgjengelig. Det er raskere å rigge opp, krever mindre plass og er ofte langt rimeligere enn stillas. Alle rope access-teknikere hos ABC Sikkerhet er IRATA-sertifiserte.",
    category: "generelt",
  },
  {
    id: "8",
    question: "Hva er Actsafe taumoped og hvem bruker det?",
    answer:
      "Actsafe er motoriserte taumopeder som gjør vertikal forflytning i tau enklere, raskere og mindre fysisk krevende. ABC Sikkerhet fører ACX, ICX, PMX, PME og ACC. De brukes av vindturbinteknikere, industrielle klatrere, tårnkranoperatører og redningsmannskap.",
    category: "utstyr",
  },
  {
    id: "9",
    question: "Hvilke sertifiseringer har ABC Sikkerhet?",
    answer:
      "ABC Sikkerhet AS er sertifisert etter ISO 9001:2015 (kvalitetsledelse), ISO 45001:2018 (HMS-ledelse) og IRATA (Industrial Rope Access). Vi er også medlem av SOFT (Skandinavisk organisasjon for fallsikring).",
    category: "generelt",
  },
  {
    id: "10",
    question: "Leverer ABC Sikkerhet over hele Norge?",
    answer:
      "Ja, ABC Sikkerhet leverer tjenester, utstyr og kurs over hele Norge. Vi har et godt utvalg av varer på lager fra Skylotec, Petzl og Actsafe, og kan skaffe det meste med kort leveringstid.",
    category: "generelt",
  },
  {
    id: "11",
    question: "Hva koster et kurs i fallsikring?",
    answer:
      "Pris på kurs varierer etter type kurs, antall deltakere og om det gjennomføres hos oss eller på din arbeidsplass. Kontakt oss på finn@abcfallsikring.no eller +47 33 74 08 88 for et tilbud tilpasset din bedrift.",
    category: "kurs",
  },
  {
    id: "12",
    question: "Kan jeg leie Actsafe taumoped?",
    answer:
      "Ja, ABC Sikkerhet tilbyr utleie av Actsafe PMX taumoped. Ta kontakt for pris og tilgjengelighet. Merk at brukere må ha gjennomgått godkjent opplæring for å leie og bruke taumopedene.",
    category: "utstyr",
  },
]
 
export function getAllFAQCategories(): FAQCategory[] {
  return faqCategories
}
 
export function getFAQsByCategory(categoryId: string): FAQ[] {
  return faqs.filter((faq) => faq.category === categoryId)
}
 
export function getAllFAQs(): FAQ[] {
  return faqs
}
 
export function searchFAQs(query: string): FAQ[] {
  const q = query.toLowerCase()
  return faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q)
  )
}
 
