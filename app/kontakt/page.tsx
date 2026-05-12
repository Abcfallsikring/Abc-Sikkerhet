"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react"

export default function KontaktPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [formData, setFormData] = useState({
    navn: "",
    bedrift: "",
    epost: "",
    telefon: "",
    tjeneste: "",
    melding: "",
    samtykke: false,
  })

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setStatus("sending")

    // Sender via mailto-fallback + fetch til API-rute
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus("sent")
      } else {
        throw new Error("Feil")
      }
    } catch {
      // Fallback: åpne e-postklient
      const body = encodeURIComponent(
        `Navn: ${formData.navn}\nBedrift: ${formData.bedrift}\nTelefon: ${formData.telefon}\nTjeneste: ${formData.tjeneste}\n\n${formData.melding}`
      )
      window.location.href = `mailto:finn@abcfallsikring.no?subject=Henvendelse fra ${formData.navn}&body=${body}`
      setStatus("sent")
    }
  }

  const update = (field: string, value: string | boolean) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">La oss snakke om ditt prosjekt</h1>
          <p className="text-zinc-400 text-lg">
            Kontakt oss for en uforpliktende samtale. Gratis befaring og rådgivning.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">
        {/* Kontaktinfo */}
        <div className="md:col-span-1 space-y-8">
          <div>
            <h2 className="text-lg font-bold text-zinc-900 mb-4">Kontaktinformasjon</h2>
            <div className="space-y-4">
              <a
                href="tel:+4799999999"
                className="flex items-start gap-3 text-zinc-600 hover:text-orange-500 transition-colors"
              >
                <Phone size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-zinc-800">Telefon</div>
                  <div>+47 99 99 99 99</div>
                </div>
              </a>
              <a
                href="mailto:finn@abcfallsikring.no"
                className="flex items-start gap-3 text-zinc-600 hover:text-orange-500 transition-colors"
              >
                <Mail size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-zinc-800">E-post</div>
                  <div>finn@abcfallsikring.no</div>
                </div>
              </a>
              <div className="flex items-start gap-3 text-zinc-600">
                <MapPin size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-zinc-800">Adresse</div>
                  <div>Norge</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-zinc-600">
                <Clock size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-zinc-800">Åpningstider</div>
                  <div>Man–Fre: 07:00–16:00</div>
                  <div className="text-sm text-zinc-400">24/7 beredskap for akutte oppdrag</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <h3 className="font-semibold text-zinc-900 mb-3">Rask respons</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              {["Svar innen 24 timer", "Gratis befaring", "Uforpliktende tilbud", "Konkurransedyktige priser"].map(
                (p) => (
                  <li key={p} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-orange-500" />
                    {p}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Skjema */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
          {status === "sent" ? (
            <div className="text-center py-12">
              <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Takk for din henvendelse!</h3>
              <p className="text-zinc-500">
                Vi har mottatt meldingen din og tar kontakt innen 24 timer.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-zinc-900 mb-6">Send oss en melding</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Navn <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.navn}
                    onChange={(e) => update("navn", e.target.value)}
                    className="w-full border border-zinc-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="Ditt navn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">Bedrift</label>
                  <input
                    type="text"
                    value={formData.bedrift}
                    onChange={(e) => update("bedrift", e.target.value)}
                    className="w-full border border-zinc-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="Bedriftsnavn"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                    E-post <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.epost}
                    onChange={(e) => update("epost", e.target.value)}
                    className="w-full border border-zinc-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="din@epost.no"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefon}
                    onChange={(e) => update("telefon", e.target.value)}
                    className="w-full border border-zinc-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="+47 00 00 00 00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  Hvilken tjeneste gjelder henvendelsen?
                </label>
                <select
                  value={formData.tjeneste}
                  onChange={(e) => update("tjeneste", e.target.value)}
                  className="w-full border border-zinc-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                >
                  <option value="">Velg tjeneste</option>
                  <option>Fallsikring</option>
                  <option>Arbeid i høyden</option>
                  <option>Rope Access</option>
                  <option>Redningssett og redningsberedskap</option>
                  <option>Actsafe Taumoped</option>
                  <option>Redningstjenester</option>
                  <option>Kurs og opplæring</option>
                  <option>Inspeksjon</option>
                  <option>Vedlikehold</option>
                  <option>Risikoanalyse</option>
                  <option>Annet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  Melding <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.melding}
                  onChange={(e) => update("melding", e.target.value)}
                  className="w-full border border-zinc-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                  placeholder="Beskriv ditt prosjekt eller behov..."
                />
              </div>

              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="samtykke"
                  checked={formData.samtykke}
                  onChange={(e) => update("samtykke", e.target.checked)}
                  className="mt-1 accent-orange-500"
                />
                <label htmlFor="samtykke" className="text-sm text-zinc-500">
                  Jeg godtar at ABC Sikkerhet lagrer mine opplysninger for å besvare min henvendelse.{" "}
                  <a href="/personvern" className="text-orange-500 hover:underline">
                    Les vår personvernerklæring
                  </a>
                  .
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === "sending" || !formData.samtykke || !formData.navn || !formData.epost || !formData.melding}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-zinc-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sender...
                  </>
                ) : (
                  "Send henvendelse"
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
