export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ABC Sikkerhet AS",
    alternateName: "ABC Fallsikring",
    url: "https://abcfallsikring.no",
    logo: "https://abcfallsikring.no/logo.png",
    description:
      "ABC Sikkerhet AS er eksperter på fallsikring, arbeid i høyden, rope access og redningstjenester. Autorisert forhandler av Skylotec, Petzl og Actsafe taumopeder (ACX, ICX, PMX, PME, ACC). Godkjente redningssett og sertifiserte kurs over hele Norge.",
    foundingDate: "2010",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Korniveien 1",
      addressLocality: "Barkåker",
      postalCode: "3157",
      addressCountry: "NO",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+47-33-74-08-88",
        contactType: "customer service",
        email: "finn@abcfallsikring.no",
        availableLanguage: ["Norwegian"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/abcfallsikring",
      "https://www.linkedin.com/company/abc-fallsikring",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 9001:2015",
        description: "Kvalitetsledelse",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 45001:2018",
        description: "HMS-ledelse",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "IRATA",
        description: "Industrial Rope Access Trade Association",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "SOFT",
        description: "Skandinavisk organisasjon for fallsikring",
      },
    ],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://abcfallsikring.no/#organization",
    name: "ABC Sikkerhet AS",
    image: "https://abcfallsikring.no/logo.png",
    url: "https://abcfallsikring.no",
    telephone: "+47-33-74-08-88",
    email: "finn@abcfallsikring.no",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Korniveien 1",
      addressLocality: "Barkåker",
      postalCode: "3157",
      addressRegion: "Vestfold",
      addressCountry: "NO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 59.2833,
      longitude: 10.3833,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "16:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Norge",
    },
    knowsAbout: [
      "Fallsikring",
      "Arbeid i høyden",
      "Rope Access",
      "IRATA",
      "Redningssett",
      "Umiddelbar redning",
      "Skylotec",
      "Petzl",
      "Actsafe taumopeder",
      "ACX",
      "ICX",
      "PMX",
      "PME",
      "ACC",
      "Hengetrauma",
      "HMS",
      "Kurs fallsikring",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tjenester",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fallsikring",
            description: "Komplette fallsikringssystemer og utstyr for trygg arbeid i høyden.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rope Access",
            description: "IRATA-sertifisert rope access for vanskelig tilgjengelige områder.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Redningssett og umiddelbar redning",
            description:
              "Godkjente redningssett til byggeplass og arbeid i høyden. Beredskap for umiddelbar redning uten nødetater.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Actsafe taumopeder",
            description:
              "Salg, opplæring og sertifisering i Actsafe taumopeder: ACX, ICX, PMX, PME og ACC.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kurs og opplæring",
            description:
              "Sertifiserte kurs innen fallsikring, arbeid i høyden, redning og Actsafe taumopeder.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Inspeksjon",
            description: "Periodisk kontroll og sertifisering av fallsikringsutstyr.",
          },
        },
      ],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ABC Sikkerhet AS",
    url: "https://abcfallsikring.no",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://abcfallsikring.no/blogg?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
