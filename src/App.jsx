import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

import Header from './components/Header'
import Hero from './components/Hero'
import ProcessBar from './components/ProcessBar'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId = 0
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}

export default function App() {
  useSmoothScroll()

  // Always start at the top of the page on mount/refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="relative min-h-[100dvh] w-full">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ProcessBar />
          <AboutUs />
          <Services />
          <Features />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
      <div className="grain-overlay" aria-hidden />
    </div>
  )
}