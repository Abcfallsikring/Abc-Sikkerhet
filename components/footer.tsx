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
              ABC Fallsikring AS
            </Link>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Totalleverandør av fallsikringsutstyr, dokumentert opplæring og rådgivning for arbeid i høyden. Tilkomstteknikk, redningssett og ActSafe taumopeder. Org.nr: 922 646 260.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+4733740888" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="text-orange-500" />
                +47 33 74 08 88
              </a>
              <a href="mailto:post@abcfallsikring.no" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-orange-500" />
                post@abcfallsikring.no
              </a>
              <a href="mailto:kurs@abcfallsikring.no" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-orange-500" />
                kurs@abcfallsikring.no
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-500" />
                Korniveien 1, 3157 Barkåker
              </span>
            </div>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tjenester</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "Fallsikring", href: "/tjenester/fallsikring" },
                { label: "Tilkomstteknikk (Rope Access)", href: "/tjenester/rope-access" },
                { label: "Redningssett", href: "/tjenester/redningssett" },
                { label: "ActSafe Taumopeder", href: "/tjenester/actsafe" },
                { label: "Kurs og opplæring", href: "/tjenester/kurs" },
                { label: "Inspeksjon", href: "/tjenester/inspeksjon" },
                { label: "Risikoanalyse", href: "/tjenester/risikoanalyse" },
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
                { label: "Blogg", href: "/blogg" },
                { label: "FAQ", href: "/faq" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Godkjenninger */}
          <div>
            <h3 className="text-white font-semibold mb-4">Godkjenninger</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <span className="text-orange-500 font-medium">NS 9610</span>
                <br /><span className="text-zinc-400">Godkjent kurs fallsikring</span>
              </li>
              <li>
                <span className="text-orange-500 font-medium">ActSafe sertifisert</span>
                <br /><span className="text-zinc-400">Autorisert forhandler & opplæring</span>
              </li>
              <li>
                <span className="text-orange-500 font-medium">Skylotec partner</span>
                <br /><span className="text-zinc-400">Autorisert forhandler</span>
              </li>
              <li>
                <span className="text-orange-500 font-medium">Org.nr 922 646 260</span>
                <br /><span className="text-zinc-400">Registrert i Brønnøysund</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© 2026 ABC Fallsikring AS · Alle rettigheter reservert · <a href="https://www.abcfallsikring.no" className="hover:text-white transition-colors">abcfallsikring.no</a></p>
          <div className="flex gap-6">
            <Link href="/personvern" className="hover:text-white transition-colors">Personvern</Link>
            <Link href="/vilkar" className="hover:text-white transition-colors">Vilkår</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
