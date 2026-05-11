'use client'

import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react'

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold text-foreground mt-12 mb-6 first:mt-0" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3 scroll-mt-24" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg font-semibold text-foreground mt-6 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const href = props.href || ''
    const isExternal = href.startsWith('http')
    
    if (isExternal) {
      return (
        <a 
          className="text-primary hover:underline" 
          target="_blank" 
          rel="noopener noreferrer" 
          {...props} 
        />
      )
    }
    
    return <Link href={href} className="text-primary hover:underline" {...props} />
  },
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-card rounded-r-lg italic text-muted-foreground" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-[#0a0a0a] p-4 rounded-lg overflow-x-auto mb-4 text-sm" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse border border-border" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="border border-border bg-muted px-4 py-2 text-left font-semibold text-foreground" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border border-border px-4 py-2 text-muted-foreground" {...props} />
  ),
  hr: () => <hr className="border-border my-8" />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="rounded-lg my-6 w-full" {...props} alt={props.alt || ''} />
  ),
  // Custom components
  Callout: ({ type = 'info', children }: { type?: 'info' | 'warning' | 'success' | 'error'; children: React.ReactNode }) => {
    const styles = {
      info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: Info, iconColor: 'text-blue-500' },
      warning: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', icon: AlertTriangle, iconColor: 'text-yellow-500' },
      success: { bg: 'bg-green-500/10', border: 'border-green-500/30', icon: CheckCircle, iconColor: 'text-green-500' },
      error: { bg: 'bg-red-500/10', border: 'border-red-500/30', icon: XCircle, iconColor: 'text-red-500' },
    }
    const style = styles[type]
    const Icon = style.icon

    return (
      <div className={`${style.bg} ${style.border} border rounded-lg p-4 my-6 flex gap-3`}>
        <Icon className={`h-5 w-5 ${style.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="text-foreground text-sm">{children}</div>
      </div>
    )
  },
  FAQ: ({ question, answer }: { question: string; answer: string }) => (
    <div className="bg-card border border-border rounded-lg p-4 my-4">
      <h4 className="font-semibold text-foreground mb-2">{question}</h4>
      <p className="text-muted-foreground text-sm">{answer}</p>
    </div>
  ),
}

interface MDXContentProps {
  content: string
}

export function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose-industrial max-w-none">
      <MDXRemote source={content} components={components} />
    </div>
  )
}
