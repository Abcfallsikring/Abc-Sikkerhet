import Link from 'next/link'
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">H</span>
              </div>
              <span className="font-bold text-xl text-foreground">Høyde Sikkerhet</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Norges ledende eksperter på fallsikring, arbeid i høyden og redningstjenester. 
              Vi leverer trygge løsninger for industri, bygg og offshore.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                {siteConfig.contact.phone}
              </a>
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                {siteConfig.contact.address}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Tjenester</h3>
            <ul className="space-y-3">
              {siteConfig.navigation.footer.services.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Selskapet</h3>
            <ul className="space-y-3">
              {siteConfig.navigation.footer.company.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Ressurser</h3>
            <ul className="space-y-3">
              {siteConfig.navigation.footer.resources.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-semibold text-foreground mb-4 text-center">Sertifiseringer</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {siteConfig.certifications.map((cert) => (
              <div 
                key={cert.name}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg"
              >
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span className="text-sm font-medium text-foreground">{cert.name}</span>
                <span className="text-xs text-muted-foreground">- {cert.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Text Section */}
      <div className="border-t border-border bg-background/50">
        <div className="container mx-auto px-4 py-8">
          <p className="text-sm text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            Høyde Sikkerhet AS er en ledende leverandør av fallsikringsløsninger og tjenester i Norge. 
            Vi tilbyr sertifiserte kurs innen fallsikring, rope access (IRATA), arbeid i høyden og redningstjenester. 
            Våre eksperter hjelper bedrifter med å overholde Arbeidstilsynets krav, NS-EN 363, NS-EN 365 og andre relevante standarder. 
            Vi leverer til industri, bygg, offshore, vindkraft og solenergi over hele Norge.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Høyde Sikkerhet AS. Alle rettigheter reservert.</p>
            <div className="flex items-center gap-6">
              {siteConfig.navigation.footer.legal.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
