export function Stats() {
  const stats = [
    { value: "15+", label: "Års erfaring" },
    { value: "500+", label: "Prosjekter fullført" },
    { value: "2000+", label: "Kursdeltakere" },
    { value: "100%", label: "Skadefrie oppdrag" },
  ]
 
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 
