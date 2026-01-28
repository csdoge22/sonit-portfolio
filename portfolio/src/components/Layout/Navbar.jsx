import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import clsx from 'clsx'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-glass-border',
        scrolled ? 'bg-dark-bg2/95 backdrop-blur-md shadow-primary h-16' : 'bg-[#0a0c2e]/92 backdrop-blur-md shadow-primary h-18'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <motion.div
            className="font-space-grotesk font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sonit Ambashta
          </motion.div>

          <ul className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + navItems.indexOf(item) * 0.1 }}
              >
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={clsx(
                    'relative px-4 py-2 rounded-lg font-medium text-sm cursor-pointer transition-all',
                    activeSection === item.id
                      ? 'text-primary bg-primary/10 shadow-lg shadow-primary/20'
                      : 'text-text-primary hover:text-primary'
                  )}
                >
                  {item.label}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}