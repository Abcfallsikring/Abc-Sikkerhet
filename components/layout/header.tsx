'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a 
                href={`tel:${siteConfig.contact.phone}`} 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{siteConfig.contact.phone}</span>
              </a>
              <a 
                href={`mailto:${siteConfig.contact.email}`} 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{siteConfig.contact.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="hidden md:flex items-center gap-2">
                <span className="h-2 w-2 bg-success rounded-full animate-pulse" />
                ISO 9001 &amp; ISO 45001 Sertifisert
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
            : 'bg-background border-b border-border'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="h-10 w-10 lg:h-12 lg:w-12 bg-primary rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <span className="text-primary-foreground font-bold text-xl lg:text-2xl">H</span>
                </div>
                <div className="absolute -inset-1 bg-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg lg:text-xl text-foreground leading-tight">
                  Høyde Sikkerhet
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  Eksperter på arbeid i høyden
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {siteConfig.navigation.main.map((item) => (
                <div 
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors',
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary hover:bg-secondary'
                    )}
                  >
                    {item.title}
                    {item.children && (
                      <ChevronDown className={cn(
                        'h-4 w-4 transition-transform',
                        activeDropdown === item.href && 'rotate-180'
                      )} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.href && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="glass rounded-lg p-2 min-w-[220px] shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 text-sm rounded-md transition-colors',
                              pathname === child.href
                                ? 'text-primary bg-primary/10'
                                : 'text-foreground hover:text-primary hover:bg-secondary'
                            )}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Button asChild className="hidden sm:flex glow-yellow">
                <Link href="/kontakt">
                  Få tilbud
                </Link>
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label={isMobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {siteConfig.navigation.main.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors',
                        pathname === item.href
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-secondary'
                      )}
                      onClick={() => {
                        if (item.children) {
                          setActiveDropdown(activeDropdown === item.href ? null : item.href)
                        }
                      }}
                    >
                      {item.title}
                      {item.children && (
                        <ChevronDown className={cn(
                          'h-5 w-5 transition-transform',
                          activeDropdown === item.href && 'rotate-180'
                        )} />
                      )}
                    </Link>

                    {item.children && activeDropdown === item.href && (
                      <div className="ml-4 mt-2 flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'px-4 py-2 text-sm rounded-md transition-colors',
                              pathname === child.href
                                ? 'text-primary'
                                : 'text-muted-foreground hover:text-primary'
                            )}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="mt-4 w-full">
                  <Link href="/kontakt">Få tilbud</Link>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
