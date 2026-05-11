'use client'

import { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="h-16 w-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="h-8 w-8 text-success" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Takk for din henvendelse!</h3>
        <p className="text-muted-foreground">
          Vi har mottatt meldingen din og vil ta kontakt innen 24 timer.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Navn *</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Ditt fulle navn" 
            required 
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Bedrift</Label>
          <Input 
            id="company" 
            name="company" 
            placeholder="Bedriftsnavn" 
            className="bg-background"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">E-post *</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="din@epost.no" 
            required 
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon *</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            placeholder="+47 XXX XX XXX" 
            required 
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Hvilken tjeneste gjelder henvendelsen?</Label>
        <select 
          id="service" 
          name="service"
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Velg tjeneste</option>
          <option value="fallsikring">Fallsikring</option>
          <option value="arbeid-i-hoyden">Arbeid i høyden</option>
          <option value="rope-access">Rope Access</option>
          <option value="redningstjenester">Redningstjenester</option>
          <option value="kurs">Kurs og opplæring</option>
          <option value="inspeksjon">Inspeksjon</option>
          <option value="vedlikehold">Vedlikehold</option>
          <option value="risikoanalyse">Risikoanalyse</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Melding *</Label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Beskriv ditt prosjekt eller spørsmål..." 
          required 
          rows={5}
          className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <input 
          type="checkbox" 
          id="consent" 
          name="consent" 
          required
          className="mt-1 h-4 w-4 rounded border-input"
        />
        <Label htmlFor="consent" className="text-sm text-muted-foreground font-normal">
          Jeg godtar at Høyde Sikkerhet lagrer mine opplysninger for å kunne besvare min henvendelse. 
          Les vår <a href="/personvern" className="text-primary hover:underline">personvernerklæring</a>.
        </Label>
      </div>

      <Button type="submit" size="lg" className="w-full glow-yellow" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sender...
          </>
        ) : (
          <>
            Send henvendelse
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  )
}
