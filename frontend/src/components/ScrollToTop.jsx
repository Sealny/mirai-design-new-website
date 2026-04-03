import { useEnhancedScrollRestoration } from '../hooks/useScrollRestoration'

/**
 * ScrollToTop component that automatically handles scroll position
 * when navigating between routes. This fixes the common SPA issue where
 * scroll position persists between page navigations.
 * 
 * Features:
 * - Smooth scroll to top on new navigation
 * - Hash-based navigation support (e.g., #section)
 * - Preserves scroll position for browser back/forward buttons
 * - Handles anchor links within pages
 */
export default function ScrollToTop() {
  useEnhancedScrollRestoration()
  return null
}