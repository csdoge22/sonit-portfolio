import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-dark-bg2 to-dark-bg3 border-t border-glass-border pt-10 pb-6 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(123,97,255,0.08)_0%,transparent_70%)] opacity-30" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space-grotesk text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I'm always open to discussing new projects, research opportunities, and collaborations. 
          Feel free to reach out through any of my social channels!
        </motion.p>
        
        <div className="flex justify-center gap-6 mb-8">
          {['GH', 'LI', 'YT', 'TW'].map((platform, index) => (
            <motion.a
              key={platform}
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="w-12 h-12 rounded-full bg-white/8 flex items-center justify-center text-primary text-lg font-bold border border-glass-border hover:bg-primary/15 hover:text-text-primary hover:shadow-glow transition-all"
              aria-label={platform}
            >
              {platform}
            </motion.a>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-text-secondary text-sm"
        >
          © Sonit Ambashta, 2026 | Computer Science Portfolio
        </motion.p>
      </div>
    </footer>
  )
}