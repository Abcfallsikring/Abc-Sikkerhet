'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { searchFAQs, type FAQ } from '@/lib/faq'

export function FAQSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<FAQ[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.length >= 2) {
      const searchResults = searchFAQs(value)
      setResults(searchResults)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
  }

  return (
    <div className="relative max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Søk i spørsmål og svar..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-12 pr-10 h-12 bg-background border-border"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl max-h-96 overflow-y-auto z-50">
          {results.slice(0, 5).map((faq) => (
            <a
              key={faq.id}
              href={`#${faq.category.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setIsOpen(false)}
              className="block p-4 hover:bg-secondary transition-colors border-b border-border last:border-b-0"
            >
              <p className="font-medium text-foreground text-sm mb-1 line-clamp-1">
                {faq.question}
              </p>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {faq.answer}
              </p>
              <span className="inline-block mt-2 text-xs text-primary">
                {faq.category}
              </span>
            </a>
          ))}
          {results.length > 5 && (
            <div className="p-4 text-center text-sm text-muted-foreground">
              +{results.length - 5} flere resultater
            </div>
          )}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl p-4 z-50">
          <p className="text-sm text-muted-foreground text-center">
            Ingen resultater funnet for &ldquo;{query}&rdquo;
          </p>
        </div>
      )}
    </div>
  )
}
