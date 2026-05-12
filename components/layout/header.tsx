"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail, Shield } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-zinc-900 text-zinc-300 text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+4799999999" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={13} />
              +47 99 99 99 99
            </a>
            <a href="mailto:finn@abcfallsikring.no" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={13} />
              finn@abcfallsikring.no
            </a>
          </div>
          <div className="hidden md:block text-xs text-zinc-400">
            ISO 9001 &amp; ISO 45001 Sertifisert
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-zinc-900">
            <Shield className="text-orange-500" size={24} />
            ABC Sikkerhet
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/tjenester" className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors">Tjenester</Link>
            <Link href="/om-oss" className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors">Om oss</Link>
            <Link href="/blogg" className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors">Blogg</Link>
            <Link href="/faq" className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors">FAQ</Link>
            <Link
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-md transition-colors"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-zinc-100 bg-white px-4 py-4 flex flex-col gap-4">
            <Link href="/tjenester" className="text-zinc-700 font-medium" onClick={() => setIsOpen(false)}>Tjenester</Link>
            <Link href="/om-oss" className="text-zinc-700 font-medium" onClick={() => setIsOpen(false)}>Om oss</Link>
            <Link href="/blogg" className="text-zinc-700 font-medium" onClick={() => setIsOpen(false)}>Blogg</Link>
            <Link href="/faq" className="text-zinc-700 font-medium" onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link href="/kontakt" className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md text-center" onClick={() => setIsOpen(false)}>Kontakt oss</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
