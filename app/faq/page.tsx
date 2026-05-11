import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import { faqs, faqCategories, getAllFAQCategories } from '@/lib/faq'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/seo/json-ld'
import { FAQSearch } from '@/components/faq/faq-search'
import { FAQAccordion } from '@/components/faq/faq-accordion'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'FAQ - Ofte stilte spørsmål om fallsikring og arbeid i høyden',
  description: 'Finn svar på vanlige spørsmål om fallsikring, arbeid i høyden, regelverk, kurs, utstyr og sertifisering. Ekspertsvar fra erfarne fagfolk.',
  openGraph: {
    title: 'FAQ - Ofte stilte spørsmål | Høyde Sikkerhet',
    description: 'Finn svar på spørsmål om fallsikring, arbeid i høyden og regelverk.',
    url: `${siteConfig.url}/faq`,
  },
}

export default function FAQPage() {
  const categories = getAllFAQCategories()

  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: 'Hjem', url: siteConfig.url },
          { name: 'FAQ', url: `${siteConfig.url}/faq` },
        ]} 
      />
      <FAQJsonLd 
        questions={faqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))} 
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Ofte stilte spørsmål
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Har du spørsmål om fallsikring?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Vi har samlet svar på de vanligste spørsmålene om fallsikring, arbeid i høyden, 
              regelverk, utstyr og sertifisering. Finner du ikke svaret? Kontakt oss!
            </p>
            <FAQSearch />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-sm text-muted-foreground whitespace-nowrap">Kategorier:</span>
            <a
              href="#alle"
              className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full whitespace-nowrap"
            >
              Alle ({faqs.length})
            </a>
            {categories.map((category) => (
              <a
                key={category.name}
                href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-colors whitespace-nowrap"
              >
                {category.name} ({category.count})
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category) => {
              const categoryFaqs = faqs.filter((faq) => faq.category === category)
              if (categoryFaqs.length === 0) return null

              return (
                <div 
                  key={category} 
                  id={category.toLowerCase().replace(/\s+/g, '-')}
                  className="mb-12 last:mb-0 scroll-mt-24"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="h-8 w-1 bg-primary rounded-full" />
                    {category}
                  </h2>
                  <FAQAccordion faqs={categoryFaqs} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Fant du ikke svaret du lette etter?
            </h2>
            <p className="text-muted-foreground mb-6">
              Kontakt oss direkte, så hjelper vi deg med ditt spørsmål.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Ring oss: {siteConfig.contact.phone}
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                Send melding
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
