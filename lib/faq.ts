export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
}

export interface FAQCategoryWithCount {
  name: string
  count: number
}

export const faqs: FAQ[] = [
  { id: "1", question: "Hva er arbeid i høyden?", answer: "Arbeid i høyden er alt arbeid hvor det er fare for fall til et lavere nivå. Dette inkluderer arbeid på stillas, stige, tak og andre høyder. Krav om sikringsinnretninger trer i kraft ved 2 meters høyde eller mer.", category: "Generelt", tags: ["arbeid i høyden", "definisjon", "regelverk"] },
  { id: "2", question: "Hva krever Arbeidstilsynet av fallsikring?", answer: "Arbeidstilsynet krever at arbeidsgiver planlegger og gjennomfører arbeid i høyden på en sikker måte. Kollektiv fallsikring skal prioriteres fremfor personlig verneutstyr. Arbeidstaker skal ha dokumentert opplæring i bruk av utstyr.", category: "Regelverk", tags: ["arbeidstilsynet", "krav", "fallsikring"] },
  { id: "3", question: "Hva er tilstrekkelig opplæring for arbeid i høyden?", answer: "Opplæringen skal være både teoretisk og praktisk iht. NS 9610. For stillas 2–5 m kreves 7,5 timer teori og 7,5 timer praksis under tilsyn av kvalifisert person. For stillas 5–9 m kreves 15 timer teori og 15 timer praksis.", category: "Kurs og opplæring", tags: ["opplæring", "kurs", "stillas", "kompetanse", "NS 9610"] },
  { id: "4", question: "Hvor ofte må fallsikringsutstyr kontrolleres?", answer: "Alt personlig fallsikringsutstyr skal inn til periodisk kontroll hvert 12. måned. I tillegg skal utstyret inspiseres visuelt av brukeren før hver bruk. Skadet utstyr skal tas ut av bruk umiddelbart.", category: "Inspeksjon", tags: ["kontroll", "inspeksjon", "utstyr", "periodisk"] },
  { id: "5", question: "Hva er et redningssett og er det lovpålagt?", answer: "Et redningssett inneholder utstyr for å hente ned en person fra høyden uten hjelp fra nødetatene. Arbeidsgiver er lovpålagt å sørge for redningsplan og nødvendig utstyr for umiddelbar redning ved all bruk av personlig fallsikringsutstyr.", category: "Redning", tags: ["redningssett", "lovpålagt", "beredskap"] },
  { id: "6", question: "Hva er hengetrauma?", answer: "Hengetrauma (ortostatisk sjokk) oppstår når en person henger passivt i fallsele. Blodet samler seg i underkroppen og hjernen får ikke nok oksygen. Bevisstløshet kan inntreffe på 3–5 minutter – derfor er umiddelbar redning et lovkrav.", category: "Redning", tags: ["hengetrauma", "sikkerhet", "redning", "fallsele"] },
  { id: "7", question: "Hva er rope access?", answer: "Rope access bruker tau og spesialisert klatreteknikk for å nå steder som er vanskelig tilgjengelig. Det er raskere å rigge opp, krever mindre plass og er ofte langt rimeligere enn stillas. ABC Sikkerhet har sertifiserte rope access-teknikere.", category: "Generelt", tags: ["rope access", "stillas", "tilkomstteknikk"] },
  { id: "8", question: "Hva er Actsafe taumoped og hvem bruker det?", answer: "Actsafe er motoriserte taumopeder som gjør vertikal forflytning i tau enklere og raskere. ABC Sikkerhet fører ACX, ICX, PMX, PME og ACC. De brukes av vindturbinteknikere, industrielle klatrere, tårnkranoperatører og redningsmannskap.", category: "Utstyr", tags: ["actsafe", "taumoped", "ACX", "ICX", "PMX"] },
  { id: "9", question: "Hvilke sertifiseringer har ABC Sikkerhet?", answer: "ABC Sikkerhet AS er sertifisert etter ISO 9001:2015 (kvalitetsledelse) og ISO 45001:2018 (HMS-ledelse). Vi er også medlem av SOFT (Skandinavisk organisasjon for fallsikring).", category: "Generelt", tags: ["ISO", "SOFT", "sertifisering"] },
  { id: "10", question: "Leverer ABC Sikkerhet over hele Norge?", answer: "Ja, ABC Sikkerhet leverer tjenester, utstyr og kurs over hele Norge. Vi har et godt utvalg av varer på lager fra Skylotec, Petzl og Actsafe, og kan skaffe det meste med kort leveringstid.", category: "Generelt", tags: ["Norge", "levering", "lager"] },
  { id: "11", question: "Hva koster et kurs i fallsikring?", answer: "Fallsikringskurs (NS 9610) koster kr 3 750,- ekskl. mva per person. Oppfriskningskurs koster kr 1 950,- ekskl. mva. Bedriftsinterne kurs tilpasses – kontakt oss på kurs@abcfallsikring.no eller +47 33 74 08 88.", category: "Kurs og opplæring", tags: ["kurs", "pris", "opplæring", "NS 9610"] },
  { id: "12", question: "Kan jeg leie Actsafe taumoped?", answer: "Ja, ABC Sikkerhet tilbyr utleie av Actsafe PMX taumoped. Ta kontakt for pris og tilgjengelighet. Brukere må ha gjennomgått godkjent opplæring for å leie og bruke taumopedene.", category: "Utstyr", tags: ["utleie", "actsafe", "PMX", "taumoped"] },
]

export const faqCategories = ["Generelt", "Regelverk", "Kurs og opplæring", "Inspeksjon", "Redning", "Utstyr"]

export function getAllFAQCategories(): FAQCategoryWithCount[] {
  return faqCategories.map((name) => ({
    name,
    count: faqs.filter((faq) => faq.category === name).length,
  }))
}

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((faq) => faq.category === category)
}

export function getAllFAQs(): FAQ[] {
  return faqs
}

export function searchFAQs(query: string): FAQ[] {
  const q = query.toLowerCase()
  return faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(q))
  )
}
