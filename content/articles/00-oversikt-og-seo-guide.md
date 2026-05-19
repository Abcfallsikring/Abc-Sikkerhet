# ABC Fallsikring AS – Blogginnlegg og SEO-oversikt

## 10 Ferdige blogginnlegg

| # | Filnavn | Tittel | Primære søkeord |
|---|---|---|---|
| 1 | 01-actsafe-taumoped-guide.md | ActSafe Taumoped – Den komplette guiden | actsafe taumoped, taumoped, motorisert klatring |
| 2 | 02-fallsikring-regelverk-norge.md | Fallsikring på arbeidsplassen | fallsikring, arbeid i høyden, regelverk, HMS |
| 3 | 03-rope-access-industriell-klatring.md | Rope Access – Industriell klatring | rope access, industriell klatring, IRATA |
| 4 | 04-wiresystem-taksikring.md | Wiresystem og taksikring | wiresystem, taksikring, ankerpunkt |
| 5 | 05-fjellsikring-steinsprang.md | Fjellsikring – Bratte skjæringer | fjellsikring, steinsprang, fjellnett |
| 6 | 06-stolpekurs-ns9610.md | Stolpekurs NS 9610 | stolpekurs, NS 9610, kurs arbeid i høyden |
| 7 | 07-redningssett-arbeid-i-hoyden.md | Redningssett for arbeid i høyden | redningssett, suspensjons trauma, beredskapsplan |
| 8 | 08-inspeksjon-fallsikringsutstyr.md | Inspeksjon av fallsikringsutstyr | inspeksjon fallsikring, kontroll sele, vedlikehold |
| 9 | 09-skylotec-fallsikringsutstyr.md | Skylotec fallsikringsutstyr | skylotec, fallsele, fallsikringsutstyr |
| 10 | 10-fallsikring-vindkraft-taumoped.md | Fallsikring i vindkraft | vindkraft fallsikring, taumoped vindturbin |

---

## Slik legger du dette inn i Next.js

### Alternativ A – MDX (anbefalt)
Installer `next-mdx-remote` eller `@next/mdx` og legg filene i `/content/blogg/`. Opprett en dynamisk side på `/blogg/[slug]/page.tsx`.

### Alternativ B – Database
Kopier innholdet inn i et CMS som Sanity, Contentful eller Notion.

### Alternativ C – Statiske filer
Legg filene i `/public/blogg/` og bruk `gray-matter` + `remark` til å parse dem.

---

## SEO-metadata for hvert innlegg

For hvert blogginnlegg, legg til denne metadata i Next.js:

```tsx
// Eksempel for innlegg 1
export const metadata = {
  title: "ActSafe Taumoped – Den komplette guiden | ABC Fallsikring AS",
  description: "Alt du trenger å vite om ActSafe taumopeder: modeller, bruk, kurs og vedlikehold. ABC Fallsikring AS er autorisert forhandler i Norge.",
  keywords: "actsafe taumoped, taumoped, motorisert klatring, acx taumoped, icx taumoped",
  openGraph: {
    title: "ActSafe Taumoped – Den komplette guiden",
    description: "Alt du trenger å vite om ActSafe taumopeder...",
    url: "https://www.abcfallsikring.no/blogg/actsafe-taumoped-guide",
  }
}
```

---

## Ytterligere SEO-tips for å dominere søkeresultatene

### 1. Google Search Console
Registrer siden på search.google.com/search-console og verifiser domenet. Submit sitemap.

### 2. Google Business Profile
Oppdater med bilder, åpningstider, tjenester og regelmessige innlegg. Be fornøyde kunder om anmeldelser.

### 3. Strukturerte data (schema.org)
Legg til Article-schema for hvert blogginnlegg:
```json
{
  "@type": "Article",
  "headline": "ActSafe Taumoped – Den komplette guiden",
  "author": {"@type": "Organization", "name": "ABC Fallsikring AS"},
  "publisher": {"@type": "Organization", "name": "ABC Fallsikring AS"},
  "datePublished": "2026-05-19"
}
```

### 4. Interne lenker
Lenk blogginnleggene til hverandre og til tjenestesidene. Google liker nettsteder med god intern lenkestruktur.

### 5. Bildealttekster
Alle bilder skal ha beskrivende alt-tekster med relevante søkeord.

### 6. Sidehastighet
Google rangerer raske sider høyere. Optimaliser bilder (WebP-format, lazy loading).

### 7. Lokal SEO
Legg til "Tønsberg", "Vestfold", "Norge" i innhold der det er naturlig. Dette hjelper for lokale søk.

---

*Produsert av ABC Fallsikring AS – Mai 2026*
