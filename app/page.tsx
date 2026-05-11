import { Hero } from '@/components/sections/hero'
import { ServicesGrid } from '@/components/sections/services-grid'
import { Stats } from '@/components/sections/stats'
import { WhyUs } from '@/components/sections/why-us'
import { Certifications } from '@/components/sections/certifications'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQPreview } from '@/components/sections/faq-preview'
import { BlogPreview } from '@/components/sections/blog-preview'
import { CTA } from '@/components/sections/cta'
import { JsonLd } from '@/components/seo/json-ld'

export default function HomePage() {
  return (
    <>
      <JsonLd type="organization" />
      <JsonLd type="localBusiness" />
      <Hero />
      <Stats />
      <ServicesGrid />
      <WhyUs />
      <Certifications />
      <Testimonials />
      <FAQPreview />
      <BlogPreview />
      <CTA />
    </>
  )
}
