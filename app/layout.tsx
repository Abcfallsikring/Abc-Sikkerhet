import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abcfallsikring.no'),
  title: {
    default: 'ABC Fallsikring AS – Utstyr, Kurs & Rådgivning for Arbeid i Høyden',
    template: '%s | ABC Fallsikring AS',
  },
  description:
    'ABC Fallsikring AS er Norges totalleverandør av fallsikringsutstyr, sertifiserte kurs og rådgivning. Stolpekurs NS 9610, ActSafe taumoped, rope access og redningssett. Besøk abcfallsikring.no.',
  authors: [{ name: 'ABC Fallsikring AS', url: 'https://www.abcfallsikring.no' }],
  keywords: [
    'fallsikring', 'fallsikringsutstyr', 'kurs fallsikring', 'arbeid i høyden',
    'arbeid i tau', 'redning i høyden', 'stolpekurs', 'NS 9610', 'ActSafe taumoped',
    'rope access', 'redningssett', 'Skylotec', 'HMS', 'høydesikkerhet',
    'ABC Fallsikring', 'abcfallsikring.no', 'Tønsberg', 'Vestfold', 'Norge',
  ],
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://www.abcfallsikring.no',
    siteName: 'ABC Fallsikring AS',
    title: 'ABC Fallsikring AS – Utstyr, Kurs & Rådgivning for Arbeid i Høyden',
    description: 'Totalleverandør av kurs, utstyr og tjenester innen fallsikring, arbeid i tau og redning i høyden. Kontakt oss i dag.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABC Fallsikring AS – Fallsikring, Kurs & Utstyr',
    description: 'Totalleverandør av kurs, utstyr og tjenester innen fallsikring og arbeid i høyden. abcfallsikring.no',
  },
  alternates: { canonical: 'https://www.abcfallsikring.no' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.abcfallsikring.no/#business',
      name: 'ABC Fallsikring AS',
      alternateName: 'ABC Fallsikring',
      url: 'https://www.abcfallsikring.no',
      telephone: '+4733740888',
      email: 'post@abcfallsikring.no',
      description: 'Totalleverandør av kurs, utstyr og tjenester innen fallsikring, arbeid i tau og redning i høyden.',
      legalName: 'ABC Fallsikring AS',
      taxID: '922646260',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Korniveien 1',
        addressLocality: 'Barkåker',
        postalCode: '3157',
        addressRegion: 'Vestfold',
        addressCountry: 'NO',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 59.2638, longitude: 10.4029 },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
      priceRange: '$$',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fallsikring produkter og kurs',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stolpekurs NS 9610' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kurs i arbeid i tau' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ActSafe taumoped kurs' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Redningssett og beredskapsplan' } },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Fallsikringsutstyr Skylotec',
              description: 'Profesjonelt fallsikringsutstyr fra Skylotec – seler, falldempere og fallbremser for arbeid i høyden.',
              brand: { '@type': 'Brand', name: 'Skylotec' },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'NOK',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  price: '0',
                  priceCurrency: 'NOK',
                  description: 'Kontakt oss for pris',
                },
                availability: 'https://schema.org/InStock',
                url: 'https://www.abcfallsikring.no/categories/fallsikring',
                seller: { '@type': 'Organization', name: 'ABC Fallsikring AS' },
              },
            },
          },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspeksjon og sertifisering av utstyr' } },
        ],
      },
      sameAs: [
        'https://www.facebook.com/abcfallsikring/',
        'https://no.linkedin.com/company/abcfallsikring-no',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.abcfallsikring.no/#website',
      url: 'https://www.abcfallsikring.no',
      name: 'ABC Fallsikring AS',
      publisher: { '@id': 'https://www.abcfallsikring.no/#business' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hva slags kurs tilbyr ABC Fallsikring?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ABC Fallsikring tilbyr stolpekurs tilpasset NS 9610 og REN-metode (8 timer, maks 6 deltakere), kurs i arbeid i tau, og godkjent opplæring på ActSafe taumoped fra Skylotec. Kurspriser starter fra kr 4.600,-.',
          },
        },
        {
          '@type': 'Question',
          name: 'Hva kreves for arbeid i stolpe i Norge?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Norske myndigheter krever at arbeidstakere som skal jobbe i stolpe kan dokumentere praktisk og teoretisk opplæring. ABC Fallsikring tilbyr sertifisert kurs på 8 timer som dekker alt teori og praktisk.',
          },
        },
        {
          '@type': 'Question',
          name: 'Hva er et redningssett og er det lovpålagt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Norsk regelverk krever at det alltid skal finnes et godkjent redningssett tilgjengelig ved arbeid i høyden. ABC Fallsikring leverer godkjente redningssett og tilhørende opplæring.',
          },
        },
        {
          '@type': 'Question',
          name: 'Hvor er ABC Fallsikring AS lokalisert?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ABC Fallsikring AS holder til på Korniveien 1, 3157 Barkåker i Tønsberg-området. Telefon: 33 74 08 88, e-post: post@abcfallsikring.no.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
