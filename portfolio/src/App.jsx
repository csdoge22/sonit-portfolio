import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Sections/Hero'
import Education from './components/Sections/Education'
import Projects from './components/Sections/Projects'
import Experience from './components/Sections/Experience'
import Skills from './components/Sections/Skills'
import Footer from './components/Layout/Footer'
import BackToTop from './components/Layout/BackToTop'
import LoadingScreen from './components/utils/LoadingScreen'
import useActiveSection from './hooks/useActionSection'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const activeSection = useActiveSection()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg to-dark-bg2 text-text-primary font-montserrat overflow-x-hidden relative">
      {/* Background radial gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(2,238,255,0.08)_0%,transparent_25%),radial-gradient(circle_at_90%_80%,rgba(123,97,255,0.1)_0%,transparent_25%),radial-gradient(circle_at_50%_50%,rgba(2,238,255,0.05)_0%,transparent_35%)] pointer-events-none z-[-2]" />
      
      <Navbar activeSection={activeSection} />
      
      <main className="pt-18">
        <Hero />
        <Education />
        <Projects />
        <Experience />
        <Skills />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App