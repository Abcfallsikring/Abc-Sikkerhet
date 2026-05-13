import Link from "next/link"
import { Shield, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <Shield className="text-orange-500" size={24} />
              ABC Sikkerhet
            </Link>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Eksperter på fallsikring, arbeid i høyden og redningstjenester. Vi leverer trygge løsninger for industri, bygg og offshore – inkludert redningssett og Actsafe taumopeder.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a  href="tel:+4733740888" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="text-orange-500" />
                +47 33 74 08 88
              </a>
              <a href="mailto:finn@abcfallsikring.no" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-orange-500" />
                finn@abcfallsikring.no
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-500" />
                Norge
              </span>
            </div>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tjenester</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "Fallsikring", href: "/tjenester/fallsikring" },
                { label: "Rope Access", href: "/tjenester/rope-access" },
                { label: "Redningstjenester", href: "/tjenester/redningstjenester" },
                { label: "Redningssett", href: "/tjenester/redningssett" },
                { label: "Actsafe Taumopeder", href: "/tjenester/actsafe" },
                { label: "Kurs og opplæring", href: "/tjenester/kurs" },
                { label: "Inspeksjon", href: "/tjenester/inspeksjon" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Selskapet */}
          <div>
            <h3 className="text-white font-semibold mb-4">Selskapet</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "Om oss", href: "/om-oss" },
                { label: "Vårt team", href: "/om-oss#team" },
                { label: "Karriere", href: "/karriere" },
                { label: "Sertifiseringer", href: "/om-oss#sertifiseringer" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sertifiseringer */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sertifiseringer</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><span className="text-orange-500 font-medium">ISO 9001:2015</span><br /><span className="text-zinc-400">Kvalitetsledelse</span></li>
              <li><span className="text-orange-500 font-medium">ISO 45001:2018</span><br /><span className="text-zinc-400">HMS-ledelse</span></li>
              <li><span className="text-orange-500 font-medium">soft</span><br /><span className="text-zinc-400">Industrial Rope Access</span></li>
              <li><span className="text-orange-500 font-medium">SOFT</span><br /><span className="text-zinc-400">Skandinavisk organisasjon for fallsikring</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© 2026 ABC Sikkerhet AS. Alle rettigheter reservert.</p>
          <div className="flex gap-6">
            <Link href="/personvern" className="hover:text-white transition-colors">Personvern</Link>
            <Link href="/vilkar" className="hover:text-white transition-colors">Vilkår</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
