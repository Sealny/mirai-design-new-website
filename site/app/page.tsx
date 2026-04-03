import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Pricing from '@/components/sections/Pricing'
import About from '@/components/sections/About'
import Footer from '@/components/layout/Footer'
import { ClientHero } from '@/components/providers/client-hero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientHero />
      <Services />
      <Portfolio />
      <Pricing />
      <About />
      <Footer />
    </main>
  )
}
