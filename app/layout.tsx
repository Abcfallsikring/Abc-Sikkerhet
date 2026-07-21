import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fallsikringsele.no'),
  title: {
    default: 'ABC Fallsikring AS – Utstyr, Kurs & Rådgivning for Arbeid i Høyden',
    template: '%s | ABC Fallsikring AS',
  },
  description:
    'ABC Fallsikring AS er Norges totalleverandør av fallsikringsutstyr, dokumentert opplæring og rådgivning. Stolpekurs NS 9610, ActSafe taumoped, tilkomstteknikk og redningssett.',
  authors: [{ name: 'ABC Fallsikring AS', url: 'https://www.abcfallsikring.no' }],
  keywords: [
    'fallsikring', 'fallsikringsutstyr', 'dokumentert opplæring', 'kurs fallsikring',
    'arbeid i høyden', 'tilkomstteknikk', 'rope access', 'redning i høyden',
    'stolpekurs', 'NS 9610', 'ActSafe taumoped', 'redningssett', 'Skylotec',
    'HMS', 'høydesikkerhet', 'ABC Fallsikring', 'abcfallsikring.no', 'Vestfold', 'Norge',
  ],
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://www.fallsikringsele.no',
    siteName: 'ABC Fallsikring AS',
    title: 'ABC Fallsikring AS – Utstyr, Kurs & Rådgivning for Arbeid i Høyden',
    description: 'Totalleverandør av dokumentert opplæring, utstyr og tjenester innen fallsikring, arbeid i tau og redning i høyden. Kontakt oss i dag.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABC Fallsikring AS – Fallsikring, Kurs & Utstyr',
    description: 'Totalleverandør av kurs, utstyr og tjenester innen fallsikring og arbeid i høyden. abcfallsikring.no',
  },
  alternates: { canonical: 'https://www.fallsikringsele.no' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.fallsikringsele.no/#business',
      name: 'ABC Fallsikring AS',
      alternateName: 'ABC Fallsikring',
      url: 'https://www.abcfallsikring.no',
      telephone: '+4733740888',
      email: 'post@abcfallsikring.no',
      description: 'Totalleverandør av dokumentert opplæring, utstyr og tjenester innen fallsikring, arbeid i tau og redning i høyden.',
      legalName: 'ABC Fallsikring AS',
      taxID: '922646260',
      foundingDate: '2019',
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
        opens: '07:00',
        closes: '16:00',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+4733740888',
          contactType: 'customer service',
          areaServed: 'NO',
          availableLanguage: 'Norwegian',
        },
        {
          '@type': 'ContactPoint',
          email: 'kurs@abcfallsikring.no',
          contactType: 'sales',
          areaServed: 'NO',
          availableLanguage: 'Norwegian',
        },
      ],
      priceRange: '$$',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fallsikring tjenester og kurs',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dokumentert opplæring fallsikring (NS 9610)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stolpekurs NS 9610' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tilkomstteknikk (Rope Access)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ActSafe taumoped kurs og salg' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Redningssett og beredskapsplan' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspeksjon og sertifisering av utstyr' } },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Fallsikringsutstyr Skylotec',
              description: 'Profesjonelt fallsikringsutstyr fra Skylotec – seler, falldempere og fallbremser for arbeid i høyden.',
              brand: { '@type': 'Brand', name: 'Skylotec' },
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                url: 'https://www.abcfallsikring.no/categories/fallsikring',
                seller: { '@type': 'Organization', name: 'ABC Fallsikring AS' },
              },
            },
          },
        ],
      },
      sameAs: [
        'https://www.abcfallsikring.no',
        'https://www.facebook.com/abcfallsikring/',
        'https://no.linkedin.com/company/abcfallsikring-no',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.fallsikringsele.no/#website',
      url: 'https://www.fallsikringsele.no',
      name: 'ABC Fallsikring AS',
      publisher: { '@id': 'https://www.fallsikringsele.no/#business' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
                  <script
                                dangerouslySetInnerHTML={{
                                                __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","wvm36k89mt");`,
                                }}
                              />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
