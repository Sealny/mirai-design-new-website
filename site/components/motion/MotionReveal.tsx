'use client'

/**
 * MotionReveal — reusable scroll-triggered entrance animation.
 *
 * Pattern: opacity 0→1 + translateY 20px→0, easeOut, 0.45s
 * Respects prefers-reduced-motion automatically.
 *
 * Usage:
 *   <MotionReveal>…children…</MotionReveal>
 *   <MotionReveal delay={0.16}>…staggered child…</MotionReveal>
 */

import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

type Props = {
  as?: keyof React.JSX.IntrinsicElements
  delay?: number
  duration?: number
  y?: number
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  role?: string
}

export default function MotionReveal({
  as = 'div',
  delay = 0,
  duration = 0.45,
  y = 20,
  children,
  className,
  style,
  role,
}: Props) {
  const reduced = useReducedMotion()

  // Cast to any to avoid complex Framer Motion generic constraint issues
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = (motion as any)[as] ?? motion.div

  return (
    <Tag
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: reduced ? 0.15 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={style}
      role={role}
    >
      {children}
    </Tag>
  )
}
