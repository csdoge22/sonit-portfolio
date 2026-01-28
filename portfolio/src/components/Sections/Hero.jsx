import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto px-4"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-space-grotesk text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-text-primary via-primary to-text-primary bg-[200%_auto] animate-shine bg-clip-text text-transparent tracking-tighter leading-tight"
        >
          Sonit Ambashta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-text-secondary text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Computer Science student specializing in AI/ML, cloud architecture, 
          and full-stack development. Passionate about building intelligent 
          systems that solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8, type: 'spring', damping: 10 }}
          className="relative w-64 h-64 md:w-72 md:h-72 mx-auto mb-12"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse opacity-30 blur-xl" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20 animate-float">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Sonit Ambashta"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/280x280/0a0c2e/02eeff?text=SA'
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}