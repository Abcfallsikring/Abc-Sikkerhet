import { Shield, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <a className="flex items-center gap-2 font-bold text-xl text-white mb-4" href="https://www.abcfallsikring.no/">
              <Shield className="text-orange-500" size={24} aria-hidden="true" />
              ABC Fallsikring
            </a>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Totalleverandør av kurs, utstyr og tjenester innen fallsikring, arbeid i tau og redning i høyden. Org.nr: 922 646 260.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+4733740888" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="text-orange-500" aria-hidden="true" />+47 33 74 08 88
              </a>
              <a href="mailto:post@abcfallsikring.no" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-orange-500" aria-hidden="true" />post@abcfallsikring.no
              </a>
              <a href="mailto:kurs@abcfallsikring.no" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-orange-500" aria-hidden="true" />kurs@abcfallsikring.no
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-500 flex-shrink-0" aria-hidden="true" />
                Korniveien 1, 3157 Barkåker
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Tjenester</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link className="hover:text-white transition-colors" href="/tjenester/fallsikring">Fallsikring</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/tjenester/rope-access">Rope Access</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/tjenester/redningssett">Redningssett</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/tjenester/actsafe">Actsafe Taumopeder</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/tjenester/kurs">Kurs og opplæring</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/tjenester/inspeksjon">Inspeksjon</Link></li>
              <li><a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/" target="_blank" rel="noopener noreferrer">Nettbutikk</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Produktkategorier</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/categories/fallsikring" target="_blank" rel="noopener noreferrer">Fallsikringsutstyr</a></li>
              <li><a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/categories/sikringstau" target="_blank" rel="noopener noreferrer">Sikringstau</a></li>
              <li><a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/categories/forbindelsesliner" target="_blank" rel="noopener noreferrer">Forbindelsesliner</a></li>
              <li><a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/categories/stalkarabiner" target="_blank" rel="noopener noreferrer">Stålkarabiner</a></li>
              <li><a className="hover:text-white transition-colors" href="https://www.abcfallsikring.no/categories/verktoysikring" target="_blank" rel="noopener noreferrer">Verktøysikring</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Godkjenninger</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><span className="text-orange-500 font-medium">NS 9610</span><br /><span className="text-zinc-400">Stolpekurs</span></li>
              <li><span className="text-orange-500 font-medium">ActSafe sertifisert</span><br /><span className="text-zinc-400">Autorisert forhandler & opplæring</span></li>
              <li><span className="text-orange-500 font-medium">Skylotec partner</span><br /><span className="text-zinc-400">Autorisert forhandler</span></li>
              <li><span className="text-orange-500 font-medium">Org.nr 922 646 260</span><br /><span className="text-zinc-400">Registrert i Brønnøysund</span></li>
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
