import { CheckCircle, Shield, Clock, Award, Users, Headphones } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Sikkerhet først',
    description: 'Alle våre operasjoner følger strenge sikkerhetsprotokoller og internasjonale standarder.',
  },
  {
    icon: Award,
    title: 'Sertifisert ekspertise',
    description: 'ISO 9001, ISO 45001 og soft-sertifiserte teknikere med omfattende erfaring.',
  },
  {
    icon: Clock,
    title: 'Rask respons',
    description: '24/7 beredskap for akutte oppdrag og redningstjenester.',
  },
  {
    icon: Users,
    title: 'Erfarne team',
    description: 'Over 15 års erfaring med komplekse prosjekter i hele Norge.',
  },
  {
    icon: CheckCircle,
    title: 'Kvalitetsgaranti',
    description: 'Vi står inne for kvaliteten på alt arbeid vi utfører.',
  },
  {
    icon: Headphones,
    title: 'Personlig oppfølging',
    description: 'Dedikert prosjektleder for hvert oppdrag sikrer god kommunikasjon.',
  },
]

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Hvorfor velge oss
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Din partner for trygt arbeid i høyden
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Med over 15 års erfaring i bransjen har vi utviklet løsninger og prosedyrer som setter 
              sikkerhet og kvalitet i fokus. Vi er stolte av vår track record med null skader på 
              over 500 gjennomførte prosjekter.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
