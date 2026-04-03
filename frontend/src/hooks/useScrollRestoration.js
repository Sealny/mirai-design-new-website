import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/**
 * Comprehensive scroll restoration hook that handles:
 * - Automatic scroll to top on navigation
 * - Smooth scrolling behavior
 * - Browser back/forward button support
 * - Hash-based navigation support
 * - Preserving scroll position for back navigation when desired
 */
export function useScrollRestoration() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const previousPath = useRef(location.pathname)
  const scrollPositions = useRef(new Map())
  const isInitialLoad = useRef(true)

  useEffect(() => {
    const currentPath = location.pathname
    const isSamePath = currentPath === previousPath.current
    const hasHash = location.hash

    // Don't scroll if it's the same path (e.g., just hash change)
    if (isSamePath) {
      // Handle hash navigation
      if (hasHash) {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      return
    }

    // Handle browser back/forward navigation
    if (navigationType === 'POP') {
      // Check if we have a saved scroll position for this path
      const savedPosition = scrollPositions.current.get(currentPath)
      if (savedPosition !== undefined) {
        // Restore saved position with a small delay for page render
        setTimeout(() => {
          window.scrollTo({
            top: savedPosition,
            left: 0,
            behavior: 'instant' // Instant for back/forward navigation
          })
        }, 100)
        return
      }
    }

    // Save current scroll position before navigating away
    if (navigationType === 'PUSH') {
      scrollPositions.current.set(previousPath.current, window.pageYOffset)
    }

    // Scroll to top for new navigation
    // Use smooth scrolling for better UX, but not on initial load
    const behavior = isInitialLoad.current ? 'instant' : 'smooth'
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior
    })

    // Fallback for browsers with poor smooth scroll support
    setTimeout(() => {
      if (window.pageYOffset > 5) {
        window.scrollTo(0, 0)
      }
    }, 50)

    previousPath.current = currentPath
    isInitialLoad.current = false
  }, [location, navigationType])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      scrollPositions.current.clear()
    }
  }, [])
}

/**
 * Enhanced version that also handles anchor links within pages
 */
export function useEnhancedScrollRestoration() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const hasScrolledToHash = useRef(false)

  useEffect(() => {
    // Handle hash-based navigation
    if (location.hash && !hasScrolledToHash.current) {
      const element = document.querySelector(location.hash)
      if (element) {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          })
          hasScrolledToHash.current = true
        }, 100)
        return
      }
    }

    // Reset hash flag when navigating to a new page without hash
    if (!location.hash) {
      hasScrolledToHash.current = false
    }

    // Use the basic scroll restoration for non-hash navigation
    if (!location.hash) {
      // Scroll to top with smooth behavior
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: navigationType === 'POP' ? 'instant' : 'smooth'
      })

      // Fallback
      setTimeout(() => {
        if (window.pageYOffset > 5) {
          window.scrollTo(0, 0)
        }
      }, 50)
    }
  }, [location, navigationType])
}