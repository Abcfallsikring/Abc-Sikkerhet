import { Shield, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a className="flex items-center gap-2 font-bold text-xl text-white mb-4" href="https://www.abcfallsikring.no/">
              <Shield className="text-red-500" size={24} aria-hidden="true" />
              ABC Fallsikring
            </a>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Totalleverandør av kurs, utstyr og tjenester innen fallsikring, arbeid i tau og redning i høyden. Org.nr: 922 646 260.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+4733740888" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="text-red-500" aria-hidden="true" />
                +47 33 74 08 88
              </a>
              <a href="mailto:post@abcfallsikring.no" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-red-500" aria-hidden="true" />
                post@abcfallsikring.no
              </a>
              <a href="mailto:kurs@abcfallsikring.no" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-red-500" aria-hidden="true" />
                kurs@abcfallsikring.no
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-red-500 flex-shrink-0" aria-hidden="true" />
                Korniveien 1, 3157 Barkåker
              </span>
            </div>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produkter & tjenester</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: 'Fallsikringsutstyr', href: 'https://www.abcfallsikring.no/categories/fallsikring' },
                { label: 'Sikringstau', href: 'https://www.abcfallsikring.no/categories/sikringstau' },
                { label: 'Forbindelsesliner', href: 'https://www.abcfallsikring.no/categories/forbindelsesliner' },
                { label: 'Stålkarabiner', href: 'https://www.abcfallsikring.no/categories/stalkarabiner' },
                { label: 'Verktøysikring', href: 'https://www.abcfallsikring.no/categories/verktoysikring' },
                { label: 'Kurs og opplæring', href: 'https://www.abcfallsikring.no/blog/category/fallsikring' },
                { label: 'Nettbutikk', href: 'https://www.abcfallsikring.no/' },
              ].map((item) => (
                <li key={item.href}>
                  <a className="hover:text-white transition-colors" href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kurs</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/contact_us">Stolpekurs NS 9610</a></li>
              <li><a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/contact_us">ActSafe taumoped kurs</a></li>
              <li><a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/contact_us">Bedriftsinterne kurs</a></li>
              <li><a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/contact_us">Redningskurs</a></li>
              <li><a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/contact_us">Arbeid i tau</a></li>
            </ul>
          </div>

          {/* Sertifiseringer */}
          <div>
            <h3 className="text-white font-semibold mb-4">Godkjenninger</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <span className="text-red-400 font-medium">NS 9610</span><br />
                <span className="text-zinc-400">Stolpekurs</span>
              </li>
              <li>
                <span className="text-red-400 font-medium">ActSafe sertifisert</span><br />
                <span className="text-zinc-400">Autorisert forhandler & opplæring</span>
              </li>
              <li>
                <span className="text-red-400 font-medium">Skylotec partner</span><br />
                <span className="text-zinc-400">Autorisert forhandler</span>
              </li>
              <li>
                <span className="text-red-400 font-medium">Org.nr 922 646 260</span><br />
                <span className="text-zinc-400">Registrert i Brønnøysund</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© 2026 ABC Fallsikring AS · Alle rettigheter reservert · <a href="https://www.abcfallsikring.no" className="hover:text-white transition-colors">abcfallsikring.no</a></p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/pages/conditions">Salgsbetingelser</a>
            <a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/contact_us">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
