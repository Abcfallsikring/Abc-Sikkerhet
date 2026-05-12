export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ABC Sikkerhet AS",
    alternateName: "ABC Fallsikring",
    url: "https://abcfallsikring.no",
    logo: "https://abcfallsikring.no/logo.png",
    description: "ABC Sikkerhet AS er eksperter på fallsikring, arbeid i høyden, rope access og redningstjenester. Autorisert forhandler av Skylotec, Petzl og Actsafe taumopeder (ACX, ICX, PMX, PME, ACC).",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Korniveien 1",
      addressLocality: "Barkåker",
      postalCode: "3157",
      addressCountry: "NO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+47-33-74-08-88",
      contactType: "customer service",
      email: "finn@abcfallsikring.no",
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://abcfallsikring.no/#organization",
    name: "ABC Sikkerhet AS",
    url: "https://abcfallsikring.no",
    telephone: "+47-33-74-08-88",
    email: "finn@abcfallsikring.no",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Korniveien 1",
      addressLocality: "Barkåker",
      postalCode: "3157",
      addressRegion: "Vestfold",
      addressCountry: "NO",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "16:00",
      },
    ],
    areaServed: { "@type": "Country", name: "Norge" },
    knowsAbout: [
      "Fallsikring", "Arbeid i høyden", "Rope Access", "IRATA",
      "Redningssett", "Umiddelbar redning", "Skylotec", "Petzl",
      "Actsafe taumopeder", "ACX", "ICX", "PMX", "PME", "ACC",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ABC Sikkerhet AS",
    url: "https://abcfallsikring.no",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  )
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  )
}

export function ArticleJsonLd({
  title,
  description,
  publishedAt,
  slug,
}: {
  title: string
  description: string
  publishedAt: string
  slug: string
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: publishedAt,
    author: {
      "@type": "Organization",
      name: "ABC Sikkerhet AS",
      url: "https://abcfallsikring.no",
    },
    publisher: {
      "@type": "Organization",
      name: "ABC Sikkerhet AS",
      logo: {
        "@type": "ImageObject",
        url: "https://abcfallsikring.no/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://abcfallsikring.no/blogg/${slug}`,
    },
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
  )
}

export function ServiceJsonLd({
  name,
  description,
  slug,
}: {
  name: string
  description: string
  slug: string
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: "ABC Sikkerhet AS",
      url: "https://abcfallsikring.no",
    },
    url: `https://abcfallsikring.no/tjenester/${slug}`,
    areaServed: { "@type": "Country", name: "Norge" },
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}
