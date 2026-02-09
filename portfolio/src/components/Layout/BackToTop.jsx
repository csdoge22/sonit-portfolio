import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-glass-border bg-glass-bg text-xl text-primary shadow-primary"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        y: -2,
        scale: 1.1,
        backgroundColor: 'rgba(2, 238, 255, 0.15)',
        color: '#ffffff',
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Back to top"
    >
      ↑
    </motion.button>
  );
}
