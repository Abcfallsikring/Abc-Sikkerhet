export function Certifications() {
  const certs = [
    {
      name: "ISO 9001:2015",
      subtitle: "Kvalitetsledelse",
      description: "Sertifisert kvalitetsledelsessystem som sikrer konsistent høy kvalitet i alle våre tjenester og prosesser.",
    },
    {
      name: "ISO 45001:2018",
      subtitle: "HMS-ledelse",
      description: "Internasjonalt anerkjent standard for helse, miljø og sikkerhet på arbeidsplassen.",
    },
    {
      name: "IRATA",
      subtitle: "Industrial Rope Access",
      description: "Alle våre rope access-teknikere er sertifisert iht. IRATA-standarden – den høyeste internasjonale standarden for industriell klatring.",
    },
    {
      name: "SOFT",
      subtitle: "Skandinavisk Fallsikring",
      description: "Medlem av Skandinavisk organisasjon for fallsikringsteknikk – fagorganisasjonen for fallsikringsbransjen i Norden.",
    },
  ]
 
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Sertifiseringer og godkjenninger</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Våre sertifiseringer garanterer at vi følger de strengeste standarder for kvalitet, sikkerhet og profesjonalitet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert) => (
            <div key={cert.name} className="bg-card border border-border rounded-xl p-6">
              <div className="text-2xl font-bold text-primary mb-1">{cert.name}</div>
              <div className="text-sm font-medium text-foreground mb-3">{cert.subtitle}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 
