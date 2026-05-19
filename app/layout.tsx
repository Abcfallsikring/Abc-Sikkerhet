import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABC Sikkerhet AS",
  description:
    "Norges eksperter på fallsikring, arbeid i høyden, rope access og redningstjenester. Sertifiserte løsninger for trygg arbeid i høyden.",
  keywords:
    "fallsikring,arbeid i høyden,rope access,industriell klatring,redningstjenester,HMS,sikkerhet,fallsikringsutstyr,sertifisering,kurs fallsikring,Norge,redningssett,actsafe,taumoped",
  authors: [{ name: "ABC Sikkerhet AS" }],
  openGraph: {
    title: "ABC Sikkerhet AS",
    description:
      "Norges eksperter på fallsikring, arbeid i høyden, rope access og redningstjenester.",
    siteName: "ABC Sikkerhet AS",
    locale: "nb_NO",
    type: "website",
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
        <SpeedInsights />
      </body>
    </html>
  )
}
