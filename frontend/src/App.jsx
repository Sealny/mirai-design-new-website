import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import useGeoLanguage from './hooks/useGeoLanguage'
import { measurePerformance, lazyLoadImages, preloadCriticalResources } from './utils/performance'

// Lazy load route components
const Work = lazy(() => import('./pages/Work'))
const Packages = lazy(() => import('./pages/Packages'))
const Process = lazy(() => import('./pages/Process'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-accent-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function AppContent() {
  useGeoLanguage()
  
  useEffect(() => {
    // Initialize performance monitoring
    measurePerformance();
    lazyLoadImages();
    preloadCriticalResources();
    
    // Remove loading spinner when app is ready
    const loadingSpinner = document.querySelector('.loading-spinner');
    if (loadingSpinner) {
      loadingSpinner.style.display = 'none';
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-bg-page text-text-primary font-inter relative">
      {/* Global grid background - unified visual language */}
      <div className="grid-global" aria-hidden="true" />
      
      <ScrollToTop />
      <Header />
      <main className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/process" element={<Process />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
