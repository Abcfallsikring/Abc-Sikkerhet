import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://abcfallsikring.no"),
  title: {
    default: "ABC Sikkerhet AS – Fallsikring, Arbeid i høyden & Redning",
    template: "%s | ABC Sikkerhet AS",
  },
  description:
    "ABC Sikkerhet AS er eksperter på fallsikring, arbeid i høyden, rope access og redningstjenester. Vi leverer Skylotec, Petzl og Actsafe taumopeder (ACX, ICX, PMX, PME, ACC). Sertifiserte kurs og godkjente redningssett til byggeplass.",
  keywords: [
    "fallsikring", "arbeid i høyden", "rope access", "industriell klatring",
    "redningstjenester", "redningssett", "umiddelbar redning", "HMS",
    "fallsikringsutstyr", "kurs fallsikring", "Norge", "Skylotec", "Petzl",
    "Actsafe", "taumoped", "ACX", "ICX", "PMX", "PME", "ACC", "IRATA",
    "SOFT", "hengetrauma", "fallsele", "ABC fallsikring", "ABC Sikkerhet",
  ],
  authors: [{ name: "ABC Sikkerhet AS", url: "https://abcfallsikring.no" }],
  creator: "ABC Sikkerhet AS",
  publisher: "ABC Sikkerhet AS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ABC Sikkerhet AS – Fallsikring, Arbeid i høyden & Redning",
    description:
      "Eksperter på fallsikring, arbeid i høyden og redningstjenester. Skylotec, Petzl og Actsafe taumopeder. Godkjente redningssett og sertifiserte kurs.",
    url: "https://abcfallsikring.no",
    siteName: "ABC Sikkerhet AS",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC Sikkerhet AS – Fallsikring & Arbeid i høyden",
    description:
      "Eksperter på fallsikring, arbeid i høyden og redningstjenester. Skylotec, Petzl og Actsafe.",
  },
  alternates: {
    canonical: "https://abcfallsikring.no",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
