import { useState, useEffect } from 'react'

const sections = ['home', 'education', 'projects', 'experience', 'skills']

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Adjust for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const sectionElement = document.getElementById(sectionId)
        
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop
          
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeSection
}