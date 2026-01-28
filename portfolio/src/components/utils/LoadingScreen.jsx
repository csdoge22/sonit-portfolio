import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-dark-bg z-50 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 10 }}
            className="font-space-grotesk text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8"
          >
            SA
          </motion.div>
          
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-primary to-secondary"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}