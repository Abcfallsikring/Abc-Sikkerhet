import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fallsikringsele.no'
  const now = new Date()

  return [
    // Hovedsider
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/om-oss`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Bruksområder (Kategori-siloer)
    { url: `${baseUrl}/bruksomrade/tilkomstteknikk`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/bruksomrade/takarbeid`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/bruksomrade/lukket-rom-og-tank`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/bruksomrade/mast-og-stolpe`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/bruksomrade/redning-og-evakuering`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // Merker
    { url: `${baseUrl}/merker/petzl`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/merker/miller`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/merker/actsafe`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/merker/msa`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Guider, Lover og FAQ (AI-magnetene)
    { url: `${baseUrl}/guide/hvordan-velge-riktig-fallsikringsele`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/guide/innstilling-og-tilpasning-av-sele`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/guide/hva-er-hengetraume`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/regelverk/krav-til-arlig-kontroll-og-inspeksjon`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/regelverk/levetid-og-kassasjon-av-fallsikringsutstyr`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/faq/ofte-stilte-sporsmal-om-fallsikringsseler`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]
}
