import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { Concept } from "@/components/site/concept"
import { Works } from "@/components/site/works"
import { Products } from "@/components/site/products"
import { Strengths } from "@/components/site/strengths"
import { Voices } from "@/components/site/voices"
import { Flow } from "@/components/site/flow"
import { Faq } from "@/components/site/faq"
import { Contact } from "@/components/site/contact"
import { SiteFooter } from "@/components/site/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Concept />
        <Works />
        <Products />
        <Strengths />
        <Voices />
        <Flow />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
