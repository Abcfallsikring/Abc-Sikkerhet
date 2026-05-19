'use client'
import { useState } from 'react'
import { Shield, Phone, Mail, Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-zinc-900 text-zinc-300 text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 flex-wrap">
            <a href="tel:+4733740888" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={13} aria-hidden="true" />
              +47 33 74 08 88
            </a>
            <a href="mailto:post@abcfallsikring.no" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={13} aria-hidden="true" />
              post@abcfallsikring.no
            </a>
          </div>
          <div className="hidden md:block text-xs text-zinc-400">Godkjent kurs NS 9610 · ActSafe sertifisert</div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <a className="flex items-center gap-2 font-bold text-xl text-zinc-900" href="https://www.abcfallsikring.no/" aria-label="ABC Fallsikring AS hjemmeside">
            <Shield className="text-red-600" size={24} aria-hidden="true" />
            ABC Fallsikring
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors" href="https://www.abcfallsikring.no/categories/fallsikring">Utstyr</a>
            <a className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors" href="https://www.abcfallsikring.no/blog/category/fallsikring">Kurs</a>
            <a className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors" href="https://www.abcfallsikring.no/blog">Blogg</a>
            <a className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors" href="#faq">FAQ</a>
            <a className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md transition-colors" href="https://www.abcfallsikring.no/contact_us">Kontakt</a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label={open ? 'Lukk meny' : 'Åpne meny'}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-zinc-100 px-4 py-4 flex flex-col gap-4">
            <a className="text-zinc-700 font-medium" href="https://www.abcfallsikring.no/categories/fallsikring" onClick={() => setOpen(false)}>Utstyr</a>
            <a className="text-zinc-700 font-medium" href="https://www.abcfallsikring.no/blog/category/fallsikring" onClick={() => setOpen(false)}>Kurs</a>
            <a className="text-zinc-700 font-medium" href="https://www.abcfallsikring.no/blog" onClick={() => setOpen(false)}>Blogg</a>
            <a className="text-zinc-700 font-medium" href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a className="bg-red-600 text-white font-semibold px-5 py-2.5 rounded-md text-center" href="https://www.abcfallsikring.no/contact_us" onClick={() => setOpen(false)}>Kontakt oss</a>
          </div>
        )}
      </nav>
    </header>
  )
}
