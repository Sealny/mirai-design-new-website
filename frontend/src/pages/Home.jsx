import HeroSection from '../components/home/HeroSection'
import TrustSection from '../components/home/TrustSection'
import WhatWeBuild from '../components/home/WhatWeBuild'
import BeforeAfter from '../components/home/BeforeAfter'
import ProcessSection from '../components/home/ProcessSection'
import FeaturedDemos from '../components/home/FeaturedDemos'
import FAQSection from '../components/home/FAQSection'
import FinalCTA from '../components/home/FinalCTA'

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <TrustSection />
      <WhatWeBuild />
      <BeforeAfter />
      <ProcessSection />
      <FeaturedDemos />
      <FAQSection />
      <FinalCTA />
    </div>
  )
}