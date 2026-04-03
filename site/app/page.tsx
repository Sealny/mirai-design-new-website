import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import CtaBlock from '@/components/sections/CtaBlock'
import Pricing from '@/components/sections/Pricing'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <Pricing />
        <Portfolio />
        <About />
        <CtaBlock />
      </main>
      <Footer />
    </>
  )
}
