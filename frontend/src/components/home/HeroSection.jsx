import { useState, useEffect, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Zap, Smartphone, Target, TrendingUp } from 'lucide-react'
import { getHeroSlides } from '../../content/assets'

// Fallback images from Unsplash (reliable CDN)
const FALLBACK_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80&fm=webp',
    alt: 'Modern hair salon website',
    niche: 'Hair Salon',
    city: 'Warsaw',
  },
  {
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&q=80&fm=webp',
    alt: 'Auto repair shop website',
    niche: 'Auto Repair',
    city: 'Vienna',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fm=webp',
    alt: 'SaaS company website',
    niche: 'SaaS Company',
    city: 'Berlin',
  },
]

export default function HeroSection() {
  const { t } = useTranslation()
  const [activeDemo, setActiveDemo] = useState(0)
  const [loadedImages, setLoadedImages] = useState(new Set())
  const [failedImages, setFailedImages] = useState(new Set())

  // Memoize hero slides to prevent recalculation
  const heroSlides = useMemo(() => getHeroSlides(), [])
  
  // Build demos array with fallback support
  const demos = useMemo(() => {
    const slides = heroSlides.length > 0 ? heroSlides : FALLBACK_SLIDES
    return slides.map((slide, index) => ({
      ...slide,
      // Use fallback if original image failed to load
      image: failedImages.has(slide.image) 
        ? FALLBACK_SLIDES[index % FALLBACK_SLIDES.length].image 
        : slide.image,
      label: t('hero.demo_label') || 'Demo preview',
    }))
  }, [heroSlides, failedImages, t])

  // Preload images for smoother transitions
  useEffect(() => {
    demos.forEach((demo, index) => {
      if (loadedImages.has(demo.image) || failedImages.has(demo.image)) return
      
      const img = new Image()
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, demo.image]))
      }
      img.onerror = () => {
        setFailedImages(prev => new Set([...prev, demo.image]))
      }
      img.src = demo.image
    })
  }, [demos, loadedImages, failedImages])

  // Auto-rotate demos
  useEffect(() => {
    if (demos.length === 0) return
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [demos.length])

  // Handle image load error
  const handleImageError = useCallback((imageUrl) => {
    setFailedImages(prev => new Set([...prev, imageUrl]))
  }, [])

  const proofItems = [
    { icon: Zap, text: t('proof.faster_load') },
    { icon: Smartphone, text: t('proof.better_mobile') },
    { icon: Target, text: t('proof.clearer_cta') },
    { icon: TrendingUp, text: t('proof.more_enquiries') },
  ]

  // Current slide with fallback - ensure it's always valid
  const currentSlide = demos[activeDemo] || demos[0] || FALLBACK_SLIDES[0]

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 lg:pt-20">
      <div className="container-main relative z-10 py-8 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-20 lg:items-center">
          
          {/* Hero Visual - First on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main mockup frame */}
              <div className="relative bg-bg-card rounded-xl lg:rounded-2xl border border-border-subtle p-3 lg:p-4 shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 h-7 bg-bg-elevated rounded-lg mx-4 flex items-center px-3">
                    <span className="text-xs text-text-muted">miraidesign.studio</span>
                  </div>
                </div>
                
                {/* Rotating Demo Images - EXACTLY 3 slides */}
                <div className="aspect-[16/10] bg-bg-elevated rounded-lg overflow-hidden relative">
                  {/* Loading placeholder */}
                  {!loadedImages.has(currentSlide.image) && !failedImages.has(currentSlide.image) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-bg-elevated">
                      <div className="w-8 h-8 border-[3px] border-accent-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeDemo}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ willChange: 'opacity' }}
                      className="absolute inset-0"
                    >
                      {currentSlide.image && (
                        <img
                          src={currentSlide.image}
                          alt={currentSlide.alt}
                          className="w-full h-full object-cover"
                          style={{ 
                            objectPosition: 'center 20%',
                            opacity: loadedImages.has(currentSlide.image) ? 1 : 0,
                            transition: 'opacity 0.3s ease'
                          }}
                          loading="eager"
                          onLoad={() => setLoadedImages(prev => new Set([...prev, currentSlide.image]))}
                          onError={() => handleImageError(currentSlide.image)}
                        />
                      )}
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-page/70 via-transparent to-transparent" />
                      
                      {/* Category label - top left to avoid clashing with indicators */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-accent-primary text-white text-xs font-medium rounded-full">
                          {currentSlide.niche}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Slide indicators - always shows 3 dots */}
                  <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                    {demos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveDemo(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === activeDemo 
                            ? 'bg-accent-primary w-6' 
                            : 'bg-white/40 hover:bg-white/60 w-2'
                        }`}
                        aria-label={`View demo ${i + 1}: ${demos[i]?.niche || 'Demo'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stats - hidden on mobile */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ willChange: 'transform' }}
                className="hidden lg:block absolute -top-6 -right-6 bg-bg-card border border-border-subtle rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Page Speed</div>
                    <div className="text-lg font-bold text-green-400">98</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ willChange: 'transform' }}
                className="hidden lg:block absolute -bottom-4 -left-4 bg-bg-card border border-border-subtle rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Mobile</div>
                    <div className="text-sm font-semibold">Optimized</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Headline, Subheadline, CTAs - Second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="order-2 lg:order-1 mt-4 lg:mt-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4 lg:mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-5 lg:mb-8 max-w-xl leading-relaxed">
              {t('hero.subheadline')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 lg:gap-4 mb-6 lg:mb-12">
              <a
                href="https://calendly.com/mateusz-wieckowski-okm6/30-minute-meeting-with-mirai-design"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-accent-primary text-white text-sm sm:text-base font-semibold rounded-full hover:bg-accent-hover transition-all hover:-translate-y-0.5"
              >
                {t('hero.cta_demo')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 border border-border-medium text-text-primary text-sm sm:text-base font-semibold rounded-full hover:bg-bg-elevated transition-all hover:-translate-y-0.5"
              >
                {t('hero.cta_packages')}
              </Link>
            </div>

            {/* Desktop-only proof bar */}
            <div className="hidden lg:block">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-4">
                {t('proof.label')}
              </p>
              <div className="grid grid-cols-4 gap-4">
                {proofItems.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <Icon className="w-4 h-4 text-accent-primary" />
                      <span>{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Mobile-only Proof Bar - Last on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="order-3 lg:hidden"
          >
            <p className="text-xs text-text-muted uppercase tracking-wider mb-3">
              {t('proof.label')}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {proofItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary"
                  >
                    <Icon className="w-3.5 h-3.5 text-accent-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
