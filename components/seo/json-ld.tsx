export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ABC Sikkerhet AS",
    alternateName: "ABC Fallsikring",
    url: "https://abcfallsikring.no",
    telephone: "+47-33-74-08-88",
    email: "finn@abcfallsikring.no",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Korniveien 1",
      addressLocality: "Barkåker",
      postalCode: "3157",
      addressCountry: "NO",
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
 
export function FAQJsonLd({
  faqs,
  questions,
}: {
  faqs?: { question: string; answer: string }[]
  questions?: { question: string; answer: string }[]
}) {
  const items = faqs || questions || []
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
 
export function ArticleJsonLd({
  title, description, publishedAt, publishedTime, modifiedTime, updatedAt, slug, url, author,
}: {
  title: string; description: string; publishedAt?: string; publishedTime?: string
  modifiedTime?: string; updatedAt?: string; slug?: string; url?: string; author?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt || publishedTime,
    dateModified: updatedAt || modifiedTime,
    author: { "@type": "Person", name: author || "ABC Sikkerhet AS" },
    publisher: { "@type": "Organization", name: "ABC Sikkerhet AS", logo: { "@type": "ImageObject", url: "https://abcfallsikring.no/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": url || `https://abcfallsikring.no/blogg/${slug}` },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
 
export function ServiceJsonLd({ name, description, slug }: { name: string; description: string; slug: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name, description,
    provider: { "@type": "Organization", name: "ABC Sikkerhet AS", url: "https://abcfallsikring.no" },
    url: `https://abcfallsikring.no/tjenester/${slug}`,
    areaServed: { "@type": "Country", name: "Norge" },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
 
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
 
