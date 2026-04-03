'use client'

import dynamic from 'next/dynamic'

const EtherealBeamsHero = dynamic(() => import('@/components/ui/ethereal-beams-hero'), { ssr: false })

export function ClientHero() {
  return <EtherealBeamsHero />
}
