import { motion } from 'framer-motion'

export default function SkillCategory({ title, skills }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-[rgba(25,27,60,0.7)] border border-glass-border rounded-xl p-6 text-center transition-all duration-300 hover:border-glass-highlight hover:shadow-secondary"
    >
      <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-6 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
      </h3>
      
      {/* FIXED: More responsive grid with better mobile handling */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(2, 238, 255, 0.1)' }}
            className="bg-[rgba(30,32,68,0.7)] border border-glass-border rounded-lg py-2 px-3 font-medium transition-all duration-200 
                      flex items-center justify-center min-h-12
                      /* FIXED: Ensure text stays within bounds */
                      max-w-full
                      whitespace-normal
                      break-words
                      text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}