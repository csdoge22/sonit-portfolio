import { motion } from 'framer-motion'

export default function TimelineItem({ date, title, subtitle, description, isEven = false }) {
  return (
    <div className={`relative py-8 ${isEven ? 'md:pl-8 md:pr-0' : 'md:pl-0 md:pr-8'}`}>
      {/* Timeline dot */}
      <div className="absolute top-8 left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-dark-bg border-4 border-primary z-10"></div>
      
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-[rgba(25,27,60,0.7)] border border-glass-border rounded-xl p-6 ml-0 md:ml-8 transition-all duration-300 hover:border-glass-highlight hover:shadow-secondary"
      >
        <div className="text-primary font-semibold mb-2">{date}</div>
        <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-2">{title}</h3>
        <div className="text-text-tertiary font-medium mb-4">{subtitle}</div>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </motion.div>
    </div>
  )
}