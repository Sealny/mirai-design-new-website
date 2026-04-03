import dynamic from 'next/dynamic'
import Footer from '@/components/layout/Footer'
import SocialProof from '@/components/sections/SocialProof'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import CtaBlock from '@/components/sections/CtaBlock'
import Pricing from '@/components/sections/Pricing'

// Dynamically import the hero with SSR disabled (Three.js requires browser APIs)
const EtherealBeamsHero = dynamic(
  () => import('@/components/ui/ethereal-beams-hero'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      {/* Note: EtherealBeamsHero includes its own glassmorphic navbar */}
      <main>
        <EtherealBeamsHero />
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
