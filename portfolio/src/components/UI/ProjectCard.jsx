import { motion } from 'framer-motion'
import TechTag from './TechTag'

export default function ProjectCard({ title, description, technologies, link }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-[rgba(25,27,60,0.7)] border border-glass-border rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:border-primary/40 hover:shadow-secondary relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      
      <h3 className="font-space-grotesk text-2xl font-bold text-primary mb-4 group-hover:text-text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-text-secondary mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}
      </div>
      
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-medium inline-flex items-center gap-2 mt-auto group/link"
        whileHover={{ x: 5 }}
      >
        View Project →
        <span className="group-hover/link:translate-x-1 transition-transform">↗</span>
      </motion.a>
    </motion.div>
  )
}