import { Award, Shield, CheckCircle, FileCheck } from 'lucide-react'

const certifications = [
  {
    icon: Shield,
    name: 'ISO 9001:2015',
    description: 'Kvalitetsledelsessystem',
    details: 'Sertifisert kvalitetsledelse som sikrer konsistent høy kvalitet i alle våre tjenester.',
  },
  {
    icon: Award,
    name: 'ISO 45001:2018',
    description: 'HMS-ledelsessystem',
    details: 'Internasjonalt anerkjent standard for helse, miljø og sikkerhet på arbeidsplassen.',
  },
  {
    icon: CheckCircle,
    name: 'IRATA',
    description: 'Industrial Rope Access',
    details: 'Alle våre rope access-teknikere er sertifisert iht. IRATA-standarden.',
  },
  {
    icon: FileCheck,
    name: 'SOFT',
    description: 'Skandinavisk Fallsikring',
    details: 'Medlem av Skandinavisk organisasjon for fallsikringsteknikk.',
  },
]

export function Certifications() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Sertifiseringer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Kvalitet og sikkerhet du kan stole på
          </h2>
          <p className="text-lg text-muted-foreground">
            Våre sertifiseringer garanterer at vi følger de strengeste standarder for kvalitet, 
            sikkerhet og profesjonalitet.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors group"
            >
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <cert.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{cert.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{cert.description}</p>
              <p className="text-sm text-muted-foreground">{cert.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
