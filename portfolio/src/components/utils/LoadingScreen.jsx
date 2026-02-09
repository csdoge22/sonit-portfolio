import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 10 }}
            className="mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text font-space-grotesk text-5xl font-bold text-transparent"
          >
            SA
          </motion.div>

          <div className="mx-auto h-1 w-48 overflow-hidden rounded-full bg-white/10">
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
  );
}
