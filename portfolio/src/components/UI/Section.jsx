import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Section({ id, title, subtitle, children, className = '' }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-20 px-4 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-space-grotesk text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative"
          >
            {title}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </motion.h2>
        )}
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-text-secondary text-xl md:text-2xl text-center max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        
        <div className="mt-8">
          {children}
        </div>
      </motion.div>
    </section>
  )
}