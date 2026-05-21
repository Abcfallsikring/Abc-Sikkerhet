export function JsonLd() {
    const schema = {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ABC Fallsikring AS",
          alternateName: "ABC Fallsikring",
          url: "https://www.abcfallsikring.no",
          telephone: "+4733740888",
          email: "post@abcfallsikring.no",
          foundingDate: "2019",
          legalName: "ABC Fallsikring AS",
          taxID: "922 646 260",
          address: {
                  "@type": "PostalAddress",
                  streetAddress: "Korniveien 1",
                  addressLocality: "Barkåker",
                  postalCode: "3157",
                  addressRegion: "Vestfold",
                  addressCountry: "NO",
          },
          contactPoint: [
            {
                      "@type": "ContactPoint",
                      telephone: "+4733740888",
                      contactType: "customer service",
                      areaServed: "NO",
                      availableLanguage: "Norwegian",
            },
            {
                      "@type": "ContactPoint",
                      email: "kurs@abcfallsikring.no",
                      contactType: "sales",
                      areaServed: "NO",
                      availableLanguage: "Norwegian",
            },
                ],
          areaServed: { "@type": "Country", name: "Norway" },
          sameAs: ["https://www.abcfallsikring.no", "https://www.fallsikringsele.no"],
    }
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function WebsiteJsonLd() {
    const schema = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ABC Fallsikring AS",
          url: "https://www.fallsikringsele.no",
          publisher: {
                  "@type": "Organization",
                  name: "ABC Fallsikring AS",
                  url: "https://www.abcfallsikring.no",
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
          author: { "@type": "Person", name: author || "ABC Fallsikring AS" },
          publisher: { "@type": "Organization", name: "ABC Fallsikring AS", logo: { "@type": "ImageObject", url: "https://www.abcfallsikring.no/logo.png" } },
          mainEntityOfPage: { "@type": "WebPage", "@id": url || `https://www.fallsikringsele.no/blogg/${slug}` },
    }
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ServiceJsonLd({ name, description, slug, serviceType }: { name: string; description: string; slug: string; serviceType?: string }) {
    const schema = {
          "@context": "https://schema.org",
          "@type": "Service",
          name,
          description,
          serviceType: serviceType || name,
          provider: {
                  "@type": "Organization",
                  name: "ABC Fallsikring AS",
                  url: "https://www.abcfallsikring.no",
                  telephone: "+4733740888",
                  address: {
                            "@type": "PostalAddress",
                            streetAddress: "Korniveien 1",
                            postalCode: "3157",
                            addressLocality: "Barkåker",
                            addressCountry: "NO",
                  },
          },
          url: `https://www.fallsikringsele.no/tjenester/${slug}`,
          areaServed: { "@type": "Country", name: "Norway" },
    }
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function CourseJsonLd({
    name,
    description,
    price,
    duration,
    url,
    credential,
}: {
    name: string
    description: string
    price: string
    duration: string
    url: string
    credential: string
}) {
    const schema = {
          "@context": "https://schema.org",
          "@type": "Course",
          name,
          description,
          educationalCredentialAwarded: credential,
          timeRequired: duration,
          inLanguage: "nb",
          courseMode: "onsite",
          provider: {
                  "@type": "Organization",
                  name: "ABC Fallsikring AS",
                  url: "https://www.abcfallsikring.no",
                  telephone: "+4733740888",
                  address: {
                            "@type": "PostalAddress",
                            streetAddress: "Korniveien 1",
                            postalCode: "3157",
                            addressLocality: "Barkåker",
                            addressCountry: "NO",
                  },
          },
          offers: {
                  "@type": "Offer",
                  price,
                  priceCurrency: "NOK",
                  priceSpecification: {
                            "@type": "PriceSpecification",
                            price,
                            priceCurrency: "NOK",
                            valueAddedTaxIncluded: false,
                  },
                  availability: "https://schema.org/InStock",
                  url,
                  seller: { "@type": "Organization", name: "ABC Fallsikring AS" },
          },
          hasCourseInstance: {
                  "@type": "CourseInstance",
                  courseMode: "onsite",
                  location: {
                            "@type": "Place",
                            name: "Barkåker / Bedriftsinternt over hele Norge",
                            address: {
                                        "@type": "PostalAddress",
                                        streetAddress: "Korniveien 1",
                                        postalCode: "3157",
                                        addressLocality: "Barkåker",
                                        addressCountry: "NO",
                            },
                  },
          },
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
