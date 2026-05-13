import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const previewFaqs = [
  {
    question: 'Hvor ofte må fallsikringsutstyr kontrolleres?',
    answer: 'I henhold til NS-EN 365 skal alt personlig verneutstyr mot fall (PPE) kontrolleres minimum én gang per år av kompetent person. Ved intensiv bruk eller eksponering for kjemikalier, UV-stråling eller andre påkjenninger bør kontrollen utføres oftere.',
  },
  {
    question: 'Hva er forskjellen på rope access og tradisjonelt stillasarbeid?',
    answer: 'Rope access bruker industrielle klatreteknikker for å få tilgang til vanskelig tilgjengelige områder, ofte raskere og mer kostnadseffektivt enn stillas. Det krever mindre rigging, færre personell og minimerer fotavtrykk på arbeidsstedet.',
  },
  {
    question: 'Hvilke sertifiseringer kreves for arbeid i høyden?',
    answer: 'For generelt arbeid i høyden kreves dokumentert opplæring iht. Arbeidsmiljøloven. For rope access kreves soft-sertifisering (Level 1-3). Alle som arbeider med fallsikring bør ha gjennomført kurs i bruk av personlig verneutstyr.',
  },
  {
    question: 'Hva inkluderer en risikoanalyse for arbeid i høyden?',
    answer: 'En risikoanalyse inkluderer identifisering av farer, vurdering av sannsynlighet og konsekvens, forslag til risikoreduserende tiltak, samt utarbeidelse av SJA (Sikker Jobb Analyse) og beredskapsplaner.',
  },
]

export function FAQPreview() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Ofte stilte spørsmål
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Har du spørsmål om fallsikring?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Vi har samlet svar på de vanligste spørsmålene om fallsikring, arbeid i høyden, 
              regelverk og sertifisering.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Se alle spørsmål og svar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {previewFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
